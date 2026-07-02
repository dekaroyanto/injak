import { TaxBenefit, TaxSubject, PaymentStep, QuizQuestion } from "../types";

export const TAX_BENEFITS: TaxBenefit[] = [
  {
    id: "b1",
    title: "Pembangunan Infrastruktur",
    description:
      "Pajak mendanai jalan tol, jembatan, bandara, pelabuhan, dan transportasi publik seperti MRT, LRT, dan KRL yang mempermudah mobilitas masyarakat setiap hari.",
    icon: "Milestone",
    imageUrl:
      "https://images.unsplash.com/photo-1536099629323-44806c1ea264?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    percentage: "35%",
    stats: "Mendominasi porsi belanja APBN",
  },
  {
    id: "b2",
    title: "Subsidi & Layanan Pendidikan",
    description:
      "Program Kartu Indonesia Pintar (KIP), Bantuan Operasional Sekolah (BOS), hingga beasiswa bergengsi LPDP bersumber dari iuran pajak yang Anda bayarkan.",
    icon: "GraduationCap",
    imageUrl:
      "https://images.unsplash.com/photo-1600792174569-59e1e0be0619?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    percentage: "20%",
    stats: "Alokasi wajib konstitusi untuk masa depan",
  },
  {
    id: "b3",
    title: "Fasilitas & Jaminan Kesehatan",
    description:
      "Pajak mensubsidi BPJS Kesehatan (PBI untuk warga tidak mampu), mendanai alat kesehatan, pembangunan puskesmas, rumah sakit umum daerah, dan gaji tenaga medis.",
    icon: "HeartPulse",
    imageUrl:
      "https://images.unsplash.com/photo-1659718282969-04b841e139db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    percentage: "15%",
    stats: "Menyokong ketahanan medis nasional",
  },
  {
    id: "b4",
    title: "Subsidi Energi & Pangan",
    description:
      "Subsidi bahan bakar minyak (BBM), LPG 3 kg, listrik rumah tangga menengah ke bawah, serta subsidi pupuk pertanian dibiayai demi menjaga stabilitas harga.",
    icon: "ShieldAlert",
    imageUrl:
      "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    percentage: "12%",
    stats: "Menjaga daya beli masyarakat rentan",
  },
  {
    id: "b5",
    title: "Keamanan, Hankam & Layanan Publik",
    description:
      "Operasional Polri, TNI, penegakan hukum, penanggulangan bencana oleh BNPB, serta operasional kantor administrasi publik (kecamatan, dukcapil) didanai oleh pajak.",
    icon: "ShieldCheck",
    imageUrl:
      "https://images.unsplash.com/photo-1694684069784-cbe546fd2a8c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    percentage: "18%",
    stats: "Menjaga kedaulatan & kenyamanan negara",
  },
];

export const TAX_SUBJECTS: TaxSubject[] = [
  {
    id: "s1",
    category: "Wajib Pajak Orang Pribadi (WPOP)",
    title: "Masyarakat Berpenghasilan",
    description:
      "Setiap individu yang bertempat tinggal di Indonesia, memperoleh penghasilan di Indonesia, atau berada di Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan.",
    criteria: [
      "Memiliki Penghasilan Diatas PTKP (Penghasilan Tidak Kena Pajak) yaitu Rp 54 juta setahun atau Rp 4,5 juta sebulan untuk status lajang.",
      "Karyawan swasta, PNS, TNI, POLRI, BUMN, maupun pekerja lepas (freelancer).",
      "Pengusaha perseorangan (UMKM maupun skala besar).",
    ],
    exemptions:
      "Individu dengan penghasilan di bawah Rp 4,5 juta per bulan TIDAK wajib membayar Pajak Penghasilan (PPh).",
  },
  {
    id: "s2",
    category: "Wajib Pajak Badan (WP Badan)",
    title: "Perusahaan & Organisasi",
    description:
      "Sekumpulan orang dan/atau modal yang merupakan kesatuan baik yang melakukan usaha maupun yang tidak melakukan usaha.",
    criteria: [
      "Perseroan Terbatas (PT), Persekutuan Komanditer (CV), Badan Usaha Milik Negara/Daerah (BUMN/BUMD).",
      "Yayasan, koperasi, lembaga nirlaba, ormas, atau asosiasi berbadan hukum.",
      "Bentuk Usaha Tetap (BUT) milik asing yang beroperasi di wilayah hukum Indonesia.",
    ],
    exemptions:
      "Lembaga sosial murni tanpa keuntungan komersial sering mendapat fasilitas pembebasan pajak tertentu, namun wajib melaporkan laporan keuangan.",
  },
];

export const PAYMENT_STEPS: PaymentStep[] = [
  {
    step: 1,
    title: "Pendaftaran & Pembuatan NPWP",
    subtitle: "Mendapatkan Nomor Pokok Wajib Pajak",
    description:
      "Sebelum membayar pajak, Anda harus memiliki NPWP sebagai identitas resmi wajib pajak. Kini pendaftaran sangat praktis secara digital.",
    details: [
      "Akses portal resmi di https://coretaxdjp.pajak.go.id/",
      "Siapkan NIK (KTP) dan Kartu Keluarga (KK)",
      "Isi formulir elektronik sesuai dengan petunjuk kerja/usaha Anda",
      "Kartu NPWP fisik akan dikirim ke alamat rumah, atau Anda bisa langsung menggunakan NPWP Digital.",
    ],
    iconName: "UserCheck",
  },
  {
    step: 2,
    title: "Pembuatan Kode Billing (E-Billing)",
    subtitle: "Mendapatkan Kode Unsur Pembayaran Pajak",
    description:
      "Setiap jenis setoran pajak membutuhkan kode bayar khusus (ID Billing) agar dana yang Anda setorkan masuk ke pos kas negara yang tepat.",
    details: [
      "Login ke portal CORETAX (https://coretaxdjp.pajak.go.id/)",
      'Masuk ke menu "Bayar" lalu pilih sub-menu "e-Billing"',
      "Isi formulir Surat Setoran Elektronik (SSE) meliputi Jenis Pajak (misal: PPh Pasal 21), Masa Pajak (Bulan/Tahun), dan nominal uang pajak.",
      'Klik "Buat Kode Billing". Anda akan menerima 15 digit kode unik E-Billing yang berlaku selama 30 hari.',
    ],
    iconName: "QrCode",
  },
  {
    step: 3,
    title: "Pembayaran Pajak",
    subtitle: "Penyetoran Melalui Bank Persepsi atau E-Wallet",
    description:
      "Gunakan Kode Billing yang telah Anda miliki untuk melakukan transfer uang nominal pajak Anda ke kas negara secara langsung.",
    details: [
      "Gunakan ATM, Mobile Banking (bisa e-banking Mandiri, BCA, BNI, BRI, dll), atau Internet Banking.",
      "Dapat juga dibayar melalui Kantor Pos, Minimarket (Indomaret/Alfamart), Tokopedia, Shopee, atau loket Teller Bank.",
      'Pilih menu "Pembayaran" -> "Penerimaan Negara" -> "Pajak" -> masukkan Kode Billing.',
      "Simpan baik-baik Bukti Penerimaan Negara (BPN) atau struk transfer yang sah sebagai bukti pelunasan.",
    ],
    iconName: "CreditCard",
  },
  {
    step: 4,
    title: "Pelaporan SPT Tahunan",
    subtitle: "Pertanggungjawaban Pajak yang Dibayar Setahun",
    description:
      "Langkah terakhir adalah melaporkan seluruh penghasilan dan pembayaran pajak Anda selama satu tahun melalui SPT (Surat Pemberitahuan) Tahunan.",
    details: [
      "Wajib dilaporkan setiap tahun (Paling lambat 31 Maret bagi WPOP, atau 30 April bagi WP Badan).",
      "Gunakan fitur E-Filing di CORETAX.",
      "Siapkan bukti potong pajak dari kantor (formulir 1721 A1/A2 untuk karyawan) atau catatan omset usaha bulanan.",
      "Kirim SPT secara online, Anda akan mendapatkan Bukti Penerimaan Elektronik (BPE) melalui email.",
    ],
    iconName: "CheckSquare",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Berapakah batas Penghasilan Tidak Kena Pajak (PTKP) dasar untuk seorang Wajib Pajak Orang Pribadi lajang (tanpa tanggungan)?",
    options: [
      "Rp 24.000.000 per tahun",
      "Rp 36.000.000 per tahun",
      "Rp 54.000.000 per tahun",
      "Rp 72.000.000 per tahun",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Batas PTKP dasar (TK/0) di Indonesia saat ini adalah Rp 54.000.000 per tahun (atau setara Rp 4.500.000 per bulan). Jika pendapatan bersih Anda di bawah nilai ini, Anda tidak berkewajiban membayar PPh.",
  },
  {
    id: 2,
    question:
      "Dokumen elektronik apa yang harus dibuat terlebih dahulu sebelum melakukan transfer pembayaran pajak?",
    options: [
      "Kartu NPWP Elektronik",
      "Kode Billing (ID Billing)",
      "Bukti Penerimaan Negara (BPN)",
      "Formulir SPT Tahunan",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Anda harus membuat Kode Billing terlebih dahulu melalui CORETAX atau kanal lain. Kode Billing ini berisi informasi jenis setoran, nominal, masa pajak, dan bertindak sebagai rekening tujuan setoran.",
  },
  {
    id: 3,
    question:
      "Kapan batas akhir waktu pelaporan SPT Tahunan bagi Wajib Pajak Orang Pribadi (Karyawan/Usahawan)?",
    options: [
      "31 Desember tahun pajak berjalan",
      "31 Maret tahun berikutnya",
      "30 April tahun berikutnya",
      "31 Agustus tahun berikutnya",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Batas akhir pelaporan Surat Pemberitahuan (SPT) Tahunan bagi Wajib Pajak Orang Pribadi adalah tanggal 31 Maret tahun berikutnya, sedangkan untuk Wajib Pajak Badan adalah 30 April.",
  },
  {
    id: 4,
    question:
      "Dari mana porsi penerimaan terbesar Anggaran Pendapatan dan Belanja Negara (APBN) Indonesia bersumber?",
    options: [
      "Utang Luar Negeri",
      "Ekspor Sumber Daya Alam (SDA)",
      "Sektor Pariwisata",
      "Penerimaan Perpajakan",
    ],
    correctAnswerIndex: 3,
    explanation:
      "Lebih dari 75% hingga 80% penerimaan dalam APBN Indonesia setiap tahunnya ditopang dari penerimaan perpajakan (Pajak Dalam Negeri & Pajak Perdagangan Internasional).",
  },
  {
    id: 5,
    question:
      "Asas pemungutan pajak yang menyatakan bahwa pembayaran pajak harus adil dan sesuai dengan kemampuan finansial Wajib Pajak disebut...",
    options: [
      "Asas Equality (Keadilan)",
      "Asas Certainty (Kepastian Hukum)",
      "Asas Convenience (Kemudahan)",
      "Asas Economy (Efisiensi)",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Asas Equality (Keadilan/Kesamaan) memandatkan bahwa pemungutan pajak harus proporsional sesuai daya pikul dan kemampuan ekonomi Wajib Pajak, tanpa diskriminasi.",
  },
];
