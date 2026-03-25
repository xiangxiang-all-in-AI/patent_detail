<template>
  <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border">
    <h3 class="text-lg font-bold text-slate-900 mb-4">基本信息</h3>
    <div class="space-y-4">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-slate-500 flex items-center gap-1"><Tag class="w-3 h-3" /> IPC分类</span>
        <div class="flex flex-wrap gap-2 mt-1">
          <span v-for="item in data.ipc" :key="item.code"
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
          <time :datetime="data.applicationDate" class="text-sm font-medium text-slate-900">{{ data.applicationDate }}</time>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs text-slate-500 flex items-center gap-1"><Clock class="w-3 h-3" /> 公开日</span>
          <time :datetime="data.publicationDate" class="text-sm font-medium text-slate-900">{{ data.publicationDate }}</time>
        </div>
      </div>
      <div class="h-px w-full bg-slate-100" />
      <div class="flex flex-col gap-1">
        <span class="text-xs text-slate-500 flex items-center gap-1"><Building2 class="w-3 h-3" /> 代理机构</span>
        <span class="text-sm font-medium text-slate-900">{{ data.agency }}</span>
      </div>
      <div class="h-px w-full bg-slate-100" />
      <div class="flex flex-col gap-1">
        <span class="text-xs text-slate-500 flex items-center gap-1"><MapPin class="w-3 h-3" /> 申请人地址</span>
        <address class="text-sm font-medium text-slate-900 not-italic">{{ data.applicantAddress }}</address>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Tag, Clock, Building2, MapPin } from 'lucide-vue-next'
defineProps<{ data: any }>()
</script>
