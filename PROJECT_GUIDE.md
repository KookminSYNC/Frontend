# Career Copilot 프로젝트 설명서

이 문서는 `Career Copilot` 프론트엔드 프로젝트가 어떻게 생겼고, 어떤 파일이 어떤 일을 하는지 설명합니다.
초등학생도 이해할 수 있도록, 먼저 쉬운 비유로 설명하고 그 다음 실제 파일 이름을 하나씩 살펴봅니다.

## 1. 한 줄 요약

이 프로젝트는 해외취업 AI 커리어 플랫폼 `Career Copilot`의 화면만 만든 프론트엔드 프로젝트입니다.

서버, 데이터베이스, 실제 로그인, 실제 AI API는 아직 없습니다.
사용자가 보는 화면, 버튼, 모달, 설문, 추천 결과는 React 상태와 mock 데이터로 움직입니다.

## 2. 아주 쉬운 비유

이 프로젝트를 하나의 큰 건물이라고 생각하면 쉽습니다.

- `app/` 폴더는 건물 안의 방 번호입니다.
  예를 들어 `/roles`는 직무 추천 방, `/resume`은 자소서 첨삭 방입니다.
- `components/` 폴더는 방 안에 놓는 가구입니다.
  예를 들어 `Header`는 모든 방 위에 붙어 있는 안내판이고, `Modal`은 화면 위에 뜨는 작은 창입니다.
- `data/` 폴더는 선생님이 준비해 둔 참고 노트입니다.
  나라, 회사, 직무, 설문 질문 같은 데이터가 들어 있습니다.
- `public/` 폴더는 그림 보관함입니다.
  로고, 히어로 이미지, 아마존 로고 같은 이미지가 들어 있습니다.
- 설정 파일들은 건물을 짓는 규칙표입니다.
  어떤 도구를 쓰는지, 어떤 명령어로 실행하는지, TypeScript를 어떻게 검사하는지 정합니다.

## 3. 사용 기술

| 기술 | 이 프로젝트에서 하는 일 |
| --- | --- |
| Next.js `16.2.9` | 페이지 라우팅과 앱 실행을 담당합니다. |
| React `19.2.4` | 화면을 작은 컴포넌트로 나누고 상태를 관리합니다. |
| TypeScript | 코드에 타입을 붙여 실수를 줄입니다. |
| Tailwind CSS `4` | `className` 안에 유틸리티 클래스를 써서 스타일을 만듭니다. |
| lucide-react | 버튼과 카드에 들어가는 아이콘을 제공합니다. |
| framer-motion | 모달, 카드, 배너 같은 요소에 부드러운 움직임을 줍니다. |

중요한 프로젝트 규칙:

- 스타일은 Tailwind CSS를 사용합니다.
- UI에는 그라데이션 색상을 사용하지 않습니다.
- 백엔드 기능은 만들지 않고 프론트엔드 mock으로만 동작합니다.

## 4. 실행 방법

프로젝트 폴더에서 아래 명령어를 사용합니다.

```bash
npm.cmd run dev
```

개발 서버를 실행합니다.
보통 브라우저에서 `http://localhost:3000`으로 확인합니다.

```bash
npm.cmd run build
```

배포용으로 빌드가 되는지 확인합니다.

```bash
npm.cmd run lint
```

코드 규칙에 어긋나는 부분이 있는지 검사합니다.

```bash
npm.cmd run start
```

`npm.cmd run build` 후에 실제 배포 서버처럼 실행합니다.

## 5. 전체 파일 지도

현재 주요 파일 구조는 아래와 같습니다.

```text
front/
├─ app/
│  ├─ companies/
│  │  └─ page.tsx
│  ├─ community/
│  │  └─ page.tsx
│  ├─ interview/
│  │  └─ page.tsx
│  ├─ resume/
│  │  └─ page.tsx
│  ├─ roles/
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ icon.svg
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ AppShell.tsx
│  ├─ CareerCopilotApp.tsx
│  ├─ CareerJourney.tsx
│  ├─ CompaniesPage.tsx
│  ├─ CommunityPage.tsx
│  ├─ CompanyLogo.tsx
│  ├─ CountryPanel.tsx
│  ├─ Header.tsx
│  ├─ Hero.tsx
│  ├─ InterviewPracticePage.tsx
│  ├─ Modal.tsx
│  ├─ ResumeReviewPage.tsx
│  ├─ RoleQuickCheckModal.tsx
│  ├─ RoleResultPanel.tsx
│  ├─ RoleSurveyForm.tsx
│  ├─ RoleSurveyPage.tsx
│  ├─ SuccessStories.tsx
│  ├─ Toast.tsx
│  └─ WebinarBanner.tsx
├─ data/
│  ├─ countries.ts
│  ├─ journeySteps.ts
│  ├─ roleSurvey.ts
│  └─ stories.ts
├─ public/
│  ├─ amazon-logo.svg
│  ├─ career-copilot-hero.png
│  ├─ career-copilot-plane-logo.svg
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ AGENTS.md
├─ README.md
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
└─ tsconfig.json
```

## 6. 화면이 켜지는 큰 순서

사용자가 브라우저에서 사이트를 열면 대략 이런 순서로 움직입니다.

1. Next.js가 `app/layout.tsx`를 먼저 읽습니다.
2. `layout.tsx`가 전체 HTML 뼈대와 공통 껍데기인 `AppShell`을 붙입니다.
3. `AppShell`이 모든 페이지에서 공통으로 쓰는 `Header`, 로그인 모달, 시작하기 모달, Toast를 준비합니다.
4. 현재 주소에 맞는 `app/.../page.tsx` 파일이 실행됩니다.
5. 각 `page.tsx`는 실제 화면 컴포넌트를 불러옵니다.
6. 화면 컴포넌트는 `data/`에 있는 mock 데이터를 읽어서 카드, 설문, 추천 결과를 보여줍니다.

예를 들어 사용자가 `/roles`에 들어가면:

```text
/roles 주소 접속
→ app/layout.tsx
→ components/AppShell.tsx
→ app/roles/page.tsx
→ components/RoleSurveyPage.tsx
→ RoleQuickCheckModal, RoleSurveyForm, RoleResultPanel 표시
```

## 7. `app/` 폴더 설명

`app/` 폴더는 Next.js App Router에서 페이지 주소를 담당합니다.
폴더 이름이 주소가 됩니다.

### `app/layout.tsx`

모든 페이지의 공통 뼈대입니다.

하는 일:

- HTML 언어를 `ko`로 설정합니다.
- 페이지 제목과 설명 metadata를 설정합니다.
- Geist 폰트를 불러옵니다.
- `globals.css`를 불러와 전역 스타일을 적용합니다.
- 모든 페이지를 `<AppShell>{children}</AppShell>`로 감쌉니다.

쉽게 말하면, 모든 방을 감싸는 건물의 벽과 천장입니다.

### `app/globals.css`

전체 사이트에 공통으로 적용되는 CSS입니다.

하는 일:

- Tailwind CSS를 불러옵니다.
- 기본 배경색과 글자색을 정합니다.
- 폰트 변수를 설정합니다.
- 전체 페이지의 부드러운 스크롤을 켭니다.
- 버튼, 입력창, 선택창, textarea가 같은 폰트를 쓰도록 맞춥니다.
- 드래그해서 글자를 선택했을 때 색상을 정합니다.

### `app/page.tsx`

홈 주소 `/`에 해당하는 파일입니다.

하는 일:

- `CareerCopilotApp` 컴포넌트를 렌더링합니다.
- 홈 랜딩 화면 전체를 시작합니다.

### `app/roles/page.tsx`

주소 `/roles`에 해당합니다.

하는 일:

- `RoleSurveyPage`를 렌더링합니다.
- 직무 추천 설문 페이지로 연결됩니다.

### `app/resume/page.tsx`

주소 `/resume`에 해당합니다.

하는 일:

- `ResumeReviewPage`를 렌더링합니다.
- 자소서와 커버레터를 mock으로 첨삭하는 화면입니다.

### `app/interview/page.tsx`

주소 `/interview`에 해당합니다.

하는 일:

- `InterviewPracticePage`를 렌더링합니다.
- 면접 질문과 답변 피드백 화면입니다.

### `app/community/page.tsx`

주소 `/community`에 해당합니다.

하는 일:

- `CommunityPage`를 렌더링합니다.
- 국가별 합격 후기, Q&A, 스터디 글을 보여줍니다.

### `app/companies/page.tsx`

주소 `/companies`에 해당합니다.

하는 일:

- `CompaniesPage`를 렌더링합니다.
- 국가별 추천 기업 카드와 기업 상세 모달을 보여줍니다.

### `app/icon.svg`

앱 아이콘으로 사용할 수 있는 SVG 파일입니다.
현재 Career Copilot 비행기 로고 계열의 아이콘으로 쓰입니다.

### `app/favicon.ico`

브라우저 탭에 보일 수 있는 기본 favicon 파일입니다.
Next.js 기본 구조에서 남아 있는 파일입니다.

## 8. `components/` 폴더 설명

`components/`는 화면 조각을 모아 둔 곳입니다.
큰 화면을 작은 블록으로 나누면 관리하기 쉽습니다.

### `components/AppShell.tsx`

모든 페이지를 감싸는 공통 껍데기입니다.

하는 일:

- 상단 헤더를 모든 페이지에 보여줍니다.
- 로그인 모달을 관리합니다.
- 시작하기 모달을 관리합니다.
- Toast 알림을 관리합니다.
- `useAppShell()`이라는 도구를 만들어 다른 컴포넌트가 공통 기능을 쓸 수 있게 합니다.

가지고 있는 주요 상태:

- `activeModal`: 지금 열려 있는 공통 모달이 무엇인지 저장합니다.
- `toast`: 화면 아래에 보여줄 짧은 알림 문구를 저장합니다.

예시:

- 헤더에서 `로그인` 버튼을 누르면 `activeModal`이 `"login"`이 됩니다.
- 그러면 로그인 모달이 뜹니다.
- 데모 로그인 폼을 제출하면 모달이 닫히고 Toast가 뜹니다.

### `components/Header.tsx`

화면 맨 위의 상단 메뉴입니다.

하는 일:

- Career Copilot 로고를 보여줍니다.
- 상단 메뉴를 보여줍니다.
- 현재 주소에 맞는 메뉴에 보라색 active 표시를 합니다.
- 언어 선택 드롭다운을 보여줍니다.
- 로그인 버튼과 시작하기 버튼을 보여줍니다.
- 모바일 화면에서는 햄버거 메뉴를 보여줍니다.

메뉴 연결:

| 메뉴 | 이동 주소 |
| --- | --- |
| 홈 | `/` |
| 직무 추천 | `/roles` |
| 자소서 첨삭 | `/resume` |
| AI 모의면접 | `/interview` |
| 커뮤니티 | `/community` |
| 기업 추천 | `/companies` |

현재 메뉴 판단:

- `usePathname()`으로 현재 주소를 읽습니다.
- 주소가 메뉴 주소와 같거나 시작하면 active 상태로 표시합니다.

### `components/CareerCopilotApp.tsx`

홈 페이지의 전체 화면을 조립하는 컴포넌트입니다.

하는 일:

- 홈 히어로 영역을 보여줍니다.
- 웨비나 배너를 보여줍니다.
- 합격 사례 영역을 보여줍니다.
- 5단계 커리어 여정 영역을 보여줍니다.
- 홈 안에서 쓰는 회사 상세 모달, 합격 사례 모달, 웨비나 신청 모달을 관리합니다.

가지고 있는 주요 상태:

- `selectedCountry`: 홈 오른쪽 패널에서 선택한 나라입니다.
- `activeModal`: 홈 화면 안에서 열려 있는 모달입니다.
- `selectedCompany`: 사용자가 클릭한 회사입니다.
- `selectedStory`: 사용자가 클릭한 합격 사례입니다.

중요한 흐름:

- 국가 선택은 `Hero` 안의 `CountryPanel`에서 바뀝니다.
- 회사 카드를 누르면 회사 상세 모달이 뜹니다.
- 합격 사례 카드를 누르면 합격 사례 모달이 뜹니다.
- 웨비나 배너를 누르면 웨비나 신청 모달이 뜹니다.

### `components/Hero.tsx`

홈 화면 맨 위의 큰 소개 영역입니다.

하는 일:

- 왼쪽에 큰 문구와 CTA 버튼을 보여줍니다.
- 가운데에 `career-copilot-hero.png` 이미지를 보여줍니다.
- 오른쪽에 `CountryPanel`을 붙입니다.
- `무료로 시작하기` 버튼을 누르면 AppShell의 시작하기 모달이 열립니다.
- `서비스 둘러보기` 버튼을 누르면 커리어 여정 영역으로 스크롤합니다.
- `50,000+` 영역을 누르면 합격 사례 영역으로 스크롤합니다.

중앙 이미지는 클릭 기능이 없는 장식 이미지입니다.
국가 선택 같은 실제 조작은 오른쪽 패널에서만 합니다.

### `components/CountryPanel.tsx`

홈 오른쪽에 있는 국가 추천 패널입니다.

하는 일:

- 미국, 중국, 일본, 호주, 캐나다, 독일 국기 버튼을 보여줍니다.
- 선택된 국가의 TOP 기업을 보여줍니다.
- 선택된 국가의 평균 연봉을 보여줍니다.
- 회사 카드를 클릭하면 부모 컴포넌트에 알려서 회사 상세 모달을 열게 합니다.
- `더보기`를 누르면 Toast로 간단 안내를 띄웁니다.

데이터 출처:

- `data/countries.ts`의 `countries`
- `data/countries.ts`의 `countryData`
- `data/countries.ts`의 `countryFlagImages`
- `data/countries.ts`의 `companyLogos`

### `components/CompanyLogo.tsx`

회사 로고를 보여주는 재사용 컴포넌트입니다.

하는 일:

- 로고 주소가 있으면 `next/image`로 이미지를 보여줍니다.
- 로고 이미지가 깨지거나 없으면 건물 아이콘으로 대체합니다.
- 외부 회사 로고는 최적화 문제를 피하기 위해 `unoptimized` 옵션을 씁니다.

왜 필요한가:

- 여러 화면에서 회사 로고를 반복해서 보여줍니다.
- 로고가 깨질 때마다 같은 방식으로 깔끔하게 대체할 수 있습니다.

### `components/WebinarBanner.tsx`

홈 중간에 있는 웨비나 배너입니다.

하는 일:

- 아마존 합격자 웨비나 정보를 보여줍니다.
- 날짜, 시간, 연사 정보를 보여줍니다.
- `amazon-logo.svg`를 사용합니다.
- 배너를 클릭하면 웨비나 신청 모달이 열립니다.

### `components/SuccessStories.tsx`

합격 사례 카드 목록입니다.

하는 일:

- `data/stories.ts`의 합격 사례를 카드로 보여줍니다.
- 회사 로고를 `CompanyLogo`로 보여줍니다.
- 카드를 누르면 합격 사례 상세 모달이 열리도록 부모에게 알려줍니다.
- `더보기` 버튼을 누르면 Toast를 띄웁니다.

### `components/CareerJourney.tsx`

AI와 함께하는 5단계 커리어 여정 영역입니다.

하는 일:

- 5개의 단계 카드를 보여줍니다.
- 사용자가 단계를 클릭하면 선택된 단계가 바뀝니다.
- 선택된 단계의 자세한 내용을 아래에 보여줍니다.

가지고 있는 상태:

- `selectedStep`: 현재 선택된 단계 번호입니다.

데이터 출처:

- `data/journeySteps.ts`

### `components/Modal.tsx`

여러 곳에서 쓰는 공통 모달 창입니다.

하는 일:

- 화면 위에 어두운 배경을 깔고 가운데 흰색 창을 띄웁니다.
- 제목, 설명, 닫기 버튼을 보여줍니다.
- 안쪽 내용은 `children`으로 받습니다.
- 바깥 배경이나 닫기 버튼을 누르면 닫힙니다.
- framer-motion으로 열릴 때 살짝 움직이는 효과가 있습니다.

사용되는 곳:

- 로그인
- 시작하기
- 웨비나 신청
- 회사 상세
- 합격 사례 상세
- 커뮤니티 글쓰기
- 직무 성격 확인 팝업

### `components/Toast.tsx`

화면 아래에 잠깐 뜨는 알림입니다.

하는 일:

- `message`가 있으면 알림을 보여줍니다.
- `message`가 없으면 아무것도 보여주지 않습니다.
- `role="status"`와 `aria-live="polite"`가 있어 보조 기술에도 친화적입니다.

예시:

- `웨비나 신청이 완료되었습니다.`
- `면접 피드백을 업데이트했습니다.`
- `정밀 직무 추천 결과가 생성되었습니다.`

### `components/RoleSurveyPage.tsx`

`/roles` 직무 추천 페이지의 중심 컴포넌트입니다.

하는 일:

- 직무 추천 페이지 상단 히어로를 보여줍니다.
- 오른쪽 진행률 카드를 보여줍니다.
- 첫 진입 시 간단 직무 성격 확인 팝업을 띄웁니다.
- 20문항 정밀 설문을 보여줍니다.
- 설문 결과를 계산하고 TOP 3 직무를 보여줍니다.

가지고 있는 주요 상태:

- `answers`: 20문항 답변을 저장합니다.
- `results`: 계산된 TOP 3 직무 결과를 저장합니다.
- `quickOpen`: 간단 팝업이 열려 있는지 저장합니다.

저장소 사용:

- `sessionStorage`의 `careerCopilotRolePopupSeen`
  - 같은 브라우저 세션에서 팝업을 반복해서 띄우지 않기 위해 사용합니다.
- `localStorage`의 `careerCopilotRoleSurveyResult`
  - 마지막 정밀 설문 결과를 저장합니다.

결과 계산 방식:

1. 각 질문은 하나의 성향 축을 가집니다.
2. 사용자의 답변 점수와 질문 가중치를 곱합니다.
3. 축별 점수를 합칩니다.
4. 각 직무 프로필의 축 가중치와 비교합니다.
5. 가장 점수가 높은 직무 TOP 3을 보여줍니다.

### `components/RoleQuickCheckModal.tsx`

간단 직무 성격 확인 팝업입니다.

하는 일:

- 5개의 간단 질문을 보여줍니다.
- 사용자가 답을 고르면 성향 축 점수를 계산합니다.
- 모든 질문을 답하면 `간단 결과`를 보여줍니다.
- `정밀 설문으로 이어가기` 버튼을 누르면 팝업이 닫히고 설문 영역으로 이동합니다.

### `components/RoleSurveyForm.tsx`

20문항 정밀 설문 폼입니다.

하는 일:

- `data/roleSurvey.ts`의 `roleSurveyQuestions`를 화면에 뿌립니다.
- 각 질문마다 1점부터 5점까지 선택 버튼을 보여줍니다.
- 답변된 질문에는 체크 아이콘을 보여줍니다.
- 20문항을 모두 답하기 전에는 결과 버튼을 비활성화합니다.
- 모두 답하면 `TOP 3 직무 결과 보기` 버튼을 누를 수 있습니다.

점수 버튼 의미:

| 점수 | 의미 |
| --- | --- |
| 1 | 전혀 아님 |
| 2 | 낮음 |
| 3 | 보통 |
| 4 | 높음 |
| 5 | 매우 높음 |

### `components/RoleResultPanel.tsx`

정밀 설문 결과를 보여주는 패널입니다.

하는 일:

- 결과가 없으면 `설문을 완료하면 결과가 표시됩니다` 안내를 보여줍니다.
- 결과가 있으면 TOP 3 추천 직무를 보여줍니다.
- 각 직무마다 매칭률, 요약, 추천 이유, 필요한 역량을 보여줍니다.
- 해당 직무와 맞는 국가/기업 후보를 보여줍니다.

데이터 연결:

- 직무 결과는 `RoleSurveyPage`에서 계산해서 전달합니다.
- 국가/기업 후보는 `data/countries.ts`의 회사 직무와 비교해서 찾습니다.

### `components/ResumeReviewPage.tsx`

`/resume` 자소서 첨삭 페이지입니다.

하는 일:

- 지원 국가를 선택합니다.
- 관심 직무를 선택합니다.
- 지원 기업을 선택합니다.
- 자소서 또는 커버레터 초안을 입력합니다.
- mock 점수를 보여줍니다.
- 개선 제안과 ATS 키워드를 보여줍니다.

점수 계산 방식:

- 글자 수가 길어질수록 기본 점수가 조금 올라갑니다.
- 자소서 안에 직무 이름 일부가 들어 있으면 추가 점수를 줍니다.
- 최대 점수는 96점입니다.

주의:

- 실제 AI 첨삭이 아닙니다.
- 프론트엔드에서 보여주는 데모 계산입니다.

### `components/InterviewPracticePage.tsx`

`/interview` AI 모의면접 페이지입니다.

하는 일:

- 국가를 선택합니다.
- 직무를 선택합니다.
- 면접 질문을 선택합니다.
- 답변을 입력합니다.
- 전달력, 직무 적합성, 구조화 점수를 mock으로 보여줍니다.
- 강점과 보완점 피드백을 보여줍니다.

점수 계산 방식:

- 답변 글자 수를 기준으로 전달력 점수를 간단히 계산합니다.
- 다른 점수는 전달력 점수에서 조금 더하거나 뺀 값입니다.

주의:

- 실제 음성 인식이나 AI 분석은 없습니다.
- 지금은 화면 흐름을 보여주는 데모입니다.

### `components/CommunityPage.tsx`

`/community` 커뮤니티 페이지입니다.

하는 일:

- 왼쪽에서 국가를 선택합니다.
- 선택한 국가에 해당하는 mock 게시글을 보여줍니다.
- 게시글 카드를 클릭하면 Toast를 띄웁니다.
- `글쓰기` 버튼을 누르면 글쓰기 모달이 열립니다.
- 글쓰기 제출 시 실제 저장은 하지 않고 Toast만 보여줍니다.

게시글 종류:

- 합격 후기
- Q&A
- 스터디

### `components/CompaniesPage.tsx`

`/companies` 기업 추천 페이지입니다.

하는 일:

- 왼쪽에서 국가를 선택합니다.
- 선택 국가의 평균 연봉을 보여줍니다.
- 선택 국가의 TOP 기업 카드를 그리드로 보여줍니다.
- 기업 카드를 클릭하면 기업 상세 모달을 보여줍니다.
- 상세 모달에는 국가, 추천 직무, 경쟁률, 난이도, 필요 역량이 나옵니다.

데이터 출처:

- `data/countries.ts`

## 9. `data/` 폴더 설명

`data/` 폴더에는 화면에 보여줄 가짜 데이터가 들어 있습니다.
여기 있는 데이터는 서버에서 가져오는 것이 아니라 코드 안에 적혀 있는 mock 데이터입니다.

### `data/countries.ts`

국가와 기업 추천 데이터의 중심 파일입니다.

들어 있는 주요 내용:

- 사용 가능한 국가 목록
- 국가별 국기
- 국가별 한글 이름과 영어 이름
- 국가별 평균 연봉
- 국가별 TOP 기업
- 기업별 추천 직무
- 기업별 경쟁률
- 기업별 지원 난이도
- 기업별 필요 역량
- 국기 이미지 주소
- 회사 로고 이미지 주소
- 직무 설명 문구

현재 국가:

- 미국
- 중국
- 일본
- 호주
- 캐나다
- 독일

중요한 export:

| 이름 | 역할 |
| --- | --- |
| `countryKeys` | 사용할 수 있는 국가 key 목록입니다. |
| `CountryKey` | 국가 key 타입입니다. |
| `Company` | 회사 데이터 모양을 정한 타입입니다. |
| `CountryInfo` | 국가 데이터 모양을 정한 타입입니다. |
| `countryData` | 국가별 실제 데이터 객체입니다. |
| `countries` | 국가 데이터를 배열로 바꾼 값입니다. |
| `countryFlagImages` | 국가별 국기 이미지 URL입니다. |
| `companyLogos` | 회사별 로고 이미지 URL입니다. |
| `roleDescriptions` | 직무 이름을 설명 문장으로 바꿔주는 객체입니다. |

### `data/roleSurvey.ts`

직무 추천 설문 데이터와 계산 기준이 들어 있습니다.

들어 있는 주요 내용:

- 10개의 성향 축
- 5문항 간단 설문
- 20문항 정밀 설문
- 직무별 성향 가중치
- 직무별 설명과 필요 역량

10개 성향 축:

| 축 key | 화면 표시 |
| --- | --- |
| `analysis` | 분석형 |
| `making` | 제작형 |
| `planning` | 기획형 |
| `design` | 디자인형 |
| `communication` | 커뮤니케이션형 |
| `infra` | 인프라형 |
| `security` | 보안형 |
| `research` | 연구형 |
| `global` | 글로벌 적응형 |
| `leadership` | 리더십형 |

추천 후보 직무:

- Software Engineer
- Product Manager
- Data Analyst
- Data Scientist
- UX/UI Designer
- AI Engineer
- Business Analyst
- Cloud Engineer
- Security Engineer
- Global Sales

### `data/stories.ts`

합격 사례 데이터입니다.

들어 있는 내용:

- 회사 이름
- 국가
- 합격 직무
- 후기 문구
- 사람 이름
- 학교
- 준비 기간
- 사용한 기능 목록

이 데이터는 `SuccessStories`에서 카드로 보여주고, 홈의 합격 사례 모달에서도 사용합니다.

### `data/journeySteps.ts`

5단계 커리어 여정 데이터입니다.

들어 있는 단계:

1. 적합도 검사
2. 맞춤 기업 추천
3. 자소서 & 면접 준비
4. 실전 지원 & 관리
5. 합격 & 커리어 성장

각 단계에는 제목, 짧은 설명, 자세한 항목 목록이 들어 있습니다.

## 10. `public/` 폴더 설명

`public/` 폴더는 정적 파일을 보관합니다.
여기 넣은 파일은 브라우저에서 바로 접근할 수 있습니다.

예를 들어 `public/career-copilot-hero.png`는 코드에서 `/career-copilot-hero.png`로 사용할 수 있습니다.

### `public/career-copilot-plane-logo.svg`

Career Copilot의 비행기 로고입니다.
현재 헤더 로고로 사용됩니다.

사용 위치:

- `components/Header.tsx`
- 앱 아이콘 계열 작업에도 연결될 수 있습니다.

### `public/career-copilot-hero.png`

홈 가운데에 나오는 큰 히어로 이미지입니다.
지구본, 악수, 글로벌 연결감을 표현합니다.

사용 위치:

- `components/Hero.tsx`

### `public/amazon-logo.svg`

웨비나 배너에 들어가는 아마존 로고입니다.

사용 위치:

- `components/WebinarBanner.tsx`

### `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

Next.js 프로젝트 생성 시 들어온 기본 이미지 파일입니다.
현재 Career Copilot 핵심 UI에서는 크게 사용하지 않습니다.
나중에 필요 없으면 정리할 수 있지만, 지금 문서 작업에서는 건드리지 않습니다.

## 11. 루트 설정 파일 설명

### `package.json`

프로젝트 이름, 실행 명령어, 설치된 라이브러리를 적어 둔 파일입니다.

중요한 scripts:

| 명령어 | 역할 |
| --- | --- |
| `dev` | 개발 서버를 실행합니다. |
| `build` | 배포 가능한지 빌드합니다. |
| `start` | 빌드 후 서버를 실행합니다. |
| `lint` | 코드 규칙 검사를 실행합니다. |

주요 dependencies:

- `next`
- `react`
- `react-dom`
- `lucide-react`
- `framer-motion`

주요 devDependencies:

- `typescript`
- `tailwindcss`
- `@tailwindcss/postcss`
- `eslint`
- `eslint-config-next`

### `package-lock.json`

실제로 설치된 패키지의 정확한 버전 목록입니다.
같은 프로젝트를 다른 컴퓨터에서 설치해도 최대한 같은 결과가 나오게 도와줍니다.

직접 손으로 고치는 파일이 아닙니다.
`npm install` 같은 명령어가 자동으로 바꿉니다.

### `next.config.ts`

Next.js 설정 파일입니다.

현재 하는 일:

- 외부 이미지로 `flagcdn.com`을 허용합니다.
- 외부 회사 favicon 이미지로 `t0.gstatic.com/faviconV2`를 허용합니다.
- Turbopack root를 현재 프로젝트 폴더로 지정합니다.

왜 필요한가:

- `next/image`는 외부 이미지를 마음대로 불러오지 못합니다.
- 사용할 외부 이미지 주소를 미리 허용해야 합니다.

### `tsconfig.json`

TypeScript 설정 파일입니다.

현재 중요한 설정:

- `strict: true`로 타입 검사를 엄격하게 합니다.
- `jsx: react-jsx`로 React JSX를 사용합니다.
- `paths`에서 `@/*`를 `./*`로 연결합니다.

`@/*` 별칭 예시:

```ts
import { Header } from "@/components/Header";
```

위 코드는 실제로는 프로젝트 루트의 `components/Header`를 가리킵니다.

### `postcss.config.mjs`

PostCSS 설정 파일입니다.
Tailwind CSS v4 플러그인을 사용하도록 설정합니다.

### `eslint.config.mjs`

ESLint 설정 파일입니다.
코드 스타일과 잠재적인 문제를 검사할 때 사용됩니다.

### `AGENTS.md`

이 프로젝트에서 AI 코딩 에이전트가 따라야 하는 규칙입니다.

현재 중요한 규칙:

- 모든 스타일은 Tailwind CSS로 작성합니다.
- 답변은 한국어로 합니다.
- UI에 그라데이션 색상 스타일을 사용하지 않습니다.

### `README.md`

프로젝트 기본 설명 문서입니다.
보통 처음 프로젝트를 만들 때 생성되는 안내 문서입니다.

## 12. 데이터가 화면에 들어가는 방식

예를 들어 홈 오른쪽 국가 패널은 이렇게 데이터를 받습니다.

```text
data/countries.ts
→ countryData, countries, countryFlagImages, companyLogos
→ components/CountryPanel.tsx
→ 화면에 국기, 회사, 연봉 표시
```

직무 추천 결과는 이렇게 움직입니다.

```text
data/roleSurvey.ts
→ 20문항 질문과 직무별 가중치 제공
→ components/RoleSurveyForm.tsx에서 답변 받기
→ components/RoleSurveyPage.tsx에서 점수 계산
→ components/RoleResultPanel.tsx에서 TOP 3 표시
```

합격 사례는 이렇게 움직입니다.

```text
data/stories.ts
→ components/SuccessStories.tsx
→ 홈 카드 목록 표시
→ 카드를 클릭하면 CareerCopilotApp에서 상세 모달 표시
```

## 13. 상태 관리 설명

이 프로젝트는 별도의 전역 상태 라이브러리를 쓰지 않습니다.
대부분 React의 기본 기능으로 상태를 관리합니다.

### `useState`

화면 안에서 바뀌는 값을 기억합니다.

예시:

- 현재 선택된 국가
- 현재 열린 모달
- 설문 답변
- 자소서 입력 내용
- 면접 답변 내용

### `useMemo`

계산 결과를 필요할 때만 다시 계산하게 도와줍니다.

예시:

- 자소서 점수 계산
- 면접 점수 계산
- 설문에서 현재 강한 성향 축 계산

### `useRef`

특정 화면 영역을 가리키는 표시용 막대기처럼 사용합니다.

예시:

- 홈에서 `서비스 둘러보기` 버튼을 눌렀을 때 커리어 여정 영역으로 스크롤
- 직무 추천 페이지에서 팝업 완료 후 설문 영역으로 스크롤

### `sessionStorage`

브라우저 탭이 열려 있는 동안만 기억합니다.

사용 위치:

- `/roles` 페이지의 간단 직무 성격 팝업

사용 이유:

- 한 세션에서 팝업을 계속 반복해서 띄우면 귀찮기 때문입니다.

### `localStorage`

브라우저에 조금 더 오래 남는 저장 공간입니다.

사용 위치:

- `/roles` 페이지의 마지막 정밀 설문 결과 저장

주의:

- 현재 코드는 결과를 저장하지만, 페이지를 다시 열 때 자동으로 복원하는 기능은 아직 제한적입니다.
- 백엔드 저장은 아닙니다.

## 14. 주요 화면별 작동 방식

### 홈 `/`

구성:

- 상단 헤더
- 히어로 영역
- 국가 추천 패널
- 웨비나 배너
- 합격 사례
- 5단계 커리어 여정

사용자가 할 수 있는 일:

- 국가를 선택합니다.
- 회사 카드를 눌러 상세 모달을 봅니다.
- 웨비나 배너를 눌러 신청 모달을 봅니다.
- 합격 사례를 눌러 상세 모달을 봅니다.
- 커리어 여정 단계를 클릭해 상세 내용을 봅니다.

### 직무 추천 `/roles`

구성:

- 상단 안내 영역
- 진행률 카드
- 5문항 간단 팝업
- 20문항 정밀 설문
- TOP 3 결과 패널

사용자가 할 수 있는 일:

- 간단 직무 성격을 확인합니다.
- 20문항을 모두 답합니다.
- TOP 3 추천 직무를 확인합니다.
- 결과를 초기화합니다.

### 자소서 첨삭 `/resume`

구성:

- 국가, 직무, 기업 선택
- 자소서 입력 textarea
- 점수 카드
- 개선 제안
- ATS 키워드

사용자가 할 수 있는 일:

- 지원 국가를 바꿉니다.
- 직무와 기업을 선택합니다.
- 자소서 내용을 수정합니다.
- mock 첨삭 리포트를 생성합니다.

### AI 모의면접 `/interview`

구성:

- 국가, 직무 선택
- 질문 목록
- 답변 입력 textarea
- 전달력, 직무 적합성, 구조화 점수
- 강점과 보완점 피드백

사용자가 할 수 있는 일:

- 질문을 고릅니다.
- 답변을 입력합니다.
- mock 피드백을 받습니다.

### 커뮤니티 `/community`

구성:

- 국가 선택 사이드바
- 게시글 목록
- 글쓰기 모달

사용자가 할 수 있는 일:

- 국가별 글을 확인합니다.
- 글쓰기 모달을 열어 작성 흐름을 확인합니다.

### 기업 추천 `/companies`

구성:

- 국가 선택 사이드바
- 평균 연봉 카드
- 기업 카드 그리드
- 기업 상세 모달

사용자가 할 수 있는 일:

- 국가를 선택합니다.
- 기업 카드를 클릭합니다.
- 기업 상세 정보를 확인합니다.

## 15. 새 기능을 추가할 때 어디를 고치면 되는가

### 새 국가를 추가하고 싶을 때

수정할 파일:

- `data/countries.ts`

해야 할 일:

1. `countryKeys`에 새 key를 추가합니다.
2. `countryData`에 새 국가 데이터를 추가합니다.
3. `countryFlagImages`에 국기 이미지 주소를 추가합니다.
4. 회사 로고가 필요하면 `companyLogos`에 추가합니다.

주의:

- `CountryKey` 타입은 `countryKeys`에서 자동으로 만들어집니다.
- 그래서 `countryKeys`와 `countryData`가 맞지 않으면 타입 오류가 날 수 있습니다.

### 새 회사를 추가하고 싶을 때

수정할 파일:

- `data/countries.ts`

해야 할 일:

1. 원하는 국가의 `topCompanies` 배열에 회사를 추가합니다.
2. 회사 이름, 줄임 이름, 추천 직무, 경쟁률, 난이도, 필요 역량을 입력합니다.
3. `companyLogos`에 회사 로고 URL을 추가합니다.

### 직무 설명을 바꾸고 싶을 때

수정할 파일:

- `data/countries.ts`

수정 위치:

- `roleDescriptions`

이 데이터는 홈에서 직무 관련 Toast를 보여줄 때 사용됩니다.

### 20문항 설문 질문을 바꾸고 싶을 때

수정할 파일:

- `data/roleSurvey.ts`

수정 위치:

- `roleSurveyQuestions`

질문을 추가하거나 삭제하면:

- `RoleSurveyForm`은 자동으로 질문 개수를 따라갑니다.
- `RoleSurveyPage`의 완료 조건도 `roleSurveyQuestions.length`를 사용하므로 자동으로 맞춰집니다.

### 추천 직무 후보를 바꾸고 싶을 때

수정할 파일:

- `data/roleSurvey.ts`

수정 위치:

- `roleProfiles`

해야 할 일:

- 직무 이름을 정합니다.
- 요약과 추천 이유를 적습니다.
- 필요한 역량을 적습니다.
- 10개 성향 축의 가중치를 조정합니다.

### 상단 메뉴를 추가하고 싶을 때

수정할 파일:

- `components/Header.tsx`
- `app/새주소/page.tsx`
- 필요하면 `components/새페이지컴포넌트.tsx`

해야 할 일:

1. `Header.tsx`의 `navItems`에 메뉴를 추가합니다.
2. `app/새주소/page.tsx`를 만듭니다.
3. 그 페이지에서 보여줄 컴포넌트를 만듭니다.

### 로고 이미지를 바꾸고 싶을 때

수정할 파일:

- `public/career-copilot-plane-logo.svg`

사용 위치:

- `components/Header.tsx`

같은 파일 이름으로 이미지를 교체하면 Header 코드는 그대로 둘 수 있습니다.

### 홈 중앙 이미지를 바꾸고 싶을 때

수정할 파일:

- `public/career-copilot-hero.png`

사용 위치:

- `components/Hero.tsx`

이미지 이름을 그대로 유지하면 코드 수정 없이 이미지 내용만 바꿀 수 있습니다.

## 16. 디자인 규칙

현재 UI는 아래 방향을 따릅니다.

- 배경은 대부분 흰색 또는 아주 연한 보라색입니다.
- 핵심 포인트 색은 `#6C5CE7`입니다.
- 진한 텍스트는 `#111827`입니다.
- 보조 텍스트는 `#6B7280` 계열입니다.
- 테두리는 `#E5E7EB` 계열을 많이 씁니다.
- 그라데이션은 사용하지 않습니다.
- 카드 안에 카드가 너무 많이 겹치지 않게 구성합니다.
- 버튼에는 아이콘과 명확한 텍스트를 함께 쓰는 경우가 많습니다.

자주 쓰는 색:

| 색 | 용도 |
| --- | --- |
| `#6C5CE7` | 주요 보라색, 버튼, active 메뉴 |
| `#4B32D9` | hover 시 더 진한 보라색 |
| `#F3F0FF` | 연한 보라색 배경 |
| `#FBFAFF` | 아주 연한 패널 배경 |
| `#111827` | 진한 본문 글자 |
| `#6B7280` | 보조 설명 글자 |
| `#E5E7EB` | 카드와 입력창 테두리 |

## 17. 지금 없는 기능

현재 프로젝트는 프론트엔드 mock입니다.
아래 기능은 아직 실제로 구현되어 있지 않습니다.

- 실제 회원가입
- 실제 로그인 인증
- 서버 API
- 데이터베이스 저장
- 실제 AI 분석
- 실제 파일 업로드
- 실제 음성 녹음
- 실제 게시글 저장
- 실제 결제

화면에서는 기능처럼 보이지만, 대부분 Toast나 mock 계산으로 동작합니다.

## 18. 확인 체크리스트

작업 후 아래를 확인하면 좋습니다.

```bash
npm.cmd run lint
```

코드 규칙 검사입니다.

```bash
npm.cmd run build
```

프로덕션 빌드가 되는지 확인합니다.

수동 확인:

- `/` 홈이 열리는지 확인합니다.
- 상단 메뉴를 눌러 `/roles`, `/resume`, `/interview`, `/community`, `/companies`로 이동되는지 확인합니다.
- 현재 메뉴에 보라색 밑줄이 표시되는지 확인합니다.
- `/roles` 첫 진입 시 간단 직무 성격 팝업이 뜨는지 확인합니다.
- 20문항을 다 답하기 전에는 결과 버튼이 비활성화되는지 확인합니다.
- 20문항을 다 답하면 TOP 3 결과가 나오는지 확인합니다.
- 홈에서 국가 선택이 오른쪽 패널에서만 바뀌는지 확인합니다.
- 회사 카드 클릭 시 상세 모달이 열리는지 확인합니다.
- 모바일 화면에서 메뉴가 열리고 페이지 이동이 되는지 확인합니다.

## 19. 초간단 요약

- `app/`은 주소와 페이지를 담당합니다.
- `components/`는 화면 부품을 담당합니다.
- `data/`는 mock 데이터를 담당합니다.
- `public/`은 이미지 파일을 담당합니다.
- `AppShell`은 모든 페이지의 공통 껍데기입니다.
- `Header`는 상단 메뉴입니다.
- `CareerCopilotApp`은 홈 화면입니다.
- `RoleSurveyPage`는 직무 추천 설문 화면입니다.
- 서버 없이 브라우저 안에서만 동작하는 프론트엔드 데모입니다.
