<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
          <NuxtImg
            src="/images/hero/tidy-hero-3.jpg"
            alt="Editorial service showcase"
            width="1400"
            height="1000"
            class="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <div class="warm-chip">
            <UIcon name="i-lucide-star" class="h-4 w-4" />
            <span>Design-forward service experience</span>
          </div>

          <h2 class="section-title mt-5">
            Premium doesn’t need to be loud.
          </h2>

          <p class="body-muted mt-5 max-w-2xl">
            The strongest upgrade here is not just cleaner spacing or better cards.
            It is that the whole experience now feels more composed, more trustworthy,
            and much closer to something users would actually enjoy using.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="soft-card p-5">
              <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
                <UIcon name="i-lucide-badge-check" class="h-5 w-5" />
              </div>
              <p class="text-base font-semibold text-neutral-900">Clearer trust signals</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Better hierarchy and better visual confidence.
              </p>
            </div>

            <div class="soft-card p-5">
              <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-success-soft)] text-[var(--tt-success)]">
                <UIcon name="i-lucide-clock-3" class="h-5 w-5" />
              </div>
              <p class="text-base font-semibold text-neutral-900">Faster decision-making</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Cleaner service comparison and booking flow.
              </p>
            </div>
          </div>

          <NuxtLink
            to="/services"
            class="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-accent)] px-5 py-3 text-sm font-medium text-white"
          >
            <span>Explore all services</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>