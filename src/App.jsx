import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BrainCircuit, CloudOff, Rocket, Smartphone, User, Shield, Globe, Headphones, Activity, DollarSign, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Mermaid from 'mermaid';

const DigitalHumanSolution = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 市场增长数据
  const marketGrowthData = [
    { year: '2022', 市场规模: 3270 },
    { year: '2027', 市场规模: 50000 }
  ];

  // 成本对比数据
  const costComparisonData = [
    { name: '传统方案', 成本: 50 },
    { name: '妙知云', 成本: 15 }
  ];

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'development', 'applications', 'challenges', 'solution', 'features', 'conclusion'];
      
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

  useEffect(() => {
    Mermaid.contentLoaded();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* 导航条 */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600 flex items-center">
            <BrainCircuit className="mr-2" /> 妙知云数字人解决方案
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'overview', label: '概述' },
              { id: 'applications', label: '应用场景' },
              { id: 'solution', label: '解决方案' },
              { id: 'features', label: '核心特性' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100"
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
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 px-4 py-3">
                {[
                  { id: 'overview', label: '概述' },
                  { id: 'applications', label: '应用场景' },
                  { id: 'solution', label: '解决方案' },
                  { id: 'features', label: '核心特性' }
                ].map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    className={`${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} px-3 py-2 rounded-md text-left flex items-center`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 标题区 */}
      <header id="overview" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            妙知云实时互动数字人解决方案
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-8"
          >
            开启本地部署新体验
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-[180px]">
              <div className="text-sm">响应时间</div>
              <div className="text-2xl font-bold">&lt;200ms</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-[180px]">
              <div className="text-sm">部署成本</div>
              <div className="text-2xl font-bold">降低70%</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-[180px]">
              <div className="text-sm">支持离线</div>
              <div className="text-2xl font-bold">完全本地化</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-12">
        {/* 数字人崛起与发展 */}
        <section id="development" className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Rocket className="mr-2 text-blue-600" />
              实时互动数字人的崛起与发展
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  近年来，实时互动数字人的发展势头迅猛，市场规模呈现出爆发式增长。据相关数据显示，2022年全球人工智能市场规模已达到3270亿美元，预计到2027年将突破5万亿美元。
                </p>
                <p className="mb-4">
                  从发展历程来看，数字人技术经历了从静态形象到智能交互的演进。早期，数字人主要依赖CNN和GAN等技术，通过单张图片生成静态或简单动态的虚拟形象，但存在表情僵硬、口型不同步等问题。
                </p>
                <p>
                  随着NeRFs、3D Morphable Models等技术的引入，数字人开始支持半身/全身动作生成，并融合多模态模型，实现了音素-视素映射。进入大模型时代，Transformer、扩散模型等技术的应用，让数字人具备了从"形似"到"神似"的跨越能力。
                </p>
              </div>
              <div className="h-64 md:h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="市场规模" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 应用场景 */}
        <section id="applications" className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <Globe className="mr-2 text-blue-600" />
            实时互动数字人的多元应用场景
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 政务领域 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-semibold">政务领域</h3>
              </div>
              <p className="text-gray-600 mb-4">
                数字人可以1:1克隆政务工作人员的形象和声音，结合大模型和政务知识库，为市民提供准确、权威的信息咨询服务。
              </p>
              <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                效率提升60%
              </div>
            </motion.div>

            {/* 金融领域 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <DollarSign size={20} />
                </div>
                <h3 className="text-xl font-semibold">金融领域</h3>
              </div>
              <p className="text-gray-600 mb-4">
                金融机构引入数字人作为理财顾问，7×24小时解答用户关于投资、贷款等复杂问题，生成定制化理财方案。
              </p>
              <div className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                承担60%常规咨询
              </div>
            </motion.div>

            {/* 医疗领域 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                  <Headphones size={20} />
                </div>
                <h3 className="text-xl font-semibold">医疗领域</h3>
              </div>
              <p className="text-gray-600 mb-4">
                数字人导诊员与HIS系统无缝对接，精准分流患者。通过情绪识别技术，数字人可主动安抚焦虑患者。
              </p>
              <div className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                提升医患互动质量
              </div>
            </motion.div>
          </div>
        </section>

        {/* 传统挑战 */}
        <section id="challenges" className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="mr-2 text-blue-600" />
              传统数字人面临的挑战
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">技术难题待解</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span>唇形同步困难：基于像素的人脸重建损失无法有效约束音频-口型同步</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span>表情和动作不够自然：上下文感知的表情表达仍是一大挑战</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span>实时性与互动性不足：处理复杂问题时可能出现响应延迟</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">成本居高不下</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={costComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: '成本(千美元)', angle: -90 }} />
                      <Tooltip />
                      <Bar dataKey="成本" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  超写实数字人形象制作成本约100万元，制作周期90天
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 解决方案 */}
        <section id="solution" className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BrainCircuit className="mr-2 text-blue-600" />
              妙知云解决方案：破局之道
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">实现原理</h3>
                <p className="mb-4">
                  妙知云完全本地化部署的实时互动数字人解决方案采用客户端浏览器webgl同步口型和WebAssembly封装机器学习同步嘴型的办法。
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <pre className="mermaid">
                    {`graph LR
    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;
    A(输入语音):::process --> B(WebAssembly封装机器学习):::process
    B --> C(嘴型数据):::process
    D(数字人模型):::process --> E(客户端浏览器webgl):::process
    C --> E
    E --> F(同步嘴型后的数字人):::process`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">适用场景</h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <Smartphone className="text-blue-500 mr-2 mt-0.5" size={18} />
                    <span>h5在线互动虚拟人</span>
                  </li>
                  <li className="flex items-start">
                    <User className="text-blue-500 mr-2 mt-0.5" size={18} />
                    <span>一体机智慧屏作为企业内部数字员工</span>
                  </li>
                  <li className="flex items-start">
                    <Headphones className="text-blue-500 mr-2 mt-0.5" size={18} />
                    <span>展馆讲解/互动数字人</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="text-blue-500 mr-2 mt-0.5" size={18} />
                    <span>实体店门口迎宾互动数字人</span>
                  </li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="mermaid">
                    {`graph LR
    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;
    A(开始):::process --> B(选择适用场景):::process
    B --> C{场景类型}:::process
    C -->|h5在线互动虚拟人| D(网页部署):::process
    C -->|企业内部数字员工| E(一体机智慧屏部署):::process
    C -->|展馆讲解/互动数字人| F(展馆部署):::process
    C -->|实体店门口迎宾互动数字人| G(实体店门口部署):::process
    D --> H(运行数字人):::process
    E --> H
    F --> H
    G --> H
    H --> I(结束):::process`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 核心特性 */}
        <section id="features" className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <Rocket className="mr-2 text-blue-600" />
            核心特性阐述
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 低延迟 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-semibold">低延迟</h3>
              </div>
              <p className="text-gray-600 mb-4">
                通过客户端浏览器webgl同步口型和WebAssembly封装机器学习同步嘴型的技术实现了低延迟，响应时间&lt;200ms。
              </p>
              <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                语音和嘴型完美同步
              </div>
            </motion.div>

            {/* 低成本部署 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-semibold">低成本部署</h3>
              </div>
              <p className="text-gray-600 mb-4">
                对硬件要求低，无需昂贵的服务器和复杂的网络环境，与传统方案相比降低成本70%。
              </p>
              <div className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                普通硬件即可运行
              </div>
            </motion.div>

            {/* 可完全离线本地运行 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                  <CloudOff size={24} />
                </div>
                <h3 className="text-xl font-semibold">完全离线本地运行</h3>
              </div>
              <p className="text-gray-600 mb-4">
                支持断网离线运行，将必要的数据和模型存储在本地设备中，网络不稳定时仍可正常工作。
              </p>
              <div className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full inline-flex items-center">
                <Activity size={14} className="mr-1" />
                无网络依赖
              </div>
            </motion.div>
          </div>
        </section>

        {/* 结论 */}
        <section id="conclusion" className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6">结论</h2>
            <p className="mb-4">
              实时互动数字人作为一项具有巨大潜力的新兴技术，正深刻地改变着我们的生活和工作方式。尽管传统数字人在发展过程中面临着诸多挑战，但妙知云完全本地化部署的实时互动数字人解决方案，凭借其低延迟、低成本部署、可完全离线本地运行的特性，为行业的发展提供了新的思路和解决方案。
            </p>
            <p>
              相信在未来，随着技术的不断进步和创新，实时互动数字人将在更多领域发挥重要作用，为我们带来更加便捷、高效、智能的体验。选择妙知云解决方案，就是选择开启实时互动数字人的全新篇章！
            </p>
          </motion.div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">created by <a href="https://space.coze.cn" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">coze space</a></p>
          <p>页面内容均由 AI 生成，仅供参考</p>
        </div>
      </footer>
    </div>
  );
};

export default DigitalHumanSolution;