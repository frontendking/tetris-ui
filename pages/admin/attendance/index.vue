<template>
  <AdminLayout
    :heading="heading"
  >
    good
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/pages/admin/layout'
export default {
  name: 'index',
  components: { AdminLayout },
  data(){
    return {
      heading: '출결현황'
    }
  }
}
</script>

<style  lang=scss>
.index {
}
</style>
