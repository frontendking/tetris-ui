<template>
  <div id="ReviewForm">
    <TheReviewFormHeader />
    <TheReviewFormFooter/>
  </div>
</template>


<!--<style src="../../../node_modules/bootstrap/dist/css/bootstrap.min.css">
</style>

<style lang="scss">
body {
  font-family: "Noto Sans KR", "Malgun Gothic", "맑은고딕", "돋움", "Dotum",
    "Helvetica", "Apple SD Gothic Neo", Sans-serif, serif;
}
</style>-->
<script>
import TheReviewFormHeader from '../components/TheReviewForm/TheReviewFormHeader'
import TheReviewFormFooter from '../components/TheReviewForm/TheReviewFormFooter'

export default {
  components: { TheReviewFormFooter, TheReviewFormHeader }
}
</script>
<style scoped lang="scss">

#ReviewForm {
  footer {
    display: flex;
    padding-top: 1.3rem;
    justify-content: center;
    text-align: center;
  }
}
</style>

