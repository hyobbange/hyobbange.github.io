---
title: Height of Instrument Method - Leveling Field Book Example and Check
permalink: /levelbook/height-of-instrument/
lang: en
app: levelbook
alternates: { en: /levelbook/height-of-instrument/, ko: /levelbook/ko/height-of-instrument/ }
description: How to fill in a height of instrument (HI) leveling field book, step by step with a worked example. Calculate instrument heights and reduced levels, and check the arithmetic.
image: /assets/img/levelbook/icon.png
---

# Height of Instrument Method: Field Book Example

The height of instrument (HI) method finds each point's ground height (reduced level) **from the height of the instrument's line of sight**. You only need two formulas.

<p class="formula">Instrument height (IH) = ground height (GH) + backsight (BS)<br>Ground height (GH) = instrument height (IH) − foresight (TP or IP)</p>

Follow the example below line by line to fill in the whole field book, then check it in the last row.

## Field book columns

| Column | Name | Meaning |
|---|---|---|
| BS | Backsight | Reading on a point of known height. Added to get the instrument height |
| TP | Turning point (foresight) | Last reading before the level is moved. It becomes the base for the next setup |
| IP | Intermediate point (foresight) | Reading taken only to find that point's height. Not used in later steps |
| IH | Instrument height | Height of the line of sight |
| GH | Ground height | Height of each point (reduced level) |

## Example

Point 1 has a ground height of **11.00 m**. The level is moved once (point 4 is the turning point) and readings continue to point 6. Bold cells are the ones you calculate.

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>Point</th><th>BS</th><th>TP</th><th>IP</th><th>IH</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td><b>11.80</b></td><td>11.00</td></tr>
<tr><td>2</td><td></td><td></td><td>1.33</td><td></td><td><b>10.47</b></td></tr>
<tr><td>3</td><td></td><td></td><td>1.42</td><td></td><td><b>10.38</b></td></tr>
<tr><td>4</td><td>1.56</td><td>2.43</td><td></td><td><b>10.93</b></td><td><b>9.37</b></td></tr>
<tr><td>5</td><td></td><td></td><td>0.74</td><td></td><td><b>10.19</b></td></tr>
<tr><td>6</td><td></td><td>0.33</td><td></td><td></td><td><b>10.60</b></td></tr>
<tr class="check"><td>Check</td><td>2.36</td><td>2.76</td><td></td><td colspan="2">−0.40 = −0.40 ✓</td></tr>
</tbody></table></div>

### 1. First instrument height (point 1)

Take a backsight on point 1, whose height is known.

- IH = GH + BS = 11.00 + 0.80 = **11.80**

### 2. Intermediate points (points 2 and 3)

From the same setup, subtract each foresight from the instrument height.

- Point 2: GH = 11.80 − 1.33 = **10.47**
- Point 3: GH = 11.80 − 1.42 = **10.38**

### 3. Move the level at the turning point (point 4)

A turning point has **both a foresight (TP) and a backsight (BS) on the same line**. First find its ground height with the old instrument height, then add the new backsight to get the new instrument height.

- GH = 11.80 − 2.43 = **9.37**
- New IH = 9.37 + 1.56 = **10.93**

### 4. Continue from the new setup (points 5 and 6)

- Point 5 (intermediate): GH = 10.93 − 0.74 = **10.19**
- Point 6 (turning point): GH = 10.93 − 0.33 = **10.60**

<p><a href="{{ '/levelbook/calculator/' | relative_url }}"><b>Try this example in the web calculator →</b></a></p>

## How to check the field book

<p class="formula">ΣBS − ΣTP = last ground height − first ground height</p>

- ΣBS = 0.80 + 1.56 = 2.36
- ΣTP = 2.43 + 0.33 = 2.76
- Left side: 2.36 − 2.76 = **−0.40**
- Right side: 10.60 − 11.00 = **−0.40**

If both sides match, **the arithmetic is correct**. The check uses only backsights and turning points, so **intermediate points are not included** and their heights are not verified by it. It also catches calculation mistakes, not reading errors in the field.

{% include app-cta.html app="levelbook" text="Enter BS, TP and IP in **Surveying Leveling Field Notes** and it fills in IH, GH and the check row for you." %}

## Common mistakes

- **Wrong order at a turning point.** Find the turning point's height with the instrument height *before* moving, then make the new instrument height.
- **Adding intermediate points to the check.** ΣTP only includes turning point foresights.
- **Writing the turning point's backsight on the next line.** Both readings belong to the same point, on the same line.
- **Rounding along the way.** Carry the readings as they are and round only at the end.

## Height of instrument vs. rise and fall

| | Height of instrument | Rise and fall |
|---|---|---|
| How | Subtract foresights from the instrument height | Add rises and subtract falls between points |
| Best for | **Many intermediate points** (profiles, cross sections). Fast to calculate | Work with mostly turning points. Every point is checked, good for precise work |
| Check | Turning points only | Includes intermediate points |

The same example worked with the other method: [rise and fall method]({{ '/levelbook/rise-and-fall/' | relative_url }})

## FAQ

### When does the instrument height change?

Only when the level is moved, at a turning point. All intermediate points read from the same setup use the same instrument height.

### What if I don't know the first ground height?

Use the height of a benchmark, or start from an assumed value such as 10.00 m. Heights are then relative to that value.

### My check is off by 0.01.

Usually one addition or subtraction is wrong. Recalculate from the turning point lines. Calculating automatically, as the app does, avoids these slips.

{% include app-cta.html app="levelbook" text="A height of instrument field book app for the site" %}

<p class="muted"><a href="{{ '/levelbook/closure-error/' | relative_url }}">Misclosure and adjustment</a> · <a href="{{ '/levelbook/' | relative_url }}">About Surveying Leveling Field Notes</a></p>
