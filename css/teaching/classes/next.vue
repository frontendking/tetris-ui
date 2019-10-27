<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <class-card
          :can-update="true"
        />
      </div>
    </div>
    <div class="text-center">
      <pagenation/>
    </div>
  </div>
</template>

<script>
import Pagenation from '@/components/base/BasePagenation2'
import ClassCard from '@/components/admin/class-card'

export default {
  name: 'learning-classes-next',
  components: {
    ClassCard,
    Pagenation
  }
}
</script>

