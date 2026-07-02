export interface TaxBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  percentage?: string;
  stats?: string;
}

export interface TaxSubject {
  id: string;
  category: string;
  title: string;
  description: string;
  criteria: string[];
  exemptions: string;
}

export interface PaymentStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export type ActiveTab = 'beranda' | 'definisi' | 'manfaat' | 'subjek' | 'cara-bayar' | 'kuis';
