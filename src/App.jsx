import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import {
  Mic,
  Brain,
  Volume2,
  User,
  Monitor,
  Box,
  Settings,
  Download,
  TestTube2,
  Wrench,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Mermaid from 'mermaid';

const DigitalHumanSolution = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 行业数据
  const marketData = [
    { year: '2023', 核心市场: 205.2, 带动产业: 3334.7 },
    { year: '2024', 核心市场: 280, 带动产业: 4500 },
    { year: '2025', 核心市场: 400, 带动产业: 6000 }
  ];

  const techEvolutionData = [
    { stage: '2017-2020', 技术: 'CNN/GAN', 特点: '静态/简单动态' },
    { stage: '2021-2023', 技术: 'NeRFs/3DMM', 特点: '半身/全身动作' },
    { stage: '2024-至今', 技术: 'Transformer/DiT', 特点: '实时交互/情感驱动' }
  ];

  const applicationData = [
    { name: '电商直播', value: 35 },
    { name: '医疗健康', value: 20 },
    { name: '教育咨询', value: 15 },
    { name: '娱乐文化', value: 15 },
    { name: '其他', value: 15 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'market', 'tech', 'application', 'solution', 'tech-principle'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 平滑滚动
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // 响应式设计
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.getElementById('main-nav');
      if (isMobileMenuOpen && navElement && !navElement.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    Mermaid.contentLoaded();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#F5FBFF] to-[#E6F4FF] text-gray-800 overflow-x-hidden">
      {/* 导航条 */}
      <nav
        id="main-nav"
        className="sticky top-0 z-50 p-4 bg-white/80 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            妙知云数字人解决方案
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'overview', label: '概述' },
              { id: 'market', label: '市场现状' },
              { id: 'tech', label: '技术发展' },
              { id: 'application', label: '应用场景' },
              { id: 'solution', label: '解决方案' },
              { id: 'tech-principle', label: '技术原理' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                } hover:text-blue-600 transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                {[
                  { id: 'overview', label: '概述' },
                  { id: 'market', label: '市场现状' },
                  { id: 'tech', label: '技术发展' },
                  { id: 'application', label: '应用场景' },
                  { id: 'solution', label: '解决方案' },
                  { id: 'tech-principle', label: '技术原理' }
                ].map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    className={`${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600'
                    } text-left py-2 px-4 rounded-md transition-colors`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 头部横幅 */}
      <header className="container mx-auto py-16 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            超低延迟、成本暴降，妙知云数字人离线运行一骑绝尘！
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            完全本地化部署的实时互动数字人解决方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Mic className="w-6 h-6" />, label: '低延迟', value: '<200ms' },
              { icon: <Box className="w-6 h-6" />, label: '低成本', value: '￥1.2万' },
              { icon: <Settings className="w-6 h-6" />, label: '离线运行', value: '100%' },
              { icon: <User className="w-6 h-6" />, label: '客户数', value: '200+' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-xl shadow-md p-4 w-40"
              >
                <div className="flex items-center justify-center mb-2 text-blue-600">
                  {item.icon}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-2xl font-bold text-blue-800">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </header>

      {/* 概述部分 */}
      <section id="overview" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <User size={24} />
            </div>
            实时互动数字人概述
          </h2>
          <p className="mb-6 text-gray-700">
            实时互动数字人正逐渐走进我们的生活，成为各个行业的新宠。在电商直播中，数字主播热情洋溢地介绍商品；在医疗健康领域，数字人为患者提供专业咨询；在教育行业，虚拟教师提供个性化辅导...应用场景五花八门，市场前景一片光明。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">技术演进</h3>
              <ul className="space-y-3">
                {techEvolutionData.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{item.stage}</div>
                      <div className="text-sm text-gray-600">{item.技术}: {item.特点}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">应用分布</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={applicationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {applicationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 市场现状部分 */}
      <section id="market" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <Monitor size={24} />
            </div>
            实时互动数字人市场现状
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              中国互联网协会发布的《中国数字人发展报告（2024）》显示，预计2025年中国数字人核心市场规模超过400亿元，带动产业市场规模超过6000亿元。2023年中国虚拟人带动产业市场规模和核心市场规模分别达到了3334.7亿元和205.2亿元，呈现出快速增长的态势。
            </p>
            <p className="text-gray-700">
              从企业数量来看，截至2024年，中国数字人相关企业数量达114.4万家，仅2024年前五个月，新增注册企业就达17.4万余家。
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="核心市场" fill="#3b82f6" name="核心市场规模(亿元)" />
                <Bar dataKey="带动产业" fill="#10b981" name="带动产业规模(亿元)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      {/* 技术发展部分 */}
      <section id="tech" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <Wrench size={24} />
            </div>
            技术发展现状
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">核心技术</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "语音输入与识别(ASR)",
                    content: "将语音输入转化为自然语言文本，可使用云端API或本地ASR模型如PaddleSpeech、FunASR等。"
                  },
                  {
                    title: "AI交互处理(LLM)",
                    content: "数字人的'大脑'，理解自然语言输入并生成响应，如MiniCPM 2.6B、Llama3.1等模型。"
                  },
                  {
                    title: "语音合成(TTS)",
                    content: "将文本转化为音频流，如GPT-SoVits、CosyVoice等开源模型。"
                  },
                  {
                    title: "数字人驱动",
                    content: "用音频流驱动数字人动作表情，如Unreal引擎、Nerf、SadTalker、MuseTalk等。"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">技术演进</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={techEvolutionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="stage" />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="特点" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 应用场景部分 */}
      <section id="application" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <TestTube2 size={24} />
            </div>
            应用场景现状
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "电商直播",
                icon: <Mic size={24} className="text-blue-600" />,
                content: "数字人直播带货发展迅猛，京东618期间'采销东哥'直播间观看量超2000万，成交额超5000万。"
              },
              {
                title: "医疗健康",
                icon: <TestTube2 size={24} className="text-blue-600" />,
                content: "展示人体解剖结构，模拟病人症状体征，提供健康咨询和远程医疗服务。"
              },
              {
                title: "教育咨询",
                icon: <Brain size={24} className="text-blue-600" />,
                content: "虚拟教师提供定制化教学，心理咨询师提供情感支持，金融行业提供投资建议。"
              },
              {
                title: "娱乐文化",
                icon: <Volume2 size={24} className="text-blue-600" />,
                content: "虚拟偶像与粉丝互动，参与商业代言，数字模特展示时尚趋势。"
              },
              {
                title: "客服与助手",
                icon: <User size={24} className="text-blue-600" />,
                content: "24小时不间断服务，集成到智能设备中，帮助管理日程和控制设备。"
              },
              {
                title: "广告与营销",
                icon: <Monitor size={24} className="text-blue-600" />,
                content: "数字人作为品牌代言人提升形象，参与广告大片和内容营销活动。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 解决方案部分 */}
      <section id="solution" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <Settings size={24} />
            </div>
            妙知云解决方案特性优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "低延迟",
                icon: <Mic size={24} className="text-blue-600" />,
                content: "交互延迟<200ms，媲美真人对话体验",
                advantage: "减少网络传输环节，采用高效算法和硬件",
                applications: ["智能客服", "在线教育"]
              },
              {
                title: "低成本部署",
                icon: <Box size={24} className="text-blue-600" />,
                content: "传统方案￥5万 vs 妙知云￥1.2万",
                advantage: "硬件要求低，开源技术框架，简单易部署",
                applications: ["中小企业", "线下门店"]
              },
              {
                title: "完全离线运行",
                icon: <Download size={24} className="text-blue-600" />,
                content: "100%离线运行，无网络依赖",
                advantage: "保障数据安全，服务连续性",
                applications: ["特殊行业", "智能硬件"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-blue-50 rounded-lg p-6 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-medium text-blue-700">{item.content}</div>
                  <div className="text-sm text-gray-600 mt-2">{item.advantage}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">应用场景:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 技术原理部分 */}
      <section id="tech-principle" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <Wrench size={24} />
            </div>
            技术原理与实现流程
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">技术原理</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="mermaid">
                {`
                graph LR
                    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;
                    A(语音输入与识别):::process -->|转化为文本| B(AI交互处理):::process
                    B -->|生成响应文本| C(语音合成):::process
                    C -->|生成音频流| D(数字人驱动):::process
                    D -->|驱动数字人| E(数字人呈现):::process
                    A -.->|本地音频采集| A1(PyAudio库)
                    A -.->|在线云服务| A2(讯飞、阿里云等)
                    A -.->|本地ASR模型| A3(百度PaddleSpeech等)
                    B -.->|大语言模型| B1(MiniCPM 2.6B等)
                    B -.->|RAG技术| B2(补充企业私有知识)
                    C -.->|开源TTS模型| C1(GPT - SoVits等)
                    C -.->|在线TTS接口| C2(Azure等)
                    D -.->|不同类型数字人| D1(3D:Unreal引擎等)
                    D -.->|不同类型数字人| D2(2D:Musetalk等)
                    E -.->|呈现类型| E1(3D:Metahuman建模等)
                    E -.->|呈现类型| E2(2D:照片驱动生成)
                `}
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">3D数字人构建流程</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="mermaid">
                {`
                graph LR
                    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;
                    A(头部模型创建):::process --> B(形象建模):::process
                    B --> C(动画与行为逻辑设计):::process
                    C --> D(打包运行):::process
                    A -.->|三维建模工具| A1(专业三维建模软件)
                    B -.->|MetaHuman Creator| B1(导入头部模型或选内置形象)
                    C -.->|Unreal引擎| C1(可视化编辑环境与脚本语言)
                `}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">本地部署流程</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="mermaid">
                {`
                graph LR
                    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;
                    A(环境准备):::process --> B(模型部署):::process
                    B --> C(系统搭建):::process
                    C --> D(测试与优化):::process
                    A -.->|硬件| A1(显卡、CPU等)
                    A -.->|软件| A2(操作系统、深度学习框架等)
                    B -.->|下载模型| B1(大语言模型、语音识别模型等)
                    B -.->|配置模型| B2(设置参数、API密钥等)
                    C -.->|安装依赖| C1(pip、conda安装依赖库)
                    C -.->|运行服务| C2(启动服务器、实时通信服务等)
                    D -.->|功能测试| D1(检查各项功能)
                    D -.->|性能优化| D2(调整参数、更换模型等)
                `}
              </pre>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p className="mb-2">created by <a href="https://space.coze.cn" className="text-blue-600 hover:underline">coze space</a></p>
          <p className="text-sm">页面内容均由 AI 生成，仅供参考</p>
        </div>
      </footer>
    </div>
  );
};

export default DigitalHumanSolution;