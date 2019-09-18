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
        {{v.label}}<span>></span>
      </a>
    </div>
    <div class="modal-dimm">
      <form class="modal-area choose-permit">
        <fieldset>
          <header>
            <legend>
              {{choosePermitFieldset.legend}}
            </legend>
            <p v-for="v in choosePermitFieldset.paragraphs">{{v}}</p>
          </header>

          <ul v-for="item in choosePermitFieldset.checkBoxes">
            <li>
              <input type="radio" :id="item.id" for="">
              <label>

                {{item.title}}

              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  </footer>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: 'TheClassFooter',
  props: ['data'],
  data () {
    return {
      choosePermitFieldset: {
        legend: '수업권 선택하기',
        paragraphs: ['보유한 수업권 중, 선택한 수업권으로 수업을 신청하면 해당 수업권의 클래스 수가 차감됩니다.'],
        checkBoxes: [
          {
            id: 'permit0',
            labels: {
              permitTitle: '일간대치동 2과목 수업권 (12개월 수업권)',
              permitInfo: [
                {
                  heading: '구매일시',
                  paragraph: '2019-02-19 18:47',
                },
                {
                  heading: '최근신청일시',
                  paragraph: '2019-07-12 14:33'
                },
                {
                  heading: '현재 이용 가능 클래스 수',
                  paragrpah: '13'
                }
              ]
            }
          },
          {
            id: 'permit1',
            labels: {
              permitTitle: '일간대치동 3과목 수업권 (12개월 수업권)',
              permitInfo: [
                {
                  heading: '구매일시',
                  paragraph: '2019-02-19 18:47',
                },
                {
                  heading: '최근신청일시',
                  paragraph: '2019-07-12 14:33'
                },
                {
                  heading: '현재 이용 가능 클래스 수',
                  paragrpah: '13'
                }
              ]
            }
          },
        ]
      }
    }
  },
  created () {
    this.$nextTick(function () {
      const purchaseClassBtn = document.querySelector('.purchase-class-btn')
      const purchaseMembershipBtn = document.querySelector('.purchase-membership-btn')
      const purchasePermitBtn = document.querySelector('.purchase-permit-btn')

      /*Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })*/

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
            Swal.fire(
              '수업예약이 완료되었습니다.',
              '확인'
            )
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
        Swal.fire({
          text: '멤버십을 구매하고 7일 후 수업을 등록할 수 있습니다.',
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인',
          cancelButtonText: '최소',
          focusConfirm: false
        })
      })
    })

  }
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

< < < < < < < HEAD . modal-dimm {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 90vh;
  }

  .choose-permit {
    position: absolute;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 3.7rem;
    padding: 8.0rem 2.6rem;
    line-height: 1.5;
    color: #8d8d8d;
    background-color: #ffffff;
    opacity: 1;

    h2 {
      font-weight: bold;
      font-size: 2.7rem;
      color: #000000;
    }

    ol {
      padding-left: 2rem;
    }

    li {
      list-style: decimal;
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

      .choose-permit {

      }

      @media(min-width: 641px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-gap: 3rem;
        padding: 0;
        font-size: 1.6rem;

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
  }
}
</style>
