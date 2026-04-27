<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const toast = useToast()
const { data: addresses } = await useFetch('/api/addresses')

function handleAdd() {
  toast.add({
    title: 'Mode demo',
    description: 'Fitur tambah alamat akan dihubungkan pada tahap berikutnya.',
    icon: 'i-lucide-map-pinned',
    color: 'primary'
  })
}

useSeoMeta({
  title: 'Alamat - Tidy Tidys',
  description: 'Alamat tersimpan untuk pemesanan yang lebih cepat.'
})
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Alamat"
      title="Alamat layanan tersimpan"
      description="Halaman ini membuat pemesanan berulang terasa lebih nyata."
    />

    <div class="flex justify-end">
      <UButton color="primary" icon="i-lucide-plus" @click="handleAdd">
        Tambah alamat
      </UButton>
    </div>

    <div class="grid gap-6 xl:grid-cols-2">
      <AddressCard
        v-for="address in addresses"
        :key="address.id"
        :address="address"
      />
    </div>
  </div>
</template>