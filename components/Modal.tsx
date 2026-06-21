import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ModalProps = {
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ title, description, children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/40 px-4 py-6 backdrop-blur-sm">
      <button
        className="absolute inset-0 cursor-default"
        type="button"
        aria-label="모달 닫기"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-2xl shadow-[#4B32D9]/15"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111827]">
              {title}
            </h2>
            {description ? (
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                {description}
              </p>
            ) : null}
          </div>
          <button
            className="rounded-full border border-[#E5E7EB] p-2 text-[#6B7280] transition hover:-translate-y-0.5 hover:border-[#6C5CE7] hover:text-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="button"
            onClick={onClose}
            aria-label="닫기"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
