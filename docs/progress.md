# 진행 상황

계획은 `claude-apps` 세션 "hfx.kr을 GitHub Pages로 이전"(2026-11-05)에서 정했다. [직접] = 사용자, [Claude] = Claude.

## 목표 (사용자 2026-11-05)
1. `hfx.kr`(과 모든 하위 경로)로 접속하면 이 사이트가 보인다.
2. 메일은 지금처럼 Daum으로 받는다 (MX 유지).
3. 개인정보처리방침·이용약관을 언어별로 관리하고, 바뀌면 이전 버전을 링크로 볼 수 있다. 기본 주소(`/privacy/`, `/terms/`)는 최신 영문판.
4. 첫 화면은 간단한 소개 + 서비스 중인 앱 목록.

## 완료
- 2026-11-05 · 1·2단계: 뼈대, 첫 화면, Oddball 소개(영·한), `app-ads.txt`, Pages 설정·확인(사용자)
- 2026-11-05 · 목표 3: 버전 구조(`_policies/`), 예정 버전(시행일 전 게시·당일 자동 전환)
  - 사용자가 정리한 원본 목록(2026-11-05)을 그대로 옮김 (문단·목록 모양만 사이트에 맞춤, 원문과 글자 대조함)

  | 문서 | 버전 | 원본 |
  |---|---|---|
  | 방침 영어 | 2025-07-03 (v1), **2026-10-27 (v2, 기준판)** | `sites.google.com/view/hfx-lab-pp-global-20250703`, `…/hfx-privacy-policy/english` |
  | 방침 한글 | 2024-03-28, 2025-04-13, 2026-10-27 (v1~v3) | `…/hfx-lab-pp-ko-20240328`, `…/hfx-lab-pp-ko-20250413`, `…/hfx-privacy-policy-ko` (= `…/hfx-privacy-policy/korean`) |
  | 방침 일어 | 2025-04-20 (v1) | `…/hfx-lab-pp-ja-20250420` |
  | 약관 영어 | 2026-08-26 (v1) | `…/hfx-lab-tu-global-20260826` |
  | 약관 한글 | 2026-06-30 (v1) | `…/hfx-lab-tu-ko-20260630` |

  - 새 버전 (시행 **2026-11-13**, 2026-11-05 게시 = 8일 전, Claude 작성 · 사용자 검토 필요):
    - 방침 한글 v4: 영문 v2에 맞춤. v3의 이용목적 뒤바뀜 바로잡음(Firebase → 앱 사용 통계 분석·광고 성과 측정, RevenueCat → 구매 여부 확인), 처리 항목·Apple Game Center·Google Play 게임·정보주체 권리·아동(만 14세) 추가
    - 방침 일어 v2: 영문 v2에 맞춤 (Firebase·구매 확인·게임 서비스·권리·아동·외국 이전). 일본어 원어민 검토 권장
    - 약관 영·한 v2: 제3조②가 없는 통지 조항(한글 "제27조 제1항", 영어 "Article 22")을 가리키던 것을 바로잡고 제23조(이용자에 대한 통지: 앱 안 공지·팝업·hfx.kr 게시) 추가
- 2026-11-05 · 3단계 1~4: 도메인 인증 TXT, 가비아 DNS(A 4개·www CNAME·MX 유지), Custom domain 저장(`CNAME` 파일은 GitHub가 main에 커밋). Claude 확인: DNS 정상, `https://hfx.kr/`·`/privacy/`·`/privacy/ko/`·`/terms/`·`/app-ads.txt`(161줄)가 새 사이트로 응답. 인증서 발급·Enforce HTTPS(사용자) 뒤 다시 확인: `hfx.kr` Let's Encrypt 인증서(2027-02-03 만료, GitHub가 자동 갱신), 모든 페이지 200·없는 주소 404, MX 그대로
- 2026-11-05 · `app-ads.txt`: 사용자가 준 현재 파일 161줄로 교체 (AdMob + 미디에이션 판매자)
- 2026-11-06 · App Store 버튼: Oddball(`id6818129344`)·키링 가챠(`id6824445587`) iOS 출시 확인, `_data/apps.yml`에 넣음 (첫 화면 카드·앱 소개 페이지)

## 3단계: 도메인 연결 (목표 1·2) — 완료 (2026-11-05)
순서대로 한다. 1~2는 지금 해도 사이트에 영향 없음.

1. [직접] **도메인 소유 인증** — GitHub 오른쪽 위 프로필 › Settings › Pages › "Add a domain" › `hfx.kr` 입력. 나오는 TXT 레코드(이름 `_github-pages-challenge-hyobbange`, 값은 화면에 나오는 문자열)를 가비아 DNS에 추가하고 Verify. 남이 내 도메인을 GitHub에 걸지 못하게 막는다
2. [직접·결정] 티스토리를 `blog.hfx.kr`로 옮기려면: 가비아에 `blog` CNAME `host.tistory.io.` 추가 → 티스토리 관리 › 블로그 › 개인 도메인을 `blog.hfx.kr`로
3. [직접] **가비아 DNS 변경** (바꾸기 전 화면 캡처를 보여 주면 한 줄씩 확인). 가비아 › My가비아 › 도메인 › `hfx.kr` 관리 › DNS 관리 › 레코드 수정

   | 타입 | 호스트 | 값 | 할 일 |
   |---|---|---|---|
   | CNAME | `@` | `host.tistory.io` | **삭제** |
   | A | `@` | `185.199.108.153` | 추가 |
   | A | `@` | `185.199.109.153` | 추가 |
   | A | `@` | `185.199.110.153` | 추가 |
   | A | `@` | `185.199.111.153` | 추가 |
   | CNAME | `www` | `host.tistory.io` → `hyobbange.github.io.` | 값 변경 |
   | MX | `@` | `aspmx.daum.net` (10), `alt.aspmx.daum.net` (20) | **그대로 (목표 2)** |
   | TXT | `_github-pages-challenge-hyobbange` | 1번에서 넣은 값 | 그대로 |

4. [직접] 레포 Settings › Pages › Custom domain에 `hfx.kr` 입력 › Save. GitHub가 `main`에 `CNAME` 파일을 커밋하고 DNS를 검사한다. 이때부터 `hyobbange.github.io/<경로>`는 `hfx.kr/<경로>`로 넘어간다 (목표 1)
5. [직접] 인증서가 나오면(몇 분~하루) 같은 화면에서 **Enforce HTTPS** 체크
6. [Claude] `hfx.kr`, `www.hfx.kr`, `/privacy/`, `/terms/`, `/app-ads.txt` 접속과 MX 유지 확인

DNS 변경이 퍼지는 동안(보통 몇 분~몇 시간) 일부 사람에게는 티스토리가 잠깐 더 보일 수 있다. 메일은 MX를 건드리지 않으므로 끊기지 않는다. 오히려 `@` CNAME이 없어져 MX와의 충돌(아래 진단 2)이 사라진다.

## 4단계: 링크 바꾸기 (`claude-apps` 레포에서, 3단계 뒤)
- [Claude] `shared/store/account.json`(지원·마케팅 URL), 앱별 방침·약관 링크(`monster-hunt/store/app-store/listing.json`, 키링 가챠, 앱 안 설정 화면)를 `https://hfx.kr/privacy/`·`/terms/`(언어판은 `/ko/`·`/ja/`)로 바꾸고 스토어 동기화 스크립트로 반영
- [직접] Play Console › 앱 콘텐츠의 개인정보처리방침 URL (API 없음)
- [직접] AdMob에서 app-ads.txt 다시 확인 (스토어 웹사이트가 바뀐 뒤 하루 정도)
- [직접] Google Sites 방침 맨 위에 "hfx.kr/privacy로 옮겼습니다" 링크. 사이트는 지우지 않음

## DNS 진단 (2026-11-05, 가비아)
| 이름 | 레코드 | 값 | 뜻 |
|---|---|---|---|
| `hfx.kr` | CNAME | `host.tistory.io` | 티스토리 블로그 |
| `www.hfx.kr` | CNAME | `host.tistory.io` | 위와 같음 |
| `hfx.kr` | MX | `10 aspmx.daum.net`, `20 alt.aspmx.daum.net` | Daum 메일 |
| `hfx.kr` | TXT(SPF), `_dmarc` | 없음 | 메일 발신 인증 없음 (선택 과제) |

1. 메일(MX)은 사이트와 따로라 그대로 두면 영향 없음.
2. 지금은 `hfx.kr` 자체에 CNAME이 있어 MX와 충돌(규칙 위반). A 레코드로 바꾸면 해소된다.
