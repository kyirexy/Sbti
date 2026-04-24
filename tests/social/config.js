export default {
  id: "social",
  title: "社交人格测试",
  questions: [
    {
      id: 1,
      text: "周五晚上，你同时收到两个邀请：一个是部门团建唱K，另一个是独自在家看你期待已久的电影。你的内心更倾向于？",
      options: [
        { text: "去团建，人多热闹，还能和同事拉近关系", score: { social_butterfly: 3, group_travel: 1 } },
        { text: "内心很想在家，但怕不去显得不合群，还是勉强去团建", score: { people_pleaser: 3, intro_extrovert: 1 } },
        { text: "婉拒团建，坚定地选择一个人在家享受电影", score: { loyal_hermit: 3, recharge_seeker: 1 } },
        { text: "看当天累不累，不累就去，累了就回家", score: { flexible: 2, rational_analyzer: 1 } }
      ]
    },
    {
      id: 2,
      text: "在电梯里遇到一个半生不熟、叫不出名字但肯定见过的同事，那几十秒你会怎么度过？",
      options: [
        { text: "主动打破沉默：\"今天好热/电梯好慢啊\"，随便聊两句", score: { social_butterfly: 3, bridge_builder: 1 } },
        { text: "微笑点头致意，然后立刻低头看手机，假装很忙", score: { digital_native: 2, polite_introvert: 1 } },
        { text: "盯着楼层数字变化，心里默念\"快开门快开门", score: { social_shy: 3, recharge_seeker: 1 } },
        { text: "自然地看着对方，对方要是搭话就聊，不搭话就安静待着", score: { secure_anchor: 3, gentle_guardian: 1 } }
      ]
    },
    {
      id: 3,
      text: "朋友聚会时，有人兴致勃勃地发表了一个你内心完全不认同甚至有点反感的观点，你会？",
      options: [
        { text: "立刻放下筷子，有理有据地反驳，真理越辩越明", score: { justice_warrior: 3, honest_mirror: 1 } },
        { text: "委婉地说一句：\"嗯……可能还有另外一种角度哈", score: { mediator: 3, gentle_guardian: 1 } },
        { text: "笑笑不说话，低头吃菜，心里吐槽但不想破坏气氛", score: { conflict_avoider: 3, quiet_observer: 1 } },
        { text: "立刻转移话题：\"哎呀这个菜好好吃你们快尝尝", score: { social_chameleon: 3, people_pleaser: 1 } }
      ]
    },
    {
      id: 4,
      text: "当你感到身心俱疲、能量耗尽时，以下哪种方式最能让你\"回血\"？",
      options: [
        { text: "约上最好的朋友出来大吃一顿，疯狂吐槽，说出来就好了", score: { social_butterfly: 2, empathy_sponge: 1 } },
        { text: "和家人待在一起，哪怕什么都不说，只是各自玩手机", score: { nurturing_caregiver: 2, secure_anchor: 1 } },
        { text: "把自己关在房间里，看书、听歌、发呆，任何人不要来打扰我", score: { loyal_hermit: 3, recharge_seeker: 1 } },
        { text: "戴上耳机出门暴走或跑步，用身体的疲惫清空大脑", score: { lone_wolf: 3, health_investor: 1 } }
      ]
    },
    {
      id: 5,
      text: "在微信群里，你通常是哪种角色？",
      options: [
        { text: "话题发起者，经常带头分享好玩的链接，组织群活动", score: { social_butterfly: 3, bridge_builder: 1 } },
        { text: "积极捧场者，习惯回复\"哈哈哈\"、\"+1\"，绝不让任何人的话掉地上", score: { people_pleaser: 3, words_of_affirmation: 1 } },
        { text: "偶尔冒泡，大部分时间潜水，默默看大家聊天", score: { quiet_observer: 3, digital_native: 1 } },
        { text: "只有在有人 @ 我或者抢红包的时候才会出现", score: { poker_face: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 6,
      text: "一个关系还行的朋友开口找你帮一个忙，但这事实在让你为难（比如借钱、帮忙做大量工作），你会？",
      options: [
        { text: "咬牙答应下来，拒绝的话实在说不出口，怕伤了和气", score: { people_pleaser: 3, anxious_attacher: 1 } },
        { text: "直接说自己能力有限帮不了，并诚恳地解释原因", score: { gentle_guardian: 3, honest_mirror: 1 } },
        { text: "找个合理的借口（比如最近太忙）委婉地推掉", score: { conflict_avoider: 3, social_chameleon: 1 } },
        { text: "不完全答应，但帮一个力所能及的小部分，算是有个交代", score: { mediator: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 7,
      text: "关于人与人之间的\"边界感\"，下面哪句话更戳中你？",
      options: [
        { text: "好朋友就是不分你我的，太讲边界显得生分", score: { social_butterfly: 2, anxious_attacher: 1 } },
        { text: "再亲密的关系也需要边界，距离产生美", score: { gentle_guardian: 3, secure_anchor: 1 } },
        { text: "我没太多概念，大家相处舒服就行，不太计较这个", score: { easygoing: 2, flexible: 1 } },
        { text: "我对边界非常敏感，很讨厌别人不打招呼就入侵我的空间", score: { avoidant_loner: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 8,
      text: "你被朋友拉去一个聚会，到场发现除了朋友，其他人你全都不认识，你会？",
      options: [
        { text: "主动做自我介绍，迅速加入陌生人的聊天圈子，这是认识新朋友的好机会", score: { social_butterfly: 3, bridge_builder: 1 } },
        { text: "先粘着朋友，观察一下场子里有没有看起来好说话的人，再慢慢融入", score: { cautious_observer: 3, intro_extrovert: 1 } },
        { text: "整晚都和朋友或者自己带来的那个人待在一起，不去接触陌生人", score: { social_shy: 3, anxious_attacher: 1 } },
        { text: "找个角落坐下，玩手机或者吃东西，心里祈祷没人注意到我", score: { quiet_observer: 3, loyal_hermit: 1 } }
      ]
    },
    {
      id: 9,
      text: "和亲近的人发生争执后，你通常会怎么处理？",
      options: [
        { text: "冷静下来后主动沟通，把话说开，尽快解决问题", score: { secure_anchor: 3, honest_mirror: 1 } },
        { text: "心里想和好，但拉不下脸，会等对方先给台阶", score: { poker_face: 3, anxious_attacher: 1 } },
        { text: "冷处理，不说话，等时间冲淡一切，过几天自然就好了", score: { cold_war_champion: 3, avoidant_loner: 1 } },
        { text: "嘴上翻篇了，心里其实还在反复琢磨，过不去那个坎", score: { inner_consume: 3, fearful_paradox: 1 } }
      ]
    },
    {
      id: 10,
      text: "在朋友圈/社交媒体上，你发动态的频率和内容是？",
      options: [
        { text: "每天都要发，分享生活的边角料：吃的饭、看到的花、今天的ootd", score: { social_butterfly: 3, spotlight_seeker: 1 } },
        { text: "一周几条，只发比较有趣、有意义或者拍得好看的内容", score: { memory_keeper: 3, quality_purist: 1 } },
        { text: "几个月发一条，甚至一年一条，偶尔冒泡证明此号还在", score: { poker_face: 3, digital_detox: 1 } },
        { text: "几乎不发自己的东西，但会刷，并给朋友点赞评论", score: { quiet_observer: 3, words_of_affirmation: 1 } }
      ]
    },
    {
      id: 11,
      text: "如果有人当着很多人的面大力夸奖你，你的第一反应是？",
      options: [
        { text: "大方地笑着说谢谢，心里美滋滋", score: { secure_anchor: 3, spotlight_seeker: 1 } },
        { text: "瞬间脸红，连忙摆手说\"没有没有，运气好/大家帮忙的", score: { people_pleaser: 3, social_shy: 1 } },
        { text: "表面淡定甚至有点冷漠，但内心已经放起了烟花", score: { poker_face: 3, intro_extrovert: 1 } },
        { text: "觉得对方可能只是客套，甚至怀疑他是不是有事相求", score: { rational_analyzer: 3, cautious_observer: 1 } }
      ]
    },
    {
      id: 12,
      text: "和朋友约好周末见面，你准备出门了，对方突然发消息说临时有事来不了，你会？",
      options: [
        { text: "火冒三丈，觉得对方不尊重你的时间，直接表达不满", score: { justice_warrior: 3, assertive: 1 } },
        { text: "虽然失落，但会回复\"没事，你先忙，下次再约", score: { gentle_guardian: 3, people_pleaser: 1 } },
        { text: "内心狂喜，正好可以回家躺着，嘴上说\"太遗憾了", score: { loyal_hermit: 3, poker_face: 1 } },
        { text: "嘴上说没关系，但心里默默给这个人记上一笔，下次约你会三思", score: { cautious_observer: 3, inner_consume: 1 } }
      ]
    },
    {
      id: 13,
      text: "你如何看待\"秒回消息\"这件事？",
      options: [
        { text: "看到就应该立刻回，这是基本的礼貌和尊重", score: { anxious_attacher: 3, people_pleaser: 1 } },
        { text: "重要的人秒回，不重要的看到了也可能用意念回复然后忘记", score: { rational_analyzer: 2, lazy_king: 1 } },
        { text: "经常用意念回复，以为自己回了，结果第二天发现没发出去", score: { lazy_king: 3, daydreamer: 1 } },
        { text: "不喜欢被消息绑架，我想什么时候回就什么时候回", score: { gentle_guardian: 3, avoidant_loner: 1 } }
      ]
    },
    {
      id: 14,
      text: "朋友之间涉及金钱往来（比如借钱、代购、AA制），你的态度是？",
      options: [
        { text: "救急不救穷，关系真的好就借，不打借条", score: { social_giver: 3, nurturing_caregiver: 1 } },
        { text: "尽量避免和朋友有金钱瓜葛，怕伤感情", score: { gentle_guardian: 3, rational_analyzer: 1 } },
        { text: "金额不大就无所谓，甚至主动请客，还不还都可以", score: { social_giver: 2, impulsive: 1 } },
        { text: "亲兄弟明算账，借钱可以，但要打借条或者明确说好什么时候还", score: { rational_analyzer: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 15,
      text: "一群人拍完大合照，你拿过手机第一眼看的是？",
      options: [
        { text: "整体氛围怎么样，大家笑得好不好看", score: { nurturing_caregiver: 3, people_pleaser: 1 } },
        { text: "自己的表情、发型、双下巴，只要我好看，其他无所谓", score: { spotlight_seeker: 3, photo_maniac: 1 } },
        { text: "先看自己有没有闭眼或被抓拍成表情包", score: { anxious_attacher: 3, inner_consume: 1 } },
        { text: "看那个我喜欢/在意的人拍得怎么样", score: { secret_admirer: 3, romantic_dreamer: 1 } }
      ]
    },
    {
      id: 16,
      text: "在一个团队项目或小组作业中，你通常会自然承担哪种角色？",
      options: [
        { text: "领导者，主动推进进度，分配任务，做最后决策", score: { leader: 3, assertive: 1 } },
        { text: "协调者，关注大家的情绪和合作氛围，调和矛盾", score: { mediator: 3, empathy_sponge: 1 } },
        { text: "执行者，做好自己分内的事，不添乱也不冒头", score: { lone_wolf: 3, quiet_observer: 1 } },
        { text: "辅助者，哪里需要帮忙就去哪里，做幕后支持工作", score: { nurturing_caregiver: 3, people_pleaser: 1 } }
      ]
    },
    {
      id: 17,
      text: "你发现自己最好的朋友最近突然对你有点冷淡，发消息回得慢了，约饭也推了，你会？",
      options: [
        { text: "直接问他：\"最近怎么了？是不是我哪里惹你不高兴了？", score: { honest_mirror: 3, secure_anchor: 1 } },
        { text: "先疯狂反思自己最近是不是做错了什么，然后找机会委婉地试探", score: { inner_consume: 3, anxious_attacher: 1 } },
        { text: "心里很受伤，但自尊心让你也冷淡回去，看谁先憋不住", score: { cold_war_champion: 3, avoidant_loner: 1 } },
        { text: "觉得他可能最近比较忙，等他忙完主动来找我就好了", score: { secure_anchor: 2, rational_analyzer: 1 } }
      ]
    },
    {
      id: 18,
      text: "以下哪种社交场景会让你在赴约前就开始感到心理压力？",
      options: [
        { text: "和不熟的人一对一吃饭，需要绞尽脑汁想话题", score: { social_shy: 3, intro_extrovert: 1 } },
        { text: "当众做自我介绍、演讲或者汇报", score: { spotlight_seeker: 2, anxious_attacher: 1 } },
        { text: "参加全是陌生人的大型派对或酒会", score: { social_shy: 3, recharge_seeker: 1 } },
        { text: "被拉进全是长辈、领导或者不熟的人在场的饭局", score: { people_pleaser: 3, anxious_attacher: 1 } }
      ]
    },
    {
      id: 19,
      text: "当你刷到一个非常有趣的段子、新闻或者梗图，你的第一反应是？",
      options: [
        { text: "立刻转发给好几个人，或者分享到好几个群", score: { social_butterfly: 3, digital_native: 1 } },
        { text: "精心编辑一下发个朋友圈或微博", score: { spotlight_seeker: 3, memory_keeper: 1 } },
        { text: "发到那个平时最活跃的朋友群里一起哈哈哈", score: { group_travel: 3, social_butterfly: 1 } },
        { text: "自己笑完就划走了，懒得分享", score: { poker_face: 3, lazy_king: 1 } }
      ]
    },
    {
      id: 20,
      text: "一个朋友开始向你大倒苦水，全是负能量和抱怨，你的通常反应是？",
      options: [
        { text: "认真倾听，跟着一起吐槽，给足情绪价值", score: { empathy_sponge: 3, nurturing_caregiver: 1 } },
        { text: "听完之后，帮他理性分析问题，给出具体的解决建议", score: { rational_analyzer: 3, problem_solver: 1 } },
        { text: "表面听着，内心有点烦躁，但不好意思打断，只能礼貌点头", score: { conflict_avoider: 3, people_pleaser: 1 } },
        { text: "试图用轻松的语气说\"哎呀别想那么多了，开心点嘛\"，转移话题", score: { class_clown: 3, conflict_avoider: 1 } }
      ]
    },
    {
      id: 21,
      text: "如果可以自由选择，你理想中的工作环境是？",
      options: [
        { text: "开放式工位，大家随时可以交流讨论，热热闹闹", score: { social_butterfly: 3, group_travel: 1 } },
        { text: "半开放式，既有独立空间，也能方便地找到同事沟通", score: { rational_analyzer: 3, balanced_mediator: 1 } },
        { text: "一人一个独立的小隔间或办公室，可以专注干活不被打扰", score: { lone_wolf: 3, recharge_seeker: 1 } },
        { text: "远程办公，偶尔线下见面，大部分时间自己安排", score: { digital_native: 3, loyal_hermit: 1 } }
      ]
    },
    {
      id: 22,
      text: "以下哪种情况会最让你感到恐惧或难受？",
      options: [
        { text: "被所有人讨厌或孤立", score: { people_pleaser: 3, anxious_attacher: 1 } },
        { text: "被自己最重要的人（伴侣、父母、挚友）深深误解", score: { inner_consume: 3, fearful_paradox: 1 } },
        { text: "身处热闹的人群中，却感到无比的孤独", score: { intro_extrovert: 3, loyal_hermit: 1 } },
        { text: "在集体中被完全忽视，像个透明人", score: { spotlight_seeker: 3, social_shy: 1 } }
      ]
    },
    {
      id: 23,
      text: "在亲密关系（爱情或友情）中，你表达在乎和爱意的主要方式是？",
      options: [
        { text: "言语表达，会经常说\"我爱你\"、\"好想你\"、\"有你真好", score: { words_of_affirmation: 3, romantic_dreamer: 1 } },
        { text: "行动付出，为你做事、买东西、解决问题", score: { acts_of_service: 3, nurturing_caregiver: 1 } },
        { text: "肢体接触，喜欢抱抱、挽手、摸摸头", score: { physical_touch_hungry: 3, golden_retriever_energy: 1 } },
        { text: "高质量的陪伴，一起待着，哪怕各做各的也很安心", score: { quality_time_seeker: 3, secure_anchor: 1 } }
      ]
    },
    {
      id: 24,
      text: "你如何看待社交场合中那些\"客套话\"，比如\"改天请你吃饭\"、\"下次一定\"？",
      options: [
        { text: "会当真，并且真的会期待对方兑现", score: { honest_mirror: 2, anxious_attacher: 1 } },
        { text: "心里清楚这是客套，不会放在心上，自己也会说", score: { social_chameleon: 3, rational_analyzer: 1 } },
        { text: "自己也会说，但只是社交辞令，基本不会真的请", score: { people_pleaser: 2, poker_face: 1 } },
        { text: "很反感这种虚伪的客套，尽量不说，说了就会尽量做到", score: { justice_warrior: 3, honest_mirror: 1 } }
      ]
    },
    {
      id: 25,
      text: "参加同学聚会，你发现多年不见的老同学们好像都混得风生水起（升职、买房、结婚生子），而自己似乎平平无奇，你的心态是？",
      options: [
        { text: "真心为他们高兴，每个人的节奏不同", score: { secure_anchor: 3, zen_buddhist: 1 } },
        { text: "表面笑嘻嘻，心里有点焦虑和失落，觉得自己落后了", score: { inner_consume: 3, anxious_attacher: 1 } },
        { text: "无所谓，我有我的活法，不和他们比较", score: { lone_wolf: 3, free_spirit: 1 } },
        { text: "后悔来参加了，以后这种聚会能推就推", score: { avoidant_loner: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 26,
      text: "你一个人去到一个陌生的城市旅游，在街上迷路了，手机只剩下 5% 的电，你会？",
      options: [
        { text: "趁手机关机前，赶紧找个面善的路人或店员问路", score: { social_butterfly: 2, adventurous: 1 } },
        { text: "凭借自己的方向感和路牌硬着头皮找，不好意思开口", score: { lone_wolf: 3, social_shy: 1 } },
        { text: "立刻打个车或叫个网约车，哪怕贵点也要安全回到酒店", score: { rational_analyzer: 3, cautious_observer: 1 } },
        { text: "找个商店借充电宝或充电口，充上电再说", score: { tech_savvy: 3, practical: 1 } }
      ]
    },
    {
      id: 27,
      text: "对于\"朋友的朋友\"这类人际关系，你通常的态度是？",
      options: [
        { text: "很容易就能玩到一起，多认识个朋友挺好的", score: { social_butterfly: 3, bridge_builder: 1 } },
        { text: "保持友好客气，但不会主动深入交往", score: { gentle_guardian: 3, rational_analyzer: 1 } },
        { text: "有点尴尬，不知道聊什么，只想待在舒适圈", score: { social_shy: 3, intro_extrovert: 1 } },
        { text: "看对方性格，如果合得来就多聊，合不来就礼貌点头", score: { flexible: 2, cautious_observer: 1 } }
      ]
    },
    {
      id: 28,
      text: "你更看重一个朋友具备以下哪种特质？",
      options: [
        { text: "真诚坦率，有话直说，不搞虚的", score: { honest_mirror: 3, justice_warrior: 1 } },
        { text: "有趣好玩，能带我体验新鲜事物，一起疯", score: { class_clown: 3, experience_seeker: 1 } },
        { text: "靠谱踏实，关键时刻靠得住，能解决问题", score: { secure_anchor: 3, acts_of_service: 1 } },
        { text: "温柔包容，能接住我的情绪，给我安全感", score: { empathy_sponge: 3, nurturing_caregiver: 1 } }
      ]
    },
    {
      id: 29,
      text: "如果有人在你面前说另一个共同朋友的坏话，你通常会？",
      options: [
        { text: "为了不破坏气氛，附和几句，但心里不认同", score: { people_pleaser: 3, conflict_avoider: 1 } },
        { text: "沉默不语，不参与讨论，也不评价", score: { gentle_guardian: 3, quiet_observer: 1 } },
        { text: "委婉地维护那个被说的朋友：\"他应该不是那个意思吧", score: { justice_warrior: 3, nurturing_caregiver: 1 } },
        { text: "立刻转移话题，假装没听见", score: { conflict_avoider: 3, social_chameleon: 1 } }
      ]
    },
    {
      id: 30,
      text: "如果用一种动物来形容你的社交状态，你会选？",
      options: [
        { text: "狗：热情忠诚，喜欢群居，看到人就摇尾巴", score: { golden_retriever_energy: 3, social_butterfly: 1 } },
        { text: "猫：独立傲娇，需要时粘人，不需要时别烦我", score: { black_cat_energy: 3, avoidant_loner: 1 } },
        { text: "狼：重视团队协作，有自己的领地意识，对敌人冷酷", score: { lone_wolf: 3, justice_warrior: 1 } },
        { text: "刺猬：内心柔软，但外表有刺，靠太近会扎人", score: { gentle_guardian: 3, fearful_paradox: 1 } }
      ]
    },
    {
      id: 31,
      text: "回顾你的社交生活，以下哪种描述最贴近你的真实状态？",
      options: [
        { text: "朋友遍天下，应酬有点累，但乐在其中", score: { social_butterfly: 3, spotlight_seeker: 1 } },
        { text: "有三两知己，足矣，其他人保持礼貌距离", score: { loyal_hermit: 3, secure_anchor: 1 } },
        { text: "渴望有更深度的关系，但不知道如何迈出那一步", score: { fearful_paradox: 3, anxious_attacher: 1 } },
        { text: "享受独处，社交只是生活偶尔的调剂，不是必需品", score: { lone_wolf: 3, recharge_seeker: 1 } }
      ]
    }
  ],
  personalities: [
    { id: "social_butterfly", name: "社交花蝴蝶", description: "你就是人群中的焦点，热场小能手。对你来说，认识新朋友就像呼吸一样自然，你享受被众人围绕的感觉，能从社交中汲取能量。有你在的地方永远不会冷场，但有时候你也需要停下来问问自己：热闹过后，是否也会感到一丝疲惫？" },
    { id: "loyal_hermit", name: "高质量独处者", description: "你不是社恐，你只是觉得大多数社交都是无效的消耗。与其在人群中尬聊，你更愿意把时间留给自己和真正重要的人。你享受一个人的时光，阅读、观影、思考，内心世界极其丰富。你的人际圈小而精，每一个留下的都是经过时间筛选的珍宝。" },
    { id: "gentle_guardian", name: "温柔边界守护者", description: "你外表温柔，内心却有一道清晰的边界线。你可以对所有人报以善意和礼貌，但能真正走进你内心的人少之又少。你不喜欢冲突，但也不会无底线地迁就。你用一种温和而坚定的方式保护着自己的能量场，让彼此都待在舒服的距离。" },
    { id: "people_pleaser", name: "讨好型气氛组", description: "你总是下意识地照顾所有人的情绪，生怕冷场或让别人不开心。你习惯了说\"好的\"、\"没事\"、\"都可以\"，即使心里有不同意见，也往往选择咽下去。你太害怕冲突和被讨厌了，以至于常常忽略了自己的感受。其实，有时候做个\"不好惹\"的人，反而更轻松。" },
    { id: "conflict_avoider", name: "和平主义缓冲带", description: "吵架是不可能吵架的，这辈子都不可能。你是天生的和平使者，擅长在矛盾爆发前把它按下去，或者干脆自己躲开。你追求表面的一团和气，哪怕心里已经翻江倒海。你最大的愿望就是世界和平，所有人都好好说话。" },
    { id: "empathy_sponge", name: "情绪海绵体", description: "你拥有雷达般的共情能力，能迅速感知周围人的情绪变化。朋友们都喜欢找你倾诉，因为你总能恰到好处地给予安慰。但你也因此吸收了太多不属于你的负能量，像一个吸满了水的海绵，需要定期独处来把自己拧干。学会课题分离，是你重要的功课。" },
    { id: "rational_analyzer", name: "理性导航员", description: "朋友向你吐槽，你第一反应是提供解决方案而不是跟着哭。在社交中，你像一台冷静的计算机，分析着每个人的动机和关系走向。你常被误解为冷漠，其实你只是觉得解决问题才是最大的善意。你的理智是朋友们在慌乱中最信赖的导航。" },
    { id: "lone_wolf", name: "独狼实干家", description: "团队合作？心累。你宁愿自己搞定一切，效率高还不用等人。你习惯了独来独往，不依赖任何人，也害怕被人依赖。社交对你来说是达成目标的工具，而非目的。虽然看起来有些孤僻，但你一个人活成了一支队伍，强大又自由。" },
    { id: "nurturing_caregiver", name: "操心老母亲/老父亲", description: "在群体里，你总是那个带纸巾、看包、提醒大家别忘东西的人。你习惯性地照顾所有人，把别人的需求放在自己之前。你的关怀无微不至，让人如沐春风。但有时候，你也需要放下那些责任，让别人来照顾照顾你。" },
    { id: "spotlight_seeker", name: "舞台中心爱好者", description: "你渴望被看见、被认可。无论是独特的穿搭、精彩的发言还是幽默的谈吐，你总能吸引大家的目光。赞美和关注是你的能量来源。你享受成为焦点的感觉，但也要小心，不要为了维持这种光环而迷失了真实的自己。" },
    { id: "quiet_observer", name: "角落观察员", description: "你在聚会上话不多，却把每个人的小表情、小动作都看在眼里。你享受这种上帝视角，默默在心里分析着人物关系和剧情走向。你不说话，但你什么都懂。这种敏锐的洞察力让你像个闷声发大财的世外高人。" },
    { id: "digital_native", name: "赛博社交达人", description: "线上你重拳出击，是表情包大师、段子手、群聊灵魂；线下你唯唯诺诺，是个只想早点回家的社恐。网络是你的保护色，隔着屏幕你才能释放真正的自己。你在虚拟世界里如鱼得水，在现实世界里不知所措。" },
    { id: "old_soul", name: "复古灵魂伴侣", description: "你不喜欢浮夸的社交辞令和快节奏的点赞之交，更向往围炉夜话、书信往来的深度交流。你朋友不多，但每一个都是能聊人生、聊哲学、聊灵魂的精神共鸣者。你像一本需要静下心来阅读的老书，懂的人自然会懂。" },
    { id: "recharge_seeker", name: "能量吸血鬼防御者", description: "你有一套敏锐的社交雷达，能迅速识别出那些只会抱怨、索取、消耗你能量的\"能量吸血鬼\"，并赶在他们吸干你之前建好防御结界。保护自己的能量场，是你最重要的社交法则。你看起来有点冷漠，其实只是在自我保护。" },
    { id: "bridge_builder", name: "人脉桥梁架构师", description: "你天生拥有链接人的能力。你的朋友圈里的A和B认识，大概率是你组的局。你享受把合适的人连接在一起，促成合作或友谊。你像一张关系网的中心节点，虽然不一定是最耀眼的那个，但你的价值无可替代。" },
    { id: "honest_mirror", name: "毒舌净友", description: "好听的话谁都会说，但你偏偏选择做那个说真话的人。你的话有时扎心，但朋友都知道你是真心为他好。你不屑于虚与委蛇，坦诚是你最大的武器。虽然有时会得罪人，但留下来的都是最铁的关系。" },
    { id: "gift_love_language", name: "礼物传情者", description: "你表达在乎的方式很实在：看到好东西就想买给重要的人。你不一定会说甜言蜜语，但你会用一件件精心挑选的礼物来表达\"我心里有你\"。收买人心，字面意义上的。" },
    { id: "touch_hungry", name: "贴贴重度依赖", description: "你喜欢挽手、拥抱、拍拍肩，肢体接触是你确认亲密和获得安全感的重要方式。对你来说，千言万语有时不如一个温暖的抱抱。你像一只需要顺毛的大猫，通过肌肤的温度来感受爱。" },
    { id: "words_of_affirmation", name: "夸夸群群主", description: "你的嘴像抹了蜜，总能发现别人身上的闪光点并大声说出来。你的赞美真诚又热烈，和你在一起，大家的自信都会莫名变多。你用语言照亮别人，也温暖了自己。" },
    { id: "poker_face", name: "冷面笑匠", description: "你平时总是一副生人勿近的冷漠脸，不了解你的人觉得你很难相处。但熟了之后大家才发现，你其实是个闷骚的搞笑大师，总能猝不及防地用最平静的脸丢出最炸的包袱。这种反差感，让你格外迷人。" },
    { id: "anxious_attacher", name: "焦虑型依恋者", description: "在关系中，你总是患得患失，消息没秒回就会胡思乱想，对方语气淡一点你就开始反思自己是不是做错了什么。你需要反复确认对方的爱意才能安心，这种紧绷感让你和身边的人都有些累。" },
    { id: "secure_anchor", name: "安全型港湾", description: "情绪稳定，不卑不亢，你是传说中最适合做朋友和恋人的类型。你能享受亲密，也能接受独处；能付出爱，也能坦然接受爱。和你在一起，就像漂泊的船找到了港湾，安心又踏实。" },
    { id: "dismissive_avoider", name: "疏离型围墙", description: "你觉得依赖别人是件麻烦事，也怕别人依赖你。你把自己的心保护得很好，砌起了高高的围墙。每当关系要更进一步时，你就会下意识地后退。保持距离，是你保护自己不受伤害的方式。" },
    { id: "fearful_paradox", name: "恐惧型矛盾体", description: "你是关系里最纠结的一类人。你极度渴望被理解、被拥抱，却又深深恐惧靠得太近会受伤。所以你总是在\"靠近\"和\"逃离\"之间反复拉扯，不仅自己痛苦，也让对方摸不着头脑。" },
    { id: "social_chameleon", name: "变色龙适应体", description: "见人说人话，见鬼说鬼话。你能根据不同的社交场合和对象，迅速调整自己的状态和语言。你几乎能融入任何群体，但有时候夜深人静，你也会感到困惑：那个真实的自己，到底是什么样的？" },
    { id: "justice_warrior", name: "正义纠察队", description: "看到不公平的事、欺负人的行为，你会忍不住出头。你不怕得罪人，认为对错比人情更重要。社交场合里，你是不容忍沙子的眼睛。虽然有时会因此树敌，但你也赢得了真正的尊重。" },
    { id: "intro_extrovert", name: "外向的内向者", description: "在大家眼里，你开朗健谈，能搞气氛，像个十足的社牛。但只有你自己知道，每一次热闹的社交之后，你都需要长长的独处时间来给自己\"充电\"。你的外向，其实是一种后天习得的技能，而非本能。" },
    { id: "golden_retriever_energy", name: "金毛犬系友人", description: "热情、忠诚、永远咧着嘴笑。你像一颗小太阳，和你待在一起就像晒到了温暖的阳光。你的快乐简单又纯粹，很容易感染身边的人。你没有什么坏心眼，最大的爱好就是贴贴和吃好吃的。" },
    { id: "black_cat_energy", name: "黑猫系友人", description: "高冷、神秘，若即若离。你越不理我，我越上头。你不轻易对人敞开心扉，但一旦认定了，就会默默守护。你的魅力在于那种捉摸不定的气质，让人忍不住想靠近。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_lurker",
      name: "隐藏人格：潜水艇指挥官",
      description: "你存在于每一个群里，但几乎没人知道你在不在线。你默默地观察着所有人的对话，掌握着所有八卦和动态，却极少留下痕迹。你像一个潜伏在深海的潜艇指挥官，洞察一切，但从不轻易浮出水面。",
      trigger: (answers) => answers.filter(a => a && (a.includes("潜水") || a.includes("群") || a.includes("看") || a.includes("默默"))).length >= 8
    },
    {
      id: "hidden_all_love",
      name: "隐藏人格：中央空调·博爱型",
      description: "你对每个人都很好，好到让人分不清你对谁才是特殊的。你的温暖和善意是不分对象的，像一台全年无休的中央空调。虽然这让你人缘极佳，但有时也会给你真正在意的人带来困扰：你到底爱谁？",
      trigger: (answers) => answers.filter(a => a && (a.includes("照顾") || a.includes("帮") || a.includes("大家") || a.includes("所有人"))).length >= 8
    }
  ]
};