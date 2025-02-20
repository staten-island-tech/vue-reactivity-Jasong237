<script setup>
import ReviewList from '../components/ReviewList.vue'
import { useAlbums } from '../components/TrueAlbums.vue'

const { albums } = useAlbums()

const filteredAlbums = albums.filter((album) => album.stars !== 0)
</script>

<template>
  <div class="flex flex-wrap gap-4 justify-center w-full">
    <ReviewList v-for="album in filteredAlbums" :key="album.id" :album="album" class="mb-4">
    </ReviewList>
  </div>
</template>

<style lang="scss" scoped></style>
