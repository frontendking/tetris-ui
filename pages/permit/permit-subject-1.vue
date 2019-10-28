<template>
  <article class="permit-subject-1">
    <header class="permit-header">
      <h1 v-html="heading"/>
    </header>
    <section class="permit-intro">
      <header>
        <h2 v-html="permitIntro.heading"/>
        <p v-html="permitIntro.paragraphs[0]"/>
      </header>
      <p v-html="permitIntro.paragraphs[1]"/>
    </section>
    <section class="permit-adventage">
      <h2 v-html="purchaseAdventage.heading"/>
      <p v-for="paragraph in purchaseAdventage.paragraphs" v-html="paragraph"/>
    </section>
    <section class="permit-form">
      <h3 v-html="permitForm.label"/>
      <form class="permit-form">
        <fieldset class="permit-selection">
          <div>
            <legend v-html="permitForm.permitSelection.legend"/>
            <ThePermitCard v-for="permitType in permitForm.permitSelection.permiTypes"
                           :key="permitType.id"
                           :id="permitType.id"
                           :type="permitType.type"
                           :price="permitType.price"
                           :discount="permitType.discount"
            />
          </div>
        </fieldset>
        <fieldset class="term-agreement">
          <div>
            <legend v-html="permitForm.termAggrement.legend"/>
            <BaseCheckbox type="checkbox" :label="permitForm.termAggrement.label"/>
            <label>
              {{permitForm.termAggrement.label}}
            </label>
            <article>
              <h1 v-html="permitForm.term.title"/>
              <p v-for=" content in permitForm.term.contents" v-html="content"/>
              <p class="term-notice" v-html="permitForm.term.notice"></p>
            </article>
          </div>
        </fieldset>
        <BaseButton>{{permitForm.submitBtn.label}}</BaseButton>
      </form>
    </section>

  </article>
</template>

<script>
import ThePermitCard from '@/components/permit/ThePermitCard/index'
import BaseCheckbox from '@/components/base/BaseCheckbox/index'
import BaseButton from '@/components/base/BaseButton/index'

export default {
  name: 'permit-subject-1',
  data () {
    const api = {
      permitTypes: [
        {
          id: 'p0',
          type: '12',
          price: '1800000',
          discount: '43%',
          imgUrl: '',
        },
        {
          id: 'p1',
          type: '6',
          price: '900000',
          discount: '43%',
          imgUrl: '',
        },
        {
          id: 'p2',
          type: '3',
          price: '300000',
          discount: '40%',
          imgUrl: '',
        },
        {
          id: 'p3',
          type: '1',
          price: '10000',
          discount: '40%',
          imgUrl: '',
        },
      ],
      permitTerm: {
        title: '*수업권 구매에 따른 추가 규정* (18.08.13)',
        contents: [
          '특정 프로그램을 일정 기간 동안 수강할 수 있는 수업권으로 수업권에 대한 전체 수강료를 구매 후, 클래스 수강 신청을 할 수 있습니다.',
          '1. 수업권 구매 후, 수업권으로 수강 가능한 클래스를 선택(수업권으로 수강하기) 하신 후, 클래스를 수강 가능합니다.',
          '2. 수업권에 이용 가능한 클래스 수가 부여되며, 클래스 수강신청시마다 클래스 수가 차감됩니다.',
          '3. 12개월 수업권 사용시, 개인 사정으로 12개월 기간내 보류가 필요한 경우 3개월 학습 경과된 후에 보류 신청이 가능하며, 1회에 3개월까지 가능, 최대 2회 보류 가능합니다. 6개월 수업권의 경우, 보류가 불가능 합니다.',
          '4. 수업권은 수업권으로 수강신청하게 되는 첫 번째 클래스에 수강 신청한 자녀 기준으로 이용 가능하며, 다른 사람에게 양도*양수 불가합니다. (1회 적발 시, 경고 / 2회 적발 시, 이용 가능한 클래스 1회 차감 / 3회 적발시, 이용 가능한 클래스 2회 차감, 4회 적발 시, 차감된 클래스 수를 제외한 나머지 횟수만큼 환불처리)',
          '5. 수업권 환불 시 클래스 수강 중인 경우 수강중인 클래스에 해당하는 수강료는 학원법을 따르며, 남은 개월 수는 전액 환불하고, 12개월권의 경우 할인율을 적용하지 않은 원 수강료 기준을 적용하여 환불됩니다.',
        ],
        notice: '* 수업권에 대한 규정은 추가 및 변경될 수 있으며, 이전 내용이 변경되는 경우, 별도 안내됩니다.',
      },
    }
    return {
      heading: '<span>일간 대치동</span> 3과목 수업권',
      permitIntro: {
        heading: '수업권 구매 소개',
        paragraphs: [
          '일간대치동 수업을 매일 <em>3과목 수업</em>을 구매할 수 있는 수업권입니다.',
          '구매하신 수업권이 기간에 따라 1개월, 3개월, 6개월, 12개월 동안 일간 대치동 전과목 중 원하는 과목을 선택하여 수강할 수 있는 수업권입니다. <strong>수업권 구매를 결제 완료되어야 수업을 신청</strong>할 수 있습니다.',
        ],
      },
      purchaseAdventage: {
        heading: '수업권 구매 시 혜택',
        paragraphs: [
          `희망하는 튜터의 수업을 선점할 수 있도록 매월 정기 수강
          신청일보다 2일 먼저 수강 신청할 수 있는 우선권을 드립니다.`,
          `<strong>1~6 개월 수업권은 정가보다 <em>40% 할인</em>, 12개월 수업권은 정가보다
          <em>43% 할인</em>된 금액으로 구매 가능합니다.</strong>`,
        ],
      },
      permitForm: {
        label: '수업권 신청 폼',
        permitSelection: {
          legend: '수업권 선택',
          permiTypes: api.permitTypes,
        },
        termAggrement: {
          legend: '구매약관 동의',
          label: api.permitTerm.title,
        },
        term: api.permitTerm,
        submitBtn: {
          label: '동의 후 결제',
        },
      },
    }
  },
  components: {
    BaseButton,
    BaseCheckbox,
    ThePermitCard,
  },
}
</script>

<style lang=scss>
@import '@/assets/style/color.scss';

@function headings($from:1, $to:6) {
  @if $from == $to {
    @return 'h#{$from}';
  } @else {
    @return 'h#{$from},'+headings($from+1, $to)
  }
}

.permit-subject-1 {
  $grid-row-gap: 3.7rem;

  section {
    margin-bottom: 4.7rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p {
    color: $onBackground-variant;
  }

  #{headings(1,6)}, header, header > * {
    margin-bottom: $grid-row-gap;
    color: $onBackground;
    font-size: 2.8rem;
    font-weight: bold;
  }

  position: relative;
  font-size: 2.2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: $grid-row-gap;
  color: $onBackground;

  header, h1.permit-header {
    display: none;
  }

  section.permit-intro {
    strong {
      font-weight: 600;
    }

    header {
      h2 {
        display: none;
      }

      p {
        font-size: 2.8rem;
        font-weight: bold;
        width: 45.7rem;

        em {
          color: $primary;
        }

      }
    }

  }

  section.permit-adventage {
    margin-bottom: 0;

    strong {
      color: $onBackground-variant;
      font-weight: normal;
    }

    em {
      color: $red;
      font-weight: bold;
    }

  }

  section.permit-form {
    display: flex;
    flex-flow: column;

    form.permit-form {
      display: flex;
      flex-flow: column;
    }

    h3 {
      display: none;
    }

    .permit-selection > div {
      legend {
        display: none;
      }

      display: grid;
      grid-template-rows: repeat(2, 32.4rem);
      grid-template-columns: repeat(2, auto);
      grid-gap: 1.6rem;
    }

    .ThePermitCard {
      &:nth-of-type(1) {
        background-color: #ffbc51;
      }

      &:nth-of-type(2) {
        background-color: #74bbc7;
      }

      &:nth-of-type(3) {
        background-color: #72baa5;
      }

      &:nth-of-type(4) {
        background-color: #7275ba;
      }
    }

    .term-agreement {
      padding-top: 4.4rem;

      div {
        position: relative;

        &:after {
          content: '';
          width: 1.4rem;
          height: 0.7rem;
          background: url("./assets/select-arrow.svg") no-repeat top left / contain;
          margin-left: auto;
          bottom: 3rem;
          position: absolute;
          right: 2rem;
        }
      }

      legend {
        padding: 1.6rem 0;
        font-size: 2.8rem;
        font-weight: bold;

      }

      label {
        display: flex;
        border-top: 2px solid #000000;
        border-bottom: 1px solid #000000;
        justify-content: flex-start;
        align-items: center;
        height: 7.1rem;
        font-weight: 500;
        font-size: 2rem;
        padding-left: 6.5rem;

      }

      input {
        order: initial;
        margin-right: 1rem;
        position: absolute;
        bottom: 1.8rem;
        left: 2rem;
      }

      article {
        padding: 1rem;
        margin-bottom: 1rem;
        display: none;

        h1 {
          color: #000000;
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
          text-indent: -1.5rem;
          margin-left: 1.5rem;
          padding-left: 0.5rem;
        }

        border-bottom: 1px solid #000000;
      }
    }

    button {
      margin-top: 4rem;
      width: 100%;
    }
  }

}

@media(min-width: 641px) {
  $font-size-default: 1.6rem;

  .permit-subject-1 {
    font-size: $font-size-default;
    position: relative;
    margin: 0 auto;
    grid-row-gap: 2.9rem;
    color: $onBackground;

    section {
      margin-bottom: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    p {
      color: $onBackground-variant;
    }

    #{headings(1,6)}, header, header > * {
      margin-bottom: 0;
      font-size: 1.9rem;
      font-weight: bold;
    }

    h1 {
      display: flex;
      font-size: 3.4rem;
      font-weight: bolder;
      line-height: 1;
      padding-bottom: 1.8rem;
      border-bottom: 2px solid #000000;
    }

    section.permit-intro {
      display: grid;
      grid-template-columns: auto;
      grid-row-gap: 3.6rem;

      strong {
        font-weight: 600;
      }

      header {
        h2 {
          display: none;
        }

        p {
          font-size: $font-size-default;
          font-weight: normal;
          width: initial;
          color: $onBackground-variant;

          em {
            color: $onBackground-variant;
            font-weight: bold;
          }

        }
      }

    }

    section.permit-adventage {
      margin-bottom: 0;

      strong {
        color: $onBackground-variant;
        font-weight: normal;
      }

      em {
        color: $red;
        font-weight: bold;
      }

    }

    section.permit-form {
      display: flex;
      flex-flow: column;

      form.permit-form {
        display: flex;
        flex-flow: column;
      }

      h3 {
        display: none;
      }

      .permit-selection > div {
        legend {
          display: none;
        }
        grid-template-rows: unset;
        grid-template-columns: repeat(auto-fill, minmax(22.4rem, auto));
        justify-items: center;
        grid-gap: 1.6rem;
      }

      .ThePermitCard {
        &:nth-of-type(1) {
          background-color: #ffbc51;
        }

        &:nth-of-type(2) {
          background-color: #74bbc7;
        }

        &:nth-of-type(3) {
          background-color: #72baa5;
        }

        &:nth-of-type(4) {
          background-color: #7275ba;
        }
      }

      .term-agreement {
        padding-top: 4.4rem;

        div {
          position: relative;

          &:after {
            content: '';
            width: 1.4rem;
            height: 0.7rem;
            background: url("./assets/select-arrow.svg") no-repeat top left / contain;
            margin-left: auto;
            bottom: 3rem;
            position: absolute;
            right: 2rem;
          }
        }

        legend {
          padding: 1.6rem 0;
          font-size: 2.8rem;
          font-weight: bold;

        }

        label {
          display: flex;
          border-top: 2px solid #000000;
          border-bottom: 1px solid #000000;
          justify-content: flex-start;
          align-items: center;
          height: 7.1rem;
          font-weight: 500;
          font-size: 2rem;
          padding-left: 6.5rem;

        }

        input {
          order: initial;
          margin-right: 1rem;
          position: absolute;
          bottom: 1.8rem;
          left: 2rem;
        }

        article {
          padding: 1rem;
          margin-bottom: 1rem;
          display: none;

          h1 {
            color: #000000;
            font-size: 1.5rem;
            border: none;
            + p {
              padding-bottom: 1.8rem;
            }
          }
          .term-notice {
            padding-top: 1.8rem;
          }
          border-bottom: 1px solid #000000;
        }
      }

      button {
        margin: 3rem auto 8rem auto;
      }
    }

  }
}
</style>
