"use client";

import { ClipboardCheck, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { RoleQuickCheckModal } from "@/components/RoleQuickCheckModal";
import { RoleResultPanel, RoleMatch } from "@/components/RoleResultPanel";
import { RoleSurveyForm } from "@/components/RoleSurveyForm";
import { useAppShell } from "@/components/AppShell";
import {
  axisLabels,
  roleProfiles,
  roleSurveyQuestions,
  surveyAxes,
  SurveyAxis,
} from "@/data/roleSurvey";

const popupStorageKey = "careerCopilotRolePopupSeen";
const resultStorageKey = "careerCopilotRoleSurveyResult";

const emptyScores = (): Record<SurveyAxis, number> =>
  surveyAxes.reduce(
    (acc, axis) => {
      acc[axis] = 0;
      return acc;
    },
    {} as Record<SurveyAxis, number>,
  );

function calculateResults(answers: Record<string, number>): RoleMatch[] {
  const scores = emptyScores();

  roleSurveyQuestions.forEach((question) => {
    const answer = answers[question.id] ?? 0;
    scores[question.axis] += answer * question.weight;
  });

  const rawResults = roleProfiles.map((profile) => {
    const score = surveyAxes.reduce(
      (total, axis) => total + scores[axis] * profile.axisWeights[axis],
      0,
    );

    return { profile, score };
  });

  const bestScore = Math.max(...rawResults.map((result) => result.score), 1);

  return rawResults
    .map((result) => ({
      profile: result.profile,
      match: Math.max(68, Math.min(96, Math.round((result.score / bestScore) * 94))),
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}

export function RoleSurveyPage() {
  const { showToast } = useAppShell();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<RoleMatch[]>([]);
  const [quickOpen, setQuickOpen] = useState(false);
  const surveyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.sessionStorage.getItem(popupStorageKey)) {
      const timer = window.setTimeout(() => setQuickOpen(true), 400);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const completedCount = Object.keys(answers).length;
  const complete = completedCount === roleSurveyQuestions.length;

  const leadingAxis = useMemo(() => {
    const axisScores = emptyScores();

    roleSurveyQuestions.forEach((question) => {
      axisScores[question.axis] += answers[question.id] ?? 0;
    });

    return Object.entries(axisScores).sort((a, b) => b[1] - a[1])[0][0] as SurveyAxis;
  }, [answers]);

  const submitSurvey = () => {
    if (!complete) {
      return;
    }

    const nextResults = calculateResults(answers);
    setResults(nextResults);
    window.localStorage.setItem(resultStorageKey, JSON.stringify(nextResults));
    showToast("정밀 직무 추천 결과가 생성되었습니다.");
  };

  const resetSurvey = () => {
    setAnswers({});
    setResults([]);
    window.localStorage.removeItem(resultStorageKey);
    showToast("설문 결과를 초기화했습니다.");
  };

  const closeQuickCheck = () => {
    window.sessionStorage.setItem(popupStorageKey, "true");
    setQuickOpen(false);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-7 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7]">
              <Sparkles size={17} />
              20문항 정밀 진단
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#111827] lg:text-6xl">
              나에게 맞는 글로벌 직무 찾기
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4B5563]">
              성향, 역량, 협업 방식, 해외 적응력을 바탕으로 지금 가장 가능성이 높은
              직무와 국가, 기업 후보를 연결합니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() =>
                  surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                정밀 진단 시작
                <ClipboardCheck size={18} />
              </button>
              <button
                className="inline-flex h-13 items-center justify-center rounded-2xl border border-[#6C5CE7] bg-white px-7 text-sm font-black text-[#6C5CE7] transition hover:-translate-y-0.5 hover:bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => setQuickOpen(true)}
              >
                간단 직무 성격 확인하기
              </button>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-[#4B32D9]/5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
              Progress
            </p>
            <p className="mt-4 text-5xl font-black tracking-tight text-[#6C5CE7]">
              {completedCount}
              <span className="text-2xl text-[#6B7280]">/20</span>
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#6B7280]">
              모든 문항을 완료하면 결과 버튼이 활성화됩니다.
            </p>
            <div className="mt-6 rounded-3xl bg-[#F3F0FF] p-4">
              <p className="text-sm font-black text-[#111827]">현재 강한 축</p>
              <p className="mt-2 text-xl font-black text-[#6C5CE7]">
                {completedCount > 0 ? axisLabels[leadingAxis] : "응답 대기"}
              </p>
            </div>
            <button
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white text-sm font-black text-[#111827] transition hover:border-[#6C5CE7] hover:text-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={resetSurvey}
            >
              <RotateCcw size={16} />
              초기화
            </button>
          </aside>
        </div>
      </section>

      <div ref={surveyRef} className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-12 lg:px-8">
        <RoleSurveyForm
          answers={answers}
          onAnswer={(questionId, score) =>
            setAnswers((current) => ({ ...current, [questionId]: score }))
          }
          onSubmit={submitSurvey}
        />
        <RoleResultPanel results={results} />
      </div>

      {quickOpen ? (
        <RoleQuickCheckModal
          onClose={closeQuickCheck}
          onComplete={() => {
            closeQuickCheck();
            surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            showToast("간단 결과를 확인했어요. 정밀 설문으로 이어가세요.");
          }}
        />
      ) : null}
    </main>
  );
}
