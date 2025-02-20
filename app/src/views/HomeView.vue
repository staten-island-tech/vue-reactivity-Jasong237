<script setup>
import router from '../router/index'
import AlbumList from '../components/AlbumList.vue'
import { ref } from 'vue'

import { useAlbums } from '../components/TrueAlbums.vue'

const { albums } = useAlbums()

console.log(albums)
console.log(albums[0].stars)
function review(album) {
  console.log('Review button clicked for album:', album.name)
  localStorage.setItem('selectedAlbumId', album.id)
  router.push('/CurrentReview')
}
</script>

<template>
  <main class="flex flex-wrap gap-4 justify-center items-center w-full">
    <AlbumList v-for="album in albums" :key="album.id" :album="album">
      <button
        @click="review(album)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
      >
        Review
      </button>
    </AlbumList>
  </main>
</template>

<style scoped>

</style>
