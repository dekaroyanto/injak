import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Landmark,
  ArrowRight,
  HelpCircle,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { ActiveTab } from "../types";

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div
      id="injak-hero"
      className="relative overflow-hidden bg-slate-950 py-6 text-white border-b border-slate-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-40 right-10 w-75 h-75 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none"
            >
              Kenali Pajak Lebih Dekat dengan{" "}
              <span className="bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                INJAK
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
            >
              Portal edukasi perpajakan interaktif yang dirancang khusus untuk
              membantu Anda memahami apa itu pajak, manfaat pembayaran, siapa
              saja wajib pajak, hingga cara bayar praktis secara online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-cta-get-started"
                onClick={() => setActiveTab("definisi")}
                className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Mulai Belajar</span>
                <ArrowRight size={18} />
              </button>
              <button
                id="hero-cta-quiz"
                onClick={() => setActiveTab("kuis")}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-medium px-8 py-4 rounded-xl transition-all"
              >
                <Award size={18} className="text-yellow-400" />
                <span>Uji Pengetahuan (Kuis)</span>
              </button>
            </motion.div>

            {/* Quick Stat Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-slate-900/80 pt-8 mt-4 w-full"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-mono">
                  75%+
                </span>
                <span className="block text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Sumber APBN
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
                  Rp 54 jt
                </span>
                <span className="block text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Batas PTKP / Thn
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-mono">
                  100%
                </span>
                <span className="block text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Lapor Online
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Illustration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-500/20 to-sky-500/20 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden group">
              {/* Card Image Decorator */}
              <div className="h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                  alt="INJAK Tax Information Ilustrasi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 text-xs text-slate-300 font-medium">
                  <Landmark size={14} className="text-yellow-400" />
                  <span>Kementerian Keuangan RI</span>
                </div>
              </div>

              {/* Card Info Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                  <BookOpen size={14} />
                  <span>Fakta Cepat</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-white">
                  Kenapa Kita Harus Membantu Pembangunan Negara?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pajak bukanlah iuran tanpa timbal balik. Setiap rupiah pajak
                  yang disalurkan dialokasikan untuk membiayai fasilitas umum
                  dan melindungi kedaulatan bangsa kita bersama.
                </p>
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-2">
                  <span className="text-xs text-slate-400 font-mono">
                    Update: APBN Kita 2026
                  </span>
                  <button
                    id="hero-quick-read"
                    onClick={() => setActiveTab("manfaat")}
                    className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group/btn"
                  >
                    <span>Pelajari Alokasi</span>
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
