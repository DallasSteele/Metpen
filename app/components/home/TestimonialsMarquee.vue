<script setup lang="ts">
const testimonials = [
  {
    quote: 'The new version feels calmer, cleaner, and instantly more trustworthy.',
    user: {
      name: 'Rachel Tan',
      description: 'Premium member',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'Booking is finally starting to feel like a real product instead of a wireframe.',
    user: {
      name: 'Kevin Wong',
      description: 'Returning customer',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'The service pages now have enough structure to actually support growth later.',
    user: {
      name: 'Amelia Hart',
      description: 'Operations lead',
      avatar: {
        src: '/images/avatars/demo-user.jpg',
        loading: 'lazy'
      }
    }
  },
  {
    quote: 'This already feels premium enough to pitch internally.',
    user: {
      name: 'Noah Lee',
      description: 'Product reviewer',
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
        <p class="eyebrow">Social proof</p>
        <h2 class="section-title mt-4">A little movement, a lot more life.</h2>
        <p class="body-muted mt-4">
          This section makes the homepage feel less static and more like a living product.
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