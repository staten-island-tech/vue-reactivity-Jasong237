<template>
  <div class="w-[400px] border-4 border-emerald-500 p-4">
    <h1 class="text-2xl">My Profile</h1>
    <img class="w-25" src="/defaultpfp.png" />
    <p class="text-lg text-emerald-500">
      My Best Album(s): {{ bestAlbums }} (Rating: {{ highestStars }})
    </p>
    <p class="text-lg text-red-500">
      My Worst Album(s): {{ worstAlbums }} (Rating: {{ lowestStars }})
    </p>
    <p class="mb-8">Total Albums Reviewed: {{ reviewed }}</p>
    <p class="mb-8">Average Review Rating: {{ total }}</p>
  </div>
</template>

<script setup>
import AlbumList from '../components/AlbumList.vue'
import { useAlbums } from '../components/TrueAlbums.vue'

let total = 0
let numbers = 0
let reviewed = 0
let highestStars = 0
let lowestStars = 5
let bestAlbums = []
let worstAlbums = []
let unreviewedAlbums = []

const { albums } = useAlbums()
const starValues = []
function countStars() {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].stars !== 0) {
      starValues.push(albums[i].stars)
      reviewed++
    }
  }
  console.log(starValues)

  starValues.forEach((starValue) => {
    total = starValue + total
    numbers++
  })
  console.log(total)
  total = total / numbers
  console.log(total)
}
countStars()
findBest()

function findBest() {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].stars > highestStars) {
      highestStars = albums[i].stars
      bestAlbums = [albums[i].name]
    } else if (albums[i].stars === highestStars) {
      bestAlbums.push(albums[i].name)
    }
  }
  console.log('Best Album:', bestAlbums)
}

findBest()

function findWorst() {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].stars === 0) {
      unreviewedAlbums.push(albums[i].name)
    } else if (albums[i].stars < lowestStars) {
      lowestStars = albums[i].stars
      worstAlbums = [albums[i].name]
    } else if (albums[i].stars === lowestStars) {
      worstAlbums.push(albums[i].name)
    }
  }
  console.log('Worst Album:', worstAlbums)
}

findWorst()
</script>

<style lang="scss" scoped></style>
