export const schools = [
  // --- 闵行区 紫竹及周边 ---
  {
    id: 's1', region: '闵行区', subRegion: '紫竹高新区',
    name: '华东师范大学第二附属中学附属初级中学', type: '公办', level: '初中',
    address: '上海市闵行区紫凤路350号',
    tuition: '义务教育免学费', tuitionDetail: '体制内公办免学费；部分餐费/校服代办费按实收取。注：其同源国际部班级约7万/年。',
    tags: ['钱学森班', '科技教育', '四大摇篮'],
    admissionRate: [{ year: '2023', rate: 85, label: '市重点率' }, { year: '2024', rate: 88, label: '市重点率' }, { year: '2025', rate: 90, label: '预估市重点率' }],
    teachingMethod: '五育并举，追求卓越，卓越课程体系，涵盖语言、艺术、体育等百门课程。',
    reputation: '家长反馈师资力量符合高标准，课堂高效，不是高压教育，学生心态阳光。',
    advantages: '依托华二本部资源，共享紫竹名校优势，极强的竞赛辅导团队。',
    photos: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's4', region: '闵行区', subRegion: '紫竹高新区',
    name: '上海民办圣华紫竹双语学校', type: '民办', level: '九年一贯制',
    address: '上海市闵行区紫竹国际教育园区',
    tuition: '约7.6万-22万/年', tuitionDetail: '小学部约12万/年；初中部约7.6万/年；直升高中部(A-Level/IB等)约17.8万-22.8万/年。',
    tags: ['国际视野', '双语教学'],
    admissionRate: [{ year: '2024', rate: 75, label: '海外名校率' }, { year: '2025', rate: 80, label: '海外名校率' }],
    teachingMethod: '融合中西方教育精髓，实行小班化定制化教学，突出探究式学习模式。',
    reputation: '校园硬件设施一流，家长对孩子的个性化呵护与英文能力培养非常满意。',
    advantages: '直通圣华紫竹高级中学国际部，出国留学路径清晰。',
    photos: [
      'https://images.unsplash.com/photo-1627556592933-ffe99c1c9cd0?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's5', region: '闵行区', subRegion: '紫竹高新区',
    name: '华东师范大学附属紫竹小学', type: '公办', level: '小学',
    address: '上海市闵行区紫凤路198号',
    tuition: '义务教育免学费', tuitionDetail: '严格执行公办九年义务教育政策，免学费。',
    tags: ['让生命更灵动', '三区联动', 'RAINBOW课程', '教育部体育基地'],
    admissionRate: [{ year: '近三年', rate: 95, label: '对口华二初留存率' }],
    teachingMethod: '秉持“学校，让生命更灵动”办学理念。大力推进“卓越育人 健康+”，独创跨学科RAINBOW实践体验课程，并开设编程、领导力、冰雪运动、管弦乐等高端校本课程。',
    reputation: '依托“大学校区、科技园区、城市社区”三方联动的神仙公办。作为教育部重点实验室基地，其体育（全国啦啦操冠军、武术）与科创能力在公立小学中处于顶尖梯队。',
    advantages: '闵行紫竹基础教育园区标配起点，独享华东师大高规格师资与教研体系输入，生源质量受高新人才家庭托底，直通华二系。',
    photos: [
      'https://images.unsplash.com/photo-1510531704581-5b28709ec685?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's6', region: '闵行区', subRegion: '浦江/马桥',
    name: '上海戏剧学院闵行附属学校', type: '公办', level: '九年一贯制',
    address: '上海市闵行区闵瑞路501号',
    tuition: '义务教育免学费', tuitionDetail: '公办免学费，艺术类兴趣材料或集训等课外费用另计。',
    tags: ['衍美教育', '艺术特色', '教育戏剧'],
    admissionRate: [{ year: '近年', rate: 100, label: '公办初中直升率' }],
    teachingMethod: '倡导“学戏引修行立德，格物以正人成事”。创新采用“教育戏剧”法，将戏剧融入学科。',
    reputation: '文化艺术氛围极浓，余秋雨题写校名。适合具有表现力或需要培养同理心和自信感的孩子。',
    advantages: '与上戏深度绑定资源，拥有极佳的实验剧场和艺术培养通道。',
    photos: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1565985860268-c17983ea1c3c?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1588691880486-dae3e56a73ba?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },

  // --- 静安区 市北高新及辐射区 ---
  {
    id: 's2', region: '静安区', subRegion: '市北高新区',
    name: '上海市市北初级中学', type: '公办', level: '初中',
    address: '上海市静安区西藏北路803号',
    tuition: '义务教育免学费', tuitionDetail: '体制内免学费；理科竞赛培训等资源通常由学校或教育局公费补贴。',
    tags: ['理科极品', '数学奥林匹克', '四大生源地'],
    admissionRate: [{ year: '2021-2023', rate: 90, label: '理科班四大率' }, { year: '2024', rate: 85, label: '综合市重点率' }],
    teachingMethod: '张扬个性，培优拔尖。理科班数学竞赛常年全市第一，思维训练强度极高。',
    reputation: '理科实力可以抗衡顶尖民办；但存在理科班与地段平行班的水平差异。',
    advantages: '拥有特级名师与强悍奥数题库，是四大名校的重要跳板。',
    photos: [
      'https://images.unsplash.com/photo-1592289139851-d419dbf842de?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1629555610816-1f31f907bedc?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's7', region: '静安区', subRegion: '市西/核心区',
    name: '上海市市西初级中学', type: '公办', level: '初中',
    address: '上海市静安区余姚路329号',
    tuition: '义务教育免学费', tuitionDetail: '对口及电脑派位均执行公办免学费政策。',
    tags: ['好学力行', '理科培优', '0班直通'],
    admissionRate: [{ year: '2024', rate: 25, label: '市重点录取率' }, { year: '2025', rate: 32, label: '市重点录取率' }],
    teachingMethod: '践行“让每一个少年光彩熠熠”，设有S班及直通高中的“0班”。精准培优。',
    reputation: '静安第一梯队初中，学习氛围一流。对理科天赋好、有明确冲刺目标娃极度友好。',
    advantages: '与市西高中一脉相承，师资雄厚。',
    photos: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's8', region: '静安区', subRegion: '老静安核心区',
    name: '静安区教育学院附属学校', type: '公办', level: '九年一贯制',
    address: '上海市静安区海防路374号',
    tuition: '义务教育免学费', tuitionDetail: '免学费。被誉为性价比最极端的“公立神仙学校”。',
    tags: ['后茶馆教学', '绿色升学率', '神仙学校'],
    admissionRate: [{ year: '2023', rate: 46, label: '中考690分以上占比' }, { year: '2025', rate: 95, label: '普高率' }],
    teachingMethod: '全国知名的“后茶馆式”教学法。提倡小组讨论、学生自学讲授；首创课业减负模式。',
    reputation: '公办中的顶级圣地，真正的“轻负担、高质量”。家长极度推崇。',
    advantages: '升学通道稳定，学生自主学习能力强，近视率更远低于全市平均水平。',
    photos: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's9', region: '静安区', subRegion: '大宁板块',
    name: '上海市大宁国际小学', type: '公办', level: '小学',
    address: '上海市静安区北宝兴路900号',
    tuition: '境内免学费/境外约5万', tuitionDetail: '学区对口国内统招学生免学费；面向境外/港澳台学籍招生设有的国际部班级约 5万元/年。',
    tags: ['微笑教育', '数学领衔', '国际视野'],
    admissionRate: [{ year: '常态', rate: 70, label: '直升风华初中比例' }],
    teachingMethod: '以“微笑存折”从多维角度考察学生养成；英语及数学基础打得极牢。',
    reputation: '被誉为“披着公办外衣的民办”，教学质量和硬件堪称奢华。',
    advantages: '特级数学名师坐镇，校本课程丰富，是静安最热公办小学。',
    photos: [
      'https://images.unsplash.com/photo-1627556592933-ffe99c1c9cd0?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1510531704581-5b28709ec685?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's10', region: '静安区', subRegion: '大宁社区',
    name: '上海市大宁国际学校', type: '公办', level: '九年一贯制',
    address: '上海市静安区平型关路近彭江路',
    tuition: '义务教育免学费', tuitionDetail: '全公办体制，九年均免收学费，享有公立补贴下的超规格外语及素质资源。',
    tags: ['九年一贯', '五心教育', '超跑配置'],
    admissionRate: [{ year: '-', rate: 100, label: '义务一贯直升率' }],
    teachingMethod: '培养“爱心、信心、恒心、慧心、进取心”；提供基础、拓展与探索三层课程。',
    reputation: '大宁地区新校，因超高硬件与小班化体验被认为像极了高昂民办。',
    advantages: '师生比极高(约1:6)，对个体的关照度远超普通公办。',
    photos: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's11', region: '静安区', subRegion: '老闸北核心',
    name: '上海市闸北实验小学', type: '公办', level: '小学',
    address: '上海市静安区大宁路旧部（多校区）',
    tuition: '义务教育免学费', tuitionDetail: '全日制公办，免除学费。但其周边学区房溢价属性较重。',
    tags: ['公办头牌', '理科极强', '生态成长'],
    admissionRate: [{ year: '-', rate: 15, label: '四大名初特色班输送率' }],
    teachingMethod: '“个性化教育，生态状成长”。首创“无作业日”及“金牌免考”制度。',
    reputation: '老闸北雷打不动的公办第一。常年在四大杯赛中名列全市公办前茅。',
    advantages: '奥数发源地，是对接市北理科班的最核爆生源库。',
    photos: [
      'https://images.unsplash.com/photo-1588691880486-dae3e56a73ba?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's12', region: '静安区', subRegion: '市北高新辐射',
    name: '上海市风华初级中学', type: '公办', level: '初中',
    address: '上海市静安区永和东路460号(集团本部)',
    tuition: '义务教育免学费', tuitionDetail: '全日制公办免学费。',
    tags: ['优质均衡', '百门校本', '口碑佳'],
    admissionRate: [{ year: '2023', rate: 75, label: '市区重点达线率' }],
    teachingMethod: '“尊重差异，促进成长”。开设近百门涵盖文体、科技的校本课。',
    reputation: '老百姓心目中口碑极为扎实的学校。不过度鸡血，保证基础下限。',
    advantages: '集团化办学旗舰校，中高级师资庞大。',
    photos: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },
  {
    id: 's15', region: '静安区', subRegion: '彭浦新村',
    name: '上海市彭浦第三中学', type: '公办', level: '初中',
    address: '上海市静安区彭浦新村221号',
    tuition: '义务教育免学费', tuitionDetail: '由全额财政拨款的公办公费学校，不收学费。',
    tags: ['3H特色', '行为规范', '均衡公立'],
    admissionRate: [{ year: '-', rate: 65, label: '同区初中中位水平' }],
    teachingMethod: '极其注重底线教育、礼仪交往和心理健康成长。',
    reputation: '学区典型的托底学校，不鸡血，但校风极正。',
    advantages: '起到了很好的片区缓冲和素质培育基础工作。',
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1510531704581-5b28709ec685?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  },

  // --- 浦东新区 张江高科 ---
  {
    id: 's3', region: '浦东新区', subRegion: '张江高科',
    name: '上海市张江集团中学', type: '公办', level: '初中',
    address: '上海市浦东新区藿香路38号',
    tuition: '义务教育免学费', tuitionDetail: '原为民办，现已转制为公办。目前学初中阶段免除学费（往年民办时一学期约两万）。',
    tags: ['浦东霸主', '理科强校', '民转公'],
    admissionRate: [{ year: '2024', rate: 89, label: '市重点率' }, { year: '2025', rate: 92, label: '预估市重点率' }],
    teachingMethod: '深度数理化训练，题量充足，自律性与抗压性要求极高。',
    reputation: '被誉为“上海张码子弟”的内卷高地；拼搏氛围第一。',
    advantages: '生源圈层极其强悍，父母基本为硕博高知人才。',
    photos: [
      'https://images.unsplash.com/photo-1592289139851-d419dbf842de?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800&h=500'
    ]
  }
];
