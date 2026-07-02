import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ApaItuPajak from './components/ApaItuPajak';
import ManfaatPajak from './components/ManfaatPajak';
import WajibPajak from './components/WajibPajak';
import CaraBayar from './components/CaraBayar';
import KuisPajak from './components/KuisPajak';
import Footer from './components/Footer';
import { FileText, Gift, Users, CreditCard, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('beranda');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if theme exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleQuickTabRedirect = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="injak-app" className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between font-sans selection:bg-yellow-400 selection:text-slate-950 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Render Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'beranda' && (
            <motion.div
              key="beranda-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Welcome Hero */}
              <Hero setActiveTab={setActiveTab} />

              {/* Grid of Interactive Quick Info Sections */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                  <span className="text-amber-600 dark:text-amber-500 font-bold text-xs uppercase tracking-widest block">Menu Eksplorasi</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                    Jelajahi Portal Perpajakan
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    Klik pada kartu kategori di bawah ini untuk langsung menyelami materi edukasi terperinci.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Card 1: Apa itu Pajak */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 p-3 rounded-xl inline-block border border-amber-200/30 dark:border-amber-500/20">
                        <FileText size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 dark:text-white">1. Apa itu Pajak?</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Pahami pengertian formal pajak menurut undang-undang dasar, sifat pemaksaan legal, dan bedanya dengan pungutan retribusi lainnya.
                      </p>
                    </div>
                    <button
                      id="card-redirect-definisi"
                      onClick={() => handleQuickTabRedirect('definisi')}
                      className="text-xs font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-6 cursor-pointer"
                    >
                      <span>Pelajari Definisi</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Card 2: Manfaat Pajak */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 p-3 rounded-xl inline-block border border-sky-200/30 dark:border-sky-500/20">
                        <Gift size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 dark:text-white">2. Manfaat Bayar Pajak</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Temukan bagaimana setoran pajak Anda dialokasikan untuk membiayai MRT, beasiswa LPDP, subsidi listrik, hingga jaminan kesehatan BPJS nasional.
                      </p>
                    </div>
                    <button
                      id="card-redirect-manfaat"
                      onClick={() => handleQuickTabRedirect('manfaat')}
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-6 cursor-pointer"
                    >
                      <span>Lihat Alokasi APBN</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Card 3: Siapa Saja Wajib Pajak */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 p-3 rounded-xl inline-block border border-teal-200/30 dark:border-teal-500/20">
                        <Users size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 dark:text-white">3. Siapa Saja Wajib Pajak</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Cari tahu kriteria subjek pajak orang pribadi maupun badan, batas PTKP, serta hitung estimasi pajak penghasilan Anda lewat kalkulator PPh 21.
                      </p>
                    </div>
                    <button
                      id="card-redirect-subjek"
                      onClick={() => handleQuickTabRedirect('subjek')}
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-6 cursor-pointer"
                    >
                      <span>Coba Simulasi Pajak</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Card 4: Cara Bayar Pajak */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 p-3 rounded-xl inline-block border border-violet-200/30 dark:border-violet-500/20">
                        <CreditCard size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 dark:text-white">4. Alur Cara Bayar Pajak</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Simulasi panduan interaktif step-by-step dari membuat NPWP online, mengunduh ID Billing e-SSE, transfer pembayaran, hingga lapor SPT tahunan.
                      </p>
                    </div>
                    <button
                      id="card-redirect-cara-bayar"
                      onClick={() => handleQuickTabRedirect('cara-bayar')}
                      className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-6 cursor-pointer"
                    >
                      <span>Ikuti Alur Panduan</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Card 5: Kuis Edukasi */}
                  <div className="bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group text-white">
                    <div className="space-y-4">
                      <div className="bg-yellow-400/10 text-yellow-400 p-3 rounded-xl inline-block border border-yellow-400/20">
                        <Award size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-white">5. Asah Pengetahuan</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Uji wawasan finansial Anda seputar hak dan kewajiban wajib pajak dalam kuis edukatif singkat ini dan tunjukkan kecerdasan finansial Anda.
                      </p>
                    </div>
                    <button
                      id="card-redirect-kuis"
                      onClick={() => handleQuickTabRedirect('kuis')}
                      className="text-xs font-bold text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-6 cursor-pointer"
                    >
                      <span>Mulai Kuis Sekarang</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Card 6: Edukasi Gotong Royong */}
                  <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 shadow-md flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="space-y-4">
                      <div className="bg-slate-900 border border-slate-800 text-yellow-500 p-3 rounded-xl inline-block">
                        <ShieldCheck size={20} />
                      </div>
                      <h3 className="font-bold text-lg">Mengapa Sadar Pajak Penting?</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Kesadaran pajak tinggi meminimalkan ketergantungan utang luar negeri, menstabilkan pertumbuhan fiskal, dan merealisasikan kedaulatan kemandirian bangsa seutuhnya.
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider mt-4 block">
                      UP-TO-DATE INFO 2026
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'definisi' && (
            <motion.div
              key="definisi-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ApaItuPajak />
            </motion.div>
          )}

          {activeTab === 'manfaat' && (
            <motion.div
              key="manfaat-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ManfaatPajak />
            </motion.div>
          )}

          {activeTab === 'subjek' && (
            <motion.div
              key="subjek-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <WajibPajak />
            </motion.div>
          )}

          {activeTab === 'cara-bayar' && (
            <motion.div
              key="cara-bayar-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CaraBayar />
            </motion.div>
          )}

          {activeTab === 'kuis' && (
            <motion.div
              key="kuis-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <KuisPajak />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding Links */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
