<template>
  <classes
    id="teaching-classes"
  >
    <nuxt-child/>
  </classes>
</template>

<script>
import Classes from '@/components/admin/classes/layout'

export default {
  name: 'teaching-classes',
  components: { Classes }
}
</script>
