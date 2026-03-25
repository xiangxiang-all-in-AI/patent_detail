<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import {
  Search, ChevronDown, ChevronRight, Sparkles, Target,
  Lightbulb, Rocket, Clock, MapPin, Tag, Link as LinkIcon,
  CheckCircle2, Building2, User, FileText, Activity, Copy, Check
} from 'lucide-vue-next'

const patentData = {
  title: '一种含氮杂环化合物的晶型、其制备方法及其应用',
  applicationNumber: 'CN202310123456.7',
  status: '实质审查',
  applicationDate: '2023-02-15',
  publicationDate: '2023-08-22',
  ipc: [
    { code: 'C07D 401/14', name: '含有三个或更多个杂环的杂环化合物' },
    { code: 'A61K 31/4439', name: '含有吡啶环的药物制剂' },
    { code: 'A61P 35/00', name: '抗肿瘤药' },
  ],
  agency: '北京某某知识产权代理有限公司',
  applicantAddress: '北京市海淀区清华园1号',
  abstract: '本发明公开了一种含氮杂环化合物的晶型、其制备方法及其应用。该晶型具有良好的物理化学稳定性，溶解度高，生物利用度好，适用于制备治疗肿瘤等疾病的药物。本发明还提供了该晶型的制备方法，工艺简单，重现性好，适合工业化大生产。',
  aiSummary: {
    problem: '现有抗肿瘤药物存在水溶性差、生物利用度低、物理化学性质不稳定等问题，导致制剂困难和临床疗效受限。',
    effect: '显著提高了化合物的溶解度和溶出速率，口服生物利用度提升约3倍；在高温、高湿和光照条件下保持极高的晶型稳定性。',
    application: '可直接用于开发新型靶向抗肿瘤口服固体制剂（如片剂、胶囊），特别适用于非小细胞肺癌和乳腺癌的靶向治疗药物开发。',
  },
  timeline: [
    { date: '2023-09-10', event: '进入实质审查阶段' },
    { date: '2023-08-22', event: '初步审查合格并公开' },
    { date: '2023-02-15', event: '专利申请' },
  ],
  inventors: [
    { name: '林舒雅', org: '清华大学', role: '第一发明人', patents: 156, expertise: ['半导体器件', 'GaN研究', '射频集成电路'], match: 98 },
    { name: '王利民', org: '清华大学', role: '共同发明人', patents: 89, expertise: ['微电子', '芯片设计'], match: 85 },
    { name: '欧阳慕容', org: '北京某某科技有限公司研发中心', role: '共同发明人', patents: 42, expertise: ['晶型药物开发', '药物分析', '制剂工艺优化'], match: 92 },
  ],
  applicants: [
    { name: '清华大学', type: '高校', patents: 12500, expertise: ['信息技术', '材料科学', '生物医药'] },
    { name: '北京某某科技有限公司', type: '企业', patents: 340, expertise: ['医药研发', '创新药'] },
    { name: '上海某某医药科技发展集团股份有限公司', type: '企业', patents: 120, expertise: ['靶向药物', '临床研究', '医药中间体合成'] },
  ],
  claims: '1. 一种式(I)所示化合物的晶型A，其特征在于，使用Cu-Kα辐射，其X射线粉末衍射图谱在2θ角度为...\n\n2. 根据权利要求1所述的晶型A，其特征在于...\n\n3. 一种制备权利要求1或2所述晶型A的方法...',
  description: '技术领域\n本发明涉及医药化学领域，具体涉及一种含氮杂环化合物的晶型、其制备方法及其在制备抗肿瘤药物中的应用。\n\n背景技术\n现有技术中，该类化合物虽然具有一定的体外活性，但其水溶性极差，导致动物体内的生物利用度极低，无法满足临床成药的要求。因此，寻找具有优良物理化学性质的晶型是该领域亟待解决的问题。\n\n发明内容\n为了解决上述技术问题，本发明提供了一种式(I)所示化合物的晶型A...',
  citedPatents: [
    { id: 'CN109876543A', title: '一种新型激酶抑制剂及其应用' },
    { id: 'US20210123456A1', title: 'Nitrogen-containing heterocyclic compounds' },
    { id: 'CN110123456A', title: '取代的吡啶并嘧啶类化合物及其作为抗肿瘤药物的应用' },
    { id: 'EP3456789A1', title: 'Novel kinase inhibitors for cancer therapy' },
    { id: 'WO2022098765A1', title: 'Heterocyclic compounds and their pharmaceutical compositions' },
  ],
  similarPatents: [
    { id: 'CN112345678A', title: '取代的嘧啶衍生物及其作为激酶抑制剂的用途', match: 92 },
    { id: 'CN113456789A', title: '一种吡啶类化合物的盐及其晶型', match: 88 },
    { id: 'CN114567890A', title: '含氮杂环类化合物的制备方法优化', match: 85 },
    { id: 'CN115678901A', title: '靶向EGFR突变的抗肿瘤药物组合物', match: 81 },
    { id: 'CN116789012A', title: '一种高溶解度的杂环化合物晶型B', match: 79 },
  ],
}

// State
const contentTab = ref('claims')
const stakeholderTab = ref('inventors')
const patentsTab = ref('cited')
const copied = ref(false)
const scrollProgress = ref(0)
const pageLoaded = ref(false)

// Scroll progress
function onScroll() {
  const h = document.documentElement
  scrollProgress.value = h.scrollTop / (h.scrollHeight - h.clientHeight)
}

// Copy patent number
async function copyPatentNumber() {
  await navigator.clipboard.writeText(patentData.applicationNumber)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}

// Intersection Observer for scroll-triggered animations
const observedEls = new Set<Element>()
let observer: IntersectionObserver | null = null

function setupObserver() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view')
        observer?.unobserve(e.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  setupObserver()
  nextTick(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer?.observe(el)
      observedEls.add(el)
    })
  })
  setTimeout(() => { pageLoaded.value = true }, 50)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})

const aiCards = [
  { title: '解决问题', icon: Target, content: patentData.aiSummary.problem, gradient: 'from-rose-500 to-orange-400', bg: 'bg-rose-50/50', border: 'border-rose-100', iconColor: 'text-rose-600' },
  { title: '达成效果', icon: Lightbulb, content: patentData.aiSummary.effect, gradient: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50/50', border: 'border-amber-100', iconColor: 'text-amber-600' },
  { title: '主要用途', icon: Rocket, content: patentData.aiSummary.application, gradient: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50/50', border: 'border-emerald-100', iconColor: 'text-emerald-600' },
]
</script>

<template>
  <div class="min-h-screen bg-[#F4F7F9] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 pb-20 relative overflow-x-hidden">

    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 w-full h-0.5 z-[60]">
      <div class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>
    </div>

    <!-- Ambient background orbs -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="ambient-orb absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-200"></div>
      <div class="ambient-orb-2 absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-200"></div>
    </div>

    <!-- Navbar -->
    <header class="sticky top-0 z-50 glass border-b border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-2 cursor-pointer group">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center logo-icon transition-transform group-hover:shadow-lg group-hover:shadow-blue-200">
              <div class="w-4 h-4 bg-white rounded-sm" />
            </div>
            <span class="font-bold text-xl tracking-tight text-slate-900">转果果</span>
          </div>
          <nav class="hidden md:flex items-center gap-6">
            <a href="#" class="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">小果AI</a>
            <a href="#" class="text-slate-900 font-medium text-sm flex items-center gap-1">
              科创库 <ChevronDown class="w-4 h-4" />
            </a>
            <a href="#" class="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">揭榜挂帅</a>
            <a href="#" class="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors flex items-center gap-1">
              活动报名 <ChevronDown class="w-4 h-4" />
            </a>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <div class="relative hidden lg:block search-glow rounded-full transition-all duration-300">
            <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input type="text" placeholder="向小果AI提问或搜索..." class="pl-9 pr-12 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all w-64 focus:w-80 outline-none" />
            <div class="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-400 shadow-sm">AI</div>
          </div>
          <button class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">登录</button>
          <button class="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300">注册</button>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

      <!-- Header -->
      <header class="animate-on-scroll fade-up" :class="{ 'in-view': pageLoaded }">
        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 status-pulse">
            {{ patentData.status }}
          </span>
          <button @click="copyPatentNumber" class="text-sm font-medium text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1.5 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer group" :title="copied ? '已复制' : '点击复制申请号'">
            {{ patentData.applicationNumber }}
            <Transition name="icon-swap" mode="out-in">
              <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-500" />
              <Copy v-else class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </Transition>
          </button>
        </div>
        <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          {{ patentData.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-6 text-sm text-slate-600">
          <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
            <User class="w-4 h-4 text-blue-500" />
            <span class="font-medium">{{ patentData.inventors.map(i => i.name).join(', ') }}</span>
          </div>
          <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
            <Building2 class="w-4 h-4 text-indigo-500" />
            <span class="font-medium">{{ patentData.applicants.map(a => a.name).join(', ') }}</span>
          </div>
        </div>
      </header>

      <!-- AI Assessment -->
      <section class="mt-8 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100 relative overflow-hidden animate-on-scroll fade-up card-gradient-border sparkle-hover" :class="{ 'in-view': pageLoaded }" style="animation-delay: 0.1s">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <div class="ai-shimmer absolute inset-0 pointer-events-none"></div>
        <div class="relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">
                <Sparkles class="w-5 h-5 text-blue-600 sparkle-icon" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-slate-900">科技成果转化评估</h2>
                <p class="text-sm text-slate-500 mt-0.5">基于大模型深度解析专利商业价值</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(card, idx) in aiCards" :key="idx"
              class="rounded-xl p-5 border relative group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
              :class="[card.bg, card.border]">
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" :class="card.gradient"></div>
              <div class="flex items-center gap-2 mb-3">
                <component :is="card.icon" class="w-5 h-5 transition-transform group-hover:scale-110" :class="card.iconColor" />
                <h3 class="font-bold text-slate-900">{{ card.title }}</h3>
              </div>
              <p class="text-sm text-slate-700 leading-relaxed">{{ card.content }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Two column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <!-- Left column -->
        <div class="lg:col-span-2 space-y-8">

          <!-- Stakeholders -->
          <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-on-scroll fade-up card-gradient-border">
            <div class="flex items-center gap-6 border-b border-slate-100 mb-6">
              <button @click="stakeholderTab = 'inventors'"
                class="pb-3 text-sm font-bold transition-colors relative"
                :class="stakeholderTab === 'inventors' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'">
                发明人
                <div v-if="stakeholderTab === 'inventors'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator"></div>
              </button>
              <button @click="stakeholderTab = 'applicants'"
                class="pb-3 text-sm font-bold transition-colors relative"
                :class="stakeholderTab === 'applicants' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'">
                申请人
                <div v-if="stakeholderTab === 'applicants'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator"></div>
              </button>
            </div>
            <Transition name="tab-fade" mode="out-in">
              <div v-if="stakeholderTab === 'inventors'" key="inventors" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(inv, idx) in patentData.inventors" :key="idx"
                  class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5">
                  <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shrink-0 avatar-glow">
                      {{ inv.name[0] }}
                    </div>
                    <div class="min-w-0">
                      <div class="font-bold text-slate-900 truncate">{{ inv.name }}</div>
                      <div class="text-xs text-slate-500 truncate">{{ inv.org }}</div>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="exp in inv.expertise" :key="exp"
                      class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                      {{ exp }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else key="applicants" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(app, idx) in patentData.applicants" :key="idx"
                  class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5">
                  <div class="flex items-center gap-4 mb-3">
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 avatar-glow">
                      <Building2 class="w-6 h-6" />
                    </div>
                    <div class="min-w-0">
                      <div class="font-bold text-slate-900 truncate">{{ app.name }}</div>
                      <div class="text-xs text-slate-500 truncate">{{ app.type }} · {{ app.patents }} 项专利</div>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="exp in app.expertise" :key="exp"
                      class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">
                      {{ exp }}
                    </span>
                  </div>
                </div>
              </div>
            </Transition>
          </section>

          <!-- Abstract -->
          <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-on-scroll fade-up card-gradient-border">
            <div class="flex items-center gap-2 mb-4">
              <FileText class="w-5 h-5 text-blue-600" />
              <h3 class="text-lg font-bold text-slate-900">摘要</h3>
            </div>
            <p class="text-slate-700 leading-relaxed text-sm">{{ patentData.abstract }}</p>
          </section>

          <!-- Claims / Description tabs -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll fade-up card-gradient-border">
            <div class="flex border-b border-slate-100">
              <button @click="contentTab = 'claims'"
                class="px-6 py-4 font-medium text-sm transition-colors relative"
                :class="contentTab === 'claims' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
                权利要求
                <div v-if="contentTab === 'claims'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
              </button>
              <button @click="contentTab = 'description'"
                class="px-6 py-4 font-medium text-sm transition-colors relative"
                :class="contentTab === 'description' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
                说明书
                <div v-if="contentTab === 'description'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
              </button>
            </div>
            <div class="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
              <Transition name="tab-fade" mode="out-in">
                <div :key="contentTab" class="whitespace-pre-line text-slate-600 text-sm leading-relaxed">
                  {{ contentTab === 'claims' ? patentData.claims : patentData.description }}
                </div>
              </Transition>
            </div>
          </section>

          <!-- Patents tabs -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll fade-up card-gradient-border">
            <div class="flex border-b border-slate-100">
              <button @click="patentsTab = 'cited'"
                class="px-6 py-4 font-medium text-sm transition-colors relative"
                :class="patentsTab === 'cited' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
                引用专利
                <div v-if="patentsTab === 'cited'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
              </button>
              <button @click="patentsTab = 'similar'"
                class="px-6 py-4 font-medium text-sm transition-colors relative"
                :class="patentsTab === 'similar' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
                相似专利
                <div v-if="patentsTab === 'similar'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
              </button>
            </div>
            <div class="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
              <Transition name="tab-fade" mode="out-in">
                <div v-if="patentsTab === 'cited'" key="cited" class="space-y-3">
                  <a v-for="(pat, idx) in patentData.citedPatents" :key="idx" href="#"
                    class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200 hover:translate-x-1">
                    <div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">{{ pat.title }}</div>
                    <div class="text-xs text-slate-500 font-mono">{{ pat.id }}</div>
                  </a>
                </div>
                <div v-else key="similar" class="space-y-3">
                  <a v-for="(pat, idx) in patentData.similarPatents" :key="idx" href="#"
                    class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200">
                    <div class="flex items-center justify-between mb-1">
                      <div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 flex-1 mr-3">{{ pat.title }}</div>
                      <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">{{ pat.match }}%</span>
                    </div>
                    <div class="text-xs text-slate-500 font-mono mb-2">{{ pat.id }}</div>
                    <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full match-bar-fill transition-all"
                        :style="{ width: pat.match + '%' }"></div>
                    </div>
                  </a>
                </div>
              </Transition>
            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="space-y-8">
          <!-- Meta info -->
          <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-on-scroll fade-up card-gradient-border">
            <h3 class="text-lg font-bold text-slate-900 mb-4">基本信息</h3>
            <div class="space-y-4">
              <div class="flex flex-col gap-1">
                <span class="text-xs text-slate-500 flex items-center gap-1"><Tag class="w-3 h-3" /> IPC分类</span>
                <div class="flex flex-wrap gap-2 mt-1">
                  <span v-for="item in patentData.ipc" :key="item.code"
                    class="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md font-mono flex items-center gap-1.5 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-default">
                    <span class="font-bold">{{ item.code }}</span>
                    <span class="text-slate-500">{{ item.name }}</span>
                  </span>
                </div>
              </div>
              <div class="h-px w-full bg-slate-100" />
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-500 flex items-center gap-1"><Clock class="w-3 h-3" /> 申请日</span>
                  <span class="text-sm font-medium text-slate-900">{{ patentData.applicationDate }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-500 flex items-center gap-1"><Clock class="w-3 h-3" /> 公开日</span>
                  <span class="text-sm font-medium text-slate-900">{{ patentData.publicationDate }}</span>
                </div>
              </div>
              <div class="h-px w-full bg-slate-100" />
              <div class="flex flex-col gap-1">
                <span class="text-xs text-slate-500 flex items-center gap-1"><Building2 class="w-3 h-3" /> 代理机构</span>
                <span class="text-sm font-medium text-slate-900">{{ patentData.agency }}</span>
              </div>
              <div class="h-px w-full bg-slate-100" />
              <div class="flex flex-col gap-1">
                <span class="text-xs text-slate-500 flex items-center gap-1"><MapPin class="w-3 h-3" /> 申请人地址</span>
                <span class="text-sm font-medium text-slate-900">{{ patentData.applicantAddress }}</span>
              </div>
            </div>
          </section>

          <!-- Timeline -->
          <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-on-scroll fade-up card-gradient-border">
            <div class="flex items-center gap-2 mb-6">
              <Activity class="w-5 h-5 text-blue-600" />
              <h3 class="text-lg font-bold text-slate-900">专利时间轴</h3>
            </div>
            <div class="relative border-l-2 border-slate-100 ml-3 space-y-8">
              <div v-for="(item, idx) in patentData.timeline" :key="idx" class="relative pl-6">
                <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-sm"
                  :class="{ 'timeline-pulse': idx === 0 }"></div>
                <div class="text-sm font-bold text-blue-600 mb-1">{{ item.date }}</div>
                <div class="text-slate-700 font-medium text-sm">{{ item.event }}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Page entry animations */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
.animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.animate-on-scroll:nth-child(2) { transition-delay: 0.08s; }
.animate-on-scroll:nth-child(3) { transition-delay: 0.16s; }
.animate-on-scroll:nth-child(4) { transition-delay: 0.24s; }

/* Tab switching transition */
.tab-fade-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-8px); }

/* Icon swap transition */
.icon-swap-enter-active { transition: all 0.2s ease; }
.icon-swap-leave-active { transition: all 0.15s ease; }
.icon-swap-enter-from { opacity: 0; transform: scale(0.5); }
.icon-swap-leave-to { opacity: 0; transform: scale(0.5); }

/* Tab indicator slide */
.tab-indicator {
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
