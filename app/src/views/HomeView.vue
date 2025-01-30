<script setup>
/* import LogIn from '../components/LoginTest.vue'
import AnimalCard from '../components/AnimalCard.vue'
 */ import AlbumList from '../components/AlbumList.vue'
/* const animals = [{ name: 'capybara' }, { name: 'bat' }] */
const albums = [{ name: 'Hey' }, { name: 'Yay' }]
</script>

<template>
  <main>
    <!--     <LogIn message="hello world" :count="5"><h1>Hello Jason</h1></LogIn>
    <AnimalCard v-for="animal in animals" :key="animal.name" :animal="animal" /> -->
    <AlbumList v-for="album in albums" :key="album.name" :album="album" />
    <div>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </div>
  </main>
</template>

<style scoped></style>
