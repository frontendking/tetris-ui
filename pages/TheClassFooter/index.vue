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
    <div class="modal-dimm">
      <the-class-permit-radiobox-form class="modal-area"/>
    </div>
  </footer>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
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
          label: '수업권으로 수업 예약',
          url: '',
          active: true,
        },
        {
          id: 'purchase-text-math',
          label: '일간대치동 수학 교재 구매하기',
          url: '',
          active: false,
        },
      ],
    }
  },
  mounted () {
    this.$nextTick(function () {
      const purchaseClassBtn = document.querySelector('.purchase-class-btn')
      const purchaseMembershipBtn = document.querySelector('.purchase-membership-btn')
      const purchasePermitBtn = document.querySelector('.purchase-permit-btn')

      purchaseClassBtn.addEventListener('click', e => {
        // 단건 구매한 경우
        Swal.fire({
          text: '수업을 예약하시겠습니까?',
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인',
          cancelButtonText: '최소',
          focusConfirm: false,
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              text: '수업예약이 완료되었습니다.',
              showCancelButton: true,
              confirmButtonColor: '#00b9fd',
              confirmButtonText: '확인',
              cancelButtonText: '최소',
              focusConfirm: false,
            })
          }
        })
        /*
        // 단건 구매 이력이 있는 경우
        Swal.fire({
            text: "수업예약을 위해 해당 수업을 구매하셔야 합니다. 결제 화면으로 이동하시겠습니까?",
            showCancelButton: true,
            confirmButtonColor: '#00b9fd',
            confirmButtonText: '확인', // 결제화면으로 이동
            focusConfirm: false
          }).then((result) => {
            if (!result.value) {
              Swal.fire(
                '',
                '수업예약이 취소되었습니다.',
                '확인'
              )
            }
          })*/
      })

      purchaseMembershipBtn.addEventListener('click', e => {
        //멤버십 구매 후 7일 경과 전
        Swal.fire({
          text: '멤버십을 구매하고 7일 후 수업을 등록할 수 있습니다.',
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인',
          cancelButtonText: '최소',
          focusConfirm: false,
        })

        /*
        //멤버십 구매후 7일 후 실 결제 한 경우
        Swal.fire({
          text: "수업 예약이 완료되었습니다.",
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인',
          cancelButtonText: '최소',
          focusConfirm: false
        })*/
        /*

        //멤버십 구매 이력이 없는 경우
        Swal.fire({
          html: "멤버십을 구매하셔야 수업 예약이 가능합니다. <br>멤버십을 구매하시겠습니까?",
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인', //멤버십 구매화면으로 이동
          cancelButtonText: '최소',
          focusConfirm: false
        }).then((result) => {
          if (!result.value) {
            Swal.fire(
              '',
              '수업예약이 취소되었습니다.',
              '확인'
            )
          }
        })*/
      })

      purchasePermitBtn.addEventListener('click', e => {
        document.querySelector('.TheClassFooter>.modal-dimm').classList.add('active')
      })
    })

  },
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';


.TheClassFooter {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 2.4rem;  min-width: 64rem;
  .class-permit-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 7.5rem 11.7rem 12.8rem;
    font-size: 2.2rem;
    justify-items: stretch;
    align-items: stretch;
    background-image: url(/tutor/pages/TheClassFooter/assets/Flowchart_Terminal-gray.svg), url(/tutor/pages/TheClassFooter/assets/Flowchart_Terminal-gray.svg);
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
      background: url(./assets/Flowchart_Terminal.svg) no-repeat center left;
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
  .TheClassFooter {
    grid-template-rows: auto;
    grid-template-columns: 1fr 3fr;

    grid-gap: 0;
    grid-column-gap: 3.4rem;
    > * {
      justify-self: flex-start
    }

    padding: 4rem;
    background-color: #f5f5f5;

    .class-permit-summary {
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(3, auto);
      grid-gap: 1.1rem;
      padding: 0;
      font-size: 1.6rem;
      background-color: #f5f5f5;
      border: none;
      background-image: none;

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
        background: none;
        border: none;
        width: initial;
        color:initial;
        justify-self: flex-start;
        text-indent: initial;
        font-size: 1.6rem;
      }

      .class-price {
        grid-column: 1/4;
        grid-row: 2/3;
        border-top: none;
        padding: 0;
        font-size: 2rem;
        display: initial;
        span {
          font-size: 4rem;
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
