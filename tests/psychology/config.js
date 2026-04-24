export default {
  id: "psychology",
  title: "心理人格测试",
  questions: [
    {
      id: 1,
      text: "周日晚上想到明天又是周一，你的内心活动最接近哪一种？",
      options: [
        { text: "心如止水，已经麻木了，该干嘛干嘛", score: { emotion_stable: 2, keep_lazy: 1 } },
        { text: "焦虑到失眠，脑子里反复预演下周的各种糟心事", score: { inner_consume: 3, anxious_traveler: 1 } },
        { text: "疯狂刷手机拖延睡觉时间，能晚一分钟面对现实是一分钟", score: { stay_up: 3, lazy_king: 1 } },
        { text: "列出下周待办清单，精确到小时，用掌控感对抗焦虑", score: { planner: 3, intermittent_try: 1 } }
      ]
    },
    {
      id: 2,
      text: "工作中遇到一个棘手的难题，超出了你的能力范围，你的第一反应是？",
      options: [
        { text: "先放一放，刷刷手机换换脑子，说不定灵光一现", score: { work_fish: 2, lazy_king: 1 } },
        { text: "立刻陷入自我怀疑，反复想\"我是不是太菜了\"", score: { inner_consume: 3 } },
        { text: "马上查资料、问同事、报网课，发誓一周内攻克它", score: { intermittent_try: 3, kaoyan_volunteer: 1 } },
        { text: "冷静分析问题，拆解成小步骤，一步步解决", score: { rational_analyzer: 3, emotion_stable: 1 } }
      ]
    },
    {
      id: 3,
      text: "朋友半夜发来 60 秒语音矩阵吐槽她的恋爱烦恼，你会？",
      options: [
        { text: "强撑着眼皮听完，并给出走心的情感分析和建议", score: { empathy_sponge: 3, nurturing_caregiver: 1 } },
        { text: "听两句转文字，回一个\"抱抱，渣男不值得\"，然后继续睡觉", score: { lazy_king: 2, poker_face: 1 } },
        { text: "真心实意地跟着一起骂，骂到半夜两点比她还激动", score: { emotion_explode: 2, social_butterfly: 1 } },
        { text: "第二天早上才回复：\"不好意思昨晚睡着了，现在怎么样了？\"", score: { conflict_avoider: 2, off_work: 1 } }
      ]
    },
    {
      id: 4,
      text: "你给自己立了一个 flag（比如每天背单词/健身），通常能坚持多久？",
      options: [
        { text: "第一天鸡血满满，第二天开始找借口，第三天彻底遗忘", score: { intermittent_try: 3, keep_lazy: 1 } },
        { text: "坚持了快一个月，某天中断后就再也捡不起来了", score: { inner_consume: 2, lazy_king: 1 } },
        { text: "制定了严密的打卡计划，风雨无阻，断一天浑身难受", score: { kaoyan_volunteer: 3, savvy_planner: 1 } },
        { text: "根本没立过 flag，对自己有清醒的认识", score: { keep_lazy: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 5,
      text: "领导/老师在会议上点名让你发表意见，毫无准备的你会？",
      options: [
        { text: "大脑一片空白，声音发抖，不知道自己在说什么", score: { social_shy: 3, inner_consume: 1 } },
        { text: "迅速组织语言，一本正经地胡说八道，听起来还挺像那么回事", score: { social_chameleon: 3, work_fish: 1 } },
        { text: "从容不迫，结合之前的发言总结几句，顺利过关", score: { social_bull: 2, emotion_stable: 1 } },
        { text: "直接说\"这个问题我还没想好，想听听大家的看法", score: { honest_mirror: 2, lone_wolf: 1 } }
      ]
    },
    {
      id: 6,
      text: "下班/放学回到家，你最常做的事情是？",
      options: [
        { text: "换上睡衣，点好外卖，打开一部不用动脑的剧，躺到天荒地老", score: { lazy_king: 3, hotel_lazy: 1 } },
        { text: "虽然很累，但还是会复盘今天的工作/学习，计划明天的任务", score: { inner_consume: 2, kaoyan_volunteer: 1 } },
        { text: "做点自己喜欢的事：看书、健身、打游戏、拼乐高，换一种方式充电", score: { emotion_stable: 2, quality_time_seeker: 1 } },
        { text: "和家人/室友聊聊天，或者云吸猫/狗，感受一下生活的烟火气", score: { nurturing_caregiver: 2, social_butterfly: 1 } }
      ]
    },
    {
      id: 7,
      text: "关于\"内卷\"和\"躺平\"，你内心的真实想法更接近？",
      options: [
        { text: "嘴上喊着躺平，身体却很诚实，看到别人努力自己会慌", score: { inner_consume: 3, intermittent_try: 1 } },
        { text: "已经彻底躺平，只要我够废物，就没人能利用我", score: { keep_lazy: 3, lazy_king: 1 } },
        { text: "不参与内卷，但也不躺平，按照自己的节奏稳稳前进", score: { emotion_stable: 3, rational_analyzer: 1 } },
        { text: "卷王本王，我的目标是卷死别人或者卷死自己", score: { kaoyan_volunteer: 3, special_forces: 1 } }
      ]
    },
    {
      id: 8,
      text: "你发现自己在一个微信群里说错了话，但消息已经无法撤回，你会？",
      options: [
        { text: "脚趾抠出三室一厅，反复看那条消息，恨不得连夜退群", score: { inner_consume: 3, social_shy: 1 } },
        { text: "立刻发个搞笑表情包刷上去，假装无事发生", score: { social_chameleon: 2, work_fish: 1 } },
        { text: "在群里诚恳道歉：\"不好意思刚才口误，我想说的是……", score: { honest_mirror: 3, emotion_stable: 1 } },
        { text: "无所谓，说都说了，谁还没个说错话的时候", score: { social_bull: 2, lone_wolf: 1 } }
      ]
    },
    {
      id: 9,
      text: "对于\"情绪价值\"这个词，你的态度是？",
      options: [
        { text: "我很需要！无论是朋友还是伴侣，必须能接住我的情绪", score: { empathy_sponge: 2, anxious_attacher: 1 } },
        { text: "我是提供情绪价值的那一方，习惯了照顾别人的感受", score: { people_pleaser: 3, nurturing_caregiver: 1 } },
        { text: "不太懂，有事说事，解决问题才是根本", score: { rational_analyzer: 3, lone_wolf: 1 } },
        { text: "太累了，我现在只想自己待着，不想接收任何人的情绪", score: { recharge_seeker: 3, avoidant_loner: 1 } }
      ]
    },
    {
      id: 10,
      text: "如果有人当众夸你今天穿得很好看，你的反应是？",
      options: [
        { text: "表面淡定说谢谢，心里放起了烟花，回去照好几遍镜子", score: { spotlight_seeker: 2, intro_extrovert: 1 } },
        { text: "连忙摆手：\"没有没有，随便穿的/都是去年的衣服", score: { people_pleaser: 2, social_shy: 1 } },
        { text: "大方接受，并回夸对方今天的某个细节", score: { social_butterfly: 3, words_of_affirmation: 1 } },
        { text: "有点尴尬，不知道怎么回应，只想快点结束这个话题", score: { social_shy: 3, avoidant_loner: 1 } }
      ]
    },
    {
      id: 11,
      text: "你更愿意把朋友圈/社交媒体当作什么？",
      options: [
        { text: "分享生活的舞台，精心编辑每一张照片和文案", score: { spotlight_seeker: 3, memory_keeper: 1 } },
        { text: "记录日常的日记本，不在乎点赞多少，留给自己看的", score: { quiet_observer: 2, deep_travel: 1 } },
        { text: "偶尔冒泡转发个段子，大部分时间只看不发", score: { digital_native: 2, poker_face: 1 } },
        { text: "基本不看，朋友圈入口都关了，觉得浪费时间", score: { digital_detox: 3, lone_wolf: 1 } }
      ]
    },
    {
      id: 12,
      text: "团队合作中，你发现自己承担了大部分工作，而有人明显在划水，你会？",
      options: [
        { text: "内心愤怒，但表面上不说，默默做完然后发誓下次不跟他一组", score: { conflict_avoider: 3, people_pleaser: 1 } },
        { text: "直接在群里@他，列出分工表，客气但坚定地请他完成自己的部分", score: { justice_warrior: 3, assertive: 1 } },
        { text: "找他私聊，委婉提醒，试探他的态度", score: { mediator: 2, anxious_attacher: 1 } },
        { text: "无所谓，反正我多做点也是锻炼，懒得计较", score: { nurturing_caregiver: 2, zen_buddhist: 1 } }
      ]
    },
    {
      id: 13,
      text: "周末有聚会邀请，但你其实只想在家宅着，你通常会？",
      options: [
        { text: "找个理由婉拒，享受独处的快乐", score: { loyal_hermit: 3, recharge_seeker: 1 } },
        { text: "虽然不想去，但怕扫兴还是答应了，到了现场也能玩得开心", score: { intro_extrovert: 3, people_pleaser: 1 } },
        { text: "直接说\"不想去，下次约\"，没有心理负担", score: { gentle_guardian: 3, honest_mirror: 1 } },
        { text: "看心情，如果是很好的朋友就去，普通关系就推掉", score: { cautious_observer: 2, rational_analyzer: 1 } }
      ]
    },
    {
      id: 14,
      text: "你更害怕以下哪种情况发生在自己身上？",
      options: [
        { text: "在众人面前出丑，成为群嘲对象", score: { spotlight_seeker: 2, social_shy: 1 } },
        { text: "被重要的人误解或冷落", score: { anxious_attacher: 3, people_pleaser: 1 } },
        { text: "努力了很久的事情最终失败，觉得自己很没用", score: { inner_consume: 3, perfectionist: 1 } },
        { text: "被人控制和束缚，失去自由", score: { free_bird: 3, avoidant_loner: 1 } }
      ]
    },
    {
      id: 15,
      text: "看到网上有人发表了你极度不认同的言论，你会？",
      options: [
        { text: "直接评论反驳，列举一二三", score: { justice_warrior: 3, rational_debater: 1 } },
        { text: "心里吐槽，然后划过，不浪费情绪", score: { cold_observer: 2, emotion_stable: 1 } },
        { text: "拉黑/屏蔽，净化自己的网络空间", score: { gentle_guardian: 2, recharge_seeker: 1 } },
        { text: "转发给朋友一起吐槽，然后获得共鸣的快乐", score: { social_butterfly: 2, gossip_queen: 1 } }
      ]
    },
    {
      id: 16,
      text: "关于\"计划被打乱\"，你的容忍度是多少？",
      options: [
        { text: "非常低，会让我烦躁不安，需要时间重新调整", score: { planner: 3, anxious_traveler: 1 } },
        { text: "看情况，小事无所谓，大事会影响心情", score: { rational_analyzer: 2, emotion_stable: 1 } },
        { text: "挺高的，计划本来就是为了被打破的，随机应变更有趣", score: { free_spirit: 3, adventurous: 1 } },
        { text: "我基本不做计划，所以不存在被打乱", score: { lazy_king: 2, zen_buddhist: 1 } }
      ]
    },
    {
      id: 17,
      text: "夜深人静时，你躺在床上会想些什么？",
      options: [
        { text: "今天说错的某句话、没做好的某件事，反复回放", score: { inner_consume: 3 } },
        { text: "幻想各种不切实际的场景：中彩票、穿越、拯救世界", score: { daydreamer: 3, romantic_dreamer: 1 } },
        { text: "大脑放空，很快就睡着了", score: { emotion_stable: 2, sleep_late: 1 } },
        { text: "复盘今天，规划明天，让一切井井有条", score: { savvy_planner: 3, future_planner: 1 } }
      ]
    },
    {
      id: 18,
      text: "你认为自己属于哪种依恋类型？",
      options: [
        { text: "有点黏人，对方回消息慢了就会胡思乱想", score: { anxious_attacher: 3 } },
        { text: "独立自主，需要很多个人空间，太近会想逃", score: { avoidant_loner: 3, free_bird: 1 } },
        { text: "又想亲近又怕受伤，很矛盾", score: { fearful_paradox: 3 } },
        { text: "比较稳定，能给对方安全感，自己也安心", score: { secure_anchor: 3 } }
      ]
    },
    {
      id: 19,
      text: "同事/同学找你帮忙做一个本不属于你职责范围的事，你会？",
      options: [
        { text: "虽然心里不情愿，但还是笑着答应了", score: { people_pleaser: 3 } },
        { text: "直接拒绝，说明自己的工作量也很大", score: { gentle_guardian: 3, assertive: 1 } },
        { text: "看和对方关系，关系好就帮，一般就找借口推掉", score: { cautious_observer: 2, rational_analyzer: 1 } },
        { text: "热心帮忙，觉得能帮就帮，积累人脉", score: { nurturing_caregiver: 2, bridge_builder: 1 } }
      ]
    },
    {
      id: 20,
      text: "你在社交场合更容易处于什么状态？",
      options: [
        { text: "如鱼得水，和谁都能聊两句，是气氛担当", score: { social_butterfly: 3 } },
        { text: "和熟人可以很嗨，和不熟的人就安静如鸡", score: { intro_extrovert: 3 } },
        { text: "大多数时候是倾听者，偶尔插几句话", score: { quiet_observer: 3, empathy_sponge: 1 } },
        { text: "能躲就躲，最好别注意到我", score: { social_shy: 3, loyal_hermit: 1 } }
      ]
    },
    {
      id: 21,
      text: "遇到让你非常愤怒的事情，你通常会如何发泄？",
      options: [
        { text: "找信任的人疯狂吐槽，说出来就好了", score: { social_butterfly: 2, empathy_sponge: 1 } },
        { text: "憋在心里，生闷气，等时间消化", score: { conflict_avoider: 3, inner_consume: 1 } },
        { text: "用行动发泄：运动、打扫卫生、摔枕头", score: { emotion_explode: 2 } },
        { text: "冷静分析为什么生气，找到问题根源并尝试解决", score: { rational_analyzer: 3, emotion_stable: 1 } }
      ]
    },
    {
      id: 22,
      text: "你对\"大家都在考这个证/学这个技能\"的看法是？",
      options: [
        { text: "焦虑，赶紧也去报一个，生怕落后", score: { inner_consume: 3, intermittent_try: 1 } },
        { text: "先看看对自己有没有用，有用再学，没用就不跟风", score: { rational_analyzer: 3, savvy_planner: 1 } },
        { text: "完全不关心，我只学我感兴趣的", score: { lone_wolf: 2, free_spirit: 1 } },
        { text: "心里想学，但行动上迟迟没开始", score: { lazy_king: 2, keep_lazy: 1 } }
      ]
    },
    {
      id: 23,
      text: "当朋友向你倾诉负能量时，你通常会怎么做？",
      options: [
        { text: "认真倾听，给予拥抱和安慰，像一个情绪海绵", score: { empathy_sponge: 3, nurturing_caregiver: 1 } },
        { text: "听完帮他分析问题，提出具体的解决建议", score: { rational_analyzer: 3, problem_solver: 1 } },
        { text: "讲个笑话或者转移话题，让他开心起来", score: { class_clown: 2, words_of_affirmation: 1 } },
        { text: "有点不知所措，怕说错话，只好简单附和", score: { social_shy: 2, anxious_attacher: 1 } }
      ]
    },
    {
      id: 24,
      text: "如果用一种动物形容你的精神状态，你会选？",
      options: [
        { text: "树懒，能不动就不动，动作永远慢半拍", score: { lazy_king: 3, hotel_lazy: 1 } },
        { text: "蜜蜂，忙忙碌碌，停不下来", score: { kaoyan_volunteer: 3, special_forces: 1 } },
        { text: "猫，时而粘人时而高冷，捉摸不定", score: { black_cat_energy: 3, fearful_paradox: 1 } },
        { text: "水豚，情绪稳定，与世无争", score: { emotion_stable: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 25,
      text: "关于\"努力\"这件事，你的真实想法是？",
      options: [
        { text: "努力不一定成功，但不努力一定很轻松", score: { lazy_king: 3, keep_lazy: 1 } },
        { text: "间歇性踌躇满志，持续性混吃等死", score: { intermittent_try: 3 } },
        { text: "信奉长期主义，相信日拱一卒的力量", score: { kaoyan_volunteer: 3, future_planner: 1 } },
        { text: "在别人看不到的地方偷偷努力，然后惊艳所有人", score: { destiny_changer: 3, lone_wolf: 1 } }
      ]
    },
    {
      id: 26,
      text: "如果有人当面一套背后一套，被你看穿了，你会？",
      options: [
        { text: "表面不动声色，心里默默拉黑，从此保持距离", score: { gentle_guardian: 3, cold_observer: 1 } },
        { text: "找个机会当面戳穿他，让他下不来台", score: { justice_warrior: 2, honest_mirror: 1 } },
        { text: "觉得很正常，成年人的社交就是这样，继续演戏", score: { social_chameleon: 3, rational_analyzer: 1 } },
        { text: "心里很膈应，但也不知道该怎么办，尽量少接触", score: { conflict_avoider: 2, inner_consume: 1 } }
      ]
    },
    {
      id: 27,
      text: "你觉得你的心理承受能力更像？",
      options: [
        { text: "玻璃，看起来坚硬但一摔就碎，容易内伤", score: { inner_consume: 3, anxious_attacher: 1 } },
        { text: "弹簧，压力越大反弹越强，遇强则强", score: { veteran_survivor: 3, destiny_changer: 1 } },
        { text: "橡皮泥，能适应各种形状，但也会留下痕迹", score: { social_chameleon: 2, emotion_stable: 1 } },
        { text: "钢铁，百毒不侵，没什么能真正打倒我", score: { lone_wolf: 3, secure_anchor: 1 } }
      ]
    },
    {
      id: 28,
      text: "当你感到压力过大时，你通常会？",
      options: [
        { text: "暴饮暴食或者疯狂购物，用物质填补精神", score: { emotional_eater: 3, retail_therapist: 1 } },
        { text: "把自己关起来，拒绝社交，独自消化", score: { avoidant_loner: 3, recharge_seeker: 1 } },
        { text: "找人倾诉，把压力说出来会觉得好很多", score: { empathy_sponge: 2, social_butterfly: 1 } },
        { text: "运动或冥想，用健康的方式排解", score: { health_investor: 3, emotion_stable: 1 } }
      ]
    },
    {
      id: 29,
      text: "你如何看待\"孤独\"？",
      options: [
        { text: "害怕孤独，一个人的时候会胡思乱想", score: { anxious_attacher: 3, social_butterfly: 1 } },
        { text: "享受孤独，独处是充电的最好方式", score: { loyal_hermit: 3, solo_travel: 1 } },
        { text: "无所谓，有朋友就聚，没朋友就自己待着", score: { emotion_stable: 2, rational_analyzer: 1 } },
        { text: "矛盾，既渴望陪伴又需要空间", score: { fearful_paradox: 3 } }
      ]
    },
    {
      id: 30,
      text: "如果给你一个机会，让你改变自己性格中的一点，你会选择？",
      options: [
        { text: "不要那么敏感，钝感力强一点", score: { inner_consume: 3, anxious_attacher: 1 } },
        { text: "不要那么拖延，行动力强一点", score: { lazy_king: 3, intermittent_try: 1 } },
        { text: "不要那么强势，柔和一点", score: { assertive: 2, justice_warrior: 1 } },
        { text: "我对自己很满意，不需要改变", score: { secure_anchor: 3, emotion_stable: 1 } }
      ]
    },
    {
      id: 31,
      text: "最后，你认为目前的生活状态最贴近哪个词？",
      options: [
        { text: "躺平但焦虑", score: { keep_lazy: 3, inner_consume: 1 } },
        { text: "忙碌但充实", score: { kaoyan_volunteer: 3, special_forces: 1 } },
        { text: "佛系且自洽", score: { zen_buddhist: 3, emotion_stable: 1 } },
        { text: "挣扎中前行", score: { veteran_survivor: 3, destiny_changer: 1 } }
      ]
    }
  ],
  score_aliases: {
    adventurous: "happy_crazy",
    anxious_traveler: "inner_consume",
    assertive: "social_bull",
    black_cat_energy: "fearful_paradox",
    bridge_builder: "nurturing_caregiver",
    cautious_observer: "quiet_observer",
    class_clown: "happy_crazy",
    cold_observer: "poker_face",
    conflict_avoider: "avoidant_loner",
    daydreamer: "happy_crazy",
    deep_travel: "quiet_observer",
    destiny_changer: "mala_worker",
    digital_detox: "recharge_seeker",
    emotional_eater: "inner_consume",
    free_bird: "avoidant_loner",
    free_spirit: "happy_crazy",
    future_planner: "intermittent_try",
    gentle_guardian: "secure_anchor",
    gossip_queen: "social_bull",
    health_investor: "emotion_stable",
    honest_mirror: "rational_analyzer",
    hotel_lazy: "lazy_king",
    justice_warrior: "social_bull",
    kaoyan_volunteer: "mala_worker",
    loyal_hermit: "lone_wolf",
    mediator: "nurturing_caregiver",
    memory_keeper: "quiet_observer",
    people_pleaser: "empathy_sponge",
    perfectionist: "inner_consume",
    planner: "rational_analyzer",
    problem_solver: "rational_analyzer",
    quality_time_seeker: "emotion_stable",
    rational_debater: "rational_analyzer",
    retail_therapist: "happy_crazy",
    romantic_dreamer: "happy_crazy",
    savvy_planner: "rational_analyzer",
    social_butterfly: "social_bull",
    social_chameleon: "digital_native",
    solo_travel: "lone_wolf",
    special_forces: "mala_worker",
    veteran_survivor: "mala_worker",
    words_of_affirmation: "empathy_sponge",
    zen_buddhist: "emotion_stable"
  },
  personalities: [
    { id: "mala_worker", name: "吗喽打工仔", description: "你的生活就像一只在都市丛林里努力生存的吗喽（猴子）。每天被闹钟叫醒，挤地铁、回消息、应付老板和甲方，看似忙碌，实则内心早已麻木。你熟练掌握了各种职场糊弄学，但夜深人静时也会问自己：这一切到底是为了什么？第二天醒来，还是继续当一只情绪稳定的打工吗喽。" },
    { id: "inner_consume", name: "精神内耗患者", description: "你的大脑仿佛是一个 24 小时不间断运转的剧场，反复上演着过去发生的尴尬、未来可能的失败、别人对自己的负面评价。一件事还没开始做，你已经把最坏的结果想了一百遍。你总是很累，不是因为做了很多事，而是因为想了太多事。你需要学会给大脑按下暂停键。" },
    { id: "lazy_king", name: "摆烂躺平王", description: "你已参透\"努力不一定成功，但不努力一定很轻松\"的人生真谛。能躺着绝不坐着，能明天做的事今天坚决不动。你对生活的要求降到了最低，口头禅是\"算了\"、\"就这样吧\"、\"问题不大\"。虽然偶尔也会被内卷的氛围刺痛，但翻个身刷个视频，那点焦虑很快就烟消云散了。" },
    { id: "happy_crazy", name: "快乐疯批", description: "你的精神状态领先同龄人二十年。你可以在大街上突然起舞，也可以对着空气讲冷笑话。发疯是你的解压方式，与其内耗自己，不如外耗别人。你看起来疯疯癫癫，其实内心通透得很，主打一个\"只要我没有道德，你就绑架不了我\"的快乐人生。" },
    { id: "intermittent_try", name: "间歇性努力者", description: "你的生活轨迹是一条剧烈波动的正弦曲线。受到刺激时，你可以鸡血满满地制定完美计划，买书、报课、健身，仿佛明天就能改变人生；但这种状态通常只能持续三天，之后便迅速滑向\"躺平\"的深渊，直到下一次刺激来临。你总是在雄心勃勃和混吃等死之间反复横跳。" },
    { id: "keep_lazy", name: "持续性摆烂", description: "你已经从\"间歇性努力\"进化到了\"持续性摆烂\"的高级阶段。你不再挣扎，不再立 flag，彻底接受了自己是个普通人的事实。你与自己的懒惰和解了，并且相处得非常愉快。外界再怎么卷，你的内心都毫无波澜，甚至还有点想吃黄焖鸡米饭。" },
    { id: "work_fish", name: "上班摸鱼大师", description: "你把\"带薪拉屎\"和\"窗口伪装术\"练到了炉火纯青的地步。你可以在领导眼皮底下泰然自若地刷网页、聊天、看小说，表情管理满分，键盘敲得飞起，实际上是在和朋友吐槽。你信奉\"给多少钱干多少活\"，绝不让资本家多占一分钟便宜，摸到就是赚到。" },
    { id: "off_work", name: "下班秒走人", description: "下班铃声响起那一刻，你的屁股就像装了弹簧，电脑已关、包已背好、人已在电梯。没有什么工作值得你多待一秒，工作和生活的边界感在你这里无比清晰。同事的加班邀请、领导的下班会议，通通与你无关，你的信条是：下班不积极，思想有问题。" },
    { id: "stay_up", name: "熬夜冠军", description: "白天的时间属于老板，晚上的时间才属于自己。你疯狂报复性熬夜，哪怕眼皮打架、心脏突突，也舍不得放下手机。你知道熬夜伤身，但深夜那份无人打扰的自由实在太迷人了。你每天都在\"今晚一定早睡\"和\"再刷五分钟\"之间反复打脸。" },
    { id: "sleep_late", name: "早起困难户", description: "你和被子上辈子一定是苦命鸳鸯，每天早上都要经历一场生离死别。闹钟响了关、关了响，直到最后一刻才弹射起床。你的上午通常是报废的，灵魂要等到中午甚至下午才能归位。对你来说，早起傻一天，毁一生。" },
    { id: "emotion_stable", name: "情绪稳定患者", description: "你有一种令人羡慕的超能力：情绪稳定。无论是遇到航班取消、被客户刁难，还是目睹各种抓马事件，你都能保持一种\"哦，好的\"的平静脸。不是没有情绪，而是你能很好地消化和管理情绪。朋友们都觉得你像个定海神针，和你在一起特别有安全感。" },
    { id: "emotion_explode", name: "情绪爆炸怪", description: "你的情绪就像一座活火山，随时可能喷发。开心时能掀翻屋顶，难过时能水漫金山，愤怒时方圆十里寸草不生。虽然爆发完你也会后悔，但下一次依然控制不住。你的爱恨都太浓烈，像一场盛夏的雷阵雨，来得快去得也快。" },
    { id: "social_bull", name: "社牛全场嗨", description: "你就是为社交而生的。只要有你在，任何场子都不会冷下来。你能和出租车司机聊国际局势，能和便利店店员唠家常，在陌生人聚会中如鱼得水。你的能量来源就是与人交流，人越多你越兴奋，是当之无愧的派对灵魂。" },
    { id: "social_shy", name: "社恐躲墙角", description: "社交对你来说是一场巨大的消耗。你害怕和陌生人眼神接触，害怕在群里被 @，害怕接到突如其来的电话。聚会时你最爱的位置是角落，最亲密的伙伴是手机。你并不是不渴望交流，只是开启对话需要消耗巨大的勇气。" },
    { id: "empathy_sponge", name: "情绪海绵体", description: "你拥有极强的共情能力，像一块海绵一样，能迅速吸收周围人的情绪，不管是快乐还是悲伤。朋友都喜欢找你倾诉，因为你总能感同身受。但这也导致你经常背负太多不属于自己的情绪垃圾，需要定期独处来拧干自己。" },
    { id: "rational_analyzer", name: "理性导航员", description: "你的大脑是一台精密的逻辑机器。遇到问题，你的第一反应永远是分析利弊、寻找最优解，而不是处理情绪。这让你在工作和决策中非常高效，但也常被伴侣或朋友抱怨\"太冷漠\"、\"没有人情味\"。其实你只是觉得，解决问题才是最好的安慰。" },
    { id: "lone_wolf", name: "独狼实干家", description: "你习惯了独来独往，不依赖任何人。团队合作对你来说往往是低效的麻烦，你更愿意自己一个人把事扛下来，干得漂亮。你享受独处的自由和高效，虽然有时候看起来有些孤僻，但你的能力让人不得不服。" },
    { id: "nurturing_caregiver", name: "操心老母亲", description: "无论是在朋友群、家庭还是职场，你都像个操心的老母亲。你习惯性地照顾所有人，提醒他们天冷加衣、记得吃饭、别忘带钥匙。你包里永远有纸巾、充电宝和创可贴。被你照顾的人很幸福，但有时候你也需要学会放手，多照顾一下自己。" },
    { id: "spotlight_seeker", name: "舞台中心爱好者", description: "你享受被注视的感觉，渴望成为人群的焦点。无论是通过精彩的发言、出众的打扮，还是幽默的谈吐，你总能吸引大家的目光。赞美和认可对你来说就像阳光和空气，是你自信的来源。" },
    { id: "quiet_observer", name: "角落观察员", description: "在热闹的聚会中，你往往是话最少的那一个，但你那双眼睛早已把所有人的小心思、微表情看得一清二楚。你享受这种上帝视角的乐趣，虽然不说话，但心里已经上演了一出大戏。你是个闷声发大财的洞察者。" },
    { id: "digital_native", name: "赛博社交达人", description: "线上你重拳出击：在群里你妙语连珠，表情包库存丰富，是公认的段子手；线下你唯唯诺诺：见到真人只会尬笑，恨不得立刻回家。网络是你最舒适的社交保护色，隔着屏幕你才敢释放真正的自己。" },
    { id: "poker_face", name: "冷面笑匠", description: "你平时总是一副生人勿近的高冷脸，不了解你的人觉得你很难相处。但熟了之后大家才发现，你其实是个闷骚的搞笑男/女。你总能用最平静的表情，说出最令人爆笑的吐槽，反差感极强。" },
    { id: "anxious_attacher", name: "焦虑型依恋者", description: "在亲密关系里，你总是患得患失。对方回消息慢一点、语气淡一点，你脑海里就能上演一出\"他是不是不爱我了\"的狗血剧。你需要反复确认对方的爱意才能获得片刻心安，这种紧绷感让你和伴侣都有些疲惫。" },
    { id: "secure_anchor", name: "安全型港湾", description: "你是传说中最适合谈恋爱的类型。情绪稳定，信任伴侣，既能享受亲密，也能接受独处。你不卑不亢，不会过度索取，也不会冷漠逃避。和你在一起，就像船舶停靠在了温暖的港湾，安心又踏实。" },
    { id: "avoidant_loner", name: "疏离型围墙", description: "你把自己的心保护得很好，砌起了高高的围墙。你渴望爱，但又害怕靠得太近会失去自我，或者受到伤害。所以每当关系要进一步时，你就会下意识地后退、逃避。保持距离，对你来说才最有安全感。" },
    { id: "fearful_paradox", name: "恐惧型矛盾体", description: "你是依恋类型中最纠结的一种。你既渴望亲密，又害怕亲密；想被人抱紧，又怕被勒到窒息。所以你总是在\"靠近\"和\"逃离\"之间反复拉扯，不仅自己痛苦，也让对方摸不着头脑。" },
    { id: "intro_extrovert", name: "外向的内向者", description: "在别人眼里，你开朗、健谈、会搞气氛，像个十足的社牛。但只有你自己知道，每一次热闹的社交之后，你都需要长长的独处时间来给自己\"充电\"。你不是真正的快乐，你的外向只是你的保护色。" },
    { id: "recharge_seeker", name: "能量吸血鬼防御者", description: "你对人的气场非常敏感，能迅速识别出那些只会抱怨、索取、消耗你能量的\"能量吸血鬼\"，并在他们靠近之前就建好防御结界、礼貌远离。保护自己的能量场，是你最重要的社交法则。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_fired",
      name: "隐藏人格：摸鱼被老板抓的倒霉蛋",
      description: "你正在为自己的精湛摸鱼技巧沾沾自喜，追剧追到精彩处，和闺蜜吐槽正嗨时，突然感觉背后一阵凉意，老板正站在你身后，面无表情地盯着你的屏幕……那一瞬间，你连辞职信的草稿都打好了。",
      trigger: (answers) => answers.filter(a => a && (a.includes("摸鱼") || a.includes("上班") || a.includes("老板") || a.includes("工作"))).length >= 8
    },
    {
      id: "hidden_sleep",
      name: "隐藏人格：熬夜猝死预警",
      description: "你的生物钟已经彻底紊乱，每天熬到凌晨三四点，心脏时不时抽痛一下，头发在地上随处可见。你嘴上说着\"再熬夜是狗\"，但夜深人静时依然坚挺。医院体检单上的各项箭头，已经对你发出了最后的警告。",
      trigger: (answers) => answers.filter(a => a && (a.includes("熬夜") || a.includes("睡觉") || a.includes("躺") || a.includes("手机"))).length >= 7
    }
  ]
};
