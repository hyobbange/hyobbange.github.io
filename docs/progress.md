# 진행 상황

계획은 `claude-apps` 세션 "hfx.kr을 GitHub Pages로 이전"(2026-11-05)에서 정했다. [직접] = 사용자, [Claude] = Claude.

## 목표 (사용자 2026-11-05)
1. `hfx.kr`(과 모든 하위 경로)로 접속하면 이 사이트가 보인다.
2. 메일은 지금처럼 Daum으로 받는다 (MX 유지).
3. 개인정보처리방침·이용약관을 언어별로 관리하고, 바뀌면 이전 버전을 링크로 볼 수 있다. 기본 주소(`/privacy/`, `/terms/`)는 최신 영문판.
4. 첫 화면은 간단한 소개 + 서비스 중인 앱 목록.

## 완료
- 2026-11-05 · 1·2단계: 뼈대, 첫 화면, Oddball 소개(영·한), `app-ads.txt`, Pages 설정·확인(사용자)
- 2026-11-05 · 목표 3: 버전 구조(`_policies/`). 원문을 그대로 옮김(문단·목록 모양만 사이트에 맞춤, 「」·· 기호 통일)
  - 개인정보처리방침 영문 2025-07-03 (`sites.google.com/view/hfx-lab-pp-global-20250703`)
  - 개인정보처리방침 한글 2024-03-28 (`…/hfx-lab-pp-ko-20240328`), 2025-04-13 (`…/hfx-lab-pp-ko-20250413`), 2026-10-27 (`…/hfx-privacy-policy-ko`, 키링 가챠가 쓰는 현재판)
  - 이용약관 영·한 2026-11-05 **초안** (새로 작성, 사용자 검토 필요)
- 2026-11-05 · 목표 4: 첫 화면 소개 + 앱 목록(`_data/apps.yml`): Oddball, 키링 가챠. 둘 다 Google Play 공개 확인, App Store는 둘 다 아직 404라 버튼 숨김

## 확인·결정 필요
- [ ] 이용약관 초안 검토 (시행일, 제8조 서비스 종료 사전 고지, 제11조 7일/30일 게시, 제12조 대한민국 법·관할)
- [ ] 한글 방침 2026-10-27 제3조 이용목적이 서로 바뀐 것으로 보임: Firebase "맞춤 광고", RevenueCat "앱 사용 통계 분석, 광고 성과 측정". 원문 그대로 옮겼고, 고치려면 새 버전으로 낸다
- [ ] 영문 방침(2025-07-03)에 Firebase Analytics가 없음. 키링 가챠 영어 사용자에게는 한글판과 내용이 다름 → 영문 새 버전 필요
- [ ] App Store 출시되면 `_data/apps.yml`의 `app_store` 채우기
- [ ] app-ads.txt 줄이 AdMob 화면과 같은지 (블로그 원본은 접속이 막혀 비교 못 함)
- [ ] 티스토리 블로그를 `blog.hfx.kr`로 옮길지

## 3단계: 도메인 연결 (목표 1·2) — 사용자 차례
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
- [Claude] `shared/store/account.json`(지원·마케팅 URL), 앱별 방침 링크(`monster-hunt/store/app-store/listing.json`, 키링 가챠)를 `https://hfx.kr/privacy/`(한글판은 `/privacy/ko/`)로 바꾸고 스토어 동기화 스크립트로 반영
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
