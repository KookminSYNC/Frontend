"use client";

import { BriefcaseBusiness, ChevronRight, MapPin, TrendingUp } from "lucide-react";
import { useState } from "react";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Modal } from "@/components/Modal";
import { companyLogos, countries, countryData, CountryKey, Company } from "@/data/countries";

export function CompaniesPage() {
  const [countryKey, setCountryKey] = useState<CountryKey>("usa");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const country = countryData[countryKey];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-7 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7]">
            <BriefcaseBusiness size={17} />
            Company Match
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#111827] lg:text-6xl">
            국가별 추천 기업과 지원 포인트 보기
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
            국가를 선택하면 추천 기업, 직무, 경쟁률, 필요 역량을 한 화면에서 비교합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-14 lg:grid-cols-[0.35fr_1fr] lg:px-8">
        <aside className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Countries
          </p>
          <div className="mt-4 grid gap-2">
            {countries.map((item) => (
              <button
                key={item.key}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                  countryKey === item.key
                    ? "border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                    : "border-[#E5E7EB] bg-white text-[#111827]"
                }`}
                type="button"
                onClick={() => setCountryKey(item.key)}
              >
                {item.flag} {item.label}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-3xl bg-[#F3F0FF] p-4">
            <p className="flex items-center gap-2 text-sm font-black text-[#111827]">
              <TrendingUp className="text-[#6C5CE7]" size={17} />
              평균 연봉
            </p>
            <p className="mt-2 text-3xl font-black text-[#6C5CE7]">{country.salary}</p>
            <p className="mt-1 text-sm font-bold text-[#111827]">{country.salaryNote}</p>
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {country.topCompanies.map((company) => (
            <button
              key={company.name}
              className="group rounded-[2rem] border border-[#E5E7EB] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-xl hover:shadow-[#4B32D9]/10 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={() => setSelectedCompany(company)}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-16 place-items-center rounded-3xl border border-[#E5E7EB] bg-white shadow-sm">
                  <CompanyLogo
                    name={company.name}
                    src={companyLogos[company.name]}
                    className="h-12 w-12 object-contain"
                    fallbackClassName="h-12 w-12 text-sm"
                  />
                </span>
                <ChevronRight className="text-[#6C5CE7]" size={20} />
              </div>
              <h2 className="mt-5 text-xl font-black text-[#111827] group-hover:text-[#6C5CE7]">
                {company.name}
              </h2>
              <p className="mt-2 text-sm font-bold text-[#6B7280]">{company.role}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniMetric label="경쟁률" value={company.competition} />
                <MiniMetric label="난이도" value={company.difficulty} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {company.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F3F0FF] px-3 py-2 text-xs font-black text-[#6C5CE7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedCompany ? (
        <Modal
          title={selectedCompany.name}
          description={`${country.label} 추천 기업 상세`}
          onClose={() => setSelectedCompany(null)}
        >
          <div className="grid gap-4">
            <div className="grid h-28 place-items-center rounded-3xl border border-[#E5E7EB] bg-white">
              <CompanyLogo
                name={selectedCompany.name}
                src={companyLogos[selectedCompany.name]}
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
                fallbackClassName="h-20 w-20 text-base"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniMetric label="국가" value={country.label} />
              <MiniMetric label="추천 직무" value={selectedCompany.role} />
              <MiniMetric label="경쟁률" value={selectedCompany.competition} />
              <MiniMetric label="지원 난이도" value={selectedCompany.difficulty} />
            </div>
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-4">
              <p className="flex items-center gap-2 text-sm font-black text-[#111827]">
                <MapPin className="text-[#6C5CE7]" size={17} />
                필요 역량
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedCompany.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#6C5CE7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </main>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
      <p className="text-xs font-black text-[#6B7280]">{label}</p>
      <p className="mt-2 text-sm font-black text-[#111827]">{value}</p>
    </div>
  );
}
