<template>
  <Menubar :model="items" class="shadow-2 mb-4">
    <template #start>
      <img alt="logo" src="../assets/Logo.png" height="40" class="mr-2" />
      <span class="text-xl font-semibold">Nano Garden</span>
    </template>
  </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar'

const items = [
  { label: 'Home', to: '/' },
  { label: 'Chi siamo', to: '/about' },
  { label: 'Contatti', to: '/contact' },
]
</script>
