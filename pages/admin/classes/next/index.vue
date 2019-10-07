<template>
  <div id="admin-classes-next" class="tab-content">
    <slot/>
    <div class="text-center">
      <pagenation/>
    </div>
  </div>
</template>

<script>
import Pagenation from '@/pages/admin/classes/pagenation'
import ClassCard from '@/pages/admin/class-card'

export default {
  name: 'admin-class-next',
  components: {
    ClassCard,
    Pagenation,
  }
}
</script>

