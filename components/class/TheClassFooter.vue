<template>
  <footer class="TheClassFooter">
    <div class="class-permit-summary">
      <div class="title">마감까지</div>
      <div class="reset-date"><em>{{data.restDate}}</em> <span>일 남음</span></div>
      <div class="reset-seat"><em>{{data.restSeat}}</em> <span>자리 남음</span></div>
      <div class="class-account">총 {{data.classAccount}}회</div>
      <div class="class-price"><span>55,000</span><strong>원</strong></div>
    </div>
    <div class="purchase-btns">
      <a v-for="v in data.buttons" :url="v.url" :class="{disabled: !v.active}">{{v.label}}<span>></span></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheClassFooter',
  props: ['data'],
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.TheClassFooter {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  grid-row-gap: 2.4rem;
  padding: 2.6rem;

  .class-permit-summary {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto 1fr 1.5fr;
    background-color: $gray-light;
    display: grid;

    padding: 3.2rem 4rem;
    font-size: 2.2rem;
    border: 1px solid #e0e0e0;

    > div#class-permit-summary-goods {
      padding-bottom: 1rem;

      .vertical-line {
        font-size: 3.5rem;
        color: #e3e3e3;
      }
    }

    .title {
      grid-row: 1;
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      font-size: 2.2rem;
      padding-bottom: 3.8rem;
    }

    .reset-date, .reset-seat {
      /*     &:before {
             content: '';
             width: 20%;
             padding: 5%;
             background-color: #ededed;
             border: #e0e0e0 solid 1px;
             border-radius: 21% / 50%;
           }*/
      font-weight: bold;
      justify-self: center;
      line-height: 1;

      em {
        color: #00b9fd;
        font-style: normal;
        font-size: 4.2rem;
        font-weight: bold;
      }
    }

    .class-account, .class-price {
      border-top: #e0e0e0 solid 1px;
      display: flex;
      justify-self: stretch;
      align-self: stretch;
    }

    .class-account {
      grid-row: 4;
    }

    .class-price {
      grid-row: 4;
      font-size: 5.2rem;
      font-weight: bold;
    }

  }

  a {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #00b9fd;
    padding: 3.7rem 3.3rem;
    color: #ffffff;
    font-size: 2.6rem;
    font-weight: bold;
    border-radius: 1%/5%;

    &.disabled {
      background-color: #9ea2a4;
    }

    span {
      position: absolute;
      right: 5%;
      font-weight: normal;
    }
  }
  .purchase-btns {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
}

@media(min-width: 641px) {
  .TheClassFooter {
    grid-template-rows: auto;
    grid-template-columns: 1fr 3fr;
    grid-gap: 0;
    grid-column-gap: 3.4rem;
    justify-items: flex-start;
    padding: 4rem;
    background-color: #f5f5f5;

    .class-permit-summary {
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(3, auto);
      grid-gap: 1.1rem;
      padding: 0;
      font-size: 1.6rem;
      background-color: #f5f5f5;

      em {
        color: $primary;
        font-style: inherit;
      }

      > div {
        &:last-child {
          border-top: none;
          padding-top: 0;
        }

        padding: 0;
      }

      .title {
        grid-column: 1/2;
        grid-row: 3/4;
        font-size: inherit;

      }

      .reset-date {
        grid-column: 2/3;
        grid-row: 3/4;

      }

      .reset-seat {
        grid-column: 3/4;
        grid-row: 3/4;
      }

      .class-account {
        grid-column: 1/2;
        grid-row: 1/2;
        background-color: initial;
        color: inherit;
        padding: 0;
        justify-self: initial;
      }

      .class-price {
        grid-column: 1/4;
        grid-row: 2/3;
        border-top: none;
        padding: 0;
        font-size: 3rem;
        display: initial;
      }

    }

    .purchase-btns {
      display: flex;
      flex-flow: row;
      border-radius: 0;
      border: solid 1px #e0e0e0;

      &.float {
        justify-self: stretch;

        a:nth-child(n+3) {
          display: none;
        }
      }

      a {
        &:first-child {
          border-left: none;
        }

        &.disabled {
          background-color: $primary;
          color: #fff;
        }

        border-radius: 0;
        padding: 1rem;
        font-size: 1.6rem;
        border-left: solid 1px #e0e0e0;
        background-color: #fff;
        color: #777;
        font-weight: normal;
        text-align: center;
        word-break: keep-all;
        align-items: center;
        flex: 1 1 auto;

        span {
          display: none;
        }
      }
    }
  }
}
</style>
