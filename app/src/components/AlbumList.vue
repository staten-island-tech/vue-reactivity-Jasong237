<script setup>
const props = defineProps({
  album: Object,
})
</script>

<template>
  <div
    class="card rounded shadow-lg min-w-1/4 items-center justify-around border-4 border-emerald-500 m-4 p-2"
  >
    <img class="w-50 m-10" :src="album.img" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ album.name }}</div>
      <p>{{ album.desc }}</p>
      <slot> </slot>
    </div>
  </div>
</template>
