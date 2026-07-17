export type Language = 'gu' | 'en' | 'hi';

export interface Translations {
  title: string;
  subtitle: string;
  subAddress: string;
  name: string;
  location: string;
  footerSalutation: string;
  footerBrand: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  gu: {
    title: "કષ્ટ નિવારણ હનુમાનજી",
    subtitle: "નિત્ય દર્શન",
    subAddress: "કષ્ટ નિવારણ હનુમાનજી મંદિર, ગોલા ગામ",
    name: "કષ્ટ નિવારણ હનુમાનજી",
    location: "ગોલા ગામ · ઓલપાડ",
    footerSalutation: "જય શ્રી હનુમાન",
    footerBrand: "કષ્ટ નિવારણ હનુમાનજી" // Updated
  },
  en: {
    title: "Kasht Nivaran Hanumanji",
    subtitle: "NITYA DARSHAN",
    subAddress: "Kasht Nivaran Hanumanji Mandir, Gola Gaam",
    name: "Kasht Nivaran Hanumanji",
    location: "Gola Gaam · Olpad",
    footerSalutation: "Jai Shree Hanuman",
    footerBrand: "Kasht Nivaran Hanumanji" // Updated
  },
  hi: {
    title: "कष्ट निवारण हनुमानजी",
    subtitle: "नित्य दर्शन",
    subAddress: "कष्ट निवारण हनुमानजी मंदिर, गोला ग्राम",
    name: "कष्ट निवारण हनुमानजी",
    location: "गोला ग्राम · ओलपाड",
    footerSalutation: "जय श्री हनुमान",
    footerBrand: "कष्ट निवारण हनुमानजी" // Updated
  }
};
