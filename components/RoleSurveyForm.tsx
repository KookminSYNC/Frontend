"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { roleSurveyQuestions } from "@/data/roleSurvey";

type RoleSurveyFormProps = {
  answers: Record<string, number>;
  onAnswer: (questionId: string, score: number) => void;
  onSubmit: () => void;
};

const scaleLabels = ["전혀 아님", "낮음", "보통", "높음", "매우 높음"];

export function RoleSurveyForm({ answers, onAnswer, onSubmit }: RoleSurveyFormProps) {
  const completedCount = Object.keys(answers).length;
  const complete = completedCount === roleSurveyQuestions.length;

  return (
    <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5 lg:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Precision Survey
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827]">
            20문항 정밀 직무 추천 설문
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            성향, 역량, 글로벌 적응력을 10개 축으로 계산해 추천 직무를 뽑습니다.
          </p>
        </div>
        <div className="rounded-2xl bg-[#F3F0FF] px-4 py-3 text-sm font-black text-[#6C5CE7]">
          {completedCount}/{roleSurveyQuestions.length} 완료
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {roleSurveyQuestions.map((question, index) => (
          <article
            key={question.id}
            className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black text-[#6C5CE7]">Q{index + 1}</p>
                <h3 className="mt-1 text-base font-black text-[#111827]">
                  {question.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                  {question.description}
                </p>
              </div>
              {answers[question.id] ? (
                <CheckCircle2 className="shrink-0 text-[#6C5CE7]" size={20} />
              ) : null}
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((score, scoreIndex) => {
                const active = answers[question.id] === score;

                return (
                  <button
                    key={score}
                    className={`min-h-16 rounded-2xl border px-2 py-2 text-center text-xs font-black transition hover:-translate-y-0.5 hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                      active
                        ? "border-[#6C5CE7] bg-white text-[#6C5CE7]"
                        : "border-[#E5E7EB] bg-white text-[#111827]"
                    }`}
                    type="button"
                    onClick={() => onAnswer(question.id, score)}
                    aria-pressed={active}
                  >
                    <span className="block text-base">{score}</span>
                    <span className="mt-1 block leading-4">{scaleLabels[scoreIndex]}</span>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <button
        className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] disabled:cursor-not-allowed disabled:bg-[#DCD6FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
        type="button"
        disabled={!complete}
        onClick={onSubmit}
      >
        TOP 3 직무 결과 보기
        <ArrowRight size={17} />
      </button>
    </section>
  );
}
