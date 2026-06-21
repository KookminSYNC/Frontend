import { useState } from "react";
import { motion } from "framer-motion";
import { journeySteps } from "@/data/journeySteps";

const journeyIcons = [
  {
    name: "clipboard-document-check",
    path: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75",
  },
  {
    name: "building-office-2",
    path: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",
  },
  {
    name: "document-text",
    path: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    name: "briefcase",
    path: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  },
  {
    name: "rocket-launch",
    path: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
];

function Heroicon({ path }: { path: string }) {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function CareerJourney() {
  const [selectedStep, setSelectedStep] = useState(2);
  const selected = journeySteps.find((step) => step.id === selectedStep) ?? journeySteps[1];

  return (
    <section id="career-journey" className="mx-auto max-w-[1480px] px-5 pb-20 pt-8 lg:px-8">
      <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5 lg:p-7">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
          AI Roadmap
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827]">
          AI와 함께하는 5단계 커리어 여정
        </h2>

        <div className="mt-7 grid gap-3 lg:grid-cols-5">
          {journeySteps.map((step, index) => {
            const icon = journeyIcons[index];
            const active = selectedStep === step.id;

            return (
              <button
                key={step.id}
                className={`group relative rounded-3xl border p-4 text-left transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                  active
                    ? "border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                    : "border-[#E5E7EB] bg-white text-[#111827]"
                }`}
                type="button"
                onClick={() => setSelectedStep(step.id)}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl ${
                      active ? "bg-white text-[#6C5CE7]" : "bg-[#F3F0FF] text-[#6C5CE7]"
                    }`}
                  >
                    <Heroicon path={icon.path} />
                  </span>
                  <span className="text-xs font-black text-[#6C5CE7]">STEP {step.id}</span>
                </div>
                <h3 className="mt-4 text-base font-black text-[#111827]">{step.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border border-[#DCD6FF] bg-[#FBFAFF] p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black text-[#6C5CE7]">선택된 여정</p>
              <h3 className="mt-1 text-2xl font-black text-[#111827]">
                {selected.id}단계 {selected.title}
              </h3>
            </div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7] shadow-sm">
              주간 추천 리포트와 연결
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {selected.details.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-bold leading-6 text-[#111827]"
              >
                {detail}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
