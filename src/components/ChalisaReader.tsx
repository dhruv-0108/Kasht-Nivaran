import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, X, Play, RotateCcw, Type, ChevronUp } from 'lucide-react';

interface Verse {
  num: string;
  sanskrit: string;
  translit: string;
  translation: string;
}

const CHALISA_VERSES: Verse[] = [
  {
    num: "Doha 1",
    sanskrit: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनऊँ रघुबर बिमल जसु जो दायकु फल चारि॥",
    translit: "Shri Guru Charan Saroj Raj Nij Manu Mukuru Sudhari |\nBaranau Raghuvar Bimal Jasu Jo Dayaku Phala Chari ||",
    translation: "Having cleansed the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure glory of Sri Ramachandra, which bestows the four fruits of life (Dharma, Artha, Kama, and Moksha)."
  },
  {
    num: "Doha 2",
    sanskrit: "बुद्धिहीन तनु जानिके सुमिरौं पवनकुमार।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥",
    translit: "Budhiheen Tanu Janike Sumirau Pavanakumar |\nBala Budhi Vidya Dehu Mohi Harahu Kalesa Bikara ||",
    translation: "Knowing myself to be ignorant, I meditate upon you, O Son of P風 (Wind). Bestow upon me strength, wisdom, and knowledge, and remove my afflictions and impurities."
  },
  {
    num: "Chaupai 1",
    sanskrit: "जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर॥",
    translit: "Jai Hanuman Gyan Gun Sagar |\nJai Kapees Tihun Lok Ujagar ||",
    translation: "Victory to Hanuman, ocean of wisdom and virtue! Victory to the Lord of monkeys, who illuminates the three worlds!"
  },
  {
    num: "Chaupai 2",
    sanskrit: "रामदूत अतुलित बल धामा।\nअंजनिपुत्र पवनसुत नामा॥",
    translit: "Ramdoot Atulit Bal Dhama |\nAnjaniputra Pavansut Nama ||",
    translation: "Messenger of Sri Rama, home of incomparable strength, son of Anjani and named the Son of Wind."
  },
  {
    num: "Chaupai 3",
    sanskrit: "महाबीर बिक्रम बजरंगी।\nकुमपति निवार सुमति के संगी॥",
    translit: "Mahaveer Vikram Bajrangi |\nKumati Nivar Sumati Ke Sangi ||",
    translation: "Great hero, possessor of immense valor, with a body strong as a thunderbolt! Dispeller of wicked thoughts and companion of the wise."
  },
  {
    num: "Chaupai 4",
    sanskrit: "कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥",
    translit: "Kanchan Varan Viraj Subesa |\nKanan Kundal Kunchit Kesa ||",
    translation: "Adorned with golden complexion and beautiful garments, wearing shiny ear rings and with curly locks."
  },
  {
    num: "Chaupai 5",
    sanskrit: "हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥",
    translit: "Hath Vajra Aur Dhvaja Viraje |\nKandhe Munj Janeu Saje ||",
    translation: "Holding a thunderbolt and a flag in your hands, and adorned with the sacred thread made of Munja grass across your shoulder."
  },
  {
    num: "Chaupai 6",
    sanskrit: "संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बंदन॥",
    translit: "Sankar Suvan Kesarinandan |\nTej Pratap Maha Jag Bandan ||",
    translation: "Incarnation of Shiva, son of Kesari! Your radiant glory is worshipped by the entire world."
  },
  {
    num: "Chaupai 7",
    sanskrit: "बिद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥",
    translit: "Vidyavan Guni Ati Chatur |\nRam Kaj Karibe Ko Aatur ||",
    translation: "Highly learned, virtuous, and exceptionally clever, you are always eager to perform the works of Sri Rama."
  },
  {
    num: "Chaupai 8",
    sanskrit: "प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥",
    translit: "Prabhu Charitra Sunibe Ko Rasiya |\nRam Lakhan Sita Man Basiya ||",
    translation: "You delight in listening to the stories of Sri Rama, and reside eternally in the hearts of Rama, Lakshmana, and Sita."
  },
  {
    num: "Chaupai 9",
    sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥",
    translit: "Sukshma Roop Dhari Siyahin Dikhava |\nBikat Roop Dhari Lanka Jarava ||",
    translation: "Assuming a microscopic form, you appeared before Sita, and assuming a colossal form, you set Lanka ablaze."
  },
  {
    num: "Chaupai 10",
    sanskrit: "भीम रूप धरि असुर सँहारे।\nरामचंद्र के काज सँवारे॥",
    translit: "Bheem Roop Dhari Asur Sanhare |\nRamachandra Ke Kaj Sanvare ||",
    translation: "Assuming a mighty warrior form, you destroyed the demons and successfully executed all missions of Sri Ramachandra."
  },
  {
    num: "Chaupai 11",
    sanskrit: "लाय सजीवन लखन जियाए।\nश्रीरघुबीर हरषि उर लाए॥",
    translit: "Laye Sajivan Lakhan Jiyaye |\nShri Raghuveer Harashi Ur Laye ||",
    translation: "Bringing the life-giving Sanjeevani herb, you saved Lakshmana. Overjoyed, Sri Rama embraced you warmly."
  },
  {
    num: "Chaupai 12",
    sanskrit: "रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥",
    translit: "Raghupati Keenhi Bahut Badai |\nTum Mama Priya Bharatahi Sama Bhai ||",
    translation: "Sri Rama praised you highly, saying: 'You are as dear to me as my own brother Bharata.'"
  },
  {
    num: "Chaupai 13",
    sanskrit: "सहस बदन तुम्हरो जस गावैं।\nअसि कहि श्रीपति कंठ लगावैं॥",
    translit: "Sahas Badan Tumharo Jas Gavain |\nAsi Kahi Shripati Kanth Lagavain ||",
    translation: "Embracing you, Sri Rama declared that the thousand-mouthed Adishesha sings your glory."
  },
  {
    num: "Chaupai 14",
    sanskrit: "सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥",
    translit: "Sanakadike Brahmadi Muneesa |\nNarad Sarad Sahit Aheesa ||",
    translation: "Sages like Sanaka, Brahma and other deities, Narada, Saraswati, and the King of Serpents sing your praises."
  },
  {
    num: "Chaupai 15",
    sanskrit: "जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सकैं कहाँ ते॥",
    translit: "Yama Kuber Digpal Jahan Te |\nKabi Kobid Kahi Sakain Kahan Te ||",
    translation: "Yama, Kubera, and the guardians of directions, together with poets and scholars, fail to describe your full glory."
  },
  {
    num: "Chaupai 16",
    sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥",
    translit: "Tum Upakar Sugreevahin Keenha |\nRam Milay Raj Pad Deenha ||",
    translation: "You rendered great service to Sugreeva by introducing him to Rama and securing his royal throne."
  },
  {
    num: "Chaupai 17",
    sanskrit: "तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना॥",
    translit: "Tumharo Mantra Vibheeshan Mana |\nLankesvar Bhaye Sab Jag Jana ||",
    translation: "Vibhishana followed your counsel, and the whole world knows he became the King of Lanka."
  },
  {
    num: "Chaupai 18",
    sanskrit: "जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥",
    translit: "Jug Sahasra Jojan Par Bhanu |\nLeelyo Tahi Madhur Phal Janu ||",
    translation: "Though the Sun was thousands of miles away, you flew and swallowed it, thinking it to be a sweet fruit."
  },
  {
    num: "Chaupai 19",
    sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥",
    translit: "Prabhu Mudrika Meli Mukh Maheen |\nJaladhi Langhi Gaye Acharaj Naheen ||",
    translation: "Carrying Lord Rama's signet ring in your mouth, you leaped across the ocean—no wonder it was easy for you."
  },
  {
    num: "Chaupai 20",
    sanskrit: "दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥",
    translit: "Durgam Kaj Jagat Ke Jete |\nSugam Anugrah Tumhare Tete ||",
    translation: "All difficult tasks in this world are rendered easy by your divine benevolence."
  },
  {
    num: "Chaupai 21",
    sanskrit: "राम दुआरे तुम रखवारे।\nहोस न आग्या बिनु पैसारे॥",
    translit: "Ram Duare Tum Rakhvare |\nHot Na Agya Binu Paisare ||",
    translation: "You are the gatekeeper of Lord Rama's court. No one can enter without your permission."
  },
  {
    num: "Chaupai 22",
    sanskrit: "सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डर ना॥",
    translit: "Sab Sukh Lahai Tumhari Sarna |\nTum Rakshak Kahu Ko Dar Na ||",
    translation: "All happiness is attained in your shelter. When you are the protector, what is there to fear?"
  },
  {
    num: "Chaupai 23",
    sanskrit: "आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥",
    translit: "Aapan Tej Samharo Aapay |\nTeenon Lok Hank Te Kanpay ||",
    translation: "Only you can control your own radiant energy. All three worlds tremble at your thunderous roar."
  },
  {
    num: "Chaupai 24",
    sanskrit: "भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥",
    translit: "Bhoot Pisach Nikat Nahin Aave |\nMahaveer Jab Naam Sunave ||",
    translation: "Ghosts and evil spirits do not dare come near when the name of Mahaveer is chanted."
  },
  {
    num: "Chaupai 25",
    sanskrit: "नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥",
    translit: "Nasay Rog Haray Sab Peera |\nJapat Nirantar Hanumat Beera ||",
    translation: "All diseases vanish and all pains cease by chanting continuously the name of the brave Lord Hanuman."
  },
  {
    num: "Chaupai 26",
    sanskrit: "संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥",
    translit: "Sankat Te Hanuman Chhudave |\nMan Kram Bachan Dhyan Jo Lave ||",
    translation: "Hanuman releases from all troubles those who meditate on him in mind, action, and speech."
  },
  {
    num: "Chaupai 27",
    sanskrit: "सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥",
    translit: "Sab Par Ram Tapasvi Raja |\nTin Ke Kaj Sakal Tum Saja ||",
    translation: "Sri Rama is the king of ascetics, and you successfully arranged all his missions."
  },
  {
    num: "Chaupai 28",
    sanskrit: "और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥",
    translit: "Aur Manorath Jo Koi Lave |\nSoi Amit Jeevan Phal Pave ||",
    translation: "Whoever approaches you with any desire gains the limitless fruits of life."
  },
  {
    num: "Chaupai 29",
    sanskrit: "चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥",
    translit: "Charon Jug Partap Tumhara |\nHai Parasidh Jagat Ujiyara ||",
    translation: "Your glory shines across all four ages, and your fame illuminates the entire universe."
  },
  {
    num: "Chaupai 30",
    sanskrit: "साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥",
    translit: "Sadhu Sant Ke Tum Rakhvare |\nAsur Nikandan Ram Dulare ||",
    translation: "You are the protector of saints and sages, the destroyer of demons, and the beloved of Sri Rama."
  },
  {
    num: "Chaupai 31",
    sanskrit: "अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन्ह जानकी माता॥",
    translit: "Asht Siddhi Nau Nidhi Ke Data |\nAs Var Deenh Janaki Mata ||",
    translation: "Bestower of eight supernatural powers and nine types of wealth, as blessed by Mother Sita."
  },
  {
    num: "Chaupai 32",
    sanskrit: "राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥",
    translit: "Ram Rasayan Tumhare Pasa |\nSada Raho Raghupati Ke Dasa ||",
    translation: "You possess the chemical elixir of Rama's devotion. May you remain forever the humble servant of Sri Rama."
  },
  {
    num: "Chaupai 33",
    sanskrit: "तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥",
    translit: "Tumhare Bhajan Ram Ko Pave |\nJanam Janam Ke Dukh Bisrave ||",
    translation: "By singing your praises, one attains Sri Rama and forgets the sorrows of countless lifetimes."
  },
  {
    num: "Chaupai 34",
    sanskrit: "अन्त काल रघुबर पुर जाई।\nजहाँ जन्म हरिभक्त कहाई॥",
    translit: "Anta Kaal Raghuvar Pur Jai |\nJahan Janma Hari-Bhakta Kahai ||",
    translation: "At the end of life, such a devotee goes to the divine abode of Sri Rama, and in subsequent births, is known as a devotee of Hari."
  },
  {
    num: "Chaupai 35",
    sanskrit: "और देबता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई॥",
    translit: "Aur Devta Chitta Na Dharayi |\nHanumat Sei Sarva Sukh Karayi ||",
    translation: "Without contemplating any other deity, one gains all happiness by serving Hanuman alone."
  },
  {
    num: "Chaupai 36",
    sanskrit: "संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥",
    translit: "Sankat Katay Mitay Sab Peera |\nJo Sumiray Hanumat Balbeera ||",
    translation: "All troubles end and all pains vanish for those who remember the mighty Hanuman."
  },
  {
    num: "Chaupai 37",
    sanskrit: "जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥",
    translit: "Jai Jai Jai Hanuman Gosahin |\nKripa Karahu Gurudev Ki Nahin ||",
    translation: "Victory, victory, victory to Lord Hanuman! Bless me with your grace like my spiritual preceptor."
  },
  {
    num: "Chaupai 38",
    sanskrit: "जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥",
    translit: "Jo Sat Bar Path Kar Koi |\nChhutahi Bandi Maha Sukh Hoi ||",
    translation: "Whoever recites this Chalisa a hundred times is freed from bonds and gains absolute bliss."
  },
  {
    num: "Chaupai 39",
    sanskrit: "जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्घ साखी गौरीसा॥",
    translit: "Jo Yeh Padhay Hanuman Chalisa |\nHoy Siddhi Sakhi Gaureesa ||",
    translation: "Whoever reads this Hanuman Chalisa attains spiritual perfection, with Shiva as witness."
  },
  {
    num: "Chaupai 40",
    sanskrit: "तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय मँह डेरा॥",
    translit: "Tulsidas Sada Hari Chera |\nKeejay Nath Hridaya Mah Dera ||",
    translation: "Tulsidas is forever the servant of Hari. O Lord, please make your dwelling in my heart."
  },
  {
    num: "Doha 3 (Closing)",
    sanskrit: "पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥",
    translit: "Pavantanay Sankat Haran Mangal Moorti Roop |\nRam Lakhan Sita Sahit Hridaya Basahu Sur Bhoop ||",
    translation: "O Son of Wind, dispeller of troubles, embodiment of auspiciousness! Live in my heart forever along with Sri Rama, Lakshmana, and Mother Sita, O King of Gods."
  }
];

interface ChalisaReaderProps {
  isOpen: boolean;
  onClose: () => void;
  onLogRecitation?: () => void;
}

export const ChalisaReader: React.FC<ChalisaReaderProps> = ({ isOpen, onClose, onLogRecitation }) => {
  const [activeVerseIdx, setActiveVerseIdx] = useState<number | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);

  // Stop auto-scroll when closing
  useEffect(() => {
    if (!isOpen) {
      stopAutoScroll();
      setActiveVerseIdx(null);
    }
  }, [isOpen]);

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  };

  const startAutoScroll = () => {
    setIsAutoScrolling(true);
    if (scrollContainerRef.current) {
      scrollIntervalRef.current = window.setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop += 1;
        }
      }, 50); // Speed of scroll
    }
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const handleLoggedRecitation = () => {
    if (onLogRecitation) {
      onLogRecitation();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/35 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
      {/* Tap outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Drawer (Minimalist Editorial Book style) */}
      <div className="relative w-full max-w-xl bg-[#FAFAFA] h-full shadow-2xl flex flex-col justify-between border-l border-black/[0.05] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-black/[0.05] bg-white flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-[#B89253]" />
            <h2 className="font-serif text-xl font-bold text-[#111111]">Hanuman Chalisa</h2>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Font size switcher */}
            <button
              onClick={() => {
                if (fontSize === 'sm') setFontSize('base');
                else if (fontSize === 'base') setFontSize('lg');
                else setFontSize('sm');
              }}
              className="p-2 border border-black/[0.05] hover:bg-black/5 rounded-full text-[#111111]/60 hover:text-[#111111] transition-smooth"
              title="Change Font Size"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 border border-black/[0.05] hover:bg-black/5 rounded-full text-[#111111]/60 hover:text-[#111111] transition-smooth"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action / Auto-scroll Controls */}
        <div className="px-5 py-3 border-b border-black/[0.03] bg-[#FAF8F5]/80 flex justify-between items-center text-xs font-semibold text-[#111111]/70">
          <div className="flex space-x-2">
            <button
              onClick={toggleAutoScroll}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg border transition-smooth ${isAutoScrolling ? 'bg-black text-white border-black' : 'bg-white border-black/5 hover:border-black/15'}`}
            >
              <Play className={`w-3 h-3 ${isAutoScrolling ? 'fill-white' : ''}`} />
              <span>{isAutoScrolling ? 'Pause Scroll' : 'Auto Scroll'}</span>
            </button>
            
            <button
              onClick={() => {
                stopAutoScroll();
                if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                setActiveVerseIdx(null);
              }}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border bg-white border-black/5 hover:border-black/15 transition-smooth"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {onLogRecitation && (
            <button
              onClick={handleLoggedRecitation}
              className="px-4 py-1.5 bg-[#B89253]/15 text-[#B89253] border border-[#B89253]/20 rounded-full font-bold uppercase tracking-wider text-[9px] hover:bg-[#B89253] hover:text-white transition-smooth"
            >
              Complete Recitation
            </button>
          )}
        </div>

        {/* Scrollable Verses Column */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar"
        >
          {CHALISA_VERSES.map((verse, idx) => {
            const isActive = activeVerseIdx === idx;
            let textClass = 'text-base';
            if (fontSize === 'sm') textClass = 'text-sm';
            if (fontSize === 'lg') textClass = 'text-lg';

            return (
              <div
                key={verse.num}
                onClick={() => {
                  stopAutoScroll();
                  setActiveVerseIdx(isActive ? null : idx);
                }}
                className={`p-4 rounded-xl border transition-smooth cursor-pointer ${isActive ? 'bg-white border-[#B89253] shadow-premium-hover scale-[1.01]' : 'bg-[#FAF8F5]/40 border-transparent hover:border-black/[0.04] hover:bg-white hover:shadow-xs'}`}
              >
                {/* Verse Number tag */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#B89253]">
                    {verse.num}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B89253] animate-ping" />
                  )}
                </div>

                {/* Sanskrit Text */}
                <p 
                  className={`font-serif font-semibold text-[#111111] leading-relaxed mb-2 whitespace-pre-line text-balance text-center ${fontSize === 'lg' ? 'text-xl' : fontSize === 'sm' ? 'text-base' : 'text-lg'}`}
                >
                  {verse.sanskrit}
                </p>

                {/* Transliteration */}
                <p 
                  className="text-xs text-[#111111]/50 leading-relaxed text-center mb-3 font-medium whitespace-pre-line italic"
                >
                  {verse.translit}
                </p>

                {/* Translation (expanding on click) */}
                <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100 mt-3 pt-3 border-t border-black/[0.04]' : 'max-h-0 opacity-0'}`}>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40 block mb-1">
                    English Translation
                  </span>
                  <p className="text-xs text-[#111111]/80 leading-relaxed font-medium">
                    {verse.translation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Top Floating Helper inside scrolling pane */}
        <div className="absolute bottom-5 right-5 pointer-events-none">
          <button
            onClick={() => {
              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
            }}
            className="p-2 rounded-full bg-white border border-black/10 text-black/60 shadow-md hover:text-black pointer-events-auto active:scale-95 transition-smooth"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChalisaReader;
