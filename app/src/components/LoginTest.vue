<template>
  <div class="about">
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
defineProps({
  message: String,
  count: Number,
})
</script>

<style></style>
