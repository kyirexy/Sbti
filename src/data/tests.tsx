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

export const TESTS = [
  {
    id: 'travel',
    title: '旅行人格',
    description: '测测你的旅行方式偏好',
    themeColor: '#10B981',
    bgGradient: 'from-emerald-50 to-teal-100',
    icon: TravelIcon,
    questions: [
      {
        id: 1,
        text: '当你准备去旅行时，你通常:',
        options: [
          { text: '提前一个月做好详尽的Excel攻略', trait: 'J' },
          { text: '买张机票，到了再说', trait: 'P' },
        ]
      },
      {
        id: 2,
        text: '遇到突发的雷雨天气，原定计划泡汤，你会:',
        options: [
          { text: '很烦躁，觉得打乱了计划', trait: 'J' },
          { text: '找个咖啡馆看雨，感觉也不错', trait: 'P' },
        ]
      },
      {
        id: 3,
        text: '旅行中更吸引你的是:',
        options: [
          { text: '著名的地标和打卡景点', trait: 'S' },
          { text: '当地人生活的小巷和文化氛围', trait: 'N' },
        ]
      },
      {
        id: 4,
        text: '收拾行李时，你的风格是:',
        options: [
          { text: '按清单一项项核对，连袜子都要搭配好', trait: 'J' },
          { text: '一个背包走天下，随缘穿衣', trait: 'P' },
        ]
      },
      {
        id: 5,
        text: '出发前你会做多少功课:',
        options: [
          { text: '必去的景点、餐厅、交通全查清楚', trait: 'S' },
          { text: '大概了解一下，剩下的现场问当地人', trait: 'N' },
        ]
      },
      {
        id: 6,
        text: '酒店房间窗景让你选择:',
        options: [
          { text: '标准化管理，连锁酒店靠谱', trait: 'S' },
          { text: '特色民宿，氛围感拉满才有旅行感', trait: 'N' },
        ]
      },
      {
        id: 7,
        text: '旅途中迷路时:',
        options: [
          { text: '打开地图研究，一定要找到正确路线', trait: 'J' },
          { text: '随便走走吧，说不定有意外发现', trait: 'P' },
        ]
      },
      {
        id: 8,
        text: '你喜欢哪种旅行vlog风格:',
        options: [
          { text: '干货满满，景点信息一网打尽', trait: 'S' },
          { text: '随性记录生活偶遇，主打真实', trait: 'N' },
        ]
      },
      {
        id: 9,
        text: '旅行中吃到的暗黑当地美食:',
        options: [
          { text: '勇于尝试，来都来了必须打卡', trait: 'P' },
          { text: '算了算了，我还是要点正常的', trait: 'J' },
        ]
      },
      {
        id: 10,
        text: '你更愿意去哪种地方:',
        options: [
          { text: '攻略里推荐的超人气网红打卡地', trait: 'S' },
          { text: '朋友圈都没人发过的冷门小众地', trait: 'N' },
        ]
      },
      {
        id: 11,
        text: '订机票时你在意的点是:',
        options: [
          { text: '时间段合适，价格最优', trait: 'S' },
          { text: '有没有联航、绕不绕路无所谓', trait: 'N' },
        ]
      },
      {
        id: 12,
        text: '旅行归来你会:',
        options: [
          { text: '整理照片和票据，回忆满满', trait: 'J' },
          { text: '照片堆在相册里，美好留在记忆里', trait: 'P' },
        ]
      }
    ],
    results: [
      {
        id: 'explorer',
        title: '随性探索家',
        keywords: ['自由', '随性', '探索欲'],
        desc: '你讨厌被计划束缚，旅行对你来说是一场未知的冒险。你喜欢穿梭在未知的街巷中，寻找不期而遇的惊喜。没有攻略就是最好的攻略。',
      },
      {
        id: 'planner',
        title: '完美规划师',
        keywords: ['严谨', '掌控感', '打卡狂'],
        desc: '旅行是你展现统筹能力的舞台。你喜欢一切尽在掌握的感觉，每一个景点、每一顿饭都安排得明明白白。跟着你玩，绝对不会踩雷。',
      }
    ]
  },
  {
    id: 'psychology',
    title: '心理人格',
    description: '洞见你内心深处的真实自我',
    themeColor: '#8B5CF6',
    bgGradient: 'from-violet-50 to-purple-100',
    icon: PsyIcon,
    questions: [
      {
        id: 1,
        text: '你平时恢复能量的方式是:',
        options: [
          { text: '一个人宅着听歌看剧', trait: 'I' },
          { text: '跟朋友出去吃大餐看电影', trait: 'E' },
        ]
      },
      {
        id: 2,
        text: '如果被人误解了，你的第一反应是:',
        options: [
          { text: '必须马上解释清楚', trait: 'E' },
          { text: '算了，懂的人自然懂', trait: 'I' },
        ]
      },
      {
        id: 3,
        text: '做决定时你更多依赖:',
        options: [
          { text: '直觉和当下的感受', trait: 'F' },
          { text: '逻辑和客观事实', trait: 'T' },
        ]
      },
      {
        id: 4,
        text: '朋友有心事找你倾诉，你会:',
        options: [
          { text: '先共情安慰，再给建议', trait: 'F' },
          { text: '分析问题原因，给出解决方案', trait: 'T' },
        ]
      },
      {
        id: 5,
        text: '你更喜欢的工作环境是:',
        options: [
          { text: '开放热闹，大家随时交流', trait: 'E' },
          { text: '安静独立，能专注思考', trait: 'I' },
        ]
      },
      {
        id: 6,
        text: '看到感人的电影你会:',
        options: [
          { text: '忍不住掉眼泪，情绪很容易被带动', trait: 'F' },
          { text: '会欣赏但保持冷静', trait: 'T' },
        ]
      },
      {
        id: 7,
        text: '你经常在社交媒体上:',
        options: [
          { text: '发自内心地表达感受', trait: 'F' },
          { text: '分享有用的信息和见解', trait: 'T' },
        ]
      },
      {
        id: 8,
        text: '当你一个人逛街时:',
        options: [
          { text: '享受自由，想走就走想停就停', trait: 'I' },
          { text: '总觉得差点意思，想拉个人一起', trait: 'E' },
        ]
      },
      {
        id: 9,
        text: '你会因为什么发朋友圈:',
        options: [
          { text: '当下的感受和心情', trait: 'F' },
          { text: '有话题性的有趣内容', trait: 'T' },
        ]
      },
      {
        id: 10,
        text: '团队讨论时你扮演的角色是:',
        options: [
          { text: '积极发言，主动推进讨论', trait: 'E' },
          { text: '认真聆听，等想清楚再说', trait: 'I' },
        ]
      },
      {
        id: 11,
        text: '你更容易被什么打动:',
        options: [
          { text: '细腻的情感和人物故事', trait: 'F' },
          { text: '严密的逻辑和有力论证', trait: 'T' },
        ]
      },
      {
        id: 12,
        text: '对于"社恐"这个标签:',
        options: [
          { text: '不太准确，我只是在选择性地社交', trait: 'E' },
          { text: '确实不太擅长主动社交', trait: 'I' },
        ]
      }
    ],
    results: [
      {
        id: 'thinker',
        title: '深沉哲学家',
        keywords: ['独立', '深邃', '内省'],
        desc: '你拥有丰富的内心世界，喜欢深度思考。相比热闹的人群，你更享受独处时的宁静。你拥有强大的自我觉察力。',
      },
      {
        id: 'feeler',
        title: '共情艺术家',
        keywords: ['温暖', '敏感', '治愈'],
        desc: '你天生具有敏锐的感受力，能轻易察觉他人的情绪，是身边人的"小太阳"。感性是你最宝贵的艺术天赋。',
      }
    ]
  },
  {
    id: 'consumption',
    title: '消费人格',
    description: '测测你是哪种剁手党',
    themeColor: '#F97316',
    bgGradient: 'from-orange-50 to-amber-100',
    icon: ConsumeIcon,
    questions: [
      {
        id: 1,
        text: '看到一件很喜欢但超出预算的东西:',
        options: [
          { text: '千金难买我开心，买！', trait: 'im' },
          { text: '加购物车，等降价再看', trait: 'ra' },
        ]
      },
      {
        id: 2,
        text: '你的购物车状态通常是:',
        options: [
          { text: '堆满了各种想买的东西', trait: 'im' },
          { text: '只有几个精挑细选的必需品', trait: 'ra' },
        ]
      },
      {
        id: 3,
        text: '买东西时更看重:',
        options: [
          { text: '颜值和设计感', trait: 'im' },
          { text: '性价比和实用性', trait: 'ra' },
        ]
      },
      {
        id: 4,
        text: '双十一你的状态:',
        options: [
          { text: '定金人已付完，尾款人到位', trait: 'im' },
          { text: '凑单满减算到头秃，最后发现没便宜多少', trait: 'ra' },
        ]
      },
      {
        id: 5,
        text: '你会为什么东西花大价钱:',
        options: [
          { text: '喜欢就买，钱不是问题', trait: 'im' },
          { text: '等确实需要的时候再买', trait: 'ra' },
        ]
      },
      {
        id: 6,
        text: '收到工资的第二天:',
        options: [
          { text: '花！必须给自己安排点什么', trait: 'im' },
          { text: '存起来，看着数字才有安全感', trait: 'ra' },
        ]
      },
      {
        id: 7,
        text: '你买过最后悔的东西是:',
        options: [
          { text: '健身卡/课程，去了两次就吃灰', trait: 'im' },
          { text: '图便宜买的一堆鸡肋小玩意', trait: 'ra' },
        ]
      },
      {
        id: 8,
        text: '逛街时你更像:',
        options: [
          { text: '种草机器，看到什么都想要', trait: 'im' },
          { text: '目标明确型，奔着要买的东西去', trait: 'ra' },
        ]
      },
      {
        id: 9,
        text: '你对"轻奢"的理解:',
        options: [
          { text: '攒攒钱也要买，犒劳自己很重要', trait: 'im' },
          { text: '性价比不高，不如买实用的平替', trait: 'ra' },
        ]
      },
      {
        id: 10,
        text: '收到快递时的反应:',
        options: [
          { text: '开心！买买买就是快乐源泉', trait: 'im' },
          { text: '希望不是冲动消费的结果', trait: 'ra' },
        ]
      },
      {
        id: 11,
        text: '你会为什么下单联名款/限定款:',
        options: [
          { text: '喜欢就冲！错过就没了', trait: 'im' },
          { text: '再好看也是溢价，理性消费', trait: 'ra' },
        ]
      },
      {
        id: 12,
        text: '记账对你来说:',
        options: [
          { text: '从来没这个习惯', trait: 'im' },
          { text: '每个月必须复盘，看看钱花哪了', trait: 'ra' },
        ]
      }
    ],
    results: [
      {
        id: 'yolo',
        title: '悦己消费王',
        keywords: ['颜控', '及时行乐', '买醉'],
        desc: '赚钱就是为了开心的！你信奉"千金难买我乐意"，为情绪价值买单毫不手软。你的生活因为这些美好的物品变得闪闪发光。',
      },
      {
        id: 'rational',
        title: '清醒守财奴',
        keywords: ['极简', '实用主义', '精算师'],
        desc: '每一分钱都要花在刀刃上。你从不被消费主义洗脑，拥有极强的自我约束力。"断舍离"是你生活的常态。',
      }
    ]
  },
  {
    id: 'social',
    title: '社交人格',
    description: '你在人群里扮演什么角色',
    themeColor: '#FB7185',
    bgGradient: 'from-rose-50 to-pink-100',
    icon: SocialIcon,
    questions: [
      {
        id: 1,
        text: '周末去参加一个不太熟的聚会:',
        options: [
          { text: '太棒了，又可以认识新朋友', trait: 'ext' },
          { text: '有点焦虑，最好有个熟人陪', trait: 'int' },
        ]
      },
      {
        id: 2,
        text: '在微信群里的常态是:',
        options: [
          { text: '潜水冠军，默默看大家聊', trait: 'int' },
          { text: '话题制造机，气氛组担当', trait: 'ext' },
        ]
      },
      {
        id: 3,
        text: '面对尴尬的沉默，你会:',
        options: [
          { text: '赶紧找个话题打破僵局', trait: 'ext' },
          { text: '沉默就沉默吧，挺好', trait: 'int' },
        ]
      },
      {
        id: 4,
        text: '刚认识的新朋友问你"周末干嘛":',
        options: [
          { text: '有空可以一起出来玩啊', trait: 'ext' },
          { text: '先回家休息再说吧', trait: 'int' },
        ]
      },
      {
        id: 5,
        text: '你更喜欢在哪种环境吃饭:',
        options: [
          { text: '热闹的网红店，人越多越开心', trait: 'ext' },
          { text: '安静的小馆子，专注美食', trait: 'int' },
        ]
      },
      {
        id: 6,
        text: '发消息时你更喜欢:',
        options: [
          { text: '发表情包和语音，趣味盎然', trait: 'ext' },
          { text: '打字说清楚，不想听语音', trait: 'int' },
        ]
      },
      {
        id: 7,
        text: '你在朋友圈通常是:',
        options: [
          { text: '啥都发，生活点滴分享', trait: 'ext' },
          { text: '仅朋友圈可见，发了也删', trait: 'int' },
        ]
      },
      {
        id: 8,
        text: 'KTV里你的状态:',
        options: [
          { text: '拿起麦克风就不放下', trait: 'ext' },
          { text: '坐在角落给朋友拍手鼓掌', trait: 'int' },
        ]
      },
      {
        id: 9,
        text: '有人说"你好社恐"时你的反应:',
        options: [
          { text: '不是社恐，只是懒得外向', trait: 'int' },
          { text: '对对对我就是社恐人', trait: 'ext' },
        ]
      },
      {
        id: 10,
        text: '你理想的聚会人数是:',
        options: [
          { text: '一大群人，越热闹越好', trait: 'ext' },
          { text: '三两好友，深度交流', trait: 'int' },
        ]
      },
      {
        id: 11,
        text: '被拉进一个全是陌生人的群:',
        options: [
          { text: '先潜水观察一下', trait: 'int' },
          { text: '赶紧自我介绍一下破冰', trait: 'ext' },
        ]
      },
      {
        id: 12,
        text: '朋友失恋了找你吐槽:',
        options: [
          { text: '走，陪你喝奶茶听你说', trait: 'ext' },
          { text: '打字慢慢聊，文字更清醒', trait: 'int' },
        ]
      }
    ],
    results: [
      {
        id: 'extrovert',
        title: '满电小马达',
        keywords: ['自来熟', '气氛组', '热情'],
        desc: '有你在的地方绝对不会冷场，你就像一个发光体，自带吸引力。你总能轻易地和陌生人打成一片，人脉就是你的超能力。',
      },
      {
        id: 'introvert',
        title: '深海潜水员',
        keywords: ['慢热', '边界感', '倾听者'],
        desc: '相比吵闹的人群，你更喜欢三两知己的深度交流。你不是社恐，只是对社交有更高的质量要求。一旦被你认定，就是一辈子的朋友。',
      }
    ]
  },
  {
    id: 'fortune',
    title: '运势人格',
    description: '解析你的好运引力法则',
    themeColor: '#7C3AED',
    bgGradient: 'from-violet-50 to-fuchsia-100',
    icon: FortuneIcon,
    questions: [
      {
        id: 1,
        text: '遇到倒霉的事情，你的第一反应:',
        options: [
          { text: '水逆退散！我要转运！', trait: 'a' },
          { text: '这就是生活，平常心对待', trait: 'b' },
        ]
      },
      {
        id: 2,
        text: '对于抽卡和算命:',
        options: [
          { text: '玄学爱好者，逢庙必拜', trait: 'a' },
          { text: '我命由我不由天', trait: 'b' },
        ]
      },
      {
        id: 3,
        text: '如果有预知未来的机会:',
        options: [
          { text: '一定要看看自己未来咋样', trait: 'a' },
          { text: '不想看，留着悬念才好玩', trait: 'b' },
        ]
      },
      {
        id: 4,
        text: '你相信"念念不忘必有回响"吗:',
        options: [
          { text: '信！专注念叨就会发生', trait: 'a' },
          { text: '想啥呢，还是得靠双手努力', trait: 'b' },
        ]
      },
      {
        id: 5,
        text: '看到"许愿池"你会:',
        options: [
          { text: '投硬币许个愿，万一灵呢', trait: 'a' },
          { text: '看看就好，我不信这个', trait: 'b' },
        ]
      },
      {
        id: 6,
        text: '星座运势你看过吗:',
        options: [
          { text: '每天都要看，提前知道今天运势', trait: 'a' },
          { text: '偶尔瞄一眼，当娱乐而已', trait: 'b' },
        ]
      },
      {
        id: 7,
        text: '遇到大考试或面试你会:',
        options: [
          { text: '穿幸运色，带幸运物，求个心理安慰', trait: 'a' },
          { text: '准备好就行，迷信不科学', trait: 'b' },
        ]
      },
      {
        id: 8,
        text: '你更倾向于:',
        options: [
          { text: '东西坏了找人修修继续用', trait: 'b' },
          { text: '旧的不去新的不来，换新的', trait: 'a' },
        ]
      },
      {
        id: 9,
        text: '如果连续几天遇到倒霉事:',
        options: [
          { text: '水逆期，躺平等它过去', trait: 'a' },
          { text: '检查一下哪里出了问题', trait: 'b' },
        ]
      },
      {
        id: 10,
        text: '你相信吸引力法则吗:',
        options: [
          { text: '相信！乐观的人运气都不会太差', trait: 'a' },
          { text: '还是实际努力更靠谱', trait: 'b' },
        ]
      },
      {
        id: 11,
        text: '拆盲盒的时候:',
        options: [
          { text: '哇！运气爆棚抽到了隐藏款', trait: 'a' },
          { text: '算了，不在这上面花冤枉钱', trait: 'b' },
        ]
      },
      {
        id: 12,
        text: '你更认同那句话:',
        options: [
          { text: '三分天注定，七分靠打拼', trait: 'b' },
          { text: '选择比努力更重要，顺势而为', trait: 'a' },
        ]
      }
    ],
    results: [
      {
        id: 'mystic',
        title: '天选锦鲤',
        keywords: ['直觉准', '吸引力法则', '玄学'],
        desc: '你有着超凡的直觉和好运气。你相信宇宙有自己的安排，也懂得利用能量法则。顺应直觉，你的前途一片光明。',
      },
      {
        id: 'realist',
        title: '硬核造梦者',
        keywords: ['实力派', '脚踏实地', '理性'],
        desc: '比起虚无缥缈的运气，你更相信自己双手创造的实力。你不等风来，你选择自己去追风。你的每一步都走得很稳。',
      }
    ]
  },
  {
    id: 'campus',
    title: '校园人格',
    description: '重返校园，你是哪种角色',
    themeColor: '#FBBF24',
    bgGradient: 'from-yellow-50 to-amber-100',
    icon: CampusIcon,
    questions: [
      {
        id: 1,
        text: '要交期末作业了，你通常:',
        options: [
          { text: '提前一周早早写完', trait: 's' },
          { text: '截止前一晚创造奇迹', trait: 'p' },
        ]
      },
      {
        id: 2,
        text: '上大课时，你最喜欢坐在:',
        options: [
          { text: '前排，方便听讲', trait: 's' },
          { text: '后排，方便摸鱼', trait: 'p' },
        ]
      },
      {
        id: 3,
        text: '除学习外，你花最多时间在:',
        options: [
          { text: '社团活动或谈恋爱', trait: 'p' },
          { text: '泡图书馆或者考证', trait: 's' },
        ]
      },
      {
        id: 4,
        text: '室友在睡觉你要打电话:',
        options: [
          { text: '出去外面打，不影响别人', trait: 's' },
          { text: '小声点就行，问题不大', trait: 'p' },
        ]
      },
      {
        id: 5,
        text: '你的笔记本/课本:',
        options: [
          { text: '划得五颜六色，重点清晰', trait: 's' },
          { text: '干净得像新书，笔记都在脑子里', trait: 'p' },
        ]
      },
      {
        id: 6,
        text: '刷到的B站学习视频你会:',
        options: [
          { text: '一键三连然后塞进收藏夹吃灰', trait: 'p' },
          { text: '今天就学完，绝不拖延', trait: 's' },
        ]
      },
      {
        id: 7,
        text: '期末复习周你的状态:',
        options: [
          { text: '图书馆占座，每日打卡', trait: 's' },
          { text: '宿舍复习，累了就躺一会', trait: 'p' },
        ]
      },
      {
        id: 8,
        text: '你对"内卷"这个词的感觉:',
        options: [
          { text: '有点焦虑，但不得不加入', trait: 's' },
          { text: '关我啥事，我有自己的节奏', trait: 'p' },
        ]
      },
      {
        id: 9,
        text: '社团组织一次破冰活动:',
        options: [
          { text: '每次都参加，社交达人上线', trait: 'p' },
          { text: '去了一次就当过了', trait: 's' },
        ]
      },
      {
        id: 10,
        text: '选课你最看重:',
        options: [
          { text: '能给简历加分的水课', trait: 's' },
          { text: '听说老师给分超松的课', trait: 'p' },
        ]
      },
      {
        id: 11,
        text: '和同学聊天的开场白通常是:',
        options: [
          { text: '最近有啥作业要交啊', trait: 's' },
          { text: '听说食堂出新菜了，走不走', trait: 'p' },
        ]
      },
      {
        id: 12,
        text: '你的寒暑假计划:',
        options: [
          { text: '实习/学习/逆袭，卷死他们', trait: 's' },
          { text: '先躺两周再说', trait: 'p' },
        ]
      }
    ],
    results: [
      {
        id: 'student',
        title: '内卷之王',
        keywords: ['学霸', '自律', '卷王'],
        desc: '如果学习有段位，那你就是王者星耀。你有着惊人的自律和清晰的目标感，别人还在迷茫，你已经在走向成功的路上了。',
      },
      {
        id: 'player',
        title: '青春体验家',
        keywords: ['有趣', '社牛', '活力'],
        desc: '青春只有一次，当然要尽情体验！相比枯燥的课本，你更能在丰富的校园生活中发光发热。你的人缘超好，是大家心中的开心果。',
      }
    ]
  },
  {
    id: 'love',
    title: '恋爱人格',
    description: '解密你的专属爱情DNA',
    themeColor: '#EC4899',
    bgGradient: 'from-pink-50 to-rose-100',
    icon: LoveIcon,
    questions: [
      {
        id: 1,
        text: '期待的完美约会是:',
        options: [
          { text: '窝在沙发上一边吃零食一边看剧', trait: 'c' },
          { text: '精心打扮去高级餐厅烛光晚餐', trait: 'r' },
        ]
      },
      {
        id: 2,
        text: '如果和伴侣吵架:',
        options: [
          { text: '先冷静一下，然后再讲道理', trait: 'c' },
          { text: '想要立刻抱抱哄哄就没事了', trait: 'r' },
        ]
      },
      {
        id: 3,
        text: '你认为表达爱最好的方式是:',
        options: [
          { text: '行动上的照顾和分担', trait: 'c' },
          { text: '甜言蜜语和制造惊喜', trait: 'r' },
        ]
      },
      {
        id: 4,
        text: '你更喜欢伴侣什么样的特质:',
        options: [
          { text: '靠谱务实，关键时刻有担当', trait: 'c' },
          { text: '浪漫会撩，生活充满仪式感', trait: 'r' },
        ]
      },
      {
        id: 5,
        text: '纪念日你会:',
        options: [
          { text: '两个人安静地吃顿饭就很满足', trait: 'c' },
          { text: '必须整点花的，仪式感拉满', trait: 'r' },
        ]
      },
      {
        id: 6,
        text: '你更怕伴侣:',
        options: [
          { text: '关键时刻掉链子，不靠谱', trait: 'c' },
          { text: '毫无情趣，像室友不像恋人', trait: 'r' },
        ]
      },
      {
        id: 7,
        text: '异地恋你会觉得:',
        options: [
          { text: '只要心在一起，距离不是问题', trait: 'c' },
          { text: '太难了，需要经常见面才能维持', trait: 'r' },
        ]
      },
      {
        id: 8,
        text: '你表达在乎的方式:',
        options: [
          { text: '记得ta说过的小事，默默关心', trait: 'c' },
          { text: '经常说想你，粘人精附体', trait: 'r' },
        ]
      },
      {
        id: 9,
        text: '吵架后你和好的方式:',
        options: [
          { text: '默默为ta做顿饭', trait: 'c' },
          { text: '必须当面说清楚，给个亲亲', trait: 'r' },
        ]
      },
      {
        id: 10,
        text: '你对"平平淡淡才是真"的态度:',
        options: [
          { text: '赞同，陪伴才是最长情的告白', trait: 'c' },
          { text: '不太行，恋爱还是需要点心动', trait: 'r' },
        ]
      },
      {
        id: 11,
        text: '你理想的恋爱节奏:',
        options: [
          { text: '慢慢来，细水长流过日子', trait: 'c' },
          { text: '轰轰烈烈，每天都像热恋期', trait: 'r' },
        ]
      },
      {
        id: 12,
        text: '单身时你更像:',
        options: [
          { text: '恋爱看缘分，不强求也不拒绝', trait: 'c' },
          { text: '积极拓展社交，主动出击', trait: 'r' },
        ]
      }
    ],
    results: [
      {
        id: 'romantic',
        title: '浪漫制造机',
        keywords: ['粘人', '仪式感', '热烈'],
        desc: '爱情对你来说是一场盛大的烟火。你非常注重仪式感，渴望热烈而极致的情感体验。和你谈恋爱，每天都像在演偶像剧。',
      },
      {
        id: 'companion',
        title: '踏实小棉袄',
        keywords: ['稳定', '陪伴', '靠谱'],
        desc: '你向往细水长流的爱情，认为陪伴才是最长情的告白。比起轰轰烈烈，你更看重日常生活中的彼此扶持和相互理解。',
      }
    ]
  }
];
