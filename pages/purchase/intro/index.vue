<template>
  <article id="purchaseSubscribe">
    <header class="section-visual">
      <h1 class="hidden">9900대치동 과외</h1>
      <img class="section" src="./assets/header-2800.png" alt="9900원 대치동 초등수학 과외">
      <a class="btn" href="/purchase/subscribe/free">
        <img alt="지금 7일 무료체험하기" src="/elementary/resources/img/membership/pc/visual_btn01.png">
      </a>
      <a class="btn" href="/purchase/subscribe/3m">
        <img alt="3개월 정기결제 하기" src="/elementary/resources/img/membership/pc/visual_btn02.png">
      </a>
    </header>
  </article>
</template>

<script>

export default {
  name: 'purchaseSubscribe',
  methods: {},
}
</script>

<style lang="scss">

.hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
<style scoped lang=scss>
img {
  width: 100%;
}

section {
  position: relative;
}

#purchaseSubscribe {
  header {
    background-image: url('./assets/header-bg-2800.jpg')
  }
}
</style>
