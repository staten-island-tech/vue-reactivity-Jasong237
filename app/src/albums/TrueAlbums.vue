<template>
  <div></div>
</template>

<script>
import { reactive, watch, onMounted } from 'vue'

export function useAlbums() {
  const storedAlbums = JSON.parse(localStorage.getItem('albums')) || []

  // Sort the albums by the 'id' field before setting them in reactive
  const albums = reactive(
    storedAlbums.length
      ? storedAlbums.sort((a, b) => a.id - b.id) // Sorting albums by id in ascending order
      : [
          {
            name: 'Overly Dedicated',
            id: '1',
            img: '/src/albums/overlydedicated.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Section.80',
            id: '2',
            img: '/src/albums/section80.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City',
            id: '3',
            img: '/src/albums/gkmc.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City (Deluxe)',
            id: '4',
            img: '/src/albums/gkmcd.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'To Pimp a Butterfly',
            id: '5',
            img: '/src/albums/tpab.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'untitled unmastered.',
            id: '6',
            img: '/src/albums/uu.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'DAMN.',
            id: '7',
            img: '/src/albums/damn.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Black Panther: The Album',
            id: '8',
            img: '/src/albums/bp.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Mr Morale & the Big Steppers',
            id: '9',
            img: '/src/albums/mmatbs.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'GNX',
            id: '10',
            img: '/src/albums/gnx.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Not Like Us',
            id: '11',
            img: '/src/albums/nls.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
        ].sort((a, b) => a.id - b.id), // Sorting the default albums by id
  )

  watch(
    albums,
    () => {
      localStorage.setItem('albums', JSON.stringify(albums))
    },
    { deep: true },
  )

  return { albums }
}

/*, 
  { name: 'Graduation', id: '3', img: '/src/albums/graduation.jpg', stars: '', review: '' },
  {
    name: '808s & Heartbreak',
    id: '4',
    img: '/src/albums/808s and heartbreak.webp',
    stars: '',
    review: '',
  },
  {
    name: 'Watch the Throne',
    id: '5',
    img: '/src/albums/watch the throne.jpg',
    stars: '',
    review: '',
  },
  { name: 'MBDTF', id: '6', img: '/src/albums/mbdtf.jpg', stars: '', review: '' },
  {
    name: 'The Life of Pablo',
    id: '7',
    img: '/src/albums/the life of pablo.jpg',
    stars: '',
    review: '',
  },
  { name: 'Ye', id: '8', img: '/src/albums/ye.jpg', stars: '', review: '' },
  {
    name: 'Kids See Ghosts',
    id: '9',
    img: '/src/albums/kids see ghosts.png',
    stars: '',
    review: '',
  },
  { name: 'Jesus is King', id: '10', img: '/src/albums/jesus is king.png', stars: '', review: '' },
  { name: 'Donda', id: '11', img: '/src/albums/donda.jpg', stars: '', review: '' },
  { name: 'Vultures 1', id: '12', img: '/src/albums/vultures 1.webp', stars: '', review: '' },
  { name: 'Vultures 2', id: '13', img: '/src/albums/vultures 2.png', stars: '', review: '' }, */
</script>

<style lang="scss" scoped></style>
