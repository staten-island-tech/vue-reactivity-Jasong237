<script setup>
import AlbumList from '../components/AlbumList.vue'
import { useAlbums } from '../albums/TrueAlbums.vue'

const { albums } = useAlbums()

const filteredAlbums = albums.filter(album => album.stars !== 0)
</script>

<template>
  <div>
      <h1>My Reviews</h1>
    <AlbumList v-for="album in filteredAlbums" :key="album.id" :album="album">
    </AlbumList>
    <h1>MyReviews</h1>
  </div>
</template>



<style lang="scss" scoped></style>
