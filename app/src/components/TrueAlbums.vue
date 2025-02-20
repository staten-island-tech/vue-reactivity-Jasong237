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
            img: 'app\src\assets\albums\overlydedicated.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Section.80',
            id: '2',
            img: 'app\public\albums\section80.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City',
            id: '3',
            img: '../app/albums/gkmc.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City (Deluxe)',
            id: '4',
            img: '../app/public/albums/gkmcd.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'To Pimp a Butterfly',
            id: '5',
            img: '../app/public/albums/tpab.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'untitled unmastered.',
            id: '6',
            img: '../app/public/albums/uu.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'DAMN.',
            id: '7',
            img: '../app/public/albums/damn.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Black Panther: The Album',
            id: '8',
            img: '../app/public/albums/bp.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Mr Morale & the Big Steppers',
            id: '9',
            img: '../app/public/albums/mmatbs.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'GNX',
            id: '10',
            img: '../app/public/albums/gnx.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Not Like Us',
            id: '11',
            img: '../app/public/albums/nls.jpg',
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
