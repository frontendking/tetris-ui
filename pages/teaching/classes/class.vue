<template>
  <layoutClass
    :navList="navList"
  />
</template>

<script>
import layoutClass from '@/components/admin/classes/class/layout'
import navList from './class/assets/navList'

export default {
  components: { layoutClass },
  data () {
    return {
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) })),
    }
  },
}
</script>

