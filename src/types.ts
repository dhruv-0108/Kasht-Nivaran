export type Language = 'gu' | 'en' | 'hi';

export interface Translations {
  title: string;
  subtitle: string;
  subAddress: string;
  name: string;
  location: string;
  footerSalutation: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  gu: {
    title: "કષ્ટ નિવારણ દાદા",
    subtitle: "નિત્ય દર્શન",
    subAddress: "કષ્ટ નિવારણ હનુમાનજી મંદિર, ગોલા ગામ",
    name: "કષ્ટ નિવારણ હનુમાનજી", // Updated to full name
    location: "ગોલા ગામ · ઓલપાડ",
    footerSalutation: "જય શ્રી હનુમાન"
  },
  en: {
    title: "Kasht Nivaran Dada",
    subtitle: "NITYA DARSHAN",
    subAddress: "Kasht Nivaran Hanumanji Mandir, Gola Gaam",
    name: "Kasht Nivaran Hanumanji", // Updated to full name
    location: "Gola Gaam · Olpad",
    footerSalutation: "Jai Shree Hanuman"
  },
  hi: {
    title: "कष्ट निवारण दादा",
    subtitle: "नित्य दर्शन",
    subAddress: "कष्ट निवारण हनुमानजी मंदिर, गोला ग्राम",
    name: "कष्ट निवारण हनुमानजी", // Updated to full name
    location: "गोला ग्राम · ओलपाड",
    footerSalutation: "जय श्री हनुमान"
  }
};
