export type Language = 'gu' | 'en' | 'hi';

export interface Translations {
  title: string;
  subtitle: string;
  subAddress: string;
  name: string;
  location: string;
  footerSalutation: string;
  footerBrand: string;
  namesList: string[];
}

export const TRANSLATIONS: Record<Language, Translations> = {
  gu: {
    title: "કષ્ટ નિવારણ હનુમાનજી",
    subtitle: "નિત્ય દર્શન",
    subAddress: "કષ્ટ નિવારણ હનુમાનજી મંદિર, ગોલા ગામ",
    name: "કષ્ટ નિવારણ હનુમાનજી",
    location: "ગોલા ગામ · ઓલપાડ",
    footerSalutation: "જય શ્રી હનુમાન",
    footerBrand: "કષ્ટ નિવારણ હનુમાનજી",
    namesList: [
      "૧. ઓમ હનુમાન",
      "૨. અંજની સુત",
      "૩. વાયુ પુત્ર",
      "૪. મહાબલ",
      "૫. રામેષ્ટ",
      "૬. ફાલ્ગુન સખા",
      "૭. પિંગાક્ષ",
      "૮. અમિત વિક્રમ",
      "૯. ઉદધિક્રમણ",
      "૧૦. સીતા શોક વિનાશક",
      "૧૧. લક્ષ્મણ પ્રાણ દાતા",
      "૧૨. દશગ્રીવ દર્પહા"
    ]
  },
  en: {
    title: "Kasht Nivaran Hanumanji",
    subtitle: "NITYA DARSHAN",
    subAddress: "Kasht Nivaran Hanumanji Mandir, Gola Gaam",
    name: "Kasht Nivaran Hanumanji",
    location: "Gola Gaam · Olpad",
    footerSalutation: "Jai Shree Hanuman",
    footerBrand: "Kasht Nivaran Hanumanji",
    namesList: [
      "1. Om Hanuman",
      "2. Anjani Suta",
      "3. Vayu Putra",
      "4. Mahabala",
      "5. Rameshta",
      "6. Phalguna Sakha",
      "7. Pingaksha",
      "8. Amit Vikrama",
      "9. Udadhi Kramana",
      "10. Sita Shoka Vinashaka",
      "11. Lakshmana Prana Data",
      "12. Dashagreeva Darpaha"
    ]
  },
  hi: {
    title: "कष्ट निवारण हनुमानजी",
    subtitle: "नित्य दर्शन",
    subAddress: "कष्ट निवारण हनुमानजी मंदिर, गोला ग्राम",
    name: "कष्ट निवारण हनुमानजी",
    location: "गोला ग्राम · ओलपाड",
    footerSalutation: "जय श्री हनुमान",
    footerBrand: "कष्ट निवारण हनुमानजी",
    namesList: [
      "१. ओम हनुमान",
      "२. अंजनी सुत",
      "३. वायु पुत्र",
      "४. महाबल",
      "५. रामेष्ट",
      "૬. फाल्गुन सखा",
      "७. पिंगाक्ष",
      "८. अमित विक्रम",
      "९. उदधिक्रमण",
      "१०. सीता शोक विनाशक",
      "११. लक्ष्मण प्राण दाता",
      "१२. दशग्रीव दर्पहा"
    ]
  }
};
