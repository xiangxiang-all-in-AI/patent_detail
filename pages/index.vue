<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
    <article itemscope itemtype="https://schema.org/CreativeWork">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <PatentHeader :data="patent" class="flex-1" />
      </div>

      <AiAssessment :data="patent" />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <!-- Left column with stagger animation -->
        <div class="lg:col-span-2 space-y-8">
          <div v-for="(comp, idx) in leftComponents" :key="idx"
            class="stagger-item" :style="{ animationDelay: `${idx * 0.1}s` }">
            <component :is="comp.is" v-bind="comp.props" />
          </div>
        </div>
        <!-- Right column with stagger animation -->
        <div class="space-y-8">
          <div v-for="(comp, idx) in rightComponents" :key="idx"
            class="stagger-item" :style="{ animationDelay: `${(idx + 4) * 0.1}s` }">
            <component :is="comp.is" v-bind="comp.props" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { patentData } from '~/data/patent'

const patent = patentData

const leftComponents = [
  { is: resolveComponent('StakeholdersCard'), props: { data: patent } },
  { is: resolveComponent('AbstractCard'), props: { text: patent.abstract } },
  { is: resolveComponent('ContentTabs'), props: { claims: patent.claims, description: patent.description } },
  { is: resolveComponent('PatentsTabs'), props: { cited: patent.citedPatents, similar: patent.similarPatents } },
]

const rightComponents = [
  { is: resolveComponent('MetaInfo'), props: { data: patent } },
  { is: resolveComponent('PatentTimeline'), props: { timeline: patent.timeline } },
]

useHead({
  title: `${patent.title} - 专利详情 - 转果果`,
  meta: [
    { name: 'description', content: `${patent.abstract} AI评估显示其${patent.aiSummary.effect}` },
    { name: 'keywords', content: `专利, 科技成果转化, ${patent.title}, ${patent.inventors.map(i => i.name).join(', ')}, ${patent.applicants.map(a => a.name).join(', ')}` },
    { property: 'og:title', content: `${patent.title} - 专利详情` },
    { property: 'og:description', content: patent.abstract },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: '转果果' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: patent.title },
    { name: 'twitter:description', content: patent.abstract },
  ],
  link: [
    { rel: 'canonical', href: `https://zhuanguoguo.com/patent/${patent.applicationNumber}` },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: patent.title,
        identifier: patent.applicationNumber,
        description: patent.abstract,
        dateCreated: patent.applicationDate,
        datePublished: patent.publicationDate,
        author: patent.inventors.map(i => ({
          '@type': 'Person',
          name: i.name,
          affiliation: { '@type': 'Organization', name: i.org },
        })),
        applicant: patent.applicants.map(a => ({
          '@type': 'Organization',
          name: a.name,
        })),
        about: patent.ipc.map(c => ({
          '@type': 'DefinedTerm',
          termCode: c.code,
          name: c.name,
        })),
        provider: {
          '@type': 'Organization',
          name: '转果果',
          url: 'https://zhuanguoguo.com',
        },
      }),
    },
  ],
})
</script>

<style scoped>
@keyframes stagger-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.stagger-item {
  animation: stagger-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) both;
}
</style>
