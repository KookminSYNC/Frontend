"use client";

import { MessageCircle, PenLine, Search, UsersRound } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { useAppShell } from "@/components/AppShell";
import { countries, CountryKey } from "@/data/countries";

const posts = [
  {
    type: "합격 후기",
    country: "usa",
    title: "미국 PM 인터뷰에서 가장 많이 받은 질문 정리",
    author: "김유정",
    meta: "Product Manager 합격",
  },
  {
    type: "Q&A",
    country: "japan",
    title: "일본 백엔드 포트폴리오에 일본어 README가 꼭 필요할까요?",
    author: "박민준",
    meta: "Backend Engineer 준비",
  },
  {
    type: "스터디",
    country: "canada",
    title: "캐나다 데이터 분석 케이스 인터뷰 스터디 4명 모집",
    author: "정다은",
    meta: "Data Analyst 스터디",
  },
  {
    type: "합격 후기",
    country: "australia",
    title: "호주 Atlassian 코딩 인터뷰 준비 루틴",
    author: "이현우",
    meta: "Software Engineer 합격",
  },
  {
    type: "Q&A",
    country: "germany",
    title: "독일 기업 지원 시 영어 이력서만으로 충분한지 궁금합니다",
    author: "최서윤",
    meta: "Product Manager 준비",
  },
];

export function CommunityPage() {
  const { showToast } = useAppShell();
  const [countryKey, setCountryKey] = useState<CountryKey>("usa");
  const [writeOpen, setWriteOpen] = useState(false);
  const visiblePosts = posts.filter((post) => post.country === countryKey);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FBFAFF] p-7 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#6C5CE7]">
            <UsersRound size={17} />
            Global Community
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#111827] lg:text-6xl">
            국가별 합격 정보와 준비 동료 찾기
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
            합격 후기, Q&A, 스터디 모집을 국가별로 탐색하는 mock 커뮤니티입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 pb-14 lg:grid-cols-[0.35fr_1fr] lg:px-8">
        <aside className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Countries
          </p>
          <div className="mt-4 grid gap-2">
            {countries.map((country) => (
              <button
                key={country.key}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition hover:border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] ${
                  countryKey === country.key
                    ? "border-[#6C5CE7] bg-[#F3F0FF] text-[#6C5CE7]"
                    : "border-[#E5E7EB] bg-white text-[#111827]"
                }`}
                type="button"
                onClick={() => setCountryKey(country.key)}
              >
                {country.flag} {country.label}
              </button>
            ))}
          </div>
          <button
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#4B32D9] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={() => setWriteOpen(true)}
          >
            <PenLine size={16} />
            글쓰기
          </button>
        </aside>

        <div className="grid gap-4">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-[#4B32D9]/5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black text-[#6C5CE7]">
                {countries.find((country) => country.key === countryKey)?.label} 커뮤니티
              </p>
              <h2 className="mt-1 text-2xl font-black text-[#111827]">
                합격 후기 · Q&A · 스터디
              </h2>
            </div>
            <div className="flex h-11 items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-[#FBFAFF] px-4 text-sm font-bold text-[#6B7280]">
              <Search size={16} />
              키워드 검색 준비 중
            </div>
          </div>

          {visiblePosts.length > 0 ? (
            visiblePosts.map((post) => (
              <button
                key={post.title}
                className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-xl hover:shadow-[#4B32D9]/10 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                type="button"
                onClick={() => showToast("게시글 상세는 다음 단계에서 연결됩니다.")}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F3F0FF] px-3 py-1 text-xs font-black text-[#6C5CE7]">
                  <MessageCircle size={14} />
                  {post.type}
                </span>
                <h3 className="mt-4 text-xl font-black text-[#111827]">{post.title}</h3>
                <p className="mt-2 text-sm font-bold text-[#6B7280]">
                  {post.author} · {post.meta}
                </p>
              </button>
            ))
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[#DCD6FF] bg-[#FBFAFF] p-8 text-center">
              <p className="text-lg font-black text-[#111827]">아직 등록된 글이 없습니다.</p>
              <p className="mt-2 text-sm font-semibold text-[#6B7280]">
                첫 질문이나 스터디 모집글을 남겨보세요.
              </p>
            </div>
          )}
        </div>
      </section>

      {writeOpen ? (
        <Modal
          title="커뮤니티 글쓰기"
          description="데모에서는 저장하지 않고 작성 흐름만 확인합니다."
          onClose={() => setWriteOpen(false)}
        >
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setWriteOpen(false);
              showToast("커뮤니티 글쓰기 데모가 완료되었습니다.");
            }}
          >
            <input
              className="h-12 rounded-2xl border border-[#E5E7EB] px-4 text-sm font-bold outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20"
              placeholder="제목"
            />
            <textarea
              className="min-h-40 rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm font-bold outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20"
              placeholder="내용을 입력하세요."
            />
            <button className="h-12 rounded-2xl bg-[#6C5CE7] text-sm font-black text-white" type="submit">
              등록하기
            </button>
          </form>
        </Modal>
      ) : null}
    </main>
  );
}
