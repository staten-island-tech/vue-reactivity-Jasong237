<script setup>
defineProps({
  album: Object,
})
</script>

<template>
  <div class="card max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-50" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>Some extra text if needed</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
        Review
      </button>
    </div>
  </div>
</template>
