"use client";

import {
  ChevronDown,
  Globe2,
  LogIn,
  Menu,
  Navigation,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "홈", href: "/" },
  { label: "직무 추천", href: "/roles" },
  { label: "자소서 첨삭", href: "/resume" },
  { label: "AI 모의면접", href: "/interview" },
  { label: "커뮤니티", href: "/community" },
  { label: "기업 추천", href: "/companies" },
];
const languages = ["한국어", "English", "日本語", "中文", "Tiếng Việt"];

type HeaderProps = {
  onLogin: () => void;
  onStart: () => void;
};

export function Header({ onLogin, onStart }: HeaderProps) {
  const pathname = usePathname();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("한국어");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1480px] items-center justify-between px-5 lg:px-8">
        <Link
          className="flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          href="/"
          onClick={closeMobile}
          aria-label="Career Copilot 홈"
        >
          <span className="grid size-10 place-items-center overflow-hidden rounded-2xl">
            <Image
              src="/career-copilot-plane-logo.svg"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-cover"
            />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[#111827]">
            Career <span className="text-[#6C5CE7]">Copilot</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`relative py-6 text-sm font-bold transition hover:text-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                isActive(item.href) ? "text-[#6C5CE7]" : "text-[#111827]"
              }`}
              href={item.href}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#6C5CE7]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              className="flex h-11 items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8F7FF] px-4 text-sm font-bold text-[#111827] transition hover:-translate-y-0.5 hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <Globe2 size={18} />
              {language}
              <ChevronDown size={16} />
            </button>
            {languageOpen ? (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-xl">
                {languages.map((item) => (
                  <button
                    key={item}
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition hover:bg-[#F3F0FF] hover:text-[#6C5CE7] ${
                      language === item ? "bg-[#F3F0FF] text-[#6C5CE7]" : "text-[#111827]"
                    }`}
                    type="button"
                    onClick={() => {
                      setLanguage(item);
                      setLanguageOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <button
            className="flex h-11 items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 text-sm font-bold text-[#111827] transition hover:-translate-y-0.5 hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={onLogin}
          >
            <LogIn size={17} />
            로그인
          </button>
          <button
            className="h-11 rounded-xl bg-[#6C5CE7] px-5 text-sm font-bold text-white shadow-lg shadow-[#6C5CE7]/25 transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={onStart}
          >
            시작하기
          </button>
        </div>

        <button
          className="rounded-xl border border-[#E5E7EB] p-2 text-[#111827] lg:hidden"
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="모바일 메뉴"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#E5E7EB] bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-bold ${
                  isActive(item.href)
                    ? "border border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                    : "text-[#111827]"
                }`}
                href={item.href}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              className="rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm font-bold"
              type="button"
              onClick={onLogin}
            >
              로그인
            </button>
            <button
              className="rounded-2xl bg-[#6C5CE7] px-4 py-3 text-sm font-bold text-white"
              type="button"
              onClick={onStart}
            >
              시작하기
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-2xl bg-[#F3F0FF] px-4 py-3 text-sm font-bold text-[#6C5CE7]">
            <Navigation size={16} />
            {language}
          </div>
        </div>
      ) : null}
    </header>
  );
}
