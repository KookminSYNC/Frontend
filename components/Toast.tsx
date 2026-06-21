import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type ToastProps = {
  message: string | null;
};

export function Toast({ message }: ToastProps) {
  if (!message) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#DCD6FF] bg-white px-5 py-3 text-sm font-semibold text-[#111827] shadow-xl shadow-[#4B32D9]/15"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 className="text-[#6C5CE7]" size={18} />
      {message}
    </motion.div>
  );
}
