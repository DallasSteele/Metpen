<template>
  <div class="relative min-h-screen">
    <AppBackground />
    <AppHeader />

    <div class="container-shell relative z-10 py-6 lg:py-8">
      <div class="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <AppSidebar />
          </div>
        </aside>

        <main class="min-w-0">
          <DashboardTopbar />
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>