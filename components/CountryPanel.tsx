import Image from "next/image";
import { BriefcaseBusiness, ChevronRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/components/CompanyLogo";
import type { Company, CountryInfo, CountryKey } from "@/data/countries";
import { companyLogos, countries, countryData, countryFlagImages } from "@/data/countries";

type CountryPanelProps = {
  selectedCountry: CountryKey;
  onCountryChange: (country: CountryKey) => void;
  onCompanySelect: (company: Company, country: CountryInfo) => void;
  onRoleSelect: (role: string) => void;
};

export function CountryPanel({
  selectedCountry,
  onCountryChange,
  onCompanySelect,
  onRoleSelect,
}: CountryPanelProps) {
  const country = countryData[selectedCountry];

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow-2xl shadow-[#4B32D9]/10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6C5CE7]">
            Country Match
          </p>
          <h2 className="mt-2 text-lg font-extrabold tracking-tight text-[#111827]">
            어느 나라에서 일하고 싶으신가요?
          </h2>
        </div>
        <span className="grid size-12 place-items-center rounded-2xl bg-[#F3F0FF]">
          <Image
            src={countryFlagImages[country.key]}
            alt={`${country.label} 국기`}
            width={48}
            height={36}
            className="h-7 w-10 rounded-md object-cover shadow-sm"
          />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2">
        {countries.map((item) => (
          <button
            key={item.key}
            className={`grid min-h-14 place-items-center rounded-2xl border px-1 py-2 transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
              selectedCountry === item.key
                ? "border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                : "border-[#E5E7EB] bg-white text-[#111827]"
            }`}
            type="button"
            onClick={() => onCountryChange(item.key)}
            aria-label={`${item.label} 선택`}
          >
            <Image
              src={countryFlagImages[item.key]}
              alt=""
              width={80}
              height={60}
              className="h-7 w-10 rounded-md object-cover shadow-sm"
            />
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#6B7280]">선택 국가 취업 추천 정보</p>
            <h3 className="mt-1 text-lg font-extrabold text-[#111827]">
              Global Top Match
            </h3>
          </div>
          <button
            className="flex items-center gap-1 text-sm font-bold text-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={() => onRoleSelect("선택 국가 추천 리포트")}
          >
            더보기
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#111827]">
              <BriefcaseBusiness className="text-[#6C5CE7]" size={17} />
              TOP 기업
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {country.topCompanies.map((company) => (
                <button
                  key={company.name}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-2 text-left transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                  type="button"
                  onClick={() => onCompanySelect(company, country)}
                >
                  <span className="grid size-10 place-items-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
                    <CompanyLogo
                      name={company.name}
                      src={companyLogos[company.name]}
                      className="h-8 w-8 object-contain"
                      fallbackClassName="h-8 w-8 text-xs"
                    />
                  </span>
                  <span className="mt-2 block truncate text-[11px] font-extrabold leading-4 text-[#111827] group-hover:text-[#6C5CE7]">
                    {company.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-3 rounded-2xl bg-white p-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#111827]">
                <TrendingUp className="text-[#6C5CE7]" size={17} />
                평균 연봉
              </div>
              <p className="mt-2 text-2xl font-black tracking-tight text-[#6C5CE7]">
                {country.salary}
              </p>
              <p className="mt-1 text-sm font-bold text-[#111827]">
                {country.salaryNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
