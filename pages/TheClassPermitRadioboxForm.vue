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
              <template v-for="(v,k) in item.label.permitInfo">
                {{v.heading}} {{v.paragraph}} {{k===item.label.permitInfo.length?'':'|'}}
              </template>
            <div class="permit-status">사용가능</div>
          </label>
        </div>
      </div>
    </fieldset>
    <div>
      <button>이 수업 예약하기</button>
      <button type="button">취소</button>
    </div>
  </form>
</template>

<script>
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
    grid-template-rows: auto auto;
    grid-gap: 3.7rem;
    line-height: 1.5;
    color: #8d8d8d;
    background-color: #ffffff;
    opacity: 1;

    header {
      border-bottom: 2px solid #000;
    }

    legend, .permit-title {
      font-weight: bold;
      font-size: 2.7rem;
      color: #000000;
      line-height: 1;
    }

    .permit-card {
      display: flex;
      border-bottom: #e0e0e0 solid 1px;
      justify-content: space-evenly;
      align-items: center;
      label {
        display: grid;
        grid-template-columns: repeat(2,auto);
        grid-template-rows: auto auto;

      }
      dl {
        font-size: 2rem;
        display: flex;
      }
      dt, dd {
        font-weight: normal;
        font-size: inherit;
      }
      .permit-title {
        grid-row: 1;
        grid-column: 1/3;
      }
      .permit-status {
        grid-row: 2/3;
        grid-column: 2;
      }
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
</style>
