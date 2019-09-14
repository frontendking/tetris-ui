<template>
  <header class="TheClassSummaryCard">
    <div class="round-frame">
      <img :src="teacherImageSrc"/>
    </div>
    <p class="teacher-name">김규미 선생님</p>
    <p class="class-title">{{classTitle}}</p>
    <p class="class-time">{{classTime}}</p>
    <dl class="class-summary">
      <template v-for="v in summaries">
        <dt>{{v.heading}}</dt>
        <dd>{{v.paragraph}}</dd>
      </template>
    </dl>
  </header>
</template>

<script>
export default {
  props: [
    'teacherImageSrc',
    'teacherName',
    'classTitle',
    'classTime',
    'summaries'
  ],
}
</script>

<style lang=scss>
$gray : #a3a3a3;
$gray-dark : #696969;

.TheClassSummaryCard {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 4.8rem 6.6rem;

  .class-summary {
    align-self: stretch;
  }
  .teacher-name {
    font-size: 3.3rem;
    font-weight: bold;
  }
  .class-title {
    color: #00b9fd;
    margin-top: 2.1rem;
  }
  .class-time {
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  .round-frame {
    position: relative;
    display: flex;
    width: 26%;
    padding-top: 26%;
    border-radius: 50%;
    justify-content: center;
    overflow: hidden;
    background-color: #ffffff;
    border : $gray-dark;
    img {
      width: 80%;
      position: absolute;
      top: 0;
    }
  }

  .class-summary {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: max-content 4fr max-content 4fr;
    grid-column-gap: 1.5rem ;
    grid-row-gap: 1.5rem;
    margin-top: 3.4rem;
    padding-top: 3.3rem;
    border-top: #e3e3e3 solid 1px;
    dt {
      color: $gray;
      font-weight: normal;
    }
    dd {
      color: $gray-dark
    }
  }
}
</style>
