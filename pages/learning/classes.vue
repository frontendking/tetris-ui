<template>
  <admin-my-class
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
    <a class="btn btn-sm btn-submit" style="position:absolute;top:10px;right:0;" target="_blank" href="https://kr.tutor.com/tutor/courses">이전 수업 보기</a>
    <nuxt-child
      class="card-list"
    />
  </admin-my-class>
</template>>

<script>
import AdminMyClass from '@/components/admin/classes'

export default {
  name: 'learning-my-class',
  components: { AdminMyClass },
  data () {
    return {
      heading: '내 클래스'
    }
  }
}
</script>

