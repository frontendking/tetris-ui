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
import Pagenation from '@/components/base/BasePagenation2'
import ClassCard from '@/components/admin/class-card'
import AdminClassNext from '@/components/admin/classes/next/index'

export default {
  name: 'teaching-class-next',
  components: {
    AdminClassNext,
    ClassCard,
    Pagenation,
  }
}
</script>

