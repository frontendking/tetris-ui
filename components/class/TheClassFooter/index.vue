<template>
  <footer class="TheClassFooter">
    <div class="class-permit-summary">
      <div class="title" v-html="title"></div>
      <div class="reset-date" v-html="restDate"></div>
      <div class="reset-seat" v-html="restSeat"></div>
      <div class="class-account" v-html="classAccount"></div>
      <div class="class-price" v-html="classPrice"></div>
    </div>
    <div class="purchase-btns">
      <a v-for="v in buttons"
         :class="[v.id, {disabled: !v.active}]"
         :url="v.url"
      >
        {{v.label}}<span>></span>
      </a>
    </div>
  </footer>
</template>

<script>
import TheClassPermitRadioboxForm from '@/components/class/TheClassPermitRadioboxForm'

export default {
  name: 'TheClassFooter',
  components: {
    TheClassPermitRadioboxForm,
  },
  data () {
    return {
      title: '마감까지',
      restDate: '<em>8</em>일 남음',
      restSeat: '<em>1</em>자리 남음',
      classAccount: '총 4회',
      classPrice: '<span>55,000</span>원',
      buttons: [
        {
          id: 'purchase-class-btn',
          label: `수업구매하기 (5000원)`,
          url: '',
          active: true,
        },
        {
          id: 'purchase-membership-btn',
          label: '커넥츠 멤버십으로 예약',
          url: '',
          active: true,
        },
        {
          id: 'purchase-permit-btn',
          label: '수업권으로 수업예약',
          url: '',
          active: true,
        },
        {
          id: 'purchase-text-math',
          label: '일간대치동 수학교재 구매하기',
          url: '',
          active: false,
        },
      ],
    }
  },
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.TheClassFooter {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 2.4rem;
  min-width: 64rem;

  .class-permit-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 7.5rem 11.7rem 12.8rem;
    font-size: 2.2rem;
    justify-items: stretch;
    align-items: stretch;
    background-image: url(assets/Flowchart_Terminal-gray.svg), url(assets/Flowchart_Terminal-gray.svg);
    background-repeat: no-repeat, no-repeat;
    background-position-x: 14.5%, 83%;
    background-position-y: 33%;
    background-color: #f5f5f5;
    background-size: 26%;
    border: 1px solid #e0e0e0;

    .title {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.2rem;
    }

    em {
      color: #00b9fd;
      font-weight: bold;
      font-size: 4.2rem;
      font-style: normal;
      line-height: 0.8;
      display: block;
    }

    .reset-date {
      background-size: 8rem 4rem;
      border-right: 3px solid #e3e3e3;
      margin-top: 2rem;
      margin-bottom: 6rem;
      line-height: 1;
      justify-content: center;
      display: flex;
      align-items: flex-end;
    }

    .reset-seat {
      background-size: 8rem 4rem;
      margin-top: 2rem;
      margin-bottom: 6rem;
      line-height: 1;
      justify-content: center;
      display: flex;
      align-items: flex-end;
    }

    .class-account {
      justify-self: flex-end;
      border-top: 1px solid #e0e0e0;
      width: 85%;
      background: url(assets/Flowchart_Terminal.svg) no-repeat center left;
      background-size: 8rem 4rem;
      display: flex;
      align-items: center;
      color: #ffffff;
      text-indent: 1rem;
      line-height: 1;
    }

    .class-price {
      justify-self: flex-start;
      border-top: 1px solid #e0e0e0;
      width: 85%;
      display: flex;
      color: #000000;
      line-height: 1;
      font-size: 2.2rem;
      justify-content: flex-end;
      padding-bottom: 4rem;
      align-items: flex-end;

      span {
        font-size: 5.2rem;
        font-weight: bold;
      }
    }
  }

  .purchase-btns {
    display: grid;
    grid-template-rows: repeat(4, 10rem);
    grid-template-columns: auto;
    grid-row-gap: 1rem;
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

  .modal-dimm {
    visibility: hidden;

    &.active {
      visibility: visible;
    }

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-area {
      width: 80vw;
      background-color: #ffffff;
      padding: 4rem;
    }
  }
}

@media(min-width: 641px) {
  %innerFont {
    font-size: 1.1rem;
    margin: 0;
    display: block;
    color: #000000;
    font-weight: bold;
  }
  .TheClassFooter {
    grid-template-rows: auto;
    grid-template-columns: 1fr 3fr;

    grid-gap: 0;
    grid-column-gap: 3.4rem;

    padding: 4rem;
    background-color: #f5f5f5;

    .class-permit-summary {
      max-height: 15.8rem;
      max-width: 95rem;
      grid-template-rows: 1.6rem 2.7rem 1.1rem;
      grid-template-columns: repeat(3, max-content);
      grid-column-gap: 0.3rem;
      grid-row-gap: 1.1rem;
      line-height: 1;
      padding: 0;
      background-color: #f5f5f5;
      border: none;
      background-image: none;
      color: #000;
      font-size: 1.1rem;

      em {
        color: $primary;
        font-size: 1.1rem;
      }

      > div {
        &:last-child {
          border-top: none;
          padding-top: 0;
        }

        padding: 0;
      }

      .title, .reset-date, .reset-seat {
        color: #000;
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0;
        width: 100%;
        align-items: center;
      }

      .title {
        grid-column: 1/2;
        grid-row: 3/4;
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
        background: none;
        border: none;
        justify-self: flex-start;
        font-size: 1.6rem;
        width: 100%;
        color: #000;
        text-indent: 0;
      }

      .class-price {
        grid-column: 1/4;
        grid-row: 2/3;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: #000;
        font-size: 2rem;
        text-indent: 0;
        line-height: 1.1;

        span {
          font-size: 3rem;
          line-height: 1
        }
      }

    }

    .purchase-btns {
      display: flex;
      flex-flow: row;
      border-radius: 0;
      border: solid 1px #e0e0e0;
      cursor: pointer;

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
