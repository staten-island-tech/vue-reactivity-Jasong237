<script setup>
import { ref, onMounted } from 'vue'
import { albums } from '../albums/albums.js'
import AlbumList from '@/components/AlbumList.vue'

const currentArray = ref([])

const id = ref('')

onMounted(() => {
  id.value = localStorage.getItem('selectedAlbumId') || 'No ID Found'
  console.log('ID from localStorage:', id.value)

  albums.forEach((album) => {
    console.log('Checking album with id:', album.id)
    if (album.id === id.value) {
      syncArray(album)
      console.log('Matched album:', album)
    } else {
      console.log('hello')
    }
  })
})

function syncArray(album) {
  currentArray.value.push(album)
  console.log('Updated currentArray:', currentArray.value)
}
</script>

<template>
  <div>
    <div v-for="(album, index) in currentArray" :key="index">
      <p>Name: {{ album.name }}</p>
      <p>ID: {{ album.id }}</p>
      <p>Stars: {{ album.stars }}</p>
      <p>Review: {{ album.review }}</p>
      <img class="w-25" :src="album.img" alt="Album image" />
    </div>

    <div class="reviewimg"></div>
    <form></form>
    <button></button>
  </div>
</template>
