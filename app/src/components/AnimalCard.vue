<script setup>
defineProps({
  animal: Object,
})
</script>

<template>
  <div>
    <h2>{{ animal.name }}</h2>
    <img :src="animal" alt="" />
  </div>
</template>

<style></style>
