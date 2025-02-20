<template>
  <div></div>
</template>

<script>
import { reactive, watch } from 'vue'

export function useAlbums() {
  const storedAlbums = JSON.parse(localStorage.getItem('albums')) || []

  const albums = reactive(
    storedAlbums.length
      ? storedAlbums.sort((a, b) => a.id - b.id) 
      : [
          {
            name: 'Overly Dedicated',
            id: '1',
            img: '../app/public/overlydedicated.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Section.80',
            id: '2',
            img: '../app/public/section80.jpg', 
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City',
            id: '3',
            img: '../app/public/gkmc.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City (Deluxe)',
            id: '4',
            img: '../app/public/gkmcd.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'To Pimp a Butterfly',
            id: '5',
            img: '../app/public/tpab.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'untitled unmastered.',
            id: '6',
            img: '../app/public/uu.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'DAMN.',
            id: '7',
            img: '../app/public/damn.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Black Panther: The Album',
            id: '8',
            img: '../app/public/bp.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Mr Morale & the Big Steppers',
            id: '9',
            img: '../app/public/mmatbs.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'GNX',
            id: '10',
            img: '../app/public/gnx.jpg', 
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Not Like Us',
            id: '11',
            img: '../app/public/nls.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
        ].sort((a, b) => a.id - b.id),
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
</script>

<style lang="scss" scoped></style>
