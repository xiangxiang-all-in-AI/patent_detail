<template>
  <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border">
    <div class="flex items-center gap-6 border-b border-slate-100 mb-6">
      <button @click="activeTab = 'inventors'" class="pb-3 text-sm font-bold transition-colors relative"
        :class="activeTab === 'inventors' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'">
        发明人
        <div v-if="activeTab === 'inventors'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator"></div>
      </button>
      <button @click="activeTab = 'applicants'" class="pb-3 text-sm font-bold transition-colors relative"
        :class="activeTab === 'applicants' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'">
        申请人
        <div v-if="activeTab === 'applicants'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full tab-indicator"></div>
      </button>
    </div>
    <Transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'inventors'" key="inventors" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(inv, idx) in data.inventors" :key="idx"
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
            <span v-for="exp in inv.expertise" :key="exp" class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">{{ exp }}</span>
          </div>
        </div>
      </div>
      <div v-else key="applicants" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(app, idx) in data.applicants" :key="idx"
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
            <span v-for="exp in app.expertise" :key="exp" class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-md group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">{{ exp }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { Building2 } from 'lucide-vue-next'
defineProps<{ data: any }>()
const activeTab = ref('inventors')
</script>

<style scoped>
.tab-fade-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-8px); }
.tab-indicator { transition: all 0.3s cubic-bezier(0.25,1,0.5,1); }
</style>
