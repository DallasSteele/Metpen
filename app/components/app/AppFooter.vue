<template>
  <footer class="border-t border-neutral-200 bg-white/80">
    <div class="container-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm font-medium text-neutral-900">Tidy Tidys</p>
        <p class="mt-1 text-sm text-neutral-500">
          Elegant service booking experience, rebuilt from scratch.
        </p>
      </div>

      <div class="flex gap-6 text-sm text-neutral-500">
        <NuxtLink to="/" class="hover:text-neutral-900">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-neutral-900">Services</NuxtLink>
        <NuxtLink to="/auth/login" class="hover:text-neutral-900">Login</NuxtLink>
      </div>
    </div>
  </footer>
</template>