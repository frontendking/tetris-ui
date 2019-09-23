<template>
  <label class="ThePermitCard">
    <div>
      <input :id="id" type="radio" name="permitType" :value="id">
      <div class="title" v-html="visualTitle"/>
      <div class="summary">
        <div class="title" v-html="title"/>
        <div class="price" v-html="`<em class='delete'>${price}</em> (${discount})`"/>
        <div class="discount-price" v-html="price"/>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'permitCard',
  props: ['id', 'type', 'price', 'discount'],
  filters: {},
  computed: {
    visualTitle () {
      return `일간 대치동 <em class="permit-card">${this.type}개월</em>`
    },
    title () {
      return `${this.type}개월 수업`
    },
  },
}
</script>

<style lang=scss>
.ThePermitCard {
  border-radius: 1rem;
}
.ThePermitCard > div {
  background-color: inherit;

  border-radius: 0.5rem;
  input {
    display: none;

    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: white;
    }
  }
}

.ThePermitCard > div {
  @media(min-width: 641px) {
    position: relative;
    width: 22.4rem;
    height: 32.8rem;
    background-image:
      url('./assets/permit-vertical-line.svg'),
      url('./assets/permit-card-bg.png');
    background-repeat: no-repeat;
    background-position: 2rem 12.5rem, right 13.3rem;
    padding: 3.1rem 2rem 2rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .title {
      font-size: 3.2rem;
      line-height: 1.2;
      color: #ffffff;
      em.permit-card {
        font-size: 3.3rem;
        font-weight: 800;
        color: inherit;
      }
    }

    .summary {
      .title {
        display: none;
      }
      .price {
        em.delete {
          color: #ffffff;
          text-decoration: line-through;
        }
      }
      .discount-price {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }

}
</style>
