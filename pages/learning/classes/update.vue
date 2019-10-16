<template>
  <classDetail
    :navList="navList"
  />
</template>

<script>
import classDetail from '@/components/admin/classes/class/layout'
import navList from './update/assets/navList'

export default {
  components: { classDetail },
  data () {
    return {
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) }))
    }
  }
}
</script>

