<template>
  <classes
    id="learning-classes"
  >
    <nuxt-child/>
  </classes>
</template>

<script>
import Classes from '@/components/admin/classes/classes'

export default {
  name: 'learning-classes',
  components: { Classes }
}
</script>
