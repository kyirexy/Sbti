import { useState, useEffect, type ComponentType } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { TEST_CONFIGS } from '../data/testConfigs';
import { ChevronLeft } from 'lucide-react';

// 图标组件
const TravelIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><line x1="16" y1="7" x2="8" y2="7"></line></svg>
);

const PsyIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5h0a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5-2.5v0A2.5 2.5 0 0 1 9.5 2z"></path><path d="M12 8v10"></path><path d="M9 18h6"></path></svg>
);

const ConsumeIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
);

const SocialIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

const FortuneIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v0a9 9 0 0 0 0 18v0a9 9 0 0 0 0-18z"></path><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
);

const CampusIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
);

const LoveIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  travel: TravelIcon,
  psychology: PsyIcon,
  consumption: ConsumeIcon,
  social: SocialIcon,
  fortune: FortuneIcon,
  campus: CampusIcon,
  love: LoveIcon,
};

const THEME_COLORS: Record<string, string> = {
  travel: '#10B981',
  psychology: '#8B5CF6',
  consumption: '#F97316',
  social: '#FB7185',
  fortune: '#7C3AED',
  campus: '#FBBF24',
  love: '#EC4899',
};

// 各测试答题界面的背景图
const TEST_BACKGROUNDS: Record<string, string | undefined> = {
  love: '/images/love-bg.png',
  psychology: '/images/psychology-bg.png',
  social: '/images/social-bg.png',
  fortune: '/images/fortune-bg.png',
  campus: '/images/campus-bg.png',
  consumption: '/images/consumption-bg.png',
  travel: '/images/travel-bg.png',
};

export default function Test() {
  const { id } = useParams();
  const navigate = useNavigate();
  const config = id ? TEST_CONFIGS[id] : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (!config) navigate('/');
  }, [config, navigate]);

  if (!config) return null;

  const currentQuestion = config.questions[currentIndex];
  const progress = ((currentIndex + 1) / config.questions.length) * 100;
  const themeColor = THEME_COLORS[id || ''] || '#6366f1';
  const Icon = ICONS[id || ''] || TravelIcon;
  const bgImage = TEST_BACKGROUNDS[id || ''];
  const bgStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  const handleOptionSelect = (optionText: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionText };
    setAnswers(newAnswers);

    if (currentIndex < config.questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
    } else {
      // 完成 - 跳转到结果页
      setIsAnalyzing(true);
      setTimeout(() => {
        navigate(`/result/${id}`, {
          state: { answers: newAnswers },
          replace: true
        });
      }, 1500);
    }
  };

  if (isAnalyzing) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6"
        style={{ background: `linear-gradient(135deg, ${themeColor}15, ${themeColor}30)` }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-md"
          style={{ background: `linear-gradient(135deg, ${themeColor}dd, ${themeColor})` }}
        >
          <Icon size={36} />
        </motion.div>
        <h2 className="text-xl font-bold text-slate-800 tracking-wide">正在分析你的人格特质...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative" style={bgStyle}>
      {/* Header */}
      <div className="w-full max-w-md mx-auto px-6 py-6 flex-none">
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : navigate('/')}
            className="flex items-center text-slate-500 font-medium text-[15px] active:scale-95 transition-transform"
          >
            <ChevronLeft size={20} className="-ml-1 mr-0.5" />
            返回
          </button>
          <div className="text-[15px] font-bold text-black/70">
            {currentIndex + 1} <span className="opacity-50 whitespace-pre"> / {config.questions.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: themeColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Container */}
      <div className="flex-1 w-full max-w-md mx-auto px-6 pb-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col"
          >
            <div className="bg-white rounded-[28px] p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] mb-8 min-h-[160px] flex items-center justify-center text-center">
              <h2 className="text-[22px] font-bold text-slate-800 leading-relaxed tracking-tight">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option, i) => {
                const isSelected = answers[currentQuestion.id] === option.text;
                return (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOptionSelect(option.text)}
                    className={`w-full text-left py-5 px-6 rounded-2xl transition-all duration-200 font-bold text-[16px] leading-snug border-2 flex items-center shadow-sm`}
                    style={{
                      backgroundColor: isSelected ? themeColor : '#f3f4f6',
                      borderColor: isSelected ? themeColor : 'transparent',
                      color: isSelected ? '#ffffff' : '#374151'
                    }}
                  >
                    <span className="flex-1">{option.text}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
