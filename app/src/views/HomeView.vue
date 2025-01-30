<script setup>
import LogIn from '../components/LoginTest.vue'
import AnimalCard from '../components/AnimalCard.vue'
const animals = [{ name: 'capybara' }, { name: 'bat' }]
</script>

<template>
  <main>
    <LogIn message="hello world" :count="5"><h1>Hello Jason</h1></LogIn>
    <AnimalCard v-for="animal in animals" :key="animal.name" :animal="animal" />
    <div>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </div>
  </main>
</template>

<style scoped></style>
