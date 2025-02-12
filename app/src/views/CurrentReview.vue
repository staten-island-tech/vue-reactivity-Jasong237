<script setup>
import { ref, onMounted } from 'vue';

const id = ref('');

onMounted(() => {
  // Get the value of id from localStorage when the component is mounted
  id.value = localStorage.getItem('selectedAlbumId') || 'No ID Found';
  console.log(id.value); // Debugging line
});
</script>

<template>
  <div>
    <h1 class="reviewcard">{{ id }}</h1>
    <div class="reviewimg"></div>
    <form></form>
    <button></button>
  </div>
</template>