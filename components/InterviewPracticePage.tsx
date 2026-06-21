"use client";

import { ArrowRight, Bot, Clock, Mic2, Target } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppShell } from "@/components/AppShell";
import { countries, countryData, CountryKey } from "@/data/countries";

const interviewQuestions = [
  "해외 팀에서 의견 충돌이 생겼을 때 어떻게 해결하겠습니까?",
  "최근 프로젝트에서 가장 어려웠던 문제와 해결 과정을 설명해 주세요.",
  "이 국가와 이 기업을 선택한 이유를 직무 관점에서 말해 주세요.",
  "성과를 수치로 증명했던 경험을 STAR 구조로 답변해 주세요.",
];

const inputClass =
  "h-12 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] outline-none transition focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20";

export function InterviewPracticePage() {
  const { showToast } = useAppShell();
  const [countryKey, setCountryKey] = useState<CountryKey>("usa");
  const [role, setRole] = useState("Software Engineer");
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState(
    "프로젝트 일정이 지연되었을 때 원인을 데이터로 나누고, 우선순위를 다시 정해 팀과 공유했습니다.",
  );

  const country = countryData[countryKey];
  const clarityScore = useMemo(() => Math.min(94, 58 + Math.floor(answer.length / 9)), [answer]);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-7 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7]">
            <Mic2 size={17} />
            AI Mock Interview
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#111827] lg:text-6xl">
            해외 면접 답변을 실전처럼 점검하기
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
            국가와 직무 맥락에 맞는 질문을 고르고 답변 구조, 근거, 전달력을 mock
            피드백으로 확인합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-[#4B32D9]/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-[#111827]">국가</span>
              <select
                className={inputClass}
                value={countryKey}
                onChange={(event) => {
                  const nextCountry = event.target.value as CountryKey;
                  setCountryKey(nextCountry);
                  setRole(countryData[nextCountry].recommendedRoles[0]);
                }}
              >
                {countries.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-[#111827]">직무</span>
              <select className={inputClass} value={role} onChange={(event) => setRole(event.target.value)}>
                {country.recommendedRoles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-3">
            {interviewQuestions.map((question, index) => (
              <button
                key={question}
                className={`rounded-3xl border p-4 text-left text-sm font-bold leading-6 transition hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                  activeQuestion === index
                    ? "border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                    : "border-[#E5E7EB] bg-white text-[#111827]"
                }`}
                type="button"
                onClick={() => setActiveQuestion(index)}
              >
                Q{index + 1}. {question}
              </button>
            ))}
          </div>
        </aside>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-[#4B32D9]/5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-black text-[#6C5CE7]">현재 질문</p>
                <h2 className="mt-2 text-2xl font-black text-[#111827]">
                  {interviewQuestions[activeQuestion]}
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-[#F3F0FF] px-4 py-2 text-sm font-black text-[#6C5CE7]">
                <Clock size={16} />
                2분 답변 권장
              </span>
            </div>
            <textarea
              className="mt-5 min-h-72 w-full rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] px-5 py-4 text-sm font-semibold leading-7 text-[#111827] outline-none transition focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
            />
            <button
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={() => showToast("면접 피드백을 업데이트했습니다.")}
            >
              답변 피드백 받기
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <FeedbackCard icon={Bot} label="전달력" value={`${clarityScore}%`} />
            <FeedbackCard icon={Target} label="직무 적합성" value={`${Math.min(95, clarityScore + 4)}%`} />
            <FeedbackCard icon={Mic2} label="구조화" value={`${Math.max(70, clarityScore - 6)}%`} />
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-6">
            <p className="text-lg font-black text-[#111827]">피드백</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-4">
                <p className="font-black text-[#6C5CE7]">강점</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                  문제 상황과 행동이 분리되어 있어 답변 흐름이 명확합니다.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-4">
                <p className="font-black text-[#6C5CE7]">보완점</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                  결과 수치와 {country.label} 조직에서의 협업 맥락을 한 문장 더 추가하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeedbackCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Bot;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5">
      <Icon className="text-[#6C5CE7]" size={22} />
      <p className="mt-4 text-sm font-black text-[#6B7280]">{label}</p>
      <p className="mt-1 text-3xl font-black text-[#6C5CE7]">{value}</p>
    </div>
  );
}
