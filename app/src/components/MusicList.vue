<script setup>
import AlbumList from '../components/AlbumList.vue'
const albums = [
  {
    name: 'The College Dropout',
    img: '/src/albums/the college dropout.jpg',
    id: 1,
    stars: '',
    review: '',
  },
  { name: 'Late Registration', img: '/src/albums/late registration.jpg' },
  { name: 'Graduation', img: '/src/albums/graduation.jpg' },
  { name: '808s & Heartbreak', img: '/src/albums/808s and heartbreak.webp' },
  { name: 'Watch the Throne', img: '/src/albums/watch the throne.jpg' },
  { name: 'MBDTF', img: '/src/albums/mbdtf.jpg' },
  { name: 'The Life of Pablo', img: '/src/albums/the life of pablo.jpg' },
  { name: 'Ye', img: '/src/albums/ye.jpg' },
  { name: 'Kids See Ghosts', img: '/src/albums/kids see ghosts.png' },
  { name: 'Jesus is King', img: '/src/albums/jesus is king.png' },
  { name: 'Donda', img: '/src/albums/donda.jpg' },
  { name: 'Vultures 1', img: '/src/albums/vultures 1.webp' },
  { name: 'Vultures 2', img: '/src/albums/vultures 2.png' },
]
</script>

<template>
  <main>
    <div class="container justify-end flex flex-wrap items-center h-screen">
      <!--       <AlbumList v-for="album in albums" :key="album.name" :album="album" />
    </div>
    <div>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </div>
    <div>
      <h1>Album Rating</h1> -->
    </div>
  </main>
</template>

<style scoped></style>
