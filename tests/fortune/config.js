export default {
  id: "fortune",
  title: "运势人格测试",
  questions: [
    {
      id: 1,
      text: "走在路上突然捡到一张百元大钞，周围看起来也没有失主，你的第一反应是？",
      options: [
        { text: "太幸运了！赶紧揣兜里，今天必须买张彩票或吃顿好的", score: { lucky_koi: 3, risk_taker: 1 } },
        { text: "先四处张望一下有没有人着急找，有就还，没有就自己收着", score: { karma_believer: 3, cautious_observer: 1 } },
        { text: "心里莫名有点不安，觉得这可能是某种考验或者不祥之兆", score: { pessimistic_defender: 3, anxious_fortuneteller: 1 } },
        { text: "捡起来交给附近的保安、服务台或者警察", score: { justice_warrior: 3, honest_mirror: 1 } }
      ]
    },
    {
      id: 2,
      text: "早上出门一路红灯，还差点被溅了一身水，你会怎么想？",
      options: [
        { text: "完了，今天水逆，诸事不宜，我得处处小心", score: { mercury_retrograde_victim: 3, superstitious_ritualist: 1 } },
        { text: "怪自己今天出门晚了，下次早点就好了，和运气无关", score: { rational_skeptic: 3, practical_realist: 1 } },
        { text: "虽然开局不顺，但说不定到了公司会有好事发生，坏事变好事", score: { blessed_optimist: 3, serendipity_seeker: 1 } },
        { text: "内心毫无波动，这只是普通的交通状况而已", score: { detached_stoic: 3, cold_observer: 1 } }
      ]
    },
    {
      id: 3,
      text: "当你面临一个重大人生抉择（比如换工作、搬家、结婚），你的决策模式更接近？",
      options: [
        { text: "去庙里拜拜，或者网上算一卦、看看星座运势再做决定", score: { superstitious_ritualist: 3, anxious_fortuneteller: 1 } },
        { text: "列出详细的利弊分析表，用数据和逻辑做出最优选择", score: { rational_skeptic: 3, practical_realist: 1 } },
        { text: "跟着直觉走，心里有个声音告诉我该怎么选", score: { intuitive_mystic: 3, destiny_changer: 1 } },
        { text: "广泛听取家人朋友的意见，综合大家的看法", score: { cautious_observer: 3, social_butterfly: 1 } }
      ]
    },
    {
      id: 4,
      text: "你认为\"运气\"这种东西的本质是什么？",
      options: [
        { text: "一种可以通过心态和善行吸引来的能量场", score: { manifestation_guru: 3, karma_believer: 1 } },
        { text: "小概率随机事件的组合，没什么玄乎的", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "努力到一定程度后，时机成熟的必然结果", score: { practical_realist: 3, destiny_changer: 1 } },
        { text: "天生的，命里有时终须有，命里无时莫强求", score: { fate_resigned: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 5,
      text: "朋友神神秘秘地推荐你去见一个据说\"非常准\"的大师算命，你会？",
      options: [
        { text: "立刻要联系方式，充满期待地想去看看自己的未来", score: { anxious_fortuneteller: 3, superstitious_ritualist: 1 } },
        { text: "有点好奇，但又怕被忽悠或听到不好的事，犹豫不决", score: { pessimistic_defender: 3, cautious_observer: 1 } },
        { text: "微笑着婉拒，表示自己完全不信这个", score: { rational_skeptic: 3, detached_stoic: 1 } },
        { text: "如果价格不贵，当作一种娱乐体验去试试，不会太当真", score: { curious_explorer: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 6,
      text: "打牌、打麻将或者参加有运气成分的比赛前，你有没有什么\"求好运\"的小习惯？",
      options: [
        { text: "有！穿幸运色、坐幸运方位、带上幸运物，仪式感满满", score: { superstitious_ritualist: 3, lucky_koi: 1 } },
        { text: "没有特别的仪式，但会穿自己感觉最舒服的衣服", score: { practical_realist: 2, rational_skeptic: 1 } },
        { text: "完全不信这一套，输赢全凭技术和概率", score: { rational_skeptic: 3, detached_stoic: 1 } },
        { text: "会不自觉地远离那些看起来\"运势不好\"的人", score: { energy_sensitive: 3, pessimistic_defender: 1 } }
      ]
    },
    {
      id: 7,
      text: "当你听到\"祸不单行\"这句话时，你的内心感受是？",
      options: [
        { text: "背后一凉，特别害怕自己遇到一件坏事后会接二连三倒霉", score: { mercury_retrograde_victim: 3, pessimistic_defender: 1 } },
        { text: "觉得这只是一种心理暗示，越怕越来，不要自己吓自己", score: { rational_skeptic: 3, blessed_optimist: 1 } },
        { text: "提醒自己最近要更加谨言慎行，避免节外生枝", score: { cautious_observer: 3, practical_realist: 1 } },
        { text: "纯粹是偶然，统计学上这叫聚类错觉", score: { cold_observer: 3, rational_skeptic: 1 } }
      ]
    },
    {
      id: 8,
      text: "你更愿意相信下面哪句话？",
      options: [
        { text: "一切都是最好的安排", score: { zen_buddhist: 3, blessed_optimist: 1 } },
        { text: "机会只留给有准备的人", score: { practical_realist: 3, destiny_changer: 1 } },
        { text: "生死有命，富贵在天", score: { fate_resigned: 3, zen_buddhist: 1 } },
        { text: "我命由我不由天", score: { destiny_changer: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 9,
      text: "如果你突然收到一笔来历不明的转账，金额还不小，你会？",
      options: [
        { text: "觉得是天上掉馅饼，赶紧用掉，免得夜长梦多", score: { risk_taker: 3, impulsive: 1 } },
        { text: "先留着不动，等几天看有没有人联系或银行退回", score: { cautious_observer: 3, practical_realist: 1 } },
        { text: "立刻联系银行或报警处理，这钱拿着心里不踏实", score: { karma_believer: 3, justice_warrior: 1 } },
        { text: "认为这是某种考验或陷阱，不能碰", score: { pessimistic_defender: 3, energy_sensitive: 1 } }
      ]
    },
    {
      id: 10,
      text: "对于买彩票、抽盲盒、抓娃娃这类活动，你的态度是？",
      options: [
        { text: "经常买，虽然知道概率低，但万一呢？买个希望", score: { risk_taker: 3, lucky_koi: 1 } },
        { text: "偶尔买，但觉得中奖概率太低，主要是图个乐", score: { curious_explorer: 3, balanced_mediator: 1 } },
        { text: "从不买，认为那是智商税，钱不如拿去吃顿好的", score: { rational_skeptic: 3, practical_realist: 1 } },
        { text: "只在感觉自己最近\"运气不错\"的时候才买", score: { intuitive_mystic: 3, lucky_koi: 1 } }
      ]
    },
    {
      id: 11,
      text: "当你做一件事连续失败了三次，你会怎么想？",
      options: [
        { text: "觉得这是老天爷在劝退，可能我真的不适合，该放弃了", score: { fate_resigned: 3, pessimistic_defender: 1 } },
        { text: "复盘失败原因，调整方法，继续尝试第四次", score: { practical_realist: 3, destiny_changer: 1 } },
        { text: "先停下来休息一下，换个心情转转运，过段时间再说", score: { superstitious_ritualist: 2, zen_buddhist: 1 } },
        { text: "更加倔强，不信这个邪，非要死磕到底", score: { destiny_changer: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 12,
      text: "对于\"水逆\"、\"新月许愿\"、\"转发锦鲤\"这些网络玄学，你的态度是？",
      options: [
        { text: "深信不疑，每次水逆都提前做好准备，转发从不落下", score: { mercury_retrograde_victim: 3, superstitious_ritualist: 1 } },
        { text: "知道是娱乐，但也会跟着凑热闹许愿，万一实现了呢", score: { curious_explorer: 3, lucky_koi: 1 } },
        { text: "完全无感，觉得这是新时代的迷信，无聊", score: { rational_skeptic: 3, detached_stoic: 1 } },
        { text: "了解一点，但不影响我的生活，看着大家玩也挺有趣", score: { cold_observer: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 13,
      text: "你的同事离职后，在新公司发展得风生水起，而你还在这里原地踏步，你会怎么想？",
      options: [
        { text: "人家命好，羡慕不来，各有各的运", score: { fate_resigned: 3, zen_buddhist: 1 } },
        { text: "那是他有眼光有魄力，抓住了好机会", score: { rational_skeptic: 3, practical_realist: 1 } },
        { text: "有点后悔，当时我要是也跳槽就好了", score: { inner_consume: 3, anxious_fortuneteller: 1 } },
        { text: "无所谓，每个人节奏不同，我也有我的路", score: { secure_anchor: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 14,
      text: "你认为一个人的运气可以通过什么方式改变？",
      options: [
        { text: "多做好事，积攒福报，善有善报", score: { karma_believer: 3, grateful_heart: 1 } },
        { text: "调整心态，积极乐观，好运自然会被吸引来", score: { manifestation_guru: 3, blessed_optimist: 1 } },
        { text: "很难改变，运气本质上是随机的", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "实力变强了，能抓住的机会多了，运气自然显得好", score: { practical_realist: 3, destiny_changer: 1 } }
      ]
    },
    {
      id: 15,
      text: "当你面对一个看起来\"稳赚不赔\"、\"名额有限\"的投资或机会时，你的第一想法是？",
      options: [
        { text: "天上掉馅饼了，赶紧抓住，错过这个村就没这个店了", score: { risk_taker: 3, impulsive: 1 } },
        { text: "先冷静调查清楚，为什么这种好事会轮到我？有没有坑？", score: { cautious_observer: 3, rational_skeptic: 1 } },
        { text: "有点心动，但大概率是骗局，不碰为妙", score: { pessimistic_defender: 3, security_hoarder: 1 } },
        { text: "如果是自己熟悉的领域就小额试试，不熟就算了", score: { practical_realist: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 16,
      text: "如果明天是世界末日（假设），你会怎么度过最后一天？",
      options: [
        { text: "去做一直想做但不敢做的事，比如表白、辞职、花光积蓄", score: { risk_taker: 3, experience_seeker: 1 } },
        { text: "和家人爱人紧紧依偎在一起，平静地等待那一刻", score: { secure_anchor: 3, grateful_heart: 1 } },
        { text: "该干嘛干嘛，反正也改变不了，不如保持日常", score: { detached_stoic: 3, zen_buddhist: 1 } },
        { text: "赶紧把后事安排好，把没交代的事情处理完", score: { future_planner: 3, practical_realist: 1 } }
      ]
    },
    {
      id: 17,
      text: "你对于手机 App 推送的\"星座运势\"怎么看？",
      options: [
        { text: "每天必看，甚至会根据运势建议决定穿什么颜色的衣服", score: { superstitious_ritualist: 3, anxious_fortuneteller: 1 } },
        { text: "只看好的，坏的自动忽略，图个吉利", score: { blessed_optimist: 3, lucky_koi: 1 } },
        { text: "从来不看，觉得是巴纳姆效应，说谁都像", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "偶尔打发时间看看，但不会往心里去", score: { curious_explorer: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 18,
      text: "你的好朋友买彩票中了 10 万块，你的第一反应是？",
      options: [
        { text: "立刻让他请客，沾沾喜气！", score: { lucky_koi: 3, social_butterfly: 1 } },
        { text: "真心为他高兴，但觉得这事儿跟自己关系不大", score: { secure_anchor: 3, rational_skeptic: 1 } },
        { text: "心里酸酸的，羡慕嫉妒恨，怎么我就没这个命", score: { inner_consume: 3, anxious_fortuneteller: 1 } },
        { text: "立刻也去买一张彩票，感觉好运在流动", score: { risk_taker: 3, superstitious_ritualist: 1 } }
      ]
    },
    {
      id: 19,
      text: "你对\"墨菲定律\"（越怕什么越来什么）的看法是？",
      options: [
        { text: "太准了，经常在我身上应验，怕啥来啥", score: { mercury_retrograde_victim: 3, pessimistic_defender: 1 } },
        { text: "是因为害怕导致过度关注和紧张，才容易出错", score: { rational_skeptic: 3, practical_realist: 1 } },
        { text: "只是一个有趣的心理学现象，不用太当真", score: { curious_explorer: 3, cold_observer: 1 } },
        { text: "没注意过，不觉得对我有什么影响", score: { detached_stoic: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 20,
      text: "你认为人生的轨迹更像什么？",
      options: [
        { text: "一条起伏不定的曲线，有高峰有低谷，有运气的成分", score: { balanced_mediator: 3, zen_buddhist: 1 } },
        { text: "一条总体上扬的线，只要努力，就会慢慢变好", score: { practical_realist: 3, destiny_changer: 1 } },
        { text: "一张复杂的网，充满随机和偶然，难以预测", score: { cold_observer: 3, chance_embracer: 1 } },
        { text: "一部写好的剧本，我们只是演员，不知道下一页", score: { fate_resigned: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 21,
      text: "如果让你用一个词形容自己近期的运势，你会选？",
      options: [
        { text: "平稳（不好不坏，波澜不惊）", score: { balanced_mediator: 3, practical_realist: 1 } },
        { text: "波折（经常遇到计划外的意外）", score: { mercury_retrograde_victim: 3, anxious_fortuneteller: 1 } },
        { text: "渐入佳境（感觉一切都在慢慢变好）", score: { blessed_optimist: 3, lucky_koi: 1 } },
        { text: "看心情（时好时坏，摸不准规律）", score: { chance_embracer: 3, intuitive_mystic: 1 } }
      ]
    },
    {
      id: 22,
      text: "突然有个陌生人能准确说出你过去的某段私密经历，你的第一反应是？",
      options: [
        { text: "这人是不是有神通？或者会算命？", score: { superstitious_ritualist: 3, intuitive_mystic: 1 } },
        { text: "我的个人信息是不是泄露了？他是谁？", score: { cautious_observer: 3, rational_skeptic: 1 } },
        { text: "可能是巧合，或者他在别的地方见过我", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "后背发凉，觉得有点恐怖，想立刻离开", score: { energy_sensitive: 3, pessimistic_defender: 1 } }
      ]
    },
    {
      id: 23,
      text: "你如何看待\"运气守恒定律\"（倒霉久了总会走运）？",
      options: [
        { text: "我相信，苦尽总会甘来，倒霉是给好运攒人品", score: { balanced_mediator: 3, blessed_optimist: 1 } },
        { text: "是一种自我安慰的心理暗示，但挺有用的", score: { rational_skeptic: 2, zen_buddhist: 1 } },
        { text: "不相信，每次抛硬币正反面的概率都是独立的", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "希望是真的，虽然没证据，但这样想会好过一点", score: { anxious_fortuneteller: 2, pessimistic_defender: 1 } }
      ]
    },
    {
      id: 24,
      text: "去一个陌生的地方旅行前，你会不会查一下当地的风水、禁忌或习俗？",
      options: [
        { text: "会，宁可信其有，不可信其无，入乡随俗", score: { cautious_observer: 3, superstitious_ritualist: 1 } },
        { text: "如果是很有名、很特别的地方会稍微了解一下", score: { curious_explorer: 3, practical_realist: 1 } },
        { text: "不会，百无禁忌，现代社会了", score: { rational_skeptic: 3, free_spirit: 1 } },
        { text: "不会主动查，但如果别人提醒了就会注意", score: { balanced_mediator: 2, easygoing: 1 } }
      ]
    },
    {
      id: 25,
      text: "你觉得自己看待世界的方式更偏向哪种？",
      options: [
        { text: "乐观主义（总相信好事会发生，乌云背后有金边）", score: { blessed_optimist: 3, lucky_koi: 1 } },
        { text: "悲观主义（习惯先想好最坏结果，免得失望）", score: { pessimistic_defender: 3, mercury_retrograde_victim: 1 } },
        { text: "现实主义（客观看待事实和概率，不幻想）", score: { practical_realist: 3, rational_skeptic: 1 } },
        { text: "超然主义（无所谓好坏，一切如其所是）", score: { detached_stoic: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 26,
      text: "朋友做了一个梦，梦见你会有好事发生，特意跑来告诉你，你会？",
      options: [
        { text: "非常开心，觉得这是个好兆头，最近要留意机会", score: { lucky_koi: 3, superstitious_ritualist: 1 } },
        { text: "谢谢他的好意，但心里不太当真", score: { rational_skeptic: 3, balanced_mediator: 1 } },
        { text: "开玩笑说\"借你吉言\"，并请他吃饭", score: { grateful_heart: 3, social_butterfly: 1 } },
        { text: "觉得梦都是反的，心里反而有点担心", score: { pessimistic_defender: 3, anxious_fortuneteller: 1 } }
      ]
    },
    {
      id: 27,
      text: "你会不会因为某天是\"13号星期五\"或者\"诸事不宜\"而推迟做重要的事？",
      options: [
        { text: "会，特意避开，不想触霉头", score: { superstitious_ritualist: 3, anxious_fortuneteller: 1 } },
        { text: "心里会犯嘀咕，但如果没有别的日子可选，还是会做", score: { cautious_observer: 3, balanced_mediator: 1 } },
        { text: "完全不会，那是外国的迷信，对我无效", score: { rational_skeptic: 3, detached_stoic: 1 } },
        { text: "根本没注意过这种日子，该干嘛干嘛", score: { practical_realist: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 28,
      text: "当你遇到一连串的好事时（比如升职加薪、中奖、桃花运爆棚），你会？",
      options: [
        { text: "尽情享受，觉得自己终于转运了，大肆庆祝", score: { lucky_koi: 3, risk_taker: 1 } },
        { text: "一边开心一边隐隐担忧，怕乐极生悲，后面有坏事等着", score: { pessimistic_defender: 3, balanced_mediator: 1 } },
        { text: "觉得是自己之前努力的结果，应得的回报", score: { practical_realist: 3, destiny_changer: 1 } },
        { text: "平常心对待，好事坏事都是生活的常态", score: { zen_buddhist: 3, detached_stoic: 1 } }
      ]
    },
    {
      id: 29,
      text: "关于\"转运\"的方法，你尝试过或者最倾向于哪一种？",
      options: [
        { text: "改变外在：换发型、换穿衣风格、换微信头像", score: { superstitious_ritualist: 2, lucky_koi: 1 } },
        { text: "清理环境：大扫除、扔掉旧物、整理房间", score: { manifestation_guru: 3, minimalist: 1 } },
        { text: "寻求心灵寄托：去寺庙拜拜、祷告、冥想", score: { karma_believer: 3, zen_buddhist: 1 } },
        { text: "什么都没试过，不信这个，靠自己才是王道", score: { rational_skeptic: 3, practical_realist: 1 } }
      ]
    },
    {
      id: 30,
      text: "你认为一个人能否通过\"意念\"或\"吸引力法则\"来改变自己的现实？",
      options: [
        { text: "能，心诚则灵，宇宙会接收到你的订单", score: { manifestation_guru: 3, intuitive_mystic: 1 } },
        { text: "能起到辅助作用，但必须配合实际行动", score: { practical_realist: 3, balanced_mediator: 1 } },
        { text: "不能，纯属自我欺骗和幸存者偏差", score: { rational_skeptic: 3, cold_observer: 1 } },
        { text: "不知道，但觉得挺有意思的，愿意试试", score: { curious_explorer: 3, chance_embracer: 1 } }
      ]
    },
    {
      id: 31,
      text: "最后，如果运气有形状，你觉得它最像什么？",
      options: [
        { text: "风（看不见摸不着，但能感觉到它的存在）", score: { intuitive_mystic: 3, energy_sensitive: 1 } },
        { text: "云（变幻莫测，永远在流动和改变形状）", score: { chance_embracer: 3, zen_buddhist: 1 } },
        { text: "流水（有时湍急有时平缓，但一直向前）", score: { balanced_mediator: 3, grateful_heart: 1 } },
        { text: "齿轮（环环相扣，所有偶然背后都有因果）", score: { karma_believer: 3, practical_realist: 1 } }
      ]
    }
  ],
  personalities: [
    { id: "lucky_koi", name: "人间锦鲤", description: "你就是行走的好运磁铁，总能莫名其妙地赶上最后一秒、捡到便宜、遇到贵人。别人觉得你命好，其实是你天生的乐观和开放心态，让你更容易发现并抓住生活中的小确幸。你相信自己是幸运的，于是你真的变得很幸运。" },
    { id: "pessimistic_defender", name: "悲观防御塔", description: "你习惯先把事情往最坏处想，因为你觉得只要做好了最坏打算，就不会受伤害。这是一种充满智慧的心理防御机制。有趣的是，因为你总在降低预期，所以生活常常能给你意外的惊喜。坏运气看到你这座防御塔，往往绕道而行。" },
    { id: "zen_buddhist", name: "随缘佛系体", description: "运气好坏对你来说皆是浮云。得之我幸，失之我命，你不对任何结果过于执着。这种随缘的态度让你拥有了强大的情绪缓冲能力，命运的起伏在你这里被自动平滑。不争不抢，反而常常能收获意想不到的礼物。" },
    { id: "destiny_changer", name: "逆天改命者", description: "你不信命，只信自己。哪怕老天发给你一副烂牌，你也能咬着牙把它打成王炸。你的字典里没有\"运气不好\"，只有\"努力不够\"。你用汗水和倔强，硬生生地在既定的命运轨迹上凿出了一条属于自己的路。" },
    { id: "superstitious_ritualist", name: "玄学仪式爱好者", description: "水逆要转发锦鲤，考试要拜杨超越，出门要看黄历。你热衷于各种转运小仪式，不管科学不科学，图个心安理得。这些小小的仪式感是你对抗不确定性世界的法宝，给你一种\"我努力过了\"的心理安慰。" },
    { id: "rational_skeptic", name: "清醒的唯物主义者", description: "你的字典里没有\"运气\"，只有\"概率\"。你相信科学，热爱逻辑，对一切无法证伪的玄学嗤之以鼻。这种清醒让你很少被忽悠，但也让你在别人讨论星座水逆时显得有点格格不入。你坚信，掌控命运的唯一方式是理性决策。" },
    { id: "intuitive_mystic", name: "直觉系预言家", description: "你的第六感准得可怕，经常靠直觉躲开麻烦、选中正确答案。你相信内心深处有某种超越理性的声音在指引你。别人说你神神叨叨，但每次你的预感成真时，他们又不得不服。你就像一个行走的人体雷达。" },
    { id: "karma_believer", name: "因果报应监督员", description: "你坚信善有善报，恶有恶报；不是不报，时候未到。所以你严于律己，广结善缘，默默地看着那些作恶的人何时翻车。你把人生看作一个长期的投资账户，存入善意，静待福报的复利。" },
    { id: "risk_taker", name: "梭哈冒险家", description: "人生就是一场豪赌，你敢把全部筹码压上。赢了会所嫩模，输了下海干活。你的运势曲线像过山车一样大起大落，但你享受这种刺激。你对风险有天生的嗜好，认为富贵险中求，安稳的人生太无趣。" },
    { id: "cautious_observer", name: "谨慎观望者", description: "面对任何机会，你都会反复确认、评估风险。虽然有时会因为想太多而错过风口，但也因此完美避开了无数深坑。你的运势没有大起大落，像一条平稳的直线。稳稳的幸福，才是你的追求。" },
    { id: "serendipity_seeker", name: "意外惊喜收集者", description: "你有一双发现美的眼睛，总能在糟糕的一天里找到那颗糖。你不追求大富大贵，却热衷于收集生活中的小确幸：便利店的最后一份便当、路上遇到的小猫、陌生人的一个微笑。这些小小的好运，构成了你每天的幸福感。" },
    { id: "mercury_retrograde_victim", name: "水逆专业户", description: "你是不是经常怀疑自己被水逆之神标记了？手机碎屏、航班取消、文件没保存……各种乌龙和电子设备故障总是精准地找上你。虽然你很倒霉，但你的自嘲精神和对水逆周期的专业研究，让你成为了朋友中的\"避雷指南\"。" },
    { id: "manifestation_guru", name: "显化大师", description: "你深谙吸引力法则，每天都在向宇宙下订单。你想要的东西，会把它具象化、视觉化，然后神奇的是，它们往往真的会被吸引到你的生活中来。你相信思想是有频率的，而你调频的能力一流。" },
    { id: "cold_observer", name: "局外旁观者", description: "别人在运势的浪潮里载浮载沉，你站在岸边冷静观察。你拥有一种抽离感，能看透世事无常的本质。你不投入，所以也不受伤。这种冷眼旁观的智慧，让你在动荡中始终保持着一种难得的清醒。" },
    { id: "nostalgia_guardian", name: "守旧的怀旧者", description: "你总觉得过去的时光更美好，过去的音乐更好听，过去的入更真诚。你对新时代的快速变化感到些许不安，你的运势似乎也停留在了你最怀念的那个旧时代。你在回忆里筑巢，那里是你最安全的避风港。" },
    { id: "future_anticipator", name: "未来的憧憬家", description: "你永远在期待明天。哪怕今天再倒霉，你也坚信明天太阳升起时，会有好事发生。希望是你生活的原动力。你的眼睛永远望着远方，这种向前看的姿态，让你的运势也仿佛一直走在一条向上的坡道上。" },
    { id: "balanced_mediator", name: "守恒定律信仰者", description: "你坚信运气是守恒的，倒霉久了必定会有补偿。所以你在低谷时心态特别稳，知道这是给未来的好运攒人品。这种朴素的平衡哲学，让你面对得失非常坦然，不怨天尤人，静待花开。" },
    { id: "blessed_optimist", name: "天生乐天派", description: "你自带柔光滤镜看世界，坏事在你眼里也能找到笑点。你的乐观不是没心没肺，而是一种强大的精神力。因为你不把坏事当坏事，所以坏事似乎也不怎么来找你。爱笑的人，运气真的不会太差。" },
    { id: "fate_resigned", name: "认命的宿命论者", description: "你觉得一切都是写好的剧本，挣扎无用。虽然听起来有点消极，但全然接受命运的安排，反而让你的内心获得了巨大的平静。你不再内耗，不再焦虑，像一片落叶顺着命运的河流飘荡，反而常常漂到意想不到的美丽地方。" },
    { id: "energy_sensitive", name: "能量敏感体质", description: "你能敏锐感知到一个地方或一个人的\"气场\"。去晦气的地方你会不舒服，遇到好运的人你也想蹭蹭。你像一个行走的能量探测仪，本能地趋吉避凶。保护好自己的能量场，是你最重要的生存法则。" },
    { id: "curious_explorer", name: "好奇探险家", description: "你对一切未知的玄学领域都抱有孩童般的好奇心。塔罗、占星，八字、人类图……你都略懂皮毛，并乐在其中。你不一定全信，但这种探索本身给你带来了无穷的乐趣。你是一个精神世界的漫游者。" },
    { id: "practical_realist", name: "务实耕耘者", description: "不谈虚的，你只相信一分耕耘一分收获。你的运气全靠汗水换来。别人看到的是你运气好，只有你知道自己付出了多少。你的运势是一条缓慢但坚定上升的实线，每一步都踩得扎扎实实。" },
    { id: "anxious_fortuneteller", name: "焦虑占卜师", description: "一遇到事就想算一卦，塔罗牌抽了一张又一张，直到抽到好牌才安心。如果算到不好的，你会更焦虑，然后继续算，陷入死循环。你需要知道的不是未来，而是如何安放你当下的焦虑。" },
    { id: "detached_stoic", name: "斯多葛隐士", description: "你能清晰地分辨什么是你能控制的，什么是你不能控制的。对于运气、他人评价，天灾人祸这些不可控的东西，你选择彻底无视。你把所有精力都放在可控的事情上，内心强大到令人害怕。" },
    { id: "chance_embracer", name: "随机漫步者", description: "你喜欢随机的乐趣。不做攻略的旅行，闭眼点菜，让骰子决定今晚干嘛。你把自己交给偶然，因此你的人生充满了意想不到的转折和奇遇。你相信，最美的风景往往出现在计划之外。" },
    { id: "grateful_heart", name: "感恩充电宝", description: "你总是对生活中的一切心存感激，哪怕是很小的事。这种感恩的心态让你自带暖光，吸引了无数愿意帮助你的贵人。你的好运，很大程度上是你自己用感谢吸引来的。" },
    { id: "veteran_survivor", name: "打不死的小强", description: "运势极差？没关系，你的恢复力极强。摔倒了一百次，你能第一百零一次站起来，拍拍土继续走。你的人生弹性十足，没有什么能真正击垮你。这种顽强的生命力，本身就是一种最大的好运。" }
  ],
  score_aliases: {
    grateful_heart: ["grateful_heart", "nostalgia_guardian"],
    future_planner: "future_anticipator",
    destiny_changer: ["destiny_changer", "veteran_survivor"]
  },
  hidden_personalities: [
    {
      id: "hidden_astrologer",
      name: "隐藏人格：行走的黄历",
      description: "你对日子的讲究已经到了令人发指的地步。大事小事都要择日，婚丧嫁娶、搬家开业自不必说，连出门买菜都要看一眼\"宜出行\"还是\"宜宅家\"。你就是朋友圈里活生生的宜忌指南，一人形黄历。",
      trigger: (answers) => answers.filter(a => a && (a.includes("宜") || a.includes("忌") || a.includes("日子") || a.includes("黄历") || a.includes("水逆"))).length >= 6
    },
    {
      id: "hidden_luck_stealer",
      name: "隐藏人格：吸欧气大师",
      description: "你有一种神奇的超能力：总能精准地蹭到别人的好运。朋友中奖你要去摸人家手，看到锦鲤你要转发，甚至能通过和运气好的人聊天来改善自己的运势。你像一台人形欧气吸收机，让倒霉的人在你身边都能转运。",
      trigger: (answers) => answers.filter(a => a && (a.includes("蹭") || a.includes("沾") || a.includes("好运") || a.includes("锦鲤") || a.includes("转发"))).length >= 5
    }
  ]
};
