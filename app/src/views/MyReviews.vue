<script setup>
import ReviewList from '../components/ReviewList.vue'
import { useAlbums } from '../albums/TrueAlbums.vue'

const { albums } = useAlbums()

const filteredAlbums = albums.filter((album) => album.stars !== 0)
</script>

<template>
  <div>
    <h1>My Reviews</h1>
    <ReviewList v-for="album in filteredAlbums" :key="album.id" :album="album"> </ReviewList>
  </div>
</template>

<style lang="scss" scoped></style>
