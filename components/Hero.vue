<script setup>
defineProps({
  title: {
    type: String,
    default: 'Become a Nuxt Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Nuxt job that fits your skills and needs',
  },
});
</script>

<template>
  <section class="bg-green-500 py-10">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
