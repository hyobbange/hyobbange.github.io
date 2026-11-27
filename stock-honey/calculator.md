---
title: Average Down Calculator · Stock Average Price Calculator
permalink: /stock-honey/calculator/
lang: en
app: stock-honey
alternates: { en: /stock-honey/calculator/, ko: /stock-honey/ko/calculator/ }
description: Free average down calculator for stocks and crypto. See your new average price before you buy, how many shares you need for a target average, and your profit. Formulas and examples included.
image: /assets/img/stock-honey/icon.png
---

# Average Down Calculator · Average Price Calculator

See what your **average price** will be if you buy more, and **how many shares** you need to reach the average you want. Works for stocks and crypto.

{% include stock-calc.html lang="en" tab="avg" example='{"avg-own-price":"50","avg-own-number":"100","avg-buy-price":"40","avg-buy-number":"50","list-buy-price":"40","profit-sell-price":"55"}' %}

{% include app-cta.html app="stock-honey" text="Use it on your phone with the **Stock Honey Calculator** app. It calculates the same way as this page and remembers your list step, count and order settings." %}

## Average price formula

Your new average price is **the total cost divided by the total number of shares**.

<p class="formula">Average price = (your price × your shares + buy price × shares to buy) ÷ (your shares + shares to buy)</p>

**Example.** You hold 100 shares at $50 and buy 50 more at $40.

- Total cost: 50 × 100 + 40 × 50 = 5,000 + 2,000 = $7,000
- Total shares: 100 + 50 = 150
- Average price: 7,000 ÷ 150 = **$46.67**

## How many shares to buy for a target average

If you know the average you want, solve the formula the other way around. The **Averaging down list** tab shows this for each step of average price.

<p class="formula">Shares needed = your shares × (your price − target average) ÷ (target average − buy price)</p>

**Example.** You hold 100 shares at $50 and the price is now $40. To bring your average down to $45:

- Shares needed: 100 × (50 − 45) ÷ (45 − 40) = **100 shares**
- Cost: 100 × 40 = $4,000

The closer your target is to the buy price, the faster the number of shares grows: a $42 average would need 400 shares. A target is only possible **between the buy price and your current average**.

## Can it calculate averaging up?

Yes. If the buy price is above your average, the list shows how your average **rises** as you buy more.

Both compared with the same stock: [averaging down vs averaging up]({{ '/stock-honey/averaging-down-vs-up/' | relative_url }})

## Profit and rate of return

<p class="formula">Net profit = (sell price − average price) × shares<br>Rate of return = (sell price − average price) ÷ average price × 100</p>

**Example.** Selling 100 shares with a $50 average at $55 gives a net profit of (55 − 50) × 100 = **$500** and a rate of return of **10%**.

## FAQ

### Are fees and taxes included?

No. Broker fees and taxes are not included, so real amounts can be slightly different.

### Can I use fractional quantities, like crypto?

Yes. You can enter numbers like 0.5. Choose how many decimal places to show at the bottom of the calculator. A worked example: [how to calculate your crypto average price]({{ '/stock-honey/crypto-average-price/' | relative_url }}).

### Is what I enter saved or sent anywhere?

No. Everything is calculated in your browser. Nothing is stored or sent.

### Is averaging down a good idea?

This page only does the math. Averaging down lowers your average price, but it also puts more money into the same stock, so losses grow if the price keeps falling. The decision is yours.

{% include app-cta.html app="stock-honey" text="Get the average price, averaging down list and profit calculators as an app" %}

<p class="muted"><a href="{{ '/stock-honey/' | relative_url }}">About Stock Honey Calculator</a> · This calculator works the same way as the app.</p>
