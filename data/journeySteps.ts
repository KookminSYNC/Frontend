export type JourneyStep = {
  id: number;
  title: string;
  summary: string;
  details: string[];
};

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "적합도 검사",
    summary: "나에게 맞는 직무 발견",
    details: [
      "가벼운 해외 취업 취향 검사",
      "심층 분석 적성 검사",
      "어느 문화권과 어느 직무가 어울리는지 추천",
    ],
  },
  {
    id: 2,
    title: "맞춤 기업 추천",
    summary: "일주일에 1번, 딱 맞는 기업 추천",
    details: [
      "합격 가능성 높은 회사 추천",
      "나에게 딱 맞는 해외 기업 추천",
      "국가별 기업 순위 정리",
      "주간 맞춤 기업 추천 리포트",
    ],
  },
  {
    id: 3,
    title: "자소서 & 면접 준비",
    summary: "AI 첨삭과 모의면접으로 완벽 준비",
    details: [
      "자소서 첨삭 및 컨설팅",
      "면접 첨삭 및 컨설팅",
      "합격 자소서 분석 데이터",
      "사용자 자소서 기반 취약점 분석",
      "보완점 분석",
      "음성 저장",
      "음성 텍스트 변환",
    ],
  },
  {
    id: 4,
    title: "실전 지원 & 관리",
    summary: "지원 현황과 합격 가능성 관리",
    details: [
      "지원 기업 관리",
      "합격 가능성 추적",
      "커뮤니티 피드백",
      "국가별 지원 마감일 관리",
    ],
  },
  {
    id: 5,
    title: "합격 & 커리어 성장",
    summary: "글로벌 커리어의 시작",
    details: [
      "실제 합격 사례",
      "해외 취업 커뮤니티",
      "커리어 로드맵",
      "다음 이직/성장 전략",
    ],
  },
];
