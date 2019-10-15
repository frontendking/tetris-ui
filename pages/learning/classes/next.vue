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
import Pagenation from '@/components/temp/admin/classes/pagenation'
import ClassCard from '@/components/temp/admin/class-card'
import AdminClassNext from '@/components/temp/admin/classes/next/index'

export default {
  name: 'learning-class-next',
  components: {
    AdminClassNext,
    ClassCard,
    Pagenation,
  }
}
</script>

