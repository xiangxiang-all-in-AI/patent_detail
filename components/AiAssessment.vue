<template>
  <section class="mt-8 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100 relative overflow-hidden card-gradient-border">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    <div class="ai-shimmer absolute inset-0 pointer-events-none"></div>
    <div class="relative">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">
            <Sparkles class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900">专利价值洞察</h2>
            <p class="text-sm text-slate-500 mt-0.5">基于大模型深度解析专利商业价值</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(card, idx) in cards" :key="idx"
          class="rounded-xl p-5 border relative group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
          :class="[card.bg, card.border]">
          <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" :class="card.gradient"></div>
          <div class="flex items-center gap-2 mb-3">
            <div class="relative">
              <!-- Glow ring on hover -->
              <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="card.glowRing"></div>
              <component :is="card.icon" class="w-5 h-5 relative z-10" :class="[card.iconColor, card.iconAnim]" />
            </div>
            <h3 class="font-bold text-slate-900">{{ card.title }}</h3>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed">{{ card.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, Target, Lightbulb, Rocket } from 'lucide-vue-next'

const props = defineProps<{ data: any }>()

const cards = [
  { title: '解决问题', icon: Target, content: props.data.aiSummary.problem, gradient: 'from-rose-500 to-orange-400', bg: 'bg-rose-50/50', border: 'border-rose-100', iconColor: 'text-rose-600', iconAnim: 'icon-target', glowRing: 'shadow-[0_0_12px_rgba(244,63,94,0.3)]' },
  { title: '达成效果', icon: Lightbulb, content: props.data.aiSummary.effect, gradient: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50/50', border: 'border-amber-100', iconColor: 'text-amber-600', iconAnim: 'icon-bulb', glowRing: 'shadow-[0_0_12px_rgba(245,158,11,0.3)]' },
  { title: '主要用途', icon: Rocket, content: props.data.aiSummary.application, gradient: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50/50', border: 'border-emerald-100', iconColor: 'text-emerald-600', iconAnim: 'icon-rocket', glowRing: 'shadow-[0_0_12px_rgba(16,185,129,0.3)]' },
]
</script>

<style scoped>
/* Target: hover 时旋转瞄准 + 缩放锁定 */
.icon-target {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.group:hover .icon-target {
  transform: rotate(90deg) scale(1.2);
}

/* Lightbulb: hover 时闪亮脉冲 —— 灵感闪现 */
.icon-bulb {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s;
}
.group:hover .icon-bulb {
  transform: scale(1.25);
  filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.6));
  animation: bulb-flash 0.6s ease-out;
}

@keyframes bulb-flash {
  0% { filter: drop-shadow(0 0 0px rgba(245, 158, 11, 0)); transform: scale(1); }
  30% { filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.8)); transform: scale(1.35); }
  60% { filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.4)); transform: scale(1.15); }
  100% { filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.6)); transform: scale(1.25); }
}

/* Rocket: hover 时向右上方升空 + 微抖 */
.icon-rocket {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.group:hover .icon-rocket {
  transform: translate(2px, -3px) rotate(-12deg) scale(1.2);
  animation: rocket-shake 0.5s ease-out 0.1s;
}

@keyframes rocket-shake {
  0%, 100% { transform: translate(2px, -3px) rotate(-12deg) scale(1.2); }
  20% { transform: translate(1px, -4px) rotate(-14deg) scale(1.2); }
  40% { transform: translate(3px, -2px) rotate(-10deg) scale(1.2); }
  60% { transform: translate(1.5px, -3.5px) rotate(-13deg) scale(1.2); }
  80% { transform: translate(2.5px, -2.5px) rotate(-11deg) scale(1.2); }
}

@media (prefers-reduced-motion: reduce) {
  .icon-target, .icon-bulb, .icon-rocket {
    transition: none !important;
    animation: none !important;
  }
  .group:hover .icon-target,
  .group:hover .icon-bulb,
  .group:hover .icon-rocket {
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
