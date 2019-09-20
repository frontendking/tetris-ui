<template>
  <article class="permit-subject-1">
    <header>
      <h1><span>{{permitTitle.sub}}</span> {{permitTitle.main}}</h1>

    </header>
    <div class="banner event"></div>
    <section id="permit-intro">
      <h1>{{permitIntro.heading}}</h1>
      <p v-for="paragraph in permitIntro.paragraphs">{{paragraph}}</p>
    </section>
    <section id="permit-adventage">
      <h1>{{purchaseAdventage.heading}}</h1>
      <p v-for="paragraph in purchaseAdventage.paragraphs">{{paragraph}}</p>
    </section>
    <footer id="permit-footer">
      <section>
        <h1>{{permitForm.label}}</h1>
        <form class="permit-form">
          <fieldset class="permit-selection">
            <div>
              <legend>{{permitForm.permitSelection.legend}}</legend>
              <template v-for="permitType in permitForm.permitSelection.permiTypes">
                <label :for="permitType.id">
                  <div class="permit-summary-title">{{permitType.title}}</div>
                  <div class="permit-summary-price">{{permitType.price}}</div>
                  <div class="permit-summary-discount">{{permitType.discount}}</div>
                </label>
                <input :id="permitType.id" type="radio" name="permitType" :value="permitType.id">
              </template>
            </div>
          </fieldset>
          <filedset class="term-agreement">
            <legend>{{permitForm.termAggrement.legend}}</legend>
            <input type="checkbox" id="term-aggrement-checkbox">
            <label for="term-aggrement-checkbox">{{permitForm.termAggrement.label}}</label>
          </filedset>
          <button>{{permitForm.submitBtn.label}}</button>
        </form>
      </section>
    </footer>
  </article>
</template>

<script>
import faker from 'faker/locale/ko'
import { genLorem } from '@/utils'

export default {
  name: 'permit-subject-1',
  data () {
    const api = {
      permitTypes: [
        {
          id: 'p0',
          title: '12개월 수업권',
          price: '1800000',
          discount: '43%',
          imgUrl: '',
        },
        {
          id: 'p1',
          title: '6개월 수업권',
          price: '900000',
          discount: '43%',
          imgUrl: '',
        },
        {
          id: 'p2',
          title: '3개월 수업권',
          price: '300000',
          discount: '40%',
          imgUrl: '',
        },
        {
          id: 'p3',
          title: '1개월 수업권',
          price: '10000',
          discount: '40%',
          imgUrl: '',
        }
      ],
      permitTerm: {
        title: '수업권 규정 및 이용약관(필수)를 확인하고 동의 합니다.',
        contents: [...genLorem(10, faker.lorem.sentences)]
      }
    }
    return {
      permitTitle: {
        main: '일간 대치동',
        sub: '3과목 수업권',
      },
      permitIntro: {
        heading: '수업권 구매 소개',
        paragraphs: [
          '일간대치동 수업을 매일 3과목 수업을 구매할 수 있는 수업권입니다.',
          '구매하신 수업권이 기간에 따라 1개월, 3개월, 6개월, 12개월 동안 일간 대치동 전과목 중 원하는 과목을 선택하여 수강할 수 있는 수업권입니다. 수업권 구매를 결제 완료되어야 수업을 신청할 수 있습니다.'
        ]
      },
      purchaseAdventage: {
        heading: '수업권 구매 시 혜택',
        paragraphs: [
          '희망하는 튜터의 수업을 선점할 수 있도록 매월 정기 수강 신청일보다 2일 먼저 수강 신청할 수 있는 우선권을 드립니다.',
          '1~6 개월 수업권은 정가보다 40% 할인, 12개월 수업권은 정가보다 43% 할인된 금액으로 구매 가능합니다.'
        ]
      },
      permitForm: {
        label: '수업권 신청 폼',
        permitSelection: {
          legend: '수업권 선택',
          permiTypes: api.permitTypes
        },
        termAggrement: {
          legend: '구매약관 동의',
          label: api.permitTerm.title
        },
        term: api.permitTerm,
        submitBtn: {
          label: '수업권 구매하기'
        }
      }
    }
  }
}
</script>

<style lang=scss>
.permit-subject-1 {
}
</style>
