---
title: Why Your Average Price Differs Between Apps - Moving Average vs FIFO
permalink: /stock-honey/average-cost-methods/
lang: en
app: stock-honey
last_modified_at: 2026-11-23
alternates: { en: /stock-honey/average-cost-methods/, ko: /stock-honey/ko/average-cost-methods/ }
description: The same holding can show different average prices, usually after a partial sale. See how the moving average and FIFO (first in, first out) methods change your remaining average and realized profit, with an example.
image: /assets/img/stock-honey/icon.png
---

# Why Your Average Price Can Differ: Moving Average vs FIFO

If the same holding shows different average prices in different places, it is almost always **after you sold part of it**. Which shares count as "the ones you sold" decides the average price of what is left.

| | Moving average | FIFO (first in, first out) |
|---|---|---|
| When you sell | Every share is treated as sold at your average price | The earliest shares you bought are sold first |
| Average after a partial sale | Stays the same | Becomes the price of the shares still held (the later ones) |
| If you have only bought | Same result for both | Same result for both |

**If you have only bought, both methods give the same average price.** Both are total cost divided by number of shares. The difference only appears when you look at what is left after selling some.

## Example: a partial sale

Say you trade like this. Amounts are in the same currency as the share price.

1. Buy 10 shares at 10,000
2. Buy 10 more at 14,000 → 20 shares, average **12,000** (the same under both methods so far)
3. Sell 10 shares at 15,000, leaving 10

| | Moving average | FIFO |
|---|---|---|
| Cost of the 10 sold | Average price, 12,000 | The first ones, 10,000 |
| Realized profit on the sale | (15,000 − 12,000) × 10 = **30,000** | (15,000 − 10,000) × 10 = **50,000** |
| Average of the 10 left | **12,000** | **14,000** |

Same trades, but the remaining shares show an average of 12,000 or 14,000. So one account can show different averages depending on the screen or the method.

### Does the total profit change too?

No. If you later sell the remaining 10 at 15,000:

- Moving average: 30,000 + (15,000 − 12,000) × 10 = **60,000**
- FIFO: 50,000 + (15,000 − 14,000) × 10 = **60,000**

Once everything is sold, the total profit is the same. What differs is **when the profit is counted** and **the average price and return you see on screen right now**.

## Which method is my average?

- **Check your broker app's help text or settings.** Some explain which basis they use for the average or purchase price, and some let you choose.
- **Work it out like the example above.** If your remaining average changed after a partial sale, it is closer to FIFO; if it stayed the same, it is closer to moving average.
- **Check taxes separately.** The average shown on screen and the cost basis used for tax can be calculated differently. Follow your tax authority's guidance.

The **Stock Honey Calculator** works out your average as total cost of the shares you hold plus the shares you buy, divided by the total number of shares. When you are only buying, both methods agree, so you can use it as is. After a partial sale, enter the shares you still hold and the average your broker shows, then continue from there. The example on this page leaves out fees and taxes.

<p><a href="{{ '/stock-honey/calculator/' | relative_url }}"><b>Try it with the average down calculator →</b></a></p>

{% include app-cta.html app="stock-honey" text="Average price, averaging down list and profit calculators in one app: **Stock Honey Calculator**" %}

<p class="muted"><a href="{{ '/stock-honey/averaging-down-vs-up/' | relative_url }}">Averaging down vs averaging up</a> · <a href="{{ '/stock-honey/' | relative_url }}">About Stock Honey Calculator</a> · This page explains the math only and is not investment advice.</p>
