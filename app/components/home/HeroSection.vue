<template>
  <section class="section-space">
    <div class="container-shell">
      <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div class="brand-chip">
            <UIcon name="i-lucide-sparkles" class="h-4 w-4" />
            <span>Marketplace layanan dengan sentuhan elegan</span>
          </div>

          <h1 class="display-title mt-5 max-w-4xl">
            Transformasi nyata dari prototipe yang berantakan menjadi pengalaman premium yang matang.
          </h1>

          <p class="body-muted mt-6 max-w-2xl">
            Tidy Tidys 2.0 terasa lebih tenang, lebih tajam, dan lebih dapat dipercaya — dengan alur pemesanan yang lebih rapi,
            hierarki yang lebih kuat, serta tampilan yang lebih meyakinkan.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <UIcon name="i-lucide-search" class="h-4 w-4" />
              <span>Jelajahi layanan</span>
            </NuxtLink>

            <NuxtLink
              to="/dashboard"
              class="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              <UIcon name="i-lucide-layout-dashboard" class="h-4 w-4" />
              <span>Lihat dasbor</span>
            </NuxtLink>
          </div>

          <div class="mt-10 flex flex-wrap gap-8">
            <div>
              <p class="text-2xl font-semibold text-neutral-900">Lebih rapi</p>
              <p class="mt-1 text-sm text-neutral-500">sistem layout</p>
            </div>
            <div>
              <p class="text-2xl font-semibold text-neutral-900">Lebih tajam</p>
              <p class="mt-1 text-sm text-neutral-500">eksplorasi layanan</p>
            </div>
            <div>
              <p class="text-2xl font-semibold text-neutral-900">Siap</p>
              <p class="mt-1 text-sm text-neutral-500">untuk integrasi backend</p>
            </div>
          </div>
        </div>

        <div class="soft-card overflow-hidden p-4 lg:p-5">
          <div class="grid gap-4">
            <div class="overflow-hidden rounded-[1.75rem]">
              <NuxtImg
                src="/images/hero/tidy-hero-1.jpg"
                alt="Hero Tidy Tidys"
                width="1200"
                height="800"
                sizes="100vw md:50vw"
                class="h-[280px] w-full object-cover"
              />
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-neutral-900">Pemesanan mendatang</p>
                    <p class="mt-1 text-xs text-neutral-500">Besok · 09:00</p>
                  </div>
                  <div class="rounded-full bg-[var(--tt-success-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-success)]">
                    Dikonfirmasi
                  </div>
                </div>

                <div class="mt-5 flex items-center gap-3">
                  <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
                    <UIcon name="i-lucide-spray-can" class="h-5 w-5" />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-neutral-900">Pembersihan Mendalam</p>
                    <p class="text-xs text-neutral-500">Layanan hunian premium</p>
                  </div>
                </div>
              </div>

              <div class="overflow-hidden rounded-[1.5rem]">
                <NuxtImg
                  src="/images/hero/tidy-hero-2.jpg"
                  alt="Visual detail Tidy Tidys"
                  width="800"
                  height="800"
                  sizes="50vw md:25vw"
                  class="h-full min-h-[150px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>