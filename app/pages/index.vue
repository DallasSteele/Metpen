<script setup lang="ts">
useSeoMeta({
  title: 'Tidy Tidys',
  description: 'Elegant home services, booking, and account management.'
})
</script>

<template>
  <div>
    <RevealBlock>
      <HeroSection />
    </RevealBlock>

    <RevealBlock>
      <TrustStrip />
    </RevealBlock>

    <RevealBlock>
      <FeaturedServicesCarousel />
    </RevealBlock>

    <RevealBlock>
      <FeatureGrid />
    </RevealBlock>

    <RevealBlock>
      <TestimonialsMarquee />
    </RevealBlock>

    <RevealBlock>
      <EditorialShowcase />
    </RevealBlock>
  </div>
</template>