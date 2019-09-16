<template>
  <header class="TheClassSummaryCard">
    <figure>
      <div class="round-frame">
        <img
          class="teacher-img"
          alt="this is the profile picture of the teacher"
          :src="teacherImageSrc"
        />
      </div>
      <figcaption class="teacher-name">김규미 선생님</figcaption>
    </figure>

    <dl class="class-summary">
      <p class="class-title">{{classTitle}}</p>
      <p class="class-time">{{classTime}}</p>
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
$gray: #a3a3a3;
$gray-dark: #696969;

.TheClassSummaryCard {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 4.8rem 6.6rem;

  .class-summary {
    align-self: stretch;
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
  figure {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 40%;
    .round-frame {
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      background-color: #ffffff;
      border: #e0e0e0 solid 1px;
      border-radius: 50%;
      width: 65%;
      padding-top: 65%;
      img {
        position: absolute;
        width: 80%;
        top:0;
      }
    }
    .teacher-name {
      padding-top: 1.5rem;
      font-size: 3.3rem;
      font-weight: bold;
    }
  }


  .class-summary {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: max-content 4fr max-content 4fr;
    grid-column-gap: 1.5rem;
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

.TheClassSummaryCard {
  @media(min-width: 641px) {

  }
}
</style>
