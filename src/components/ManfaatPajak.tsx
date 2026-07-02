import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TAX_BENEFITS } from "../data/taxData";
import {
  Milestone,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Percent,
  Award,
  Sparkles,
} from "lucide-react";

export default function ManfaatPajak() {
  const [selectedId, setSelectedId] = useState<string>(TAX_BENEFITS[0].id);

  const selectedBenefit =
    TAX_BENEFITS.find((b) => b.id === selectedId) || TAX_BENEFITS[0];

  const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case "Milestone":
        return <Milestone size={size} />;
      case "GraduationCap":
        return <GraduationCap size={size} />;
      case "HeartPulse":
        return <HeartPulse size={size} />;
      case "ShieldAlert":
        return <ShieldAlert size={size} />;
      case "ShieldCheck":
        return <ShieldCheck size={size} />;
      default:
        return <Milestone size={size} />;
    }
  };

  const getBgColor = (iconName: string) => {
    switch (iconName) {
      case "Milestone":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "GraduationCap":
        return "bg-sky-500/10 text-sky-500 border-sky-500/20";
      case "HeartPulse":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "ShieldAlert":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "ShieldCheck":
        return "bg-teal-500/10 text-teal-500 border-teal-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <section
      id="manfaat-pajak-section"
      className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-amber-600 dark:text-yellow-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>Transparansi Fiskal</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Ke Mana Uang Pajak Kita Mengalir?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Pembayaran pajak Anda adalah roda penggerak utama APBN (Anggaran
            Pendapatan & Belanja Negara). Mari jelajahi pos belanja publik utama
            di Indonesia yang dibiayai dari kontribusi Anda.
          </p>
        </div>

        {/* Interactive Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {TAX_BENEFITS.map((benefit) => {
              const isSelected = benefit.id === selectedId;
              return (
                <button
                  id={`benefit-btn-${benefit.id}`}
                  key={benefit.id}
                  onClick={() => setSelectedId(benefit.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? "bg-amber-500/5 dark:bg-slate-900 border-amber-500/50 dark:border-yellow-400/40 shadow-lg shadow-amber-500/5 dark:shadow-yellow-500/5"
                      : "bg-white dark:bg-slate-950 hover:bg-slate-100/60 dark:hover:bg-slate-900/40 border-slate-200/80 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl border flex-shrink-0 ${getBgColor(benefit.icon)}`}
                  >
                    {getIcon(benefit.icon, 20)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`font-bold text-sm sm:text-base ${isSelected ? "text-amber-600 dark:text-yellow-400" : "text-slate-800 dark:text-slate-200"}`}
                      >
                        {benefit.title}
                      </h4>
                      {isSelected && (
                        <span className="text-[10px] bg-amber-500/10 dark:bg-yellow-400/10 border border-amber-500/20 dark:border-yellow-400/20 text-amber-600 dark:text-yellow-400 px-1.5 py-0.5 rounded font-mono font-bold">
                          {benefit.percentage}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Presentation Panel (Animated content swap) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Accent Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-6">
                  {/* Presentation Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-150 dark:border-slate-850">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl border ${getBgColor(selectedBenefit.icon)}`}
                      >
                        {getIcon(selectedBenefit.icon, 24)}
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                          Kategori Utama
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                          {selectedBenefit.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
                      <div className="text-amber-600 dark:text-amber-400 font-black text-2xl font-mono leading-none">
                        {selectedBenefit.percentage}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight uppercase font-bold tracking-wider">
                        Porsi APBN
                        <br />
                        Rata-Rata
                      </div>
                    </div>
                  </div>

                  {/* Photo with Overlay Info */}
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-inner group">
                    <img
                      src={selectedBenefit.imageUrl}
                      alt={selectedBenefit.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/75 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-xs">
                      <span className="text-slate-300 font-medium">
                        Status Prioritas:
                      </span>
                      <span className="text-yellow-400 font-bold uppercase tracking-wider">
                        {selectedBenefit.stats}
                      </span>
                    </div> */}
                  </div>

                  {/* Educational Body Text */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-amber-600 dark:text-yellow-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Penjelasan Dampak</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {selectedBenefit.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>
                    Sumber: Nota Keuangan & RUU APBN Republik Indonesia
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      Transparan
                    </span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      Akuntabel
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
