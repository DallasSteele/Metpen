<template>
  <div class="min-h-screen bg-neutral-50">
    <div class="flex min-h-screen">
      <AppSidebar />
      <main class="flex-1 p-4 lg:p-8">
        <DashboardTopbar />
        <slot />
      </main>
    </div>
  </div>
</template>