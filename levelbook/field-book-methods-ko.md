---
title: 야장 기입법 종류 - 기고식·승강식·고차식 차이와 언제 쓰는지
permalink: /levelbook/ko/field-book-methods/
lang: ko
app: levelbook
last_modified_at: 2026-11-23
alternates: { en: /levelbook/field-book-methods/, ko: /levelbook/ko/field-book-methods/ }
description: 레벨 측량 야장 기입법 세 가지(기고식·승강식·고차식)를 같은 읽음값으로 비교해요. 계산 방법, 검산할 수 있는 범위, 어떤 측량에 무엇을 쓰는지까지.
image: /assets/img/levelbook/icon.png
---

# 야장 기입법 종류: 기고식·승강식·고차식

레벨 측량 야장은 크게 **기고식, 승강식, 고차식** 세 가지예요. 읽는 값(후시·전시)은 같고, **지반고를 구하는 길과 검산할 수 있는 범위**가 달라요.

| | 기고식 | 승강식 | 고차식 |
|---|---|---|---|
| 계산 | 기계고 − 전시 | 앞 값 − 지금 값(승·강) | 후시 − 전시(이기점만) |
| 중간점 | 적어요 | 적어요 | 적지 않아요 |
| 검산 | 이기점만 확인 | 중간점까지 확인 | 두 점의 높이 차만 |
| 맞는 곳 | 중간점이 많은 종단·횡단 측량 | 매 측점을 확인해야 하는 정밀한 측량 | 두 지점의 높이 차가 필요한 경우 |

한 줄로 요약하면, **중간점이 많으면 기고식, 모두 검산하려면 승강식, 높이 차만 필요하면 고차식**이에요.

## 같은 읽음값을 세 방식으로

측점 1의 지반고가 **11.00m**이고, 측점 4에서 레벨을 한 번 옮겨 측점 6까지 재었어요. 측점 2·3·5는 중간점이에요.

### 기고식: 기계고에서 빼요

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>측점</th><th>BS</th><th>TP</th><th>IP</th><th>IH</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td>11.80</td><td>11.00</td></tr>
<tr><td>2</td><td></td><td></td><td>1.33</td><td></td><td>10.47</td></tr>
<tr><td>3</td><td></td><td></td><td>1.42</td><td></td><td>10.38</td></tr>
<tr><td>4</td><td>1.56</td><td>2.43</td><td></td><td>10.93</td><td>9.37</td></tr>
<tr><td>5</td><td></td><td></td><td>0.74</td><td></td><td>10.19</td></tr>
<tr><td>6</td><td></td><td>0.33</td><td></td><td></td><td>10.60</td></tr>
</tbody></table></div>

검산: ΣBS − ΣTP = 2.36 − 2.76 = −0.40 = 10.60 − 11.00. 중간점(2·3·5)은 이 검산에 들어가지 않아요. 자세한 풀이는 [기고식 야장 기입법]({{ '/levelbook/ko/height-of-instrument/' | relative_url }})에 있어요.

### 승강식: 앞 측점과 비교해요

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>측점</th><th>BS</th><th>IP</th><th>TP</th><th>승</th><th>강</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td></td><td></td><td></td><td>11.00</td></tr>
<tr><td>2</td><td></td><td>1.33</td><td></td><td></td><td>0.53</td><td>10.47</td></tr>
<tr><td>3</td><td></td><td>1.42</td><td></td><td></td><td>0.09</td><td>10.38</td></tr>
<tr><td>4</td><td>1.56</td><td></td><td>2.43</td><td></td><td>1.01</td><td>9.37</td></tr>
<tr><td>5</td><td></td><td>0.74</td><td></td><td>0.82</td><td></td><td>10.19</td></tr>
<tr><td>6</td><td></td><td></td><td>0.33</td><td>0.41</td><td></td><td>10.60</td></tr>
</tbody></table></div>

검산: ΣBS − ΣTP = Σ승 − Σ강 = 1.23 − 1.63 = −0.40. 중간점의 승·강까지 들어가서 모든 측점이 확인돼요. 자세한 풀이는 [승강식 야장 기입법]({{ '/levelbook/ko/rise-and-fall/' | relative_url }})에 있어요.

### 고차식: 후시와 전시만 적어요

중간점을 재지 않고 측점 1에서 6까지의 높이 차만 구한다면 이렇게 적어요.

<div class="table-scroll"><table class="fieldbook">
<thead><tr><th>측점</th><th>BS</th><th>FS</th><th>GH</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.80</td><td></td><td>11.00</td></tr>
<tr><td>4</td><td>1.56</td><td>2.43</td><td>9.37</td></tr>
<tr><td>6</td><td></td><td>0.33</td><td>10.60</td></tr>
</tbody></table></div>

- 측점 4: 11.00 + 0.80 − 2.43 = **9.37**
- 측점 6: 9.37 + 1.56 − 0.33 = **10.60**
- 높이 차: ΣBS − ΣFS = 2.36 − 2.76 = **−0.40**

열이 가장 적고 계산도 간단하지만, 중간 측점의 높이는 남지 않아요.

세 방식 모두 마지막 지반고는 **10.60m**, 높이 차는 **−0.40m**로 같아요. 방법만 다르고 결과는 같아야 해요.

## 언제 무엇을 쓰나요

- **기고식:** 종단·횡단 측량처럼 한 자리에서 중간점을 많이 볼 때. 중간점마다 빼기 한 번이면 돼서 빨라요. 대신 중간점은 검산으로 확인되지 않아요.
- **승강식:** 모든 측점의 계산을 검산으로 확인하고 싶을 때. 측점마다 계산이 한 번 더 늘어요.
- **고차식:** 두 지점의 높이 차가 필요한 경우.

한 현장에서 섞어 쓰기도 해요. 예를 들어 기준점까지는 고차식으로 높이를 가져오고, 측량 구간에서는 기고식으로 중간점을 적는 식이에요.

{% include app-cta.html app="levelbook" text="**야장 수첩**은 기고식 야장 앱이에요. 승강식·고차식으로 적은 값도 같은 BS·TP·IP를 넣으면 같은 지반고로 확인할 수 있어요." %}

<p><a href="{{ '/levelbook/ko/calculator/' | relative_url }}"><b>웹에서 바로 쓰는 기고식 야장 계산기 →</b></a></p>

## 자주 묻는 질문

### 세 방식의 결과가 달라질 수 있나요?

아니요. 같은 읽음값이면 지반고와 높이 차는 같아요. 다르게 나오면 계산 실수가 있는 것이에요.

### 고차식에서는 검산을 어떻게 해요?

ΣBS − ΣFS가 마지막 지반고 − 처음 지반고와 같은지 봐요. 중간점이 없으니 이것이 계산 검산의 전부예요.

### 시험에는 어느 방식이 나오나요?

세 방식 모두 나올 수 있어요. 같은 읽음값을 세 방식으로 풀어 보면 헷갈리지 않아요.

<p class="muted"><a href="{{ '/levelbook/ko/height-of-instrument/' | relative_url }}">기고식 야장 기입법</a> · <a href="{{ '/levelbook/ko/rise-and-fall/' | relative_url }}">승강식 야장 기입법</a> · <a href="{{ '/levelbook/ko/' | relative_url }}">야장 수첩 앱 소개</a></p>
