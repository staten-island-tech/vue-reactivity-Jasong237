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
  <div class="card rounded overflow-hidden shadow-lg min-w-100 items-center m-4">
    <img class="w-25" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>{{ album.desc }}</p>
      <slot> </slot>
    </div>
  </div>
</template>
