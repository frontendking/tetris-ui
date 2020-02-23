<template>
  <div class="sub_menu teaching">
    <i class="ic" />
    <ul>
      <li><a href="/elementary/teaching/class/this/month">일간대치동 수업 하러가기</a></li>
      <li><a href="#" onclick="window.open('/tutor/courses', '_blank');return false;">튜터닷컴 수업 하러가기</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBTutorNavSubMenu'
}
</script>

<style scoped lang=scss>
.sub_menu {
  position: absolute;
  top: 35px;
  left: 50%;
  background: #fff;
  border: 1px solid #bcbcbc;
  a {
    display: block;
    padding: 3px 20px 3px 10px;
    font-size: 11px;
    font-weight: normal;
    color: #333;
    &:hover {
      font-weight: bold;
    }
  }
  .ic {
    position: absolute;
    top: -7px;
    left: 50%;
    margin-left: -5px;
    display: block;
    width: 10px;
    height: 7px;
    background: url('../img/common/gnb-big-ic.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
}
</style>
