<template>
  <ClassesLayout
    class="classes"
    :heading="heading"
    :navList="navList"
  >
  <slot/>
  </ClassesLayout>
</template>>

<script>
import ClassesLayout from '@/components/admin/classes/layout'
import navList from './assets/data/navList'

export default {
  name: 'classes',
  components: { ClassesLayout },
  data () {
    return {
      heading: '내 클래스',
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) }))
    }
  }
}
</script>

