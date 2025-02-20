<script setup>
const props = defineProps({
  album: Object,
  name: String,
  id: Number,
  img: String,
  stars: Number,
  review: String,
})
</script>

<template>
  <div class="card rounded shadow-lg items-center justify-around border-4 border-emerald-500 m-4 p-4 w-screen">
    <img class="w-50 m-10" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>Your Review: {{ album.review }}</p>
      <p>{{ album.stars }} Stars Given</p>
      <slot> </slot>
    </div>
  </div>
</template>
