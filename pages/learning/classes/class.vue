<template>
  <classDetail
    :navList="navList"
  />
</template>

<script>
import classDetail from '@/pages/admin/classes/class/layout'
import navList from './class/assets/navList'

export default {
  components: { classDetail },
  data () {
    return {
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) }))
    }
  }
}
</script>

