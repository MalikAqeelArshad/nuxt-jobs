<script setup>
const { $toast } = useNuxtApp();

const props = defineProps({
  limit: {
    type: Number,
    default: 0,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

const apiUrl = `/api/jobs${props.limit ? ('?take='+props.limit) : ''}`;
try {
  state.jobs = await useApiFetch(apiUrl);
} catch (e) {
  // console.log('error', e);
  $toast.error(e.statusCode+' '+e.statusText);
} finally {
  state.isLoading = false;
}
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <img src="@/assets/icons/spinner.svg" alt="Loading..." class="m-auto h-40">
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        <JobListing v-for="job in state.jobs" :key="job._id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <NuxtLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</NuxtLink
    >
  </section>
</template>
