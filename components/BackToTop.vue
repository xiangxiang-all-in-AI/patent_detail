<template>
  <Transition name="fade-up">
    <button v-show="visible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 w-11 h-11 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 active:scale-90 transition-all group"
      aria-label="返回顶部">
      <ArrowUp class="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  visible.value = window.scrollY > 400
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.fade-up-enter-active { transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
.fade-up-leave-active { transition: all 0.2s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(16px) scale(0.8); }
.fade-up-leave-to { opacity: 0; transform: translateY(16px) scale(0.8); }
</style>
