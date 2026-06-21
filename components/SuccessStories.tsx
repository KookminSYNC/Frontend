import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/components/CompanyLogo";
import { companyLogos } from "@/data/countries";
import type { SuccessStory } from "@/data/stories";
import { successStories } from "@/data/stories";

type SuccessStoriesProps = {
  onStorySelect: (story: SuccessStory) => void;
  onMore: () => void;
};

export function SuccessStories({ onStorySelect, onMore }: SuccessStoriesProps) {
  return (
    <section id="success-stories" className="mx-auto max-w-[1480px] px-5 py-8 lg:px-8">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6C5CE7]">
            Real Outcomes
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827]">
            실제 합격자들의 사례
          </h2>
        </div>
        <button
          className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-black text-[#6C5CE7] hover:bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          type="button"
          onClick={onMore}
        >
          더보기
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {successStories.map((story, index) => (
          <motion.button
            key={story.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            viewport={{ once: true }}
            className="group flex min-h-[218px] flex-col rounded-3xl border border-[#E5E7EB] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#6C5CE7] hover:shadow-xl hover:shadow-[#4B32D9]/10 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={() => onStorySelect(story)}
          >
            <div className="flex items-start gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
                <CompanyLogo name={story.company} src={companyLogos[story.company]} />
              </span>
              <span>
                <span className="block text-sm font-black text-[#111827] group-hover:text-[#6C5CE7]">
                  {story.company}
                </span>
                <span className="mt-1 block text-xs font-bold text-[#6B7280]">
                  {story.role}
                </span>
              </span>
            </div>
            <Quote className="mt-5 text-[#DCD6FF]" size={22} />
            <p className="mt-2 flex-1 text-sm font-semibold leading-6 text-[#111827]">
              “{story.quote}”
            </p>
            <p className="mt-4 text-xs font-bold text-[#6B7280]">
              {story.person} | {story.school}
            </p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
