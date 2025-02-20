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
            img: 'app\src\assets\albums\section80.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City',
            id: '3',
            img: 'app\src\assets\albums\gkmc.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Good Kid, M.A.A.D City (Deluxe)',
            id: '4',
            img: 'app\src\assets\albums\gkmcd.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'To Pimp a Butterfly',
            id: '5',
            img: 'app\src\assets\albums\tpab.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'untitled unmastered.',
            id: '6',
            img: 'app\src\assets\albums\ntitled.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'DAMN.',
            id: '7',
            img: 'app\src\assets\albums\damn.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Black Panther: The Album',
            id: '8',
            img: 'app\src\assets\albums\bp.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Mr Morale & the Big Steppers',
            id: '9',
            img: 'app\src\assets\albums\mmatbs.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'GNX',
            id: '10',
            img: 'app\src\assets\albums\gnx.jpg',
            desc: '',
            stars: 0,
            review: '',
          },
          {
            name: 'Not Like Us',
            id: '11',
            img: 'app\src\assets\albums\nls.jpg',
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
