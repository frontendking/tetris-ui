<template>
  <classes
    id="teaching-classes"
  >
    <nuxt-child/>
  </classes>
</template>

<script>
import Classes from '@/components/admin/classes/classes'

export default {
  name: 'teaching-classes',
  components: { Classes }
}
</script>
