<script setup>
import { ref } from 'vue'
import MyReviews from '@/views/MyReviews.vue'
import router from '../router/index'

let currentAlbum = ref(0)

const props = defineProps({
  album: Object,
  name: String,
  id: Number,
  img: String,
  stars: Number,
  review: String,
})

function review() {
  currentAlbum = ref('props.album.id')
  console.log(currentAlbum)
  router.push('/CurrentReview')
  return currentAlbum
}
</script>

<template>
  <div class="card max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-25" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>Some extra text if needed</p>
      <button
        @click="review"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
      >
        Review
      </button>
    </div>
  </div>
</template>
