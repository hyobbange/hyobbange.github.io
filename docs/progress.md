# 진행 상황

계획은 `claude-apps` 세션 "hfx.kr을 GitHub Pages로 이전"(2026-11-05)에서 정했다. [직접] = 사용자, [Claude] = Claude.

## 1단계: 레포 준비 — 완료
- [x] [직접] 공개 레포 `hyobbange/hyobbange.github.io` 만들기
- [x] [직접] Claude GitHub 앱에 레포 추가, 이 레포로 새 세션

## 2단계: 사이트 만들기 (미리보기 주소 `hyobbange.github.io`)
- [x] [Claude] 뼈대: CLAUDE.md, 이 문서, 공통 틀, 첫 화면, 404 (2026-11-05)
- [x] [Claude] `/privacy/`: Google Sites(`sites.google.com/view/hfx-lab-pp-global-20250703`) 본문을 그대로 옮김. 문구는 바꾸지 않음
- [x] [Claude] `/oddball/`(영어), `/oddball/ko/`(한국어): Play 등록정보 문구·스크린샷 바탕
- [x] [Claude] `app-ads.txt`: `google.com, pub-3395308029736797, DIRECT, f08c47fec0942fa0`
  - 블로그(`hyobbange.blogspot.com/app-ads.txt`)는 작업환경에서 접속이 막혀 직접 비교하지 못했다. 게시자 ID는 `claude-apps/shared/store/account.json`의 값이고, 줄 형식은 AdMob 표준 형식이다. **AdMob › 앱 › app-ads.txt 화면의 줄과 같은지 확인 필요.**
- [ ] [직접] 레포 Settings → Pages → Source "Deploy from a branch", `main` / `(root)`
- [ ] [직접] `hyobbange.github.io`, `/privacy/`, `/oddball/`, `/app-ads.txt` 확인
- 참고: 스토어 링크(App Store `id6818129344`, Play `com.hfx.monsterhunt`)는 `claude-apps/monster-hunt/store/youtube.md`에서 가져왔다. 앱이 아직 공개 전이면 링크가 열리지 않는다.

## 3단계: 도메인 연결 (사이트 확인 뒤)
1. [직접] GitHub 계정 Settings → Pages → 도메인 인증에 `hfx.kr` 추가, 나오는 TXT 레코드를 가비아에 넣고 Verify
2. [직접·결정] 티스토리: `blog.hfx.kr`로 옮길지(가비아 `blog` CNAME `host.tistory.io` + 티스토리 개인 도메인 변경), tistory.com 주소로만 둘지. **아직 결정 안 됨.** 정해지면 404 페이지에 옛 블로그 글 안내를 넣는다
3. [직접] 가비아 DNS 변경 (바꾸기 전 화면 캡처를 보여 주면 한 줄씩 확인)
4. [Claude] 레포에 `CNAME` 파일(`hfx.kr`) 추가
5. [직접] 레포 Settings → Pages → Custom domain `hfx.kr`, 인증서가 나오면 Enforce HTTPS
6. [Claude] `hfx.kr`, `/privacy/`, `/app-ads.txt` 접속과 MX 유지 확인

## 4단계: 링크 바꾸기 (`claude-apps` 레포에서)
- [Claude] `shared/store/account.json`(지원·마케팅 URL), Oddball 방침 링크(`monster-hunt/store/app-store/listing.json` 등)를 hfx.kr로 바꾸고 스토어 동기화 스크립트로 반영
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

- 메일(MX)은 사이트와 따로라 그대로 두면 영향 없음.
- 지금은 `hfx.kr` 자체에 CNAME이 있어 MX와 충돌(규칙 위반). A 레코드로 바꾸면 해소된다.
- 바꿀 내용:

| 이름 | 지금 | 바꾼 뒤 |
|---|---|---|
| `@` | CNAME `host.tistory.io` | 삭제 후 A 4개: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | CNAME `host.tistory.io` | CNAME `hyobbange.github.io` |
| `blog` | 없음 | CNAME `host.tistory.io` (블로그 유지 시) |
| MX 2줄 | Daum | **그대로** |
