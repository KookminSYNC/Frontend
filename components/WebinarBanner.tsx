import { ArrowRight, CalendarDays, Clock, Mic2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type WebinarBannerProps = {
  onOpen: () => void;
};

export function WebinarBanner({ onOpen }: WebinarBannerProps) {
  return (
    <section className="mx-auto max-w-[1480px] px-5 pb-5 pt-1 lg:px-8">
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group grid w-full gap-6 overflow-hidden rounded-3xl bg-[#25106F] px-7 py-7 text-left text-white shadow-2xl shadow-[#4B32D9]/20 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] lg:grid-cols-[1.3fr_0.6fr_0.6fr_0.7fr_0.9fr]"
        type="button"
        onClick={onOpen}
      >
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF7A90]">
            LIVE WEBINAR
          </p>
          <p className="mt-3 text-lg font-semibold text-white/85">
            아마존 1000:1의 주인공!
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">
            합격자의 생생한 해외취업 전략 & Q&A
          </h2>
        </div>
        <div className="flex items-center gap-3 border-white/20 lg:border-l lg:pl-8">
          <CalendarDays size={22} className="text-[#C9C2FF]" />
          <div>
            <p className="text-sm font-semibold text-white/70">날짜</p>
            <p className="mt-1 font-black">2024. 06. 15 (토)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={22} className="text-[#C9C2FF]" />
          <div>
            <p className="text-sm font-semibold text-white/70">시간</p>
            <p className="mt-1 font-black">PM 08:00</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mic2 size={22} className="text-[#C9C2FF]" />
          <div>
            <p className="text-sm font-semibold text-white/70">연사</p>
            <p className="mt-1 font-black">아마존 PM 합격자 김○○</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <span className="flex h-20 w-40 items-center justify-center rounded-3xl border border-white/15 bg-white px-5 shadow-xl">
            <Image
              src="/amazon-logo.svg"
              alt="Amazon 로고"
              width={160}
              height={64}
              className="h-auto w-full object-contain"
            />
          </span>
          <span className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#4B32D9] transition group-hover:-translate-y-0.5">
            웨비나 사전 신청하기 <ArrowRight className="inline" size={16} />
            <span className="mt-1 block text-xs font-bold text-[#6B7280]">
              선착순 500명 한정
            </span>
          </span>
        </div>
      </motion.button>
    </section>
  );
}
