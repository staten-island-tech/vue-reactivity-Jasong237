<script setup>
import AlbumList from '../components/AlbumList.vue'
const albums = [{ name: 'Album 1' }, { name: 'Album 2' }]
</script>

<template>
  <main>
    <AlbumList v-for="album in albums" :key="album.name" :album="album" />
    <div>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </div>
  </main>
</template>

<style scoped></style>
