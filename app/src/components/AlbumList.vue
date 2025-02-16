<script setup>
const props = defineProps({
  album: Object,
  name: String,
  id: Number,
  img: String,
  stars: Number,
  review: String,
})

/* function review() {
  currentAlbum = ref('props.album.name')
  console.log(currentAlbum)
  console.log()
  router.push('/CurrentReview')
  return currentAlbum
} */
</script>

<template>
  <div class="card max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-25" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>{{ album.desc }}</p>
      <slot> </slot>
    </div>
  </div>
</template>
