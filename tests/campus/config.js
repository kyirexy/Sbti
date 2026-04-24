export default {
  id: "campus",
  title: "校园人格测试",
  questions: [
    {
      id: 1,
      text: "上课铃响了，老师抱着一摞卷子走进来准备随堂测验，你通常会选择坐在教室的哪个位置？",
      options: [
        { text: "前排正中间，直视老师眼睛，最好能被老师记住脸", score: { top_student: 3, teacher_pet: 1 } },
        { text: "中间靠过道，随大流比较安全，进可攻退可守", score: { balanced_traveler: 2, quiet_transparent: 1 } },
        { text: "后排靠窗，王的故乡，远离提问火力范围", score: { slacker_pro: 3, class_clown: 1 } },
        { text: "只要能挨着好朋友或喜欢的人，坐哪都行", score: { social_butterfly_campus: 3, secret_admirer: 1 } }
      ]
    },
    {
      id: 2,
      text: "明天就是期末考试了，今晚你的复习状态最接近哪一种？",
      options: [
        { text: "通宵达旦，女娲补天，一支笔一盏灯一个奇迹", score: { last_minute_miracle: 3, stay_up: 1 } },
        { text: "朋友圈、微博、B站到处转发锦鲤和柯南，求过", score: { superstitious_ritualist: 3, lazy_king: 1 } },
        { text: "按计划复习，查漏补缺，十点半准时上床睡觉", score: { top_student: 3, straight_a_student: 1 } },
        { text: "书都摊开了，但手却不受控制地刷起了手机", score: { slacker_pro: 3, daydreamer: 1 } }
      ]
    },
    {
      id: 3,
      text: "小组作业里，你通常会扮演什么角色？",
      options: [
        { text: "组长，分配任务、把控进度、整合最终成果", score: { dependable_leader: 3, teacher_pet: 1 } },
        { text: "实干家，默默认领最难的部分，按时高质量完成", score: { straight_a_student: 3, lone_wolf: 1 } },
        { text: "气氛组/划水选手，群里回复最积极，实际产出约等于零", score: { slacker_pro: 3, class_clown: 1 } },
        { text: "PPT美工大师，负责把大家的内容变得好看", score: { artistic_soul: 3, nerdy_friend: 1 } }
      ]
    },
    {
      id: 4,
      text: "老师在黑板上写错了一个明显的知识点，你会？",
      options: [
        { text: "立刻举手：\"老师，那个……好像应该是……", score: { top_student: 3, honest_mirror: 1 } },
        { text: "小声和同桌嘀咕：\"诶，老师是不是讲错了？", score: { class_clown: 2, gossip_queen: 1 } },
        { text: "下课后单独去办公室悄悄提醒老师", score: { teacher_pet: 3, gentle_guardian: 1 } },
        { text: "默默在笔记本上改正，不关我事", score: { quiet_transparent: 3, conflict_avoider: 1 } }
      ]
    },
    {
      id: 5,
      text: "关于大学里的社团招新（百团大战），你的态度是？",
      options: [
        { text: "报了一堆感兴趣的，但最后常去的只有一两个", score: { club_enthusiast: 3, intermittent_try: 1 } },
        { text: "精挑细选一两个真正喜欢的，并投入大量时间", score: { deep_travel: 3, rational_analyzer: 1 } },
        { text: "一个都没加，嫌麻烦，不如在宿舍躺着", score: { lazy_king: 3, loyal_hermit: 1 } },
        { text: "只加那种能加综测分或者对未来有用的", score: { practical_realist: 3, future_planner: 1 } }
      ]
    },
    {
      id: 6,
      text: "宿舍里有人半夜还在开麦打游戏或者和对象大声打电话，你会？",
      options: [
        { text: "直接从上铺探出头：\"兄弟/姐妹，小声点呗？", score: { justice_warrior: 3, assertive: 1 } },
        { text: "在宿舍群里@他，委婉提醒", score: { conflict_avoider: 3, digital_native: 1 } },
        { text: "心里烦躁得不行，但不好意思说，自己戴耳机忍着", score: { people_pleaser: 3, inner_consume: 1 } },
        { text: "默默戴上降噪耳机或耳塞，不破坏表面和谐", score: { quiet_transparent: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 7,
      text: "对于\"借鉴\"或\"抄\"作业这件事，你的真实情况是？",
      options: [
        { text: "坚决不抄，也不会把自己的作业给别人抄", score: { justice_warrior: 3, straight_a_student: 1 } },
        { text: "偶尔来不及会\"参考\"一下，但会自己看懂再改", score: { last_minute_miracle: 2, rational_analyzer: 1 } },
        { text: "经常和兄弟们/姐妹们\"分工合作\"，团结力量大", score: { slacker_pro: 3, group_travel: 1 } },
        { text: "我是被抄的那一个，作业总是被大家预定", score: { top_student: 3, nerdy_friend: 1 } }
      ]
    },
    {
      id: 8,
      text: "学校开运动会，你通常扮演什么角色？",
      options: [
        { text: "报名参赛，为班级争光，享受跑道和欢呼", score: { sports_star: 3, spotlight_seeker: 1 } },
        { text: "被体委硬拉去凑人数的群众演员，跑完就行", score: { people_pleaser: 3, quiet_transparent: 1 } },
        { text: "写加油稿的、后勤送水的、拍照的", score: { nurturing_caregiver: 3, memory_keeper: 1 } },
        { text: "趁着不上课，溜出去逛街或者回家睡觉", score: { slacker_pro: 3, loyal_hermit: 1 } }
      ]
    },
    {
      id: 9,
      text: "考卷发下来，分数远低于你的预期，你的第一反应是？",
      options: [
        { text: "完了完了，怎么回家交代，爸妈会杀了我", score: { anxious_attacher: 3, inner_consume: 1 } },
        { text: "立刻翻看错题，计算老师有没有算错分", score: { top_student: 3, rational_analyzer: 1 } },
        { text: "赶紧把卷子塞进书包最深处，假装无事发生", score: { conflict_avoider: 3, poker_face: 1 } },
        { text: "无所谓，过了就行，多一分浪费", score: { lazy_king: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 10,
      text: "你最喜欢的老师类型是？",
      options: [
        { text: "学识渊博、要求严格的学术大牛，能学到真东西", score: { top_student: 3, quality_purist: 1 } },
        { text: "幽默风趣，上课像听脱口秀，段子比知识点记得牢", score: { class_clown: 3, experience_seeker: 1 } },
        { text: "好说话、不点名、给分高的\"天使老师", score: { slacker_pro: 3, pragmatic: 1 } },
        { text: "颜值高、衣品好，看着就赏心悦目", score: { aesthetic_buyer: 3, secret_admirer: 1 } }
      ]
    },
    {
      id: 11,
      text: "和同学一起去食堂吃饭，你最常处于什么状态？",
      options: [
        { text: "选择困难症，在窗口前来回踱步，不知道吃啥", score: { inner_consume: 3, anxious_traveler: 1 } },
        { text: "直奔最爱的那家窗口，四年如一日", score: { brand_loyalist: 3, loyal_hermit: 1 } },
        { text: "你们吃啥我就吃啥\"，跟着大家走", score: { people_pleaser: 3, easygoing: 1 } },
        { text: "精准计算营养和价格，绝不浪费，还能给朋友推荐", score: { foodie_scout: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 12,
      text: "班干部/学生会换届选举，你会？",
      options: [
        { text: "积极参选，想锻炼自己，也为履历增色", score: { dependable_leader: 3, future_planner: 1 } },
        { text: "不参选，但会认真听每个人的发言，投出神圣一票", score: { rational_analyzer: 3, secure_anchor: 1 } },
        { text: "被老师或同学硬推上去，赶鸭子上架", score: { people_pleaser: 3, anxious_attacher: 1 } },
        { text: "不关心，谁当都一样，反正不影响我干饭", score: { lazy_king: 3, quiet_transparent: 1 } }
      ]
    },
    {
      id: 13,
      text: "关于学生时代的\"暗恋\"或\"早恋\"，你的状态更接近？",
      options: [
        { text: "心里有一个默默关注的人，但从未说出口", score: { secret_admirer: 3, romantic_dreamer: 1 } },
        { text: "学业为重，坚决不碰，影响我学习的速度", score: { top_student: 3, rational_analyzer: 1 } },
        { text: "顺其自然，遇到了也不抗拒，享受校园恋爱", score: { couple_travel: 3, secure_anchor: 1 } },
        { text: "吃瓜群众，特别喜欢打听和传播别人的八卦", score: { gossip_queen: 3, social_butterfly: 1 } }
      ]
    },
    {
      id: 14,
      text: "上课时，你的教科书/笔记本通常是？",
      options: [
        { text: "整洁有条理，荧光笔分色，重点一目了然", score: { straight_a_student: 3, top_student: 1 } },
        { text: "乱七八糟，但自己总能精准找到需要的东西", score: { lone_wolf: 3, creative: 1 } },
        { text: "空白处画满了小人、涂鸦，或者和同学传的纸条", score: { artistic_soul: 3, daydreamer: 1 } },
        { text: "干净得像新书，因为根本没怎么翻开过", score: { slacker_pro: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 15,
      text: "下课铃响了，但老师还在拖堂，此时你的内心？",
      options: [
        { text: "认真听完，老师也挺辛苦的，多讲点是赚到", score: { top_student: 3, teacher_pet: 1 } },
        { text: "人在教室，心已经飞到食堂排队了", score: { foodie_scout: 3, practical: 1 } },
        { text: "敢怒不敢言，烦躁地转笔、抖腿、叹气", score: { inner_consume: 3, conflict_avoider: 1 } },
        { text: "开始大声收拾书包，制造噪音暗示老师", score: { class_clown: 3, justice_warrior: 1 } }
      ]
    },
    {
      id: 16,
      text: "你和室友的关系更接近以下哪种？",
      options: [
        { text: "无话不谈的闺蜜/兄弟，像家人一样", score: { golden_retriever_energy: 3, social_butterfly: 1 } },
        { text: "相敬如宾，保持适当距离，尊重彼此空间", score: { gentle_guardian: 3, rational_analyzer: 1 } },
        { text: "表面和谐，内心暗自较劲，有点塑料", score: { poker_face: 3, social_chameleon: 1 } },
        { text: "生活习惯不太合，只想早点毕业搬出去", score: { lone_wolf: 3, avoidant_loner: 1 } }
      ]
    },
    {
      id: 17,
      text: "你如何看待\"和老师搞好关系\"或\"拍马屁\"的行为？",
      options: [
        { text: "情商高的一种表现，没什么不好，我也想学", score: { social_chameleon: 3, bridge_builder: 1 } },
        { text: "看不惯，但也不会说什么，心里鄙视", score: { justice_warrior: 2, inner_consume: 1 } },
        { text: "不屑一顾，我靠实力说话", score: { lone_wolf: 3, honest_mirror: 1 } },
        { text: "看情况，有时候只是真心喜欢老师而已", score: { teacher_pet: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 18,
      text: "寒暑假作业，你通常是怎么完成的？",
      options: [
        { text: "放假头几天疯狂肝完，后面爽玩一个假期", score: { special_forces: 3, top_student: 1 } },
        { text: "制定严格的计划，每天写一点，均匀分配", score: { straight_a_student: 3, planner: 1 } },
        { text: "最后三天，创造人类奇迹，一支笔一盏灯", score: { last_minute_miracle: 3, slacker_pro: 1 } },
        { text: "选择性遗忘，开学前借同学的\"参考\"一下", score: { slacker_pro: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 19,
      text: "班级群里辅导员发了重要通知，你的反应通常是？",
      options: [
        { text: "立刻回复\"收到，谢谢老师\"，争做前排", score: { teacher_pet: 3, people_pleaser: 1 } },
        { text: "仔细阅读，有问题就提，没问题就潜水", score: { rational_analyzer: 3, practical: 1 } },
        { text: "先看看别人怎么回，保持队形", score: { social_chameleon: 3, quiet_observer: 1 } },
        { text: "消息免打扰，随缘看，错过了就错过了", score: { lazy_king: 3, digital_detox: 1 } }
      ]
    },
    {
      id: 20,
      text: "如果给你一台时光机回到高中，你最想改变什么？",
      options: [
        { text: "更拼命学习，考上更好的大学", score: { top_student: 3, future_planner: 1 } },
        { text: "勇敢地向那个人告白，不留遗憾", score: { secret_admirer: 3, romantic_dreamer: 1 } },
        { text: "多交几个真心朋友，少一点孤僻", score: { social_butterfly: 3, anxious_attacher: 1 } },
        { text: "什么都不想改变，过去挺好的，一切都是最好的安排", score: { nostalgic_graduate: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 21,
      text: "在宿舍里，关于\"带饭\"这件事，你的角色是？",
      options: [
        { text: "热心肠，经常主动帮全宿舍带饭，乐在其中", score: { nurturing_caregiver: 3, social_giver: 1 } },
        { text: "互相带，今天我帮你，明天你帮我", score: { balanced_mediator: 3, golden_retriever_energy: 1 } },
        { text: "宁可饿死也不麻烦别人，也怕别人麻烦我", score: { lone_wolf: 3, avoidant_loner: 1 } },
        { text: "在群里掷骰子，点数最小的去买", score: { class_clown: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 22,
      text: "学校要进行宿舍卫生大检查/查寝，你的状态是？",
      options: [
        { text: "平时就保持得很干净，根本不怕突击检查", score: { straight_a_student: 3, minimalist: 1 } },
        { text: "检查前两小时疯狂大扫除，假装岁月静好", score: { last_minute_miracle: 3, people_pleaser: 1 } },
        { text: "随缘，大不了被通报批评，扣分就扣分", score: { lazy_king: 3, zen_buddhist: 1 } },
        { text: "把违禁电器藏好就行，其他无所谓", score: { slacker_pro: 3, risk_taker: 1 } }
      ]
    },
    {
      id: 23,
      text: "对于那种嘴上说\"没复习、考砸了\"，结果成绩出来全班第一的\"学婊\"，你的态度是？",
      options: [
        { text: "崇拜，想抱大腿，求带飞", score: { people_pleaser: 2, top_student: 1 } },
        { text: "讨厌，觉得太虚伪了", score: { justice_warrior: 3, honest_mirror: 1 } },
        { text: "无感，他考他的，我考我的", score: { lone_wolf: 3, rational_analyzer: 1 } },
        { text: "我就是那种人（尴尬而不失礼貌的微笑）", score: { top_student: 3, poker_face: 1 } }
      ]
    },
    {
      id: 24,
      text: "毕业前写同学录/纪念册，你通常会？",
      options: [
        { text: "给每个人都认真写一大段走心的话，写到流泪", score: { nostalgic_graduate: 3, nurturing_caregiver: 1 } },
        { text: "只给关系最好的几个朋友写，其他人就算了", score: { gentle_guardian: 3, loyal_hermit: 1 } },
        { text: "统一写\"前程似锦，勿忘我\"，高效省事", score: { practical: 3, lazy_king: 1 } },
        { text: "懒得写，或者干脆弄丢了", score: { slacker_pro: 3, digital_detox: 1 } }
      ]
    },
    {
      id: 25,
      text: "你发现室友在没打招呼的情况下用了你的洗发水/洗衣液，你会？",
      options: [
        { text: "直接说：\"下次用之前跟我说一声哈", score: { gentle_guardian: 3, honest_mirror: 1 } },
        { text: "默默把自己的东西收起来锁好", score: { avoidant_loner: 3, cautious_observer: 1 } },
        { text: "心里不舒服，但觉得小事化了，算了", score: { conflict_avoider: 3, people_pleaser: 1 } },
        { text: "下次也用他的，用回来", score: { justice_warrior: 2, passive_aggressive: 1 } }
      ]
    },
    {
      id: 26,
      text: "课堂上老师让大家分组讨论，你的表现是？",
      options: [
        { text: "主动发言，引导大家讨论，做记录员", score: { dependable_leader: 3, social_butterfly: 1 } },
        { text: "认真倾听，适时补充自己的观点", score: { rational_analyzer: 3, secure_anchor: 1 } },
        { text: "假装在讨论，实际上在聊昨晚的剧或八卦", score: { class_clown: 3, gossip_queen: 1 } },
        { text: "沉默是金，等别人说完我附和一下", score: { quiet_transparent: 3, social_shy: 1 } }
      ]
    },
    {
      id: 27,
      text: "你觉得你的学生时代更像一部什么类型的电影？",
      options: [
        { text: "热血青春片（奋斗、友情、梦想，逆袭）", score: { sports_star: 3, destiny_changer: 1 } },
        { text: "文艺爱情片（暗恋、遗憾、错过、美好）", score: { secret_admirer: 3, romantic_dreamer: 1 } },
        { text: "现实主义纪录片（平淡、真实，日复一日）", score: { quiet_transparent: 3, practical_realist: 1 } },
        { text: "搞笑喜剧片（出丑、趣事、沙雕日常）", score: { class_clown: 3, happy_crazy: 1 } }
      ]
    },
    {
      id: 28,
      text: "当你知道下节课要体测（跑800/1000米）时，你的心态是？",
      options: [
        { text: "小菜一碟，平时有锻炼，正好展示一下", score: { sports_star: 3, health_investor: 1 } },
        { text: "提前一周开始焦虑，跑前想吐，跑完半死", score: { anxious_attacher: 3, inner_consume: 1 } },
        { text: "提前准备好病假条或找各种理由逃掉", score: { slacker_pro: 3, lazy_king: 1 } },
        { text: "慢慢跑，及格万岁，多一分受罪", score: { pragmatic: 3, zen_buddhist: 1 } }
      ]
    },
    {
      id: 29,
      text: "如果你的好朋友突然和你讨厌的人走得很近，你会？",
      options: [
        { text: "直接问好朋友：\"你怎么和他玩到一起了？", score: { honest_mirror: 3, anxious_attacher: 1 } },
        { text: "吃醋，但假装不在乎，自己默默生气", score: { inner_consume: 3, cold_war_champion: 1 } },
        { text: "尊重朋友的选择，我玩我自己的", score: { secure_anchor: 3, gentle_guardian: 1 } },
        { text: "想办法拉拢朋友，排挤那个人", score: { justice_warrior: 2, social_chameleon: 1 } }
      ]
    },
    {
      id: 30,
      text: "你在学校里的绰号或标签更接近哪种？",
      options: [
        { text: "学霸/书呆子/卷王", score: { top_student: 3 } },
        { text: "开心果/搞笑男/搞笑女/段子手", score: { class_clown: 3 } },
        { text: "小透明/路人甲/空气", score: { quiet_transparent: 3 } },
        { text: "大哥大/大姐头/社牛", score: { dependable_leader: 3, social_butterfly: 1 } }
      ]
    },
    {
      id: 31,
      text: "如果时光能倒流，你愿意重新再读一次书吗？",
      options: [
        { text: "愿意，那是我人生最美好的时光", score: { nostalgic_graduate: 3, grateful_heart: 1 } },
        { text: "不愿意，好不容易熬出头了，不想再受罪", score: { lazy_king: 3, veteran_survivor: 1 } },
        { text: "愿意回去改变一些遗憾，但不想全部重来", score: { secret_admirer: 3, destiny_changer: 1 } },
        { text: "无所谓，活在当下，过去不可追", score: { zen_buddhist: 3, rational_analyzer: 1 } }
      ]
    }
  ],
  personalities: [
    { id: "top_student", name: "天选卷王", description: "别人在睡觉你在刷题，别人在玩你在图书馆。奖学金拿到手软，绩点高到令人发指。对你来说，学习不是任务，而是一种深入骨髓的习惯和乐趣。你是老师口中的骄傲，同学眼中的神话，但也可能因为太过耀眼而有些孤独。" },
    { id: "slacker_pro", name: "摸鱼大师", description: "你深谙偷懒之道，能用三分力气完成十分任务。表面在记笔记，其实在画小人；看似在听讲，魂已经飞到食堂。你有一套成熟的划水哲学，成绩不算顶尖但也绝不挂科，是班里活得最滋润的那拨人。" },
    { id: "social_butterfly_campus", name: "校园交际花", description: "从校长到保安，从学弟到学姐，没有你不认识的人。你穿梭于各个社团和学生组织，消息永远第一手，人脉遍布各个学院。有你在的地方就有笑声和八卦，你是校园里的社交中心。" },
    { id: "quiet_transparent", name: "教室小透明", description: "存在感极低，老师点名经常漏掉你，同学聚会偶尔忘记叫你。但你享受这种安静不被打扰的状态，在自己的小世界里自得其乐。你不是没有光芒，只是习惯了把光芒留给自己。" },
    { id: "class_clown", name: "后排气氛组", description: "你是班级里的开心果，接话茬、出洋相、造梗第一名。老师对你又爱又恨，同学却都很喜欢你。你的青春是一部搞笑片，给大家带来了无数欢乐，虽然有时候也会被当成\"不太正经\"的代表。" },
    { id: "teacher_pet", name: "师宝女/师宝男", description: "办公室常客，帮老师跑腿收发作业，深得各科老师喜爱。虽然同学有时会酸你是\"马屁精\"，但跟着你确实能拿到第一手重点和考试情报。你的乖巧懂事是你学生时代的通行证。" },
    { id: "sports_star", name: "阳光体育生", description: "操场才是你的主场。运动会、篮球赛、足球赛总能看到你的身影，小麦色皮肤和汗水是你最好的勋章。你在赛场上挥洒青春，是校园里一道亮丽的风景线。" },
    { id: "artistic_soul", name: "文艺青年", description: "你手里总拿着本书、相机或画笔。黑板报是你画的，广播站的稿子是你写的，元旦晚会的节目是你排的。你自带一种忧郁或浪漫的气质，活在自己的精神世界里，与世俗保持着一点距离。" },
    { id: "secret_admirer", name: "暗恋专业户", description: "你的青春充满了小心翼翼的偷看、精心策划的偶遇和没说出口的话。你收藏着关于Ta的一切：用过的草稿纸、喝过的水瓶、操场上的背影。那是一段独属于你自己的盛大而又沉默的内心戏。" },
    { id: "dorm_mom", name: "寝室长/老母亲", description: "带饭、叫醒、打扫卫生、调解矛盾、交电费……你操着当妈的心，被室友依赖着又偶尔嫌弃唠叨。你是宿舍的定海神针，有你在，这个临时的家才不会散。" },
    { id: "rebellious_loner", name: "孤僻独行侠", description: "你习惯独来独往，一个人吃饭、一个人自习、一个人散步。你不觉得孤独，反而觉得合群太累。你有自己的节奏和世界，外人很难进入，但一旦进入，会发现那里无比丰富。" },
    { id: "gossip_queen", name: "八卦情报站站长", description: "年级里谁和谁在一起了，谁和谁闹掰了，哪个老师家里出事了，你总是第一个知道。吃瓜是你上学的重要动力之一，你的情报网遍布各个班级，是行走的校园论坛。" },
    { id: "club_enthusiast", name: "社团永动机", description: "你加了N个社团，不是在开例会就是在去开例会的路上。虽然忙成狗，但你乐在其中，认识了很多志同道合的朋友，也锻炼了各种技能。你的青春是一张密密麻麻的社团活动表。" },
    { id: "last_minute_miracle", name: "死线奇迹创造者", description: "每次作业、论文、考试复习都是在截止前最后一刻完成。一支笔、一盏灯、一个晚上，你就能创造一个人类奇迹。虽然过程痛苦，但那种劫后余生的快感让你屡教不改。" },
    { id: "straight_a_student", name: "完美主义学委", description: "你的笔记堪比印刷体，作业格式挑不出任何毛病，小组作业的PPT永远是你来统一美化。你对细节的执着令人敬佩，有时也让组员感到崩溃。但大家不得不承认，有你在，质量就有保障。" },
    { id: "daydreamer", name: "走神艺术家", description: "上课五分钟，神游两小时。窗外飞过一只鸟、地上爬过一只虫，都能让你的思绪飘到九霄云外。你的身体在教室，灵魂可能在霍格沃茨、在唐朝、在宇宙的某个角落。" },
    { id: "cool_kid", name: "高冷酷盖", description: "话不多，表情少，自带生人勿近的气场。大家都觉得你很高冷神秘，不敢轻易接近。只有混熟了的朋友才知道，你其实只是个闷骚的逗比，内心戏比谁都多。" },
    { id: "dependable_leader", name: "靠谱班长/团支书", description: "有困难找班长/团支书就对了。你责任心爆棚，是老师的好帮手，同学的主心骨。虽然有时会被琐事烦到崩溃，但大家的信任和依赖是你最大的动力。" },
    { id: "foodie_scout", name: "食堂探店博主", description: "哪个窗口的阿姨手不抖，哪个新出的菜好吃，哪个时间点去不用排队，问你就对了。你的胃掌握了全校美食地图，你是宿舍点外卖的最终决策者。" },
    { id: "exam_anxiety", name: "考前焦虑症患者", description: "一到考试就失眠、拉肚子、手抖，大脑空白。你不是不会，你只是太紧张了。你需要一颗定心丸，和无数次深呼吸。其实你比自己想象的要厉害得多。" },
    { id: "early_bird", name: "占座先锋", description: "图书馆开门前你就在排队了，考研自习室的座位是你用生命抢来的。你用书本、水杯、坐垫为室友和自己打下一片江山。你的勤奋和毅力，令人肃然起敬。" },
    { id: "late_sleeper", name: "熬夜冠军", description: "月亮不睡你不睡，你是秃头小宝贝。宿舍的灯熄灭后，你的手机屏幕是唯一的光源。你深知熬夜的危害，但深夜那份属于自己的自由，实在让人无法割舍。" },
    { id: "transfer_student_mystery", name: "神秘转校生", description: "你身上有一种独特的气质，仿佛背负着不为人知的过去。大家对你充满好奇和想象，但你总是淡淡一笑，从不解释。你的神秘感是你最大的魅力。" },
    { id: "nerdy_friend", name: "技术宅/工具人", description: "修电脑、装系统，P图、剪视频、翻墙找资源……全靠你。平时存在感不高，但一到关键时刻，大家都会亲切地喊你\"爸爸\"或\"大神\"。你是团队里不可或缺的技术担当。" },
    { id: "debate_team_captain", name: "逻辑辩手", description: "你享受思维的交锋和逻辑的碰撞。不管是课堂辩论还是宿舍争论，你都忍不住想用缜密的逻辑说服对方。你尊重事实和证据，是朋友圈里的\"谣言粉碎机\"。" },
    { id: "nostalgic_graduate", name: "永远怀念青春者", description: "毕业多年，你依然时常梦见考场、食堂和那个蝉鸣的夏天。青春虽然散场，但它在你心里永远鲜活。你珍藏着所有的同学录、毕业照和记忆，那是一个人最宝贵的财富。" },
    { id: "tomboy_girly", name: "反差萌同学", description: "外表和性格存在巨大反差。看着像乖乖女其实是电竞大神，看着像硬汉其实喜欢可爱的小动物。你的反差感总能在不经意间给人惊喜，让人忍不住想了解更多。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_time_traveler",
      name: "隐藏人格：穿越者",
      description: "你的眼神里偶尔透露出与年龄不符的成熟和通透，好像你早已预知了这场青春的结局，只是回来重新体验一遍。你看似漫不经心，实则每一步都踩在命运的节点上。",
      trigger: (answers) => answers.filter(a => a && (a.includes("重来") || a.includes("过去") || a.includes("改变") || a.includes("遗憾") || a.includes("时光"))).length >= 6
    },
    {
      id: "hidden_school_bully",
      name: "隐藏人格：隐退的校霸",
      description: "虽然你现在看着人畜无害甚至有点乖，但骨子里透着一股不好惹的气息。据说你当年也是叱咤风云的人物，只是金盆洗手，退隐江湖了。别惹你，你只是把锋芒收起来了而已。",
      trigger: (answers) => answers.filter(a => a && (a.includes("后排") || a.includes("老大") || a.includes("大哥") || a.includes("不好惹") || a.includes("气场"))).length >= 5
    }
  ]
};