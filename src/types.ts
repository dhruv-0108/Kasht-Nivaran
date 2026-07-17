export type Language = 'gu' | 'en' | 'hi';

export interface Translations {
  title: string;
  subtitle: string;
  name: string;
  location: string;
  footerSalutation: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  gu: {
    title: "કષ્ટ નિવારણ",
    subtitle: "નિત્ય દર્શન",
    name: "કષ્ટભંજન દેવ (દાદા)",
    location: "ગોલા ગામ · ઓલપાડ",
    footerSalutation: "જય શ્રી હનુમાન"
  },
  en: {
    title: "Kasht Nivaran",
    subtitle: "Nitya Darshan",
    name: "Kasht Nivaran Dada",
    location: "Gola Gaam · Olpad",
    footerSalutation: "Jai Shree Hanuman"
  },
  hi: {
    title: "कष्ट निवारण",
    subtitle: "नित्य दर्शन",
    name: "कष्टभंजन देव (दादा)",
    location: "गोला ग्राम · ओलपाड",
    footerSalutation: "जय श्री हनुमान"
  }
};
