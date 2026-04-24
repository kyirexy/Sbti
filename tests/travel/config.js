export default {
  id: "travel",
  title: "旅行人格测试",
  questions: [
    {
      id: 1,
      text: "终于盼到假期，准备规划一次旅行。看着空白的地图，你习惯怎么做攻略？",
      options: [
        { text: "提前两个月做详细攻略，Excel 精确到每个小时的安排，连厕所时间都算好", score: { deep_travel: 2, planner: 2 } },
        { text: "只订第一晚住宿和机票/车票，其余到了当地随缘发挥", score: { free_spirit: 3, adventurous: 1 } },
        { text: "打开旅行 App，选一个评价好的跟团游，省心省力", score: { comfort_zone: 2, hotel_lazy: 1 } },
        { text: "把想去的地方发到群里，朋友规划，我负责当跟屁虫", score: { easygoing: 3, social_butterfly: 1 } }
      ]
    },
    {
      id: 2,
      text: "历经千辛万苦终于到达目的地，走出机场/车站的那一刻，你最想先做什么？",
      options: [
        { text: "直奔酒店 check-in，换上睡衣先躺平休息两小时再说", score: { hotel_lazy: 3 } },
        { text: "把行李往酒店一扔，立刻冲向最著名的地标景点，一分钟都不能耽误", score: { special_forces: 3, photo_maniac: 1 } },
        { text: "打开点评软件，找一家烟火气十足的小馆子，先犒劳一下自己的胃", score: { food_lover: 3 } },
        { text: "不做特定的事，就背着包随便走，感受这座城市的阳光、气味和节奏", score: { wanderer: 3, deep_travel: 1 } }
      ]
    },
    {
      id: 3,
      text: "社交媒体上爆火的网红打卡点（比如某面红墙、某个转角镜），你的真实想法是？",
      options: [
        { text: "必去！提前搭配好衣服，研究拍照姿势，朋友圈九宫格必须安排上", score: { internet_famous: 3, photo_maniac: 2 } },
        { text: "如果正好路过且人不多就拍一张，如果要排队超过 10 分钟就立刻走人", score: { rational_traveler: 2, crowd_hater: 1 } },
        { text: "完全没兴趣，都是滤镜骗人的，我宁愿去附近的菜市场逛逛", score: { deep_travel: 3, alternative: 1 } },
        { text: "看心情，如果同行伙伴强烈想去就陪着去，自己无所谓", score: { easygoing: 2 } }
      ]
    },
    {
      id: 4,
      text: "旅行途中突然收到航班取消/火车停运的噩耗，你的第一反应是？",
      options: [
        { text: "血压瞬间飙升，一边焦虑一边疯狂刷改签软件，今晚必须走", score: { anxious_traveler: 3 } },
        { text: "先发一条朋友圈/微博吐槽航司，配上一张无奈的自拍", score: { social_butterfly: 2, drama_queen: 1 } },
        { text: "淡定地找地方坐下喝杯咖啡，改签明天的票，正好多玩一天，随遇而安", score: { zen_traveler: 3, flexible: 1 } },
        { text: "冲到柜台据理力争，要求免费住宿和赔偿，绝不吃亏", score: { assertive: 3, justice_seeker: 1 } }
      ]
    },
    {
      id: 5,
      text: "关于旅行中的住宿，你的预算和偏好更接近哪种？",
      options: [
        { text: "必须五星级或高端设计酒店，浴缸、健身房、行政酒廊缺一不可，度假就要享受", score: { luxury_travel: 3 } },
        { text: "偏爱有特色的民宿或精品旅馆，最好能和房东聊天，体验当地人的生活氛围", score: { homestay_lover: 3, deep_travel: 1 } },
        { text: "青年旅舍或胶囊旅馆，便宜干净就行，还能认识天南海北的背包客", score: { backpacker: 3, social_butterfly: 1 } },
        { text: "如果有朋友在目的地就去蹭住，没有就选连锁快捷，把预算省给吃喝玩乐", score: { cheap_travel: 3, social_butterfly: 1 } }
      ]
    },
    {
      id: 6,
      text: "复盘一下你的旅行账单，钱花得最多的那一项通常是？",
      options: [
        { text: "吃！米其林、路边摊、网红甜品店……为了美食可以挥金如土", score: { food_lover: 3 } },
        { text: "住！酒店必须舒服且安全，这是我恢复体力的港湾", score: { luxury_travel: 2, hotel_lazy: 1 } },
        { text: "玩！潜水、跳伞、看演出、买门票，体验项目花钱不眨眼", score: { experience_seeker: 3 } },
        { text: "买！免税店的化妆品、当地的伴手礼中古店的衣服，不买等于白来", score: { shopping_maniac: 3 } }
      ]
    },
    {
      id: 7,
      text: "如果同行的旅伴想去的景点和你完全相反（比如你要去博物馆，他要去游乐场），你会？",
      options: [
        { text: "约定好集合时间，各玩各的，晚上再一起吃饭交换见闻，互不迁就", score: { independent: 3, rational_traveler: 1 } },
        { text: "虽然心里想去博物馆，但还是笑着陪他去游乐场，朋友开心最重要", score: { people_pleaser: 3, companion_lover: 1 } },
        { text: "开启游说模式，试图用各种理由说服他博物馆更有趣，必须跟我走", score: { leader: 2, assertive: 1 } },
        { text: "各退一步，上午去一个都能接受的折中地点，下午再分开行动", score: { mediator: 3 } }
      ]
    },
    {
      id: 8,
      text: "关于旅行中的\"早起\"，你的身体和灵魂是怎么想的？",
      options: [
        { text: "7 点前必须洗漱完毕出门，避开人流高峰，一天当两天玩，这才是旅行的性价比", score: { special_forces: 3 } },
        { text: "度假就是要睡到自然醒，窗帘一拉谁也不爱，早餐错过了就早午餐一起吃", score: { hotel_lazy: 3 } },
        { text: "看当天的安排，如果需要抢早班车就早起，如果没有行程就赖床", score: { flexible: 2 } },
        { text: "我自己可以早起，所以通常负责去叫醒同行的小伙伴，像个移动闹钟", score: { mother_hen: 2, leader: 1 } }
      ]
    },
    {
      id: 9,
      text: "出发前，你会为了这次旅行特意购买新衣服、新装备或者行李箱吗？",
      options: [
        { text: "当然！购物车里早就加满了度假风长裙/沙滩裤，新衣服配新风景", score: { internet_famous: 2, photo_maniac: 1 } },
        { text: "实用主义至上，现有的衣服够穿就行，没必要为了拍照增加行李重量", score: { minimalist: 3 } },
        { text: "先看看衣柜，缺什么再买什么，理性消费，比如没有泳衣才会去买一件", score: { rational_traveler: 2 } },
        { text: "会研究并购买专业的户外装备（冲锋衣、登山鞋），安全和舒适最重要", score: { outdoor_enthusiast: 3 } }
      ]
    },
    {
      id: 10,
      text: "旅行结束拖着行李箱打开家门的那一刻，你通常做的第一件事是？",
      options: [
        { text: "打开电脑或手机，把相机里的几百张照片导出来，开始修图准备发朋友圈", score: { social_butterfly: 2, memory_keeper: 1 } },
        { text: "行李箱往地上一扔，直接扑倒在熟悉的床上，睡个天昏地暗", score: { hotel_lazy: 1, tired_traveler: 2 } },
        { text: "打开笔记本或备忘录，趁记忆新鲜写下详细的游记攻略，分享给需要的朋友", score: { deep_travel: 3, blogger: 1 } },
        { text: "一边洗衣服收拾行李，一边脑子已经在想：下次要去哪里呢？", score: { wanderlust: 3 } }
      ]
    },
    {
      id: 11,
      text: "对于当下流行的\"说走就走的旅行\"，你的看法是？",
      options: [
        { text: "我就是这种人！周五晚上刷到特价机票，周六早上已经在机场了，刺激", score: { impulsive_traveler: 3, free_spirit: 1 } },
        { text: "心里非常向往，觉得酷毙了，但因为工作/家庭原因，很难真的实践", score: { dreamer: 2, cautious: 1 } },
        { text: "不太喜欢，没有计划的旅行让我缺乏安全感，必须做好万全准备", score: { planner: 3 } },
        { text: "只能接受周末短途的\"微说走就走\"，比如开车两小时去隔壁城市", score: { weekend_warrior: 2 } }
      ]
    },
    {
      id: 12,
      text: "如果在所有交通方式都可以选择的情况下，你最享受哪一种旅行移动方式？",
      options: [
        { text: "自驾！握着方向盘，放着歌，想停就停，后备箱装满零食和行李", score: { self_drive: 3 } },
        { text: "坐火车/高铁，看着窗外的风景从城市变为田野再变为山川，有在路上的实感", score: { train_travel: 3, nostalgic: 1 } },
        { text: "飞机，越快越好，把路上的时间节省下来留给目的地本身", score: { efficient: 2 } },
        { text: "骑行或徒步，用双脚丈量每一寸土地，虽然慢但看到的风景最真实", score: { outdoor_enthusiast: 3, backpacker: 1 } }
      ]
    },
    {
      id: 13,
      text: "旅行时举起相机/手机的瞬间，镜头里更多的内容是？",
      options: [
        { text: "壮丽的自然风光、有趣的建筑细节、街角的猫，画面里很少有我自己", score: { landscape_lover: 3, introvert: 1 } },
        { text: "我自己的全身照或大头照必须占多数，人不好看风景再美也没用", score: { photo_maniac: 3, selfie_queen: 1 } },
        { text: "喜欢偷拍同行伙伴的自然状态，回看照片时总能发现很多笑点", score: { candid_photographer: 3 } },
        { text: "我不怎么拍照，我认为最好的相机是眼睛，用心感受比拍下来更重要", score: { mindful_traveler: 3, minimalist: 1 } }
      ]
    },
    {
      id: 14,
      text: "在一个陌生的城市，手机地图突然失灵或者走入了没有信号的巷子，迷路了，你会？",
      options: [
        { text: "立刻重启手机找信号，或者就近找个商铺蹭 WiFi 重新导航", score: { tech_savvy: 2 } },
        { text: "不慌，找个面善的本地人问路，顺便还能聊两句天，了解点八卦", score: { social_butterfly: 2, adventurous: 1 } },
        { text: "开心地接受迷路设定，觉得这是旅途中的小彩蛋，也许会遇见意外的风景", score: { zen_traveler: 3, wanderer: 1 } },
        { text: "心里会有点慌，但会强迫自己冷静下来，凭借记忆原路返回或者找标志性建筑", score: { anxious_traveler: 1, resilient: 2 } }
      ]
    },
    {
      id: 15,
      text: "旅行团行程里安排的购物点，或者路边揽客的特产店，你一般怎么处理？",
      options: [
        { text: "绝对不去，哪怕在外面站着等也不进去，觉得就是浪费时间", score: { efficient: 2, minimalist: 1 } },
        { text: "来都来了，进去逛逛吹吹空调，但捂紧钱包，坚决不被洗脑", score: { window_shopper: 2 } },
        { text: "容易被氛围感染，导购一说\"当地特有\"、\"最后一天\"，就容易冲动买一堆没用的", score: { impulsive_buyer: 3 } },
        { text: "专门找当地人去的菜市场或批发市场，喜欢和摊主砍价买地道手信", score: { bargain_hunter: 3, deep_travel: 1 } }
      ]
    },
    {
      id: 16,
      text: "你心中最理想的旅伴组合是？",
      options: [
        { text: "和伴侣的二人世界，享受浪漫的私密时光，互相拍照互相依偎", score: { couple_travel: 3 } },
        { text: "一群臭味相投的朋友，晚上在民宿喝酒玩游戏，热闹非凡", score: { group_travel: 3, social_butterfly: 1 } },
        { text: "一个人背着包，完全属于自己的时间，不用迁就任何人，自由且深刻", score: { solo_travel: 3, introvert: 1 } },
        { text: "带上父母家人，虽然操心的事多，但看到他们开心的样子比什么都值", score: { family_travel: 3 } }
      ]
    },
    {
      id: 17,
      text: "在青旅大厅或拼车途中，遇到了同样独自旅行的人，你会？",
      options: [
        { text: "主动打开话匣子：\"嘿，你下一站去哪？要不要一起拼个饭？", score: { social_butterfly: 3 } },
        { text: "礼貌性地微笑点头，然后戴上耳机沉浸在自己的世界里", score: { polite_introvert: 2 } },
        { text: "各玩各的，互不打扰，我认为独行侠之间有一种默契的边界感", score: { solo_travel: 2 } },
        { text: "先暗中观察一下对方的气场和谈吐，如果觉得合得来再找机会搭话", score: { cautious: 2 } }
      ]
    },
    {
      id: 18,
      text: "你理想中的旅行节奏是怎样的？",
      options: [
        { text: "特种兵拉练，一天刷完一座城的必去清单，晚上回到酒店腿都是抖的，但心里满足", score: { special_forces: 3 } },
        { text: "上午逛一个主景点，下午找个咖啡馆发呆或公园长椅看路人，松弛有度", score: { balanced_traveler: 3 } },
        { text: "没有什么比在海边或酒店阳台发呆一整天更治愈的了，景点随缘", score: { hotel_lazy: 3, zen_traveler: 1 } },
        { text: "完全没节奏，饿了吃，困了睡，想走了就走，主打一个随心所欲", score: { free_spirit: 3 } }
      ]
    },
    {
      id: 19,
      text: "现在的旅行信息鱼龙混杂，你更相信哪一种来源的推荐？",
      options: [
        { text: "小红书/抖音上最新的探店和打卡攻略，跟着流量走准没错", score: { internet_famous: 2 } },
        { text: "Lonely Planet 或者专业的旅行纪录片，经过时间沉淀的经典", score: { deep_travel: 2, researcher: 1 } },
        { text: "身边去过的好朋友的口头安利，他们的亲身经历避雷最可靠", score: { trust_friends: 2 } },
        { text: "到了当地直接问酒店前台、出租车司机或者便利店老板，找最接地气的", score: { spontaneous: 3 } }
      ]
    },
    {
      id: 20,
      text: "你的行李箱打开后，通常是什么画风？",
      options: [
        { text: "极简主义，一个登机箱搞定一切，用收纳袋分装得整整齐齐", score: { minimalist: 3, efficient: 1 } },
        { text: "搬家式旅行，大到吹风机小到药包，什么都要带着以防万一", score: { overpacker: 3, anxious_traveler: 1 } },
        { text: "专业的户外背包，里面有水袋、登山杖、急救包，一看就是硬核玩家", score: { organized: 3, outdoor_enthusiast: 1 } },
        { text: "视季节和行程长短而定，短途精简，长途会多带几套衣服拍照", score: { flexible: 2 } }
      ]
    },
    {
      id: 21,
      text: "如果这次的旅行预算突然缩水，必须砍掉一部分开支，你会优先牺牲哪一项？",
      options: [
        { text: "住宿标准，从五星降到快捷，反正只是回来睡个觉", score: { cheap_travel: 3, backpacker: 1 } },
        { text: "餐饮预算，少吃几顿大餐，多吃路边摊和便利店，正好减肥", score: { food_sacrificer: 2 } },
        { text: "购物预算，少买点纪念品，反正买回去也是落灰", score: { minimalist: 2 } },
        { text: "缩减门票开支，只去最核心的收费景点，多发掘免费的小众路线", score: { budget_traveler: 3 } }
      ]
    },
    {
      id: 22,
      text: "在旅行中，哪一种行为最容易让你瞬间火大、破坏心情？",
      options: [
        { text: "同行的旅伴拖拖拉拉，明明约好 9 点出门结果 10 点还在化妆", score: { punctual: 3, impatient: 1 } },
        { text: "被当地商家当做游客宰客，或者在车站被黑车司机纠缠", score: { justice_seeker: 2, vigilant: 1 } },
        { text: "原本计划的户外项目因为突降暴雨而取消，只能困在酒店", score: { weather_sensitive: 2 } },
        { text: "景点人山人海，看人头多过看风景，连拍照都要抢位置", score: { crowd_hater: 3 } }
      ]
    },
    {
      id: 23,
      text: "去到一个语言不通的国家/地区，你会怎么做？",
      options: [
        { text: "出发前努力学几句简单的问候语和砍价语，觉得是对当地文化的尊重", score: { cultural_learner: 3, deep_travel: 1 } },
        { text: "下载好离线翻译软件，必要时对着手机说话，科技改变生活", score: { tech_savvy: 2 } },
        { text: "全靠肢体语言和丰富的面部表情，比划比划总能懂的", score: { easygoing: 2 } },
        { text: "我只会选择去沟通无障碍或者有中文服务的目的地，不想给自己添麻烦", score: { comfort_zone: 2 } }
      ]
    },
    {
      id: 24,
      text: "热门景点排长队时，突然有人旁若无人地插队到你前面，你会？",
      options: [
        { text: "直接拍拍他的肩膀，面无表情地指指队尾：\"请排队。", score: { assertive: 3, justice_seeker: 1 } },
        { text: "内心白眼翻上天，气得要死，但为了避免争吵还是忍了", score: { conflict_avoider: 2 } },
        { text: "用厌恶的眼神死死盯着他，试图用眼神的杀气让他良心发现", score: { passive_aggressive: 2 } },
        { text: "无所谓，出来玩心态要好，让他先走也耽误不了几分钟", score: { zen_traveler: 2 } }
      ]
    },
    {
      id: 25,
      text: "如果让你选择一个纯自然景观发呆一整天，你更偏爱哪种环境？",
      options: [
        { text: "蔚蓝的海岸线和绵软的沙滩，吹着海风听浪花的声音", score: { beach_lover: 3 } },
        { text: "巍峨的高山和针叶林，呼吸着冷冽的空气，挑战徒步路线", score: { mountain_lover: 3, outdoor_enthusiast: 1 } },
        { text: "静谧的湖泊、湿地或者森林，人烟稀少，只有鸟叫虫鸣", score: { nature_seeker: 3 } },
        { text: "荒凉的沙漠或者戈壁，感受那种旷野的孤寂和星空的浩瀚", score: { unique_landscape: 3 } }
      ]
    },
    {
      id: 26,
      text: "因为时间或天气原因，你错过了行程单上最重要的那个景点（比如雾太大没看到日出），你会？",
      options: [
        { text: "立刻释怀：\"没关系，这是这座城市在邀请我下次再来，后会有期。", score: { optimistic: 3, wanderlust: 1 } },
        { text: "陷入深深的自责和懊悔，回去以后很长一段时间想起来都觉得心里堵得慌", score: { perfectionist: 2, anxious: 1 } },
        { text: "觉得这就是旅行中最迷人的部分，不完美才让人记忆深刻", score: { zen_traveler: 3 } },
        { text: "马上拿出手机查攻略，看看附近有没有类似的替代景点，非要补上这个遗憾", score: { determined: 2 } }
      ]
    },
    {
      id: 27,
      text: "回顾整趟旅程，你觉得收获最大的是哪个部分？",
      options: [
        { text: "手机相册里多出来的几百张精美照片，够我发好久的社交平台了", score: { photo_maniac: 3, memory_keeper: 1 } },
        { text: "那些从未有过的体验：第一次浮潜、第一次吃奇怪的食物、第一次迷路……", score: { experience_seeker: 3 } },
        { text: "紧绷的神经彻底放松下来了，身体和心灵都充满了电，又能回去搬砖了", score: { hotel_lazy: 3, zen_traveler: 1 } },
        { text: "和同行的人关系更紧密了，或者是在路上交到了新朋友", score: { relationship_focused: 3 } }
      ]
    },
    {
      id: 28,
      text: "朋友突然发来一个陌生地名的特价机票链接，问你：\"下周要不要去这里？我完全不了解这地方。\"你会？",
      options: [
        { text: "二话不说先下单锁票：\"去了就知道了，不了解才刺激！", score: { adventurous: 3, free_spirit: 1 } },
        { text: "打开网页开始疯狂搜索目的地的安全情况、签证政策、天气，评估风险后再回复", score: { cautious: 3, researcher: 1 } },
        { text: "如果是我信得过的死党叫我就去，如果是普通朋友就婉拒", score: { trust_friends: 2 } },
        { text: "委婉拒绝，我只愿意去我熟悉或者研究透彻的目的地，不然没安全感", score: { comfort_zone: 3 } }
      ]
    },
    {
      id: 29,
      text: "在旅行途中，你的手机电量主要消耗在哪个 App 上？",
      options: [
        { text: "地图导航软件和翻译软件，为了找路和沟通", score: { practical: 2 } },
        { text: "相机、修图软件和剪映，为了产出大片", score: { photo_maniac: 3, internet_famous: 1 } },
        { text: "微信、小红书、微博，修完图立刻就要发出去并回复评论", score: { social_butterfly: 3 } },
        { text: "飞行模式下听听歌，偶尔拿出来拍拍风景，尽量不刷手机，享受断联", score: { digital_detox: 3 } }
      ]
    },
    {
      id: 30,
      text: "你会买什么样的纪念品带回家？",
      options: [
        { text: "冰箱贴、明信片或者钥匙扣，轻便不占地方又有仪式感", score: { classic_collector: 2 } },
        { text: "当地艺术家手绘的画、手工烧制的陶器，独一无二的艺术品", score: { deep_travel: 2, cultural: 1 } },
        { text: "基本不买实体纪念品，照片和回忆就是最好的纪念", score: { minimalist: 3 } },
        { text: "当地的零食、调料包或者实用的布袋、杯垫，拿回来能继续用", score: { practical: 2 } }
      ]
    },
    {
      id: 31,
      text: "如果用一句话来概括你的旅行信条，会是下面哪一句？",
      options: [
        { text: "来都来了，不多去几个地方多吃几口肉，都对不起机票钱", score: { special_forces: 3 } },
        { text: "人生是旷野，不是轨道，开心最大，不必强求", score: { easygoing: 3 } },
        { text: "我不想当游客，我想假装是个本地人，换个地方生活几天", score: { deep_travel: 3 } },
        { text: "旅行是一场盛大的出逃，逃离日常的琐碎，去和真正的自己待一会", score: { soul_searcher: 3 } }
      ]
    }
  ],
  personalities: [
    { id: "special_forces", name: "特种兵式旅行者", description: "你信奉的是\"只要走不死，就往死里走\"。一天之内横扫七八个景点，微信步数永远高居榜首。你可以不吃不喝，但不能错过任何一个标志性打卡点。对你来说，旅行就是一场以时间为敌的高效战役，每一分钟都要产生价值。虽然身体在地狱，但眼睛在天堂，朋友圈的点赞是你最好的补给品。" },
    { id: "hotel_lazy", name: "酒店躺平专家", description: "度假的终极奥义是什么？当然是换个地方舒舒服服地躺着。你对各大酒店集团的会员体系如数家珍，对床品的支数、备品的品牌有着苛刻的要求。别人去景点人挤人，你在行政酒廊喝下午茶；别人在烈日下暴走，你敷着面膜在浴缸里泡澡。你完美诠释了什么叫\"只要我躺得够平，内卷就追不上我\"，身心放松才是旅行的第一生产力。" },
    { id: "photo_maniac", name: "出片狂魔", description: "在你的世界观里，没有留下美照的旅行等于没来过。你可以为了一个网红机位顶着烈日排队两小时，也可以为了等一束光在寒风中伫立半天。行李箱里一半是衣服，另一半是各种拍照道具。你的旅行攻略其实就是一份详尽的\"出片地图\"，构图、光影、穿搭缺一不可。当朋友圈九宫格收获无数点赞时，你觉得之前的一切辛苦都值了。" },
    { id: "deep_travel", name: "深度体验派", description: "你厌倦了走马观花和标准化的旅游产品。相比于著名景点，你更愿意钻进老城区湿漉漉的菜市场，坐在街边和不会说普通话的阿婆比划着聊天，或者跟着当地人去吃那些连招牌都没有的小馆子。你喜欢徒步或乘坐公共交通，用最慢的速度贴近这座城市的脉搏。你不是在旅游，你是在试图以当地人的视角生活几天。" },
    { id: "food_lover", name: "味蕾探险家", description: "你的旅行攻略就是一张活点地图美食版。别人看的是景点评分，你看的是必吃榜。为了一个传说中的路边摊，你可以忍受绕路两小时和糟糕的就餐环境。对你而言，风景可能会看腻，但美食永远能带来新的惊喜。旅行回来，你相册里食物的照片可能比风景还多，恩格尔系数在旅途中永远居高不下。" },
    { id: "internet_famous", name: "网红打卡机", description: "你的小红书收藏夹就是你的行程单。哪家店最近火、哪个展览拍照好看、哪面墙是新晋打卡地，你门儿清。你总是能精准地找到那个最佳拍照点，并指导同伴拍出同款大片。旅行对你来说，是一场追逐流量的线下实践，也是验证那些精美照片是否\"照骗\"的侦察行动。" },
    { id: "backpacker", name: "背包十年", description: "一个巨大的登山包就是你流动的家，青年旅舍的多人间是你最熟悉的社交场。你不太在乎住宿条件，干净安全就行；你也不太讲究吃穿，能填饱肚子补充能量即可。你把钱都花在了更长的路上和更远的远方，你喜欢在青旅的公共区域和陌生人交换彼此的故事和下一站的车票信息，那是旅途中最珍贵的货币。" },
    { id: "luxury_travel", name: "奢华度假客", description: "你坚信平时努力赚钱，就是为了旅行时可以不用看价格标签。私人泳池的别墅、米其林三星的晚餐、管家式的贴心服务，这些才是你打开假期的正确方式。你追求的不仅是风景，更是一种极致的舒适和尊贵的体验。旅行是你对自己辛勤工作的一种犒赏，不需要性价比，只需要体验感。" },
    { id: "free_spirit", name: "随性流浪者", description: "计划赶不上变化，所以你干脆不做计划。你可能会因为路边一朵花开得正好而下车停留，也可能会因为和刚认识的陌生人聊得投机而改变下一站的方向。迷路对你来说是意外的礼物，变化才是唯一不变的行程。你的旅行充满了不确定的惊喜，虽然有时候会狼狈，但这种自由自在的感觉让你上瘾。" },
    { id: "planner", name: "攻略打印机", description: "你是同伴眼中的\"行走的锦囊\"。出发前，你会制作一份包含精确到分钟的时间表、交通接驳方案、备选餐厅清单的详细 Excel。所有的门票、车票、酒店都在可控范围内预定妥当。跟着你旅行非常有安全感，仿佛只要跟着攻略走，就不会有任何意外。虽然偶尔会因为太过严谨让同伴感到压力，但每当遇到突发状况时，大家又会第一时间看向你。" },
    { id: "social_butterfly", name: "旅行社交花", description: "只要在路上，你就能交到朋友。无论是在青旅的上下铺、拼车的后座，还是在排队的间隙，你总能迅速打开话匣子。你的开朗和热情像磁场一样，吸引着天南海北的有趣灵魂。旅行结束后，你的微信通讯录里会多出好几个新朋友，甚至可能约好了下一段旅程的偶遇。" },
    { id: "solo_travel", name: "孤独朝圣者", description: "你非常享受独自上路的自由。不用迁就任何人的口味和作息，想走就走，想停就停。一个人吃饭、看海、逛博物馆，你不仅不觉得孤单，反而觉得这是一种难得的奢侈，让你能更专注地感受周围的世界和内心的声音。这是一场与自己的深度对话。" },
    { id: "couple_travel", name: "甜蜜双人游", description: "和心爱的人一起看遍世间美景，是你认为最浪漫的事。你的镜头焦点永远在对方身上，无论是高大上的米其林餐厅还是路边摊的烟火气，只要两个人在一起就是最美的风景。你们的旅行充满了粉红泡泡，虽然偶尔会有小摩擦，但更多的是一起牵手看世界的甜蜜回忆。" },
    { id: "group_travel", name: "团建气氛组", description: "对你来说，去哪里不重要，重要的是和谁一起去。一群人吵吵闹闹、互相嫌弃却又互相扶持的旅程才最难忘。你通常是团队里的开心果，负责制造笑料、活跃气氛，有你在的地方绝对不会冷场。晚上聚在民宿里玩游戏、喝大酒、聊八卦，才是你心目中旅行的精华所在。" },
    { id: "family_travel", name: "家庭旅行规划师", description: "作为全家人的领队，你承担着巨大的责任和压力。你要兼顾老人的体力、孩子的兴趣和成年人的审美。虽然一路上可能要处理各种突发状况，操心到掉头发，但当你看到父母欣慰的笑容和孩子兴奋的眼神时，你会觉得这一切的辛苦都是值得的。这不仅是旅行，更是珍贵的家庭记忆。" },
    { id: "outdoor_enthusiast", name: "户外野孩子", description: "钢筋水泥的城市森林让你窒息，只有回到山川湖海的怀抱才能真正呼吸。你的旅行清单里没有购物和下午茶，只有徒步、登山、露营、皮划艇。你喜欢肌肉酸痛的感觉，喜欢野外的风声和星空。哪怕条件艰苦，哪怕风餐露宿，只要能亲近自然，你就觉得浑身舒畅。" },
    { id: "zen_traveler", name: "佛系旅行者", description: "你的心态稳如泰山。航班取消了？那就改签，正好多玩一天。突然下暴雨了？找个咖啡馆听雨也不错。没有什么突发状况能轻易破坏你的好心情。你认为旅行就是一场修行，随遇而安是最好的姿态，不强求才能收获更多的惊喜。" },
    { id: "anxious_traveler", name: "焦虑型旅行者", description: "出发前一晚你总是睡不踏实，脑子里反复过着一遍又一遍的行李清单，生怕忘带护照。旅途中，你也会不断设想各种突发状况。虽然心里很累，但正因为你的未雨绸缪和谨慎小心，大家的行程往往能避开很多潜在的坑，万无一失。" },
    { id: "shopping_maniac", name: "购物车旅行者", description: "免税店是你的战场，当地市集是你的寻宝地。你有一双发现好物的眼睛，总能淘到性价比超高的当地特产、中古衣物或者设计款首饰。行李箱去的时候空荡荡，回来的时候不仅塞得满满当当，可能还要再手提两个购物袋。花钱使你快乐，特别是在旅行的时候。" },
    { id: "memory_keeper", name: "回忆收藏家", description: "你热衷于收集旅行中的一切纸制品：褪色的门票、皱巴巴的地图、印着邮戳的明信片、好看的糖纸。回到家后，你会花好几个小时甚至好几天，耐心地整理照片，把那些纸片小心翼翼地贴进手帐本里，在旁边写下当时的心情。对你而言，整理回忆的过程，等于把那段快乐的时光又重温了一遍。" },
    { id: "wanderlust", name: "永远在路上", description: "你的脚底仿佛长着风火轮，屁股上仿佛扎着钉子，在一个地方待太久就会浑身难受。刚结束这趟旅行，还在回程的路上，你就已经忍不住打开手机开始搜索下一个目的地的攻略了。世界那么大，你的愿望是用一生的时间去看看。" },
    { id: "budget_traveler", name: "穷游省钱王", description: "你擅长在有限的预算内，把旅行体验最大化。抢特价机票、睡机场、坐夜巴、寻找免费开放的博物馆日和公园，都是你的拿手好戏。你并不觉得穷游苦，反而把\"花最少的钱，走最远的路\"当作一种值得骄傲的挑战和乐趣。" },
    { id: "adventurous", name: "冒险家", description: "常规的目的地已经无法满足你的好奇心，你总是被那些地图上难以到达的角落、需要特殊许可才能进入的区域、或者带有一定危险性的活动所吸引。对你来说，舒适区就是用来打破的，肾上腺素飙升的感觉才是旅途中最迷人的多巴胺。" },
    { id: "mindful_traveler", name: "正念旅行者", description: "你旅行不追求数量，而是追求质量。你可以在一个教堂的角落坐一下午看光影变化，也可以在海边静静地看潮起潮落直到日落。你全身心地沉浸在当下的环境里，用五感去体会风的温度、空气的味道和周围的声音。一草一木都能让你内心感到平静和喜悦。" },
    { id: "cultural_learner", name: "文化探寻者", description: "博物馆、美术馆、历史遗迹、当地的传统节日和民俗表演，是你行程单上的必选项。你出发前会查阅大量的背景资料，带着问题和思考去观察。旅行对你来说是增长见识、触摸不同文明脉络的绝佳机会，是一场跨越时空的头脑风暴。" },
    { id: "weekend_warrior", name: "周末出逃者", description: "你深谙\"时间就像海绵里的水\"的道理。虽然长假难得，但你绝不浪费任何一个周末。周五一下班，你就背上包冲向火车站或机场，在周边城市来一场 48 小时的微旅行，周日晚再带着满满的治愈感回来迎接周一。你是周边游的活地图，总能发掘出好玩又不累的小众路线。" },
    { id: "digital_detox", name: "数字排毒者", description: "旅行是你强制自己摆脱手机依赖的珍贵窗口。除非必要的导航和支付，你很少拿出手机。你不会时刻惦记着修图发朋友圈，也不会刷短视频。你更愿意用眼睛去看，用耳朵去听，用嘴巴去品尝，用全身心去感受真实的世界。你坚信，最美的风景应该储存在脑海里，而不是手机内存里。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_traffic_drink",
      name: "隐藏人格：高速喝光酒的倒霉蛋",
      description: "你满心欢喜地自驾出游，结果被死死堵在高速上。带的零食吃完了，连原本打算到了酒店再开的酒也喝光了，然而前方的车流依然纹丝不动……你看着窗外的夕阳，流下了疲惫又无奈的泪水。",
      trigger: (answers) => answers.filter(a => a && (a.includes("堵车") || a.includes("高速") || a.includes("排队") || a.includes("人多"))).length >= 6
    },
    {
      id: "hidden_tired_worker",
      name: "隐藏人格：调完班不想动的怨种",
      description: "为了凑出这次假期的连续时间，你在出发前疯狂调班、加班，每天忙得脚不沾地。等到终于坐上出发的交通工具时，你发现你已经累瘫了，根本不想玩，只想在酒店床上睡到天荒地老。假期的意义变成了——补觉。",
      trigger: (answers) => answers.filter(a => a && (a.includes("工作") || a.includes("累") || a.includes("调班") || a.includes("酒店躺"))).length >= 5
    }
  ]
};