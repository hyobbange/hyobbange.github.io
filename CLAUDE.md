# CLAUDE.md (hyobbange.github.io)

HFX Lab 공개 사이트. GitHub Pages(Jekyll)로 `main` 브랜치 루트를 그대로 배포한다. 도메인 연결 뒤 주소는 `hfx.kr`.
앱 코드·스토어 설정은 비공개 레포 `hyobbange/claude-apps`에 있다. 이 레포는 **공개**다.

## 먼저 읽기
- `docs/progress.md`: 진행 상황, 남은 단계(DNS 연결·링크 교체), DNS 진단 기록.

## 구조
| 경로 | 주소 | 내용 |
|---|---|---|
| `index.md` | `/` | 앱 목록 |
| `privacy.md` | `/privacy/` | 모든 앱 공통 개인정보처리방침 (Google Sites 2025-07-03판을 옮김) |
| `oddball.md`, `oddball/ko.md` | `/oddball/`, `/oddball/ko/` | Oddball(이상한 녀석 찾기, `claude-apps/monster-hunt`) 소개 |
| `404.md` | 없는 주소 | 안내 |
| `app-ads.txt` | `/app-ads.txt` | AdMob 판매자 인증 (게시자 `pub-3395308029736797`) |
| `_layouts/default.html`, `assets/style.css` | | 공통 틀·스타일 (밝은/어두운 모드) |
| `assets/img/<앱>/` | | 앱 아이콘·스크린샷 (스토어 원본을 540px 폭으로 줄인 것) |

## 규칙
- **공개 레포다.** 사이트에 실제로 보일 내용만 넣는다. 심사 연락처(전화번호), 광고·결제 계정 ID, 토큰, `claude-apps`의 내부 문서는 넣지 않는다.
- 배포는 "Deploy from a branch"(`main` / root)로 GitHub가 푸시마다 자동으로 한다. 워크플로 파일은 만들지 않는다. `claude-apps`의 "Actions는 요청할 때만" 규칙과 달리, 이 레포에서는 푸시 = 배포가 정상이다. 그래서 `main`에는 확인한 것만 올린다.
- 내부 링크·이미지는 `{{ '/경로' | relative_url }}`로 쓴다.
- 새 앱 페이지: `<앱>.md`(permalink `/<앱>/`) + `assets/img/<앱>/` + `index.md`에 카드 추가. 문구는 `claude-apps/<앱 폴더>/store/` 등록정보를 바탕으로 맞춘다.
- 방침을 고치면 맨 위 시행일과 10번 항목을 함께 고친다.
- 로컬 확인: `jekyll build`(github-pages gem) 후 `_site/`를 열어 본다. `_site/`는 커밋하지 않는다.
- 커밋 메시지는 `site: <내용>` 형식.
