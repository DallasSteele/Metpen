<script setup lang="ts">
const testimonials = [
  {
    quote: 'Versi baru terasa lebih tenang, lebih rapi, dan langsung lebih dapat dipercaya.',
    user: {
      name: 'Rachel Tan',
      description: 'Anggota premium',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'Proses booking akhirnya terasa seperti produk nyata, bukan sekadar wireframe.',
    user: {
      name: 'Kevin Wong',
      description: 'Pelanggan lama',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'Halaman layanan sekarang sudah cukup terstruktur untuk mendukung pertumbuhan ke depan.',
    user: {
      name: 'Amelia Hart',
      description: 'Lead operasional',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'Ini sudah terasa cukup premium untuk dipresentasikan secara internal.',
    user: {
      name: 'Noah Lee',
      description: 'Reviewer produk',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Bukti sosial</p>
        <h2 class="section-title mt-4">Sedikit gerakan, jauh lebih hidup.</h2>
        <p class="body-muted mt-4">
          Bagian ini membuat halaman utama terasa lebih dinamis dan hidup.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <UMarquee
          pause-on-hover
          :overlay="false"
          :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
        >
          <UPageCard
            v-for="(testimonial, index) in testimonials"
            :key="`row-1-${index}`"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{
              root: 'rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]',
              description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-sm leading-6 text-neutral-600'
            }"
            class="w-72 shrink-0"
          >
            <template #footer>
              <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
            </template>
          </UPageCard>
        </UMarquee>

        <UMarquee
          pause-on-hover
          reverse
          :overlay="false"
          :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
        >
          <UPageCard
            v-for="(testimonial, index) in testimonials"
            :key="`row-2-${index}`"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{
              root: 'rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]',
              description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-sm leading-6 text-neutral-600'
            }"
            class="w-72 shrink-0"
          >
            <template #footer>
              <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
            </template>
          </UPageCard>
        </UMarquee>
      </div>
    </div>
  </section>
</template>