<template>
  <label class="ThePermitCard">
    <div>
      <BaseCheckbox overwrap type="checkbox" id="radioboxId" name="permitType"/>
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
      default: '12',
    },
    price: {
      default: '20',
    },
    discount: {
      default: '10',
    },
  },
  filters: {},
  computed: {
    visualTitle () {
      return `일간대치동 <em class="permit-card">${this.type}개월</em>`
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
  height: 20.8rem;
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
    z-index: -1;
  }

  > div {
    display: flex;
    padding: 2.9rem 2.5rem;
    flex: 1;
    justify-content: space-between;

    .title {
      font-size: 3.2rem;
      line-height: 1.2;
      width: 14.9rem;
      z-index:1;
      em.permit-card {
        font-size: 3.3rem;
        font-weight: 800;
      }
    }

    .summary {
      display: flex;
      flex-flow: column;
      position: absolute;
      top: 105%;
      color: #000;
      left: 0.4rem;
      .title {
        margin-bottom: 2rem;
        font-size: 2.2rem;
        line-height: 1;
      }
      .price {
        margin-bottom: 0.5rem;
        line-height: 1;
        color: #b5b5b5;
        visibility: hidden;
        .delete {
          visibility: visible;
          line-height: 1;
        }
      }
      .discount-price {
        line-height: 1;
        font-weight: bold;
      }
    }

    .input {

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
