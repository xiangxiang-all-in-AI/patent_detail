<template>
  <header>
    <div class="flex items-center gap-3 mb-4">
      <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 status-pulse">
        {{ data.status }}
      </span>
      <button @click="copy(data.applicationNumber)" class="text-sm font-medium text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1.5 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer group" :title="copied ? '已复制' : '点击复制申请号'">
        {{ data.applicationNumber }}
        <Transition name="icon-swap" mode="out-in">
          <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-500" />
          <Copy v-else class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </Transition>
      </button>
    </div>
    <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
      {{ data.title }}
    </h1>
    <div class="flex flex-wrap items-center gap-6 text-sm text-slate-600">
      <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
        <User class="w-4 h-4 text-blue-500" />
        <span class="font-medium">{{ data.inventors.map((i: any) => i.name).join(', ') }}</span>
      </div>
      <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
        <Building2 class="w-4 h-4 text-indigo-500" />
        <span class="font-medium">{{ data.applicants.map((a: any) => a.name).join(', ') }}</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Copy, Check, User, Building2 } from 'lucide-vue-next'

defineProps<{ data: any }>()
const { copied, copy } = useCopyToClipboard()
</script>

<style scoped>
.icon-swap-enter-active { transition: all 0.2s ease; }
.icon-swap-leave-active { transition: all 0.15s ease; }
.icon-swap-enter-from, .icon-swap-leave-to { opacity: 0; transform: scale(0.5); }
</style>
