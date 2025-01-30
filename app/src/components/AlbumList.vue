<script setup>
defineProps({
  album: Object,
})
</script>

<template>
  <div>
    <h2>{{ album.name }}</h2>
  </div>
</template>
