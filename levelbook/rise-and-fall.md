---
title: Rise and Fall Method - Leveling Field Book Example and Check
permalink: /levelbook/rise-and-fall/
lang: en
app: levelbook
last_modified_at: 2026-11-18
alternates: { en: /levelbook/rise-and-fall/, ko: /levelbook/ko/rise-and-fall/ }
description: How to fill in a rise and fall leveling field book, step by step with a worked example. Find rises, falls and reduced levels, run the full arithmetic check, and compare it with the height of instrument method.
image: /assets/img/levelbook/icon.png
---

# Rise and Fall Method: Field Book Example

The rise and fall method finds each point's ground height (reduced level) **from the height difference to the previous point**. There is no instrument height: you compare each reading with the one taken just before it.

<p class="formula">Difference = previous reading − this reading<br>Positive = Rise, negative = Fall<br>Ground height = previous ground height + Rise (or − Fall)</p>

A smaller reading means a higher point: the higher the ground under the staff, the closer it is to the line of sight. So when "previous − this" is positive, the ground went up.

## Field book columns

The columns are like the [height of instrument]({{ '/levelbook/height-of-instrument/' | relative_url }}) method, but instead of the instrument height (IH) there are two columns, **Rise** and **Fall**.

| Column | Name | Meaning |
|---|---|---|
| BS | Backsight | First reading after setting up the level (on a point of known height) |
| IP | Intermediate point (foresight) | Readings taken in between from the same setup |
| TP | Turning point (foresight) | Last reading before the level is moved |
| Rise | Rise | How much higher than the previous point |
| Fall | Fall | How much lower than the previous point |
| GH | Ground height | Height of each point (reduced level) |

**Important:** the "previous reading" is always one taken from the same setup. After the level is moved, the **new backsight** on the turning point is where the comparison starts again.

## Example

These are the same readings as the [height of instrument guide]({{ '/levelbook/height-of-instrument/' | relative_url }}). Point 1 has a ground height of **11.00 m**, the level is moved once at point 4, and readings continue to point 6. Bold cells are the ones you calculate.

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>Point</th><th>BS</th><th>IP</th><th>TP</th><th>Rise</th><th>Fall</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td></td><td></td><td>11.00</td></tr>
<tr><td>2</td><td></td><td>1.33</td><td></td><td></td><td><b>0.53</b></td><td><b>10.47</b></td></tr>
<tr><td>3</td><td></td><td>1.42</td><td></td><td></td><td><b>0.09</b></td><td><b>10.38</b></td></tr>
<tr><td>4</td><td>1.56</td><td></td><td>2.43</td><td></td><td><b>1.01</b></td><td><b>9.37</b></td></tr>
<tr><td>5</td><td></td><td>0.74</td><td></td><td><b>0.82</b></td><td></td><td><b>10.19</b></td></tr>
<tr><td>6</td><td></td><td></td><td>0.33</td><td><b>0.41</b></td><td></td><td><b>10.60</b></td></tr>
<tr class="check"><td>Total</td><td>2.36</td><td></td><td>2.76</td><td>1.23</td><td>1.63</td><td></td></tr>
</tbody></table></div>

### 1. First setup (points 1 to 4)

Start from the backsight of 0.80 on point 1 and compare each reading with the one just before it.

- Point 2: 0.80 − 1.33 = −0.53 → **Fall 0.53**, GH = 11.00 − 0.53 = **10.47**
- Point 3: 1.33 − 1.42 = −0.09 → **Fall 0.09**, GH = 10.47 − 0.09 = **10.38**
- Point 4: 1.42 − 2.43 = −1.01 → **Fall 1.01**, GH = 10.38 − 1.01 = **9.37**

### 2. After moving the level (points 4 to 6)

The level is moved and point 4 is read again as a backsight of 1.56. From now on, 1.56 is the "previous reading". Do not compare with point 4's foresight of 2.43.

- Point 5: 1.56 − 0.74 = +0.82 → **Rise 0.82**, GH = 9.37 + 0.82 = **10.19**
- Point 6: 0.74 − 0.33 = +0.41 → **Rise 0.41**, GH = 10.19 + 0.41 = **10.60**

Every ground height matches the height of instrument result (10.47, 10.38, 9.37, 10.19, 10.60). The method is different, but the answer must be the same.

## How to check the field book

All three values must be equal.

<p class="formula">ΣBS − ΣTP = ΣRise − ΣFall = last ground height − first ground height</p>

- ΣBS − ΣTP = 2.36 − 2.76 = **−0.40**
- ΣRise − ΣFall = 1.23 − 1.63 = **−0.40**
- Last − first = 10.60 − 11.00 = **−0.40**

ΣRise and ΣFall **include the rises and falls of intermediate points**, so a subtraction mistake at an intermediate point shows up in the check. That is the biggest difference from the height of instrument check, which cannot verify intermediate points. It still checks the arithmetic only, not reading errors in the field.

## Rise and fall vs. height of instrument

| | Rise and fall | Height of instrument |
|---|---|---|
| How | Find rises and falls from previous − this reading | Subtract foresights from the instrument height |
| Check | Includes intermediate points | Turning points only |
| Work | One extra subtraction per point | Fast even with many intermediate points |
| Best for | Work that needs every point checked | Profiles and cross sections with many intermediate points |

Both methods give the same ground heights from the same readings. So a rise and fall field book can be double-checked by entering the same BS, TP and IP into a height of instrument calculator.

<p><a href="{{ '/levelbook/calculator/' | relative_url }}"><b>Enter this example's readings in the height of instrument web calculator →</b></a></p>

{% include app-cta.html app="levelbook" text="Enter the same readings in **Surveying Leveling Field Notes** to double-check a rise and fall field book. It fills in ground heights and the check row with the height of instrument method." %}

## Common mistakes

- **Comparing with the turning point foresight after moving the level.** The first comparison after a move uses the new backsight (1.56 in the example).
- **Subtracting in the wrong order.** It is previous − this. The other way round swaps rises and falls.
- **Adding intermediate points to ΣTP.** ΣTP only includes turning points and the last point. Intermediate points are checked through ΣRise and ΣFall.

## FAQ

### Can rise and fall give a different result from height of instrument?

No. With the same readings, the ground heights are the same. If they differ, one of the two has a calculation mistake.

### Can I write rise and fall in one column as + and −?

Yes. Many field books keep two columns so ΣRise and ΣFall are easy to add up for the check.

### Which method comes up in exams?

Either can. Solving the same readings both ways is a good way to check yourself.

<p class="muted"><a href="{{ '/levelbook/height-of-instrument/' | relative_url }}">Height of instrument method</a> · <a href="{{ '/levelbook/' | relative_url }}">About Surveying Leveling Field Notes</a></p>
