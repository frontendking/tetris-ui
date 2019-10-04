<template>
  <teaching
    :heading="heading"
  />
</template>

<script>
import TheTutorLocalNav from '@/components/class/TheTutorLocalNav'
import teaching from '@/pages/teaching'
export default {
  name: 'learning',
  layout: 'tutor',
  data () {
    return {
      heading: '배우기',
    }
  },
  components: {
    teaching
  },
}
</script>
