import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { TEST_CONFIGS } from '../data/testConfigs';
import { Award, Download, Image, Medal, Share, Sparkles, Trophy, type LucideIcon } from 'lucide-react';
import { calculateScore, type ScoreResult, type PersonalityScore } from '../utils/scoreCalculator';
import { generatePoster, downloadPoster } from '../utils/poster';
import { initWechatShare, buildShareConfig, shareResult } from '../utils/wechat';
import { getPersonalityImageFallback, getPersonalityImageSrcSet } from '../utils/imageAssets';

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

const BG_GRADIENTS: Record<string, string> = {
  travel: 'from-emerald-50 to-teal-100',
  psychology: 'from-violet-50 to-purple-100',
  consumption: 'from-orange-50 to-amber-100',
  social: 'from-rose-50 to-pink-100',
  fortune: 'from-violet-50 to-fuchsia-100',
  campus: 'from-yellow-50 to-amber-100',
  love: 'from-pink-50 to-rose-100',
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const value = hex.replace('#', '');
  const normalized = value.length === 3
    ? value.split('').map(char => char + char).join('')
    : value.slice(0, 6);
  const numberValue = parseInt(normalized, 16);

  return {
    r: (numberValue >> 16) & 255,
    g: (numberValue >> 8) & 255,
    b: numberValue & 255,
  };
}

function rgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mixHex(hex: string, targetHex: string, weight: number): string {
  const source = hexToRgb(hex);
  const target = hexToRgb(targetHex);
  const mix = (start: number, end: number) => Math.round(start + (end - start) * weight);

  return `rgb(${mix(source.r, target.r)}, ${mix(source.g, target.g)}, ${mix(source.b, target.b)})`;
}

function contrastText(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.62 ? '#1f2937' : '#ffffff';
}

const RANK_BADGE_ICONS: LucideIcon[] = [Trophy, Medal, Award];

function RankBadge({ rank, themeColor }: { rank: number; themeColor: string }) {
  const rankNumber = rank + 1;
  const Icon = RANK_BADGE_ICONS[rank] || Sparkles;
  const isTopRank = rank === 0;
  const palettes = [
    {
      start: themeColor,
      end: mixHex(themeColor, '#111827', 0.18),
      shadow: themeColor,
      text: contrastText(themeColor),
    },
    {
      start: '#F8FAFC',
      end: '#94A3B8',
      shadow: '#64748B',
      text: '#334155',
    },
    {
      start: '#FDBA74',
      end: '#B45309',
      shadow: '#C2410C',
      text: '#ffffff',
    },
  ];
  const palette = palettes[rank] || {
    start: '#F8FAFC',
    end: '#CBD5E1',
    shadow: '#94A3B8',
    text: '#475569',
  };

  return (
    <div
      className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-visible"
      aria-label={`第 ${rankNumber} 名`}
      style={{
        background: `radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.9) 0, rgba(255, 255, 255, 0.55) 18%, transparent 36%), linear-gradient(145deg, ${palette.start}, ${palette.end})`,
        boxShadow: `0 10px 22px ${rgba(palette.shadow, 0.28)}, inset 0 1px 0 rgba(255, 255, 255, 0.64), inset 0 -10px 18px rgba(15, 23, 42, 0.12)`,
        color: palette.text,
      }}
    >
      <Icon size={isTopRank ? 20 : 18} strokeWidth={2.4} />
      <span
        className="absolute right-0 bottom-0 min-w-5 h-5 px-1 rounded-full flex items-center justify-center text-[11px] font-black leading-none"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          color: isTopRank ? themeColor : '#334155',
          boxShadow: '0 3px 8px rgba(15, 23, 42, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
        }}
      >
        {rankNumber}
      </span>
    </div>
  );
}

function PersonalityCard({ personality, rank, themeColor }: { personality: PersonalityScore; rank: number; themeColor: string }) {
  const isTopRank = rank === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + rank * 0.1 }}
      className="p-4 rounded-[22px] border"
      style={{
        borderColor: isTopRank ? rgba(themeColor, 0.38) : '#E2E8F0',
        background: isTopRank
          ? `linear-gradient(135deg, ${rgba(themeColor, 0.1)}, rgba(255, 255, 255, 0.94))`
          : 'rgba(255, 255, 255, 0.82)',
        boxShadow: isTopRank
          ? `0 14px 30px ${rgba(themeColor, 0.14)}`
          : '0 6px 18px rgba(15, 23, 42, 0.05)',
      }}
    >
      <div className="flex items-start gap-3">
        <RankBadge rank={rank} themeColor={themeColor} />
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-1 ${isTopRank ? 'text-slate-800' : 'text-slate-700'}`}>
            {personality.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {personality.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function HiddenPersonalityCard({ personality, themeColor }: { personality: PersonalityScore; themeColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="p-4 rounded-2xl border-2 border-dashed mt-4"
      style={{ borderColor: '#ef4444', backgroundColor: '#fef2f2' }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: 'linear-gradient(145deg, #fb7185, #e11d48)',
            boxShadow: '0 8px 18px rgba(225, 29, 72, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
            color: '#ffffff',
          }}
        >
          <Sparkles size={18} strokeWidth={2.4} />
        </span>
        <span className="font-bold text-red-600">{personality.name}</span>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {personality.description}
      </p>
    </motion.div>
  );
}

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const resultRef = useRef<HTMLDivElement>(null);

  const config = id ? TEST_CONFIGS[id] : null;
  const answers = useMemo(
    () => (location.state as { answers?: Record<number, string> } | null)?.answers || {},
    [location.state]
  );
  const sharedPersonalityId = useMemo(
    () => new URLSearchParams(location.search).get('personality') || '',
    [location.search]
  );
  const themeColor = THEME_COLORS[id || ''] || '#6366f1';
  const bgGradient = BG_GRADIENTS[id || ''] || 'from-slate-50 to-slate-100';
  const Icon = ICONS[id || ''] || TravelIcon;

  const [isGenerating, setIsGenerating] = useState(false);

  // 计算得分
  const scoreResult: ScoreResult | null = useMemo(() => {
    if (!config) return null;
    const calculated = calculateScore(id || '', answers, config);
    const hasAnswered = Object.keys(answers).length > 0;

    if (!sharedPersonalityId || hasAnswered) return calculated;

    const sharedPersonality = calculated.personalityScores.find(p => p.id === sharedPersonalityId);
    if (!sharedPersonality) return calculated;

    const promotedPersonality: PersonalityScore = {
      ...sharedPersonality,
      score: Math.max(sharedPersonality.score, sharedPersonality.maxScore || 1),
      matchPercentage: 100,
    };
    const remainingPersonalities = calculated.personalityScores
      .filter(p => p.id !== promotedPersonality.id)
      .slice(0, 2);

    return {
      ...calculated,
      resultId: promotedPersonality.id,
      topPersonalities: [promotedPersonality, ...remainingPersonalities],
    };
  }, [id, answers, config, sharedPersonalityId]);

  useEffect(() => {
    if (!config || !scoreResult) {
      navigate('/');
      return;
    }

    // Fire confetti on load
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: [themeColor, '#ffffff'] }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: [themeColor, '#ffffff'] }));
    }, 250);

    return () => clearInterval(interval);
  }, [config, scoreResult, navigate, themeColor]);

  // 初始化微信分享
  useEffect(() => {
    if (config && scoreResult) {
      const topPersonality = scoreResult.topPersonalities[0];
      const configShare = buildShareConfig(
        config.title,
        topPersonality?.name || '',
        id || '',
        topPersonality?.id || '',
        topPersonality?.description
      );
      initWechatShare(configShare);
    }
  }, [id, config, scoreResult]);

  if (!config || !scoreResult) return null;

  const topPersonality = scoreResult.topPersonalities[0];

  const handleShare = async () => {
    if (!topPersonality || !id) return;

    const status = await shareResult({
      testTitle: config.title,
      resultTitle: topPersonality.name,
      testId: id,
      resultId: topPersonality.id,
      resultDescription: topPersonality.description,
    });

    if (status === 'copied') {
      alert('已复制完整分享文案，发给朋友就能直接看到你的结果。');
    }
  };

  const handleGeneratePoster = async () => {
    if (!resultRef.current) return;

    setIsGenerating(true);
    try {
      const dataUrl = await generatePoster(resultRef.current, {
        bgColor: import.meta.env.VITE_POSTER_BG_COLOR || '#ffffff',
      });
      downloadPoster(dataUrl, `${config.title}-${topPersonality?.name}.jpg`);
    } catch (error) {
      console.error('海报生成失败:', error);
      alert('海报生成失败，请重试');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center py-12 px-6 bg-gradient-to-br ${bgGradient}`}>
      <motion.div
        ref={resultRef}
        id="poster-container"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_20px_60px_rgb(0,0,0,0.05)] overflow-hidden border border-white"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.84)',
          borderColor: 'rgba(255, 255, 255, 0.86)',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
        }}
      >
        <div className="pt-8 pb-6 px-6 flex flex-col items-center text-center relative">
          {topPersonality?.id ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="w-full mb-6 rounded-[28px] overflow-hidden shadow-lg border border-white/70 bg-white/70"
              style={{ aspectRatio: '1 / 1' }}
            >
              <picture className="block w-full h-full">
                <source
                  type="image/webp"
                  srcSet={getPersonalityImageSrcSet(id || '', topPersonality.id)}
                  sizes="(min-width: 640px) 384px, calc(100vw - 96px)"
                />
                <img
                  src={getPersonalityImageFallback(id || '', topPersonality.id)}
                  alt={topPersonality.name}
                  className="block w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  width={768}
                  height={768}
                />
              </picture>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl"
              style={{
                background: `radial-gradient(circle at 32% 24%, rgba(255, 255, 255, 0.55), transparent 38%), linear-gradient(135deg, ${rgba(themeColor, 0.86)}, ${themeColor})`,
                boxShadow: `0 18px 36px ${rgba(themeColor, 0.26)}, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
              }}
            >
              <Icon size={48} />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-4 uppercase"
                 style={{ backgroundColor: rgba(themeColor, 0.08), color: themeColor }}>
              {config.title}
            </div>

            <h1 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">
              {topPersonality?.name}
            </h1>

            {/* 匹配度进度条 */}
            <div className="w-full mb-6">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>人格匹配度</span>
                <span>{topPersonality?.matchPercentage || 0}%</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${topPersonality?.matchPercentage || 0}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: themeColor }}
                />
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-left text-[15px]">
              {topPersonality?.description}
            </p>
          </motion.div>
        </div>

        {/* 人格分析结果列表 */}
        <div className="px-6 pb-4">
          <div className="text-sm font-bold text-slate-500 mb-3 text-left">人格分析</div>
          <div className="flex flex-col gap-3">
            {scoreResult.topPersonalities.map((p, idx) => (
              <div key={p.id}>
                <PersonalityCard personality={p} rank={idx} themeColor={themeColor} />
              </div>
            ))}
          </div>

          {/* 隐藏人格 */}
          {scoreResult.hiddenTriggered.length > 0 && (
            <div className="mt-4">
              {scoreResult.hiddenTriggered.map(p => (
                <div key={p.id}>
                  <HiddenPersonalityCard personality={p} themeColor={themeColor} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 bg-white/50 border-t border-white/40 flex flex-col gap-3" data-poster-exclude="true">
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              className="flex-1 py-4 rounded-xl text-white font-bold text-[17px] flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
              style={{ backgroundColor: themeColor }}
            >
              <Share size={20} fill="currentColor" />
              分享给朋友
            </button>

            <button
              onClick={handleGeneratePoster}
              disabled={isGenerating}
              className="flex-1 py-4 bg-white/60 hover:bg-white/80 rounded-xl text-slate-600 font-bold text-[17px] flex items-center justify-center gap-2 shadow-sm border border-white active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Image size={20} className="animate-spin" />
                  生成中...
                </>
              ) : (
                <>
                  <Download size={20} />
                  生成海报
                </>
              )}
            </button>
          </div>

          <Link
            to="/"
            className="w-full py-4 bg-white/60 hover:bg-white/80 rounded-xl text-slate-600 font-bold text-[17px] flex items-center justify-center shadow-sm border border-white active:scale-[0.98] transition-all"
          >
            回到首页
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
