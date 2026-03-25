<template>
  <section class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border">
    <div class="flex border-b border-slate-100">
      <button @click="activeTab = 'cited'" class="px-6 py-4 font-medium text-sm transition-colors relative"
        :class="activeTab === 'cited' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
        引用专利
        <div v-if="activeTab === 'cited'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
      </button>
      <button @click="activeTab = 'similar'" class="px-6 py-4 font-medium text-sm transition-colors relative"
        :class="activeTab === 'similar' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
        相似专利
        <div v-if="activeTab === 'similar'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
      </button>
    </div>
    <div class="p-6">
      <Transition name="tab-fade" mode="out-in">
        <div v-if="activeTab === 'cited'" key="cited" class="space-y-3">
          <a v-for="(pat, idx) in cited" :key="idx" href="#"
            class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200 hover:translate-x-1">
            <div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">{{ pat.title }}</div>
            <div class="text-xs text-slate-500 font-mono">{{ pat.id }}</div>
          </a>
        </div>
        <div v-else key="similar" class="space-y-3">
          <a v-for="(pat, idx) in similar" :key="idx" href="#"
            class="block p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200 hover:translate-x-1">
            <div class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">{{ pat.title }}</div>
            <div class="text-xs text-slate-500 font-mono">{{ pat.id }}</div>
          </a>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ cited: any[]; similar: any[] }>()
const activeTab = ref('cited')
</script>

<style scoped>
.tab-fade-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-8px); }
.tab-indicator { transition: all 0.3s cubic-bezier(0.25,1,0.5,1); }
</style>
