<template>
  <article class="ClassReview">
    <h1 hidden>reviews</h1>
    <section class="review-section" v-for="v in page.theReviews">
      <h2 hidden>the review</h2>
      <figure>
        <img src="../../assets/img/no_avatar.png">
        <figcaption>
          {{users[v.userId.match(/\d+/g)[0]].name}}
        </figcaption>
      </figure>
      <div class="star-rank">
        <img v-for="n in Math.floor(v.classRanking)" src="../../assets/img/star.svg">
        <span class="class-ranking">{{v.classRanking}}</span>
      </div>
      <p>{{v.review}}</p>
    </section>
  </article>
</template>

<script>
export default {
  props: ['page', 'users']
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.ClassReview {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  padding: 8.0rem 2.6rem;
  line-height: 1.5;
  color: #8d8d8d;

  .review-section  {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: 1fr 3fr;
    grid-column-gap: 4rem;
    padding: 2rem 0;
    border-bottom: #e0e0e0 solid 1px;

    &:first-of-type {
      padding-top: 0;
    }
    figure {
      grid-row: 1/3;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      img {
        min-width: 8rem;
        width: 0;
        border-radius: 50% 50%;
      }
      figcaption {
        line-height: 1;
      }
    }

    .star-rank {
      display: flex;
      color: $primary;
      img {
        width: 4%;
        margin-right: 0.5rem;
      }
    }
  }

}
</style>
