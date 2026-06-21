"use client";

import { ArrowRight, CheckCircle2, FilePenLine, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppShell } from "@/components/AppShell";
import { countries, countryData, CountryKey } from "@/data/countries";

const inputClass =
  "h-12 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] outline-none transition focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20";
const labelClass = "text-sm font-extrabold text-[#111827]";

export function ResumeReviewPage() {
  const { showToast } = useAppShell();
  const [countryKey, setCountryKey] = useState<CountryKey>("usa");
  const [role, setRole] = useState("Software Engineer");
  const [company, setCompany] = useState("Google");
  const [coverLetter, setCoverLetter] = useState(
    "저는 데이터 기반으로 문제를 정의하고 빠르게 프로토타입을 만드는 경험을 쌓아왔습니다.",
  );

  const country = countryData[countryKey];
  const score = useMemo(() => {
    const lengthScore = Math.min(22, Math.floor(coverLetter.length / 18));
    const roleScore = coverLetter.toLowerCase().includes(role.split(" ")[0].toLowerCase()) ? 8 : 0;
    return Math.min(96, 64 + lengthScore + roleScore);
  }, [coverLetter, role]);

  const keywords = useMemo(
    () => [
      role,
      country.label,
      "성과 지표",
      "협업",
      "글로벌 커뮤니케이션",
      "문제 해결",
    ],
    [country.label, role],
  );

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-7 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7]">
            <FilePenLine size={17} />
            글로벌 지원서 첨삭
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#111827] lg:text-6xl">
            자소서와 커버레터를 현지 기준으로 다듬기
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
            국가, 직무, 기업 맥락에 맞춰 ATS 키워드와 설득 흐름을 점검하는 프론트엔드
            mock 첨삭 화면입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-[#4B32D9]/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>지원 국가</span>
              <select
                className={inputClass}
                value={countryKey}
                onChange={(event) => {
                  const nextCountry = event.target.value as CountryKey;
                  setCountryKey(nextCountry);
                  setRole(countryData[nextCountry].recommendedRoles[0]);
                  setCompany(countryData[nextCountry].topCompanies[0].name);
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
              <span className={labelClass}>관심 직무</span>
              <select className={inputClass} value={role} onChange={(event) => setRole(event.target.value)}>
                {country.recommendedRoles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className={labelClass}>지원 기업</span>
              <select
                className={inputClass}
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              >
                {country.topCompanies.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2">
            <span className={labelClass}>자소서/커버레터 초안</span>
            <textarea
              className="min-h-80 rounded-3xl border border-[#E5E7EB] bg-white px-5 py-4 text-sm font-semibold leading-7 text-[#111827] outline-none transition focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20"
              value={coverLetter}
              onChange={(event) => setCoverLetter(event.target.value)}
            />
          </label>
          <button
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={() => showToast("자소서 첨삭 리포트를 업데이트했습니다.")}
          >
            첨삭 리포트 생성
            <ArrowRight size={17} />
          </button>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-xl shadow-[#4B32D9]/5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
              Review Score
            </p>
            <div className="mt-4 flex items-end gap-3">
              <p className="text-6xl font-black text-[#6C5CE7]">{score}</p>
              <p className="pb-2 text-lg font-black text-[#6B7280]">/100</p>
            </div>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#6B7280]">
              {company} {role} 기준으로 메시지 선명도, 직무 키워드, 글로벌 협업 표현을
              점검했습니다.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-6">
            <p className="flex items-center gap-2 text-lg font-black text-[#111827]">
              <Sparkles className="text-[#6C5CE7]" size={20} />
              개선 제안
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "첫 문장에 지원 직무와 핵심 성과를 같이 배치하세요.",
                "프로젝트 설명은 문제, 행동, 결과 순서로 압축하세요.",
                "해외 팀과 협업한 방식이나 영어 커뮤니케이션 근거를 추가하세요.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#6C5CE7]" size={18} />
                  <p className="text-sm font-bold leading-6 text-[#111827]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6">
            <p className="text-lg font-black text-[#111827]">ATS 키워드</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-[#F3F0FF] px-3 py-2 text-xs font-black text-[#6C5CE7]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
