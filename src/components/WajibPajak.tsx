import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TAX_SUBJECTS } from "../data/taxData";
import {
  Users,
  User,
  Building,
  Calculator,
  DollarSign,
  Percent,
  AlertCircle,
  Info,
  Sparkles,
  Check,
  HelpCircle,
} from "lucide-react";

export default function WajibPajak() {
  const [activeTab, setActiveTab] = useState<"info" | "kalkulator">("info");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    TAX_SUBJECTS[0].id,
  );

  // Calculator State
  const [gajiBulanan, setGajiBulanan] = useState<number>(6500000); // Default 6.5jt
  const [statusPtkp, setStatusPtkp] = useState<string>("TK0"); // Default Lajang
  const [punyaNpwp, setPunyaNpwp] = useState<boolean>(true);

  // Tax calculation logic
  const calculateTax = () => {
    // 1. Gaji kotor setahun
    const brutoSetahun = gajiBulanan * 12;

    // 2. Biaya Jabatan (5% dari bruto, maksimal 6jt setahun)
    const biayaJabatan = Math.min(brutoSetahun * 0.05, 6000000);

    // 3. Netto setahun
    const nettoSetahun = brutoSetahun - biayaJabatan;

    // 4. PTKP setahun berdasarkan status
    let ptkp = 54000000; // TK/0 default
    switch (statusPtkp) {
      case "TK0":
        ptkp = 54000000;
        break; // Lajang
      case "K0":
        ptkp = 58500000;
        break; // Kawin, 0 tanggungan
      case "K1":
        ptkp = 63000000;
        break; // Kawin, 1 tanggungan
      case "K2":
        ptkp = 67500000;
        break; // Kawin, 2 tanggungan
      case "K3":
        ptkp = 72000000;
        break; // Kawin, 3 tanggungan
    }

    // 5. PKP (Penghasilan Kena Pajak)
    let pkp = nettoSetahun - ptkp;
    if (pkp < 0) pkp = 0;

    // Round to nearest thousand for taxation standards (optional, but keep precise)
    pkp = Math.floor(pkp / 1000) * 1000;

    // 6. Progressive tax bracket calculation (UU HPP 2022)
    let estimasiPajakSetahunNormal = 0;
    let sisaPkp = pkp;

    // Bracket 1: 5% (s/d 60jt)
    const b1Limit = 60000000;
    if (sisaPkp > 0) {
      const b1Taxable = Math.min(sisaPkp, b1Limit);
      estimasiPajakSetahunNormal += b1Taxable * 0.05;
      sisaPkp -= b1Taxable;
    }

    // Bracket 2: 15% (> 60jt s/d 250jt)
    const b2Limit = 190000000; // 250jt - 60jt
    if (sisaPkp > 0) {
      const b2Taxable = Math.min(sisaPkp, b2Limit);
      estimasiPajakSetahunNormal += b2Taxable * 0.15;
      sisaPkp -= b2Taxable;
    }

    // Bracket 3: 25% (> 250jt s/d 500jt)
    const b3Limit = 250000000; // 500jt - 250jt
    if (sisaPkp > 0) {
      const b3Taxable = Math.min(sisaPkp, b3Limit);
      estimasiPajakSetahunNormal += b3Taxable * 0.25;
      sisaPkp -= b3Taxable;
    }

    // Bracket 4: 30% (> 500jt s/d 5M)
    const b4Limit = 4500000000; // 5M - 500jt
    if (sisaPkp > 0) {
      const b4Taxable = Math.min(sisaPkp, b4Limit);
      estimasiPajakSetahunNormal += b4Taxable * 0.3;
      sisaPkp -= b4Taxable;
    }

    // Bracket 5: 35% (> 5M)
    if (sisaPkp > 0) {
      estimasiPajakSetahunNormal += sisaPkp * 0.35;
    }

    // 7. Penalti NPWP (jika tidak punya NPWP, kena tarif 120%)
    const finalPajakSetahun = punyaNpwp
      ? estimasiPajakSetahunNormal
      : estimasiPajakSetahunNormal * 1.2;
    const finalPajakSebulan = finalPajakSetahun / 12;

    return {
      brutoSetahun,
      biayaJabatan,
      nettoSetahun,
      ptkp,
      pkp,
      finalPajakSetahun,
      finalPajakSebulan,
      penaltiNpwpMultiplier: punyaNpwp ? 1 : 1.2,
    };
  };

  const results = calculateTax();

  // Helper format rupiah
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const selectedSubject =
    TAX_SUBJECTS.find((s) => s.id === selectedSubjectId) || TAX_SUBJECTS[0];

  return (
    <section
      id="wajib-pajak-section"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-center mb-12">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl inline-flex gap-1 border border-slate-200 dark:border-slate-800">
            <button
              id="wp-tab-info"
              onClick={() => setActiveTab('info')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'info'
                  ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Users size={16} />
              <span>Subjek Wajib Pajak</span>
            </button>
            <button
              id="wp-tab-kalkulator"
              onClick={() => setActiveTab('kalkulator')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'kalkulator'
                  ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Calculator size={16} className="text-yellow-500" />
              <span>Simulasi Kalkulator PPh 21</span>
            </button>
          </div>
        </div> */}

        <AnimatePresence mode="wait">
          {activeTab === "info" ? (
            <motion.div
              key="wp-info"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Selector Panel */}
              <div className="lg:col-span-4 space-y-4">
                <div className="space-y-3">
                  <span className="text-amber-600 dark:text-amber-500 font-bold text-xs uppercase tracking-wider block">
                    Klasifikasi Hukum
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-none">
                    Siapa Saja yang Wajib Bayar Pajak?
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Negara mengklasifikasikan kontributor pajak ke dalam
                    beberapa kategori subjek pajak yang terdefinisi hukum secara
                    jelas.
                  </p>
                </div>

                <div className="space-y-2 mt-6">
                  {TAX_SUBJECTS.map((sub) => (
                    <button
                      id={`sub-select-${sub.id}`}
                      key={sub.id}
                      onClick={() => setSelectedSubjectId(sub.id)}
                      className={`w-full text-left p-4 rounded-xl border flex items-center gap-3 transition-all ${
                        selectedSubjectId === sub.id
                          ? "bg-slate-50 dark:bg-slate-900 border-slate-900 dark:border-yellow-400/40 shadow-sm"
                          : "bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-800"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${selectedSubjectId === sub.id ? "bg-slate-900 dark:bg-slate-800 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"}`}
                      >
                        {sub.id === "s1" ? (
                          <User size={18} />
                        ) : (
                          <Building size={18} />
                        )}
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-slate-400 font-medium block">
                          {sub.category}
                        </span>
                        <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white block">
                          {sub.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Detail Panel */}
              <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-500 tracking-wider bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded">
                      {selectedSubject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mt-3">
                      {selectedSubject.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                      {selectedSubject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <span>Kriteria & Contoh Wajib Pajak</span>
                    </h4>
                    <ul className="space-y-3">
                      {selectedSubject.criteria.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-950 dark:text-slate-100 font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-850 pt-5 mt-4 flex gap-3 bg-white/50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200/50 dark:border-slate-850">
                    <div className="flex-shrink-0 text-amber-600 mt-0.5">
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                        Pengecualian Khusus
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {selectedSubject.exemptions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="wp-kalkulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Input Fields Pane */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Calculator className="text-amber-500" size={20} />
                    <h3 className="font-bold text-lg text-slate-950 dark:text-white">
                      Atur Detail Pendapatan Anda
                    </h3>
                  </div>

                  {/* Monthly Income Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between items-center">
                      <span>Gaji Bersih Bulanan (Take Home Pay)</span>
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-500">
                        {formatRupiah(gajiBulanan)}
                      </span>
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <span className="text-sm font-bold">Rp</span>
                      </div>
                      <input
                        id="calc-salary-input"
                        type="number"
                        min="1000000"
                        max="200000000"
                        step="100000"
                        value={gajiBulanan}
                        onChange={(e) => setGajiBulanan(Number(e.target.value))}
                        className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-950 dark:focus:ring-yellow-400 focus:border-slate-950 dark:focus:border-yellow-400 text-sm font-medium"
                        placeholder="Masukkan nominal gaji bulanan"
                      />
                    </div>
                    {/* Slider input for quicker demo */}
                    <input
                      id="calc-salary-slider"
                      type="range"
                      min="2000000"
                      max="30000000"
                      step="250000"
                      value={gajiBulanan}
                      onChange={(e) => setGajiBulanan(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-900 dark:accent-amber-500 mt-2"
                    />
                  </div>

                  {/* Status PTKP dropdown */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between items-center">
                      <span>Status Hubungan (PTKP)</span>
                      <span className="text-xs bg-slate-200 dark:bg-slate-850 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-mono font-bold">
                        {statusPtkp}
                      </span>
                    </label>
                    <select
                      id="calc-ptkp-select"
                      value={statusPtkp}
                      onChange={(e) => setStatusPtkp(e.target.value)}
                      className="block w-full py-3 px-3.5 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-950 dark:focus:ring-yellow-400 focus:border-slate-950 dark:focus:border-yellow-400 text-sm font-medium bg-white"
                    >
                      <option value="TK0" className="dark:bg-slate-950">
                        TK/0 - Belum Kawin, Tanpa Tanggungan (Batas PTKP: Rp
                        54jt/Thn)
                      </option>
                      <option value="K0" className="dark:bg-slate-950">
                        K/0 - Menikah, Tanpa Tanggungan (Batas PTKP: Rp
                        58,5jt/Thn)
                      </option>
                      <option value="K1" className="dark:bg-slate-950">
                        K/1 - Menikah, 1 Tanggungan Anak/Orang Tua (Batas PTKP:
                        Rp 63jt/Thn)
                      </option>
                      <option value="K2" className="dark:bg-slate-950">
                        K/2 - Menikah, 2 Tanggungan (Batas PTKP: Rp 67,5jt/Thn)
                      </option>
                      <option value="K3" className="dark:bg-slate-950">
                        K/3 - Menikah, 3 Tanggungan (Maksimum) (Batas PTKP: Rp
                        72jt/Thn)
                      </option>
                    </select>
                  </div>

                  {/* Have NPWP toggle button */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Kepemilikan NPWP
                    </label>
                    <div className="grid grid-cols-2 gap-3 bg-slate-200/60 dark:bg-slate-950/60 p-1.5 rounded-xl border border-slate-300/30 dark:border-slate-800">
                      <button
                        id="calc-npwp-yes"
                        onClick={() => setPunyaNpwp(true)}
                        className={`py-2 px-4 text-center text-xs font-semibold rounded-lg transition-all ${
                          punyaNpwp
                            ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        Memiliki NPWP
                      </button>
                      <button
                        id="calc-npwp-no"
                        onClick={() => setPunyaNpwp(false)}
                        className={`py-2 px-4 text-center text-xs font-semibold rounded-lg transition-all ${
                          !punyaNpwp
                            ? "bg-amber-600 text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        Tidak Punya NPWP
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info Disclaimer */}
                <div className="mt-8 p-3.5 bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-800 dark:text-yellow-400 rounded-xl leading-relaxed flex items-start gap-2">
                  <Info
                    size={16}
                    className="text-amber-600 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    <strong>Edukasi NPWP:</strong> Sesuai regulasi Dirjen Pajak,
                    Wajib Pajak yang tidak memiliki NPWP akan dikenakan{" "}
                    <strong>tarif 20% lebih tinggi</strong> dari tarif pajak
                    normal PPh 21 progresif.
                  </span>
                </div>
              </div>

              {/* Right Output Pane (Visual breakdown) */}
              <div className="lg:col-span-7 bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-6">
                  {/* Results Header Summary */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-sm font-semibold text-slate-400">
                      Estimasi Potongan PPh 21:
                    </span>
                    {results.pkp === 0 ? (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        Bebas Pajak (PTKP)
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        Wajib Pajak Aktif
                      </span>
                    )}
                  </div>

                  {/* Main Display Potongan Bulanan */}
                  <div className="text-center py-6 bg-slate-950 rounded-2xl border border-slate-800/80">
                    <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Setoran Pajak Bulanan Anda
                    </span>
                    <span className="block text-3xl sm:text-4xl font-extrabold font-mono text-yellow-400">
                      {formatRupiah(results.finalPajakSebulan)}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                      (Setara {formatRupiah(results.finalPajakSetahun)} / Tahun)
                    </span>
                  </div>

                  {/* Step-by-Step Calculation Formula Breakdown */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 font-mono">
                      Rincian Perhitungan Pajak (UU HPP):
                    </h4>

                    <div className="grid grid-cols-2 gap-y-2 text-xs border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        Penghasilan Bruto Setahun:
                      </span>
                      <span className="text-right font-medium font-mono text-white">
                        {formatRupiah(results.brutoSetahun)}
                      </span>

                      <span className="text-slate-400 flex items-center gap-1">
                        Biaya Jabatan (Maksimal 6jt/Thn):
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1 py-0.5 rounded font-mono">
                          5%
                        </span>
                      </span>
                      <span className="text-right font-medium font-mono text-red-400">
                        - {formatRupiah(results.biayaJabatan)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        Penghasilan Netto Setahun:
                      </span>
                      <span className="text-right font-medium font-mono text-white">
                        {formatRupiah(results.nettoSetahun)}
                      </span>

                      <span className="text-slate-400 flex items-center gap-1">
                        Batas PTKP Terpilih ({statusPtkp}):
                      </span>
                      <span className="text-right font-medium font-mono text-red-400">
                        - {formatRupiah(results.ptkp)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs">
                      <span className="text-slate-400 font-bold">
                        Penghasilan Kena Pajak (PKP):
                      </span>
                      <span className="text-right font-bold font-mono text-yellow-400">
                        {formatRupiah(results.pkp)}
                      </span>
                    </div>
                  </div>

                  {/* Progressive Tax bracket explanation list */}
                  {results.pkp > 0 && (
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2 mt-4">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider font-mono">
                        Rincian Tarif Progresif Berlaku:
                      </span>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Masa Tarif 5% (Gaji up to 60jt):
                          </span>
                          <span className="font-mono text-slate-300">
                            {formatRupiah(
                              Math.min(results.pkp, 60000000) * 0.05,
                            )}
                          </span>
                        </div>
                        {results.pkp > 60000000 && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">
                              Masa Tarif 15% (Sisa s/d 250jt):
                            </span>
                            <span className="font-mono text-slate-300">
                              {formatRupiah(
                                Math.min(results.pkp - 60000000, 190000000) *
                                  0.15,
                              )}
                            </span>
                          </div>
                        )}
                        {!punyaNpwp && (
                          <div className="flex justify-between text-yellow-500 font-semibold border-t border-slate-800 pt-1.5">
                            <span>Penalti Tanpa NPWP:</span>
                            <span className="font-mono">+20% Biaya</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
                  <p className="text-[10px] text-slate-500 leading-normal font-sans">
                    *Kalkulator ini merupakan simulasi sederhana PPh 21 berdasar
                    UU Harmonisasi Peraturan Perpajakan (HPP). Perhitungan riil
                    di instansi mungkin terdapat penyesuaian iuran pensiun, JHT,
                    BPJS Ketenagakerjaan, dll.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
