<template>
  <section class="_id">
    <h1>수업교재</h1>
    <p>대치동 ‘㈜ 원리탐구 학원’ 원장님 군단이 만든
      <br><strong>‘일간대치동’</strong> 교재로 학습합니다.</p>
    <h1>진행방식</h1>
    <ol>
      <li>
        매칭 된 요일과 시간 클래스에 15분 전 입장하여 과외를 받습니다.
      </li>
      <li>
        7~8월은 여름방학호로 2학기 교과과정 미리보기를 8주간
        진행합니다.
      </li>
      <li>
        초등 1학년 8월호는 4주간 진행됩니다.
      </li>
      <li>
        매주 주1회 50분 학습합니다.
      </li>
      <li>
        튜터를 만나지 않는 날은 튜터와 약속한 숙제를 해서 숙제방에
        숙제한 내용을 올려 놓습니다. 이 과정을 통해 매일 30분씩
        공부하는 공부습관이 만들어집니다.
      </li>
      <li>
        과외가 끝나고 나면 튜터의 학습레포트로 피드백을 받을 수
        있습니다.
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  props: ['page','users']
}
</script>

<style lang=scss>
._id {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 3.7rem;
  padding: 8.0rem 2.6rem;
  line-height: 1.5;
  color: #8d8d8d;

  h1 {
    font-weight: bold;
    font-size: 2.7rem;
    color: #000000;
  }
  ol {
    padding-left: 2rem;
  }
  li {
    list-style: decimal;
  }
}
</style>
