<script setup lang="ts">
useSeoMeta({
  title: 'Support - Tidy Tidys',
  description: 'Help, support, and booking assistance.'
})

const faqItems = [
  {
    label: 'How do I create a booking?',
    icon: 'i-lucide-circle-help',
    content: 'Go to New Booking, select a service, pick a date and time, then confirm the request.'
  },
  {
    label: 'Can I edit my booking later?',
    icon: 'i-lucide-circle-help',
    content: 'In this mock version, the next layer would connect booking detail pages and edit actions.'
  },
  {
    label: 'Are the prices final?',
    icon: 'i-lucide-circle-help',
    content: 'Displayed prices are starting estimates for the current frontend prototype.'
  }
]
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-4xl">
      <PageHeading
        eyebrow="Support"
        title="Help and assistance"
        description="A support page makes the app feel more complete and service-ready."
      />

      <UCard class="mt-10 rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Frequently asked questions</p>
        </template>

        <UAccordion :items="faqItems" />
      </UCard>
    </div>
  </section>
</template>