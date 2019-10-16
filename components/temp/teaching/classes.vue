<template>
  <classes
    id="teaching-classes"
  >
    <nuxt-child/>
  </classes>
</template>

<script>
import Classes from '@/components/admin/classes/layout-sub-classes'

export default {
  name: 'teaching-classes',
  components: { Classes }
}
</script>
