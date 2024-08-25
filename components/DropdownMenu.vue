<script setup>
import vue from '@/assets/icons/vue.svg';
import nuxt from '@/assets/icons/nuxt.svg';
import next from '@/assets/icons/next.svg';
import react from '@/assets/icons/react.svg';
const preventDefault = (e) => e.preventDefault();
</script>
<template>
	<div class='flex mx-2'>
		<div class='group relative inline-block text-left'>
			<button
				class='p-2 text-white rounded-md flex items-center'>
				More <sub class='leading-3 text-2xl ml-1'>&#129171;</sub>
			</button>
			<div class="hidden group-hover:block overflow-hidden origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn">
				<a
					href='https://vue-mongodb.vercel.app' target="_blank"
					class='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
					<img class="inline-block h-5 mb-1 mr-1" :src="vue" alt="Vue" /> Vue
				</a>
				<a
					href='https://react-mongodb.vercel.app' target="_blank"
					class='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
					<img class="inline-block h-5 mb-1 mr-1" :src="react" alt="React" /> React
				</a>
				<a
					href='' @click="preventDefault" disabled
					class='block px-4 py-2 text-gray-300 hover:bg-gray-100'>
					<img class="inline-block h-5 mb-1 mr-1" :src="nuxt" alt="Nuxt" /> Nuxt
				</a>
				<a
					href='https://next-jobs-mongodb.vercel.app' target="_blank"
					class='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
					<img class="inline-block h-5 mb-1 mr-1" :src="next" alt="Next" /> Next
				</a>
			</div>
		</div>
	</div>
</template>