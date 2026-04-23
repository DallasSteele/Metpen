<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Profile - Tidy Tidys',
  description: 'Manage your account profile and preferences.'
})

const toast = useToast()
const { data: me } = await useFetch('/api/me')

function handleSave() {
  toast.add({
    title: 'Profile saved',
    description: 'Your changes were saved in demo mode.',
    icon: 'i-lucide-check-circle-2',
    color: 'success'
  })
}
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Account"
      title="Profile"
      description="A cleaner account page with clearer identity and preferences."
    />

    <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div class="soft-card p-6">
        <div class="flex items-center gap-4">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-neutral-900 text-lg font-semibold text-white">
            {{ me?.name?.charAt(0) || 'R' }}
          </div>
          <div>
            <p class="text-xl font-semibold text-neutral-900">{{ me?.name }}</p>
            <p class="mt-1 text-sm text-neutral-500">{{ me?.memberSince }}</p>
          </div>
        </div>

        <div class="mt-6 space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Email</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.email }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Phone</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.phone }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">City</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.city }}</p>
          </div>
        </div>
      </div>

      <div class="soft-card p-6">
        <p class="text-lg font-semibold text-neutral-900">Preferences</p>
        <p class="mt-2 text-sm leading-6 text-neutral-600">
          This area will later connect to real user settings and saved addresses.
        </p>

        <div class="mt-6 grid gap-5">
          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Full name</label>
            <input
              :value="me?.name"
              type="text"
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Preferred address</label>
            <textarea
              rows="4"
              :value="me?.preferredAddress"
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Preferred phone number</label>
            <input
              :value="me?.phone"
              type="text"
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none"
            />
          </div>

          <button
            class="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white"
              @click="handleSave"
              >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>