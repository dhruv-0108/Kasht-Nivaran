export interface VerseTranslations {
  sanskrit: string;
  translation: string;
}

export interface MultiLangVerse {
  num: string;
  translit: string;
  gu: VerseTranslations;
  en: VerseTranslations;
  hi: VerseTranslations;
}

export const CHALISA_VERSES: MultiLangVerse[] = [
  {
    num: "Doha 1",
    translit: "Shri Guru Charan Saroj Raj Nij Manu Mukuru Sudhari |\nBaranau Raghuvar Bimal Jasu Jo Dayaku Phala Chari ||",
    gu: {
      sanskrit: "શ્રીગુરુ ચરન સરોજ રજ નિજ મનુ મુકુરુ સુધારિ।\nબરનઊઁ રઘુબર બિમલ જસુ જો દાયકુ ફલ ચારિ॥",
      translation: "ગુરુદેવના ચરણ કમળની રજથી મારા મનરૂપી દર્પણને પવિત્ર કરી, હું શ્રી રઘુવીરના નિર્મળ યશનું ગાન કરું છું, જે ચાર પુરુષાર્થ (ધર્મ, અર્થ, કામ અને મોક્ષ) આપનાર છે."
    },
    en: {
      sanskrit: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनऊँ रघुबर बिमल जसु जो दायकु फल चारि॥",
      translation: "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure glory of Sri Ramachandra, which bestows the four fruits of life (Dharma, Artha, Kama, and Moksha)."
    },
    hi: {
      sanskrit: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनऊँ रघुबर बिमल जसु जो दायकु फल चारि॥",
      translation: "अपने गुरु के चरण कमलों की धूल से अपने मन रूपी दर्पण को स्वच्छ करके, मैं श्री रघुवीर के निर्मल यश का वर्णन करता हूँ, जो चारों फल (धर्म, अर्थ, काम और मोक्ष) देने वाला है।"
    }
  },
  {
    num: "Doha 2",
    translit: "Budhiheen Tanu Janike Sumirau Pavanakumar |\nBala Budhi Vidya Dehu Mohi Harahu Kalesa Bikara ||",
    gu: {
      sanskrit: "બુદ્ધિહીન તનુ જાનિકે સુમિરૌં પવનકુમાર।\nબલ બુધિ બિદ્યા દેહુ મોહિં હરહુ કલેસ બિકાર॥",
      translation: "પોતાને બુદ્ધિહીન જાણીને હું પવનપુત્ર હનુમાનજીનું સ્મરણ કરું છું. મને બળ, બુદ્ધિ અને વિદ્યા પ્રદાન કરો અને મારા તમામ દુઃખો તથા વિકારો દૂર કરો."
    },
    en: {
      sanskrit: "बुद्धिहीन तनु जानिके सुमिरौं पवनकुमार।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥",
      translation: "Knowing myself to be ignorant, I meditate upon you, O Son of Vayu (Wind). Bestow upon me strength, wisdom, and knowledge, and remove my afflictions and impurities."
    },
    hi: {
      sanskrit: "बुद्धिहीन तनु जानिके सुमिरौं पवनकुमार।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥",
      translation: "स्वयं को बुद्धिहीन जानकर मैं पवनपुत्र श्री हनुमान का स्मरण करता हूँ। मुझे बल, बुद्धि और विद्या प्रदान करें और मेरे सभी कष्टों तथा विकारों को हर लें।"
    }
  },
  {
    num: "Chaupai 1",
    translit: "Jai Hanuman Gyan Gun Sagar |\nJai Kapees Tihun Lok Ujagar ||",
    gu: {
      sanskrit: "જય હનુમાન જ્ઞાન ગુન સાગર।\nજય કપીસ તિહું લોક ઉજાગર॥",
      translation: "જ્ઞાન અને ગુણના સાગર એવા હનુમાનજીની જય હો! ત્રણેય લોકને પ્રકાશિત કરનારા વાનરરાજ કપીશની જય હો!"
    },
    en: {
      sanskrit: "जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥",
      translation: "Victory to Hanuman, ocean of wisdom and virtue! Victory to the Lord of monkeys, who illuminates the three worlds!"
    },
    hi: {
      sanskrit: "जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥",
      translation: "ज्ञान और गुणों के सागर श्री हनुमान की जय हो! तीनों लोकों को प्रकाशित करने वाले वानरराज कपीश्वर की जय हो!"
    }
  },
  {
    num: "Chaupai 2",
    translit: "Ramdoot Atulit Bal Dhama |\nAnjaniputra Pavansut Nama ||",
    gu: {
      sanskrit: "રામદૂત અતુલિત બલ ધામા।\nઅંજનિપુત્ર પવનસુત નામા॥",
      translation: "તમે શ્રી રામના પરમ દૂત અને અતુલનીય બળના ધામ છો. અંજનીના પુત્ર અને પવનપુત્ર તરીકે ઓળખાઓ છો."
    },
    en: {
      sanskrit: "रामदूत अतुलित बल धामा।\nअंजनिपुत्र पवनसुत नामा॥",
      translation: "Messenger of Sri Rama, home of incomparable strength, son of Anjani and named the Son of Wind."
    },
    hi: {
      sanskrit: "रामदूत अतुलित बल धामा।\nअंजनिपुत्र पवनसुत नामा॥",
      translation: "आप श्री राम के दूत और अतुलनीय बल के निवास स्थान हैं। आप अंजनी माता के पुत्र और पवनपुत्र नाम से जाने जाते हैं।"
    }
  },
  {
    num: "Chaupai 3",
    translit: "Mahaveer Vikram Bajrangi |\nKumati Nivar Sumati Ke Sangi ||",
    gu: {
      sanskrit: "મહાવીર બિક્રમ બજરંગી।\nકુમતિ નિવાર સુમતિ કે સંગી॥",
      translation: "તમે અદ્ભુત પરાક્રમ અને વજ્ર જેવા અંગો ધરાવતા મહાવીર છો. તમે ખરાબ બુદ્ધિને દૂર કરનાર અને સદબુદ્ધિના સાથી છો."
    },
    en: {
      sanskrit: "महाबीर बिक्रम बजरंगी।\nकुमपति निवार सुमति के संगी॥",
      translation: "Great hero, possessor of immense valor, with a body strong as a thunderbolt! Dispeller of wicked thoughts and companion of the wise."
    },
    hi: {
      sanskrit: "महाबीर बिक्रम बजरंगी।\nकुमपति निवार सुमति के संगी॥",
      translation: "आप महान वीर और वज्र के समान अंगों वाले हैं। आप कुबुद्धि को दूर करने वाले और सुबुद्धि के साथी हैं।"
    }
  },
  {
    num: "Chaupai 4",
    translit: "Kanchan Varan Viraj Subesa |\nKanan Kundal Kunchit Kesa ||",
    gu: {
      sanskrit: "કંચન બરન બિરાજ સુબેસા।\nકાનન કુંડલ કુંચિત કેસા॥",
      translation: "તમે સુવર્ણ રંગના સુંદર વસ્ત્રોથી સુશોભિત છો. કાનમાં કુંડળ અને વાંકડિયા વાળથી શોભી રહ્યા છો."
    },
    en: {
      sanskrit: "कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥",
      translation: "Adorned with golden complexion and beautiful garments, wearing shiny ear rings and with curly locks."
    },
    hi: {
      sanskrit: "कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥",
      translation: "आप सोने के समान कांति वाले और सुंदर वस्त्रों से सुशोभित हैं। कानों में कुंडल और घुंघराले बालों से शोभायमान हैं।"
    }
  },
  {
    num: "Chaupai 5",
    translit: "Hath Vajra Aur Dhvaja Viraje |\nKandhe Munj Janeu Saje ||",
    gu: {
      sanskrit: "હાથ બજ્ર ઔ ધ્વજા બિરાજૈ।\nકાંધે મૂંજ જનેઊ સાજૈ॥",
      translation: "તમારા હાથમાં વજ્ર અને ધર્મધ્વજ શોભે છે. ખભા પર મુંજ ઘાસની જનોઈ સુશોભિત છે."
    },
    en: {
      sanskrit: "हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥",
      translation: "Holding a thunderbolt and a flag in your hands, and adorned with the sacred thread made of Munja grass across your shoulder."
    },
    hi: {
      sanskrit: "हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥",
      translation: "आपके हाथों में वज्र और ध्वज शोभायमान हैं। कंधे पर मूंज की जनेऊ सुशोभित है।"
    }
  },
  {
    num: "Chaupai 6",
    translit: "Sankar Suvan Kesarinandan |\nTej Pratap Maha Jag Bandan ||",
    gu: {
      sanskrit: "સંકર સુવન કેસરીનંદન।\nતેજ પ્રતાપ મહા જગ બંદન॥",
      translation: "તમે ભગવાન શિવના અંશ અને કેસરીના નંદન છો. તમારા તેજ અને પરાક્રમની આખું જગત વંદના કરે છે."
    },
    en: {
      sanskrit: "संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बंदन॥",
      translation: "Incarnation of Shiva, son of Kesari! Your radiant glory is worshipped by the entire world."
    },
    hi: {
      sanskrit: "संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बंदन॥",
      translation: "आप भगवान शिव के अवतार और केसरी के पुत्र हैं। आपके तेज और प्रताप की सारा संसार वंदना करता है।"
    }
  },
  {
    num: "Chaupai 7",
    translit: "Vidyavan Guni Ati Chatur |\nRam Kaj Karibe Ko Aatur ||",
    gu: {
      sanskrit: "બિદ્યાવાન ગુની અતિ ચાતુર।\nરામ કાજ કરિબે કો આતુર॥",
      translation: "તમે વિદ્યાવાન, ગુણવાન અને અત્યંત ચતુર છો. ભગવાન શ્રી રામના કાર્યો કરવા માટે હંમેશા તત્પર રહો છો."
    },
    en: {
      sanskrit: "बिद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥",
      translation: "Highly learned, virtuous, and exceptionally clever, you are always eager to perform the works of Sri Rama."
    },
    hi: {
      sanskrit: "बिद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥",
      translation: "आप अत्यंत विद्वान, गुणी और बुद्धिमान हैं। भगवान श्री राम के कार्य करने के लिए सदैव उत्सुक रहते हैं।"
    }
  },
  {
    num: "Chaupai 8",
    translit: "Prabhu Charitra Sunibe Ko Rasiya |\nRam Lakhan Sita Man Basiya ||",
    gu: {
      sanskrit: "પ્રભુ ચરિત્ર સુનિબે કો રસિયા।\nરામ લખન સીતા મન બસિયા॥",
      translation: "તમે પ્રભુ શ્રી રામના ચરિત્ર સાંભળવાના પરમ રસિયા છો. રામ, લક્ષ્મણ અને માતા સીતા તમારા હૃદયમાં વાસ કરે છે."
    },
    en: {
      sanskrit: "प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥",
      translation: "You delight in listening to the stories of Sri Rama, and reside eternally in the hearts of Rama, Lakshmana, and Sita."
    },
    hi: {
      sanskrit: "प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥",
      translation: "आप प्रभु श्री राम के चरित्र सुनने के परम रसिक हैं। श्री राम, लक्ष्मण और सीता जी आपके हृदय में वास करते हैं।"
    }
  },
  {
    num: "Chaupai 9",
    translit: "Sukshma Roop Dhari Siyahin Dikhava |\nBikat Roop Dhari Lanka Jarava ||",
    gu: {
      sanskrit: "સૂક્ષ્મ રૂપ ધરિ સિયહિં દિખાવા।\nબિકટ રૂપ ધરિ લંક જરાવા॥",
      translation: "તમે અતિ સૂક્ષ્મ રૂપ ધારણ કરીને માતા સીતાને દર્શન આપ્યા, અને ભયંકર વિરાટ રૂપ ધારણ કરીને લંકાને ભસ્મ કરી દીધી."
    },
    en: {
      sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥",
      translation: "Assuming a microscopic form, you appeared before Sita, and assuming a colossal form, you set Lanka ablaze."
    },
    hi: {
      sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥",
      translation: "आपने अत्यंत छोटा रूप धारण करके माता सीता को दिखाया, और भयंकर रूप धारण करके सोने की लंका को जला दिया।"
    }
  },
  {
    num: "Chaupai 10",
    translit: "Bheem Roop Dhari Asur Sanhare |\nRamachandra Ke Kaj Sanvare ||",
    gu: {
      sanskrit: "ભીમ રૂપ ધરિ અસુર સંહારે।\nરામચંદ્ર કે કાજ સવારે॥",
      translation: "વિશાળ અને ભીમ કાયા ધારણ કરીને તમે રાક્ષસોનો સંહાર કર્યો અને ભગવાન શ્રી રામચંદ્રજીના તમામ કાર્યો સફળ કર્યા."
    },
    en: {
      sanskrit: "भीम रूप धरि असुर सँहारे।\nरामचंद्र के काज सँवारे॥",
      translation: "Assuming a mighty warrior form, you destroyed the demons and successfully executed all missions of Sri Ramachandra."
    },
    hi: {
      sanskrit: "भीम रूप धरि असुर सँहारे।\nरामचंद्र के काज सँवारे॥",
      translation: "आपने विशाल रूप धारण करके राक्षसों का संहार किया और भगवान श्री रामचंद्र जी के सभी कार्यों को संवारा।"
    }
  },
  {
    num: "Chaupai 11",
    translit: "Laye Sajivan Lakhan Jiyaye |\nShri Raghuveer Harashi Ur Laye ||",
    gu: {
      sanskrit: "લાય સજીવન લખન જિયાએ।\nશ્રીરઘુબીર હરષિ ઉર લાએ॥",
      translation: "સંજીવની બુટી લાવીને તમે લક્ષ્મણજીના પ્રાણ બચાવ્યા. તેનાથી અત્યંત હર્ષિત થઈ શ્રી રઘુવીરે તમને હૃદયસરસા ચાંપ્યા."
    },
    en: {
      sanskrit: "लाय सजीवन लखन जियाए।\nश्रीरघुबीर हरषि उर लाए॥",
      translation: "Bringing the life-giving Sanjeevani herb, you saved Lakshmana. Overjoyed, Sri Rama embraced you warmly."
    },
    hi: {
      sanskrit: "लाय सजीवन लखन जियाए।\nश्रीरघुबीर हरषि उर लाए॥",
      translation: "आप संजीवनी बूटी लेकर आए और लक्ष्मण जी के प्राण बचाए। इससे हर्षित होकर श्री रघुनाथ जी ने आपको गले से लगा लिया।"
    }
  },
  {
    num: "Chaupai 12",
    translit: "Raghupati Keenhi Bahut Badai |\nTum Mama Priya Bharatahi Sama Bhai ||",
    gu: {
      sanskrit: "રઘુપતિ કીન્હી બહુત બડ઼ાઈ।\nતુમ મમ પ્રિય ભરતહિ સમ ભાઈ॥",
      translation: "શ્રી રામચંદ્રજીએ તમારા ખૂબ વખાણ કર્યા અને કહ્યું: 'તમે મને મારા ભાઈ ભરત સમાન જ પ્રિય છો.'"
    },
    en: {
      sanskrit: "रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥",
      translation: "Sri Rama praised you highly, saying: 'You are as dear to me as my own brother Bharata.'"
    },
    hi: {
      sanskrit: "रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥",
      translation: "श्री रामचंद्र जी ने आपकी बहुत प्रशंसा की और कहा कि तुम मुझे भरत के समान ही प्रिय भाई हो।"
    }
  },
  {
    num: "Chaupai 13",
    translit: "Sahas Badan Tumharo Jas Gavain |\nAsi Kahi Shripati Kanth Lagavain ||",
    gu: {
      sanskrit: "સહસ બદન તુમ્હરો જસ ગાવૈં।\nઅસિ કહિ શ્રીપતિ કંઠ લગાવૈં॥",
      translation: "'હજારો મુખ તમારા યશનું ગાન કરે છે', એમ કહીને લક્ષ્મીપતિ શ્રી રામે તમને ફરી ગળે લગાવ્યા."
    },
    en: {
      sanskrit: "सहस बदन तुम्हरो जस गावैं।\nअसि कहि श्रीपति कंठ लगावैं॥",
      translation: "Embracing you, Sri Rama declared that the thousand-mouthed Adishesha sings your glory."
    },
    hi: {
      sanskrit: "सहस बदन तुम्हरो जस गावैं।\nअसि कहि श्रीपति कंठ लगावैं॥",
      translation: "'हजारों मुख तुम्हारा यश गाते हैं', ऐसा कहकर श्रीपति रामचंद्र जी ने आपको अपने हृदय से लगा लिया।"
    }
  },
  {
    num: "Chaupai 14",
    translit: "Sanakadike Brahmadi Muneesa |\nNarad Sarad Sahit Aheesa ||",
    gu: {
      sanskrit: "સનકાદિક બ્રહ્માદિ મુનીસા।\nનારદ સારદ સહિત અહીસા॥",
      translation: "સનકાદિક ઋષિઓ, બ્રહ્મા વગેરે દેવો, નારદજી, સરસ્વતીજી અને શેષનાગ તમારા યશનું ગાન કરે છે."
    },
    en: {
      sanskrit: "सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥",
      translation: "Sages like Sanaka, Brahma and other deities, Narada, Saraswati, and the King of Serpents sing your praises."
    },
    hi: {
      sanskrit: "सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥",
      translation: "सनक आदि ऋषि, ब्रह्मा आदि देव, नारद, शारदा और यमराज सहित सभी आपके यश का गान करते हैं।"
    }
  },
  {
    num: "Chaupai 15",
    translit: "Yama Kuber Digpal Jahan Te |\nKabi Kobid Kahi Sakain Kahan Te ||",
    gu: {
      sanskrit: "જમ કુબેર દિગપાલ જહાં તે।\nકબિ કોબિદ કહિ સકૈં કહાં તે॥",
      translation: "યમરાજ, કુબેર, દિશાના રક્ષકો, કવિઓ અને વિદ્વાનો પણ તમારા યશનું સંપૂર્ણ વર્ણન કરી શકતા નથી."
    },
    en: {
      sanskrit: "जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सकैं कहाँ ते॥",
      translation: "Yama, Kubera, and the guardians of directions, together with poets and scholars, fail to describe your full glory."
    },
    hi: {
      sanskrit: "जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सकैं कहाँ ते॥",
      translation: "यम, कुबेर और दसों दिशाओं के रक्षक, कवि और विद्वान भी आपके पूर्ण यश का वर्णन करने में असमर्थ हैं।"
    }
  },
  {
    num: "Chaupai 16",
    translit: "Tum Upakar Sugreevahin Keenha |\nRam Milay Raj Pad Deenha ||",
    gu: {
      sanskrit: "તુમ ઉપકાર સુગ્રીવહિં કીન્હા।\nરામ મિલાય રાજ પદ દીન્હા॥",
      translation: "તમે સુગ્રીવ પર મહાન ઉપકાર કર્યો. રામચંદ્રજી સાથે તેમનું મિલન કરાવી તેમને રાજપદ અપાવ્યું."
    },
    en: {
      sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥",
      translation: "You rendered great service to Sugreeva by introducing him to Rama and securing his royal throne."
    },
    hi: {
      sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥",
      translation: "आपने सुग्रीव पर महान उपकार किया। उन्हें श्री राम से मिलाकर राजा का पद दिलाया।"
    }
  },
  {
    num: "Chaupai 17",
    translit: "Tumharo Mantra Vibheeshan Mana |\nLankesvar Bhaye Sab Jag Jana ||",
    gu: {
      sanskrit: "તુમ્હરો મંત્ર બિભીષન માના।\nલંકેસ્વર ભે સબ જગ જાના॥",
      translation: "તમારી સલાહ વિભીષણે માની અને તેઓ લંકાના રાજા બન્યા, એ વાત આખું જગત જાણે છે."
    },
    en: {
      sanskrit: "तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना॥",
      translation: "Vibhishana followed your counsel, and the whole world knows he became the King of Lanka."
    },
    hi: {
      sanskrit: "तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना॥",
      translation: "आपकी दी गई सलाह को विभीषण ने माना और वे लंका के राजा बने, यह बात सारा संसार जानता है।"
    }
  },
  {
    num: "Chaupai 18",
    translit: "Jug Sahasra Jojan Par Bhanu |\nLeelyo Tahi Madhur Phal Janu ||",
    gu: {
      sanskrit: "જુગ સહસ્ર જોજન પર ભાનૂ।\nલીલ્યો તાહિ મધુર ફલ જાનૂ॥",
      translation: "હજારો યોજન દૂર સ્થિત સૂર્યને તમે એક મીઠું ફળ સમજીને ગળી ગયા હતા."
    },
    en: {
      sanskrit: "जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥",
      translation: "Though the Sun was thousands of miles away, you flew and swallowed it, thinking it to be a sweet fruit."
    },
    hi: {
      sanskrit: "जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥",
      translation: "जो सूर्य हजारों योजन की दूरी पर था, उसे आपने एक मीठा फल समझकर निगल लिया।"
    }
  },
  {
    num: "Chaupai 19",
    translit: "Prabhu Mudrika Meli Mukh Maheen |\nJaladhi Langhi Gaye Acharaj Naheen ||",
    gu: {
      sanskrit: "પ્રભુ મુદ્રિકા મેલિ મુખ માહીં।\nજલધિ લાંધિ ગયે અચરજ નાહીં॥",
      translation: "ભગવાન રામની વીંટી મોઢામાં રાખીને તમે સમુદ્ર પાર કરી ગયા, તેમાં કોઈ આશ્ચર્ય નથી."
    },
    en: {
      sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥",
      translation: "Carrying Lord Rama's signet ring in your mouth, you leaped across the ocean—no wonder it was easy for you."
    },
    hi: {
      sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥",
      translation: "प्रभु श्री राम की अंगूठी मुंह में रखकर आप विशाल समुद्र को लांघ गए, इसमें कोई आश्चर्य की बात नहीं है।"
    }
  },
  {
    num: "Chaupai 20",
    translit: "Durgam Kaj Jagat Ke Jete |\nSugam Anugrah Tumhare Tete ||",
    gu: {
      sanskrit: "દુર્ગમ કાજ જગત કે જેતે।\nસુગમ અનુગ્રહ તુમ્હરે તેતે॥",
      translation: "આ જગતમાં જેટલા પણ અશક્ય અને કઠિન કાર્યો છે, તે તમારી કૃપાથી એકદમ સરળ બની જાય છે."
    },
    en: {
      sanskrit: "दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥",
      translation: "All difficult tasks in this world are rendered easy by your divine benevolence."
    },
    hi: {
      sanskrit: "दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥",
      translation: "इस संसार में जितने भी कठिन कार्य हैं, वे आपकी कृपा से अत्यंत सरल हो जाते हैं।"
    }
  },
  {
    num: "Chaupai 21",
    translit: "Ram Duare Hot Na Agya Binu Paisare ||",
    gu: {
      sanskrit: "રામ દુઆરે તુમ રખવારે।\nહોત ન આજ્ઞા બિનુ પૈસારે॥",
      translation: "તમે ભગવાન શ્રી રામના દ્વારના રક્ષક છો. તમારી પરવાનગી વગર કોઈ અંદર પ્રવેશી શકતું નથી."
    },
    en: {
      sanskrit: "राम दुआरे तुम रखवारे।\nहोस न आग्या बिनु पैसारे॥",
      translation: "You are the gatekeeper of Lord Rama's court. No one can enter without your permission."
    },
    hi: {
      sanskrit: "राम दुआरे तुम रखवारे।\nहोस न आग्या बिनु पैसारे॥",
      translation: "आप श्री राम के द्वारपाल हैं। आपकी आज्ञा के बिना कोई भी उनके दरबार में प्रवेश नहीं कर सकता।"
    }
  },
  {
    num: "Chaupai 22",
    translit: "Sab Sukh Lahai Tumhari Sarna |\nTum Rakshak Kahu Ko Dar Na ||",
    gu: {
      sanskrit: "સબ સુખ લહૈ તુમ્હારી સરના।\nતુમ રક્ષક કાહૂ કો ડર ના॥",
      translation: "તમારા શરણે આવનારને તમામ સુખ પ્રાપ્ત થાય છે. જ્યારે તમે રક્ષક છો, ત્યારે કોઈ વાતનો ભય રહેતો નથી."
    },
    en: {
      sanskrit: "सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डर ना॥",
      translation: "All happiness is attained in your shelter. When you are the protector, what is there to fear?"
    },
    hi: {
      sanskrit: "सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डर ना॥",
      translation: "आपकी शरण में आने वाले को सभी सुख प्राप्त होते हैं। जब आप रक्षक हैं, तो फिर किसी का डर नहीं रहता।"
    }
  },
  {
    num: "Chaupai 23",
    translit: "Aapan Tej Samharo Aapay |\nTeenon Lok Hank Te Kanpay ||",
    gu: {
      sanskrit: "આપન તેજ સમ્હારો આપૈ।\nતીનોં લોક હાંક તેં કાંપૈ॥",
      translation: "તમારા તેજને માત્ર તમે જ સંભાળી શકો છો. તમારી એક જ ગર્જનાથી ત્રણેય લોક ધ્રૂજી ઊઠે છે."
    },
    en: {
      sanskrit: "आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥",
      translation: "Only you can control your own radiant energy. All three worlds tremble at your thunderous roar."
    },
    hi: {
      sanskrit: "आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥",
      translation: "अपने तेज को केवल आप ही नियंत्रित कर सकते हैं। आपकी एक ही हुंकार से तीनों लोक कांप उठते हैं।"
    }
  },
  {
    num: "Chaupai 24",
    translit: "Bhoot Pisach Nikat Nahin Aave |\nMahaveer Jab Naam Sunave ||",
    gu: {
      sanskrit: "ભૂત પિસાચ નિકટ નહિં આવૈ।\nમહાવીર જબ નામ સુનાવૈ॥",
      translation: "જ્યાં મહાવીર હનુમાનજીનું નામ લેવામાં આવે છે, ત્યાં ભૂત અને પિશાચ નજીક પણ આવી શકતા નથી."
    },
    en: {
      sanskrit: "भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥",
      translation: "Ghosts and evil spirits do not dare come near when the name of Mahaveer is chanted."
    },
    hi: {
      sanskrit: "भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥",
      translation: "जहां महावीर हनुमान जी का नाम सुनाया जाता है, वहां भूत-प्रेत और नकारात्मक शक्तियां पास भी नहीं आ सकतीं।"
    }
  },
  {
    num: "Chaupai 25",
    translit: "Nasay Rog Haray Sab Peera |\nJapat Nirantar Hanumat Beera ||",
    gu: {
      sanskrit: "નાસૈ રોગ હરૈ સબ પીરા।\nજપત નિરંતર હનુમત બીરા॥",
      translation: "વીર હનુમાનજીનું નિરંતર નામ સ્મરણ કરવાથી તમામ રોગો નષ્ટ થાય છે અને બધી પીડા દૂર થાય છે."
    },
    en: {
      sanskrit: "नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥",
      translation: "All diseases vanish and all pains cease by chanting continuously the name of the brave Lord Hanuman."
    },
    hi: {
      sanskrit: "नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥",
      translation: "वीर हनुमान जी के नाम का निरंतर जप करने से सभी रोग नष्ट हो जाते हैं और समस्त पीड़ा समाप्त हो जाती हैं।"
    }
  },
  {
    num: "Chaupai 26",
    translit: "Sankat Te Hanuman Chhudave |\nMan Kram Bachan Dhyan Jo Lave ||",
    gu: {
      sanskrit: "સંકટ તેં હનુમાન છુડ઼ાવૈ।\nમન ક્રમ બચન ધ્યાન જો લાવૈ॥",
      translation: "જે લોકો મન, વચન અને કર્મથી હનુમાનજીનું ધ્યાન ધરે છે, તેમને તેઓ તમામ સંકટોમાંથી મુક્ત કરે છે."
    },
    en: {
      sanskrit: "संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥",
      translation: "Hanuman releases from all troubles those who meditate on him in mind, action, and speech."
    },
    hi: {
      sanskrit: "संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥",
      translation: "जो भी मन, वचन और कर्म से हनुमान जी का ध्यान लगाता है, उन्हें वे सभी संकटों से मुक्त कर देते हैं।"
    }
  },
  {
    num: "Chaupai 27",
    translit: "Sab Par Ram Tapasvi Raja |\nTin Ke Kaj Sakal Tum Saja ||",
    gu: {
      sanskrit: "સબ પર રામ તપસ્વી રાજા।\nતિન કે કાજ સકલ તુમ સાજા॥",
      translation: "તપસ્વી રાજા શ્રી રામ સર્વોપરી છે, અને તેમના તમામ કાર્યો તમે પૂર્ણ શ્રદ્ધાથી સજાવ્યા."
    },
    en: {
      sanskrit: "सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥",
      translation: "Sri Rama is the king of ascetics, and you successfully arranged all his missions."
    },
    hi: {
      sanskrit: "सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥",
      translation: "तपस्वी राजा श्री राम सर्वश्रेष्ठ हैं, और आपने उनके सभी कठिन कार्यों को आसान बनाया।"
    }
  },
  {
    num: "Chaupai 28",
    translit: "Aur Manorath Jo Koi Lave |\nSoi Amit Jeevan Phal Pave ||",
    gu: {
      sanskrit: "ઔર મનોરથ જો કોઈ લાવૈ।\nસોઈ અમિત જીવન ફલ પાવૈ॥",
      translation: "તમારી પાસે જે કોઈ ઈચ્છા કે મનોરથ લઈને આવે છે, તેને અસીમ જીવનફળ પ્રાપ્ત થાય છે."
    },
    en: {
      sanskrit: "और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥",
      translation: "Whoever approaches you with any desire gains the limitless fruits of life."
    },
    hi: {
      sanskrit: "और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥",
      translation: "आपकी शरण में जो कोई भी अपनी इच्छा लेकर आता है, वह अनंत जीवन का फल प्राप्त करता है।"
    }
  },
  {
    num: "Chaupai 29",
    translit: "Charon Jug Partap Tumhara |\nHai Parasidh Jagat Ujiyara ||",
    gu: {
      sanskrit: "ચારોં જુગ પરતાપ તુમ્હારા।\nહૈ પરસિદ્ધ જગત ઉજિયારા॥",
      translation: "ચારેય યુગમાં તમારો પ્રતાપ વર્તે છે અને આખું જગત તમારા તેજથી પ્રકાશિત છે."
    },
    en: {
      sanskrit: "चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥",
      translation: "Your glory shines across all four ages, and your fame illuminates the entire universe."
    },
    hi: {
      sanskrit: "चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥",
      translation: "चारों युगों में आपका प्रताप फैला हुआ है और आपकी कीर्ति से सारा संसार आलोकित है।"
    }
  },
  {
    num: "Chaupai 30",
    translit: "Sadhu Sant Ke Tum Rakhvare |\nAsur Nikandan Ram Dulare ||",
    gu: {
      sanskrit: "સાધુ સંત કે તુમ રખવારે।\nઅસુર નિકંદન રામ દુલારે॥",
      translation: "તમે સાધુ અને સંતોના રક્ષક છો, દુષ્ટોના નાશક છો અને શ્રી રામના અત્યંત પ્રિય છો."
    },
    en: {
      sanskrit: "साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥",
      translation: "You are the protector of saints and sages, the destroyer of demons, and the beloved of Sri Rama."
    },
    hi: {
      sanskrit: "साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥",
      translation: "आप साधु-संतों के रक्षक, राक्षसों का नाश करने वाले और श्री राम के परम प्रिय हैं।"
    }
  },
  {
    num: "Chaupai 31",
    translit: "Asht Siddhi Nau Nidhi Ke Data |\nAs Var Deenh Janaki Mata ||",
    gu: {
      sanskrit: "અષ્ટ સિદ્ધિ નૌ નિધિ કે દાતા।\nઅસ બર દીન્હ જાનકી માતા॥",
      translation: "તમે અષ્ટ સિદ્ધિ અને નવ નિધિ આપનાર દાતા છો, એવા વરદાન તમને માતા જાનકીજીએ આપ્યા છે."
    },
    en: {
      sanskrit: "अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन्ह जानकी माता॥",
      translation: "Bestower of eight supernatural powers and nine types of wealth, as blessed by Mother Sita."
    },
    hi: {
      sanskrit: "अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन्ह जानकी माता॥",
      translation: "आप आठों सिद्धियों और नौ निधियों के दाता हैं, ऐसा वरदान आपको माता सीता ने दिया है।"
    }
  },
  {
    num: "Chaupai 32",
    translit: "Ram Rasayan Tumhare Pasa |\nSada Raho Raghupati Ke Dasa ||",
    gu: {
      sanskrit: "રામ રસાયન તુમ્હરે પાસા।\nસદા રહો રઘુપતિ કે દાસા॥",
      translation: "તમારી પાસે રામ નામનું રસાયણ (ભક્તિનો અમૃત) છે. તમે સદા શ્રી રઘુનાથજીના સેવક રહો છો."
    },
    en: {
      sanskrit: "राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥",
      translation: "You possess the chemical elixir of Rama's devotion. May you remain forever the humble servant of Sri Rama."
    },
    hi: {
      sanskrit: "राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥",
      translation: "आपके पास राम नाम का रसायन (अमृत) है, आप सदा श्री रामचंद्र जी के सेवक बने रहें।"
    }
  },
  {
    num: "Chaupai 33",
    translit: "Tumhare Bhajan Ram Ko Pave |\nJanam Janam Ke Dukh Bisrave ||",
    gu: {
      sanskrit: "તુમ્હરે ભજન રામ કો પાવૈ।\nજનમ જનમ કે દુખ બિસરાવૈ॥",
      translation: "તમારી ભક્તિ કરવાથી જીવ શ્રી રામચંદ્રજીને પ્રાપ્ત કરે છે અને તેના જન્મોજન્મના દુઃખો દૂર થાય છે."
    },
    en: {
      sanskrit: "तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥",
      translation: "By singing your praises, one attains Sri Rama and forgets the sorrows of countless lifetimes."
    },
    hi: {
      sanskrit: "तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥",
      translation: "आपके भजन के माध्यम से जीव श्री राम को प्राप्त करता है और जन्म-जन्मांतर के दुखों को भूल जाता है।"
    }
  },
  {
    num: "Chaupai 34",
    translit: "Anta Kaal Raghuvar Pur Jai |\nJahan Janma Hari-Bhakta Kahai ||",
    gu: {
      sanskrit: "અન્ત કાલ રઘુબર પુર જાઈ।\nજહાં જન્મ હરિભક્ત કહાઈ॥",
      translation: "અંત સમયે તે પ્રભુ ધામ (વૈકુંઠ) માં જાય છે અને જો પૃથ્વી પર જન્મ લે, તો હરિભક્ત તરીકે ઓળખાય છે."
    },
    en: {
      sanskrit: "अन्त काल रघुबर पुर जाई।\nजहाँ जन्म हरिभक्त कहाई॥",
      translation: "At the end of life, such a devotee goes to the divine abode of Sri Rama, and in subsequent births, is known as a devotee of Hari."
    },
    hi: {
      sanskrit: "अन्त काल रघुबर पुर जाई।\nजहाँ जन्म हरिभक्त कहाई॥",
      translation: "अंत समय में वह भगवान के धाम जाता है और यदि पुनः जन्म लेता है, तो हरिभक्त कहलाता है।"
    }
  },
  {
    num: "Chaupai 35",
    translit: "Aur Devta Chitta Na Dharayi |\nHanumat Sei Sarva Sukh Karayi ||",
    gu: {
      sanskrit: "ઔર દેબતા ચિત્ત ન ધરઈ।\nહનુમત સેઇ સર્બ સુખ કરઈ॥",
      translation: "અન્ય કોઈ દેવતાનું ચિંતન કર્યા વિના માત્ર હનુમાનજીની સેવા કરવાથી જ તમામ સુખોની પ્રાપ્તિ થાય છે."
    },
    en: {
      sanskrit: "और देबता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥",
      translation: "Without contemplating any other deity, one gains all happiness by serving Hanuman alone."
    },
    hi: {
      sanskrit: "और देबता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥",
      translation: "किसी अन्य देवता का चिंतन किए बिना, केवल हनुमान जी की सेवा करने से ही समस्त सुखों की प्राप्ति हो जाती है।"
    }
  },
  {
    num: "Chaupai 36",
    translit: "Sankat Katay Mitay Sab Peera |\nJo Sumiray Hanumat Balbeera ||",
    gu: {
      sanskrit: "સંકટ કટૈ મિટૈ સબ પીરા।\nજો સુમિરૈ હનુમત બલબીરા॥",
      translation: "જે કોઈ વીર હનુમાનજીનું સ્મરણ કરે છે, તેના તમામ સંકટો કપાઈ જાય છે અને બધી પીડાઓ મટી જાય છે."
    },
    en: {
      sanskrit: "संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥",
      translation: "All troubles end and all pains vanish for those who remember the mighty Hanuman."
    },
    hi: {
      sanskrit: "संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥",
      translation: "जो कोई भी बलवान हनुमान जी का स्मरण करता है, उसके सभी संकट दूर हो जाते हैं और समस्त पीड़ा समाप्त हो जाती है।"
    }
  },
  {
    num: "Chaupai 37",
    translit: "Jai Jai Jai Hanuman Gosahin |\nKripa Karahu Gurudev Ki Nahin ||",
    gu: {
      sanskrit: "જય જય જય હનુમાન ગોસાઈં।\nકૃપા કરહુ ગુરુદેવ કી નાઈં॥",
      translation: "હે સ્વામી હનુમાનજી! આપની જય હો, જય હો, જય હો! આપ ગુરુદેવની જેમ મારા પર કૃપા દ્રષ્ટિ કરો."
    },
    en: {
      sanskrit: "जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥",
      translation: "Victory, victory, victory to Lord Hanuman! Bless me with your grace like my spiritual preceptor."
    },
    hi: {
      sanskrit: "जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥",
      translation: "हे स्वामी हनुमान जी! आपकी जय हो, जय हो, जय हो! आप सद्गुरु के समान मुझ पर कृपा करें।"
    }
  },
  {
    num: "Chaupai 38",
    translit: "Jo Sat Bar Path Kar Koi |\nChhutahi Bandi Maha Sukh Hoi ||",
    gu: {
      sanskrit: "જો સત બાર પાઠ કર કોઈ।\nછૂટહિ બંદિ મહા સુખ હોઈ॥",
      translation: "જે કોઈ પણ વ્યક્તિ આ પાઠ સો વખત કરશે, તે બંધનોમાંથી મુક્ત થઈ જશે અને તેને પરમાનંદ પ્રાપ્ત થશે."
    },
    en: {
      sanskrit: "जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥",
      translation: "Whoever recites this Chalisa a hundred times is freed from bonds and gains absolute bliss."
    },
    hi: {
      sanskrit: "जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥",
      translation: "जो कोई भी इस चालीसा का सौ बार पाठ करेगा, वह बंधनों से मुक्त हो जाएगा और उसे परम सुख प्राप्त होगा।"
    }
  },
  {
    num: "Chaupai 39",
    translit: "Jo Yeh Padhay Hanuman Chalisa |\nHoy Siddhi Sakhi Gaureesa ||",
    gu: {
      sanskrit: "જો યહ પઢ઼ૈ હનુમાન ચાલીસા।\nહોય સિદ્ધ સાખી ગૌરીસા॥",
      translation: "જે કોઈ આ હનુમાન ચાલીસા વાંચશે, તેને ચોક્કસ સિદ્ધિ પ્રાપ્ત થશે, આ વાતના સાક્ષી સ્વયં ભગવાન શિવ છે."
    },
    en: {
      sanskrit: "जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्घ साखी गौरीसा॥",
      translation: "Whoever reads this Hanuman Chalisa attains spiritual perfection, with Shiva as witness."
    },
    hi: {
      sanskrit: "जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्घ साखी गौरीसा॥",
      translation: "जो कोई भी इस हनुमान चालीसा को पढ़ेगा, उसे निश्चित ही सिद्धियां प्राप्त होंगी, इसके साक्षी स्वयं भगवान शिव (गौरीश) हैं।"
    }
  },
  {
    num: "Chaupai 40",
    translit: "Tulsidas Sada Hari Chera |\nKeejay Nath Hridaya Mah Dera ||",
    gu: {
      sanskrit: "તુલસીદાસ સદા હરિ ચેરા।\nકીજૈ નાથ હૃદય મઁહ ડેરા॥",
      translation: "તુલસીદાસ હંમેશા ભગવાન હરિના સેવક છે. હે નાથ! તમે સદા મારા હૃદયમાં વાસ કરો."
    },
    en: {
      sanskrit: "तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय मँह डेरा॥",
      translation: "Tulsidas is forever the servant of Hari. O Lord, please make your dwelling in my heart."
    },
    hi: {
      sanskrit: "तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय मँह डेरा॥",
      translation: "तुलसीदास सदा श्री हरि के सेवक हैं। हे स्वामी! आप मेरे हृदय में निवास कीजिए।"
    }
  },
  {
    num: "Doha 3 (Closing)",
    translit: "Pavantanay Sankat Haran Mangal Moorti Roop |\nRam Lakhan Sita Sahit Hridaya Basahu Sur Bhoop ||",
    gu: {
      sanskrit: "પવનતનય સંકટ હરન મંગલ સૂરતિ રૂપ।\nરામ લખન સીતા સહિત હૃદય બસહુ સુર ભૂપ॥",
      translation: "હે પવનપુત્ર! આપ સંકટોને હરનારા અને મંગલ સ્વરૂપ છો. આપ શ્રી રામ, લક્ષ્મણ અને સીતાજી સહિત મારા હૃદયમાં વાસ કરો."
    },
    en: {
      sanskrit: "पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥",
      translation: "O Son of Wind, dispeller of troubles, embodiment of auspiciousness! Live in my heart forever along with Sri Rama, Lakshmana, and Mother Sita, O King of Gods."
    },
    hi: {
      sanskrit: "पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥",
      translation: "हे पवनपुत्र! आप संकटों को दूर करने वाले और मंगल रूप हैं। आप श्री राम, लक्ष्मण और सीता सहित मेरे हृदय में सदा निवास करें।"
    }
  }
];
