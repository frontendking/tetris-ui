<template>
  <form
    class="TheClassPermitRadioboxForm "
    action=""
    method="post"
  >
    <fieldset>
      <div class="choose-permit">
        <header>
          <legend>
            {{choosePermitFieldset.legend}}
          </legend>
          <p v-for="v in choosePermitFieldset.paragraphs">{{v}}</p>
        </header>
        <div class="permit-card" v-for="item in choosePermitFieldset.checkBoxes">
          <input type="radio" :id="item.id" name="permit" :value="item.id">
          <label :for="item.id">
            <div class="permit-title">{{item.label.permitTitle}}</div>
            <dl>
              <template v-for="(v,k) in item.label.permitInfo">
                <dt>{{v.heading}}</dt>
                <dd>: {{v.paragraph}}</dd>
              </template>
            </dl>
            <div class="permit-status">사용가능</div>
          </label>
        </div>
      </div>
    </fieldset>
    <div class="button-set">
      <button type="submit">이 수업 예약하기</button>
      <button class='cancel' type="button">취소</button>
    </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: 'TheClassPermitRadioboxForm',
  data () {
    return {
      choosePermitFieldset: {
        legend: '수업권 선택하기',
        paragraphs: ['보유한 수업권 중, 선택한 수업권으로 수업을 신청하면 해당 수업권의 클래스 수가 차감됩니다.'],
        checkBoxes: [
          {
            id: 'permit0',
            label: {
              permitTitle: '일간대치동 2과목 수업권 (12개월 수업권)',
              permitInfo: [
                {
                  heading: '구매일시',
                  paragraph: '2019-02-19 18:47',
                },
                {
                  heading: '최근신청일시',
                  paragraph: '2019-07-12 14:33',
                },
                {
                  heading: '현재 이용 가능 클래스 수',
                  paragraph: 13,
                },
              ],
            },
          },
          {
            id: 'permit1',
            label: {
              permitTitle: '일간대치동 3과목 수업권 (12개월 수업권)',
              permitInfo: [
                {
                  heading: '구매일시',
                  paragraph: '2019-02-19 18:47',
                },
                {
                  heading: '최근신청일시',
                  paragraph: '2019-07-12 14:33',
                },
                {
                  heading: '현재 이용 가능 클래스 수',
                  paragraph: 1,
                },
              ],
            },
          },
        ],
      },
    }
  },
  mounted () {
    this.$nextTick(function () {
      var purchasePermitForm = document.querySelector('.TheClassPermitRadioboxForm')
      var purchaseCancelBtn = document.querySelector('.TheClassPermitRadioboxForm>.button-set>.cancel')
      purchaseCancelBtn.addEventListener('click', function(e){
        purchasePermitForm.parentElement.classList.remove('active')
      })
      purchasePermitForm.addEventListener('submit', function (e) {
        e.preventDefault()
        // 수업권을 구매한 경우
        Swal.fire({
          text: '수업을 예약하시겠습니까?',
          showCancelButton: true,
          confirmButtonColor: '#00b9fd',
          confirmButtonText: '확인',
          cancelButtonText: '최소',
          focusConfirm: false
        }).then((result) => {
          if (result.value) {
            return Swal.fire(
              {
                text: '수업예약이 완료되었습니다.',
                confirmButtonText: '확인',
              }
            )
          }
        }).then((result)=>{
          purchasePermitForm.parentElement.classList.remove('active')
        })
        /*
        // 수업권을 구매하지 않은 경우
        Swal.fire({
            html: "<p>수업권을 구매하셔야 수업을 예약할 수 있습니다.</p> <p>수업권을 구매하시겠습니까?</p>",
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
    })
  }
}
</script>

<style lang=scss>
.TheClassPermitRadioboxForm {
  position: relative;
  font-size: 2.2rem;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 5.9rem;

  .choose-permit {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    line-height: 1.5;
    color: #8d8d8d;
    background-color: #ffffff;
    opacity: 1;

    header {
      border-bottom: 2px solid #000;
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
      padding: 3rem 0;
    }

    legend, .permit-title {
      font-weight: bold;
      font-size: 2.7rem;
      color: #000000;
      line-height: 1;

    }

    .permit-card {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: auto auto;
      border-bottom: #e0e0e0 solid 1px;
      align-items: center;
      padding: 3rem 0;

      label {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: auto auto;
        font-size: 1.8rem;
      }

      dl {
        font-size: 2rem;
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, auto);
        grid-row: 2;
        padding: 1rem 0;
      }

      dt, dd {
        font-weight: normal;
        font-size: inherit;
      }

      .permit-title {
        grid-row: 1;
        grid-column: 1/3;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 1.5rem;
      }

      .permit-status {
        grid-row: 2/3;
        grid-column: 2;
        border-left: solid 1px #e0e0e0;
        display: flex;
        align-items:  center;
      }
    }

  }

  .button-set {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 0 1rem;
    padding: 1.5rem;
    background-color: #34b4f9;
    color: #ffffff;
    border-radius: 1rem;
    width: 20rem;
    text-align: center;

    &.cancel {
      background-color: #ebebeb;
      color: #696969;
    }
  }
}
</style>
