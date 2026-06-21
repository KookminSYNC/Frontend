export type SuccessStory = {
  company: string;
  country: string;
  role: string;
  quote: string;
  person: string;
  school: string;
  period: string;
  usedFeatures: string[];
};

export const successStories: SuccessStory[] = [
  {
    company: "Google",
    country: "미국",
    role: "Software Engineer 합격",
    quote: "AI 모의면접으로 실전 감각을 키우고, 자신감을 얻을 수 있었어요.",
    person: "이재훈 님",
    school: "카이스트 전산학과",
    period: "14주",
    usedFeatures: ["자소서 첨삭", "AI 모의면접", "국가별 기업 추천", "커뮤니티"],
  },
  {
    company: "Microsoft",
    country: "미국",
    role: "Product Manager 합격",
    quote: "자소서 첨삭을 통해 제 경험을 더 효과적으로 전달할 수 있었어요.",
    person: "김유정 님",
    school: "연세대 경영학과",
    period: "10주",
    usedFeatures: ["자소서 첨삭", "합격 자소서 분석", "주간 추천 리포트", "AI 모의면접"],
  },
  {
    company: "Shopify",
    country: "캐나다",
    role: "Data Analyst 합격",
    quote: "국가별 취업 정보와 커뮤니티 덕분에 캐나다 취업이 가능했습니다.",
    person: "박민수 님",
    school: "고려대 통계학과",
    period: "8주",
    usedFeatures: ["국가별 기업 추천", "커뮤니티", "적성 검사", "면접 컨설팅"],
  },
  {
    company: "ByteDance",
    country: "중국",
    role: "Data Scientist 합격",
    quote: "중국 기업 맞춤 정보와 면접 준비로 최종 합격까지 갈 수 있었어요.",
    person: "최지현 님",
    school: "성균관대 수학과",
    period: "12주",
    usedFeatures: ["AI 모의면접", "기업 추천", "자소서 첨삭", "커뮤니티"],
  },
  {
    company: "Atlassian",
    country: "호주",
    role: "Software Engineer 합격",
    quote: "현지 기업 정보와 연봉 데이터가 정말 큰 도움이 됐습니다.",
    person: "정현우 님",
    school: "부산대 컴퓨터공학과",
    period: "9주",
    usedFeatures: ["국가별 기업 추천", "주간 추천 리포트", "AI 모의면접", "커뮤니티"],
  },
];
