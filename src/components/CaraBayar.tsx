import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PAYMENT_STEPS } from "../data/taxData";
import {
  UserCheck,
  QrCode,
  CreditCard,
  CheckSquare,
  Sparkles,
  Check,
  ChevronRight,
  BookmarkCheck,
  ExternalLink,
} from "lucide-react";

export default function CaraBayar() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleToggleComplete = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const currentStepData =
    PAYMENT_STEPS.find((s) => s.step === activeStep) || PAYMENT_STEPS[0];

  const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck size={size} />;
      case "QrCode":
        return <QrCode size={size} />;
      case "CreditCard":
        return <CreditCard size={size} />;
      case "CheckSquare":
        return <CheckSquare size={size} />;
      default:
        return <UserCheck size={size} />;
    }
  };

  const getStepProgress = () => {
    return Math.round((completedSteps.length / PAYMENT_STEPS.length) * 100);
  };

  return (
    <section
      id="cara-bayar-section"
      className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Alur Langkah Pembayaran Pajak
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Membayar pajak kini 100% online, aman, dan mudah dilakukan dari mana
            saja. Ikuti 4 tahapan wajib dari registrasi hingga pelaporan tahunan
            di bawah ini.
          </p>
        </div>

        {/* Gamified Progress Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-md dark:shadow-none mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <BookmarkCheck size={20} className="text-amber-500" />
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Pantau Kemajuan Simulasi Anda
              </h4>
            </div>
            <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 font-mono">
              {completedSteps.length} dari {PAYMENT_STEPS.length} Langkah
              Selesai ({getStepProgress()}%)
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-3.5 overflow-hidden border border-slate-200/50 dark:border-slate-850">
            <motion.div
              className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${getStepProgress()}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-4 text-center text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium mt-3">
            <span>1. Daftar NPWP</span>
            <span>2. ID Billing</span>
            <span>3. Transfer</span>
            <span>4. Lapor SPT</span>
          </div>
        </div>

        {/* Stepper Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Step Indicators */}
          <div className="lg:col-span-5 space-y-4">
            {PAYMENT_STEPS.map((stepItem) => {
              const isActive = stepItem.step === activeStep;
              const isCompleted = completedSteps.includes(stepItem.step);
              return (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(stepItem.step)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-white dark:bg-slate-900 border-slate-950 dark:border-yellow-400/50 shadow-md dark:shadow-none"
                      : "bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Indicator */}
                    <div
                      id={`step-indicator-${stepItem.step}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleComplete(stepItem.step);
                      }}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs transition-all ${
                        isCompleted
                          ? "bg-teal-500 border-teal-500 text-white"
                          : isActive
                            ? "bg-slate-950 dark:bg-slate-800 border-slate-950 dark:border-slate-700 text-white"
                            : "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {isCompleted ? <Check size={14} /> : stepItem.step}
                    </div>

                    <div className="text-left">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-mono block">
                        Langkah {stepItem.step}
                      </span>
                      <span
                        className={`font-bold text-sm sm:text-base block ${isActive ? "text-slate-950 dark:text-white font-extrabold" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        {stepItem.title}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Mobile helper chevron */}
                    <ChevronRight
                      size={16}
                      className={`text-slate-400 transition-transform ${isActive ? "translate-x-1" : ""}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-none flex flex-col justify-between h-full relative"
              >
                {/* Visual Step Floating Badge */}
                <div className="absolute -top-3 right-6 bg-slate-950 dark:bg-slate-800 text-white text-xs font-mono px-3 py-1.5 rounded-full border border-slate-800 dark:border-slate-700 shadow">
                  Tahap {currentStepData.step} / 4
                </div>

                <div className="space-y-6">
                  {/* Step Header */}
                  <div className="pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <div className="bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 p-3 rounded-xl border border-amber-200/40 dark:border-amber-500/20">
                      {getIcon(currentStepData.iconName, 22)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-500 block uppercase tracking-wider">
                        {currentStepData.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mt-0.5">
                        {currentStepData.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Text Summary */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentStepData.description}
                  </p>

                  {/* Document Guidelines Checklist */}
                  <div className="space-y-3 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-850">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Petunjuk Pelaksanaan & Dokumen:
                    </span>
                    <ul className="space-y-3">
                      {currentStepData.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                        >
                          <Check
                            className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions inside Detail Card */}
                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Mark completed button */}
                  <button
                    id={`btn-complete-step-${currentStepData.step}`}
                    onClick={() => handleToggleComplete(currentStepData.step)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all w-full sm:w-auto ${
                      completedSteps.includes(currentStepData.step)
                        ? "bg-teal-500 hover:bg-teal-600 text-white shadow-sm"
                        : "bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white"
                    }`}
                  >
                    <CheckSquare size={16} />
                    <span>
                      {completedSteps.includes(currentStepData.step)
                        ? "Selesai Dilakukan ✓"
                        : "Tandai Selesai Langkah Ini"}
                    </span>
                  </button>

                  {/* Link action based on step */}
                  <a
                    href={"https://coretaxdjp.pajak.go.id/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 flex items-center gap-1 group/link"
                  >
                    <span>Akses CORETAX</span>
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
