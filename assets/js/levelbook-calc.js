/*
 * 야장 수첩 웹 계산기 (기고식 야장).
 * 계산·줄 상태 규칙은 앱 hyobbange/levelbook의 lib/page/sheet/cubit/sheet_cubit.dart를 그대로 옮겼다.
 * 앱처럼 소수를 정확히 계산한다 (Dart decimal 패키지 대신 BigInt 고정소수).
 */
(function (root) {
  'use strict';

  // ---- 정확한 소수 ----
  function D(text) {               // 문자열 → {v: BigInt, s: 소수 자리}, 실패하면 null
    if (typeof text !== 'string') return null;
    var t = text.trim();
    if (!/^[-+]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return null;
    var neg = t[0] === '-';
    t = t.replace(/^[-+]/, '');
    var parts = t.split('.');
    var frac = parts[1] || '';
    var v = BigInt((parts[0] || '0') + frac);
    return { v: neg ? -v : v, s: frac.length };
  }
  function align(a, b) {
    var s = Math.max(a.s, b.s);
    return [a.v * 10n ** BigInt(s - a.s), b.v * 10n ** BigInt(s - b.s), s];
  }
  function add(a, b) { var x = align(a, b); return { v: x[0] + x[1], s: x[2] }; }
  function sub(a, b) { var x = align(a, b); return { v: x[0] - x[1], s: x[2] }; }
  function eq(a, b) { var x = align(a, b); return x[0] === x[1]; }
  function str(a) {                // Dart Decimal.toString처럼 불필요한 0 없이
    var neg = a.v < 0n, v = neg ? -a.v : a.v, s = a.s;
    var digits = v.toString();
    while (digits.length <= s) digits = '0' + digits;
    var ip = digits.slice(0, digits.length - s), fp = s ? digits.slice(digits.length - s) : '';
    fp = fp.replace(/0+$/, '');
    var out = ip + (fp ? '.' + fp : '');
    return (neg && out !== '0' ? '-' : '') + out;
  }
  function parse(text) { var d = D(text); if (!d) throw new Error('parse'); return d; }

  // ---- 앱과 같은 열·줄 상태 ----
  var C = { no: 0, bs: 1, tp: 2, ip: 3, ih: 4, gh: 5, note: 6 };
  var S = { none: 'NONE', all: 'ALL', bsTpGh: 'BS_TP_GH', bsTp: 'BS_TP', bsGh: 'BS_GH', ip: 'IP', gh: 'GH' };
  var T = { bsDel: 2, bsInput: 3, tpDel: 4, tpInput: 5, ipDel: 6, ipInput: 7, ghDel: 10, ghInput: 11 };
  function inputType(col, text) {
    var id = col * 2 + (text === '' ? 0 : 1);
    return [2, 3, 4, 5, 6, 7, 10, 11].indexOf(id) >= 0 ? id : null;
  }
  function emptyRow(n) { return { texts: [String(n), '', '', '', '', '', ''], state: S.all }; }

  // 열마다 입력할 수 있는 줄 상태 (sheet_view.dart)
  var editable = {
    1: [S.all, S.bsTpGh, S.bsTp, S.bsGh],      // BS
    2: [S.all, S.bsTpGh, S.bsTp],              // TP
    3: [S.all, S.ip],                          // IP
    5: [S.all, S.bsTpGh, S.bsGh, S.gh]         // GH
  };
  function canEdit(row, col) { return (editable[col] || []).indexOf(row.state) >= 0; }

  function aboveIh(rows, i) {
    for (var k = i - 1; k >= 0; k--) { var t = rows[k].texts[C.ih]; if (t !== '') return t; }
    return '';
  }
  function stateWhenAll(hasUpperIh, col, text) {
    switch (inputType(col, text)) {
      case T.bsInput: return S.bsTpGh;
      case T.tpInput: return S.bsTp;
      case T.ipInput: return S.ip;
      case T.ghInput: return hasUpperIh ? S.gh : S.bsGh;
      default: return S.all;
    }
  }
  function stateFromBsTpGh(col, text) {
    switch (inputType(col, text)) {
      case T.bsDel: return S.all;
      case T.tpInput: return S.bsTp;
      case T.ghInput: return S.bsGh;
      default: return S.bsTpGh;
    }
  }

  function updateBelow(rows, start) {
    for (var i = start; i < rows.length; i++) {
      var r = rows[i], t = r.texts, up;
      try {
        if (r.state === S.bsTp) {
          up = aboveIh(rows, i);
          if (up !== '') {
            var gh = sub(parse(up), parse(t[C.tp]));
            t[C.gh] = str(gh);
            try { t[C.ih] = str(add(parse(t[C.bs]), gh)); } catch (e) { t[C.ih] = ''; }
          } else { t[C.ih] = ''; t[C.gh] = ''; }
        } else if (r.state === S.bsGh) {
          try {
            var g = parse(t[C.gh]);
            up = aboveIh(rows, i);
            if (up !== '') t[C.ip] = str(sub(parse(up), g));
            if (t[C.bs] !== '') t[C.ih] = str(add(parse(t[C.bs]), g));
          } catch (e) { t[C.ip] = ''; t[C.ih] = ''; }
        } else if (r.state === S.ip) {
          up = aboveIh(rows, i);
          t[C.gh] = up !== '' ? str(sub(parse(up), parse(t[C.ip]))) : '';
        } else if (r.state === S.gh) {
          up = aboveIh(rows, i);
          t[C.ip] = up !== '' ? str(sub(parse(up), parse(t[C.gh]))) : '';
        }
      } catch (e) {
        if (r.state === S.bsTp) { t[C.ih] = ''; t[C.gh] = ''; }
        else if (r.state === S.ip) t[C.gh] = '';
        else if (r.state === S.gh) t[C.ip] = '';
      }
    }
  }

  function bottomGh(rows) {
    for (var i = rows.length - 1; i >= 0; i--) if (rows[i].texts[C.gh] !== '') return rows[i].texts[C.gh];
    return '';
  }
  function check(rows) {
    var bs = { v: 0n, s: 0 }, tp = { v: 0n, s: 0 };
    rows.forEach(function (r) {
      var b = D(r.texts[C.bs]); if (b) bs = add(bs, b);
      var p = D(r.texts[C.tp]); if (p) tp = add(tp, p);
    });
    var left = sub(bs, tp);
    var out = { bs: str(bs), tp: str(tp), left: str(left), right: '', sign: '', ok: null };
    var first = D(rows.length ? rows[0].texts[C.gh] : ''), last = D(bottomGh(rows));
    if (first && last) {
      var right = sub(last, first);
      out.right = str(right);
      out.ok = rows.length > 2 && eq(left, right);
      out.sign = out.ok ? '=' : '≠';
    }
    return out;
  }

  // 한 칸을 바꾼다 (SheetCubit.change와 같은 순서)
  function change(rows, rowIndex, col, text) {
    var row = rows[rowIndex], t = row.texts, st = row.state, type;
    if (st === S.none) return;
    t[col] = text;
    switch (st) {
      case S.all:
        row.state = stateWhenAll(aboveIh(rows, rowIndex) !== '', col, text); break;
      case S.bsTpGh:
        row.state = stateFromBsTpGh(col, text); break;
      case S.bsTp:
        if (inputType(col, text) === T.tpDel) {
          row.state = t[C.bs] === '' ? S.all : S.bsTpGh; t[C.ih] = ''; t[C.gh] = '';
        }
        break;
      case S.bsGh:
        type = inputType(col, text);
        if (type === T.ghDel) { row.state = t[C.bs] === '' ? S.all : S.bsTpGh; t[C.ip] = ''; t[C.ih] = ''; }
        else if (type === T.bsDel) { t[C.ih] = ''; }
        break;
      case S.ip:
        if (inputType(col, text) === T.ipDel) { t[C.gh] = ''; row.state = S.all; }
        break;
      case S.gh:
        if (inputType(col, text) === T.ghDel) { t[C.ip] = ''; row.state = S.all; }
        break;
    }
    updateBelow(rows, rowIndex);
    // 줄 추가·정리
    var cur = rows[rowIndex];
    if (cur.state === S.all && cur.texts[C.note] === '') {
      var k = rowIndex + 1;
      while (k < rows.length && rows[k].state === S.all && rows[k].texts[C.note] === '') rows.splice(k, 1);
    } else if (rowIndex === rows.length - 1 && (cur.state !== S.all || cur.texts[C.note] !== '')) {
      rows.push(emptyRow(rows.length + 1));
    }
  }

  var api = { C: C, S: S, emptyRow: emptyRow, change: change, check: check, canEdit: canEdit, dec: { parse: D, add: add, sub: sub, str: str } };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.LevelbookCalc = api;

  // ---- 화면 ----
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', function () {
    var box = document.getElementById('levelbook-calc');
    if (!box) return;
    var L = JSON.parse(box.getAttribute('data-labels'));
    var rows = [emptyRow(1)];
    var body = box.querySelector('tbody'), foot = box.querySelector('tfoot');
    var cols = [C.bs, C.tp, C.ip, C.ih, C.gh];

    function cell(r, i, col) {
      var td = document.createElement('td');
      if (col === C.ih) { td.className = 'lb-out'; td.textContent = r.texts[col]; return td; }
      var inp = document.createElement('input');
      inp.inputMode = 'decimal'; inp.autocomplete = 'off';
      inp.value = r.texts[col];
      inp.setAttribute('aria-label', L.no + ' ' + r.texts[C.no] + ' ' + L.cols[col]);
      inp.dataset.row = i; inp.dataset.col = col;
      if (!canEdit(r, col)) { inp.readOnly = true; inp.tabIndex = -1; inp.className = 'lb-locked'; }
      td.appendChild(inp);
      return td;
    }
    function render(focus) {
      body.innerHTML = '';
      rows.forEach(function (r, i) {
        var tr = document.createElement('tr');
        var no = document.createElement('th'); no.scope = 'row'; no.textContent = r.texts[C.no]; tr.appendChild(no);
        cols.forEach(function (c) { tr.appendChild(cell(r, i, c)); });
        body.appendChild(tr);
      });
      var ck = check(rows);
      var res = ck.ok === null ? '' : (ck.ok ? L.ok : L.fail);
      foot.innerHTML = '<tr class="' + (ck.ok === true ? 'ok' : ck.ok === false ? 'bad' : '') + '"><th scope="row">' + L.check + '</th><td>' + ck.bs + '</td><td>' + ck.tp + '</td><td>' + ck.left + '</td><td>' + ck.sign + '</td><td>' + ck.right + '</td></tr>';
      box.querySelector('.lb-result').textContent = res ? L.result.replace('%L', ck.left).replace('%R', ck.right).replace('%S', res) : L.hint;
      box.querySelector('.lb-result').className = 'lb-result ' + (ck.ok === true ? 'ok' : ck.ok === false ? 'bad' : '');
      if (focus) {
        var el = body.querySelector('input[data-row="' + focus[0] + '"][data-col="' + focus[1] + '"]');
        if (el) { el.focus(); try { el.setSelectionRange(focus[2], focus[2]); } catch (e) {} }
      }
    }
    body.addEventListener('input', function (e) {
      var el = e.target; if (!el.dataset.row || el.readOnly) return;
      var r = Number(el.dataset.row), c = Number(el.dataset.col);
      change(rows, r, c, el.value.trim());
      render([r, c, el.selectionStart]);
    });
    box.querySelector('[data-action=example]').addEventListener('click', function () {
      rows = [emptyRow(1)];
      JSON.parse(box.getAttribute('data-example')).forEach(function (s) { change(rows, s[0], C[s[1]], s[2]); });
      render();
    });
    box.querySelector('[data-action=clear]').addEventListener('click', function () { rows = [emptyRow(1)]; render(); });
    render();
  });
})(this);
