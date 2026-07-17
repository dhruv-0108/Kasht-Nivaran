export type Language = 'gu' | 'en' | 'hi';

export interface Translations {
  title: string;
  subtitle: string;
  subAddress: string;
  name: string;
  location: string;
  footerSalutation: string;
  footerBrand: string;
  namesHeading: string;
  namesList: string[];
  directionsHeading: string;
  directionsAddress: string;
  directionsPlusCode: string;
  getDirectionsBtn: string;
  copyAddressBtn: string;
  addressCopied: string;
  byRoadTitle: string;
  byRoadDesc: string;
  nearbyTitle: string;
  nearbyDesc: string;
  onlineDevotees: string;
  totalDarshans: string;
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
    namesHeading: "શ્રી હનુમાનજીના ૧૨ નામ",
    namesList: [
      "૧. જય હનુમાન!",
      "૨. જય અંજની સુત!",
      "૩. જય વાયુ પુત્ર!",
      "૪. જય મહાબલ!",
      "૫. જય રામેષ્ટ!",
      "૬. જય ફાલ્ગુન સખા!",
      "૭. જય પિંગાક્ષ!",
      "૮. જય અમિત વિક્રમ!",
      "૯. જય ઉદધિક્રમણ!",
      "૧૦. જય સીતા શોક વિનાશક!",
      "૧૧. જય લક્ષ્મણ પ્રાણ દાતા!",
      "૧૨. જય દશગ્રીવ દર્પહા!"
    ],
    directionsHeading: "મંદિરનું સરનામું અને માર્ગદર્શન",
    directionsAddress: "કષ્ટ નિવારણ હનુમાનજી મંદિર, ગોલા-તકરમા રોડ, ગોલા, ગુજરાત ૩૯૪૫૪૦",
    directionsPlusCode: "પ્લસ કોડ: 9Q7R+2WG",
    getDirectionsBtn: "ગૂગલ મેપ્સ પર જુઓ",
    copyAddressBtn: "સરનામું કોપી કરો",
    addressCopied: "સરનામું કોપી થયું!",
    byRoadTitle: "રોડ માર્ગ દ્વારા",
    byRoadDesc: "ઓલપાડથી આશરે ૧૦ કિ.મી. અને સુરતથી ૨૫ કિ.મી. અંતરે ગોલા-તકરમા રોડ પર આવેલું છે.",
    nearbyTitle: "નજીકનું સ્થળ",
    nearbyDesc: "ગોલા ગામ, ઓલપાડ તાલુકો, સુરત જિલ્લો.",
    onlineDevotees: "ભક્તો ઓનલાઈન",
    totalDarshans: "કુલ દર્શન મુલાકાતો"
  },
  en: {
    title: "Kasht Nivaran Hanumanji",
    subtitle: "NITYA DARSHAN",
    subAddress: "Kasht Nivaran Hanumanji Mandir, Gola Gaam",
    name: "Kasht Nivaran Hanumanji",
    location: "Gola Gaam · Olpad",
    footerSalutation: "Jai Shree Hanuman",
    footerBrand: "Kasht Nivaran Hanumanji",
    namesHeading: "12 Names of Lord Hanuman",
    namesList: [
      "1. Jay Hanuman!",
      "2. Jay Anjani Suta!",
      "3. Jay Vayu Putra!",
      "4. Jay Mahabala!",
      "5. Jay Rameshta!",
      "6. Jay Phalguna Sakha!",
      "7. Jay Pingaksha!",
      "8. Jay Amit Vikrama!",
      "9. Jay Udadhi Kramana!",
      "10. Jay Sita Shoka Vinashaka!",
      "11. Jay Lakshmana Prana Data!",
      "12. Jay Dashagreeva Darpaha!"
    ],
    directionsHeading: "Address & Directions",
    directionsAddress: "Kastanivaran Hanumanji Mandir, Gola-Takarma Rd, Gola, Gujarat 394540",
    directionsPlusCode: "Plus Code: 9Q7R+2WG",
    getDirectionsBtn: "Open in Google Maps",
    copyAddressBtn: "Copy Address",
    addressCopied: "Address Copied!",
    byRoadTitle: "By Road",
    byRoadDesc: "Located on Gola-Takarma Road, approx. 10 km from Olpad and 25 km from Surat.",
    nearbyTitle: "Landmark",
    nearbyDesc: "Gola Village, Olpad Taluka, Surat District.",
    onlineDevotees: "devotees online",
    totalDarshans: "total darshans"
  },
  hi: {
    title: "कष्ट निवारण हनुमानजी",
    subtitle: "नित्य दर्शन",
    subAddress: "कष्ट निवारण हनुमानजी मंदिर, गोला ग्राम",
    name: "कष्ट निवारण हनुमानजी",
    location: "गोला ग्राम · ओलपाड",
    footerSalutation: "जय श्री हनुमान",
    footerBrand: "कष्ट निवारण हनुमानजी",
    namesHeading: "श्री हनुमानजी के १२ नाम",
    namesList: [
      "१. जय हनुमान!",
      "२. जय अंजनी सुत!",
      "३. वायु पुत्र!",
      "४. महाबल!",
      "५. रामेष्ट!",
      "६. फाल्गुन सखा!",
      "७. पिंगाक्ष!",
      "८. अमित विक्रम!",
      "९. उदधिक्रमण!",
      "१०. सीता शोक विनाशक!",
      "११. लक्ष्मण प्राण दाता!",
      "१२. दशग्रीव दर्पहा!"
    ],
    directionsHeading: "मंदिर का पता और मार्गदर्शन",
    directionsAddress: "कष्ट निवारण हनुमानजी मंदिर, गोला-तकरमा रोड, गोला, गुजरात ३९४५४०",
    directionsPlusCode: "प्लस कोड: 9Q7R+2WG",
    getDirectionsBtn: "गूगल मैप्स पर खोलें",
    copyAddressBtn: "पता कॉपी करें",
    addressCopied: "पता कॉपी किया गया!",
    byRoadTitle: "सड़क मार्ग",
    byRoadDesc: "ओलपाड से लगभग 10 किमी और सूरत से 25 किमी की दूरी पर गोला-तकरमा रोड पर स्थित है।",
    nearbyTitle: "निकटतम स्थान",
    nearbyDesc: "गोला गांव, ओलपाड तालुका, सूरत जिला।",
    onlineDevotees: "भक्त ऑनलाइन",
    totalDarshans: "कुल दर्शन"
  }
};
