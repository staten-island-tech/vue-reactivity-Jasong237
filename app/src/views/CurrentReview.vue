<script setup>
import { ref, onMounted, reactive } from 'vue'
import router from '../router/index'
import AlbumList from '@/components/AlbumList.vue'
import { useAlbums } from '../components/TrueAlbums.vue'
import star from '@/assets/albums/star.png'
import filledstar from '@/assets/albums/filledstar.png'


const { albums } = useAlbums()
console.log(albums[0].stars)
const currentArray = ref([])
const id = ref(0)
const reviewText = ref('')
const selectedRating = ref(0)


onMounted(() => {
  id.value = sessionStorage.getItem('selectedAlbumId')
  console.log('ID from sessionStorage:', id.value)

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

function submitReview() {
  const albumIndex = albums.findIndex((album) => album.id === id.value)

  if (starAmt.value === 0){
    alert("Every album must be at least one star!")
    return
  }

  if (albumIndex !== -1) {
    albums[albumIndex].stars = starAmt.value
    albums[albumIndex].review = reviewText.value
  }

  sessionStorage.setItem('albums', JSON.stringify(albums))

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
  return starAmt.value > 0 ? filledstar : star
}
function star2() {
  return starAmt.value > 1 ? filledstar : star
}
function star3() {
  return starAmt.value > 2 ? filledstar : star
}
function star4() {
  return starAmt.value > 3 ? filledstar : star
}
function star5() {
  return starAmt.value > 4 ? filledstar : star
}
</script>

<template>
  <div class="border-4 border-emerald-500 p-4">
    <div v-for="album in currentArray" :key="album.id">
      <p class="text-2xl">{{ album.name }}</p>
      <img class="w-25" :src="album.img" alt="Album image" />

      <div class="container flex justify-around space-x-4">
        <button @click="chooseStar1">
          <img :src="star1()" alt="star" class="w-20 h-20 mr-2" />
        </button>
        <button @click="chooseStar2">
          <img :src="star2()" alt="star" class="w-20 h-20 mr-2" />
        </button>
        <button @click="chooseStar3">
          <img :src="star3()" alt="star" class="w-20 h-20 mr-2" />
        </button>
        <button @click="chooseStar4">
          <img :src="star4()" alt="star" class="w-20 h-20 mr-2" />
        </button>
        <button @click="chooseStar5">
          <img :src="star5()" alt="star" class="w-20 h-20 mr-2" />
        </button>
      </div>
    </div>

    <form>
      <label for="review" class="block text-lg font-medium text-gray-500">Your Review</label>
      <textarea
        id="review"
        name="review"
        rows="6"
        class="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder="Write your review here"
        v-model="reviewText"
      ></textarea>
    </form>
    <div class="flex justify-center">
      <button
        @click="submitReview"
        type="submit"
        class="w-full bg-emerald-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      >
        Submit Review
      </button>
    </div>
  </div>
</template>
