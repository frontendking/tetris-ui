<template>
  <article id="admin-class-this">
    <div class="tab-content">
      <slot/>
    </div>
  </article>
</template>

<script>
import Pagenation from '@/pages/teaching/classes/pagenation'
export default {
  name: 'admin-class-this',
  components: {
    Pagenation,
  }
}
</script>

