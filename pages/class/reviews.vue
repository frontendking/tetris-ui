<template>
  <article class="review">
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

.review {
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
.review {
  @media(min-width: 641px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 3rem;
    padding: 0;
    font-size: 1.6rem;

    .review-section {
      display: grid;
      grid-template-columns: min-content auto;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: 4rem;
      grid-row-gap: 1rem;
      padding: 2rem 0;
      border-bottom: #e0e0e0 solid 1px;
      figcaption {
        margin-top: 1rem;
      }
      .star-rank {
        align-items: center;
        img {
          width: 3%;
        }
      }
    }
    >section {
      padding-right: 32rem;
    }
    h1, h2, h3 {
      color: #000;
      font-weight: bold
    }
    h1 {
      display: flex;
      align-items: center;
      height: 6.4rem;
      font-size: 3.2rem;
      border-bottom: 2px solid #000;
    }
    h2, dt {
      font-weight: bold;
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    ol {
      li {
        line-height: 1.7;
      }
    }
  }
}
</style>
