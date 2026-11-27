---
title: Leveling Misclosure and How to Adjust It - Distance-Proportional Example
permalink: /levelbook/closure-error/
lang: en
app: levelbook
last_modified_at: 2026-11-27
alternates: { en: /levelbook/closure-error/, ko: /levelbook/ko/closure-error/ }
description: How to find the misclosure of a leveling loop and distribute it to each point in proportion to distance, with a worked example. Also the form of the allowable misclosure, adjusting by number of setups, and common mistakes.
image: /assets/img/levelbook/icon.png
---

# Leveling Misclosure and How to Adjust It

The misclosure is **the difference between the height you calculate and the known height when a leveling run starts and ends on points of known height**. Every reading has a little error, so you rarely arrive at exactly the known value.

<p class="formula">Misclosure = calculated height of the end point − known height of the end point</p>

There are two cases:

- **Closed loop:** You start and finish on the same benchmark. Without error, the height differences would add up to 0.
- **Connecting traverse:** You start on benchmark A and finish on another known benchmark B. The height differences should add up to B − A.

If the misclosure is **within the allowable limit**, distribute it to the points in proportion to distance. If it is larger, re-level. The field book check (ΣBS − ΣFS) only catches arithmetic mistakes; the misclosure shows the actual measurement error.

## Example: distributing in proportion to distance

A closed loop starts at benchmark A (10.000 m), runs through P1 → P2 → P3 and returns to A. The calculated heights and distances are:

| Point | Leg distance | Cumulative distance | Calculated height |
|---|---|---|---|
| A (start) | | 0 m | 10.000 |
| P1 | 200 m | 200 m | 11.235 |
| P2 | 300 m | 500 m | 10.876 |
| P3 | 250 m | 750 m | 11.402 |
| A (end) | 250 m | 1,000 m | 10.012 |

### 1. Find the misclosure

A comes back as 10.012, but its known height is 10.000.

- Misclosure = 10.012 − 10.000 = **+0.012 m (12 mm)**

### 2. Check it against the limit

First check that the misclosure is within the allowable limit (see "Allowable misclosure" below). If it is not, do not adjust; re-level.

### 3. Adjust in proportion to distance

Assume the error built up gradually along the way, so points farther from the start get a larger correction.

<p class="formula">Correction = − misclosure × (cumulative distance to the point ÷ total distance)</p>

| Point | Cumulative distance | Correction | Adjusted height |
|---|---|---|---|
| P1 | 200 m | −0.012 × 200/1,000 = **−0.0024** | **11.2326** |
| P2 | 500 m | −0.012 × 500/1,000 = **−0.0060** | **10.8700** |
| P3 | 750 m | −0.012 × 750/1,000 = **−0.0090** | **11.3930** |
| A (end) | 1,000 m | −0.012 × 1,000/1,000 = **−0.0120** | **10.0000** |

When A comes back to exactly 10.000, the adjustment is right. How many decimals to keep depends on the survey order and project standards.

You can also distribute **in proportion to the number of setups** instead of distance. This is used when legs are similar in length or when steep ground meant moving the level often.

## Allowable misclosure

The allowable misclosure for leveling is usually set **in proportion to the square root of the route length in kilometers**.

<p class="formula">Allowable misclosure = K √L (L: route length in km)</p>

K depends on the order of the survey and the standard that applies. On a project, use the value in the client's specification. For example, if K were 10 mm, the 1 km loop above would be allowed 10 mm, so 12 mm would mean re-leveling. (This K is only an example for the calculation.)

## Common mistakes

- **Using the wrong sign.** If the calculated height came out high (+), subtract; if low (−), add.
- **Dividing by leg distance.** The correction uses the **cumulative distance** from the start, not each leg's distance.
- **Distributing a misclosure that is over the limit.** An error over the limit means a reading or booking mistake. Spreading it out only hides it.
- **Confusing the field book check with misclosure.** The ΣBS − ΣFS check can pass while there is still a misclosure. They check different things.

{% include app-cta.html app="levelbook" text="Calculate ground heights leg by leg in **Surveying Leveling Field Notes**, then check the misclosure with the final ground height." %}

<p><a href="{{ '/levelbook/calculator/' | relative_url }}"><b>Try the height of instrument calculator on the web →</b></a></p>

## FAQ

### Does a misclosure of 0 mean the survey was perfect?

No. Errors can cancel each other out. It only confirms the result is within the limit.

### Should I distribute by distance or by number of setups?

Distance is common on flat routes; number of setups is common on steep routes where the level was moved often. Follow the applicable standard or specification.

### Is it the same for there-and-back leveling?

There-and-back leveling compares the height difference going out with the one coming back. That is a topic for another guide.

<p class="muted"><a href="{{ '/levelbook/field-book-methods/' | relative_url }}">Field book methods compared</a> · <a href="{{ '/levelbook/height-of-instrument/' | relative_url }}">Height of instrument method</a> · <a href="{{ '/levelbook/' | relative_url }}">About Surveying Leveling Field Notes</a></p>
