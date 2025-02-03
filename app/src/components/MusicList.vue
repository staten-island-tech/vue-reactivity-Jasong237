<script setup>
import AlbumList from '../components/AlbumList.vue'
const albums = [
  { name: 'Album 1', img: 'hello' },
  { name: 'Album 2', img: 'hello' },
  { name: 'Album 1', img: 'hello' },
  { name: 'Album 2', img: 'hello' },
  { name: 'Album 1', img: 'hello' },
  { name: 'Album 2', img: 'hello' },
]
</script>

<template>
  <main>
    <div
      class="container w-full h-full justify-center max-w-md flex items-center flex-col flex-wrap"
    >
      <AlbumList v-for="album in albums" :key="album.name" :album="album" />
    </div>
    <div>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </div>
    <div>
      <h1>Album Rating</h1>
    </div>
  </main>
</template>

<style scoped></style>
