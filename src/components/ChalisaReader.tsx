import React, { useState, useRef } from 'react';
import { BookOpen, Play, RotateCcw, Type, ChevronUp, Info } from 'lucide-react';

interface Verse {
  num: string;
  sanskrit: string;
  translit: string;
  translation: string;
}

const CHALISA_VERSES: Verse[] = [
  {
    num: "Doha 1",
    sanskrit: "श्रीगुरु चरन सरोज रज निજ મનુ મુકુરુ સુધારિ।\nબરનઊઁ રઘુબર બિમલ જસુ જો દાયકુ ફલ ચારિ॥",
    translit: "Shri Guru Charan Saroj Raj Nij Manu Mukuru Sudhari |\nBaranau Raghuvar Bimal Jasu Jo Dayaku Phala Chari ||",
    translation: "Having cleansed the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure glory of Sri Ramachandra, which bestows the four fruits of life (Dharma, Artha, Kama, and Moksha)."
  },
  {
    num: "Doha 2",
    sanskrit: "બુદ્ધિહીન તનુ જાનિકે સુમિરૌં પવનકુમાર।\nબલ બુધિ બિદ્યા દેહુ મોહિં હરહુ કલેસ બિકાર॥",
    translit: "Budhiheen Tanu Janike Sumirau Pavanakumar |\nBala Budhi Vidya Dehu Mohi Harahu Kalesa Bikara ||",
    translation: "Knowing myself to be ignorant, I meditate upon you, O Son of Vayu (Wind). Bestow upon me strength, wisdom, and knowledge, and remove my afflictions and impurities."
  },
  {
    num: "Chaupai 1",
    sanskrit: "જય હનુમાન જ્ઞાન ગુન સાગર।\nજય કપીસ તિહું લોક ઉજાગર॥",
    translit: "Jai Hanuman Gyan Gun Sagar |\nJai Kapees Tihun Lok Ujagar ||",
    translation: "Victory to Hanuman, ocean of wisdom and virtue! Victory to the Lord of monkeys, who illuminates the three worlds!"
  },
  {
    num: "Chaupai 2",
    sanskrit: "રામદૂત અતુલિત બલ ધામા।\nઅંજનિપુત્ર પવનસુત નામા॥",
    translit: "Ramdoot Atulit Bal Dhama |\nAnjaniputra Pavansut Nama ||",
    translation: "Messenger of Sri Rama, home of incomparable strength, son of Anjani and named the Son of Wind."
  },
  {
    num: "Chaupai 3",
    sanskrit: "મહાવીર બિક્રમ બજરંગી।\nકુમતિ નિવાર સુમતિ કે સંગી॥",
    translit: "Mahaveer Vikram Bajrangi |\nKumati Nivar Sumati Ke Sangi ||",
    translation: "Great hero, possessor of immense valor, with a body strong as a thunderbolt! Dispeller of wicked thoughts and companion of the wise."
  },
  {
    num: "Chaupai 4",
    sanskrit: "કંચન બરન બિરાજ સુબેસા।\nકાનન કુંડલ કુંચિત કેસા॥",
    translit: "Kanchan Varan Viraj Subesa |\nKanan Kundal Kunchit Kesa ||",
    translation: "Adorned with golden complexion and beautiful garments, wearing shiny ear rings and with curly locks."
  },
  {
    num: "Chaupai 5",
    sanskrit: "હાથ બજ્ર ઔ ધ્વજા બિરાજૈ।\nકાંધે મૂંજ જનેઊ સાજૈ॥",
    translit: "Hath Vajra Aur Dhvaja Viraje |\nKandhe Munj Janeu Saje ||",
    translation: "Holding a thunderbolt and a flag in your hands, and adorned with the sacred thread made of Munja grass across your shoulder."
  },
  {
    num: "Chaupai 6",
    sanskrit: "સંકર સુવન કેસરીનંદન।\nતેજ પ્રતાપ મહા જગ બંદન॥",
    translit: "Sankar Suvan Kesarinandan |\nTej Pratap Maha Jag Bandan ||",
    translation: "Incarnation of Shiva, son of Kesari! Your radiant glory is worshipped by the entire world."
  },
  {
    num: "Chaupai 7",
    sanskrit: "બિદ્યાવાન ગુની અતિ ચાતુર।\nરામ કાજ કરિબે કો આતુર॥",
    translit: "Vidyavan Guni Ati Chatur |\nRam Kaj Karibe Ko Aatur ||",
    translation: "Highly learned, virtuous, and exceptionally clever, you are always eager to perform the works of Sri Rama."
  },
  {
    num: "Chaupai 8",
    sanskrit: "પ્રભુ ચરિત્ર સુનિબે કો રસિયા।\nરામ લખન સીતા મન બસિયા॥",
    translit: "Prabhu Charitra Sunibe Ko Rasiya |\nRam Lakhan Sita Man Basiya ||",
    translation: "You delight in listening to the stories of Sri Rama, and reside eternally in the hearts of Rama, Lakshmana, and Sita."
  },
  {
    num: "Chaupai 9",
    sanskrit: "સૂક્ષ્મ રૂપ ધરિ સિયહિં દિખાવા।\nબિકટ રૂપ ધરિ લંક જરાવા॥",
    translit: "Sukshma Roop Dhari Siyahin Dikhava |\nBikat Roop Dhari Lanka Jarava ||",
    translation: "Assuming a microscopic form, you appeared before Sita, and assuming a colossal form, you set Lanka ablaze."
  },
  {
    num: "Chaupai 10",
    sanskrit: "ભીમ રૂપ ધરિ અસુર સંહારે।\nરામચંદ્ર કે કાજ સવારે॥",
    translit: "Bheem Roop Dhari Asur Sanhare |\nRamachandra Ke Kaj Sanvare ||",
    translation: "Assuming a mighty warrior form, you destroyed the demons and successfully executed all missions of Sri Ramachandra."
  },
  {
    num: "Chaupai 11",
    sanskrit: "લાય સજીવન લખન જિયાએ।\nશ્રીરઘુબીર હરષિ ઉર લાએ॥",
    translit: "Laye Sajivan Lakhan Jiyaye |\nShri Raghuveer Harashi Ur Laye ||",
    translation: "Bringing the life-giving Sanjeevani herb, you saved Lakshmana. Overjoyed, Sri Rama embraced you warmly."
  },
  {
    num: "Chaupai 12",
    sanskrit: "રઘુપતિ કીન્હી બહુત બડ઼ાઈ।\nતુમ મમ પ્રિય ભરતહિ સમ ભાઈ॥",
    translit: "Raghupati Keenhi Bahut Badai |\nTum Mama Priya Bharatahi Sama Bhai ||",
    translation: "Sri Rama praised you highly, saying: 'You are as dear to me as my own brother Bharata.'"
  },
  {
    num: "Chaupai 13",
    sanskrit: "સહસ બદન તુમ્હરો જસ ગાવૈં।\nઅસિ કહિ શ્રીપતિ કંઠ લગાવૈં॥",
    translit: "Sahas Badan Tumharo Jas Gavain |\nAsi Kahi Shripati Kanth Lagavain ||",
    translation: "Embracing you, Sri Rama declared that the thousand-mouthed Adishesha sings your glory."
  },
  {
    num: "Chaupai 14",
    sanskrit: "સનકાદિક બ્રહ્માદિ મુનીસા।\nનારદ સારદ સહિત અહીસા॥",
    translit: "Sanakadike Brahmadi Muneesa |\nNarad Sarad Sahit Aheesa ||",
    translation: "Sages like Sanaka, Brahma and other deities, Narada, Saraswati, and the King of Serpents sing your praises."
  },
  {
    num: "Chaupai 15",
    sanskrit: "જમ કુબેર દિગપાલ જહાં તે।\nકબિ કોબિદ કહિ સકૈં કહાં તે॥",
    translit: "Yama Kuber Digpal Jahan Te |\nKabi Kobid Kahi Sakain Kahan Te ||",
    translation: "Yama, Kubera, and the guardians of directions, together with poets and scholars, fail to describe your full glory."
  },
  {
    num: "Chaupai 16",
    sanskrit: "તુમ ઉપકાર સુગ્રીવહિં કીન્હા।\nરામ મિલાય રાજ પદ દીન્હા॥",
    translit: "Tum Upakar Sugreevahin Keenha |\nRam Milay Raj Pad Deenha ||",
    translation: "You rendered great service to Sugreeva by introducing him to Rama and securing his royal throne."
  },
  {
    num: "Chaupai 17",
    sanskrit: "તુમ્હરો મંત્ર બિભીષન માના।\nલંકેસ્વર ભે સબ જગ જાના॥",
    translit: "Tumharo Mantra Vibheeshan Mana |\nLankesvar Bhaye Sab Jag Jana ||",
    translation: "Vibhishana followed your counsel, and the whole world knows he became the King of Lanka."
  },
  {
    num: "Chaupai 18",
    sanskrit: "જુગ સહસ્ર જોજન પર ભાનૂ।\nલીલ્યો તાહિ મધુર ફલ જાનૂ॥",
    translit: "Jug Sahasra Jojan Par Bhanu |\nLeelyo Tahi Madhur Phal Janu ||",
    translation: "Though the Sun was thousands of miles away, you flew and swallowed it, thinking it to be a sweet fruit."
  },
  {
    num: "Chaupai 19",
    sanskrit: "પ્રભુ મુદ્રિકા મેલિ મુખ માહીં।\nજલધિ લાંધિ ગયે અચરજ નાહીં॥",
    translit: "Prabhu Mudrika Meli Mukh Maheen |\nJaladhi Langhi Gaye Acharaj Naheen ||",
    translation: "Carrying Lord Rama's signet ring in your mouth, you leaped across the ocean—no wonder it was easy for you."
  },
  {
    num: "Chaupai 20",
    sanskrit: "દુર્ગમ કાજ જગત કે જેતે।\nસુગમ અનુગ્રહ તુમ્હરે તેતે॥",
    translit: "Durgam Kaj Jagat Ke Jete |\nSugam Anugrah Tumhare Tete ||",
    translation: "All difficult tasks in this world are rendered easy by your divine benevolence."
  },
  {
    num: "Chaupai 21",
    sanskrit: "રામ દુઆરે તુમ રખવારે।\nહોત ન આજ્ઞા બિનુ પૈસારે॥",
    translit: "Ram Duare Tum Rakhvare |\nHot Na Agya Binu Paisare ||",
    translation: "You are the gatekeeper of Lord Rama's court. No one can enter without your permission."
  },
  {
    num: "Chaupai 22",
    sanskrit: "સબ સુખ લહૈ તુમ્હારી સરના।\nતુમ રક્ષક કાહૂ કો ડર ના॥",
    translit: "Sab Sukh Lahai Tumhari Sarna |\nTum Rakshak Kahu Ko Dar Na ||",
    translation: "All happiness is attained in your shelter. When you are the protector, what is there to fear?"
  },
  {
    num: "Chaupai 23",
    sanskrit: "આપન તેજ સમ્હારો આપૈ।\nતીનોં લોક હાંક તેં કાંપૈ॥",
    translit: "Aapan Tej Samharo Aapay |\nTeenon Lok Hank Te Kanpay ||",
    translation: "Only you can control your own radiant energy. All three worlds tremble at your thunderous roar."
  },
  {
    num: "Chaupai 24",
    sanskrit: "ભૂત પિસાચ નિકટ નહિં આવૈ।\nમહાવીર જબ નામ સુનાવૈ॥",
    translit: "Bhoot Pisach Nikat Nahin Aave |\nMahaveer Jab Naam Sunave ||",
    translation: "Ghosts and evil spirits do not dare come near when the name of Mahaveer is chanted."
  },
  {
    num: "Chaupai 25",
    sanskrit: "નાસૈ રોગ હરૈ સબ પીરા।\nજપત નિરંતર હનુમત બીરા॥",
    translit: "Nasay Rog Haray Sab Peera |\nJapat Nirantar Hanumat Beera ||",
    translation: "All diseases vanish and all pains cease by chanting continuously the name of the brave Lord Hanuman."
  },
  {
    num: "Chaupai 26",
    sanskrit: "સંકટ તેં હનુમાન છુડ઼ાવૈ।\nમન ક્રમ બચન ધ્યાન જો લાવૈ॥",
    translit: "Sankat Te Hanuman Chhudave |\nMan Kram Bachan Dhyan Jo Lave ||",
    translation: "Hanuman releases from all troubles those who meditate on him in mind, action, and speech."
  },
  {
    num: "Chaupai 27",
    sanskrit: "સબ પર રામ તપસ્વી રાજા।\nતિન કે કાજ સકલ તુમ સાજા॥",
    translit: "Sab Par Ram Tapasvi Raja |\nTin Ke Kaj Sakal Tum Saja ||",
    translation: "Sri Rama is the king of ascetics, and you successfully arranged all his missions."
  },
  {
    num: "Chaupai 28",
    sanskrit: "ઔર મનોરથ જો કોઈ લાવૈ।\nસોઈ અમિત જીવન ફલ પાવૈ॥",
    translit: "Aur Manorath Jo Koi Lave |\nSoi Amit Jeevan Phal Pave ||",
    translation: "Whoever approaches you with any desire gains the limitless fruits of life."
  },
  {
    num: "Chaupai 29",
    sanskrit: "ચારોં જુગ પરતાપ તુમ્હારા।\nહૈ પરસિદ્ધ જગત ઉજિયારા॥",
    translit: "Charon Jug Partap Tumhara |\nHai Parasidh Jagat Ujiyara ||",
    translation: "Your glory shines across all four ages, and your fame illuminates the entire universe."
  },
  {
    num: "Chaupai 30",
    sanskrit: "સાધુ સંત કે તુમ રખવારે।\nઅસુર નિકંદન રામ દુલારે॥",
    translit: "Sadhu Sant Ke Tum Rakhvare |\nAsur Nikandan Ram Dulare ||",
    translation: "You are the protector of saints and sages, the destroyer of demons, and the beloved of Sri Rama."
  },
  {
    num: "Chaupai 31",
    sanskrit: "અષ્ટ સિદ્ધિ નૌ નિધિ કે દાતા।\nઅસ બર દીન્હ જાનકી માતા॥",
    translit: "Asht Siddhi Nau Nidhi Ke Data |\nAs Var Deenh Janaki Mata ||",
    translation: "Bestower of eight supernatural powers and nine types of wealth, as blessed by Mother Sita."
  },
  {
    num: "Chaupai 32",
    sanskrit: "રામ રસાયન તુમ્હરે પાસા।\nસદા રહો રઘુપતિ કે દાસા॥",
    translit: "Ram Rasayan Tumhare Pasa |\nSada Raho Raghupati Ke Dasa ||",
    translation: "You possess the chemical elixir of Rama's devotion. May you remain forever the humble servant of Sri Rama."
  },
  {
    num: "Chaupai 33",
    sanskrit: "તુમ્હરે ભજન રામ કો પાવૈ।\nજનમ જનમ કે દુખ બિસરાવૈ॥",
    translit: "Tumhare Bhajan Ram Ko Pave |\nJanam Janam Ke Dukh Bisrave ||",
    translation: "By singing your praises, one attains Sri Rama and forgets the sorrows of countless lifetimes."
  },
  {
    num: "Chaupai 34",
    sanskrit: "અન્ત કાલ રઘુબર પુર જાઈ।\nજહાં જન્મ હરિભક્ત કહાઈ॥",
    translit: "Anta Kaal Raghuvar Pur Jai |\nJahan Janma Hari-Bhakta Kahai ||",
    translation: "At the end of life, such a devotee goes to the divine abode of Sri Rama, and in subsequent births, is known as a devotee of Hari."
  },
  {
    num: "Chaupai 35",
    sanskrit: "ઔર દેબતા ચિત્ત ન ધરઈ।\nહનુમત સેઇ સર્બ સુખ કરઈ॥",
    translit: "Aur Devta Chitta Na Dharayi |\nHanumat Sei Sarva Sukh Karayi ||",
    translation: "Without contemplating any other deity, one gains all happiness by serving Hanuman alone."
  },
  {
    num: "Chaupai 36",
    sanskrit: "સંકટ કટૈ મિટૈ સબ પીરા।\nજો સુમિરૈ હનુમત બલબીરા॥",
    translit: "Sankat Katay Mitay Sab Peera |\nJo Sumiray Hanumat Balbeera ||",
    translation: "All troubles end and all pains vanish for those who remember the mighty Hanuman."
  },
  {
    num: "Chaupai 37",
    sanskrit: "જય જય જય હનુમાન ગોસાઈં।\nકૃપા કરહુ ગુરુદેવ કી નાઈં॥",
    translit: "Jai Jai Jai Hanuman Gosahin |\nKripa Karahu Gurudev Ki Nahin ||",
    translation: "Victory, victory, victory to Lord Hanuman! Bless me with your grace like my spiritual preceptor."
  },
  {
    num: "Chaupai 38",
    sanskrit: "જો સત બાર પાઠ કર કોઈ।\nછૂટહિ બંદિ મહા સુખ હોઈ॥",
    translit: "Jo Sat Bar Path Kar Koi |\nChhutahi Bandi Maha Sukh Hoi ||",
    translation: "Whoever recites this Chalisa a hundred times is freed from bonds and gains absolute bliss."
  },
  {
    num: "Chaupai 39",
    sanskrit: "જો યહ પઢ઼ૈ હનુમાન ચાલીસા।\nહોય સિદ્ધ સાખી ગૌરીસા॥",
    translit: "Jo Yeh Padhay Hanuman Chalisa |\nHoy Siddhi Sakhi Gaureesa ||",
    translation: "Whoever reads this Hanuman Chalisa attains spiritual perfection, with Shiva as witness."
  },
  {
    num: "Chaupai 40",
    sanskrit: "તુલસીદાસ સદા હરિ ચેરા।\nકીજૈ નાથ હૃદય મઁહ ડેરા॥",
    translit: "Tulsidas Sada Hari Chera |\nKeejay Nath Hridaya Mah Dera ||",
    translation: "Tulsidas is forever the servant of Hari. O Lord, please make your dwelling in my heart."
  },
  {
    num: "Doha 3 (Closing)",
    sanskrit: "પવનતનય સંકટ હરન મંગલ સૂરતિ રૂપ।\nરામ લખન સીતા સહિત હૃદય બસહુ સુર ભૂપ॥",
    translit: "Pavantanay Sankat Haran Mangal Moorti Roop |\nRam Lakhan Sita Sahit Hridaya Basahu Sur Bhoop ||",
    translation: "O Son of Wind, dispeller of troubles, embodiment of auspiciousness! Live in my heart forever along with Sri Rama, Lakshmana, and Mother Sita, O King of Gods."
  }
];

export const ChalisaReader: React.FC = () => {
  const [activeVerseIdx, setActiveVerseIdx] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg');
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);

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
      }, 45);
    }
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const activeVerse = CHALISA_VERSES[activeVerseIdx];

  return (
    <section style={{
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '8px 0',
    }}>
      {/* Controls Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(244, 236, 216, 0.4)',
        padding: '12px 20px',
        borderRadius: '12px',
        border: '1px solid rgba(212, 149, 10, 0.2)',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} style={{ color: 'var(--sindoor)', marginTop: '2px' }} />
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--stone)' }}>Hanuman Chalisa Reader</span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Play/Pause */}
          <button
            onClick={toggleAutoScroll}
            style={{
              padding: '6px 14px',
              backgroundColor: isAutoScrolling ? 'var(--sindoor)' : 'transparent',
              border: '1.5px solid var(--sindoor)',
              color: isAutoScrolling ? '#fff' : 'var(--sindoor)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Play size={12} fill={isAutoScrolling ? '#fff' : 'transparent'} />
            {isAutoScrolling ? 'Pause' : 'Auto Scroll'}
          </button>

          {/* Reset */}
          <button
            onClick={() => {
              stopAutoScroll();
              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
              setActiveVerseIdx(0);
            }}
            style={{
              padding: '6px 12px',
              background: 'transparent',
              border: '1.5px solid var(--stone)',
              color: 'var(--stone)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RotateCcw size={12} />
            Reset
          </button>

          {/* Font Size Toggle */}
          <button
            onClick={() => {
              if (fontSize === 'base') setFontSize('lg');
              else if (fontSize === 'lg') setFontSize('xl');
              else setFontSize('base');
            }}
            style={{
              padding: '6px 10px',
              background: 'transparent',
              border: '1.5px solid var(--stone)',
              color: 'var(--stone)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <Type size={12} style={{ marginRight: '4px' }} />
            {fontSize.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Main Dual Grid View */}
      <div className="chalisa-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '24px',
        alignItems: 'stretch',
        minHeight: '480px',
      }}>
        {/* Left Side: Scrollable Verses */}
        <div 
          ref={scrollContainerRef}
          style={{
            maxHeight: '520px',
            overflowY: 'auto',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
          className="custom-scrollbar"
        >
          {CHALISA_VERSES.map((verse, idx) => {
            const isActive = activeVerseIdx === idx;
            return (
              <div
                key={verse.num}
                onClick={() => {
                  stopAutoScroll();
                  setActiveVerseIdx(idx);
                }}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: isActive ? '1.5px solid var(--sindoor)' : '1px dashed rgba(212, 149, 10, 0.25)',
                  background: isActive ? 'rgba(212, 149, 10, 0.06)' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(212, 149, 10, 0.08)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--marigold)', letterSpacing: '0.08em' }}>
                    {verse.num.toUpperCase()}
                  </span>
                  {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--sindoor)' }} />}
                </div>

                <p style={{
                  fontSize: fontSize === 'base' ? '1rem' : fontSize === 'lg' ? '1.15rem' : '1.3rem',
                  fontWeight: 650,
                  color: 'var(--drapery)',
                  textAlign: 'center',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line',
                  margin: '0 0 6px 0',
                }}>
                  {verse.sanskrit}
                </p>

                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--stone-lt)',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  margin: 0,
                }}>
                  {verse.translit}
                </p>

                {/* Mobile-only inline translation */}
                <div className="mobile-meaning" style={{
                  display: 'none',
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(212, 149, 10, 0.15)',
                }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--sindoor)', display: 'block', marginBottom: '4px' }}>
                    ENGLISH MEANING
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--stone)', margin: 0, lineHeight: '1.4' }}>
                    {verse.translation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Visual Meaning Card (Sticky / Desktop only) */}
        <div className="desktop-meaning-panel" style={{
          position: 'sticky',
          top: '20px',
          height: 'fit-content',
        }}>
          <div className="temple-frame" style={{
            padding: '24px',
            background: 'rgba(244, 236, 216, 0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
              <Info size={16} style={{ color: 'var(--sindoor)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--sindoor)', letterSpacing: '0.08em' }}>
                VERSE MEANING · {activeVerse.num.toUpperCase()}
              </span>
            </div>

            <div style={{
              width: '40px',
              height: '1.5px',
              backgroundColor: 'var(--marigold)',
              margin: '0 auto'
            }} />

            <div style={{
              padding: '12px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(212, 149, 10, 0.1)',
            }}>
              <p style={{
                fontSize: '1rem',
                fontWeight: 650,
                color: 'var(--drapery)',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
                margin: '0 0 6px 0'
              }}>
                {activeVerse.sanskrit}
              </p>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--stone)',
              lineHeight: '1.6',
              textAlign: 'justify',
              margin: 0,
            }}>
              {activeVerse.translation}
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Helper inside list */}
      <div style={{
        alignSelf: 'center',
        marginTop: '10px'
      }}>
        <button
          onClick={() => {
            if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
          }}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(212, 149, 10, 0.3)',
            color: 'var(--stone)',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ChevronUp size={12} />
          Back to Top
        </button>
      </div>

      {/* Media queries inject for responsive layout */}
      <style>{`
        @media (max-width: 768px) {
          .chalisa-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-meaning-panel {
            display: none !important;
          }
          .mobile-meaning {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ChalisaReader;
