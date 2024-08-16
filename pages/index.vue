<template>
	<Hero />
	<HomeCards />
	<JobListings :limit="3" :showButton="true" />
</template>

<script setup>
definePageMeta({
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