"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Modal } from "@/components/Modal";
import { axisLabels, quickQuestions, SurveyAxis } from "@/data/roleSurvey";

type RoleQuickCheckModalProps = {
  onClose: () => void;
  onComplete: (axis: SurveyAxis) => void;
};

export function RoleQuickCheckModal({ onClose, onComplete }: RoleQuickCheckModalProps) {
  const [answers, setAnswers] = useState<Record<string, SurveyAxis>>({});

  const resultAxis = useMemo(() => {
    const scores = Object.values(answers).reduce<Record<SurveyAxis, number>>(
      (acc, axis) => {
        acc[axis] += 1;
        return acc;
      },
      {
        analysis: 0,
        making: 0,
        planning: 0,
        design: 0,
        communication: 0,
        infra: 0,
        security: 0,
        research: 0,
        global: 0,
        leadership: 0,
      },
    );

    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as SurveyAxis;
  }, [answers]);

  const completed = Object.keys(answers).length === quickQuestions.length;

  return (
    <Modal
      title="간단 직무 성격 확인하기"
      description="5문항으로 현재 강점 축을 먼저 확인하고, 아래 정밀 설문으로 이어갈 수 있어요."
      onClose={onClose}
    >
      <div className="grid gap-4">
        {quickQuestions.map((question, index) => (
          <div key={question.id} className="rounded-3xl border border-[#E5E7EB] bg-[#FBFAFF] p-4">
            <p className="text-xs font-black text-[#6C5CE7]">Q{index + 1}</p>
            <h3 className="mt-1 text-base font-black text-[#111827]">{question.title}</h3>
            <div className="mt-3 grid gap-2">
              {question.options.map((option) => {
                const active = answers[question.id] === option.axis;

                return (
                  <button
                    key={option.label}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                      active
                        ? "border-[#6C5CE7] bg-white text-[#6C5CE7]"
                        : "border-[#E5E7EB] bg-white text-[#111827]"
                    }`}
                    type="button"
                    onClick={() =>
                      setAnswers((current) => ({ ...current, [question.id]: option.axis }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {completed ? (
          <div className="rounded-3xl border border-[#DCD6FF] bg-[#F3F0FF] p-4">
            <p className="text-sm font-bold text-[#6B7280]">간단 결과</p>
            <p className="mt-1 text-2xl font-black text-[#6C5CE7]">
              {axisLabels[resultAxis]}
            </p>
          </div>
        ) : null}

        <button
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] disabled:cursor-not-allowed disabled:bg-[#DCD6FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          type="button"
          disabled={!completed}
          onClick={() => onComplete(resultAxis)}
        >
          정밀 설문으로 이어가기
          <ArrowRight size={17} />
        </button>
      </div>
    </Modal>
  );
}
