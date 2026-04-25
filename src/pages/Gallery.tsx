import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, BookOpen } from 'lucide-react';
import { TEST_CONFIGS, TestConfig } from '../data/testConfigs';
import { GalleryFeedAd } from '../components/Ad';
import { getBackgroundImage, getPersonalityImageFallback, getPersonalityImageSrcSet } from '../utils/imageAssets';

const THEME_COLORS: Record<string, string> = {
  travel: '#10B981',
  psychology: '#8B5CF6',
  consumption: '#F97316',
  social: '#FB7185',
  fortune: '#7C3AED',
  campus: '#FBBF24',
  love: '#EC4899',
};

const ALL_TABS = [
  { id: 'all', label: '全部' },
  { id: 'love', label: '恋爱' },
  { id: 'psychology', label: '心理' },
  { id: 'social', label: '社交' },
  { id: 'fortune', label: '运势' },
  { id: 'campus', label: '校园' },
  { id: 'consumption', label: '消费' },
  { id: 'travel', label: '旅行' },
];

interface PersonalityItem {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryName: string;
}

export default function Gallery() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(category || 'all');
  const [selected, setSelected] = useState<PersonalityItem | null>(null);

  // Build flat list of all personalities
  const allPersonalities = useMemo<PersonalityItem[]>(() => {
    const items: PersonalityItem[] = [];
    Object.values(TEST_CONFIGS).forEach((config: TestConfig) => {
      config.personalities.forEach((p) => {
        items.push({
          id: p.id,
          name: p.name,
          description: p.description,
          category: config.id,
          categoryName: config.title,
        });
      });
    });
    return items;
  }, []);

  // Filter by active tab
  const filtered = activeTab === 'all'
    ? allPersonalities
    : allPersonalities.filter(p => p.category === activeTab);

  const themeColor = THEME_COLORS[activeTab] || THEME_COLORS[selected?.category || 'love'];

  return (
    <div
      className="min-h-screen pb-6"
      style={{
        backgroundImage: `url(${getBackgroundImage('home')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-full active:bg-slate-100 transition-colors"
          >
            <ChevronLeft size={22} className="text-slate-700" />
          </button>
          <div className="flex-1 flex items-center gap-2">
            <BookOpen size={20} className="text-slate-600" />
            <span className="font-bold text-slate-800 text-[17px]">人格图鉴</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5 px-3 py-2">
          {ALL_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                activeTab === tab.id
                  ? 'text-white shadow-sm'
                  : 'text-slate-500 bg-slate-100 active:bg-slate-200'
              }`}
              style={activeTab === tab.id ? { backgroundColor: themeColor } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-3 pt-4 md:px-8 lg:px-16">
        <p className="text-[13px] text-slate-500/80 mb-3 px-1">
          {activeTab === 'all' ? '全部' : ALL_TABS.find(t => t.id === activeTab)?.label}
          {' · '}{filtered.length} 种人格
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {filtered.map((p, i) => (
            <motion.button
              key={`${p.category}-${p.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.5) }}
              onClick={() => setSelected(p)}
              className="bg-white/95 rounded-xl overflow-hidden shadow-sm active:scale-[0.97] transition-transform text-left"
            >
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <picture className="block w-full h-full">
                  <source
                    type="image/webp"
                    srcSet={getPersonalityImageSrcSet(p.category, p.id)}
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                  />
                  <img
                    src={getPersonalityImageFallback(p.category, p.id)}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width={384}
                    height={384}
                    className="block w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="p-1.5 md:p-2">
                <p className="font-bold text-[11px] md:text-[12px] text-slate-800 leading-tight mb-0.5 truncate">{p.name}</p>
                <p className="text-[10px] md:text-[11px] text-slate-400 truncate">{p.categoryName}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <GalleryFeedAd />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-square bg-slate-100 relative">
                <picture className="block w-full h-full">
                  <source
                    type="image/webp"
                    srcSet={getPersonalityImageSrcSet(selected.category, selected.id)}
                    sizes="(min-width: 640px) 448px, 100vw"
                  />
                  <img
                    src={getPersonalityImageFallback(selected.category, selected.id)}
                    alt={selected.name}
                    loading="eager"
                    decoding="async"
                    width={768}
                    height={768}
                    className="block w-full h-full object-cover"
                  />
                </picture>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white active:bg-black/60 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-[18px] text-slate-800 mb-0.5">{selected.name}</h3>
                    <span
                      className="text-[12px] font-medium px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: THEME_COLORS[selected.category] }}
                    >
                      {selected.categoryName}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-[14px] leading-relaxed mb-5">{selected.description}</p>
                <button
                  onClick={() => {
                    navigate(`/test/${selected!.category}`);
                    setSelected(null);
                  }}
                  className="w-full py-3 rounded-2xl text-white font-bold text-[15px] active:scale-[0.98] transition-transform"
                  style={{ backgroundColor: THEME_COLORS[selected.category] }}
                >
                  去测试 →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
