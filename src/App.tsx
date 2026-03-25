import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  MapPin,
  Tag,
  Link as LinkIcon,
  CheckCircle2,
  Building2,
  User,
  FileText,
  Activity,
} from "lucide-react";

const patentData = {
  title: "一种含氮杂环化合物的晶型、其制备方法及其应用",
  applicationNumber: "CN202310123456.7",
  status: "实质审查",
  applicationDate: "2023-02-15",
  publicationDate: "2023-08-22",
  ipc: [
    { code: "C07D 401/14", name: "含有三个或更多个杂环的杂环化合物" },
    { code: "A61K 31/4439", name: "含有吡啶环的药物制剂" },
    { code: "A61P 35/00", name: "抗肿瘤药" },
  ],
  agency: "北京某某知识产权代理有限公司",
  applicantAddress: "北京市海淀区清华园1号",
  abstract:
    "本发明公开了一种含氮杂环化合物的晶型、其制备方法及其应用。该晶型具有良好的物理化学稳定性，溶解度高，生物利用度好，适用于制备治疗肿瘤等疾病的药物。本发明还提供了该晶型的制备方法，工艺简单，重现性好，适合工业化大生产。",
  aiSummary: {
    problem:
      "现有抗肿瘤药物存在水溶性差、生物利用度低、物理化学性质不稳定等问题，导致制剂困难和临床疗效受限。",
    effect:
      "显著提高了化合物的溶解度和溶出速率，口服生物利用度提升约3倍；在高温、高湿和光照条件下保持极高的晶型稳定性。",
    application:
      "可直接用于开发新型靶向抗肿瘤口服固体制剂（如片剂、胶囊），特别适用于非小细胞肺癌和乳腺癌的靶向治疗药物开发。",
  },
  timeline: [
    { date: "2023-09-10", event: "进入实质审查阶段" },
    { date: "2023-08-22", event: "初步审查合格并公开" },
    { date: "2023-02-15", event: "专利申请" },
  ],
  inventors: [
    {
      name: "林舒雅",
      org: "清华大学",
      role: "第一发明人",
      patents: 156,
      expertise: ["半导体器件", "GaN研究", "射频集成电路"],
      match: 98,
    },
    {
      name: "王利民",
      org: "清华大学",
      role: "共同发明人",
      patents: 89,
      expertise: ["微电子", "芯片设计"],
      match: 85,
    },
    {
      name: "欧阳慕容",
      org: "北京某某科技有限公司研发中心",
      role: "共同发明人",
      patents: 42,
      expertise: ["晶型药物开发", "药物分析", "制剂工艺优化"],
      match: 92,
    },
  ],
  applicants: [
    {
      name: "清华大学",
      type: "高校",
      patents: 12500,
      expertise: ["信息技术", "材料科学", "生物医药"],
    },
    {
      name: "北京某某科技有限公司",
      type: "企业",
      patents: 340,
      expertise: ["医药研发", "创新药"],
    },
    {
      name: "上海某某医药科技发展集团股份有限公司",
      type: "企业",
      patents: 120,
      expertise: ["靶向药物", "临床研究", "医药中间体合成"],
    },
  ],
  claims:
    "1. 一种式(I)所示化合物的晶型A，其特征在于，使用Cu-Kα辐射，其X射线粉末衍射图谱在2θ角度为...\n\n2. 根据权利要求1所述的晶型A，其特征在于...\n\n3. 一种制备权利要求1或2所述晶型A的方法...",
  description:
    "技术领域\n本发明涉及医药化学领域，具体涉及一种含氮杂环化合物的晶型、其制备方法及其在制备抗肿瘤药物中的应用。\n\n背景技术\n现有技术中，该类化合物虽然具有一定的体外活性，但其水溶性极差，导致动物体内的生物利用度极低，无法满足临床成药的要求。因此，寻找具有优良物理化学性质的晶型是该领域亟待解决的问题。\n\n发明内容\n为了解决上述技术问题，本发明提供了一种式(I)所示化合物的晶型A...",
  citedPatents: [
    { id: "CN109876543A", title: "一种新型激酶抑制剂及其应用" },
    {
      id: "US20210123456A1",
      title: "Nitrogen-containing heterocyclic compounds",
    },
    {
      id: "CN110123456A",
      title: "取代的吡啶并嘧啶类化合物及其作为抗肿瘤药物的应用",
    },
    { id: "EP3456789A1", title: "Novel kinase inhibitors for cancer therapy" },
    {
      id: "WO2022098765A1",
      title: "Heterocyclic compounds and their pharmaceutical compositions",
    },
  ],
  similarPatents: [
    {
      id: "CN112345678A",
      title: "取代的嘧啶衍生物及其作为激酶抑制剂的用途",
      match: "92%",
    },
    { id: "CN113456789A", title: "一种吡啶类化合物的盐及其晶型", match: "88%" },
    {
      id: "CN114567890A",
      title: "含氮杂环类化合物的制备方法优化",
      match: "85%",
    },
    {
      id: "CN115678901A",
      title: "靶向EGFR突变的抗肿瘤药物组合物",
      match: "81%",
    },
    {
      id: "CN116789012A",
      title: "一种高溶解度的杂环化合物晶型B",
      match: "79%",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Navbar = () => (
  <header className="sticky top-0 z-50 glass border-b border-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            转果果
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
          >
            小果AI
          </a>
          <a
            href="#"
            className="text-slate-900 font-medium text-sm flex items-center gap-1"
          >
            科创库 <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
          >
            揭榜挂帅
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors flex items-center gap-1"
          >
            活动报名 <ChevronDown className="w-4 h-4" />
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="向小果AI提问或搜索..."
            className="pl-9 pr-12 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all w-64 outline-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-400 shadow-sm">
            AI
          </div>
        </div>
        <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          登录
        </button>
        <button className="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-sm shadow-blue-200">
          注册
        </button>
      </div>
    </div>
  </header>
);

const HeaderSection = () => (
  <motion.header variants={itemVariants}>
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
        {patentData.status}
      </span>
      <span className="text-sm font-medium text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md">
        {patentData.applicationNumber}
      </span>
    </div>

    <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
      {patentData.title}
    </h1>

    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
        <User className="w-4 h-4 text-blue-500" />
        <span className="font-medium">
          {patentData.inventors.map((i) => i.name).join(", ")}
        </span>
      </div>
      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
        <Building2 className="w-4 h-4 text-indigo-500" />
        <span className="font-medium">
          {patentData.applicants.map((a) => a.name).join(", ")}
        </span>
      </div>
    </div>
  </motion.header>
);

const AIAssessmentSection = () => {
  const cards = [
    {
      title: "解决问题",
      icon: Target,
      content: patentData.aiSummary.problem,
      color: "from-rose-500 to-orange-400",
      bg: "bg-rose-50/50",
      border: "border-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "达成效果",
      icon: Lightbulb,
      content: patentData.aiSummary.effect,
      color: "from-amber-400 to-yellow-500",
      bg: "bg-amber-50/50",
      border: "border-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "主要用途",
      icon: Rocket,
      content: patentData.aiSummary.application,
      color: "from-emerald-400 to-teal-500",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <motion.section
      variants={itemVariants}
      className="mt-8 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              科技成果转化评估
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              基于大模型深度解析专利商业价值
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`rounded-xl p-5 border ${card.border} ${card.bg} relative group transition-all duration-300`}
          >
            <div
              className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl`}
            />
            <div className="flex items-center gap-2 mb-3">
              <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              <h3 className="font-bold text-slate-900">{card.title}</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const AbstractSection = () => (
  <motion.section
    variants={itemVariants}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
  >
    <div className="flex items-center gap-2 mb-4">
      <FileText className="w-5 h-5 text-blue-600" />
      <h3 className="text-lg font-bold text-slate-900">摘要</h3>
    </div>
    <p className="text-slate-700 leading-relaxed text-sm">
      {patentData.abstract}
    </p>
  </motion.section>
);

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("claims");

  return (
    <motion.section
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <div className="flex border-b border-slate-100">
        <button
          className={`px-6 py-4 font-medium text-sm transition-colors relative ${activeTab === "claims" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
          onClick={() => setActiveTab("claims")}
        >
          权利要求
          {activeTab === "claims" && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
            />
          )}
        </button>
        <button
          className={`px-6 py-4 font-medium text-sm transition-colors relative ${activeTab === "description" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
          onClick={() => setActiveTab("description")}
        >
          说明书
          {activeTab === "description" && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
            />
          )}
        </button>
      </div>
      <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="whitespace-pre-line text-slate-600 text-sm leading-relaxed"
          >
            {activeTab === "claims"
              ? patentData.claims
              : patentData.description}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

const TimelineSection = () => (
  <motion.section
    variants={itemVariants}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
  >
    <div className="flex items-center gap-2 mb-6">
      <Activity className="w-5 h-5 text-blue-600" />
      <h3 className="text-lg font-bold text-slate-900">专利时间轴</h3>
    </div>
    <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
      {patentData.timeline.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: idx * 0.1 }}
          className="relative pl-6"
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-sm" />
          <div className="text-sm font-bold text-blue-600 mb-1">
            {item.date}
          </div>
          <div className="text-slate-700 font-medium text-sm">{item.event}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const MetaInfoSection = () => (
  <motion.section
    variants={itemVariants}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
  >
    <h3 className="text-lg font-bold text-slate-900 mb-4">基本信息</h3>
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500 flex items-center gap-1">
          <Tag className="w-3 h-3" /> IPC分类
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {patentData.ipc.map((item) => (
            <span
              key={item.code}
              className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md font-mono flex items-center gap-1.5"
            >
              <span className="font-bold">{item.code}</span>
              <span className="text-slate-500">{item.name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-slate-100" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> 申请日
          </span>
          <span className="text-sm font-medium text-slate-900">
            {patentData.applicationDate}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> 公开日
          </span>
          <span className="text-sm font-medium text-slate-900">
            {patentData.publicationDate}
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-slate-100" />
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500 flex items-center gap-1">
          <Building2 className="w-3 h-3" /> 代理机构
        </span>
        <span className="text-sm font-medium text-slate-900">
          {patentData.agency}
        </span>
      </div>
      <div className="h-px w-full bg-slate-100" />
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500 flex items-center gap-1">
          <MapPin className="w-3 h-3" /> 申请人地址
        </span>
        <span className="text-sm font-medium text-slate-900">
          {patentData.applicantAddress}
        </span>
      </div>
    </div>
  </motion.section>
);

const StakeholdersSection = () => {
  const [activeTab, setActiveTab] = useState("inventors");

  return (
    <motion.section
      variants={itemVariants}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-6 border-b border-slate-100 mb-6">
        <button
          onClick={() => setActiveTab("inventors")}
          className={`pb-3 text-sm font-bold transition-colors relative ${
            activeTab === "inventors"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          发明人
          {activeTab === "inventors" && (
            <motion.div
              layoutId="stakeholder-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("applicants")}
          className={`pb-3 text-sm font-bold transition-colors relative ${
            activeTab === "applicants"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          申请人
          {activeTab === "applicants" && (
            <motion.div
              layoutId="stakeholder-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full"
            />
          )}
        </button>
      </div>

      {activeTab === "inventors" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {patentData.inventors.map((inv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shrink-0">
                  {inv.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">
                    {inv.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {inv.org}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {inv.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "applicants" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {patentData.applicants.map((app, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">
                    {app.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {app.type} · {app.patents} 项专利
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {app.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

const PatentsTabSection = () => {
  const [activeTab, setActiveTab] = useState("cited");

  return (
    <motion.section
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <div className="flex border-b border-slate-100">
        <button
          className={`px-6 py-4 font-medium text-sm transition-colors relative ${
            activeTab === "cited"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
          onClick={() => setActiveTab("cited")}
        >
          引用专利
          {activeTab === "cited" && (
            <motion.div
              layoutId="patents-tab-indicator"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
            />
          )}
        </button>
        <button
          className={`px-6 py-4 font-medium text-sm transition-colors relative ${
            activeTab === "similar"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
          onClick={() => setActiveTab("similar")}
        >
          相似专利
          {activeTab === "similar" && (
            <motion.div
              layoutId="patents-tab-indicator"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
            />
          )}
        </button>
      </div>
      <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {activeTab === "cited" ? (
            <motion.div
              key="cited"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {patentData.citedPatents.map((pat, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                >
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {pat.title}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {pat.id}
                  </div>
                </a>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="similar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {patentData.similarPatents.map((pat, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                >
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {pat.title}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {pat.id}
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F7F9] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 pb-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeaderSection />
          <AIAssessmentSection />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              <StakeholdersSection />
              <AbstractSection />
              <TabsSection />
              <PatentsTabSection />
            </div>
            <div className="space-y-8">
              <MetaInfoSection />
              <TimelineSection />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
