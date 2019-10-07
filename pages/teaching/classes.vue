<template>
  <classes
    id="teaching-classes"
  >
    <nuxt-child/>
  </classes>
</template>

<script>
import Classes from '@/pages/admin/classes/classes'

export default {
  name: 'teaching-classes',
  components: { Classes }
}
</script>
