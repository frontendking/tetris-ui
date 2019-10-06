<template>
  <ClassesLayout
    :heading="heading"
    :navList="navList"
  >
    <nuxt-child
      class="card-list"
    />
  </ClassesLayout>
</template>>

<script>
import ClassesLayout from '@/pages/admin/classes/layout'
import navList from './classes/assets/data/navList'

export default {
  name: 'learning-my-class',
  components: { ClassesLayout },
  data () {
    return {
      heading: '내 클래스',
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) }))
    }
  }
}
</script>

