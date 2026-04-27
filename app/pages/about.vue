<script setup lang="ts">
useSeoMeta({
  title: 'Tentang - Tidy Tidys',
  description: 'Tentang merek dan filosofi layanan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-5xl">
      <PageHeading
        eyebrow="Tentang"
        title="Pengalaman layanan yang lebih bersih melalui desain"
        description="Halaman ini membuat produk terasa lebih kuat secara merek dan lebih lengkap."
      />

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <UCard class="rounded-3xl">
          <template #header>
            <p class="text-lg font-semibold text-neutral-900">Arah kami</p>
          </template>
          <p class="text-sm leading-7 text-neutral-600">
            Tidy Tidys 2.0 dibangun ulang agar terasa lebih tenang, lebih jelas, dan lebih premium — mengurangi kerumitan sekaligus meningkatkan kepercayaan.
          </p>
        </UCard>

        <UCard class="rounded-3xl">
          <template #header>
            <p class="text-lg font-semibold text-neutral-900">Hal yang penting</p>
          </template>
          <p class="text-sm leading-7 text-neutral-600">
            Penemuan layanan yang lebih baik, halaman detail yang lebih kuat, alur pemesanan yang lebih jelas, dan antarmuka keseluruhan yang lebih tepercaya.
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>