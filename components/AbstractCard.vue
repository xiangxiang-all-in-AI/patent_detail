<template>
  <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border">
    <div class="flex items-center gap-2 mb-4">
      <FileText class="w-5 h-5 text-blue-600" />
      <h3 class="text-lg font-bold text-slate-900">摘要</h3>
    </div>
    <p class="text-slate-700 leading-relaxed text-sm">{{ text }}</p>
  </section>
</template>

<script setup lang="ts">
import { FileText } from 'lucide-vue-next'
defineProps<{ text: string }>()
</script>
