"use client";

import { AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { Toast } from "@/components/Toast";
import { countries, countryData } from "@/data/countries";

type ShellModal = "login" | "onboarding" | null;

type AppShellContextValue = {
  showToast: (message: string) => void;
  openLogin: () => void;
  openOnboarding: () => void;
};

const AppShellContext = createContext<AppShellContextValue | null>(null);

const inputClass =
  "h-12 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20";
const labelClass = "text-sm font-extrabold text-[#111827]";

export function useAppShell() {
  const context = useContext(AppShellContext);

  if (!context) {
    throw new Error("useAppShell must be used inside AppShell");
  }

  return context;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ShellModal>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleMockSubmit = (event: FormEvent<HTMLFormElement>, message: string) => {
    event.preventDefault();
    setActiveModal(null);
    setToast(message);
  };

  const value = useMemo<AppShellContextValue>(
    () => ({
      showToast: setToast,
      openLogin: () => setActiveModal("login"),
      openOnboarding: () => setActiveModal("onboarding"),
    }),
    [],
  );

  return (
    <AppShellContext.Provider value={value}>
      <div className="min-h-screen bg-white text-[#111827]">
        <Header
          onLogin={() => setActiveModal("login")}
          onStart={() => setActiveModal("onboarding")}
        />
        {children}
      </div>

      <AnimatePresence>
        {activeModal === "login" ? (
          <Modal
            key="login"
            title="로그인"
            description="Career Copilot 계정으로 해외 커리어 준비를 이어가세요."
            onClose={() => setActiveModal(null)}
          >
            <form
              className="grid gap-4"
              onSubmit={(event) => handleMockSubmit(event, "로그인 데모가 실행되었습니다.")}
            >
              <label className="grid gap-2">
                <span className={labelClass}>이메일</span>
                <input className={inputClass} type="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>비밀번호</span>
                <input className={inputClass} type="password" placeholder="비밀번호" />
              </label>
              <button
                className="h-12 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="submit"
              >
                로그인
              </button>
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] text-sm font-black text-[#111827] transition hover:-translate-y-0.5 hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => setToast("Google 로그인은 데모에서 비활성화되어 있습니다.")}
              >
                <Mail size={18} />
                Google로 계속하기
              </button>
              <button
                className="text-sm font-bold text-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => setToast("회원가입 플로우는 MVP 다음 단계입니다.")}
              >
                아직 계정이 없나요? 회원가입
              </button>
            </form>
          </Modal>
        ) : null}

        {activeModal === "onboarding" ? (
          <Modal
            key="onboarding"
            title="AI 추천 시작하기"
            description="관심 국가와 현재 상태를 선택하면 맞춤 커리어 여정을 추천합니다."
            onClose={() => setActiveModal(null)}
          >
            <form
              className="grid gap-4"
              onSubmit={(event) => handleMockSubmit(event, "AI 추천 준비가 완료되었습니다.")}
            >
              <label className="grid gap-2">
                <span className={labelClass}>관심 국가</span>
                <select className={inputClass} defaultValue={countryData.usa.label}>
                  {countries.map((country) => (
                    <option key={country.key}>{country.label}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>관심 직무</span>
                <select className={inputClass} defaultValue="Product Manager">
                  {countryData.usa.recommendedRoles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>현재 상태</span>
                <select className={inputClass} defaultValue="졸업예정자">
                  <option>대학생</option>
                  <option>졸업예정자</option>
                  <option>신입</option>
                  <option>경력</option>
                </select>
              </label>
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="submit"
              >
                AI 추천 시작하기
                <ArrowRight size={17} />
              </button>
            </form>
          </Modal>
        ) : null}
      </AnimatePresence>

      <Toast message={toast} />
    </AppShellContext.Provider>
  );
}
