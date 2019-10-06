<template>

  <classes
    :heading="heading"
  >
    <ul class="nav nav-tabs m-b">
      <li :class="$route.name==='learning-classes-this'?'active':''">
        <a href="#none">이번달 수업(51)</a>
      </li>
      <li :class="$route.name==='learning-classes-next'?'active':''">
        <a href="#none">다음달 수업(15)</a>
      </li>
    </ul>

    <nuxt-child
      class="card-list"
    />
  </classes>
</template>>

<script>

import Classes from '@/pages/admin/classes/layout'

export default {
  name: 'learning-my-class',
  components: { Classes },
  data () {
    return {
      heading: '내 클래스'
    }
  }
}
</script>

