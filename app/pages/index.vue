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
      <StatsStrip />
    </RevealBlock>

    <RevealBlock>
      <TrustStrip />
    </RevealBlock>

    <RevealBlock>
      <ServiceCategoryCards />
    </RevealBlock>

    <RevealBlock>
      <FeaturedServicesCarousel />
    </RevealBlock>

    <RevealBlock>
      <HowItWorksCards />
    </RevealBlock>

    <RevealBlock>
      <BundleCards />
    </RevealBlock>

    <RevealBlock>
      <FeatureGrid />
    </RevealBlock>

    <RevealBlock>
      <InsightCards />
    </RevealBlock>

    <RevealBlock>
      <TestimonialsMarquee />
    </RevealBlock>

    <RevealBlock>
      <EditorialShowcase />
    </RevealBlock>
  </div>
</template>