<script setup>
import { ref, onMounted, reactive } from 'vue'
import router from '../router/index'
/* import { albums } from '../albums/albums.js' */
import AlbumList from '@/components/AlbumList.vue'

import { useAlbums } from '../albums/TrueAlbums.vue'

const { albums } = useAlbums()
const tempArray = reactive([])
console.log(albums[0].stars)
const currentArray = ref([])

const id = ref(0)
const otherNum = ref(0)

onMounted(() => {
  id.value = localStorage.getItem('selectedAlbumId') || 'No ID Found'
  console.log('ID from localStorage:', id.value)

  albums.forEach((album) => {
    console.log('Checking album with id:', album.id)
    if (album.id === id.value) {
      syncArray(album)
      console.log('Matched album:', album)
    } else {
      console.log('Incorrect!')
    }
  })
})

function syncArray(album) {
  currentArray.value.push(album)
  console.log('Updated currentArray:', currentArray.value)
}

const reviewText = ref('')
const selectedRating = ref(0)
/* function submitReview() {
  const albumIndex = currentArray.value.findIndex((album) => album.id === id.value)
  selectedRating.value = starAmt.value
  console.log('Review', reviewText.value)
  console.log('Hey', selectedRating.value)
  if (albumIndex !== -1) {
    console.log('yo', albumIndex)
    console.log('yo', id.value)

    albums[id.value].stars = selectedRating.value
    albums[id.value].review = reviewText.value
  }

  console.log('HEllo', albumIndex)
  albums.forEach((album) => {
    if (album.id !== id.value) {
      console.log('Jason', album)
    }
  })
  deleteAlbum()
  albums.push(...currentArray.value)
  console.log('Temp', tempArray)

  console.log('Test', albums)
  console.log('stars', albums[id.value].stars)
  console.log('Updated Album:', albums)
  reviewText.value = ''
  selectedRating.value = 0

  router.push('/')
} */

function submitReview() {
  const albumIndex = albums.findIndex(album => album.id === id.value)
  
  if (albumIndex !== -1) {
    albums[albumIndex].stars = starAmt.value
    albums[albumIndex].review = reviewText.value
  }

  // Update localStorage
  localStorage.setItem('albums', JSON.stringify(albums))

  // Clear form
  reviewText.value = ''
  starAmt.value = 0

    router.push('/')
}


const deleteAlbum = (index) => {
  albums.splice(index, 1)
}

const starAmt = ref(0)

function chooseStar1() {
  starAmt.value = 1
}
function chooseStar2() {
  starAmt.value = 2
}
function chooseStar3() {
  starAmt.value = 3
}
function chooseStar4() {
  starAmt.value = 4
}
function chooseStar5() {
  starAmt.value = 5
}
function star1() {
  return starAmt.value > 0 ? '/src/albums/filledstar.png' : '/src/albums/star.png'
}
function star2() {
  return starAmt.value > 1 ? '/src/albums/filledstar.png' : '/src/albums/star.png'
}
function star3() {
  return starAmt.value > 2 ? '/src/albums/filledstar.png' : '/src/albums/star.png'
}
function star4() {
  return starAmt.value > 3 ? '/src/albums/filledstar.png' : '/src/albums/star.png'
}
function star5() {
  return starAmt.value > 4 ? '/src/albums/filledstar.png' : '/src/albums/star.png'
}
</script>

<template>
  <div>
    <div v-for="album in currentArray" :key="album.id">
      <p>{{ album.name }}</p>
      <img class="w-25" :src="album.img" alt="Album image" />

      <div class="container flex justify-around space-x-4">
        <button @click="chooseStar1">
          <img :src="star1()" alt="star" class="w-6 h-6 mr-2" />
        </button>
        <button @click="chooseStar2">
          <img :src="star2()" alt="star" class="w-6 h-6 mr-2" />
        </button>
        <button @click="chooseStar3">
          <img :src="star3()" alt="star" class="w-6 h-6 mr-2" />
        </button>
        <button @click="chooseStar4">
          <img :src="star4()" alt="star" class="w-6 h-6 mr-2" />
        </button>
        <button @click="chooseStar5">
          <img :src="star5()" alt="star" class="w-6 h-6 mr-2" />
        </button>
      </div>
    </div>

    <form>
      <label for="review" class="block text-lg font-medium text-gray-700">Your Review</label>
      <textarea
        id="review"
        name="review"
        rows="6"
        class="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your review here"
        v-model="reviewText"
      ></textarea>
    </form>
    <div class="flex justify-center">
      <button
        @click="submitReview"
        type="submit"
        class="w-full bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit Review
      </button>
    </div>
  </div>
</template>
