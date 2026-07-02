import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Award, Shield, CheckCircle, Scale, Building2, Landmark, HelpCircle } from 'lucide-react';

export default function ApaItuPajak() {
  const [activeSubTab, setActiveSubTab] = useState<'ciri' | 'pusat-daerah' | 'sifat'>('ciri');

  const ciriPajak = [
    {
      title: 'Kontribusi Wajib',
      desc: 'Merupakan iuran resmi yang wajib disetorkan oleh individu maupun entitas bisnis yang telah memenuhi kriteria sebagai Wajib Pajak.',
      icon: Shield,
      color: 'from-amber-500/10 to-amber-500/20 text-amber-500 border-amber-500/20'
    },
    {
      title: 'Bersifat Memaksa',
      desc: 'Memiliki kekuatan hukum legal formal. Jika kriteria terpenuhi namun sengaja melalaikan kewajiban, terdapat sanksi administratif hingga pidana sesuai undang-undang.',
      icon: Scale,
      color: 'from-red-500/10 to-red-500/20 text-red-500 border-red-500/20'
    },
    {
      title: 'Berdasarkan Undang-Undang',
      desc: 'Dipungut bersandarkan aturan konstitusi Pasal 23A UUD 1945 serta diatur detail dalam berbagai UU Pajak demi menjamin kepastian hukum dan keadilan.',
      icon: FileText,
      color: 'from-sky-500/10 to-sky-500/20 text-sky-500 border-sky-500/20'
    },
    {
      title: 'Tanpa Kontraprestasi Langsung',
      desc: 'Timbal balik (reward) tidak diterima seketika atau secara personal, melainkan dirasakan secara kolektif lewat fasilitas publik dan kesejahteraan umum.',
      icon: Award,
      color: 'from-teal-500/10 to-teal-500/20 text-teal-500 border-teal-500/20'
    }
  ];

  const pusatVsDaerah = {
    pusat: {
      title: 'Pajak Pusat',
      subtitle: 'Dikelola oleh Direktorat Jenderal Pajak (DJP) di bawah Kemenkeu untuk APBN.',
      items: [
        { name: 'PPh (Pajak Penghasilan)', desc: 'Pajak atas penghasilan yang diperoleh pribadi atau badan.' },
        { name: 'PPN (Pajak Pertambahan Nilai)', desc: 'Pajak atas konsumsi barang/jasa kena pajak di dalam negeri (tarif umum 11%).' },
        { name: 'PPnBM', desc: 'Pajak penjualan atas barang mewah seperti supercar, kapal pesiar.' },
        { name: 'Bea Meterai', desc: 'Pajak atas dokumen perdata, perjanjian, atau dokumen hukum bernominal.' }
      ]
    },
    daerah: {
      title: 'Pajak Daerah',
      subtitle: 'Dikelola oleh Pemerintah Daerah (Bapenda) Provinsi maupun Kabupaten/Kota untuk APBD.',
      items: [
        { name: 'PKB (Pajak Kendaraan Bermotor)', desc: 'Pajak tahunan atas kepemilikan kendaraan roda 2 maupun roda 4.' },
        { name: 'PBB-P2', desc: 'Pajak Bumi dan Bangunan sektor Perdesaan dan Perkotaan.' },
        { name: 'Pajak Barang & Jasa Tertentu', desc: 'Pajak atas makanan/minuman restoran, hotel, hiburan, dan parkir.' },
        { name: 'BPHTB', desc: 'Bea Perolehan Hak atas Tanah dan Bangunan saat transaksi jual-beli properti.' }
      ]
    }
  };

  const sifatPajak = [
    {
      type: 'Berdasarkan Sifat',
      categories: [
        { name: 'Pajak Subjektif', desc: 'Pajak yang berpangkal pada keadaan wajib pajak sendiri (contoh: PPh, memperhatikan status pernikahan & jumlah tanggungan melalui PTKP).' },
        { name: 'Pajak Objektif', desc: 'Pajak yang berpangkal pada objeknya tanpa melihat kondisi pribadi wajib pajak (contoh: PPN, semua konsumen membayar tarif yang sama saat belanja).' }
      ]
    },
    {
      type: 'Berdasarkan Cara Pembebanan',
      categories: [
        { name: 'Pajak Langsung', desc: 'Harus dipikul sendiri oleh wajib pajak, tidak bisa dialihkan ke orang lain (contoh: PPh tahunan Anda).' },
        { name: 'Pajak Tidak Langsung', desc: 'Beban pajaknya dapat dilimpahkan atau digeser ke pihak lain (contoh: PPN restauran yang dititipkan melalui struk kasir ke konsumen akhir).' }
      ]
    }
  ];

  return (
    <section id="apa-itu-pajak-section" className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Definition Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-amber-600 dark:text-amber-500 font-bold text-sm uppercase tracking-wider block">Definisi Resmi</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">Apa itu Pajak sebenarnya?</h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Menurut <strong className="text-slate-900 dark:text-white">UU No. 28 Tahun 2007</strong> tentang Ketentuan Umum dan Tata Cara Perpajakan (KUP):
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 font-medium text-base sm:text-lg bg-slate-50/80 dark:bg-slate-950 p-4 rounded-r-xl">
                "Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan Undang-Undang, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat."
              </blockquote>
            </div>
            
            <div className="lg:col-span-4 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <HelpCircle size={18} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">Analogi Sederhana</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Gotong Royong Nasional</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bayangkan iuran RT untuk kebersihan dan ronda, namun dalam skala raksasa seluruh Nusantara. Kita urunan uang bersama untuk membeli keamanan, kesehatan, jalan, dan kemakmuran bersama yang tidak bisa kita beli sendirian.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Dynamic Tabs Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">Karakteristik & Pengelompokan Pajak</h3>
            <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base">
              Pajak memiliki ciri khas khusus dan diklasifikasikan ke dalam beberapa kelompok agar tata laksana administrasinya berjalan adil dan rapi.
            </p>
          </div>

          {/* Tab Selection Bar */}
          <div className="flex justify-center">
            <div className="bg-slate-200/80 dark:bg-slate-900 p-1 rounded-2xl inline-flex gap-1 border border-slate-300/30 dark:border-slate-800">
              <button
                id="sub-tab-ciri"
                onClick={() => setActiveSubTab('ciri')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSubTab === 'ciri'
                    ? 'bg-slate-950 dark:bg-slate-800 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
                }`}
              >
                Ciri Khas Pajak
              </button>
              <button
                id="sub-tab-pusat-daerah"
                onClick={() => setActiveSubTab('pusat-daerah')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSubTab === 'pusat-daerah'
                    ? 'bg-slate-950 dark:bg-slate-800 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
                }`}
              >
                Pusat vs Daerah
              </button>
              <button
                id="sub-tab-sifat"
                onClick={() => setActiveSubTab('sifat')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSubTab === 'sifat'
                    ? 'bg-slate-950 dark:bg-slate-800 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
                }`}
              >
                Penggolongan & Sifat
              </button>
            </div>
          </div>

          {/* Tab Content Panels with Framer Motion */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeSubTab === 'ciri' && (
                <motion.div
                  key="tab-ciri"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {ciriPajak.map((ciri, i) => {
                    const Icon = ciri.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 shadow-md shadow-slate-100 dark:shadow-none hover:shadow-lg hover:border-amber-500/30 dark:hover:border-amber-500/50 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${ciri.color} border mb-5`}>
                          <Icon size={22} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-950 dark:text-white mb-2">{ciri.title}</h4>
                        <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">{ciri.desc}</p>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {activeSubTab === 'pusat-daerah' && (
                <motion.div
                  key="tab-pusat-daerah"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {/* Pusat */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 sm:p-8 shadow-md dark:shadow-none">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 p-3 rounded-xl">
                        <Landmark size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-950 dark:text-white">{pusatVsDaerah.pusat.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{pusatVsDaerah.pusat.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-4 mt-6">
                      {pusatVsDaerah.pusat.items.map((item, idx) => (
                        <div key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                          <span className="font-bold text-sm text-amber-700 dark:text-amber-400 block">{item.name}</span>
                          <span className="text-slate-600 dark:text-slate-350 text-sm mt-0.5 block leading-relaxed">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Daerah */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 sm:p-8 shadow-md dark:shadow-none">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 p-3 rounded-xl">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-950 dark:text-white">{pusatVsDaerah.daerah.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{pusatVsDaerah.daerah.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-4 mt-6">
                      {pusatVsDaerah.daerah.items.map((item, idx) => (
                        <div key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                          <span className="font-bold text-sm text-sky-700 dark:text-sky-400 block">{item.name}</span>
                          <span className="text-slate-600 dark:text-slate-350 text-sm mt-0.5 block leading-relaxed">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSubTab === 'sifat' && (
                <motion.div
                  key="tab-sifat"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {sifatPajak.map((group, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-2xl p-6 sm:p-8 shadow-md dark:shadow-none flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-slate-950 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">
                          {group.type}
                        </h4>
                        <div className="space-y-6">
                          {group.categories.map((cat, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="flex-shrink-0 mt-1">
                                <CheckCircle size={18} className="text-teal-600 dark:text-teal-400" />
                              </div>
                              <div>
                                <h5 className="font-bold text-sm text-slate-900 dark:text-white">{cat.name}</h5>
                                <p className="text-slate-600 dark:text-slate-350 text-sm mt-1 leading-relaxed">{cat.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
