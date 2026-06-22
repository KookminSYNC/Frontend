"use client";

import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import type {
  RoleSurveyType,
  RoleSurveyTypeKey,
  SurveyQuestion,
} from "@/data/roleSurvey";

type RoleSurveyFormProps = {
  selectedSurveyKey: RoleSurveyTypeKey | null;
  surveyTypes: RoleSurveyType[];
  questions: SurveyQuestion[];
  answers: Record<string, number>;
  onSurveySelect: (surveyKey: RoleSurveyTypeKey) => void;
  onAnswer: (questionId: string, score: number) => void;
  onSubmit: () => void;
};

const scaleLabels = ["전혀 아님", "낮음", "보통", "높음", "매우 높음"];
const scaleShortLabels = ["전혀", "낮음", "보통", "높음", "매우"];

export function RoleSurveyForm({
  selectedSurveyKey,
  surveyTypes,
  questions,
  answers,
  onSurveySelect,
  onAnswer,
  onSubmit,
}: RoleSurveyFormProps) {
  const selectedSurvey =
    surveyTypes.find((survey) => survey.key === selectedSurveyKey) ?? null;
  const completedCount = questions.filter((question) => answers[question.id]).length;
  const complete = questions.length > 0 && completedCount === questions.length;

  return (
    <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5 lg:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Career Test Center
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827]">
            검사 종류 선택
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            먼저 목적에 맞는 검사를 고른 뒤, OMR 답안지에서 문항을 체크하세요.
          </p>
        </div>
        <div className="rounded-2xl bg-[#F3F0FF] px-4 py-3 text-sm font-black text-[#6C5CE7]">
          {selectedSurvey ? `${completedCount}/${questions.length} 체크` : "검사지 선택 전"}
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {surveyTypes.map((survey) => {
          const active = selectedSurveyKey === survey.key;

          return (
            <button
              key={survey.key}
              className={`rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:border-[#6C5CE7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                active
                  ? "border-[#6C5CE7] bg-[#F3F0FF]"
                  : "border-[#E5E7EB] bg-white"
              }`}
              type="button"
              onClick={() => onSurveySelect(survey.key)}
              aria-pressed={active}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
                  {survey.eyebrow}
                </span>
                {active ? <CheckCircle2 className="text-[#6C5CE7]" size={20} /> : null}
              </div>
              <h3 className="mt-4 text-xl font-black text-[#111827]">{survey.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#6B7280]">
                {survey.description}
              </p>
              <p className="mt-4 inline-flex rounded-full bg-white px-3 py-2 text-xs font-black text-[#6C5CE7]">
                {survey.duration}
              </p>
            </button>
          );
        })}
      </div>

      {selectedSurvey ? (
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-[#DCD6FF] bg-[#FBFAFF]">
          <div className="border-b border-[#E5E7EB] bg-white p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6C5CE7]">
                  Career Copilot OMR Sheet
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#111827]">
                  {selectedSurvey.title}
                </h3>
              </div>
              <div className="grid gap-2 text-sm font-black text-[#111827] sm:grid-cols-3 xl:min-w-[520px]">
                <div className="rounded-2xl border border-[#E5E7EB] px-4 py-3">
                  수험번호 <span className="text-[#6C5CE7]">CC-2026</span>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] px-4 py-3">
                  문항수 <span className="text-[#6C5CE7]">{questions.length}</span>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] px-4 py-3">
                  체크 <span className="text-[#6C5CE7]">{completedCount}</span>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex flex-wrap gap-2">
                {questions.map((question, index) => {
                  const answered = Boolean(answers[question.id]);

                  return (
                    <span
                      key={question.id}
                      className={`grid size-8 place-items-center rounded-lg border text-xs font-black ${
                        answered
                          ? "border-[#6C5CE7] bg-[#6C5CE7] text-white"
                          : "border-[#E5E7EB] bg-white text-[#6B7280]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-[#F3F0FF] px-4 py-3 text-xs font-black text-[#6C5CE7]">
                <ClipboardList size={16} />
                {scaleLabels.map((label, index) => (
                  <span key={label}>
                    {index + 1}. {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="hidden grid-cols-[4.5rem_1fr_20rem] border-b border-[#E5E7EB] bg-[#FBFAFF] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#6B7280] lg:grid">
              <span>번호</span>
              <span>문항</span>
              <span className="text-center">답안 체크</span>
            </div>
            {questions.map((question, index) => (
              <article
                key={question.id}
                className="grid gap-4 border-b border-[#E5E7EB] px-5 py-5 last:border-b-0 lg:grid-cols-[4.5rem_1fr_20rem] lg:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-[#6C5CE7]">
                    Q{String(index + 1).padStart(2, "0")}
                  </span>
                  {answers[question.id] ? (
                    <span className="size-2 rounded-full bg-[#6C5CE7]" />
                  ) : (
                    <span className="size-2 rounded-full border border-[#D1D5DB] bg-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-black leading-7 text-[#111827]">
                    {question.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#6B7280]">
                    {question.description}
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((score, scoreIndex) => {
                    const active = answers[question.id] === score;

                    return (
                      <button
                        key={score}
                        className="group grid min-h-14 place-items-center gap-1 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                        type="button"
                        onClick={() => onAnswer(question.id, score)}
                        aria-label={`${index + 1}번 문항 ${score}점 ${scaleLabels[scoreIndex]} 선택`}
                        aria-pressed={active}
                      >
                        <span
                          className={`grid size-9 place-items-center rounded-full border-2 text-sm font-black transition group-hover:border-[#6C5CE7] ${
                            active
                              ? "border-[#6C5CE7] bg-[#6C5CE7] text-white"
                              : "border-[#D1D5DB] bg-white text-[#111827]"
                          }`}
                        >
                          {score}
                        </span>
                        <span
                          className={`text-[11px] font-black leading-4 ${
                            active ? "text-[#6C5CE7]" : "text-[#6B7280]"
                          }`}
                        >
                          {scaleShortLabels[scoreIndex]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-[2rem] border border-dashed border-[#DCD6FF] bg-[#FBFAFF] p-8 text-center">
          <ClipboardList className="mx-auto text-[#6C5CE7]" size={30} />
          <h3 className="mt-3 text-xl font-black text-[#111827]">
            검사지를 먼저 선택하세요.
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#6B7280]">
            선택 후 실제 검사처럼 OMR 답안지가 열립니다.
          </p>
        </div>
      )}

      <button
        className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] disabled:cursor-not-allowed disabled:bg-[#DCD6FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
        type="button"
        disabled={!complete}
        onClick={onSubmit}
      >
        검사 결과 보기
        <ArrowRight size={17} />
      </button>
    </section>
  );
}
