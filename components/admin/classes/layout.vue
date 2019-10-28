<template>
  <classes-layout
    :heading="heading"
    :nav-list="navList"
  >
    <nuxt-child/>
  </classes-layout>
</template>

<script>
import ClassesLayout from '@/components/admin/layout-sub-2'
import navList from '@/css/teaching/classes/assets/navList'
export default {
  name: 'layout-classes',
  data() {
    return {
      heading: `내 클래스<span>수업 시간 15분 전부터 수업 입장 가능합니다.</span>`,
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) }))
    }
  },
  components: { ClassesLayout }
}
</script>
