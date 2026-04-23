<template>
  <section class="pb-14">
    <div class="container-shell">
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div class="soft-card flex items-center gap-4 p-5">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
            <UIcon name="i-lucide-badge-check" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm font-semibold text-neutral-900">Verified specialists</p>
            <p class="mt-1 text-xs text-neutral-500">Cleaner and more trustworthy</p>
          </div>
        </div>

        <div class="soft-card flex items-center gap-4 p-5">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--tt-success-soft)] text-[var(--tt-success)]">
            <UIcon name="i-lucide-calendar-clock" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm font-semibold text-neutral-900">Flexible scheduling</p>
            <p class="mt-1 text-xs text-neutral-500">Clearer date and slot flow</p>
          </div>
        </div>

        <div class="soft-card flex items-center gap-4 p-5">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <UIcon name="i-lucide-shield-check" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm font-semibold text-neutral-900">Safer service flow</p>
            <p class="mt-1 text-xs text-neutral-500">More confidence at every step</p>
          </div>
        </div>

        <div class="soft-card flex items-center gap-4 p-5">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
            <UIcon name="i-lucide-sparkles" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm font-semibold text-neutral-900">Refined interface</p>
            <p class="mt-1 text-xs text-neutral-500">Cleaner visual hierarchy</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>