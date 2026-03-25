<template>
  <div class="flex items-center gap-2">
    <button @click="shareLink" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-xs font-medium rounded-full transition-all hover:shadow-sm active:scale-95 group">
      <Share2 class="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
      分享
    </button>
    <Transition name="toast">
      <span v-if="showToast" class="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium">
        链接已复制
      </span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Share2 } from 'lucide-vue-next'

const showToast = ref(false)

async function shareLink() {
  if (navigator.share) {
    await navigator.share({ title: document.title, url: location.href })
  } else {
    await navigator.clipboard.writeText(location.href)
    showToast.value = true
    setTimeout(() => { showToast.value = false }, 2000)
  }
}
</script>

<style scoped>
.toast-enter-active { transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
.toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from { opacity: 0; transform: translateX(-8px) scale(0.9); }
.toast-leave-to { opacity: 0; transform: translateX(8px) scale(0.9); }
</style>
