<template>
  <nav aria-label="面包屑" class="mb-6">
    <ol class="flex items-center gap-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
          <Home class="w-3.5 h-3.5" />
          <span itemprop="name">首页</span>
        </a>
        <meta itemprop="position" content="1" />
      </li>
      <ChevronRight class="w-3.5 h-3.5 text-slate-300" />
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/patents" itemprop="item" class="text-slate-500 hover:text-blue-600 transition-colors">
          <span itemprop="name">科创库</span>
        </a>
        <meta itemprop="position" content="2" />
      </li>
      <ChevronRight class="w-3.5 h-3.5 text-slate-300" />
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name" class="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-[400px] inline-block align-bottom">{{ title }}</span>
        <meta itemprop="position" content="3" />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { Home, ChevronRight } from 'lucide-vue-next'
defineProps<{ title: string }>()
</script>
