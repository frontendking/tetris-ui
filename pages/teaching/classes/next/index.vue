<template>
  <admin-class-next>
    <div class="row">
      <div class="col-md-3">
        <class-card/>
      </div>
    </div>
  </admin-class-next>
</template>

<script>
import Pagenation from '@/pages/admin/classes/pagenation'
import ClassCard from '@/pages/admin/class-card'
import AdminClassNext from '@/pages/admin/classes/next/index'

export default {
  name: 'teaching-class-next',
  components: {
    AdminClassNext,
    ClassCard,
    Pagenation,
  }
}
</script>

