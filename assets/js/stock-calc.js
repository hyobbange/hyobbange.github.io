/*
 * 주식허니 웹 계산기. 계산식은 앱(hyobbange/stockhoney)의 cubit과 같다.
 *  - 평단가: lib/page/avg/cubit/avg_cubit.dart calc()
 *  - 평단가 목록(물타기): lib/page/avg_list/cubit/avg_list_cubit.dart calc()
 *  - 수익: lib/page/profit/cubit/profit_cubit.dart calc() (매도가 기준)
 */
(function (root) {
  'use strict';

  // ---- 계산 (화면과 무관, 테스트 가능) ----
  function average(ownedPrice, ownedNumber, buyPrice, buyNumber) {
    var vals = [ownedPrice, ownedNumber, buyPrice, buyNumber];
    for (var i = 0; i < vals.length; i++) if (vals[i] == null || !isFinite(vals[i])) return null;
    var number = ownedNumber + buyNumber;
    var cost = ownedPrice * ownedNumber + buyPrice * buyNumber;
    return { price: cost / number, number: number, cost: cost };
  }

  // sortType: 'owned' (보유가에 가까운 순, 앱 기본값) | 'buy' (매수가에 가까운 순)
  function averageList(ownedPrice, ownedNumber, targetPrice, difference, maxCount, sortType) {
    var results = [];
    if ([ownedPrice, ownedNumber, targetPrice, difference].some(function (v) { return v == null || !isFinite(v); })) return results;
    if (!(difference > 0) || ownedPrice === targetPrice) return results;
    maxCount = maxCount || 50;
    function item(base) {
      var required = (ownedPrice - base) * ownedNumber / (base - targetPrice);
      return { price: base, number: required, cost: targetPrice * required };
    }
    var base;
    if (ownedPrice > targetPrice) {            // 물타기: 평단가를 낮춤
      if (sortType === 'buy') { for (base = targetPrice + difference; base < ownedPrice && results.length < maxCount; base += difference) results.push(item(base)); }
      else { for (base = ownedPrice - difference; base > targetPrice && results.length < maxCount; base -= difference) results.push(item(base)); }
    } else {                                   // 불타기: 평단가를 높임
      if (sortType === 'buy') { for (base = targetPrice - difference; base > ownedPrice && results.length < maxCount; base -= difference) results.push(item(base)); }
      else { for (base = ownedPrice + difference; base < targetPrice && results.length < maxCount; base += difference) results.push(item(base)); }
    }
    return results;
  }

  function profit(ownedPrice, ownedNumber, sellPrice) {
    if ([ownedPrice, ownedNumber, sellPrice].some(function (v) { return v == null || !isFinite(v); })) return null;
    var each = sellPrice - ownedPrice;
    return { net: each * ownedNumber, rate: each / ownedPrice * 100 };
  }

  // 앱에는 없는 웹 전용 편의: 평단가 목록의 간격을 비워 두면 두 가격 차이에 맞춰 1·2·5 단위로 고른다.
  function autoDifference(a, b) {
    var gap = Math.abs(a - b) / 10;
    if (!(gap > 0)) return 1;
    var p = Math.pow(10, Math.floor(Math.log10(gap)));
    var m = gap / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  }

  var api = { average: average, averageList: averageList, profit: profit, autoDifference: autoDifference };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.StockCalc = api;

  // ---- 화면 ----
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', function () {
    var box = document.getElementById('stock-calc');
    if (!box) return;
    var locale = box.getAttribute('data-locale') || 'en';
    var digits = 2;
    function $(id) { return document.getElementById(id); }
    function num(id) {
      var v = ($(id).value || '').replace(/[,\s]/g, '');
      if (v === '') return null;
      var n = Number(v);
      return isFinite(n) ? n : null;
    }
    function fmt(n) {
      if (n == null || !isFinite(n)) return '–';
      return new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
    }
    function sign(n) { return n > 0 ? 'pos' : n < 0 ? 'neg' : ''; }

    // 탭
    var tabs = box.querySelectorAll('[role=tab]');
    function show(name) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === name;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        $('panel-' + t.getAttribute('data-tab')).hidden = !on;
      });
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.getAttribute('data-tab')); }); });

    // 보유 정보는 세 탭이 함께 쓴다
    var shared = ['own-price', 'own-number'];
    function syncOwned(src) {
      var p = src.getAttribute('data-own');
      box.querySelectorAll('[data-own="' + p + '"]').forEach(function (el) { if (el !== src) el.value = src.value; });
    }

    function update() {
      var op = num('avg-own-price'), on = num('avg-own-number');
      var r = average(op, on, num('avg-buy-price'), num('avg-buy-number'));
      $('avg-out-price').textContent = r ? fmt(r.price) : '–';
      $('avg-out-number').textContent = r ? fmt(r.number) : '–';
      $('avg-out-cost').textContent = r ? fmt(r.cost) : '–';

      var lp = num('list-own-price'), ln = num('list-own-number'), lt = num('list-buy-price');
      var diff = num('list-diff');
      var autoDiff = (lp != null && lt != null) ? autoDifference(lp, lt) : null;
      $('list-diff').placeholder = autoDiff != null ? fmt(autoDiff) : '';
      var rows = averageList(lp, ln, lt, diff != null ? diff : autoDiff, 50, $('list-sort').value);
      var body = $('list-body');
      body.innerHTML = '';
      rows.forEach(function (it) {
        var tr = document.createElement('tr');
        [it.number, it.cost, it.price].forEach(function (v) { var td = document.createElement('td'); td.textContent = fmt(v); tr.appendChild(td); });
        body.appendChild(tr);
      });
      $('list-empty').hidden = rows.length > 0;

      var p = profit(num('profit-own-price'), num('profit-own-number'), num('profit-sell-price'));
      var net = $('profit-out-net'), rate = $('profit-out-rate');
      net.textContent = p ? fmt(p.net) : '–'; net.className = 'calc-value ' + (p ? sign(p.net) : '');
      rate.textContent = p ? fmt(p.rate) + '%' : '–'; rate.className = 'calc-value ' + (p ? sign(p.rate) : '');
    }

    box.addEventListener('input', function (e) {
      if (e.target.hasAttribute('data-own')) syncOwned(e.target);
      update();
    });
    box.addEventListener('change', update);
    $('calc-digits').addEventListener('change', function () { digits = Number(this.value); update(); });
    box.querySelectorAll('[data-example]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ex = JSON.parse(b.getAttribute('data-example'));
        Object.keys(ex).forEach(function (id) { $(id).value = ex[id]; if ($(id).hasAttribute('data-own')) syncOwned($(id)); });
        update();
      });
    });
    update();
  });
})(this);
