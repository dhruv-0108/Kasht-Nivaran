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
      "જય હનુમાન!",
      "જય અંજની સુત!",
      "જય વાયુ પુત્ર!",
      "જય મહાબલ!",
      "જય રામેષ્ટ!",
      "જય ફાલ્ગુન સખા!",
      "જય પિંગાક્ષ!",
      "જય અમિત વિક્રમ!",
      "જય ઉદધિક્રમણ!",
      "જય સીતા શોક વિનાશક!",
      "જય લક્ષ્મણ પ્રાણ દાતા!",
      "જય દશગ્રીવ દર્પહા!"
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
      "Jay Hanuman!",
      "Jay Anjani Suta!",
      "Jay Vayu Putra!",
      "Jay Mahabala!",
      "Jay Rameshta!",
      "Jay Phalguna Sakha!",
      "Jay Pingaksha!",
      "Jay Amit Vikrama!",
      "Jay Udadhi Kramana!",
      "Jay Sita Shoka Vinashaka!",
      "Jay Lakshmana Prana Data!",
      "Jay Dashagreeva Darpaha!"
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
      "जय हनुमान!",
      "जय अंजनी सुत!",
      "जय वायु पुत्र!",
      "जय महाबल!",
      "जय रामेष्ट!",
      "जय फाल्गुन सखा!",
      "जय पिंगाक्ष!",
      "जय अमित विक्रम!",
      "जय उदधिक्रमण!",
      "जय सीता शोक विनाशक!",
      "जय लक्ष्मण प्राण दाता!",
      "जय दशग्रीव दर्पहा!"
    ]
  }
};
