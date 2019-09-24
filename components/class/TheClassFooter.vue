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
      <a v-for="v in data.buttons"
         :class="[v.id, {disabled: !v.active}]"
         :url="v.url"
      >
        {{v.heading}}<span>></span>
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
  props: ['data'],
  components: {
    TheClassPermitRadioboxForm,
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
          focusConfirm: false
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              text: '수업예약이 완료되었습니다.',
              showCancelButton: true,
              confirmButtonColor: '#00b9fd',
              confirmButtonText: '확인',
              cancelButtonText: '최소',
              focusConfirm: false
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
          focusConfirm: false
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

  }
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.TheClassFooter {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
  padding: 2.6rem;

  .class-permit-summary {
    background-color: $gray-light;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1.5fr 1fr;

    padding: 3.2rem 4rem;
    font-size: 2.2rem;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;

      &:last-child {
        border-top: #e0e0e0 solid 1px;
        padding-top: 4rem;
      }
    }

    > div#class-permit-summary-goods {
      padding-bottom: 1rem;

      .vertical-line {
        font-size: 3.5rem;
        color: #e3e3e3;
      }
    }

    .title {
      display: flex;
      justify-content: center;
      align-self: flex-start;
      font-size: 2.2rem;
    }

    .badge-round {
      background-color: #ededed;
      border: #e0e0e0 solid 1px;
      font-weight: bold;
      justify-self: center;
      padding: 2rem 4rem;
      border-radius: 21% / 50%;
      line-height: 1;

      span {
        display: inline-block;

        &:first-child {
          color: #00b9fd;
          font-size: 4.2rem;
          font-weight: bold;
        }
      }
    }

    .class-account {
      background-color: #00b9fd;
      color: #ffffff;
      justify-self: center;
      align-self: center;
      padding: 0.9rem 1.6rem;
      border-radius: 25% /50%;
    }

    .class-price {
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
