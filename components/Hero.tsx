import Image from "next/image";
import { ArrowRight, Globe2, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import type { Company, CountryInfo, CountryKey } from "@/data/countries";
import { CountryPanel } from "@/components/CountryPanel";

type HeroProps = {
  selectedCountry: CountryKey;
  onCountryChange: (country: CountryKey) => void;
  onCompanySelect: (company: Company, country: CountryInfo) => void;
  onRoleSelect: (role: string) => void;
  onStart: () => void;
  onScrollJourney: () => void;
  onScrollStories: () => void;
};

const avatars = ["이", "김", "박", "최", "정"];

export function Hero({
  selectedCountry,
  onCountryChange,
  onCompanySelect,
  onRoleSelect,
  onStart,
  onScrollJourney,
  onScrollStories,
}: HeroProps) {
  return (
    <section id="home" className="mx-auto max-w-[1480px] px-5 pb-3 pt-6 lg:px-8 lg:pt-8">
      <div className="grid items-start gap-8 xl:grid-cols-[0.95fr_1.15fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F3F0FF] px-4 py-2 text-sm font-extrabold text-[#6C5CE7]">
            <Globe2 size={17} />
            글로벌 커리어의 시작, AI와 함께 더 멀리
          </div>
          <h1 className="mt-8 max-w-2xl text-5xl font-black leading-tight tracking-tight text-[#111827] sm:text-6xl xl:text-7xl">
            국경을 넘어,
            <br />
            당신의{" "}
            <span className="whitespace-nowrap">
              <span className="text-[#6C5CE7]">가능성</span>을
            </span>{" "}
            연결합니다
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5563]">
            AI 기반 분석과 글로벌 네트워크로 당신에게 딱 맞는 해외 커리어를 설계해 드립니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] px-8 text-base font-extrabold text-white shadow-xl shadow-[#6C5CE7]/25 transition hover:-translate-y-1 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={onStart}
            >
              무료로 시작하기
              <ArrowRight size={18} />
            </button>
            <button
              className="inline-flex h-13 items-center justify-center rounded-2xl border border-[#6C5CE7] bg-white px-8 text-base font-extrabold text-[#6C5CE7] transition hover:-translate-y-1 hover:bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={onScrollJourney}
            >
              서비스 둘러보기
            </button>
          </div>
          <button
            className="mt-8 flex items-center gap-4 rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={onScrollStories}
          >
            <span className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <span
                  key={avatar}
                  className="grid size-10 place-items-center rounded-full border-2 border-white bg-[#F3F0FF] text-sm font-black text-[#6C5CE7] shadow"
                  style={{ zIndex: avatars.length - index }}
                >
                  {avatar}
                </span>
              ))}
            </span>
            <span className="text-sm font-bold leading-6 text-[#6B7280]">
              <strong className="text-[#6C5CE7]">50,000+</strong> 명의 글로벌 커리어 여정을
              함께하고 있어요
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-6 -z-10 rounded-full bg-[#6C5CE7]/10 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-[#EDE9FE] bg-white shadow-2xl shadow-[#4B32D9]/10">
            <Image
              src="/career-copilot-hero.png"
              alt="지구본 앞에서 한국 인재와 글로벌 기업 담당자가 악수하는 Career Copilot 히어로 일러스트"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full object-cover object-center lg:h-[430px] xl:h-[560px]"
            />
          </div>
          <div className="mx-auto -mt-9 flex w-[82%] items-center justify-center gap-2 rounded-3xl border border-[#E5E7EB] bg-white/90 px-5 py-4 text-center shadow-xl backdrop-blur">
            <UsersRound className="text-[#6C5CE7]" size={19} />
            <p className="text-sm font-extrabold text-[#111827]">
              한국 인재 × 글로벌 기업{" "}
              <span className="text-[#6C5CE7]">Career Copilot이 연결합니다</span>
            </p>
          </div>
        </motion.div>

        <CountryPanel
          selectedCountry={selectedCountry}
          onCountryChange={onCountryChange}
          onCompanySelect={onCompanySelect}
          onRoleSelect={onRoleSelect}
        />
      </div>
    </section>
  );
}
