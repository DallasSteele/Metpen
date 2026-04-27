<script setup lang="ts">
const topic = ref('all')
const { data: faqs } = await useFetch('/api/faqs')

const filteredFaqs = computed(() => {
  if (topic.value === 'all') return faqs.value || []
  return (faqs.value || []).filter(item => item.topic === topic.value)
})

useSeoMeta({
  title: 'FAQ - Tidy Tidys',
  description: 'Pertanyaan yang sering diajukan dan panduan bantuan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-4xl">
      <PageHeading
        eyebrow="FAQ"
        title="Pertanyaan yang sering diajukan"
        description="Pusat bantuan khusus menambah kedalaman konten dan kepercayaan."
      />

      <div class="mt-8 max-w-sm">
        <label class="mb-2 block text-sm font-medium text-neutral-700">Filter berdasarkan topik</label>
        <USelect
          v-model="topic"
          :items="[
            { label: 'Semua topik', value: 'all' },
            { label: 'Pemesanan', value: 'booking' },
            { label: 'Harga', value: 'pricing' },
            { label: 'Layanan', value: 'services' },
            { label: 'Bisnis', value: 'business' },
            { label: 'Akun', value: 'account' }
          ]"
        />
      </div>

      <UCard class="mt-10 rounded-3xl">
        <UAccordion :items="filteredFaqs" />
      </UCard>
    </div>
  </section>
</template>