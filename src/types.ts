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
  visitors: string;
  tabDarshan: string;
  tabHistory: string;
  tabChalisa: string;
  historyTitle: string;
  historyText: string;
  timingsTitle: string;
  timingsDarshan: string;
  timingsAarti: string;
  historyComingSoon: string;
  benefitsHeading: string;
  benefitsSub: string;
  benefitsMorning: string;
  benefitsMorningDesc: string;
  benefitsAfternoon: string;
  benefitsAfternoonDesc: string;
  benefitsEvening: string;
  benefitsEveningDesc: string;
  benefitsNight: string;
  benefitsNightDesc: string;
  benefitsTravel: string;
  benefitsTravelDesc: string;
  timeMorning: string;
  timeAfternoon: string;
  timeEvening: string;
  timeNight: string;
  timeTravel: string;
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
    directionsAddress: "કષ્ટ નિવારણ હનુમાનજી મંદિર, વડોલીવાક રોડ, ગોલા ગામ, ગુજરાત ૩૯૪૫૪૦",
    directionsPlusCode: "પ્લસ કોડ: 9Q7R+2WG",
    getDirectionsBtn: "ગૂગલ મેપ્સ પર જુઓ",
    copyAddressBtn: "સરનામું કોપી કરો",
    addressCopied: "સરનામું કોપી થયું!",
    byRoadTitle: "રોડ માર્ગ દ્વારા",
    byRoadDesc: "ઓલપાડથી આશરે ૭ કિ.મી. (ઓલપાડથી વડોલીવાક રોડ થઈ ગોલા પાટિયાથી ૨ કિ.મી.) અને સુરતથી ૨૨ કિ.મી. અંતરે ગોલા ગામમાં આવેલું છે.",
    nearbyTitle: "નજીકનું સ્થળ",
    nearbyDesc: "ગોલા ગામ, ઓલપાડ તાલુકો, સુરત જિલ્લો.",
    visitors: "મુલાકાતીઓ",
    tabDarshan: "દર્શન અને સ્થાન",
    tabHistory: "મંદિરનો ઇતિહાસ",
    tabChalisa: "હનુમાન ચાલીસા",
    historyTitle: "શ્રી કષ્ટ નિવારણ હનુમાનજી મંદિરનો ઇતિહાસ",
    historyText: "ગોલા ગામ (ઓલપાડ) ખાતે આવેલું શ્રી કષ્ટ નિવારણ હનુમાનજી મંદિર ભક્તો માટે પરમ શ્રદ્ધા અને આસ્થાનું કેન્દ્ર છે. આ પવિત્ર સ્થળ હનુમાનજીના પ્રતાપી અને દયાળુ સ્વરૂપ માટે જાણીતું છે. ભક્તો અહીં પોતાના શારીરિક, માનસિક અને આધ્યાત્મિક કષ્ટોના નિવારણ માટે આવે છે. શનિવાર અને મંગળવારે મંદિર પરિસરમાં ભક્તોની ભારે ભીડ દર્શન માટે ઉમટી પડે છે, જ્યાં હનુમાનજીની ભક્તિ અને આરાધના દ્વારા દિવ્ય શાંતિનો અનુભવ થાય છે.",
    timingsTitle: "દર્શન અને આરતી સમય",
    timingsDarshan: "નિત્ય દર્શન: સવારે ૬:૦૦ થી રાત્રે ૯:૦૦",
    timingsAarti: "મંગળા આરતી: સવારે ૬:૩૦ · સંધ્યા આરતી: સાંજે ૭:૦૦",
    historyComingSoon: "ઇતિહાસ ટૂંક સમયમાં આવી રહ્યો છે... (અનુભવીઓ દ્વારા ચકાસણી ચાલુ છે)",
    benefitsHeading: "૧૨ નામના પાઠનું મહત્વ",
    benefitsSub: "આનંદ રામાયણ અનુસાર વિશિષ્ટ સમય અને લાભ",
    benefitsMorning: "સવારે (પ્રાતઃકાળ)",
    benefitsMorningDesc: "દીર્ઘાયુષ્ય, આરોગ્ય અને ઉત્તમ સ્વાસ્થ્ય પ્રાપ્ત થાય છે.",
    benefitsAfternoon: "બપોરે (મધ્યાહ્ન)",
    benefitsAfternoonDesc: "ધન, સમૃદ્ધિ વધે છે અને પારિવારિક પ્રશ્નોનું નિવારણ થાય છે.",
    benefitsEvening: "સાંજે (સંધ્યાકાળ)",
    benefitsEveningDesc: "ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની વૃદ્ધિ થાય છે.",
    benefitsNight: "રાત્રે (ઊંઘતા પહેલા)",
    benefitsNightDesc: "શત્રુઓ પર વિજય પ્રાપ્ત થાય છે અને તમામ ભયમાંથી મુક્તિ મળે છે.",
    benefitsTravel: "પ્રવાસ સમયે",
    benefitsTravelDesc: "યાત્રા સુખદ, વિઘ્નરહિત અને સંપૂર્ણ સુરક્ષિત રહે છે.",
    timeMorning: "સવારે ૬ થી ૯",
    timeAfternoon: "બપોરે ૧૨ થી ૩",
    timeEvening: "સાંજે ૫ થી ૭",
    timeNight: "સૂતા પહેલા",
    timeTravel: "યાત્રા સમયે"
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
    directionsAddress: "Kastanivaran Hanumanji Mandir, Vadolivac Road, Gola Village, Gujarat 394540",
    directionsPlusCode: "Plus Code: 9Q7R+2WG",
    getDirectionsBtn: "Open in Google Maps",
    copyAddressBtn: "Copy Address",
    addressCopied: "Address Copied!",
    byRoadTitle: "By Road",
    byRoadDesc: "Located in Gola Village, approx. 7 km from Olpad (via Vadolivac Road to Gola Patiya, then 2 km) and 22 km from Surat.",
    nearbyTitle: "Landmark",
    nearbyDesc: "Gola Village, Olpad Taluka, Surat District.",
    visitors: "visitors",
    tabDarshan: "Darshan & Map",
    tabHistory: "Temple History",
    tabChalisa: "Hanuman Chalisa",
    historyTitle: "History of Sri Kasht Nivaran Hanumanji Mandir",
    historyText: "Situated in Gola Gaam (Olpad, Surat), Sri Kasht Nivaran Hanumanji Mandir is a sanctified site of immense devotion and spiritual peace. The temple is dedicated to Lord Hanuman in his 'Kasht Nivaran' form—the remover of all human sufferings, worries, and difficulties. Devotees from all walks of life visit this sacred shrine to seek blessings and find resolution for their mental, physical, and spiritual afflictions. Special prayers and heavy congregations are observed on Tuesdays and Saturdays.",
    timingsTitle: "Darshan & Aarti Timings",
    timingsDarshan: "Daily Darshan: 6:00 AM to 9:00 PM",
    timingsAarti: "Mangala Aarti: 6:30 AM · Sandhya Aarti: 7:00 PM",
    historyComingSoon: "History Section Coming Soon... (Fact-checking in progress)",
    benefitsHeading: "Benefits of Chanting 12 Names",
    benefitsSub: "Specific timings and scriptural benefits from Ananda Ramayana",
    benefitsMorning: "Morning (Pratahkal)",
    benefitsMorningDesc: "Grants longevity, good health, and vital energy.",
    benefitsAfternoon: "Afternoon (Madhyahn)",
    benefitsAfternoonDesc: "Brings wealth, prosperity, and resolves domestic challenges.",
    benefitsEvening: "Evening (Sandhyakal)",
    benefitsEveningDesc: "Promotes family happiness, peace, and domestic harmony.",
    benefitsNight: "Night (Before Sleeping)",
    benefitsNightDesc: "Grants victory over obstacles/enemies and freedom from fear.",
    benefitsTravel: "During Travel",
    benefitsTravelDesc: "Ensures a safe, peaceful, and auspicious journey.",
    timeMorning: "6 AM - 9 AM",
    timeAfternoon: "12 PM - 3 PM",
    timeEvening: "5 PM - 7 PM",
    timeNight: "Before Sleep",
    timeTravel: "On Journey"
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
      "३. जय वायु पुत्र!",
      "४. जय महाबल!",
      "५. जय रामेष्ट!",
      "६. जय फाल्गुन सखा!",
      "७. जय पिंगाक्ष!",
      "८. जय अमित विक्रम!",
      "૯. जय उदधिक्रमण!",
      "१०. जय सीता शोक विनाशक!",
      "११. जय लक्ष्मण प्राण दाता!",
      "१२. जय दशग्रीव दर्पहा!"
    ],
    directionsHeading: "मंदिर का पता और मार्गदर्शन",
    directionsAddress: "कष्ट निवारण हनुमानजी मंदिर, वडोलीवाक रोड, गोला गांव, गुजरात ३९४५४०",
    directionsPlusCode: "प्लस कोड: 9Q7R+2WG",
    getDirectionsBtn: "गूगल मैप्स पर खोलें",
    copyAddressBtn: "पता कॉपी करें",
    addressCopied: "पता कॉपी किया गया!",
    byRoadTitle: "सड़क मार्ग",
    byRoadDesc: "ओलपाड से लगभग ७ किमी (ओलपाड से वडोलीवाक रोड होकर गोला पाटिया से २ किमी) और सूरत से लगभग २२ किमी की दूरी पर गोला गांव में स्थित है।",
    nearbyTitle: "निकटतम स्थान",
    nearbyDesc: "गोला गांव, ओलपाड तालुका, सूरत जिला।",
    visitors: "दर्शक",
    tabDarshan: "दर्शन और स्थान",
    tabHistory: "मंदिर का इतिहास",
    tabChalisa: "हनुमान चालीसा",
    historyTitle: "श्री कष्ट निवारण हनुमानजी मंदिर का इतिहास",
    historyText: "गोला गांव (ओलपाड, सूरत) में स्थित श्री कष्ट निवारण हनुमानजी मंदिर भक्तों के लिए अगाध श्रद्धा और आध्यात्मिक शांति का केंद्र है। यह मंदिर हनुमानजी के 'कष्ट निवारण' स्वरूप को समर्पित है—जो सभी मानवीय दुखों, कष्टों और कठिनाइयों को दूर करने वाले हैं। भक्त यहां अपने शारीरिक, मानसिक और आध्यात्मिक कष्टों से मुक्ति पाने के लिए आते हैं। मंगलवार और शनिवार को मंदिर में भक्तों की भारी भीड़ उमड़ती है।",
    timingsTitle: "दर्शन और आरती का समय",
    timingsDarshan: "दर्शन समय: सुबह ६:०० से रात ९:०० बजे तक",
    timingsAarti: "मंगला आरती: सुबह ६:३૦ बजे · संध्या आरती: शाम ७:०० बजे",
    historyComingSoon: "इतिहास जल्द ही आ रहा है... (तथ्यों की जांच चल रही है)",
    benefitsHeading: "१२ नामों के जाप का महत्व",
    benefitsSub: "आनंद रामायण के अनुसार विशेष समय और लाभ",
    benefitsMorning: "सुबह (प्रातःकाल)",
    benefitsMorningDesc: "दीर्घायु, आरोग्य और उत्तम स्वास्थ्य की प्राप्ति होती है।",
    benefitsAfternoon: "दोपहर (मध्याह्न)",
    benefitsAfternoonDesc: "धन-समृद्धि आती है और पारिवारिक समस्याओं का निवारण होता है।",
    benefitsEvening: "शाम (संध्याकाल)",
    benefitsEveningDesc: "गृह क्लेश दूर होते हैं, सुख और शांति का वास होता है।",
    benefitsNight: "रात (सोने से पहले)",
    benefitsNightDesc: "शत्रुओं पर विजय प्राप्त होती है और हर प्रकार के भय से मुक्ति मिलती है।",
    benefitsTravel: "यात्रा के समय",
    benefitsTravelDesc: "यात्रा सुखद, विघ्नमुक्त और सुरक्षित होती है।",
    timeMorning: "सुबह ६ से ९",
    timeAfternoon: "दोपहर १२ से ३",
    timeEvening: "शाम ५ से ७",
    timeNight: "सोने से पहले",
    timeTravel: "यात्रा के समय"
  }
};
