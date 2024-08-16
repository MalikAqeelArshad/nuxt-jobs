<script setup>
import logo from '@/assets/img/logo.svg';

const isActiveLink = (routePath) => {
  const route = useRoute();
  const isActive = route.path === routePath;
  return `${isActive ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black px-3 py-2 rounded-md`;
};
</script>

<template>
  <nav class="bg-green-500 border-b border-green-400 sticky top-0 z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <NuxtLink to="/" class="flex flex-shrink-0 items-center mr-4">
            <img class="h-10 w-auto" :src="logo" alt="Nuxt Jobs" />
            <span class="hidden sm:block text-white text-2xl font-bold ml-2">Nuxt Jobs</span>
          </NuxtLink>
          <div class="sm:ml-auto">
            <div class="flex space-x-2">
              <NuxtLink to="/" :class="isActiveLink('/')">Home</NuxtLink>
              <NuxtLink to="/jobs" :class="isActiveLink('/jobs')">Jobs</NuxtLink>
              <NuxtLink to="/jobs/add" :class="isActiveLink('/jobs/add')">Add Job</NuxtLink>
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
