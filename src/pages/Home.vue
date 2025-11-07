<template>
  <div class="p-4">
    <!-- HERO -->
    <section class="text-center my-6">
      <h1 class="text-5xl font-bold mb-3">Benvenuto nel nostro sito</h1>
      <p class="text-lg mb-5 text-gray-600">
        Esplora, scopri e lasciati ispirare. Questa è la tua nuova esperienza digitale.
      </p>
      <Button
        label="Inizia ora"
        icon="pi pi-arrow-right"
        class="p-button-raised p-button-lg"
        @click="$router.push('/about')"
      />
    </section>

    <!-- FEATURES -->
    <section class="mt-8 grid justify-content-center">
      <Card v-for="feature in features" :key="feature.title" class="m-3 w-20rem hover:shadow-4 transition-shadow">
        <template #title>
          <i :class="['pi', feature.icon, 'text-3xl mb-2']"></i>
          <div class="text-xl font-semibold">{{ feature.title }}</div>
        </template>
        <template #content>
          <p class="text-gray-700">{{ feature.desc }}</p>
        </template>
      </Card>
    </section>

    <!-- CTA FINALE -->
    <section class="text-center mt-8 py-6 border-top-1 border-gray-200">
      <h2 class="text-3xl font-bold mb-2">Pronto per iniziare?</h2>
      <p class="text-lg mb-4 text-gray-600">Contattaci e realizziamo qualcosa di straordinario insieme.</p>
      <Button label="Contattaci" icon="pi pi-envelope" class="p-button-success p-button-rounded p-button-lg" @click="$router.push('/contact')" />
    </section>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'

const features = [
  { icon: 'pi-globe', title: 'Design moderno', desc: 'Layout pulito, chiaro e facilmente personalizzabile.' },
  { icon: 'pi-cog', title: 'Prestazioni elevate', desc: 'Ottimizzato con Vue 3 e Vite per massima velocità.' },
  { icon: 'pi-users', title: 'User friendly', desc: 'Esperienza utente fluida e accessibile su ogni dispositivo.' },
]
</script>

<style scoped>
.text-gray-600 { color: #6c757d; }
.text-gray-700 { color: #495057; }
section {
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
