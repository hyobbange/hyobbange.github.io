---
title: 기고식 야장 계산기 - 기계고·지반고 자동 계산과 검산
permalink: /levelbook/ko/calculator/
lang: ko
app: levelbook
alternates: { en: /levelbook/calculator/, ko: /levelbook/ko/calculator/ }
description: 후시(BS)·이기점(TP)·중간점(IP)을 넣으면 기계고(IH)와 지반고(GH)를 자동으로 계산하고 검산까지 해 주는 무료 기고식 야장 계산기. 설치 없이 웹에서 바로.
image: /assets/img/levelbook/icon.png
---

# 기고식 야장 계산기

후시(BS), 이기점(TP), 중간점(IP)을 넣으면 **기계고(IH)와 지반고(GH)를 바로 계산**하고, 맨 아래에서 **검산**까지 해 줘요. 계산 방식은 [야장 수첩]({{ '/levelbook/ko/' | relative_url }}) 앱과 같아요.

{% include levelbook-calc.html lang="ko" %}

## 쓰는 법

1. **첫 줄**에 기준점의 후시(BS)와 지반고(GH)를 넣어요. 기계고가 계산돼요.
2. 같은 자리에서 본 점은 **IP**(중간점)에 넣어요. 지반고가 나와요.
3. 레벨을 옮기는 점은 한 줄에 **TP**(이기점)와 새 **BS**를 같이 넣어요. 지반고와 새 기계고가 나와요.
4. 줄은 마지막 줄에 값을 넣으면 저절로 늘어나요. 위쪽 값을 고치면 아래가 모두 다시 계산돼요.
5. 맨 아래 **검산** 줄에서 ΣBS − ΣTP와 (마지막 GH − 첫 GH)가 같으면 성공이에요.

높이를 아는 점(설계 높이 등)은 GH 칸에 바로 넣을 수도 있어요. 그러면 그 점에서 읽어야 할 값이 IP 칸에 거꾸로 계산돼요.

{% include app-cta.html app="levelbook" text="현장에서는 **야장 수첩** 앱이 편해요. 인터넷 없이 쓰고, 야장 여러 개를 저장하고, CSV 파일로 보낼 수 있어요." %}

## 계산식

<p class="formula">기계고(IH) = 지반고(GH) + 후시(BS)<br>지반고(GH) = 기계고(IH) − 전시(TP 또는 IP)<br>검산: ΣBS − ΣTP = 마지막 지반고 − 첫 지반고</p>

예제를 한 줄씩 풀어 본 설명은 [기고식 야장 기입법: 계산 방법과 예제]({{ '/levelbook/ko/height-of-instrument/' | relative_url }})에 있어요.

## 자주 묻는 질문

### 검산이 실패로 나와요.

계산은 정확하게 하므로, 대부분 입력한 값이 다른 칸에 들어간 경우예요. 이기점의 TP와 BS가 같은 줄에 있는지, 중간점을 TP 칸에 넣지 않았는지 확인해 보세요.

### 소수점 계산 오차는 없나요?

없어요. 앱과 같이 소수를 정확히 계산해서 0.1 + 0.2 같은 계산에서도 오차가 생기지 않아요.

### 입력한 야장을 저장할 수 있나요?

웹 계산기는 저장하지 않아요. 저장하고 다시 열어 보거나 CSV로 보내려면 야장 수첩 앱을 써 주세요.

{% include app-cta.html app="levelbook" text="기고식 야장을 저장하고 CSV로 공유하는 앱, 야장 수첩" %}
