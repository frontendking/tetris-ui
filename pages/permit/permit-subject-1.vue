<template>
  <article class="permit-subject-1">
<!--    <header class="permit-header">-->
<!--      <h1 v-html="heading"/>-->
<!--    </header>-->
<!--    <section class="permit-intro">-->
<!--      <header>-->
<!--        <h2 v-html="permitIntro.heading"/>-->
<!--        <p v-html="permitIntro.paragraphs[0]"/>-->
<!--      </header>-->
<!--      <p v-html="permitIntro.paragraphs[1]"/>-->
<!--    </section>-->
<!--    <section class="permit-adventage">-->
<!--      <h2 v-html="purchaseAdventage.heading"/>-->
<!--      <p v-for="paragraph in purchaseAdventage.paragraphs" v-html="paragraph"/>-->
<!--    </section>-->
    <section class="permit-form">
      <h3 v-html="permitForm.label"/>
      <form class="permit-form">
<!--        <fieldset class="permit-selection">-->
<!--          <div>-->
<!--            <legend v-html="permitForm.permitSelection.legend"/>-->
<!--            <ThePermitCard v-for="permitType in permitForm.permitSelection.permiTypes"-->
<!--                           :key="permitType.id"-->
<!--                           :id="permitType.id"-->
<!--                           :type="permitType.type"-->
<!--                           :price="permitType.price"-->
<!--                           :discount="permitType.discount"-->
<!--            />-->
<!--          </div>-->
<!--        </fieldset>-->
        <fieldset class="term-agreement">
          <div>
            <legend v-html="permitForm.termAggrement.legend"/>
            <BaseCheckbox :checkboxId="`termAggrementCheck`" :label="permitForm.termAggrement.label"/>
            <article>
              <h1 v-html="permitForm.term.title"/>
              <p v-for=" content in permitForm.term.contents" v-html="content"/>
            </article>
          </div>
        </fieldset>
        <button v-html="permitForm.submitBtn.label"/>
      </form>
    </section>

  </article>
</template>

<script>
import faker from 'faker/locale/ko'
import { genLorem } from '@/utils'
import ThePermitCard from '@/pages/ThePermitCard/index'
import BaseCheckbox from '@/components/base/BaseCheckbox/index'

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
        title: '수업권 규정 및 이용약관(필수)를 확인하고 동의 합니다.',
        contents: [...genLorem(10, faker.lorem.sentences)],
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
    BaseCheckbox,
    ThePermitCard,
  },
}
</script>

<style lang=scss>
@import '@/assets/style/global.scss';

$heading-font: 4.2rem;
$heading-p-t: 5.9rem;
$heading-p-b: 8.1rem;
$heading-b-m: 6rem;

$grid-row-gap: 3.7rem;

%permit-sub-grid {
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: $grid-row-gap;
}

em {
  color: $primary;
}

section {
  margin-bottom: 4.7rem;
}

@function headings($from:1, $to:6) {
  @if $from == $to {
    @return 'h#{$from}';
  } @else {
    @return 'h#{$from},'+headings($from+1, $to)
  }
}

#{headings(1,6)}, header {
  margin-bottom: $grid-row-gap;
}

.permit-subject-1 {
  position: relative;
  font-size: 2.2rem;
  display: grid;
  margin: 0 auto;
  /*@formatter:off*/
  grid-template:
    "intro" auto
    "adventage" auto
    "form" auto/
      auto;
  /*@formatter:on*/
  grid-row-gap: $grid-row-gap;
  padding: 2rem;

  header.permit-header {
    display: none;
  }

  section.permit-intro {
    header {
      h2 {
        display: none;
      }

      p {
        font-weight: bold;
      }
    }
  }

  section.permit-adventage {
    p {
      &:before {
        content: '-';
      }
    }

    strong, em {
      color: #ff4639;
      font-weight: normal;
    }

  }

  section.permit-form {
    display: flex;
    flex-flow: column;

    h3 {
      display: none;
    }

    .permit-selection > div {
      legend {
        display: none;
      }

      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, auto);
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

      legend {
        padding: 1.6rem 0;
        font-size: 2.8rem;
        font-weight: bold;
      }

      .BaseCheckbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 7.1rem;
        border-top: 2px solid #000000;
        border-bottom: 1px solid #000000;
        padding: 0 2rem;
        font-weight: 500;
        font-size: 2rem;

        &:after {
          content: '';
          width: 1.4rem;
          height: 0.7rem;
          background: url("./assets/select-arrow.svg") no-repeat top left / contain;
          margin-left: auto;
        }
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
          text-indent: -0.6rem;

          &:before {
            content: '- ';
          }

          padding-left: 0.5rem;
        }

        border-bottom: 1px solid #000000;
      }
    }

  }

}

@media(min-width: 641px) {
  .permit-subject-1 {
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #6e737d;
    grid-gap: 2.9rem;
    /*@formatter:off*/
    grid-template:
      "header" auto
      "intro" auto
      "adventage" auto
      "form" auto/
      auto;
  /* @formatter:on*/
    .permit-header {
      display: initial;
    }

    .permit-form > h3,
    .permit-selection legend {
      display: none;
    }

    section > header {
      font-size: 1.6rem;
      font-weight: normal;
      line-height: 1.56;
      letter-spacing: normal;
      color: #6e737d;
      width: initial;

      em {
        color: inherit;
      }
    }

    h2, legend, label {
      color: #000000;
    }

    section h2:first-child {
      font-size: 1.8rem;
      font-weight: bold;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: -0.101rem;
      width: 40.7rem;
      margin: initial;
    }

    /*@formatter:on*/
    .permit-header {
      grid-area: header;

      h1 {
        width: 100%;
        font-size: 3.4rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.085rem;
        border-bottom: solid 2px #000000;
        padding-bottom: 1.6rem;
        color: #000000;
      }
    }

    .permit-adventage {
      p {
        &:before {
          content: '-';
        }
      }

      strong, em {
        color: #ff4639;
        font-weight: normal;
      }

    }

    .permit-form {
      display: flex;
      flex-flow: column;

      .permit-selection > div {
        display: flex;
        width: 95rem;
        justify-content: space-between;
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

        legend {
          padding: 1.6rem 0;
        }

        label {
          display: block;
          padding: 2.7rem 0;
          width: 100%;
          max-width: initial;
          border-top: 2px solid #000000;
          border-bottom: 1px solid #000000;
        }

        article {
          padding: 1rem;
          margin-bottom: 1rem;

          h1 {
            color: #000000;
            font-size: 1.5rem;
          }

          p {
            font-size: 1.2rem;
            text-indent: -0.6rem;

            &:before {
              content: '- ';

            }

            padding-left: 0.5rem;
          }

          border-bottom: 1px solid #000000;
        }
      }

    }

    button {
      padding: 1rem;
      background-color: #34b4f9;
      color: #ffffff;
      border-radius: 0.5rem;
      align-self: center;
    }
  }
}
</style>
