<template>
  <section class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-gradient-border">
    <div class="flex border-b border-slate-100">
      <button @click="activeTab = 'claims'" class="px-6 py-4 font-medium text-sm transition-colors relative"
        :class="activeTab === 'claims' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
        权利要求
        <div v-if="activeTab === 'claims'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
      </button>
      <button @click="activeTab = 'description'" class="px-6 py-4 font-medium text-sm transition-colors relative"
        :class="activeTab === 'description' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
        说明书
        <div v-if="activeTab === 'description'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
      </button>
      <button @click="activeTab = 'drawings'" class="px-6 py-4 font-medium text-sm transition-colors relative"
        :class="activeTab === 'drawings' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'">
        附图
        <div v-if="activeTab === 'drawings'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 tab-indicator"></div>
      </button>
    </div>
    <div class="relative">
      <div class="p-6 overflow-y-auto custom-scrollbar transition-all duration-300" :class="activeTab !== 'drawings' && !expanded ? 'max-h-[300px]' : 'max-h-none'">
        <Transition name="tab-fade" mode="out-in">
          <!-- 权利要求 / 说明书 -->
          <div v-if="activeTab === 'claims'" key="claims" class="whitespace-pre-line text-slate-600 text-sm leading-relaxed">
            {{ claims }}
          </div>
          <div v-else-if="activeTab === 'description'" key="description" class="whitespace-pre-line text-slate-600 text-sm leading-relaxed">
            {{ description }}
          </div>
          <!-- 附图 -->
          <div v-else key="drawings" class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(img, idx) in drawings"
              :key="idx"
              class="group relative bg-slate-50 rounded-xl border border-slate-200 overflow-hidden aspect-square flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
              @click="openPreview(idx)"
            >
              <div class="text-center p-4">
                <div class="w-full flex justify-center mb-3">
                  <svg class="w-10 h-10 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
                <p class="text-xs font-medium text-slate-500 group-hover:text-blue-600 transition-colors">{{ img.label }}</p>
              </div>
              <div class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </Transition>
      </div>
      <!-- Fade overlay + expand button (text tabs only) -->
      <template v-if="activeTab !== 'drawings'">
        <div v-if="!expanded" class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        <button @click="expanded = !expanded"
          class="w-full py-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-colors flex items-center justify-center gap-1 border-t border-slate-50">
          <span>{{ expanded ? '收起' : '展开全文' }}</span>
          <ChevronDown class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': expanded }" />
        </button>
      </template>
    </div>

    <!-- Image preview modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="previewIdx !== null" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-8" @click.self="previewIdx = null">
          <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative">
            <button @click="previewIdx = null" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <div class="aspect-[4/3] bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center mb-4">
              <div class="text-center">
                <svg class="w-16 h-16 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <p class="text-sm text-slate-400">附图占位 · 接入真实数据后替换</p>
              </div>
            </div>
            <p class="text-sm font-medium text-slate-700 text-center">{{ drawings[previewIdx]?.label }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{ claims: string; description: string }>()

const activeTab = ref('claims')
const expanded = ref(false)
const previewIdx = ref<number | null>(null)

const drawings = [
  { label: '图1 — 晶型A的X射线粉末衍射图' },
  { label: '图2 — 晶型A的DSC热分析图' },
  { label: '图3 — 晶型A的TGA热重分析图' },
  { label: '图4 — 晶型A与无定形体的溶出对比曲线' },
  { label: '图5 — 晶型A的红外光谱图' },
  { label: '图6 — 化合物的合成路线示意图' },
]

function openPreview(idx: number) {
  previewIdx.value = idx
}
</script>

<style scoped>
.tab-fade-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-8px); }
.tab-indicator { transition: all 0.3s cubic-bezier(0.25,1,0.5,1); }
</style>
