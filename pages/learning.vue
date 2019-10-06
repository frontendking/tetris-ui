<template>
  <admin
    id="learning"
    :heading="heading"
    :navList="navList"
  >
    <nuxt-child/>
  </admin>
</template>

<script>
import admin from '@/pages/admin/index'
import navList from '@/assets/data/navList.js'

export default {
  name: 'learning',
  layout: 'tutor',
  data () {
    return {
      heading: '배우기',
      navList,
    }
  },
  components: {
    admin,
  },
}
</script>
