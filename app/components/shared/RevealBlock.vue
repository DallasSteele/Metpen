<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!root.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.12 }
  )

  observer.observe(root.value)
})
</script>

<template>
  <div
    ref="root"
    :class="[
      'transition-all duration-700 will-change-transform',
      visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-sm'
    ]"
  >
    <slot />
  </div>
</template>