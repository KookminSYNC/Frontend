"use client";

import { ArrowRight, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogo";
import { useAppShell } from "@/components/AppShell";
import { companyLogos, countries } from "@/data/countries";
import type { RoleProfile } from "@/data/roleSurvey";

export type RoleMatch = {
  profile: RoleProfile;
  match: number;
};

type RoleResultPanelProps = {
  results: RoleMatch[];
};

export function RoleResultPanel({ results }: RoleResultPanelProps) {
  const { showToast } = useAppShell();

  if (results.length === 0) {
    return (
      <section className="rounded-[2rem] border border-dashed border-[#DCD6FF] bg-[#FBFAFF] p-7 text-center">
        <Sparkles className="mx-auto text-[#6C5CE7]" size={28} />
        <h2 className="mt-3 text-xl font-black text-[#111827]">
          정밀 설문을 완료하면 결과가 표시됩니다.
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#6B7280]">
          20문항을 모두 답하면 TOP 3 직무, 추천 국가, 기업 후보가 연결됩니다.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5 lg:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Matched Roles
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827]">
            추천 직무 TOP 3
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            현재 답변 기준으로 가장 맞는 글로벌 커리어 방향입니다.
          </p>
        </div>
        <button
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-[#6C5CE7] bg-white px-5 text-sm font-black text-[#6C5CE7] transition hover:-translate-y-0.5 hover:bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          type="button"
          onClick={() => showToast("추천 결과를 커리어 로드맵에 연결했습니다.")}
        >
          다음 액션 연결
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        {results.map((result, index) => {
          const matchingCountries = countries
            .map((country) => ({
              country,
              companies: country.topCompanies.filter((company) => company.role === result.profile.role),
            }))
            .filter((entry) => entry.companies.length > 0)
            .slice(0, 3);

          return (
            <article
              key={result.profile.role}
              className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#6C5CE7]">
                  TOP {index + 1}
                </span>
                <span className="text-2xl font-black text-[#6C5CE7]">{result.match}%</span>
              </div>
              <h3 className="mt-4 text-xl font-black text-[#111827]">
                {result.profile.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                {result.profile.summary}
              </p>
              <div className="mt-4 rounded-2xl bg-white p-4">
                <p className="text-sm font-black text-[#111827]">추천 이유</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                  {result.profile.reason}
                </p>
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-2 text-sm font-black text-[#111827]">
                  <BriefcaseBusiness size={17} className="text-[#6C5CE7]" />
                  필요한 역량
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {result.profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#6C5CE7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-2 text-sm font-black text-[#111827]">
                  <MapPin size={17} className="text-[#6C5CE7]" />
                  추천 국가/기업
                </p>
                <div className="mt-3 grid gap-2">
                  {matchingCountries.length > 0 ? (
                    matchingCountries.map((entry) => (
                      <div
                        key={entry.country.key}
                        className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3"
                      >
                        <span className="text-sm font-black text-[#111827]">
                          {entry.country.label}
                        </span>
                        <span className="flex -space-x-2">
                          {entry.companies.slice(0, 2).map((company) => (
                            <span
                              key={company.name}
                              className="grid size-9 place-items-center rounded-xl border border-[#E5E7EB] bg-white"
                              title={company.name}
                            >
                              <CompanyLogo
                                name={company.name}
                                src={companyLogos[company.name]}
                                className="h-7 w-7 object-contain"
                                fallbackClassName="h-7 w-7 text-xs"
                              />
                            </span>
                          ))}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl bg-white p-3 text-sm font-bold text-[#6B7280]">
                      현재 mock 기업 데이터에는 직접 매칭 기업이 없어 커리어 로드맵으로 연결합니다.
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
