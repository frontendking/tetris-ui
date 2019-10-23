<template>
  <label class="ThePermitCard">
    <div>
      <BaseCheckbox type="radio" checkbox-id="radioboxId" name="permitType"/>
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
import BaseCheckbox from '@/components/base/BaseCheckbox/index'

export default {
  name: 'permitCard',
  components: { BaseCheckbox },
  props: {
    radioboxId: {
      default: 'ThePermitCard',
    },
    type: {
      default: '12'
    },
    price: {
      default: '20'
    },
    discount: {
      default: '10'
    }
  },
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
@import '@/assets/style/global.scss';

.ThePermitCard {
  position: relative;
  display: flex;
  width: 28.6rem;
  height: 32.4rem;
  color: $onSecondary;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    padding-top: 100/286*208%;
    background-image: url('assets/permit-card-bg.png');
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: right 80%;
    border-radius: 0.5rem;
    background-color: $yellow;
  }

  > div {
    display: flex;
    padding: 2.9rem 2.5rem;

    .title {
      font-size: 3.2rem;
      line-height: 1.2;

      em.permit-card {
        font-size: 3.3rem;
        font-weight: 800;
      }
    }

    .BaseCheckbox {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      top: 0;
      right: 0;
    }

    /*    .summary {
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
        }*/
  }
}

@media(min-width: 641px) {
  .ThePermitCard > div {
    position: relative;
    width: 22.4rem;
    height: 32.8rem;
    background-image: url('assets/permit-vertical-line.svg'),
    url('assets/permit-card-bg.png');
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
