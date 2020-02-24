<template>
  <dl class="add">
    <dt><span>FAMILY SITE</span></dt>
    <dd><a href="//book.conects.com">커넥츠북</a></dd>
    <dd><a href="//studycenter.conects.com">공부장소</a></dd>
    <dd><a href="//device.conects.com">커넥츠 디바이스</a></dd>
    <dd><a href="//tutor.conects.com">커넥츠튜터</a></dd>
    <dd><a href="//kr.tutor.com">튜터닷컴</a></dd>
  </dl>
</template>

<script>
export default {
  name: 'TheLayoutHeaderLNBListSite'
}
</script>

<style lang=scss>
.add {
  padding: 0 24px;

  &:nth-child(n+2) {
    margin-top: 20px;
  }

  dt {
    > span {
      margin-bottom: 5px;
      color: #7f7f7f;
      font-size: 11px;
      font-weight: bold;
    }
  }

  dd {
    margin-top: 4px;
  }

  a {
    color: #333;
    font-size: 14px;

    &:hover {
      color: #29b6f6;
    }
  }
}

</style>
