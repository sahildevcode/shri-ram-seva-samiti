import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  FastForward, 
  BookOpen, 
  Sparkles, 
  Scroll, 
  Volume2, 
  CheckCircle2, 
  Users, 
  Flame, 
  Calendar 
} from 'lucide-react';

export default function TypewriterStory({ lang = 'hi' }) {
  const storyLines = [
    { type: 'header', text: 'छतरपुर की रामनवमी की शोभायात्रा' },
    { type: 'authors', text: 'आलेख एवं ऐतिहासिक संकलन: पंकज पहारिया एवं राकेश तिवारी' },
    { type: 'p', text: 'भगवान राम केवल एक नाम ही नहीं, बल्कि हमारे देश की आत्मा हैं।' },
    { type: 'p', text: 'वे जन-जन के कंठहार हैं, मनप्राण हैं और हमारे जीवन का पावन आधार हैं।' },
    { type: 'p', text: 'उनसे भारत है, और भारत के प्रतिरूप के रूप में प्रभु श्री राम में ही इस देश के कोटि-कोटि जन अपने जीवन की सार्थकता पाते हैं।' },
    { type: 'p', text: 'भगवान विष्णु के सातवें अवतार प्रभु श्री राम के जन्म दिवस यानी रामनवमी का पर्व हमारे देश में अनादिकाल से धूमधाम और उत्साह से मनाया जाता है।' },
    { type: 'p', text: 'उनके जन्म दिवस पर शोभायात्रा का प्रचलन भी पूर्व काल से ही है।' },
    { type: 'p', text: 'बुंदेलखंड की पावन धरा और महाराजा छत्रसाल की नगरी छतरपुर में भी रामनवमी की शोभायात्रा का इतिहास पुराना है।' },
    { type: 'highlight', text: '🚩 लेकिन साल 2006 में एक ऐसा परिवर्तन हुआ, जिसके परिणामस्वरूप आज छतरपुर की रामनवमी बुंदेलखंड ही नहीं, बल्कि समूचे देश में जानी-पहचानी जाने लगी है।' },
    { type: 'p', text: 'दरअसल, साल 2006 में छतरपुर के हिंदुओं के मन में एक ऐसा विचार आया, जो धीरे-धीरे विशाल वटवृक्ष में तब्दील हो गया, और छतरपुर की रामनवमी अब उस मुकाम पर पहुंच चुकी है, जहां देश भर के लिए यह एक मिसाल के रूप में जानी जाने लगी है।' },
    { type: 'p', text: 'पहले भी छतरपुर में रामनवमी की शोभायात्रा निकाली जाती थी, लेकिन इसे देखकर छतरपुर के लोगों—खासकर राम गली, बजरिया और चौक बाजार के व्यापारियों ने सोचा कि क्यों न शोभायात्रा को भव्य और दिव्य बनाया जाए?' },
    { type: 'p', text: 'और इसी समय व्यापारियों ने मिलकर एक बैठक की, जिसमें श्री राम सेवा समिति का गठन हुआ।' },
    { type: 'highlight', text: 'समिति का प्रमुख प्रभु श्री राम के अनन्य भक्त और हम सब के आराध्य श्री हनुमान जी महाराज को मानकर शोभायात्रा की समूची रूपरेखा तय की गई।' },
    { type: 'p', text: 'हिंदू समाज के हर वर्ग और हर संगठन के प्रमुखों को बुलाकर बैठकों का दौर शुरू हुआ।' },
    { type: 'p', text: 'और सभी ने छतरपुर की रामनवमी की शोभायात्रा को भव्य और दिव्य बनाने का पावन संकल्प लिया।' },
    { type: 'p', text: 'यही वह साल था कि छतरपुर में पहली बार बहुत बड़ी शोभायात्रा निकाली गई, जिसमें हजारों-हजारों लोग शामिल हुए।' },
    { type: 'p', text: 'धीरे-धीरे यह शोभायात्रा हिंदुओं की एक प्रमुख पहचान बन गई, और साल दर साल शोभायात्रा में नए-नए प्रयोग किए गए।' },
    { type: 'highlight', text: 'आज उसी का परिणाम है कि हम छतरपुर की श्री रामनवमी की शोभायात्रा को जगन्नाथ पुरी की शोभायात्रा जैसा विश्व प्रसिद्ध बनाने का सपना संजोए हुए हैं।' },
    { type: 'section-title', text: '🚩 हनुमान टौरिया में ध्वज फहराकर शुरू होता है महोत्सव' },
    { type: 'p', text: 'छतरपुर में श्री रामनवमी उत्सव और शोभायात्रा की तैयारी को लेकर सबसे पहले छतरपुर की प्रसिद्ध धार्मिक आस्था का केंद्र श्री हनुमान टौरिया में एक विशाल ध्वज पताका फहराई जाती है।' },
    { type: 'p', text: 'इस ध्वज पताका को ढोल-नगाड़ों के साथ एवं संतों के सानिध्य में चौक बाजार से हनुमान टौरिया तक पैदल चलकर, ध्वज पताका को सिर पर रखकर, पुष्प वर्षा होते हुए यह यात्रा हनुमान टौरिया पहुंचती है।' },
    { type: 'p', text: 'जिससे शोभायात्रा उत्सव का मंगल उद्घोष होता है।' },
    { type: 'p', text: 'चूंकि छतरपुर के लोगों का मानना है कि प्रभु श्री राम के जन्म दिवस रामनवमी की शोभायात्रा श्री हनुमान जी महाराज के नेतृत्व और आशीर्वाद से ही संपन्न होती है।' },
    { type: 'p', text: 'इसलिए शोभायात्रा में शांति, सुख, समृद्धि बनी रहे तथा नकारात्मक ऊर्जा समाप्त होकर सभी हिन्दू भाइयों में सकारात्मक ऊर्जा का संचार हो सके, इसलिए हनुमान टौरिया में ध्वज पताका फहराकर इस बड़े महोत्सव का शुभारंभ होता है।' },
    { type: 'section-title', text: '🏛️ रामालय: 20-25 दिन पूर्व संतों द्वारा शुभारंभ' },
    { type: 'p', text: 'श्री रामनवमी की शोभायात्रा से 20 से 25 दिन पहले पूज्य संतों द्वारा रामालय कार्यालय का शुभारंभ किया जाता है एवं पिछले वर्ष का आय-व्यय प्रस्तुत किया जाता है।' },
    { type: 'p', text: 'शोभायात्रा को लेकर आगामी रूपरेखा बनाई जाती है। पिछले साल की सजावट करने वालों का सम्मान भी किया जाता है, जिससे आने वाली शोभायात्रा के लिए वे उत्साह से कार्य पर लग जाते हैं। और इसी दिन से रामालय से कार्य प्रारंभ हो जाता है।' },
    { type: 'section-title', text: '🌅 प्रभात फेरी: 10 दिन पूर्व से नगर में शंखनाद' },
    { type: 'p', text: 'श्री रामनवमी की शोभायात्रा के लगभग 10 दिन पूर्व से ही पूरे छतरपुर शहर में प्रतिदिन प्रभात फेरी निकाली जाती है।' },
    { type: 'p', text: 'जिसका उद्देश्य सभी हिंदू भाइयों में इस बात का शंखनाद करना है कि रामनवमी की शोभायात्रा जल्द ही आने वाली है और अधिक से अधिक संख्या में पूरे उत्साह, जोश और उमंग के साथ सभी लोग शोभायात्रा में शामिल हों।' },
    { type: 'p', text: 'यह प्रभात फेरी प्रतिदिन सुबह के समय शहर के किसी मंदिर या चौक बाजार से शुरू होकर रोज अलग-अलग क्षेत्र में जाती है और इसमें बड़ी संख्या में शहर के लोग शामिल होते हैं, जिनमें युवाओं की संख्या सबसे अधिक होती है।' },
    { type: 'p', text: 'प्रभात फेरी के दौरान भगवान श्री राम के भजनों का पाठ किया जाता है। शहर भर में जगह-जगह प्रभात फेरी के स्वागत के लिए लोग तरह-तरह की मिठाइयां खिलाते हैं और ढोल-नगाड़ों के साथ फूलों की वर्षा की जाती है।' },
    { type: 'highlight', text: 'इसी पावन क्रम के बीच में एक दिन महाराजा छत्रसाल की मूर्ति पर माल्यार्पण कर बुंदेलखंड के गौरव को नमन किया जाता है।' }
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // 1 or 2
  const [showAll, setShowAll] = useState(false);
  const scrollBottomRef = useRef(null);

  // Typewriter line-by-line char typing effect
  useEffect(() => {
    if (showAll || !isPlaying) return;

    if (currentLineIndex >= storyLines.length) return;

    const currentLineText = storyLines[currentLineIndex].text;

    const baseDelay = storyLines[currentLineIndex].type === 'section-title' ? 30 : 18;
    const typingDelay = baseDelay / speedMultiplier;

    const timer = setTimeout(() => {
      if (currentCharIndex < currentLineText.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        // Line finished typing, wait a moment then move to next line
        setTimeout(() => {
          if (currentLineIndex + 1 < storyLines.length) {
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          }
        }, 150 / speedMultiplier);
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, isPlaying, speedMultiplier, showAll, storyLines]);

  // Auto-scroll as text gets typed
  useEffect(() => {
    if (!showAll && isPlaying && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentLineIndex, currentCharIndex, showAll, isPlaying]);

  const handleRestart = () => {
    setShowAll(false);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsPlaying(true);
  };

  const handleShowAll = () => {
    setShowAll(true);
    setCurrentLineIndex(storyLines.length);
  };

  return (
    <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[#240606] via-[#1a0404] to-[#120202] border-2 border-amber-500/40 shadow-xl font-poppins text-amber-100">
      {/* Newspaper Byline Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 mb-4 border-b border-amber-500/25">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-red-600 p-[2px] shadow flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-xl bg-[#1d0303] flex items-center justify-center">
              <Scroll className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>ऐतिहासिक दस्तावेज एवं प्रेस संकलन</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold gold-gradient-text font-rozha mt-0.5">
              छतरपुर की रामनवमी की शोभायात्रा (धर्म ध्वजा यात्रा)
            </h3>
            <p className="text-xs text-amber-300/80 font-medium">
              लेखक: <span className="text-white font-semibold">पंकज पहारिया</span> एवं <span className="text-white font-semibold">राकेश तिवारी</span>
            </p>
          </div>
        </div>

        {/* Live Animation Controls Bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 shrink-0 bg-black/40 p-1.5 rounded-xl border border-amber-500/20">
          {!showAll && (
            <>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/40 text-amber-200 border border-amber-500/30 transition flex items-center gap-1 cursor-pointer"
                title={isPlaying ? 'रोकें' : 'चलाएं'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                <span>{isPlaying ? 'रोकें' : 'चलाएं'}</span>
              </button>

              <button
                onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                  speedMultiplier === 2 
                    ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold' 
                    : 'bg-stone-900 text-amber-200 border-amber-500/30 hover:bg-stone-800'
                }`}
                title="टाइपिंग स्पीड बदलें"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>{speedMultiplier}x गति</span>
              </button>
            </>
          )}

          <button
            onClick={handleRestart}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-amber-200 border border-amber-500/30 transition flex items-center gap-1 cursor-pointer"
            title="शुरू से चलाएं"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>रीस्टार्ट</span>
          </button>

          {!showAll ? (
            <button
              onClick={handleShowAll}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 hover:text-white transition shadow cursor-pointer flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>पूरा पढ़ें</span>
            </button>
          ) : (
            <button
              onClick={handleRestart}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 border border-amber-500/40 transition cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>सजीव वाचन (Line-by-Line)</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress status line */}
      {!showAll && (
        <div className="flex items-center justify-between text-[11px] text-amber-400/80 mb-3 px-1">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>सजीव वाचन प्रगति: पंक्ति {Math.min(currentLineIndex + 1, storyLines.length)} / {storyLines.length}</span>
          </span>
          <span>{isPlaying ? '⚡ टाइपिंग चालू है...' : '⏸️ विराम'}</span>
        </div>
      )}

      {/* Story Content Area */}
      <div className="space-y-3.5 text-sm sm:text-base leading-relaxed bg-[#180303]/90 p-4 sm:p-6 rounded-xl border border-amber-500/20 max-h-[60vh] overflow-y-auto custom-scrollbar">
        {storyLines.map((line, idx) => {
          // If in showAll mode, render all
          if (showAll) {
            return renderLine(line, line.text, false, idx);
          }

          // If before current line, render fully
          if (idx < currentLineIndex) {
            return renderLine(line, line.text, false, idx);
          }

          // If current line being typed
          if (idx === currentLineIndex) {
            const displayedText = line.text.slice(0, currentCharIndex);
            return renderLine(line, displayedText, true, idx);
          }

          // Not yet typed
          return null;
        })}
        <div ref={scrollBottomRef} />
      </div>

      {/* Document Footer Verification */}
      <div className="mt-4 pt-3 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-300/80">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
          <span>श्री राम सेवा समिति, छतरपुर • सन् २००६ से अनवरत सनातन सेवा</span>
        </span>
        <span className="text-[11px] text-amber-400/60 font-poppins">
          स्रोत: महाराजा छत्रसाल नगरी रामनवमी विशेषांक
        </span>
      </div>
    </div>
  );

  function renderLine(line, text, isCurrentlyTyping, key) {
    if (line.type === 'header') {
      return (
        <h2 key={key} className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha text-center pt-2 pb-1 border-b border-amber-500/20">
          {text}
          {isCurrentlyTyping && <span className="inline-block w-2 h-5 bg-amber-400 ml-1 animate-pulse" />}
        </h2>
      );
    }

    if (line.type === 'authors') {
      return (
        <p key={key} className="text-xs sm:text-sm text-center font-semibold saffron-gradient-text pb-2">
          {text}
          {isCurrentlyTyping && <span className="inline-block w-1.5 h-3 bg-amber-400 ml-0.5 animate-pulse" />}
        </p>
      );
    }

    if (line.type === 'section-title') {
      return (
        <div key={key} className="pt-4 pb-1">
          <h4 className="text-base sm:text-lg font-bold text-amber-300 font-rozha flex items-center gap-2 border-b border-amber-500/30 pb-1">
            <span>{text}</span>
            {isCurrentlyTyping && <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse" />}
          </h4>
        </div>
      );
    }

    if (line.type === 'highlight') {
      return (
        <div key={key} className="p-3 my-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-red-950/60 to-amber-500/10 border-l-4 border-amber-500 text-amber-200 font-medium text-sm sm:text-base leading-relaxed">
          {text}
          {isCurrentlyTyping && <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse" />}
        </div>
      );
    }

    // Standard paragraph line
    return (
      <p key={key} className="text-amber-100/90 text-sm sm:text-base leading-relaxed transition-opacity duration-300">
        {text}
        {isCurrentlyTyping && <span className="inline-block w-1.5 h-4 bg-amber-400 ml-1 animate-pulse" />}
      </p>
    );
  }
}
