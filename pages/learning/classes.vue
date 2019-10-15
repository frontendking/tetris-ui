<template>
  <Classes
    id="learning-classes"
  >
    <nuxt-child/>
  </Classes>
</template>

<script>
import Classes from '@/components/admin/classes/layout-sub-classes'

export default {
  name: 'learning-classes',
  components: { Classes }
}
</script>
