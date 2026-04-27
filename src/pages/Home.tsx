import { Fragment, useEffect, useState, type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TEST_LIST } from '../data/testConfigs';
import { getHomeBackgroundFallback, getHomeBackgroundImage } from '../utils/imageAssets';

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

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => (
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default function Home() {
  const isDesktopLayout = useMediaQuery('(min-width: 1024px)');
  const backgroundVariant = isDesktopLayout ? 'desktop' : 'mobile';

  useEffect(() => {
    document.title = 'SBTI Play 趣味人格测试集合 | 恋爱、心理、社交、运势人格测试';
  }, []);

  return (
    <div className="relative min-h-screen min-h-dvh overflow-hidden bg-[#fff7fb]">
      <picture aria-hidden="true">
        <source srcSet={getHomeBackgroundImage(backgroundVariant)} type="image/webp" />
        <img
          src={getHomeBackgroundFallback(backgroundVariant)}
          alt=""
          className="fixed inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.3)_56%,rgba(255,255,255,0.12))]" />
      <main className="relative z-10 mx-auto flex min-h-screen min-h-dvh w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-[900px] lg:pt-8">
          <header className="mb-6 flex items-center justify-between gap-4 px-1 lg:mb-8">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/82 px-3 py-1 text-xs font-bold text-slate-600 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <Sparkles size={14} className="text-pink-500" />
                SBTI Play
              </div>
              <h1 className="text-[32px] font-black leading-none tracking-normal text-slate-900 drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] lg:text-[38px]">
                趣味人格测试
              </h1>
              <p className="mt-2 text-[15px] font-medium text-slate-600 drop-shadow-[0_1px_8px_rgba(255,255,255,0.9)]">
                发现不一样的自己
              </p>
            </div>
            <Link
              to="/gallery"
              className="shrink-0 rounded-2xl border border-white/85 bg-white/88 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.1)] backdrop-blur-md transition-transform active:scale-95"
              title="人格图鉴"
            >
              <BookOpen size={22} className="text-slate-600" />
            </Link>
          </header>

          <div className="flex flex-col gap-3.5 lg:grid lg:max-w-[900px] lg:grid-cols-2 lg:gap-4">
            {TEST_LIST.map((test, i) => {
              const Icon = ICONS[test.id] || TravelIcon;
              const themeColor = THEME_COLORS[test.id] || '#6366f1';
              const questionCount = test.questions.length;
              const personalityCount = test.personalities.length + (test.hidden_personalities?.length || 0);

              return (
                <Fragment key={test.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.36, delay: i * 0.07 }}
                  >
                    <Link
                      to={`/test/${test.id}`}
                      className="group block rounded-[26px] border border-white bg-white p-4 shadow-[0_14px_34px_rgba(46,26,80,0.14)] outline-none transition-all active:scale-[0.985] lg:hover:-translate-y-0.5 lg:hover:shadow-[0_18px_42px_rgba(46,26,80,0.17)]"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_22px_rgba(15,23,42,0.12)]"
                          style={{ background: `linear-gradient(145deg, ${themeColor}e6, ${themeColor})` }}
                        >
                          <Icon size={25} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h2 className="mb-1 text-[17px] font-extrabold leading-tight tracking-normal text-slate-900">
                            {test.title}
                          </h2>
                          <p className="text-[13px] font-medium leading-tight text-slate-600">
                            {questionCount}道题 · {personalityCount}种人格
                          </p>
                        </div>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-slate-300 transition-colors group-hover:text-slate-500">
                          <ChevronRight size={21} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
