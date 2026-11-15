---
title: Height of Instrument Leveling Calculator - Field Book with Automatic Check
permalink: /levelbook/calculator/
lang: en
app: levelbook
alternates: { en: /levelbook/calculator/, ko: /levelbook/ko/calculator/ }
description: Free online height of instrument leveling calculator. Enter backsights, turning points and intermediate sights to get instrument heights, ground heights and the arithmetic check. No install needed.
image: /assets/img/levelbook/icon.png
---

# Height of Instrument Leveling Calculator

Enter backsights (BS), turning points (TP) and intermediate sights (IP) to get **instrument heights (IH) and ground heights (GH)** right away, with the **arithmetic check** at the bottom. It calculates the same way as the [Surveying Leveling Field Notes]({{ '/levelbook/' | relative_url }}) app.

{% include levelbook-calc.html lang="en" %}

## How to use

1. On the **first line**, enter the backsight (BS) and the ground height (GH) of your known point. The instrument height is calculated.
2. Enter points read from the same setup as **IP** (intermediate). Their ground heights appear.
3. Where the level moves, enter the **TP** (turning point) and the new **BS** on the same line. You get its ground height and the new instrument height.
4. A new line appears when you fill the last one. Change any value above and everything below is recalculated.
5. In the **Check** row, ΣBS − ΣTP must equal the last GH − first GH.

You can also type a known height (for example a design level) into GH. The reading you should see at that point is then calculated back into IP.

{% include app-cta.html app="levelbook" text="On site, use the **Surveying Leveling Field Notes** app: works offline, keeps several field books and shares them as CSV." %}

## Formulas

<p class="formula">IH = GH + BS<br>GH = IH − foresight (TP or IP)<br>Check: ΣBS − ΣTP = last GH − first GH</p>

For a line-by-line worked example, see [Height of Instrument Method: Field Book Example]({{ '/levelbook/height-of-instrument/' | relative_url }}).

## FAQ

### The check says FALSE.

The arithmetic is exact, so usually a value went into the wrong column. Make sure a turning point's TP and BS are on the same line, and that intermediate sights are not in the TP column.

### Are there rounding errors?

No. Like the app, it uses exact decimal arithmetic, so even 0.1 + 0.2 comes out exact.

### Can I save my field book?

The web calculator does not save anything. To save field books and share them as CSV, use the app.

{% include app-cta.html app="levelbook" text="Save height of instrument field books and share them as CSV" %}
