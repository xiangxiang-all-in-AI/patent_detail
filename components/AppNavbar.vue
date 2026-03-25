<script setup lang="ts">
import { Search, ChevronDown, ChevronRight, Menu, X } from 'lucide-vue-next'

const activeDropdown = ref<string | null>(null)
const activeSubDropdown = ref<string | null>(null)
const mobileOpen = ref(false)

const navItems = [
  { id: 'ai', label: '小果AI', hasDropdown: false, href: 'https://pro.imaibj.cn/' },
  {
    id: 'db',
    label: '科创库',
    hasDropdown: true,
    items: [
      { label: '专家库' },
      { label: '企业库' },
      { label: '专利库' },
      { label: '成果库' },
      { label: '需求库' },
      { label: '政策库' },
      { label: '揭榜挂帅' },
      { label: '技术经理人' },
      {
        label: '其他库',
        subItems: ['孵化器', '投融资机构', '概念验证平台', '知识产权服务机构'],
      },
    ],
  },
  {
    id: 'activity',
    label: '活动报名',
    hasDropdown: true,
    items: [{ label: '交易大会' }, { label: '校企合作' }, { label: '火花行动' }],
  },
]

let dropdownTimer: ReturnType<typeof setTimeout> | null = null
let subTimer: ReturnType<typeof setTimeout> | null = null

function openDropdown(id: string) {
  if (dropdownTimer) { clearTimeout(dropdownTimer); dropdownTimer = null }
  activeDropdown.value = id
}

function closeDropdown() {
  dropdownTimer = setTimeout(() => {
    activeDropdown.value = null
    activeSubDropdown.value = null
  }, 120)
}

function openSub(label: string) {
  if (subTimer) { clearTimeout(subTimer); subTimer = null }
  activeSubDropdown.value = label
}

function closeSub() {
  subTimer = setTimeout(() => {
    activeSubDropdown.value = null
  }, 80)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Left: Logo + Nav -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2 flex-shrink-0" aria-label="转果果首页">
          <img src="/zgg_logo.webp" alt="转果果" class="h-8 w-auto" />
        </a>

        <nav class="hidden md:flex items-center gap-6 lg:gap-8 ml-10 lg:ml-16" aria-label="主导航">
          <template v-for="item in navItems" :key="item.id">
            <!-- Simple link -->
            <div v-if="!item.hasDropdown">
              <a
                :href="item.href"
                class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 py-2 px-1"
              >
                {{ item.label }}
              </a>
            </div>

            <!-- Dropdown trigger -->
            <div
              v-else
              class="relative"
              @mouseenter="openDropdown(item.id)"
              @mouseleave="closeDropdown()"
            >
              <button
                class="flex items-center gap-1 text-sm font-medium transition-colors duration-300 py-2 px-1"
                :class="activeDropdown === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'"
                :aria-expanded="activeDropdown === item.id"
              >
                {{ item.label }}
                <ChevronDown
                  class="w-4 h-4 transition-transform duration-300 ease-out"
                  :class="{ 'rotate-180': activeDropdown === item.id }"
                />
              </button>

              <!-- Dropdown panel -->
              <div
                class="absolute top-full left-0 pt-2 w-44 z-50 dropdown-panel"
                :class="activeDropdown === item.id ? 'is-open' : ''"
              >
                <div class="bg-white rounded-xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] border border-black/[0.04] py-1.5">
                  <div
                    v-for="(subItem, idx) in item.items"
                    :key="subItem.label"
                    class="relative"
                    @mouseenter="subItem.subItems && openSub(subItem.label)"
                    @mouseleave="subItem.subItems && closeSub()"
                  >
                    <a
                      :href="`/${item.id}/${subItem.label}`"
                      class="dropdown-item flex items-center justify-between px-4 py-2 text-[13px] text-slate-600 transition-colors duration-200 hover:text-blue-600 hover:bg-slate-50 rounded-md mx-1.5"
                      :style="{ transitionDelay: activeDropdown === item.id ? `${idx * 20}ms` : '0ms' }"
                    >
                      {{ subItem.label }}
                      <ChevronRight v-if="subItem.subItems" class="w-3 h-3 text-slate-400" />
                    </a>

                    <!-- Sub dropdown -->
                    <div
                      v-if="subItem.subItems"
                      class="absolute top-0 left-full pl-1.5 w-52 z-50 dropdown-panel"
                      :class="activeSubDropdown === subItem.label ? 'is-open' : ''"
                    >
                      <div class="bg-white rounded-xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] border border-black/[0.04] py-1.5">
                        <a
                          v-for="(third, tidx) in subItem.subItems"
                          :key="third"
                          :href="`/${item.id}/${subItem.label}/${third}`"
                          class="dropdown-item block px-4 py-2 text-[13px] text-slate-600 transition-colors duration-200 hover:text-blue-600 hover:bg-slate-50 rounded-md mx-1.5"
                          :style="{ transitionDelay: activeSubDropdown === subItem.label ? `${tidx * 20}ms` : '0ms' }"
                        >
                          {{ third }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </nav>
      </div>

      <!-- Right: Search + Auth -->
      <div class="flex items-center gap-4">
        <div class="relative hidden lg:block search-glow rounded-full transition-all duration-300">
          <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors" />
          <input type="text" placeholder="向小果AI提问或搜索..." class="pl-9 pr-12 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all w-64 focus:w-80 outline-none" />
          <div class="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-400 shadow-sm">AI</div>
        </div>
        <!-- Mobile menu button -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="菜单">
          <Transition name="menu-icon" mode="out-in">
            <X v-if="mobileOpen" class="w-5 h-5 text-slate-600" />
            <Menu v-else class="w-5 h-5 text-slate-600" />
          </Transition>
        </button>
        <button class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">登录</button>
        <button class="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300 hidden sm:block">注册</button>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg">
        <nav class="max-w-7xl mx-auto px-4 py-4 space-y-3">
          <a href="https://pro.imaibj.cn/" class="block text-slate-600 hover:text-blue-600 font-medium text-sm py-2 transition-colors">小果AI</a>
          <a href="#" class="block text-slate-900 font-medium text-sm py-2">科创库</a>
          <a href="#" class="block text-slate-600 hover:text-blue-600 font-medium text-sm py-2 transition-colors">揭榜挂帅</a>
          <a href="#" class="block text-slate-600 hover:text-blue-600 font-medium text-sm py-2 transition-colors">活动报名</a>
          <div class="flex gap-3 pt-3 border-t border-slate-100">
            <button class="text-sm font-medium text-slate-600 px-4 py-2">登录</button>
            <button class="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-full">注册</button>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Dropdown panel: CSS-only transition */
.dropdown-panel {
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition:
    opacity 320ms cubic-bezier(0.2, 0, 0, 1),
    transform 320ms cubic-bezier(0.2, 0, 0, 1),
    visibility 0ms 320ms;
  pointer-events: none;
}

.dropdown-panel.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition:
    opacity 280ms cubic-bezier(0.2, 0, 0, 1),
    transform 280ms cubic-bezier(0.2, 0, 0, 1),
    visibility 0ms 0ms;
  pointer-events: auto;
}

/* Sub panel slides horizontally */
.dropdown-panel .dropdown-panel {
  transform: translateX(4px);
}
.dropdown-panel .dropdown-panel.is-open {
  transform: translateX(0);
}

/* Link hover nudge */
.dropdown-item {
  transform: translateX(0);
  transition:
    color 200ms,
    background-color 200ms,
    transform 200ms cubic-bezier(0.2, 0, 0, 1);
}
.dropdown-item:hover {
  transform: translateX(2px);
}

/* Mobile menu transitions */
.menu-icon-enter-active, .menu-icon-leave-active { transition: all 0.2s ease; }
.menu-icon-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
.menu-icon-leave-to { opacity: 0; transform: rotate(90deg) scale(0.5); }
.mobile-menu-enter-active { transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
.mobile-menu-leave-active { transition: all 0.2s ease; }
.mobile-menu-enter-from { opacity: 0; max-height: 0; }
.mobile-menu-enter-to { opacity: 1; max-height: 300px; }
.mobile-menu-leave-from { opacity: 1; max-height: 300px; }
.mobile-menu-leave-to { opacity: 0; max-height: 0; }
</style>
