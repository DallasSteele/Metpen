<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Sign in - Tidy Tidys',
  description: 'Access your account and manage bookings.'
})

const auth = useAuthStore()

const form = reactive({
  email: 'demo@tidytidys.com',
  password: 'password123'
})

function handleLogin() {
  auth.login()
  return navigateTo('/dashboard')
}
</script>

<template>
  <div class="grid min-h-screen lg:grid-cols-2">
    <div class="hidden bg-neutral-900 text-white lg:flex lg:flex-col lg:justify-between lg:p-10">
      <div>
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-neutral-900">
            TT
          </div>
          <div>
            <p class="text-sm font-semibold">Tidy Tidys</p>
            <p class="text-xs text-white/60">Frontend 2.0</p>
          </div>
        </div>

        <div class="mt-16 max-w-xl">
          <p class="text-xs uppercase tracking-[0.24em] text-white/50">Sign in experience</p>
          <h1 class="mt-5 text-5xl font-semibold tracking-tight">
            Clean access to a calmer booking product.
          </h1>
          <p class="mt-6 max-w-lg text-base leading-7 text-white/70">
            This version removes the noisy, generic template feel and replaces it with a sharper, more premium product entry point.
          </p>
        </div>
      </div>

      <div class="grid gap-4">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-medium">Cleaner hierarchy</p>
          <p class="mt-2 text-sm text-white/65">Less visual noise, more focus.</p>
        </div>
        <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-medium">Faster scanning</p>
          <p class="mt-2 text-sm text-white/65">More confidence in every step.</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center bg-[var(--tt-bg)] px-6 py-12">
      <div class="w-full max-w-md">
        <div class="mb-8 lg:hidden">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-semibold text-white">
              TT
            </div>
            <div>
              <p class="text-sm font-semibold text-neutral-900">Tidy Tidys</p>
              <p class="text-xs text-neutral-500">Frontend 2.0</p>
            </div>
          </NuxtLink>
        </div>

        <div class="soft-card p-8">
          <p class="eyebrow">Welcome back</p>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
            Sign in to continue
          </h1>
          <p class="mt-3 text-sm leading-6 text-neutral-600">
            Use the demo credentials already filled below to enter the dashboard.
          </p>

          <form class="mt-8 space-y-5" @submit.prevent="handleLogin">
            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Email address</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Password</label>
              <input
                v-model="form.password"
                type="password"
                class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Sign in
            </button>
          </form>

          <p class="mt-5 text-xs text-neutral-500">
            Demo mode only — real auth comes when backend integration starts.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>