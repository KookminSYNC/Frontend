"use client";

import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { CareerJourney } from "@/components/CareerJourney";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Hero } from "@/components/Hero";
import { Modal } from "@/components/Modal";
import { SuccessStories } from "@/components/SuccessStories";
import { WebinarBanner } from "@/components/WebinarBanner";
import { useAppShell } from "@/components/AppShell";
import type { Company, CountryInfo, CountryKey } from "@/data/countries";
import { companyLogos, countries, countryData, roleDescriptions } from "@/data/countries";
import type { SuccessStory } from "@/data/stories";

type ModalName = "webinar" | "company" | "story" | null;
type SelectedCompany = {
  company: Company;
  country: CountryInfo;
};

const inputClass =
  "h-12 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20";
const labelClass = "text-sm font-extrabold text-[#111827]";

export function CareerCopilotApp() {
  const { openOnboarding, showToast } = useAppShell();
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("usa");
  const [activeModal, setActiveModal] = useState<ModalName>(null);
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);

  const openCompany = (company: Company, country: CountryInfo) => {
    setSelectedCompany({ company, country });
    setActiveModal("company");
  };

  const openStory = (story: SuccessStory) => {
    setSelectedStory(story);
    setActiveModal("story");
  };

  const handleRoleSelect = (role: string) => {
    showToast(roleDescriptions[role] ?? `${role} 정보를 확인했어요.`);
  };

  const handleWebinarSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActiveModal(null);
    showToast("웨비나 신청이 완료되었습니다.");
  };

  return (
    <>
      <main>
        <Hero
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
          onCompanySelect={openCompany}
          onRoleSelect={handleRoleSelect}
          onStart={openOnboarding}
          onScrollJourney={() =>
            journeyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onScrollStories={() =>
            storiesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        />
        <WebinarBanner onOpen={() => setActiveModal("webinar")} />
        <div ref={storiesRef}>
          <SuccessStories
            onStorySelect={openStory}
            onMore={() => showToast("더 많은 합격 사례는 곧 공개됩니다.")}
          />
        </div>
        <div ref={journeyRef}>
          <CareerJourney />
        </div>
      </main>

      <AnimatePresence>
        {activeModal === "webinar" ? (
          <Modal
            key="webinar"
            title="웨비나 사전 신청"
            description="합격자의 전략과 Q&A를 가장 먼저 받아보세요."
            onClose={() => setActiveModal(null)}
          >
            <form className="grid gap-4" onSubmit={handleWebinarSubmit}>
              <label className="grid gap-2">
                <span className={labelClass}>이름</span>
                <input className={inputClass} placeholder="홍길동" />
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>이메일</span>
                <input className={inputClass} type="email" placeholder="you@example.com" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>관심 국가</span>
                  <select className={inputClass} defaultValue={countryData[selectedCountry].label}>
                    {countries.map((country) => (
                      <option key={country.key}>{country.label}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className={labelClass}>관심 직무</span>
                  <select className={inputClass} defaultValue="Software Engineer">
                    {countryData[selectedCountry].recommendedRoles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2">
                <span className={labelClass}>질문 미리 남기기</span>
                <textarea
                  className="min-h-28 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20"
                  placeholder="해외취업 준비에서 가장 궁금한 점을 남겨주세요."
                />
              </label>
              <button
                className="h-12 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="submit"
              >
                신청 완료하기
              </button>
            </form>
          </Modal>
        ) : null}

        {activeModal === "company" && selectedCompany ? (
          <Modal
            key="company"
            title={selectedCompany.company.name}
            description={`${selectedCompany.country.label} 추천 기업 분석`}
            onClose={() => setActiveModal(null)}
          >
            <div className="grid gap-4">
              <div className="grid h-24 place-items-center rounded-3xl border border-[#E5E7EB] bg-white">
                <CompanyLogo
                  name={selectedCompany.company.name}
                  src={companyLogos[selectedCompany.company.name]}
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                  fallbackClassName="h-16 w-16 text-base"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <InfoCard label="국가" value={selectedCompany.country.label} />
                <InfoCard label="추천 직무" value={selectedCompany.company.role} />
                <InfoCard label="예상 경쟁률" value={selectedCompany.company.competition} />
                <InfoCard label="평균 연봉" value={selectedCompany.country.salary} />
                <InfoCard label="지원 난이도" value={selectedCompany.company.difficulty} />
                <InfoCard label="연봉 참고" value={selectedCompany.country.salaryNote} />
              </div>
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-4">
                <p className={labelClass}>필요 역량</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCompany.company.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#6C5CE7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => showToast(`${selectedCompany.company.name} 분석 리포트를 준비했어요.`)}
              >
                이 기업 분석하기
                <ArrowRight size={17} />
              </button>
            </div>
          </Modal>
        ) : null}

        {activeModal === "story" && selectedStory ? (
          <Modal
            key="story"
            title={selectedStory.company}
            description={`${selectedStory.country} ${selectedStory.role}`}
            onClose={() => setActiveModal(null)}
          >
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 text-[#111827]">
                <p className="text-sm font-bold text-[#6B7280]">준비 기간</p>
                <p className="mt-1 text-3xl font-black text-[#6C5CE7]">
                  {selectedStory.period}
                </p>
                <p className="mt-4 text-lg font-black">“{selectedStory.quote}”</p>
                <p className="mt-3 text-sm font-semibold text-[#6B7280]">
                  {selectedStory.person} | {selectedStory.school}
                </p>
              </div>
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-4">
                <p className={labelClass}>사용한 기능</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedStory.usedFeatures.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#111827]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  openOnboarding();
                  showToast(`${selectedStory.role.replace(" 합격", "")} 준비를 시작합니다.`);
                }}
              >
                나도 이 직무 준비하기
                <ArrowRight size={17} />
              </button>
            </div>
          </Modal>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-[#111827]">{value}</p>
    </div>
  );
}
