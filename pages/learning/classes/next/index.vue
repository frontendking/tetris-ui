<template>
  <admin-class-next>
    <div class="row">
      <div class="col-md-3">
        <class-card
          :can-update="true"
        />
      </div>
    </div>
  </admin-class-next>
</template>

<script>
import Pagenation from '@/pages/teaching/classes/pagenation'
import ClassCard from '@/pages/teaching/classes/class-card'
import AdminClassNext from '@/components/admin/classes/next/index'

export default {
  name: 'learning-class-next',
  components: {
    AdminClassNext,
    ClassCard,
    Pagenation,
  }
}
</script>

