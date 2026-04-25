import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { TEST_LIST } from '../data/testConfigs';
import { ChevronRight } from 'lucide-react';
import { HomeFeedAd } from '../components/Ad';
import { getBackgroundImage } from '../utils/imageAssets';

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

export default function Home() {
  return (
    <div
      className="min-h-screen py-10 px-5 flex justify-center"
      style={{
        backgroundImage: `url(${getBackgroundImage('home')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8 mt-4 flex items-center justify-center gap-3">
          <div>
            <h1 className="text-[28px] font-black text-slate-800 tracking-tight mb-1">趣味人格测试</h1>
            <p className="text-slate-500 text-[15px]">发现不一样的自己</p>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 p-3 rounded-2xl bg-white shadow-md active:scale-95 transition-transform"
            title="人格图鉴"
          >
            <BookOpen size={22} className="text-slate-600" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {TEST_LIST.map((test, i) => {
            const Icon = ICONS[test.id] || TravelIcon;
            const themeColor = THEME_COLORS[test.id] || '#6366f1';
            const questionCount = test.questions.length;
            const personalityCount = test.personalities.length + (test.hidden_personalities?.length || 0);

            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/test/${test.id}`}
                  className="block focus:outline-none"
                >
                  <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] active:scale-[0.98] transition-transform flex items-center gap-[18px]">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner"
                      style={{ background: `linear-gradient(135deg, ${themeColor}dd, ${themeColor})` }}
                    >
                      <Icon size={26} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[17px] font-bold text-slate-800 mb-1 leading-none">{test.title}</h2>
                      <p className="text-slate-500 text-[13px]">
                        {questionCount}道题 · {personalityCount}种人格
                      </p>
                    </div>
                    <div className="text-slate-300">
                      <ChevronRight size={22} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <HomeFeedAd />
      </div>
    </div>
  );
}
