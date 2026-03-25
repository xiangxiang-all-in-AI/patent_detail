<template>
  <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-gradient-border">
    <div class="flex items-center gap-2 mb-6">
      <Activity class="w-5 h-5 text-blue-600" />
      <h3 class="text-lg font-bold text-slate-900">专利时间轴</h3>
    </div>
    <div class="relative ml-3 space-y-8">
      <!-- Animated connecting line -->
      <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-100">
        <div class="w-full bg-gradient-to-b from-blue-500 to-blue-200 rounded-full timeline-line-fill" :style="{ height: lineHeight }"></div>
      </div>

      <div v-for="(item, idx) in timeline" :key="idx" class="relative pl-6 group">
        <div class="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 shadow-sm transition-all duration-300 group-hover:scale-125"
          :class="idx === 0 ? 'border-blue-500 timeline-pulse' : 'border-slate-300 group-hover:border-blue-400'">
        </div>
        <time :datetime="item.date" class="text-sm font-bold mb-1 block transition-colors" :class="idx === 0 ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'">{{ item.date }}</time>
        <div class="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors">{{ item.event }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Activity } from 'lucide-vue-next'
const props = defineProps<{ timeline: { date: string; event: string }[] }>()

const lineHeight = ref('0%')
onMounted(() => {
  setTimeout(() => { lineHeight.value = '100%' }, 300)
})
</script>

<style scoped>
.timeline-line-fill {
  transition: height 1s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
