<template>
  <div class="gnb-wrap-box">
    <h1 class="gnb-title">
      <a href="/elementary/main/">일간 대치동</a>
    </h1>
    <TheLayoutHeaderGNBTutorNav />
    <div class="btn_gnb_menu">
      gnb버튼
    </div>
  </div>
</template>

<script>
import TheLayoutHeaderGNBTutorNav from './TheLayoutHeaderGNBTutorNav'

export default {
  name: 'TheLayoutHeaderTutor',
  components: { TheLayoutHeaderGNBTutorNav }
}
</script>

<style lang=scss>
@media (min-width: 960px) {
  .gnb-wrap-box {
    position: relative;
    margin: 0 auto;

    .gnb-title {
      position: absolute;
      top: 3.3rem;
      left: 2.0rem;
      color: #333;
      font-weight: bold;
      font-size: 3.6rem;

      a {
        color: #000;
      }
    }

    .btn_gnb_menu {
      display: none
    }
  }
}
</style>
