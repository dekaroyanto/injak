import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data/taxData';
import { Award, RefreshCw, HelpCircle, Check, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function KuisPajak() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleStartQuiz = () => {
    setIsPlaying(true);
    setCurrentIdx(0);
    setSelectedAns(null);
    setScore(0);
    setShowExplanation(false);
  };

  const handleSelectAnswer = (optIdx: number) => {
    if (selectedAns !== null) return; // Prevent double clicks
    setSelectedAns(optIdx);
    setShowExplanation(true);
    if (optIdx === QUIZ_QUESTIONS[currentIdx].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAns(null);
    setShowExplanation(false);
    setCurrentIdx(currentIdx + 1);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const isFinished = currentIdx >= QUIZ_QUESTIONS.length;

  const getCelebrationMessage = () => {
    const pct = (score / QUIZ_QUESTIONS.length) * 100;
    if (pct === 100) return { title: 'Pakar Pajak Sejati! 🌟', desc: 'Luar biasa! Anda memahami seluruh regulasi perpajakan dasar dan siap menjadi duta sadar pajak.' };
    if (pct >= 80) return { title: 'Wajib Pajak Bijak! 🎓', desc: 'Hebat! Anda memiliki pemahaman yang sangat kuat mengenai manfaat dan regulasi pajak Indonesia.' };
    if (pct >= 50) return { title: 'Cukup Paham! 👍', desc: 'Bagus! Anda memahami garis besar perpajakan, namun ada beberapa rincian teknis yang perlu diperdalam.' };
    return { title: 'Butuh Belajar Lagi! 📖', desc: 'Jangan menyerah! Memahami pajak adalah langkah awal menjadi warga negara yang berkontribusi aktif.' };
  };

  const celeb = getCelebrationMessage();

  return (
    <section id="kuis-pajak-section" className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-[550px] flex items-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            /* Quiz Start View */
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="mx-auto bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-yellow-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center">
                <Award size={32} />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-yellow-400 font-bold font-mono">Game Edukasi</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Kuis Sadar Pajak INJAK</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
                  Uji pemahaman Anda mengenai wajib pajak, manfaat pembayaran, dan langkah administrasi pajak di Indonesia melalui 5 pertanyaan interaktif.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm text-left space-y-2 max-w-md mx-auto">
                <div className="flex gap-2 items-center">
                  <Check size={14} className="text-teal-600 dark:text-teal-400" />
                  <span>5 Pertanyaan pilihan ganda</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={14} className="text-teal-600 dark:text-teal-400" />
                  <span>Penjelasan detail langsung setiap soal selesai dijawab</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={14} className="text-teal-600 dark:text-teal-400" />
                  <span>Skor akhir dan predikat sadar pajak</span>
                </div>
              </div>

              <button
                id="btn-start-quiz"
                onClick={handleStartQuiz}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-yellow-500/20 hover:from-amber-600 hover:to-yellow-600 transition-all cursor-pointer"
              >
                <span>Mulai Kuis</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ) : isFinished ? (
            /* Quiz Score Summary View */
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="mx-auto w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-amber-500 flex items-center justify-center font-mono font-black text-3xl text-amber-600 dark:text-yellow-400">
                {score} / 5
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold font-mono">Skor Akhir Anda</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">{celeb.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  {celeb.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  id="btn-restart-quiz"
                  onClick={handleStartQuiz}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-yellow-500/10 cursor-pointer"
                >
                  <RefreshCw size={16} />
                  <span>Ulangi Kuis</span>
                </button>
                <button
                  id="btn-back-home"
                  onClick={() => setIsPlaying(false)}
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white font-medium px-6 py-3 rounded-xl transition-all"
                >
                  <span>Kembali</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Active Question View */
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-amber-600 dark:text-yellow-400">
                  <HelpCircle size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">Pertanyaan {currentIdx + 1} dari 5</span>
                </div>
                <span className="text-xs bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-400">
                  Benar: {score}
                </span>
              </div>

              {/* Progress Bar inside quiz */}
              <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-amber-500 dark:bg-yellow-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / 5) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h4 className="text-lg sm:text-xl font-bold leading-normal text-slate-950 dark:text-white">
                {currentQuestion.question}
              </h4>

              {/* Options Stack */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedAns === optIdx;
                  const isCorrectAnswer = optIdx === currentQuestion.correctAnswerIndex;
                  
                  let optionStyle = 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300';
                  let iconElement = null;

                  if (selectedAns !== null) {
                    if (isCorrectAnswer) {
                      optionStyle = 'bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-semibold';
                      iconElement = <Check size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />;
                    } else if (isSelected) {
                      optionStyle = 'bg-red-500/10 dark:bg-red-500/15 border border-red-500/40 text-red-600 dark:text-red-400 font-semibold';
                      iconElement = <X size={16} className="text-red-600 dark:text-red-400 flex-shrink-0" />;
                    } else {
                      optionStyle = 'bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-900/40 text-slate-400 dark:text-slate-600 opacity-60';
                    }
                  }

                  return (
                    <button
                      id={`quiz-option-${optIdx}`}
                      key={optIdx}
                      disabled={selectedAns !== null}
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-4 transition-all text-sm sm:text-base ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold flex items-center justify-center">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {iconElement}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Panel */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 mt-4 overflow-hidden"
                  >
                    <div className="flex gap-2 items-center text-amber-600 dark:text-amber-400 mb-2">
                      <BookOpen size={16} />
                      <span className="text-xs uppercase font-mono font-bold tracking-wider">Pembahasan / Penjelasan</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {currentQuestion.explanation}
                    </p>

                    <div className="flex justify-end pt-4">
                      <button
                        id="quiz-btn-next"
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-all cursor-pointer"
                      >
                        <span>{currentIdx < 4 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
