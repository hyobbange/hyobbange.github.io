# CLAUDE.md (hyobbange.github.io)

HFX Lab 공개 사이트. GitHub Pages(Jekyll)로 `main` 브랜치 루트를 그대로 배포한다. 도메인 연결 뒤 주소는 `hfx.kr`.
앱 코드·스토어 설정은 비공개 레포 `hyobbange/claude-apps`에 있다. 이 레포는 **공개**다.

## 먼저 읽기
- `docs/progress.md`: 진행 상황, 남은 단계(DNS 연결·링크 교체), DNS 진단 기록.

## 구조
| 경로 | 주소 | 내용 |
|---|---|---|
| `index.md` + `_data/apps.yml` | `/` | 소개 + 서비스 중인 앱 목록 (앱 목록은 `apps.yml`만 고친다) |
| `_policies/<문서>/<언어>/<시행일>.md` | `/<문서>/<언어>/<시행일>/` | 개인정보처리방침(`privacy`)·이용약관(`terms`)의 버전별 원문. 한 번 게시한 버전은 고치지 않는다 |
| `privacy/index.md`, `privacy/ko.md`, `privacy/ja.md`, `terms/…` | `/privacy/`, `/privacy/ko/`, `/privacy/ja/`, `/terms/`, `/terms/ko/` | 최신판. 같은 문서·언어에서 오늘(한국 시간) 적용 중인 버전을 보여 준다. 기본 주소는 영어. 그 언어판이 없는 문서는 메뉴가 영어판으로 연결 |
| `_layouts/policy.html`, `_includes/policy-view.html`, `_data/i18n.yml` | | 시행일·언어 전환·이전/예정 버전 안내·변경 이력(적용 기간 자동 계산), 화면 문구 (en·ko·ja) |
| `oddball.md`, `oddball/ko.md` | `/oddball/`, `/oddball/ko/` | Oddball(이상한 녀석 찾기, `claude-apps/monster-hunt`) 소개 (영·한) |
| `keyring-gacha.md` | `/keyring-gacha/` | 키링 가챠(`claude-apps/keyring-gacha`) 소개. 앱·스토어가 한국어만이라 한국어 페이지 하나 |
| `_includes/store-links.html` | | `apps.yml`의 스토어 주소로 버튼 (비어 있으면 숨김) |
| `404.md` | 없는 주소 | 안내 |
| `app-ads.txt` | `/app-ads.txt` | AdMob 판매자 인증 (게시자 `pub-3395308029736797`) |
| `CNAME` | | 커스텀 도메인. Settings → Pages에서 도메인을 넣으면 GitHub가 `main`에 직접 커밋한다. 지우지 않는다 |
| `_layouts/default.html`, `assets/style.css` | | 공통 틀·스타일 (밝은/어두운 모드, 언어별 메뉴) |
| `assets/img/<앱>/` | | 앱 아이콘·스크린샷 (스토어 원본을 줄인 것) |

## 약관·방침 바꾸는 법
- 새 버전 = 새 파일 `_policies/<문서>/<언어>/<새 시행일>.md` (front matter `doc`, `lang`, `version: "YYYY-MM-DD"`, `title`, 바뀐 점 `changes`). 이전 파일은 고치지 않는다. 본문 마지막 조항에 이전 버전 링크를 단다 (기존 문서들의 방식). 최신판·이력·적용 기간은 자동.
- 시행일을 미래로 두면 "예정" 버전이 된다: 최신판에 "새 버전이 ○일부터 적용돼요 · 미리 보기"가 뜨고, 시행일(한국 시간 0시)이 되면 페이지 스크립트가 새 버전으로 바꿔 보여 준다. 시행일이 지난 뒤 아무 커밋이나 푸시하면 HTML 자체도 새 버전 기준으로 다시 만들어진다 (스크립트가 꺼진 브라우저·검색 엔진용).
- 이용약관 제3조: 시행 7일 전 게시, 불리하거나 중대한 변경은 30일 전 게시 + 제23조 방법으로 통지. 방침도 같은 기준으로 미리 올린다. 시행일은 사용자가 정한다.
- 언어 추가 = `_data/i18n.yml`에 언어 덩어리 + 버전 파일 + 최신판 페이지(`<문서>/<언어>.md`, permalink `/<문서>/<언어>/`).
- 언어별 문서는 서로 번역본이 아닐 수 있다 (한글 방침은 2024년부터 따로 관리됨). 기준은 영문판, 내용이 바뀌면 언어마다 버전을 따로 낸다.

## 규칙
- **공개 레포다.** 사이트에 실제로 보일 내용만 넣는다. 심사 연락처(전화번호), 광고·결제 계정 ID, 토큰, `claude-apps`의 내부 문서는 넣지 않는다.
- 배포는 "Deploy from a branch"(`main` / root)로 GitHub가 푸시마다 자동으로 한다. 워크플로 파일은 만들지 않는다. `claude-apps`의 "Actions는 요청할 때만" 규칙과 달리, 이 레포에서는 푸시 = 배포가 정상이다. 그래서 `main`에는 확인한 것만 올린다.
- 내부 링크·이미지는 `{{ '/경로' | relative_url }}`로 쓴다.
- 새 앱 페이지: `<앱>.md`(permalink `/<앱>/`) + `assets/img/<앱>/` + `_data/apps.yml`에 항목 추가(`page` 채우기). 문구는 `claude-apps/<앱 폴더>/store/` 등록정보를 바탕으로 맞춘다.
- 작업 브랜치는 최신 `main`에서 만든다 (GitHub가 `main`에 넣은 `CNAME` 커밋을 빠뜨리지 않게).
- 로컬 확인: `jekyll build`(github-pages gem) 후 `_site/`를 열어 본다. `_site/`는 커밋하지 않는다.
- 커밋 메시지는 `site: <내용>` 형식.
