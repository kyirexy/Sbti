export default {
  id: "consumption",
  title: "消费人格测试",
  questions: [
    {
      id: 1,
      text: "深夜刷购物 App，你突然看到一件让你怦然心动但完全不在本月预算内的东西，你会？",
      options: [
        { text: "二话不说下单，早买早享受，下个月吃土下个月再说", score: { impulsive: 3, retail_therapist: 1 } },
        { text: "加入购物车，反复打开 App 看了一遍又一遍，纠结到失眠", score: { guilty_spender: 3, inner_consume: 1 } },
        { text: "截图搜同款，看看有没有平替或者更便宜的渠道", score: { bargain_hunter: 3, savvy_planner: 1 } },
        { text: "默默关掉 App，告诉自己\"你不需要，你只是想要\"，然后睡觉", score: { minimalist: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 2,
      text: "你拿到一笔 5000 元的意外之财（奖金/红包），你脑海里的第一个念头是？",
      options: [
        { text: "立刻打开购物车清空几件心仪已久的大件", score: { impulsive: 3, retail_therapist: 1 } },
        { text: "请家人或好朋友吃顿好的，剩下的存起来", score: { social_giver: 2, security_hoarder: 1 } },
        { text: "全部转入储蓄或理财账户，看着数字增长才安心", score: { security_hoarder: 3, future_planner: 1 } },
        { text: "一半买自己想要的，一半存起来，精准分配", score: { savvy_planner: 3, balanced_mediator: 1 } }
      ]
    },
    {
      id: 3,
      text: "朋友约你去一家新开的网红餐厅，人均消费可能超过 400 元，你的态度是？",
      options: [
        { text: "去！贵有贵的道理，拍照打卡体验一次很值", score: { experience_seeker: 3, internet_famous: 1 } },
        { text: "有点心疼，但为了和朋友社交还是咬咬牙去", score: { social_giver: 2, guilty_spender: 1 } },
        { text: "婉拒，并提议换一家性价比更高的宝藏小店", score: { bargain_hunter: 3, food_lover: 1 } },
        { text: "看自己最近的手头情况，宽裕就去，紧张就直说", score: { savvy_planner: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 4,
      text: "对于各种 App 的\"会员自动续费\"功能，你是哪种状态？",
      options: [
        { text: "经常忘记关，每个月查账单才发现又被扣了好几笔", score: { impulsive: 2, lazy_king: 1 } },
        { text: "看到首月优惠就开通，但在日历上设好提醒，到期前必关", score: { bargain_hunter: 3, savvy_planner: 1 } },
        { text: "除非是刚需（如网盘，音乐），否则绝不开任何自动续费", score: { minimalist: 3, security_hoarder: 1 } },
        { text: "所有订阅都记在备忘录里，每月定期审查是否还要续", score: { savvy_planner: 3, future_planner: 1 } }
      ]
    },
    {
      id: 5,
      text: "你准备购买一个 500 元左右的小家电，你的购买流程通常是？",
      options: [
        { text: "直接搜品类按销量排序，买第一个评价还不错的", score: { impulsive: 2, efficient: 1 } },
        { text: "花一个下午时间，对比至少五个品牌，看遍测评视频和\"避雷\"帖", score: { savvy_planner: 3, rational_analyzer: 1 } },
        { text: "去\"什么值得买\"或薅羊毛小组蹲好价，不等到历史低价绝不下手", score: { bargain_hunter: 3, security_hoarder: 1 } },
        { text: "等到 618 或双十一，和其他东西一起凑满减", score: { bargain_hunter: 2, future_planner: 1 } }
      ]
    },
    {
      id: 6,
      text: "朋友因为急事找你借钱，金额大约是你月收入的三分之一，你会？",
      options: [
        { text: "既然开口了肯定很急，二话不说就转过去，不打借条", score: { social_giver: 3, impulsive: 1 } },
        { text: "会借，但会委婉地约定一个大概的还款时间", score: { balanced_mediator: 2, gentle_guardian: 1 } },
        { text: "心里不太想借，但又不好意思拒绝，只能少借一点意思一下", score: { people_pleaser: 3, guilty_spender: 1 } },
        { text: "直接说最近手头也紧，或者推荐他试试正规借贷平台", score: { gentle_guardian: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 7,
      text: "对于\"超前消费\"（信用卡、花呗，白条分期），你的使用习惯是？",
      options: [
        { text: "是常用支付方式，经常把大额消费分期，先享受再说", score: { impulsive: 3, retail_therapist: 1 } },
        { text: "只在有免息分期或大额优惠时才用，并且下个月一定全额还清", score: { bargain_hunter: 3, savvy_planner: 1 } },
        { text: "尽量不用，甚至主动调低额度，觉得花未来的钱不踏实", score: { security_hoarder: 3, minimalist: 1 } },
        { text: "每个月给自己设定严格额度，快超了就立刻停用", score: { savvy_planner: 3, future_planner: 1 } }
      ]
    },
    {
      id: 8,
      text: "逛超市时，你推着购物车，什么东西最容易让你临时起意放进车里？",
      options: [
        { text: "醒目的\"限时特价\"黄色标签", score: { bargain_hunter: 3, impulsive: 1 } },
        { text: "包装设计非常可爱、有趣、上镜的零食或饮料", score: { aesthetic_buyer: 3, impulsive: 1 } },
        { text: "试吃推广的小姐姐太热情，尝了一口觉得还行", score: { people_pleaser: 2, impulsive: 1 } },
        { text: "结账前发现距离满减门槛还差十几块，随手拿个口香糖凑单", score: { bargain_hunter: 2, savvy_planner: 1 } }
      ]
    },
    {
      id: 9,
      text: "在知识付费（网课、付费专栏、电子书会员）上，你的消费模式是？",
      options: [
        { text: "看到感兴趣的标题或海报就忍不住买，网盘里囤了几个 T 的\"待学\"资料", score: { knowledge_investor: 3, impulsive: 1 } },
        { text: "只买当下工作或考试急需的，学完一个再买下一个", score: { savvy_planner: 3, rational_analyzer: 1 } },
        { text: "基本不花钱，善于寻找免费资源和破解版，或者找朋友借账号", score: { free_spirit: 3, bargain_hunter: 1 } },
        { text: "会认真试听、看目录和评价，确认值得才会付费", score: { quality_purist: 3, rational_analyzer: 1 } }
      ]
    },
    {
      id: 10,
      text: "你的手机已经用了两年，电池不太行了偶尔会卡，此时心仪的品牌出了新款，你会？",
      options: [
        { text: "立刻下单新款，旧手机在二手平台卖掉回血", score: { tech_enthusiast: 3, impulsive: 1 } },
        { text: "先去看评测，如果性能提升巨大、拍照有飞跃就换", score: { quality_purist: 3, rational_analyzer: 1 } },
        { text: "花 200 块换个电池继续用，缝缝补补又三年", score: { minimalist: 3, security_hoarder: 1 } },
        { text: "去二手平台淘一个成色不错的上代旗舰，性价比最高", score: { secondhand_phoenix: 3, bargain_hunter: 1 } }
      ]
    },
    {
      id: 11,
      text: "以下哪种说法最贴近你对\"钱\"的核心观念？",
      options: [
        { text: "钱是赚出来的，不是省出来的", score: { experience_seeker: 2, impulsive: 1 } },
        { text: "钱是安全感的来源，存款数字越多我越安心", score: { security_hoarder: 3, future_planner: 1 } },
        { text: "钱是工具，用来交换快乐、体验和自由", score: { experience_seeker: 3, travel_nomad: 1 } },
        { text: "钱是实现人生规划的手段，需要精打细算", score: { savvy_planner: 3, future_planner: 1 } }
      ]
    },
    {
      id: 12,
      text: "公司团建去景区，有一个自费体验项目（200元/人），你可以选择不参加，你会？",
      options: [
        { text: "参加！来都来了，不玩就亏了，而且大家一起才热闹", score: { social_giver: 2, experience_seeker: 1 } },
        { text: "如果大部分同事都参加我就参加，不想显得自己不合群", score: { people_pleaser: 3, social_chameleon: 1 } },
        { text: "不参加，在旁边找个咖啡馆喝杯东西等大家，正好省点钱", score: { minimalist: 3, gentle_guardian: 1 } },
        { text: "看项目自己感不感兴趣，好玩就参加，一般就省钱", score: { rational_analyzer: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 13,
      text: "对于日常的\"小钱\"（比如每天一杯咖啡、打车费、视频会员），你的态度是？",
      options: [
        { text: "不太在意，随手就花了，这些小钱省下来也发不了财", score: { impulsive: 2, experience_seeker: 1 } },
        { text: "会用记账 App 记录，但不会刻意节省，做到心中有数就行", score: { savvy_planner: 2, rational_analyzer: 1 } },
        { text: "能省则省，积少成多，一年下来也是一笔可观的数目", score: { security_hoarder: 3, bargain_hunter: 1 } },
        { text: "会积极使用各种优惠券、积分兑换、信用卡返现来覆盖这些小支出", score: { bargain_hunter: 3, free_spirit: 1 } }
      ]
    },
    {
      id: 14,
      text: "你养的宠物突然生病需要一笔不小的治疗费（约3000元），而你当月预算已很紧张，你会？",
      options: [
        { text: "治！哪怕刷信用卡分期也要治，它是家人", score: { pet_devotee: 3, impulsive: 1 } },
        { text: "先听医生的建议，评估治愈率和后续花费，再和家人商量决定", score: { rational_analyzer: 3, savvy_planner: 1 } },
        { text: "非常心痛纠结，可能会选择保守治疗，经济压力实在太大了", score: { guilty_spender: 3, inner_consume: 1 } },
        { text: "立刻在宠物群或朋友圈求助，或者发众筹链接，尽力而为", score: { social_giver: 2, people_pleaser: 1 } }
      ]
    },
    {
      id: 15,
      text: "你看到一篇很有深度的长文，但读到一半提示需要付费 9.9 元才能继续阅读，你会？",
      options: [
        { text: "直接付钱，9.9 元买不了吃亏，万一有收获就赚了", score: { knowledge_investor: 3, impulsive: 1 } },
        { text: "先仔细看看免费部分，判断质量，如果确实干货多就付费", score: { quality_purist: 3, rational_analyzer: 1 } },
        { text: "复制标题和关键词去别的平台搜，看看有没有人搬运或总结", score: { free_spirit: 3, bargain_hunter: 1 } },
        { text: "收藏文章，想着\"以后免费了再看\"或\"等别人分享笔记\"", score: { lazy_king: 2, future_planner: 1 } }
      ]
    },
    {
      id: 16,
      text: "商场里有人拉住你，说可以免费做皮肤测试/发型设计/体验装，你知道最后可能会推销，你会？",
      options: [
        { text: "去！闲着也是闲着，万一真的免费呢，推销我不买就是了", score: { free_spirit: 3, impulsive: 1 } },
        { text: "如果正好有空且对项目感兴趣就去，但心里设好防线，坚决不掏钱", score: { bargain_hunter: 2, rational_analyzer: 1 } },
        { text: "礼貌地摆摆手，加快脚步离开，不给任何机会", score: { gentle_guardian: 3, recharge_seeker: 1 } },
        { text: "有点犹豫，但不好意思拒绝，可能被半推半就拉进去", score: { people_pleaser: 3, guilty_spender: 1 } }
      ]
    },
    {
      id: 17,
      text: "关于\"记账\"这件事，你属于哪种情况？",
      options: [
        { text: "从来不记，记了也坚持不下来，对自己的花销只有模糊概念", score: { impulsive: 2, lazy_king: 1 } },
        { text: "用 App 激情记过几个月，后来某天忘了就再也没打开过", score: { intermittent_try: 3, guilty_spender: 1 } },
        { text: "坚持记账一年以上，清楚知道每个月钱花在哪里，有月度复盘", score: { savvy_planner: 3, future_planner: 1 } },
        { text: "只记大额支出，小额零碎的不记，大概掌握收支平衡即可", score: { rational_analyzer: 2, balanced_mediator: 1 } }
      ]
    },
    {
      id: 18,
      text: "你花大价钱买了一件很喜欢的正品衣服/包包，结果发现朋友买了几乎一样的仿品，价格只有十分之一，你会？",
      options: [
        { text: "瞬间有点后悔，觉得自己像个冤大头", score: { inner_consume: 2, guilty_spender: 1 } },
        { text: "无所谓，我买的是设计、品质和购物体验，假的真不了", score: { quality_purist: 3, brand_loyalist: 1 } },
        { text: "立刻问朋友要链接，以后我也买仿品，省下的钱干点啥不好", score: { bargain_hunter: 3, free_spirit: 1 } },
        { text: "心里不太舒服，但表面还是夸朋友会买，不会表现出来", score: { people_pleaser: 2, conflict_avoider: 1 } }
      ]
    },
    {
      id: 19,
      text: "当你心情非常糟糕、压力爆棚时，以下哪种消费行为最能抚慰你？",
      options: [
        { text: "去吃一顿垂涎已久的大餐，用美食填满胃和心", score: { emotional_eater: 3, food_lover: 1 } },
        { text: "打开购物 App 下单那件躺在购物车里很久的东西，拆快递的快感", score: { retail_therapist: 3, impulsive: 1 } },
        { text: "去做个按摩、SPA 或者泡个汤，让身体放松下来", score: { experience_seeker: 3, health_investor: 1 } },
        { text: "不花钱，宅家看一部温暖的电影或剧，用精神食粮治愈", score: { minimalist: 3, homebody_nester: 1 } }
      ]
    },
    {
      id: 20,
      text: "如果你中了 500 万彩票（税后)，你脑海中浮现的第一个具体计划是？",
      options: [
        { text: "辞职！然后立刻订机票去环游世界", score: { travel_nomad: 3, experience_seeker: 1 } },
        { text: "先把房贷/车贷还清，或者立刻去看一套心仪的房子", score: { security_hoarder: 3, future_planner: 1 } },
        { text: "把钱存银行或买稳健理财，用利息补贴生活，继续上班", score: { future_planner: 3, rational_analyzer: 1 } },
        { text: "给家人一大笔钱，带他们去享受以前舍不得的东西", score: { social_giver: 3, nurturing_caregiver: 1 } }
      ]
    },
    {
      id: 21,
      text: "对于购买\"二手物品\"（闲鱼、转转、多抓鱼），你的态度是？",
      options: [
        { text: "只买全新的，二手的东西心里总觉得有点膈应", score: { quality_purist: 2, minimalist: 1 } },
        { text: "会买二手书、二手游戏卡带这类不影响使用体验的东西", score: { secondhand_phoenix: 3, bargain_hunter: 1 } },
        { text: "我是闲鱼资深用户，大到家具小到衣服，万物皆可二手", score: { secondhand_phoenix: 3, free_spirit: 1 } },
        { text: "我主要是在上面卖掉自己的闲置回血，但很少买别人的二手", score: { minimalist: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 22,
      text: "朋友结婚，关系普通，当地份子钱行情是 600 元，你通常会？",
      options: [
        { text: "随 600，随大流不出错", score: { social_chameleon: 2, balanced_mediator: 1 } },
        { text: "随 500 或 400，意思到了就行，毕竟关系一般", score: { gentle_guardian: 2, security_hoarder: 1 } },
        { text: "随 800，显得自己大方重情义，面子要过得去", score: { social_giver: 3, spotlight_seeker: 1 } },
        { text: "看看他以前随我多少，我按同等金额还回去", score: { rational_analyzer: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 23,
      text: "购买电子产品时，销售员推荐你购买\"延保服务\"，你通常会？",
      options: [
        { text: "为了安心，一般都会买，尤其是大件", score: { security_hoarder: 3, anxious_traveler: 1 } },
        { text: "坚决不买，觉得是智商税，产品质量本身就该过关", score: { minimalist: 3, rational_analyzer: 1 } },
        { text: "看是什么产品，贵的、容易坏的会考虑，便宜的就算了", score: { savvy_planner: 3, rational_analyzer: 1 } },
        { text: "以前从没注意过这个选项，被问了才第一次思考", score: { impulsive: 2 } }
      ]
    },
    {
      id: 24,
      text: "双十一预售开始前一周，你的购物车状态通常是？",
      options: [
        { text: "早就加得满满当当，定金都付了好几个，就等付尾款", score: { impulsive: 3, retail_therapist: 1 } },
        { text: "加了几件真正需要的，但会反复纠结，不断删删减减", score: { inner_consume: 3, savvy_planner: 1 } },
        { text: "空空如也，对这种人造购物节无感，有需要平时就买了", score: { minimalist: 3, rational_analyzer: 1 } },
        { text: "加了很多想买的，但最后只会挑其中几样最优惠的下单", score: { bargain_hunter: 3, savvy_planner: 1 } }
      ]
    },
    {
      id: 25,
      text: "在你看来，以下哪一项最值得你投入较多的金钱？",
      options: [
        { text: "旅行和独特的体验，创造回忆", score: { experience_seeker: 3, travel_nomad: 1 } },
        { text: "提升自己的课程、书籍和健康", score: { knowledge_investor: 3, health_investor: 1 } },
        { text: "让日常生活更舒适的家电、家具", score: { homebody_nester: 3, quality_purist: 1 } },
        { text: "给家人朋友买礼物或提供帮助", score: { social_giver: 3, nurturing_caregiver: 1 } }
      ]
    },
    {
      id: 26,
      text: "朋友神神秘秘地推荐你买一只\"内幕消息\"的股票或基金，说稳赚，你会？",
      options: [
        { text: "跟着少买一点试试水，万一赚了呢", score: { risk_taker: 3, impulsive: 1 } },
        { text: "先自己去研究一下这家公司基本面，再决定是否跟投", score: { rational_analyzer: 3, savvy_planner: 1 } },
        { text: "坚决不碰，不懂不投，钱放在银行或低风险理财最安心", score: { security_hoarder: 3, cautious_observer: 1 } },
        { text: "嘴上说着\"好的好的\"，实际上完全没行动", score: { lazy_king: 2, conflict_avoider: 1 } }
      ]
    },
    {
      id: 27,
      text: "看到商品页面上\"限时优惠，最后 3 小时\"的红色倒计时，你的心跳会？",
      options: [
        { text: "加速，手指蠢蠢欲动，害怕错过这个村就没这个店了", score: { impulsive: 3, anxious_traveler: 1 } },
        { text: "先冷静想想这是不是自己真的需要的，是的话就买", score: { rational_analyzer: 3, savvy_planner: 1 } },
        { text: "内心毫无波澜甚至想笑，知道这都是商家的套路", score: { minimalist: 3, cold_observer: 1 } },
        { text: "关掉页面，眼不见心不烦，不看就不会买", score: { gentle_guardian: 3, recharge_seeker: 1 } }
      ]
    },
    {
      id: 28,
      text: "对于餐厅的\"小费\"或者直播间的\"打赏\"，你的习惯是？",
      options: [
        { text: "如果服务真的很好或者主播很对胃口，会主动给", score: { social_giver: 2, experience_seeker: 1 } },
        { text: "别人都给的话我也给，不好意思不给", score: { people_pleaser: 3, social_chameleon: 1 } },
        { text: "基本不给，觉得餐费/物价已经包含了服务成本", score: { minimalist: 3, rational_analyzer: 1 } },
        { text: "看场合，高档餐厅或很熟的直播间偶尔会表示一下", score: { savvy_planner: 2, balanced_mediator: 1 } }
      ]
    },
    {
      id: 29,
      text: "你更愿意把钱和时间优先投资在什么地方？",
      options: [
        { text: "当下能立刻让我感到快乐和满足的事情", score: { impulsive: 3, experience_seeker: 1 } },
        { text: "未来能保值增值、产生复利效应的资产或技能", score: { future_planner: 3, security_hoarder: 1 } },
        { text: "人际关系的维护和拓展，人脉就是钱脉", score: { social_giver: 3, bridge_builder: 1 } },
        { text: "家人的需求，他们的幸福是我赚钱的最大动力", score: { nurturing_caregiver: 3, family_travel: 1 } }
      ]
    },
    {
      id: 30,
      text: "在二手平台卖闲置时，遇到买家砍价，你通常会？",
      options: [
        { text: "大刀小刀都接，只求快点出手腾地方，价格差不多就行", score: { minimalist: 3, impulsive: 1 } },
        { text: "坚守底线，价格太低宁愿留着也不卖，我的东西值这个价", score: { quality_purist: 3, gentle_guardian: 1 } },
        { text: "和买家友好协商，取一个双方都能接受的中间价", score: { mediator: 3, balanced_mediator: 1 } },
        { text: "懒得回复，已读不回，等下一个爽快的买家", score: { lazy_king: 2, recharge_seeker: 1 } }
      ]
    },
    {
      id: 31,
      text: "如果让你用一个词来形容你和金钱的关系，会是？",
      options: [
        { text: "相爱相杀（离不开它，又总为它烦恼）", score: { inner_consume: 3, guilty_spender: 1 } },
        { text: "相敬如宾（理性对待，保持距离，互不绑架）", score: { rational_analyzer: 3, minimalist: 1 } },
        { text: "亲密战友（它是我实现自由的工具，为我服务）", score: { experience_seeker: 3, free_spirit: 1 } },
        { text: "若即若离（来去匆匆，好像总也抓不住）", score: { impulsive: 3, anxious_traveler: 1 } }
      ]
    }
  ],
  personalities: [
    { id: "impulsive", name: "冲动剁手党", description: "你的消费信条只有一个：早买早享受，晚买哭着求。快乐就是下单那一瞬间的多巴胺飙升。家里堆着没拆的快递，信用卡账单总是让你眼前一黑，但下一次看到喜欢的东西，你的手还是比脑子快。你擅长用购物治愈一切不开心，只是副作用有点大。" },
    { id: "bargain_hunter", name: "羊毛收割机", description: "哪里有优惠，哪里就有你的身影。你的手机里装满了领券 App 和比价插件，原价买东西对你来说是一种侮辱。你能为了省几块钱研究半小时凑单方案，并从中获得巨大的成就感。你不是抠门，你只是享受这种\"赢了商家\"的快乐。" },
    { id: "minimalist", name: "极简修行者", description: "你拥有的物品可能还没有别人一个季度的快递多。消费之前你会有灵魂三问：我需要吗？我适合吗？没有它会死吗？你厌恶囤积和浪费，追求\"少即是多\"的生活哲学。比起物质的堆砌，你更享受空旷房间带来的精神自由。" },
    { id: "experience_seeker", name: "体验收藏家", description: "钱没了可以再赚，但那些看过的日落、听过的音乐会、旅途中遇到的人，才是永不贬值的财富。你愿意为了一场震撼的演出、一次独特的旅行、一顿难忘的晚餐慷慨解囊。对你来说，人生就是一个不断收集体验的罐子，物质只是载体。" },
    { id: "status_seeker", name: "社交名片控", description: "Logo 和品牌是你行走江湖的勋章。你购买的不仅是商品的功能，更是一种身份认同和圈层门票。你关注时尚趋势，在意别人的眼光，希望通过消费来定义\"我是谁\"。虽然偶尔会为了面子让钱包受罪，但那种被认可的感觉让你甘之如饴。" },
    { id: "savvy_planner", name: "精算生活家", description: "Excel 表格就是你消费世界的地图。每一分钱都有它的预算和归宿，你擅长做攻略、比价格、算满减，把生活安排得明明白白。冲动消费在你这里几乎不存在，因为你永远有一个待办清单和价格观察期。和你一起过日子，非常有安全感。" },
    { id: "security_hoarder", name: "安全感囤积者", description: "看到银行账户里的数字增长，比花钱更让你快乐。你囤的不是物品，是对抗未来不确定性的盾牌。你习惯未雨绸缪，总觉得存款不够多。即使收入不错，你也保持着节俭的习惯，因为你知道，那是你在这个世界上站稳脚跟的底气。" },
    { id: "social_giver", name: "人间散财童子", description: "朋友聚会你抢着买单，家人需要你从不犹豫，看到感人的众筹你会默默支持。你的钱不是花掉的，而是流淌在人际关系里的暖流。对你来说，钱的意义在于让身边的人开心，而你也能从他们的笑容中获得满足。只是偶尔也要记得对自己好一点。" },
    { id: "tech_enthusiast", name: "数码追新族", description: "你可以忍受吃一个月泡面，但不能忍受手机不是最新款。你对科技产品的迭代有着宗教般的狂热，发布会一场不落，参数倒背如流。每次新品发售，你都是第一批冲上去的用户。虽然钱包永远在哭泣，但那种把玩新科技的快乐无可替代。" },
    { id: "aesthetic_buyer", name: "颜值即正义", description: "功能什么的都是次要的，好看才是第一生产力。你经常为了一个漂亮的包装、一个可爱的造型、一种独特的氛围感而心甘情愿地超额付费。你的家里摆满了好看但可能没什么用的东西，但你看着它们就开心。为设计买单，是你对平庸生活的温柔反抗。" },
    { id: "guilty_spender", name: "忏悔式消费者", description: "下单时有多爽，还账单时就有多丧。你总是在冲动和后悔之间反复横跳，每次买完贵的东西都要经历一场深刻的精神内耗。你既无法控制消费的欲望，又无法坦然接受消费的后果，像一个在告解室里反复忏悔的购物狂。" },
    { id: "secondhand_phoenix", name: "回血循环师", description: "你是闲鱼、多抓鱼等二手平台的深度用户。你相信万物皆可二手，不仅能以极低的价格淘到宝贝，还能把自己的闲置卖出去回血。你在买买买和卖卖卖之间找到了一种奇妙的平衡，既满足了购物欲，又不会让钱包大出血，环保又精明。" },
    { id: "quality_purist", name: "一步到位党", description: "你信奉\"买十件差的，不如买一件好的\"。与其在反复更换和维修中浪费时间精力，你宁愿一开始就咬牙买那个最顶配，最经典，质量最好的。虽然前期投入让人肉疼，但长远来看，你的东西总是历久弥新，这是一种对时间和品质的尊重。" },
    { id: "emotional_eater", name: "情绪喂养员", description: "开心了吃顿好的庆祝，难过了吃顿好的安慰，无聊了吃顿好的解闷。你的恩格尔系数常年居高不下，食物是你处理一切情绪的万能钥匙。你坚信没有什么是一顿火锅解决不了的，如果有，就两顿。胃填满了，心也就没那么空了。" },
    { id: "knowledge_investor", name: "知识付费慈善家", description: "你为知识付费时眼都不眨，仿佛买了课就等于学会了。你的网盘里躺着好几个 T 的\"待学\"资料，各种训练营、会员卡、付费专栏塞满了账户。虽然完课率低得可怜，但你依然乐此不疲地为缓解焦虑而付费，堪称知识付费领域的爱心天使。" },
    { id: "pet_devotee", name: "毛孩子金主", description: "自己吃沙县小吃，给主子买进口罐头；自己舍不得买衣服，给主子买各种可爱小裙子。你一看到毛茸茸的它们，银行卡密码都能告诉它。宠物不是你的全部，但你的钱包和爱，绝大部分都给了它们。你是它们最忠诚的铲屎官和金主爸爸/妈妈。" },
    { id: "travel_nomad", name: "游牧梦想家", description: "办公室的椅子仿佛长了刺，只有远方的机票才是解药。你工作的最大动力就是攒钱去下一次旅行。你的人生地图就是一张张打卡照和飞机票，世界那么大，你的心和钱包永远在路上。你是一个用脚步丈量世界的游牧民族。" },
    { id: "homebody_nester", name: "居家筑巢者", description: "外面的世界很精彩，但不如家里的沙发和床舒服。你的钱全花在了提升宅家幸福感上：更柔软的被子、更好用的投影仪、更智能的家电。你把家打造成了一个完美的避风港，在这里你可以彻底放松，治愈一切外界的疲惫。" },
    { id: "gift_anxiety", name: "送礼焦虑患者", description: "逢年过节就是你的受难日。给朋友、家人、领导送什么礼物，能让你提前一个月开始焦虑。你既怕送便宜了显得小气，又怕送贵了对方有负担，更怕送错了被人嫌弃。礼物在你这里承载了太多的社交压力，而不是单纯的祝福。" },
    { id: "invisible_luxury", name: "隐形奢侈者", description: "你外表看起来朴素低调，但袜子可能是两百块一双的，内衣可能比外套还贵，家里用的毛巾都是某个小众奢侈品牌。你在别人看不见的地方极度讲究，追求的是一种只有自己知道的舒适和质感。懂的人自然懂，不懂的你也懒得解释。" },
    { id: "diy_master", name: "手作改造王", description: "买成品？那是瞧不起你的动手能力。你享受从原材料到成品的控制感，无论是烘焙、木工、编织还是家居改造，你都乐在其中。虽然有时候算下来成本比直接买还贵，但那种独一无二的成就感和创造的快乐，是金钱买不到的。" },
    { id: "health_investor", name: "朋克养生投资人", description: "熬最晚的夜，敷最贵的面膜；啤酒泡枸杞，可乐放党参。你在健康消费上从不手软，办健身卡、买保健品、囤养生壶，仿佛只要花了这个钱，就已经获得了健康。你是一边作死一边自救的典型代表，为健康焦虑付出了大量金钱。" },
    { id: "brand_loyalist", name: "品牌忠犬", description: "一旦你认准了一个牌子，就很难再变心。从手机到家电，从衣服到洗护用品，你都是该品牌的忠实用户。你不仅自己买，还免费向身边人安利。你早已不是一个单纯的消费者，而是这个品牌的精神股东，维护它的声誉就像维护自己的名誉一样。" },
    { id: "free_spirit", name: "野生免费侠", description: "你的座右铭是：能白嫖绝不花钱。你找资源的能力超强，各大网盘、破解论坛、互助小组都有你的身影。你熟练使用各种积分兑换、免费试用、薅羊毛技巧。虽然偶尔会翻车，但你依然乐此不疲，享受着这种\"不花钱也能过很好\"的野生智慧。" },
    { id: "accidental_hoarder", name: "仓鼠型拾荒者", description: "快递盒子、购物纸袋、一次性餐具、漂亮的玻璃瓶……你都舍不得扔，总觉得\"万一哪天用得上呢\"。你的储物空间总是被这些\"宝贝\"塞得满满当当，像个过冬的仓鼠窝。虽然大多数时候它们确实派不上用场，但你就是无法断舍离。" },
    { id: "future_planner", name: "杞人忧天存钱罐", description: "即便你还单身，可能已经开始考虑未来孩子的教育基金和自己的养老问题了。你永远在为遥远的未来做准备，未雨绸缪是你的人生底色。这让你的生活非常稳健，但有时候也会因为想得太远而无法享受当下的快乐。" },
    { id: "retail_therapist", name: "购物疗法践行者", description: "你坚信购物车清空的那一刻，灵魂也能得到暂时的净化。无论是开心还是不开心，你都会选择用购物来放大或治愈情绪。虽然这种疗法的效果通常比较短暂，而且副作用明显（钱包变瘪），但你依然觉得这比去看心理医生便宜多了。" }
  ],
  hidden_personalities: [
    {
      id: "hidden_broke_artist",
      name: "隐藏人格：破产艺术家",
      description: "你内心深处住着一个不为五斗米折腰的灵魂，追求精神的富足远胜于物质的堆砌。虽然现实是为了凑满减算到崩溃，为了房租焦头烂额，但你的品味和审美依然高贵。你穷得叮当响，但精神世界却富可敌国。",
      trigger: (answers) => answers.filter(a => a && (a.includes("冲动") || a.includes("买") || a.includes("品质") || a.includes("设计"))).length >= 12
    },
    {
      id: "hidden_coupon_god",
      name: "隐藏人格：凑单之神",
      description: "你买的每一样东西，可能都不是因为你真正需要它，而是因为——它刚好能凑够那个满减门槛。你的家里堆满了为了凑单而买的奇怪小物：一块钱的橡皮筋、五块钱的挂钩、十块钱的收纳盒。你在凑单界已经封神，人送外号\"再买一件就减五十\"。",
      trigger: (answers) => answers.filter(a => a && (a.includes("凑单") || a.includes("满减") || a.includes("优惠") || a.includes("便宜"))).length >= 10
    }
  ]
};