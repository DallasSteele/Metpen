<template>
  <div class="min-h-screen bg-[var(--tt-bg)] text-[var(--tt-text)]">
    <AppBackground />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>