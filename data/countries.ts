export const countryKeys = [
  "usa",
  "china",
  "japan",
  "australia",
  "canada",
  "germany",
] as const;

export type CountryKey = (typeof countryKeys)[number];

export type Company = {
  name: string;
  shortName: string;
  role: string;
  competition: string;
  difficulty: string;
  skills: string[];
};

export type CountryInfo = {
  key: CountryKey;
  flag: string;
  label: string;
  englishName: string;
  salary: string;
  salaryNote: string;
  topCompanies: Company[];
  recommendedRoles: string[];
};

export const countryData: Record<CountryKey, CountryInfo> = {
  usa: {
    key: "usa",
    flag: "🇺🇸",
    label: "미국",
    englishName: "USA",
    salary: "$125,000",
    salaryNote: "약 1억 7천만원",
    topCompanies: [
      {
        name: "Google",
        shortName: "G",
        role: "Software Engineer",
        competition: "74:1",
        difficulty: "매우 높음",
        skills: ["알고리즘", "시스템 설계", "영어 인터뷰"],
      },
      {
        name: "Microsoft",
        shortName: "MS",
        role: "Product Manager",
        competition: "61:1",
        difficulty: "높음",
        skills: ["제품 전략", "데이터 기반 의사결정", "협업"],
      },
      {
        name: "Meta",
        shortName: "M",
        role: "Data Scientist",
        competition: "58:1",
        difficulty: "높음",
        skills: ["실험 설계", "Python", "통계"],
      },
      {
        name: "Amazon",
        shortName: "A",
        role: "Product Manager",
        competition: "52:1",
        difficulty: "높음",
        skills: ["리더십 원칙", "로드맵", "운영 지표"],
      },
      {
        name: "Apple",
        shortName: "AP",
        role: "UX/UI Designer",
        competition: "47:1",
        difficulty: "높음",
        skills: ["인터랙션 디자인", "프로토타이핑", "포트폴리오"],
      },
    ],
    recommendedRoles: [
      "Software Engineer",
      "Product Manager",
      "Data Scientist",
      "UX/UI Designer",
    ],
  },
  china: {
    key: "china",
    flag: "🇨🇳",
    label: "중국",
    englishName: "China",
    salary: "¥300,000",
    salaryNote: "약 5,700만원",
    topCompanies: [
      {
        name: "ByteDance",
        shortName: "BD",
        role: "AI Engineer",
        competition: "56:1",
        difficulty: "높음",
        skills: ["머신러닝", "추천 시스템", "중국어"],
      },
      {
        name: "Tencent",
        shortName: "TC",
        role: "Data Scientist",
        competition: "45:1",
        difficulty: "높음",
        skills: ["Python", "실험 설계", "게임/콘텐츠 데이터"],
      },
      {
        name: "Alibaba",
        shortName: "AB",
        role: "Backend Engineer",
        competition: "39:1",
        difficulty: "높음",
        skills: ["Java", "대규모 트래픽", "클라우드"],
      },
      {
        name: "Huawei",
        shortName: "HW",
        role: "Product Manager",
        competition: "34:1",
        difficulty: "중간",
        skills: ["B2B 제품", "기술 이해", "중국어"],
      },
      {
        name: "Xiaomi",
        shortName: "XM",
        role: "AI Engineer",
        competition: "31:1",
        difficulty: "중간",
        skills: ["모바일 AI", "모델 최적화", "제품 감각"],
      },
    ],
    recommendedRoles: [
      "AI Engineer",
      "Data Scientist",
      "Backend Engineer",
      "Product Manager",
    ],
  },
  japan: {
    key: "japan",
    flag: "🇯🇵",
    label: "일본",
    englishName: "Japan",
    salary: "¥7,500,000",
    salaryNote: "약 6,500만원",
    topCompanies: [
      {
        name: "Rakuten",
        shortName: "RK",
        role: "Backend Engineer",
        competition: "32:1",
        difficulty: "중간",
        skills: ["Java", "API 설계", "일본어 비즈니스"],
      },
      {
        name: "Sony",
        shortName: "SY",
        role: "Product Planner",
        competition: "41:1",
        difficulty: "높음",
        skills: ["기획서", "하드웨어 이해", "협업"],
      },
      {
        name: "Toyota",
        shortName: "TY",
        role: "Data Analyst",
        competition: "27:1",
        difficulty: "중간",
        skills: ["SQL", "제조 데이터", "리포팅"],
      },
      {
        name: "Line Yahoo",
        shortName: "LY",
        role: "Global Sales",
        competition: "24:1",
        difficulty: "보통",
        skills: ["B2B 영업", "일본어", "시장 조사"],
      },
      {
        name: "Mercari",
        shortName: "MC",
        role: "Backend Engineer",
        competition: "36:1",
        difficulty: "높음",
        skills: ["Go", "마이크로서비스", "테스트"],
      },
    ],
    recommendedRoles: [
      "Backend Engineer",
      "Product Planner",
      "Data Analyst",
      "Global Sales",
    ],
  },
  australia: {
    key: "australia",
    flag: "🇦🇺",
    label: "호주",
    englishName: "Australia",
    salary: "A$115,000",
    salaryNote: "약 1억원",
    topCompanies: [
      {
        name: "Atlassian",
        shortName: "AT",
        role: "Software Engineer",
        competition: "42:1",
        difficulty: "높음",
        skills: ["TypeScript", "협업툴 이해", "영어 인터뷰"],
      },
      {
        name: "Canva",
        shortName: "CV",
        role: "Product Designer",
        competition: "39:1",
        difficulty: "높음",
        skills: ["포트폴리오", "프로토타이핑", "사용자 리서치"],
      },
      {
        name: "BHP",
        shortName: "BH",
        role: "Data Analyst",
        competition: "24:1",
        difficulty: "중간",
        skills: ["운영 데이터", "SQL", "리포팅"],
      },
      {
        name: "Telstra",
        shortName: "TS",
        role: "Cloud Engineer",
        competition: "28:1",
        difficulty: "중간",
        skills: ["클라우드", "네트워크", "DevOps"],
      },
      {
        name: "Commonwealth Bank",
        shortName: "CB",
        role: "Business Analyst",
        competition: "31:1",
        difficulty: "중간",
        skills: ["금융 도메인", "데이터 분석", "이해관계자 관리"],
      },
    ],
    recommendedRoles: [
      "Software Engineer",
      "Product Designer",
      "Cloud Engineer",
      "Business Analyst",
    ],
  },
  canada: {
    key: "canada",
    flag: "🇨🇦",
    label: "캐나다",
    englishName: "Canada",
    salary: "C$95,000",
    salaryNote: "약 9,500만원",
    topCompanies: [
      {
        name: "Shopify",
        shortName: "SF",
        role: "Software Engineer",
        competition: "37:1",
        difficulty: "높음",
        skills: ["React", "커머스 플랫폼", "영어 협업"],
      },
      {
        name: "RBC",
        shortName: "RB",
        role: "Financial Analyst",
        competition: "29:1",
        difficulty: "중간",
        skills: ["재무 모델링", "리스크 분석", "Excel"],
      },
      {
        name: "TD",
        shortName: "TD",
        role: "Data Analyst",
        competition: "26:1",
        difficulty: "중간",
        skills: ["SQL", "금융 데이터", "대시보드"],
      },
      {
        name: "OpenText",
        shortName: "OT",
        role: "Product Manager",
        competition: "22:1",
        difficulty: "중간",
        skills: ["B2B SaaS", "제품 전략", "고객 인터뷰"],
      },
      {
        name: "BlackBerry",
        shortName: "BB",
        role: "Security Engineer",
        competition: "25:1",
        difficulty: "중간",
        skills: ["보안 기초", "네트워크", "임베디드 이해"],
      },
    ],
    recommendedRoles: [
      "Software Engineer",
      "Financial Analyst",
      "Data Analyst",
      "Security Engineer",
    ],
  },
  germany: {
    key: "germany",
    flag: "🇩🇪",
    label: "독일",
    englishName: "Germany",
    salary: "€72,000",
    salaryNote: "약 1억원",
    topCompanies: [
      {
        name: "SAP",
        shortName: "SP",
        role: "Software Engineer",
        competition: "34:1",
        difficulty: "높음",
        skills: ["Java", "엔터프라이즈 SaaS", "영어/독일어"],
      },
      {
        name: "Siemens",
        shortName: "SM",
        role: "Data Scientist",
        competition: "30:1",
        difficulty: "중간",
        skills: ["산업 데이터", "Python", "모델링"],
      },
      {
        name: "Bosch",
        shortName: "BS",
        role: "Research Engineer",
        competition: "27:1",
        difficulty: "중간",
        skills: ["제조 R&D", "제어 시스템", "문서화"],
      },
      {
        name: "BMW",
        shortName: "BM",
        role: "Automotive Engineer",
        competition: "33:1",
        difficulty: "높음",
        skills: ["모빌리티", "시스템 설계", "독일어"],
      },
      {
        name: "Mercedes-Benz",
        shortName: "MB",
        role: "Product Manager",
        competition: "36:1",
        difficulty: "높음",
        skills: ["프리미엄 제품", "로드맵", "이해관계자 관리"],
      },
    ],
    recommendedRoles: [
      "Software Engineer",
      "Data Scientist",
      "Research Engineer",
      "Automotive Engineer",
    ],
  },
};

export const countries = countryKeys.map((key) => countryData[key]);

const flagUrl = (code: string) => `https://flagcdn.com/w80/${code}.png`;
const logoUrl = (domain: string) =>
  `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;

export const countryFlagImages: Record<CountryKey, string> = {
  usa: flagUrl("us"),
  china: flagUrl("cn"),
  japan: flagUrl("jp"),
  australia: flagUrl("au"),
  canada: flagUrl("ca"),
  germany: flagUrl("de"),
};

export const companyLogos: Record<string, string> = {
  Google: logoUrl("google.com"),
  Microsoft: logoUrl("microsoft.com"),
  Meta: logoUrl("meta.com"),
  Amazon: logoUrl("amazon.com"),
  Apple: logoUrl("apple.com"),
  ByteDance: logoUrl("bytedance.com"),
  Tencent: logoUrl("tencent.com"),
  Alibaba: logoUrl("alibaba.com"),
  Huawei: logoUrl("huawei.com"),
  Xiaomi: logoUrl("mi.com"),
  Rakuten: logoUrl("rakuten.com"),
  Sony: logoUrl("sony.com"),
  Toyota: logoUrl("toyota.com"),
  "Line Yahoo": logoUrl("lycorp.co.jp"),
  Mercari: logoUrl("mercari.com"),
  Atlassian: logoUrl("atlassian.com"),
  Canva: logoUrl("canva.com"),
  BHP: logoUrl("bhp.com"),
  Telstra: logoUrl("telstra.com.au"),
  "Commonwealth Bank": logoUrl("commbank.com.au"),
  Shopify: logoUrl("shopify.com"),
  RBC: logoUrl("rbc.com"),
  TD: logoUrl("td.com"),
  OpenText: logoUrl("opentext.com"),
  BlackBerry: logoUrl("blackberry.com"),
  SAP: logoUrl("sap.com"),
  Siemens: logoUrl("siemens.com"),
  Bosch: logoUrl("bosch.com"),
  BMW: logoUrl("bmw.com"),
  "Mercedes-Benz": logoUrl("mercedes-benz.com"),
  "ByteDance 중국": logoUrl("bytedance.com"),
};

export const roleDescriptions: Record<string, string> = {
  "Software Engineer": "글로벌 개발팀에서 제품 기능과 인프라를 구현하는 직무입니다.",
  "Data Analyst": "사용자와 비즈니스 데이터를 분석해 의사결정을 돕는 직무입니다.",
  "Product Manager": "시장, 고객, 기술을 연결해 제품 전략과 로드맵을 만드는 직무입니다.",
  "Marketing Manager": "현지 시장에 맞는 브랜드와 성장 캠페인을 설계하는 직무입니다.",
  "Global Sales": "해외 고객과 파트너를 발굴하고 계약까지 이끄는 직무입니다.",
  "Data Scientist": "모델링과 실험을 통해 예측, 추천, 자동화 문제를 해결하는 직무입니다.",
  "UX/UI Designer": "사용자 경험과 인터페이스를 설계하고 검증하는 직무입니다.",
  "Backend Engineer": "API, 데이터, 서버 구조를 안정적으로 설계하는 직무입니다.",
  "Product Planner": "시장 요구와 기술 가능성을 바탕으로 제품 기획안을 만드는 직무입니다.",
  "AI Engineer": "AI 모델을 제품에 적용하고 성능을 개선하는 직무입니다.",
  "Business Analyst": "사업 지표를 분석하고 운영 개선안을 제안하는 직무입니다.",
  "Product Designer": "제품의 사용 흐름과 시각 경험을 설계하는 직무입니다.",
  "Cloud Engineer": "클라우드 인프라와 배포 환경을 설계하고 운영하는 직무입니다.",
  "Financial Analyst": "재무 데이터와 시장 지표를 분석해 의사결정을 지원하는 직무입니다.",
  "Security Engineer": "서비스와 인프라의 보안 리스크를 줄이는 직무입니다.",
  "Research Engineer": "기술 연구를 제품과 시스템으로 연결하는 직무입니다.",
  "Automotive Engineer": "모빌리티 제품과 차량 시스템을 설계하는 직무입니다.",
};
