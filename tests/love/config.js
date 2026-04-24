export default {
  id: "love",
  title: "恋爱人格测试",
  questions: [
    {
      id: 1,
      text: "辛苦了一天，你满身疲惫地推开家门，此刻你最希望伴侣为你做什么？",
      options: [
        { text: "什么也不说，直接走过来给你一个结实的，长久的拥抱", score: { physical_touch_hungry: 3, secure_lover: 1 } },
        { text: "看着你的眼睛认真说：\"辛苦了，我相信你能搞定一切。", score: { words_of_affirmation_love: 3, secure_lover: 1 } },
        { text: "已经默默准备好了一桌热饭热菜，或你最爱吃的零食", score: { acts_of_service: 3, nurturing_caregiver: 1 } },
        { text: "坐下来，耐心听你吐槽今天的所有糟心事，哪怕全是负能量", score: { quality_time_seeker: 3, empathy_sponge: 1 } }
      ]
    },
    {
      id: 2,
      text: "当你对一个人产生好感时，你通常会怎么做？",
      options: [
        { text: "主动出击，制造机会聊天、约饭，打直球", score: { secure_lover: 3, golden_retriever_energy: 1 } },
        { text: "释放一些暧昧信号，但等对方来主动表白", score: { black_cat_energy: 3, fearful_paradox: 1 } },
        { text: "默默放在心里观察，反复纠结要不要说出口", score: { secret_admirer: 3, anxious_lover: 1 } },
        { text: "顺其自然，缘分到了自然会在一起", score: { zen_buddhist: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 3,
      text: "你和伴侣因为一件小事（比如吃什么、谁洗碗）闹别扭，冷了一小时，你通常会？",
      options: [
        { text: "主动凑过去撒娇或搭话，打破沉默", score: { secure_lover: 3, golden_retriever_energy: 1 } },
        { text: "等对方先低头，绝不先开口", score: { cold_war_champion: 3, avoidant_loner: 1 } },
        { text: "假装什么都没发生，直接聊别的", score: { conflict_avoider_love: 3, people_pleaser: 1 } },
        { text: "自己生闷气，但希望对方能发现并来哄我", score: { anxious_lover: 3, fearful_paradox: 1 } }
      ]
    },
    {
      id: 4,
      text: "在一段亲密关系中，你的安全感主要来源于？",
      options: [
        { text: "频繁的联系、报备和对方的秒回", score: { anxious_lover: 3 } },
        { text: "彼此绝对的忠诚和信任，不需要时刻监控", score: { secure_lover: 3 } },
        { text: "有清晰的未来规划和经济基础", score: { practical_partner: 3, future_planner: 1 } },
        { text: "灵魂深处的共鸣和被理解的感觉", score: { old_soul: 3, quality_time_seeker: 1 } }
      ]
    },
    {
      id: 5,
      text: "伴侣完全忘记了今天是你们的纪念日，没有任何表示，你会？",
      options: [
        { text: "非常失落甚至生气，觉得对方根本不在乎我", score: { anxious_lover: 3, romantic_dreamer: 1 } },
        { text: "有点失落，但会半开玩笑地提醒：\"今天是不是忘了什么？", score: { secure_lover: 2, words_of_affirmation: 1 } },
        { text: "无所谓，我自己也忘了，纪念日就是个形式", score: { practical_partner: 3, rational_analyzer: 1 } },
        { text: "嘴上说没关系，但心里默默记上一笔，等下次吵架翻旧账", score: { cold_war_champion: 3, inner_consume: 1 } }
      ]
    },
    {
      id: 6,
      text: "恋爱中，你更倾向于哪种相处模式？",
      options: [
        { text: "时刻黏在一起，做什么都要一起，分开就疯狂思念", score: { anxious_lover: 3, golden_retriever_energy: 1 } },
        { text: "平时各忙各的，但每天有固定的聊天或视频时间", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "随性而为，想找就找，不想找就消失，讨厌被束缚", score: { free_bird: 3, avoidant_loner: 1 } },
        { text: "需要大量独立空间，有时甚至希望对方别来烦我", score: { avoidant_loner: 3, lone_wolf: 1 } }
      ]
    },
    {
      id: 7,
      text: "你在伴侣的手机里无意中看到了他/她前任的联系方式，你会？",
      options: [
        { text: "直接问，并要求对方删掉", score: { jealous_guardian: 3, anxious_lover: 1 } },
        { text: "心里很不舒服，但假装大度，暗自观察", score: { fearful_paradox: 3, inner_consume: 1 } },
        { text: "信任对方，觉得留着联系方式也没什么", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "偷偷翻看更多记录，确认有没有越界行为", score: { anxious_lover: 3, jealous_guardian: 1 } }
      ]
    },
    {
      id: 8,
      text: "伴侣突然升职加薪，收入变成你的好几倍，你的第一反应是？",
      options: [
        { text: "真心为Ta骄傲，觉得与有荣焉", score: { secure_lover: 3, golden_retriever_energy: 1 } },
        { text: "有点焦虑和自卑，担心自己配不上Ta了", score: { anxious_lover: 3, inner_consume: 1 } },
        { text: "暗暗下定决心，自己要更努力，不能落后", score: { destiny_changer: 3, practical_realist: 1 } },
        { text: "太好了，以后可以多花Ta的钱了", score: { receiver_prince: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 9,
      text: "当你自己压力很大、情绪低落时，最希望伴侣怎么做？",
      options: [
        { text: "安静陪在我身边，不需要说话，抱抱我就好", score: { physical_touch_hungry: 3, secure_lover: 1 } },
        { text: "带我出去吃好吃的、逛街、散心，转移注意力", score: { experience_seeker: 3, quality_time_seeker: 1 } },
        { text: "帮我理性分析问题，给出实际的解决方案", score: { rational_analyzer: 3, acts_of_service: 1 } },
        { text: "给我足够的独处空间，让我自己消化", score: { avoidant_loner: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 10,
      text: "关于在社交媒体上\"秀恩爱\"，你的态度是？",
      options: [
        { text: "非常喜欢秀，恨不得全世界都知道我们很相爱", score: { romantic_dreamer: 3, spotlight_seeker: 1 } },
        { text: "偶尔发发，纪念日和特别时刻会记录", score: { memory_keeper: 3, balanced_mediator: 1 } },
        { text: "很少发，觉得恋爱是两个人的事，没必要给别人看", score: { secure_lover: 3, gentle_guardian: 1 } },
        { text: "坚决不发，注重隐私，也怕日后打脸", score: { avoidant_loner: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 11,
      text: "当你们对未来规划（比如定居城市、要不要孩子）产生重大分歧时，你会？",
      options: [
        { text: "坚持自己的想法，希望对方能为我妥协", score: { receiver_prince: 3, assertive: 1 } },
        { text: "我愿意为了爱情改变自己的人生计划", score: { giver_martyr: 3, romantic_dreamer: 1 } },
        { text: "寻找一个双方都能接受的折中方案", score: { secure_lover: 3, mediator: 1 } },
        { text: "暂时搁置争议，以后再说，走一步看一步", score: { conflict_avoider_love: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 12,
      text: "你觉得自己在恋爱中，最容易犯的\"毛病\"是？",
      options: [
        { text: "患得患失，总担心对方不爱自己或会离开", score: { anxious_lover: 3 } },
        { text: "忽冷忽热，需要时很粘人，不需要时想消失", score: { fearful_paradox: 3, avoidant_loner: 1 } },
        { text: "占有欲强，容易吃醋，看谁都像情敌", score: { jealous_guardian: 3 } },
        { text: "过度付出，把对方照顾得太好，却忽略了自己", score: { giver_martyr: 3, nurturing_caregiver: 1 } }
      ]
    },
    {
      id: 13,
      text: "你和伴侣窝在沙发上看电影，你更偏好哪种类型的影片？",
      options: [
        { text: "轰轰烈烈、生离死别的爱情悲剧", score: { romantic_dreamer: 3, drama_queen: 1 } },
        { text: "甜到掉牙、全程姨母笑的浪漫喜剧", score: { golden_retriever_energy: 3, blessed_optimist: 1 } },
        { text: "烧脑、悬疑，需要动脑子的剧情片", score: { rational_analyzer: 3, curious_explorer: 1 } },
        { text: "真实细腻、探讨人性的生活剧情片", score: { old_soul: 3, deep_travel: 1 } }
      ]
    },
    {
      id: 14,
      text: "朋友告诉你，看到你的伴侣和一个异性单独吃饭（可能是正常社交），你会？",
      options: [
        { text: "立刻打电话或发消息质问", score: { anxious_lover: 3, jealous_guardian: 1 } },
        { text: "心里咯噔一下，但表面镇定说\"哦，我知道的", score: { fearful_paradox: 3, poker_face: 1 } },
        { text: "觉得正常，谁还没个异性朋友，不放在心上", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "等伴侣主动跟我提这件事，不提就是心里有鬼", score: { cold_war_champion: 3, inner_consume: 1 } }
      ]
    },
    {
      id: 15,
      text: "你更欣赏伴侣具备以下哪种核心品质？",
      options: [
        { text: "浪漫、有情调，会制造惊喜", score: { romantic_dreamer: 3, gift_lover: 1 } },
        { text: "忠诚、有责任感、让人安心", score: { secure_lover: 3, practical_partner: 1 } },
        { text: "有趣、幽默，能玩到一起", score: { class_clown: 3, golden_retriever_energy: 1 } },
        { text: "成熟、情绪稳定，能引导我", score: { secure_anchor: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 16,
      text: "在亲密的身体接触方面（拥抱、接吻、性），你的状态更接近？",
      options: [
        { text: "主动热情型，非常喜欢肢体接触，经常求抱抱", score: { physical_touch_hungry: 3, golden_retriever_energy: 1 } },
        { text: "被动慢热型，需要氛围和情绪到位才行", score: { black_cat_energy: 3, romantic_dreamer: 1 } },
        { text: "可有可无，精神上的交流和共鸣对我更重要", score: { old_soul: 3, rational_analyzer: 1 } },
        { text: "有点回避和紧张，对过于亲密的接触感到不适", score: { avoidant_loner: 3, fearful_paradox: 1 } }
      ]
    },
    {
      id: 17,
      text: "如果你们最终分开了，你觉得最可能的原因会是什么？",
      options: [
        { text: "不爱了，新鲜感消失了，感情淡了", score: { romantic_dreamer: 3, experience_seeker: 1 } },
        { text: "性格不合，三天一小吵五天一大吵", score: { justice_warrior: 3, emotion_explode: 1 } },
        { text: "现实因素（异地、家庭反对，经济压力）", score: { practical_partner: 3, future_planner: 1 } },
        { text: "一方出轨或信任彻底破裂", score: { jealous_guardian: 3, anxious_lover: 1 } }
      ]
    },
    {
      id: 18,
      text: "伴侣在你面前突然情绪崩溃哭了出来（无论男女），你的第一反应是？",
      options: [
        { text: "心都碎了，立刻紧紧抱住，轻声安慰", score: { nurturing_caregiver: 3, physical_touch_hungry: 1 } },
        { text: "手足无措，不知道说什么，只能递纸巾", score: { anxious_lover: 3, social_shy: 1 } },
        { text: "冷静询问原因，帮他/她理性分析解决问题", score: { rational_analyzer: 3, acts_of_service: 1 } },
        { text: "觉得有点烦或尴尬，希望Ta快点平静下来", score: { avoidant_loner: 3, cold_observer: 1 } }
      ]
    },
    {
      id: 19,
      text: "你如何看待伴侣查看你的手机这件事？",
      options: [
        { text: "随便看，我没有任何秘密，密码就是Ta生日", score: { secure_lover: 3, golden_retriever_energy: 1 } },
        { text: "可以看，但我会有点不舒服，感觉不被信任", score: { gentle_guardian: 3, rational_analyzer: 1 } },
        { text: "坚决不行，这是我的个人隐私，即使恋爱也要有边界", score: { avoidant_loner: 3, justice_warrior: 1 } },
        { text: "我不看Ta的，Ta也别看我的，互相尊重", score: { balanced_mediator: 3, gentle_guardian: 1 } }
      ]
    },
    {
      id: 20,
      text: "正在恋爱中，你遇到了一个非常有魅力的异性，你会？",
      options: [
        { text: "欣赏一下美好的事物，但不会有任何非分之想", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "心里默默对比一下现任，甚至有点动摇", score: { fearful_paradox: 3, inner_consume: 1 } },
        { text: "刻意保持距离，避免任何可能引起误会的接触", score: { gentle_guardian: 3, cautious_observer: 1 } },
        { text: "觉得这很正常，魅力人人都有，不会影响我的感情", score: { secure_anchor: 3, cold_observer: 1 } }
      ]
    },
    {
      id: 21,
      text: "你觉得最浪漫的求婚或告白场景应该是？",
      options: [
        { text: "在很多人的见证下，盛大而惊喜的仪式", score: { romantic_dreamer: 3, spotlight_seeker: 1 } },
        { text: "只有两个人的私密空间，深情对视", score: { old_soul: 3, quality_time_seeker: 1 } },
        { text: "在日常生活中顺其自然地发生，没有刻意安排", score: { practical_partner: 3, zen_buddhist: 1 } },
        { text: "不需要形式，心里认定了比什么都重要", score: { rational_analyzer: 3, minimalist: 1 } }
      ]
    },
    {
      id: 22,
      text: "对于伴侣的\"前任\"，你的真实态度是？",
      options: [
        { text: "非常介意，希望永远不要提起，最好没存在过", score: { jealous_guardian: 3, anxious_lover: 1 } },
        { text: "会好奇，但问多了自己又生气，很矛盾", score: { fearful_paradox: 3, inner_consume: 1 } },
        { text: "不关心，那是过去的事了，与我无关", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "可以接受做普通朋友，但要有界限", score: { secure_anchor: 3, gentle_guardian: 1 } }
      ]
    },
    {
      id: 23,
      text: "如果你的家人强烈反对你和现在的伴侣在一起，你会？",
      options: [
        { text: "为了爱情与全世界为敌，抗争到底", score: { romantic_dreamer: 3, destiny_changer: 1 } },
        { text: "尝试说服家人，不行就先拖着，等他们接受", score: { mediator: 3, conflict_avoider_love: 1 } },
        { text: "内心非常痛苦纠结，可能会在压力下放弃", score: { anxious_lover: 3, people_pleaser: 1 } },
        { text: "看伴侣的态度，如果他/她坚定我就坚定", score: { secure_lover: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 24,
      text: "你觉得在这段关系中，你通常是？",
      options: [
        { text: "付出和爱得更多的那一方", score: { giver_martyr: 3, nurturing_caregiver: 1 } },
        { text: "享受被爱更多的那一方", score: { receiver_prince: 3 } },
        { text: "两人付出差不多，关系比较平衡", score: { secure_lover: 3, balanced_mediator: 1 } },
        { text: "看心情，有时我付出多，有时对方付出多", score: { flexible: 3, emotional_rollercoaster: 1 } }
      ]
    },
    {
      id: 25,
      text: "你和伴侣的兴趣爱好完全不同（比如他爱打游戏，你爱看展），你们通常会？",
      options: [
        { text: "努力尝试去了解并融入对方的世界", score: { giver_martyr: 3, golden_retriever_energy: 1 } },
        { text: "各玩各的，互不干涉，尊重彼此爱好", score: { secure_lover: 3, gentle_guardian: 1 } },
        { text: "找一些两人都能接受的共同活动一起做", score: { mediator: 3, rational_analyzer: 1 } },
        { text: "心里希望对方能为我改变，陪我玩我喜欢的", score: { receiver_prince: 3, anxious_lover: 1 } }
      ]
    },
    {
      id: 26,
      text: "伴侣在你面前夸别的异性（比如明星或同事）长得好看/有才华，你会？",
      options: [
        { text: "当场吃醋，表现出来，甚至有点小生气", score: { jealous_guardian: 3, anxious_lover: 1 } },
        { text: "心里翻白眼，但表面保持微笑", score: { poker_face: 3, inner_consume: 1 } },
        { text: "跟着一起客观评价，甚至一起欣赏", score: { secure_lover: 3, rational_analyzer: 1 } },
        { text: "开玩笑说：\"怎么，嫌弃我了是不是？", score: { class_clown: 3, words_of_affirmation: 1 } }
      ]
    },
    {
      id: 27,
      text: "关于婚前同居或试婚，你的看法是？",
      options: [
        { text: "一定要婚前同居，才能看清对方真实的样子", score: { practical_partner: 3, rational_analyzer: 1 } },
        { text: "可以接受，但最好是以结婚为前提", score: { secure_lover: 3, future_planner: 1 } },
        { text: "比较传统保守，不太能接受", score: { old_soul: 3, cautious_observer: 1 } },
        { text: "看感情发展，顺其自然，不强求也不排斥", score: { balanced_mediator: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 28,
      text: "你忙碌了一周，周末只想在家彻底躺平，但伴侣兴致勃勃想拉你出门玩，你会？",
      options: [
        { text: "虽然很累，但为了Ta开心，还是打起精神陪Ta去", score: { giver_martyr: 3, people_pleaser: 1 } },
        { text: "直接拒绝，商量下周再陪Ta", score: { gentle_guardian: 3, honest_mirror: 1 } },
        { text: "折中一下，比如出去吃个饭就回来躺着", score: { mediator: 3, rational_analyzer: 1 } },
        { text: "让Ta自己找朋友去玩，我在家休息", score: { avoidant_loner: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 29,
      text: "如果把你恋爱中的状态比作一种动物，你会选？",
      options: [
        { text: "狗狗：忠诚、热情、时刻想粘着对方", score: { golden_retriever_energy: 3, physical_touch_hungry: 1 } },
        { text: "猫猫：傲娇，独立，需要空间但也需要抚摸", score: { black_cat_energy: 3, avoidant_loner: 1 } },
        { text: "小鸟：有点胆小敏感，需要被捧在手心呵护", score: { anxious_lover: 3, romantic_dreamer: 1 } },
        { text: "大熊：温暖、稳重，能给对方巨大的安全感", score: { secure_anchor: 3, nurturing_caregiver: 1 } }
      ]
    },
    {
      id: 30,
      text: "你认为维持一段长久爱情最重要的因素是？",
      options: [
        { text: "持续的浪漫、仪式感和新鲜感", score: { romantic_dreamer: 3, gift_lover: 1 } },
        { text: "稳定的物质基础，责任感和承诺", score: { practical_partner: 3, future_planner: 1 } },
        { text: "三观一致、精神共鸣和深度交流", score: { old_soul: 3, quality_time_seeker: 1 } },
        { text: "互相包容、妥协和解决问题的能力", score: { secure_lover: 3, mediator: 1 } }
      ]
    },
    {
      id: 31,
      text: "如果有一天，你发现自己对伴侣的感觉变淡了，不再像从前那样爱了，你会？",
      options: [
        { text: "坦诚沟通，如果无法挽回就和平分开", score: { secure_lover: 3, honest_mirror: 1 } },
        { text: "努力尝试找回当初的感觉，积极修复关系", score: { giver_martyr: 3, romantic_dreamer: 1 } },
        { text: "为了责任、习惯或现实因素，继续过下去", score: { practical_partner: 3, conflict_avoider_love: 1 } },
        { text: "慢慢冷淡，用冷暴力逼对方先说分手", score: { cold_war_champion: 3, avoidant_loner: 1 } }
      ]
    }
  ],
  personalities: [
    { id: "secure_lover", name: "安全型恋人", description: "你是亲密关系里的定海神针。情绪稳定，不卑不亢，既能坦然地付出爱，也能心安理得地接受爱。你相信伴侣，也相信自己，不会过度索取情绪价值，也不会冷漠逃避。和你在一起，就像漂泊的船找到了港湾，温暖又踏实。" },
    { id: "anxious_lover", name: "焦虑型黏人精", description: "你总是患得患失，需要反复确认对方的爱。消息要秒回，行踪要报备，对方稍微冷淡一点，你脑海就能上演一出\"他是不是不爱我了\"的狗血剧。你的爱热烈而真挚，但有时会让对方感到窒息。请相信，你值得被爱，即使不用紧紧抓住。" },
    { id: "avoidant_loner", name: "回避型独行侠", description: "你渴望爱，但又害怕靠得太近会失去自由或受到伤害。所以每当关系要进一步时，你就会下意识地后退、砌墙。你总是说\"需要空间\"，其实那是你的保护色。你像一只流浪惯了的猫，需要那个让你心甘情愿卸下防备的人。" },
    { id: "fearful_paradox", name: "恐惧型矛盾体", description: "你是关系里最纠结的矛盾体。你极度渴望被人抱紧，却又恐惧被勒到窒息。所以你在\"靠近\"和\"逃离\"之间反复横跳，不仅折磨自己，也让对方一头雾水。你的内心住着一个渴望爱又怕受伤害的小孩。" },
    { id: "romantic_dreamer", name: "浪漫幻想家", description: "你对爱情抱有电影般的幻想，期待盛大的告白、惊喜的礼物和完美的默契。你愿意为浪漫的氛围买单，也常因现实的不完美而失落。你像活在偶像剧里的人，用想象力为爱情涂抹了最绚烂的色彩。" },
    { id: "practical_partner", name: "务实生活搭子", description: "花言巧语不如工资上交。你相信爱情最终要落到柴米油盐、房贷车贷这些具体的事情上。你不追求轰轰烈烈，只求平平淡淡、细水长流。你规划着两人的未来，是关系里最可靠的合伙人。" },
    { id: "giver_martyr", name: "付出型圣母", description: "你爱一个人就会倾尽所有，掏心掏肺，把对方照顾得无微不至。你享受\"被需要\"的感觉，却常常忘了问问自己\"我需要什么\"。你的爱很伟大，但有时候也需要留一点温柔给自己，别在付出中弄丢了自己。" },
    { id: "receiver_prince", name: "索取型小公主/王子", description: "被偏爱的都有恃无恐。你习惯了享受对方的付出和宠爱，觉得\"你爱我，就该把我宠上天\"。你擅长提出需求，却不太擅长体谅对方。请记得，爱是双向的奔赴，没有人能永远做单方面的付出者。" },
    { id: "jealous_guardian", name: "醋坛子守护神", description: "你的占有欲极强，任何靠近伴侣的异性在你眼里都是潜在威胁。你的爱是绝对的私有物，容不得半点沙子。虽然有时会让对方感到压力，但这份浓烈的爱也让人感到被在乎和被重视。" },
    { id: "free_bird", name: "自由流浪者", description: "不要试图用爱情捆绑我。你需要大量的个人空间和自由，恋爱只是你生活的一部分，不是全部。你害怕承诺和束缚，像一只关不住的鸟。能留住你的，从来不是笼子，而是另一片同样自由的天空。" },
    { id: "golden_retriever_energy", name: "金毛犬系恋人", description: "热情、忠诚、永远咧着嘴冲你笑。和你在一起就像晒到了太阳，温暖又治愈。你喜欢贴贴，乐于分享，快乐简单又纯粹。你的爱像小狗一样直白而热烈，让人无法抗拒。" },
    { id: "black_cat_energy", name: "黑猫系恋人", description: "高冷、神秘，若即若离。你越不理我，我越上头。你不轻易交付真心，但一旦认定，就会用自己的方式默默守护。你的魅力在于那种捉摸不定的气质，让人忍不住想靠近、想征服。" },
    { id: "acts_of_service", name: "行动派实干家", description: "爱不是说出来的，是做出来的。你不擅长甜言蜜语，但你会用修电脑、接下班、准备早餐这些具体行动来表达爱意。你的爱很实在，像一座沉默的大山，让人可以依靠。" },
    { id: "words_of_affirmation_love", name: "语言派夸夸怪", description: "你需要听到爱，也喜欢表达爱。每天的\"早安\"、\"晚安\"、\"我爱你\"、\"你好棒\"是你的续命良药。你善于发现对方的优点并大声说出来，你的语言像阳光一样滋养着关系。" },
    { id: "physical_touch_hungry", name: "肢体接触重度依赖", description: "没有什么矛盾是一个抱抱解决不了的，如果有，那就两个。你喜欢挽手、亲吻、拥抱、抚摸，用体温传递爱意。肌肤的接触是你确认安全和亲密的最重要方式。" },
    { id: "quality_time_seeker", name: "陪伴至上者", description: "你坚信陪伴是最长情的告白。哪怕什么都不说，只要两个人待在一起各做各的事，你就觉得无比幸福。你的爱是无声的陪伴，是一起浪费时间的浪漫。" },
    { id: "gift_lover", name: "礼物衡量爱意者", description: "仪式感对你来说非常重要。重要的不是礼物有多贵，而是对方是否愿意为你花心思。一份精心挑选的礼物，在你看来就是爱的具象化表达，是\"我心里有你\"的最好证明。" },
    { id: "conflict_avoider_love", name: "和平主义灭火器", description: "吵架伤感情，所以一有矛盾你总是先低头，先道歉。你害怕冲突带来的紧张气氛，宁可自己受点委屈也要维持表面的和谐。有时候你需要学会表达自己的真实不满，而不是一味忍让。" },
    { id: "cold_war_champion", name: "冷战冠军", description: "一有矛盾你就沉默、拉黑、冷暴力。你不擅长表达愤怒和失望，只能用冰封自己来让对方意识到问题的严重性。但冷战的每一分钟，其实都在消耗彼此的感情。" },
    { id: "emotional_rollercoaster", name: "戏精本精", description: "你的恋爱情绪像坐过山车。爱你时你是全世界，恨你时恨不得老死不相往来。你的爱恨都太浓烈，大喜大悲，充满戏剧性。和你恋爱永远不会无聊，但也确实有点费心脏。" },
    { id: "rational_debater", name: "理性辩论选手", description: "谈恋爱也要讲逻辑。吵架时你的第一反应是理清前因后果，分析谁对谁错，而不是安抚情绪。你常被吐槽\"太直男/直女\"，但其实你只是觉得解决问题比处理情绪更有效。" },
    { id: "maternal_instinct", name: "爹系/妈系恋人", description: "你会像照顾小孩一样照顾伴侣，关心Ta的饮食起居、工作前途，虽然有时候唠叨、管得多，但那种无微不至的关怀让人无比安心。你是对方最温暖的港湾，也是最坚实的后盾。" },
    { id: "friend_zone_mayor", name: "友谊区常驻居民", description: "你喜欢的人总是把你当兄弟/姐妹。你性格好相处，待人真诚，但就是少了那一点心动的火花。你的好人卡堆了一抽屉，等待着那个能发现你魅力的人出现。" },
    { id: "love_phobic", name: "爱无能患者", description: "你觉得自己好像失去了爱人的能力。对谁都提不起兴趣，觉得谈恋爱太麻烦、太消耗。你习惯了一个人，并在这层保护壳里待得很舒服，不愿再为谁打破平静。" },
    { id: "serial_monogamist", name: "纯爱战士", description: "每一段感情你都全情投入，认定了就不撒手，撞了南墙也不回头。哪怕受伤，下次依然敢为爱冲锋。你对爱情抱有最纯粹的信仰，是这个时代的稀有物种。" },
    { id: "healing_heart", name: "治愈系疗伤师", description: "你总能敏锐察觉到伴侣的情绪波动，并用温柔和理解去化解。和你在一起，再难过的心都能平静下来。你像一个移动的充电站，用爱和包容治愈着对方。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_yandere",
      name: "隐藏人格：病娇黑化体",
      description: "你平时看着温柔无害，对伴侣百依百顺。但一旦触及你的底线（比如欺骗、背叛），你的眼神会变得空洞可怕，占有欲和控制欲瞬间爆表。\"既然得不到你的心，那就……\"——危险又迷人。",
      trigger: (answers) => answers.filter(a => a && (a.includes("吃醋") || a.includes("占有") || a.includes("控制") || a.includes("背叛") || a.includes("骗"))).length >= 7
    },
    {
      id: "hidden_eternal_single",
      name: "隐藏人格：注孤生体质",
      description: "你凭实力单身，月老给你牵的钢筋都能被你掰断。浪漫过敏，直线思维，暧昧信号完全接收不到，情话到嘴边变成段子。你不是不想恋爱，你是真的自带一种绝缘气场。",
      trigger: (answers) => answers.filter(a => a && (a.includes("理性") || a.includes("独处") || a.includes("一个人") || a.includes("自由") || a.includes("回避"))).length >= 9
    }
  ]
};