export const surveyAxes = [
  "analysis",
  "making",
  "planning",
  "design",
  "communication",
  "infra",
  "security",
  "research",
  "global",
  "leadership",
] as const;

export type SurveyAxis = (typeof surveyAxes)[number];

export type SurveyQuestion = {
  id: string;
  title: string;
  description: string;
  axis: SurveyAxis;
  weight: number;
};

export type RoleSurveyTypeKey = "role-fit" | "global-fit" | "skill-fit";

export type RoleSurveyType = {
  key: RoleSurveyTypeKey;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
  questionIds: string[];
};

export type QuickQuestion = {
  id: string;
  title: string;
  options: {
    label: string;
    axis: SurveyAxis;
  }[];
};

export type RoleProfile = {
  role: string;
  title: string;
  summary: string;
  reason: string;
  skills: string[];
  axisWeights: Record<SurveyAxis, number>;
};

export const axisLabels: Record<SurveyAxis, string> = {
  analysis: "분석형",
  making: "제작형",
  planning: "기획형",
  design: "디자인형",
  communication: "커뮤니케이션형",
  infra: "인프라형",
  security: "보안형",
  research: "연구형",
  global: "글로벌 적응형",
  leadership: "리더십형",
};

export const quickQuestions: QuickQuestion[] = [
  {
    id: "quick-1",
    title: "새로운 문제가 생기면 가장 먼저 하는 행동은?",
    options: [
      { label: "데이터와 원인을 먼저 본다", axis: "analysis" },
      { label: "해결 도구를 바로 만들어본다", axis: "making" },
      { label: "사람들과 역할을 나눈다", axis: "leadership" },
    ],
  },
  {
    id: "quick-2",
    title: "가장 몰입되는 업무 방식은?",
    options: [
      { label: "복잡한 구조를 설계하는 일", axis: "infra" },
      { label: "사용자 경험을 다듬는 일", axis: "design" },
      { label: "시장과 고객 요구를 정리하는 일", axis: "planning" },
    ],
  },
  {
    id: "quick-3",
    title: "해외 취업에서 자신 있는 강점은?",
    options: [
      { label: "언어와 문화 적응", axis: "global" },
      { label: "명확한 설명과 설득", axis: "communication" },
      { label: "깊이 파고드는 학습력", axis: "research" },
    ],
  },
  {
    id: "quick-4",
    title: "관심 있는 문제에 가까운 것은?",
    options: [
      { label: "서비스 안정성과 확장성", axis: "infra" },
      { label: "위험 탐지와 보안", axis: "security" },
      { label: "AI 모델과 실험", axis: "research" },
    ],
  },
  {
    id: "quick-5",
    title: "성과를 보여줄 때 가장 편한 방식은?",
    options: [
      { label: "수치와 리포트", axis: "analysis" },
      { label: "작동하는 결과물", axis: "making" },
      { label: "프레젠테이션과 로드맵", axis: "planning" },
    ],
  },
];

export const roleSurveyQuestions: SurveyQuestion[] = [
  {
    id: "q1",
    title: "복잡한 데이터를 보면 패턴과 원인을 찾고 싶어진다.",
    description: "숫자, 로그, 리포트에서 의미를 뽑아내는 일이 편한지 봅니다.",
    axis: "analysis",
    weight: 1.1,
  },
  {
    id: "q2",
    title: "아이디어를 말로 끝내기보다 작동하는 형태로 만들어보고 싶다.",
    description: "프로토타입, 코드, 문서 자동화처럼 직접 만드는 성향입니다.",
    axis: "making",
    weight: 1.1,
  },
  {
    id: "q3",
    title: "사용자 문제를 정의하고 우선순위를 정하는 일이 흥미롭다.",
    description: "로드맵, 요구사항, 제품 전략에 가까운 성향입니다.",
    axis: "planning",
    weight: 1.05,
  },
  {
    id: "q4",
    title: "정보가 보기 좋고 쓰기 쉬운 흐름으로 정리될 때 만족감이 크다.",
    description: "UX, UI, 시각 구조를 다듬는 감각을 봅니다.",
    axis: "design",
    weight: 1,
  },
  {
    id: "q5",
    title: "다른 사람의 관점을 듣고 합의점을 만드는 과정이 어렵지 않다.",
    description: "협업, 이해관계자 조율, 고객 커뮤니케이션에 대한 적합도입니다.",
    axis: "communication",
    weight: 1,
  },
  {
    id: "q6",
    title: "서비스가 커져도 안정적으로 돌아가게 하는 구조에 관심이 많다.",
    description: "서버, 클라우드, 배포, 운영 자동화에 가까운 성향입니다.",
    axis: "infra",
    weight: 1.05,
  },
  {
    id: "q7",
    title: "취약점, 권한, 데이터 보호 같은 위험 요소를 빨리 알아차리는 편이다.",
    description: "보안적 사고와 리스크 감지 성향을 봅니다.",
    axis: "security",
    weight: 1,
  },
  {
    id: "q8",
    title: "정답이 없는 문제를 실험하고 논문이나 문서를 파고드는 것이 좋다.",
    description: "연구, 모델링, 실험 설계와 맞는지 확인합니다.",
    axis: "research",
    weight: 1.1,
  },
  {
    id: "q9",
    title: "새로운 국가나 문화권의 업무 방식에 적응하는 것이 부담스럽지 않다.",
    description: "글로벌 조직 적응력과 언어 환경 적합도입니다.",
    axis: "global",
    weight: 1.1,
  },
  {
    id: "q10",
    title: "목표가 모호할 때도 사람들을 모아 실행 계획으로 바꾸는 편이다.",
    description: "리더십, 오너십, 실행 조율 성향을 봅니다.",
    axis: "leadership",
    weight: 1,
  },
  {
    id: "q11",
    title: "의사결정 전에 가설과 지표를 먼저 세우는 편이다.",
    description: "데이터 기반 판단과 실험 사고에 대한 문항입니다.",
    axis: "analysis",
    weight: 1,
  },
  {
    id: "q12",
    title: "새 도구나 기술을 배워 실제 업무 흐름을 개선하는 것을 좋아한다.",
    description: "기술 적용력과 제작 성향을 함께 봅니다.",
    axis: "making",
    weight: 1,
  },
  {
    id: "q13",
    title: "고객, 시장, 경쟁사를 비교해 전략을 세우는 일이 잘 맞는다.",
    description: "제품/사업 기획과 시장 감각에 대한 문항입니다.",
    axis: "planning",
    weight: 1,
  },
  {
    id: "q14",
    title: "작은 문구, 버튼 위치, 화면 흐름의 차이가 결과를 바꾼다고 생각한다.",
    description: "인터페이스 디테일과 사용자 행동에 대한 감각입니다.",
    axis: "design",
    weight: 1.05,
  },
  {
    id: "q15",
    title: "외국어로 설명할 때 완벽하지 않아도 핵심을 구조화해 전달할 수 있다.",
    description: "글로벌 협업 커뮤니케이션 적합도입니다.",
    axis: "communication",
    weight: 1.05,
  },
  {
    id: "q16",
    title: "장애가 생겼을 때 로그, 배포, 네트워크부터 차분히 확인하는 편이다.",
    description: "운영 문제 해결과 인프라 성향을 봅니다.",
    axis: "infra",
    weight: 1,
  },
  {
    id: "q17",
    title: "개인정보, 접근 권한, 인증 흐름 같은 주제에 민감한 편이다.",
    description: "보안 직무 적합도를 높게 반영합니다.",
    axis: "security",
    weight: 1.1,
  },
  {
    id: "q18",
    title: "새로운 AI 모델이나 분석 방법을 비교하고 성능을 검증해보고 싶다.",
    description: "AI/데이터 연구와 실험 실행력에 대한 문항입니다.",
    axis: "research",
    weight: 1.05,
  },
  {
    id: "q19",
    title: "해외 팀과 일할 때 시차, 표현 방식, 업무 문화 차이를 조율할 자신이 있다.",
    description: "해외 취업 맥락에서 중요한 적응력입니다.",
    axis: "global",
    weight: 1,
  },
  {
    id: "q20",
    title: "팀이 갈피를 못 잡을 때 우선순위를 정하고 다음 행동을 제안하는 편이다.",
    description: "제품, 사업, 팀 리딩 성향에 대한 문항입니다.",
    axis: "leadership",
    weight: 1.1,
  },
];

export const roleSurveyTypes: RoleSurveyType[] = [
  {
    key: "role-fit",
    eyebrow: "TEST 01",
    title: "직무 적합도 검사",
    description: "성향, 업무 방식, 협업 스타일을 종합해 가장 맞는 글로벌 직무를 찾습니다.",
    duration: "20문항 · 약 5분",
    questionIds: roleSurveyQuestions.map((question) => question.id),
  },
  {
    key: "global-fit",
    eyebrow: "TEST 02",
    title: "글로벌 근무 성향 검사",
    description: "언어, 문화 적응, 해외 팀 협업, 커뮤니케이션 강점을 중심으로 진단합니다.",
    duration: "12문항 · 약 3분",
    questionIds: [
      "q3",
      "q5",
      "q9",
      "q10",
      "q13",
      "q15",
      "q19",
      "q20",
      "q1",
      "q4",
      "q8",
      "q11",
    ],
  },
  {
    key: "skill-fit",
    eyebrow: "TEST 03",
    title: "실무 역량 진단",
    description: "분석, 제작, 인프라, 보안, 연구 역량을 기준으로 실전 준비 방향을 확인합니다.",
    duration: "16문항 · 약 4분",
    questionIds: [
      "q1",
      "q2",
      "q6",
      "q7",
      "q8",
      "q11",
      "q12",
      "q16",
      "q17",
      "q18",
      "q3",
      "q4",
      "q13",
      "q14",
      "q15",
      "q20",
    ],
  },
];

const baseWeights: Record<SurveyAxis, number> = {
  analysis: 1,
  making: 1,
  planning: 1,
  design: 1,
  communication: 1,
  infra: 1,
  security: 1,
  research: 1,
  global: 1,
  leadership: 1,
};

export const roleProfiles: RoleProfile[] = [
  {
    role: "Software Engineer",
    title: "Software Engineer",
    summary: "제품 기능을 코드와 시스템으로 구현하는 글로벌 개발 직무",
    reason: "제작형과 인프라형 점수가 높을수록 제품을 직접 구현하고 확장하는 업무와 잘 맞습니다.",
    skills: ["알고리즘", "TypeScript", "시스템 설계", "영어 인터뷰"],
    axisWeights: { ...baseWeights, making: 5, infra: 4, analysis: 3, research: 2, global: 2 },
  },
  {
    role: "Product Manager",
    title: "Product Manager",
    summary: "시장, 사용자, 기술을 연결해 제품 방향을 잡는 직무",
    reason: "기획형, 커뮤니케이션형, 리더십형 점수가 높을 때 강점이 잘 드러납니다.",
    skills: ["제품 전략", "로드맵", "데이터 기반 의사결정", "영어 협업"],
    axisWeights: { ...baseWeights, planning: 5, communication: 4, leadership: 4, analysis: 3, global: 2 },
  },
  {
    role: "Data Analyst",
    title: "Data Analyst",
    summary: "비즈니스 데이터를 해석해 의사결정을 돕는 분석 직무",
    reason: "분석형과 커뮤니케이션형이 함께 높으면 숫자를 설명 가능한 인사이트로 바꾸는 데 유리합니다.",
    skills: ["SQL", "대시보드", "실험 분석", "리포팅"],
    axisWeights: { ...baseWeights, analysis: 5, communication: 3, planning: 3, global: 2 },
  },
  {
    role: "Data Scientist",
    title: "Data Scientist",
    summary: "모델링과 실험으로 예측, 추천, 자동화 문제를 해결하는 직무",
    reason: "분석형과 연구형이 모두 높을수록 모델 실험과 문제 정의에 적합합니다.",
    skills: ["Python", "통계", "머신러닝", "실험 설계"],
    axisWeights: { ...baseWeights, analysis: 5, research: 5, making: 3, global: 2 },
  },
  {
    role: "UX/UI Designer",
    title: "UX/UI Designer",
    summary: "사용자 흐름과 화면 경험을 설계하고 검증하는 직무",
    reason: "디자인형과 커뮤니케이션형 점수가 높을수록 사용자 문제를 화면으로 풀어내는 데 강합니다.",
    skills: ["와이어프레임", "프로토타이핑", "사용자 리서치", "포트폴리오"],
    axisWeights: { ...baseWeights, design: 5, communication: 4, planning: 3, global: 2 },
  },
  {
    role: "AI Engineer",
    title: "AI Engineer",
    summary: "AI 모델을 제품에 적용하고 성능을 개선하는 엔지니어링 직무",
    reason: "연구형과 제작형이 함께 높으면 모델을 실제 서비스로 연결하는 업무와 맞습니다.",
    skills: ["머신러닝", "모델 최적화", "Python", "MLOps"],
    axisWeights: { ...baseWeights, research: 5, making: 4, analysis: 4, infra: 2 },
  },
  {
    role: "Business Analyst",
    title: "Business Analyst",
    summary: "사업 지표와 운영 흐름을 분석해 개선안을 제안하는 직무",
    reason: "분석형, 기획형, 커뮤니케이션형 균형이 좋을 때 추천됩니다.",
    skills: ["사업 지표", "Excel", "SQL", "이해관계자 관리"],
    axisWeights: { ...baseWeights, analysis: 4, planning: 4, communication: 4, leadership: 2 },
  },
  {
    role: "Cloud Engineer",
    title: "Cloud Engineer",
    summary: "클라우드 인프라와 배포 환경을 설계하고 운영하는 직무",
    reason: "인프라형과 제작형이 높으면 안정적인 서비스 운영과 자동화에 강점이 있습니다.",
    skills: ["AWS/GCP", "네트워크", "DevOps", "모니터링"],
    axisWeights: { ...baseWeights, infra: 5, making: 4, security: 3, analysis: 2 },
  },
  {
    role: "Security Engineer",
    title: "Security Engineer",
    summary: "서비스와 인프라의 보안 리스크를 줄이는 직무",
    reason: "보안형, 인프라형, 분석형이 높으면 위험을 구조적으로 파악하는 데 유리합니다.",
    skills: ["인증/인가", "네트워크 보안", "위협 모델링", "로그 분석"],
    axisWeights: { ...baseWeights, security: 5, infra: 4, analysis: 4, research: 2 },
  },
  {
    role: "Global Sales",
    title: "Global Sales",
    summary: "해외 고객과 파트너를 발굴하고 계약까지 이끄는 직무",
    reason: "글로벌 적응형과 커뮤니케이션형이 높을수록 해외 고객 접점에서 강점이 큽니다.",
    skills: ["B2B 커뮤니케이션", "시장 조사", "협상", "영어 프레젠테이션"],
    axisWeights: { ...baseWeights, global: 5, communication: 5, leadership: 3, planning: 3 },
  },
];
