export function useScrollProgress() {
  const progress = ref(0)

  function onScroll() {
    const h = document.documentElement
    progress.value = h.scrollTop / (h.scrollHeight - h.clientHeight)
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { progress }
}
