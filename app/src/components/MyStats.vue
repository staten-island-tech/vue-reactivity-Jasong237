<script setup>
const props = defineProps({
  bestAlbums: String,
  worstAlbums: String,
  reviewed: Number,
  total: Number,
  bestStars: Number,
  worstStars: Number,
})
</script>

<template>
  <div class="card w-screen h-screen rounded shadow-lg border-emerald-500">
    <img class="w-25" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>{{ album.desc }}</p>
      <p>{{ album.stars }}</p>
      <slot> </slot>
    </div>
  </div>
</template>
