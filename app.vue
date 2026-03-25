<template>
  <div class="min-h-screen bg-[#F4F7F9] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 relative overflow-x-hidden">
    <!-- Ambient background -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="ambient-orb absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-200"></div>
      <div class="ambient-orb-2 absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-200"></div>
    </div>

    <AppNavbar />

    <main class="relative z-10 pt-16">
      <NuxtPage />
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>
