<template>
  <div></div>
</template>

<script>
import { reactive, watch } from 'vue'

import overlydedicated from '@/assets/albums/overlydedicated.jpg'
import section80 from '@/assets/albums/section80.jpg'
import gkmc from '@/assets/albums/gkmc.jpg'
import gkmcd from '@/assets/albums/gkmcd.jpg'
import tpab from '@/assets/albums/tpab.jpg'
import uu from '@/assets/albums/ntitled.jpg'
import damn from '@/assets/albums/damn.jpg'
import bp from '@/assets/albums/bp.jpg'
import mmatbs from '@/assets/albums/mmatbs.jpg'
import gnx from '@/assets/albums/gnx.jpg'
import nls from '@/assets/albums/nls.jpg'

export function useAlbums() {
  const storedAlbums = JSON.parse(sessionStorage.getItem('albums')) || []

  const albums = reactive(
    storedAlbums.length
      ? storedAlbums.sort((a, b) => a.id - b.id)
      : [
          {
    name: 'Overly Dedicated',
    id: '1',
    img: overlydedicated,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Section.80',
    id: '2',
    img: section80,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Good Kid, M.A.A.D City',
    id: '3',
    img: gkmc,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Good Kid, M.A.A.D City (Deluxe)',
    id: '4',
    img: gkmcd,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'To Pimp a Butterfly',
    id: '5',
    img: tpab,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'untitled unmastered.',
    id: '6',
    img: uu,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'DAMN.',
    id: '7',
    img: damn,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Black Panther: The Album',
    id: '8',
    img: bp,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Mr Morale & the Big Steppers',
    id: '9',
    img: mmatbs,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'GNX',
    id: '10',
    img: gnx,
    desc: '',
    stars: 0,
    review: '',
  },
  {
    name: 'Not Like Us',
    id: '11',
    img: nls,
    desc: '',
    stars: 0,
    review: '',
  },
        ]
  )

  return { albums }
}
</script>

<style lang="scss" scoped></style>
