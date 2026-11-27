---
title: Leveling Field Book Methods - Height of Instrument vs Rise and Fall vs Simple Leveling
permalink: /levelbook/field-book-methods/
lang: en
app: levelbook
last_modified_at: 2026-11-23
alternates: { en: /levelbook/field-book-methods/, ko: /levelbook/ko/field-book-methods/ }
description: The three ways to book a leveling survey - height of instrument, rise and fall, and backsight/foresight only - compared with the same readings. How each is calculated, what its check covers, and when to use which.
image: /assets/img/levelbook/icon.png
---

# Leveling Field Book Methods Compared

There are three common ways to book a leveling survey: **height of instrument, rise and fall, and backsight/foresight only** (often called simple or differential leveling). The readings are the same; what differs is **how you get to the ground heights and how much the check can confirm**.

| | Height of instrument | Rise and fall | Backsight/foresight only |
|---|---|---|---|
| Calculation | Instrument height − foresight | Previous − this reading (Rise/Fall) | Backsight − foresight (turning points only) |
| Intermediate points | Booked | Booked | Not booked |
| Check covers | Turning points only | Every point, including intermediate | The height difference between two points |
| Best for | Profiles and cross sections with many intermediate points | Work where every point must be checked | When you need the height difference between two points |

In short: **many intermediate points → height of instrument; check everything → rise and fall; only the height difference → backsight/foresight only.**

## The same readings, three ways

Point 1 has a ground height of **11.00 m**. The level is moved once at point 4, and readings continue to point 6. Points 2, 3 and 5 are intermediate points.

### Height of instrument: subtract from the instrument height

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>Point</th><th>BS</th><th>TP</th><th>IP</th><th>IH</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td>11.80</td><td>11.00</td></tr>
<tr><td>2</td><td></td><td></td><td>1.33</td><td></td><td>10.47</td></tr>
<tr><td>3</td><td></td><td></td><td>1.42</td><td></td><td>10.38</td></tr>
<tr><td>4</td><td>1.56</td><td>2.43</td><td></td><td>10.93</td><td>9.37</td></tr>
<tr><td>5</td><td></td><td></td><td>0.74</td><td></td><td>10.19</td></tr>
<tr><td>6</td><td></td><td>0.33</td><td></td><td></td><td>10.60</td></tr>
</tbody></table></div>

Check: ΣBS − ΣTP = 2.36 − 2.76 = −0.40 = 10.60 − 11.00. Intermediate points (2, 3, 5) are not part of this check. Step by step: [height of instrument method]({{ '/levelbook/height-of-instrument/' | relative_url }}).

### Rise and fall: compare with the previous point

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>Point</th><th>BS</th><th>IP</th><th>TP</th><th>Rise</th><th>Fall</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td></td><td></td><td>11.00</td></tr>
<tr><td>2</td><td></td><td>1.33</td><td></td><td></td><td>0.53</td><td>10.47</td></tr>
<tr><td>3</td><td></td><td>1.42</td><td></td><td></td><td>0.09</td><td>10.38</td></tr>
<tr><td>4</td><td>1.56</td><td></td><td>2.43</td><td></td><td>1.01</td><td>9.37</td></tr>
<tr><td>5</td><td></td><td>0.74</td><td></td><td>0.82</td><td></td><td>10.19</td></tr>
<tr><td>6</td><td></td><td></td><td>0.33</td><td>0.41</td><td></td><td>10.60</td></tr>
</tbody></table></div>

Check: ΣBS − ΣTP = ΣRise − ΣFall = 1.23 − 1.63 = −0.40. Intermediate rises and falls are included, so every point is checked. Step by step: [rise and fall method]({{ '/levelbook/rise-and-fall/' | relative_url }}).

### Backsight/foresight only

If you skip intermediate points and only need the height difference from point 1 to point 6, the book looks like this.

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>Point</th><th>BS</th><th>FS</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td>11.00</td></tr>
<tr><td>4</td><td>1.56</td><td>2.43</td><td>9.37</td></tr>
<tr><td>6</td><td></td><td>0.33</td><td>10.60</td></tr>
</tbody></table></div>

- Point 4: 11.00 + 0.80 − 2.43 = **9.37**
- Point 6: 9.37 + 1.56 − 0.33 = **10.60**
- Height difference: ΣBS − ΣFS = 2.36 − 2.76 = **−0.40**

It has the fewest columns and the simplest arithmetic, but no heights are kept for points in between.

All three methods give the same last ground height, **10.60 m**, and the same height difference, **−0.40 m**. The method changes; the answer must not.

## When to use which

- **Height of instrument:** when you take many intermediate readings from one setup, as in profiles and cross sections. Each intermediate point is a single subtraction, so it is fast, but intermediate points are not covered by the check.
- **Rise and fall:** when you want the check to cover every point. It adds one more calculation per point.
- **Backsight/foresight only:** when you need the height difference between two points.

They are often mixed on one job: for example, carrying a height to the site with backsights and foresights only, then booking the survey itself by height of instrument.

{% include app-cta.html app="levelbook" text="**Surveying Leveling Field Notes** is a height of instrument field book app. Readings booked by rise and fall or backsight/foresight only give the same ground heights when you enter the same BS, TP and IP." %}

<p><a href="{{ '/levelbook/calculator/' | relative_url }}"><b>Try the height of instrument calculator on the web →</b></a></p>

## FAQ

### Can the three methods give different results?

No. With the same readings, the ground heights and height difference are the same. If they differ, there is a calculation mistake.

### How do I check a backsight/foresight-only book?

Check that ΣBS − ΣFS equals last ground height − first ground height. With no intermediate points, that is the whole arithmetic check.

### Which method comes up in exams?

Any of the three can. Solving the same readings all three ways is a good way to keep them straight.

<p class="muted"><a href="{{ '/levelbook/height-of-instrument/' | relative_url }}">Height of instrument method</a> · <a href="{{ '/levelbook/rise-and-fall/' | relative_url }}">Rise and fall method</a> · <a href="{{ '/levelbook/closure-error/' | relative_url }}">Misclosure and adjustment</a> · <a href="{{ '/levelbook/' | relative_url }}">About Surveying Leveling Field Notes</a></p>
