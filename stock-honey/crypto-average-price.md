---
title: How to Calculate Your Crypto Average Price - Fractional Coins and Buying by Amount
permalink: /stock-honey/crypto-average-price/
lang: en
app: stock-honey
last_modified_at: 2026-11-27
alternates: { en: /stock-honey/crypto-average-price/, ko: /stock-honey/ko/crypto-average-price/ }
description: Your crypto average price is total cost divided by total quantity. A Bitcoin example with a fractional holding like 0.015 BTC and buys made by amount, such as "200,000 worth".
image: /assets/img/stock-honey/icon.png
---

# How to Calculate Your Crypto Average Price

The average price of a coin uses the same formula as stocks: **total cost divided by total quantity**. Two things are different:

- The quantity is often **a fraction, like 0.015**.
- You often buy **by amount**, such as "100,000 worth". Then you need to work out the quantity first.

<p class="formula">Average price = (current average × current quantity + amount spent) ÷ (current quantity + quantity bought)<br>Quantity bought = amount spent ÷ buy price</p>

## Example

You hold **0.015 BTC** at an average of **95,000,000** (a cost of 1,425,000). The price drops to **88,000,000** and you buy more. Amounts are in Korean won, and the prices are only examples for the calculation.

### Buying by amount: 200,000 worth

1. Quantity bought = 200,000 ÷ 88,000,000 = **0.00227273 BTC**
2. Total cost = 1,425,000 + 200,000 = 1,625,000
3. Total quantity = 0.015 + 0.00227273 = 0.01727273 BTC
4. Average price = 1,625,000 ÷ 0.01727273 ≈ **94,078,947**

### If you buy 1,000,000 worth

- Quantity bought = 1,000,000 ÷ 88,000,000 = 0.01136364 BTC
- Average price = (1,425,000 + 1,000,000) ÷ 0.02636364 ≈ **91,982,759**

| Amount spent | Quantity bought | New average |
|---|---|---|
| 0 | 0 | 95,000,000 |
| 200,000 | 0.00227273 | about 94,078,947 |
| 1,000,000 | 0.01136364 | about 91,982,759 |

As with stocks, the new average lands between your current average (95,000,000) and the buy price (88,000,000), and moves closer to the buy price the more you buy.

## Things to watch

- **Check whether the fee comes out of the quantity.** Depending on the exchange, the fee is taken from the coins you receive or from the amount you pay. To match exactly, use the **actual filled quantity and amount** in your trade history.
- **Keep enough decimal places.** Rounding the quantity early, to 0.0023 for example, can shift the average by tens of thousands. Round only at the end.
- **Exchanges can show different averages.** A partial sale or a different way of including fees changes the average (see [why your average price differs between apps]({{ '/stock-honey/average-cost-methods/' | relative_url }})).
- **A bigger amount means bigger risk.** A lower average still means more money invested. This page only shows the math.

## Calculating it in Stock Honey Calculator

Stock Honey Calculator accepts fractional quantities like 0.015, and you can choose how many decimal places the results show.

1. In **Your shares**, enter the average price (95,000,000) and quantity (0.015).
2. If you are buying by amount, work out the quantity first (200,000 ÷ 88,000,000 = 0.00227273).
3. In **Will buy**, enter the buy price (88,000,000) and that quantity to see the new average.

<p><a href="{{ '/stock-honey/calculator/' | relative_url }}"><b>Try it with the average down calculator →</b></a></p>

{% include app-cta.html app="stock-honey" text="Fractional coin quantities work as is. Average price, averaging down list and profit calculators in one app: **Stock Honey Calculator**" %}

## FAQ

### Is the crypto average price formula different from stocks?

No. It is total cost ÷ total quantity in both cases. The quantity is just a fraction.

### I bought by amount and don't know the quantity. What now?

Divide the amount by the buy price. For an exact figure, use the filled quantity in your trade history.

### How much do I need to buy to reach a target average?

The averaging down list in the calculator shows the quantity and cost needed for each target average. For coins, the quantities come out as fractions too.

<p class="muted"><a href="{{ '/stock-honey/average-cost-methods/' | relative_url }}">Why your average price differs between apps</a> · <a href="{{ '/stock-honey/averaging-down-vs-up/' | relative_url }}">Averaging down vs averaging up</a> · <a href="{{ '/stock-honey/' | relative_url }}">About Stock Honey Calculator</a> · This page explains the math only and is not investment advice.</p>
