<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
          <NuxtImg
            src="/images/hero/tidy-hero-3.jpg"
            alt="Tampilan layanan bergaya editorial"
            width="1400"
            height="1000"
            class="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <div class="warm-chip">
            <UIcon name="i-lucide-star" class="h-4 w-4" />
            <span>Pengalaman layanan berfokus pada desain</span>
          </div>

          <h2 class="section-title mt-5">
            Premium tidak harus mencolok.
          </h2>

          <p class="body-muted mt-5 max-w-2xl">
            Peningkatan terbesar di sini bukan hanya soal jarak antar elemen yang lebih rapi atau kartu yang lebih baik.
            Tetapi keseluruhan pengalaman kini terasa lebih terstruktur, lebih dapat dipercaya,
            dan jauh lebih mendekati sesuatu yang benar-benar ingin digunakan oleh pengguna.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="soft-card p-5">
              <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
                <UIcon name="i-lucide-badge-check" class="h-5 w-5" />
              </div>
              <p class="text-base font-semibold text-neutral-900">Sinyal kepercayaan lebih jelas</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Hierarki yang lebih baik dan tampilan yang lebih meyakinkan.
              </p>
            </div>

            <div class="soft-card p-5">
              <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-success-soft)] text-[var(--tt-success)]">
                <UIcon name="i-lucide-clock-3" class="h-5 w-5" />
              </div>
              <p class="text-base font-semibold text-neutral-900">Pengambilan keputusan lebih cepat</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Perbandingan layanan dan alur pemesanan yang lebih ringkas.
              </p>
            </div>
          </div>

          <NuxtLink
            to="/services"
            class="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-accent)] px-5 py-3 text-sm font-medium text-white"
          >
            <span>Jelajahi semua layanan</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>