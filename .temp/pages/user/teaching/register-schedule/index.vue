<template>
  <article class="register-schedule">
    <h1>스케쥴 등록</h1>
    <form>
      <h1>클래스 개설</h1>
      <fieldset id="register-date">
        <legend class="hidden">select date</legend>
        <div class="select-years">
          <BaseSelect :options="years"/>
        </div>
        <div class="select-months">
          <BaseSelect :options="months"/>
        </div>
        <div class="select-subject">
          <BaseSelect :options="subjects"/>
        </div>
        <div class="select-grade">
          <BaseSelect :options="grades"/>
        </div>
      </fieldset>
      <ul id="register-description">
        <li>수업 개설을 원하는 요일과 시간을 클릭해 주세요.</li>
        <li>선택한 요일과 시간을 수정하려면 선택한 학년과 과목을 클릭하여 변경해 주세요.</li>
        <li>스케줄을 다시 등록하려면 클래스 담당자에게 문의해 주세요.</li>
      </ul>
      <fieldset id="register-table">
        <legend class="hidden">select class or create class</legend>
        <TheClassTimeTable :table-body="timeTable" :col-header="colHeader" :row-header="rowHeader"/>
      </fieldset>
      <div id="register-buttons">
        <BaseButton :label="'저장'"/>
        <a class="modal-btn" data-toggle="modal" data-target="#assignment-details-2230">제출하기</a>
      </div>
    </form>
    <TheRegisterScheduleModal/>
  </article>

</template>

<script>
import BaseSelect from '@/pages/user/teaching/register-schedule/BaseSelect'
import BaseButton from '@/pages/user/teaching/register-schedule/BaseButton'
import TheClassTimeTable from '@/components/class/TheClassTimeTable'
import TheRegisterScheduleModal from '@/pages/user/teaching/register-schedule/TheRegisterScheduleModal'

export default {
  components: { TheRegisterScheduleModal, TheClassTimeTable, BaseButton, BaseSelect },
  data () {
    return {
      years: [2019, 2020, 2021],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      subjects: ['국어', '수학', '영어', '사회'],
      grades: [1, 2, 3, 4, 5],
      buttons: ['저장', '제출하기'],
      colHeader: ['수업시간', '월', '화', '수', '목', '금', '토'],
      rowHeader: ['09:00 ~ 10:00', '10:00 ~ 11:00', '18:00 ~ 19:00', '19:00 ~ 20:00'],
      timeTable: [
        [
          `<input type="checkbox">`,
          `<div class="class-old-anchor"> <input type="checkbox"> <a href="#">1학년 국어</a> </div> `,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`
        ],
        [
          `<input type="checkbox">`,
          `<div class="class-new-anchor"><input type="checkbox"><a class="class-new" href="#">5학년 수학</a></div>`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`
        ],
        [
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`
        ],
        [
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`,
          `<input type="checkbox">`
        ]
      ]
    }
  }
}
</script>

<style lang=scss>
/*@import "./assets/chsone.css";*/
@import '@/assets/style/color.scss';
/*@import './assets/modal.css';*/

$module-height: 5rem;

.register-schedule {
  position: relative;
  font-size: 1.5rem;
  display: grid;
  /*@formatter:off*/
  grid-template:
    'header' auto
    'form' auto/
    auto;
  /*@formatter:on*/
;

  .hidden {
    position: absolute;
    left: -9999px;
  }

  > h1 {
    grid-area: header;
    padding-bottom: 1.6rem;
    font-size: 3.4rem;
    line-height: 1;
    font-weight: 700;
    border-bottom: 2px solid #000;
  }

  > form {
    padding: 3rem;
    grid-area: form;
    display: grid;
    column-gap: 1.5rem;
    row-gap: 3rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    > h1 {
      align-self: center;
      font-size: 3rem;
      grid-column-end: span 2;
      justify-self: center;
    }

    .create-class-modal {
      position: absolute;
    }

    > #register-date {
      display: contents;

      > div {
        grid-column-end: span 1;
        align-self: center;

        .chosen-single {
          line-height: $module-height;
        }
      }
    }

    > #register-table {
      grid-column: 1/-1;
    }

    > #register-buttons {
      display: contents;

      a {
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button, a {
        &:first-child {
          grid-column-start: 5;
        }

        grid-column-end: span 2;
        height: $module-height;
        background: $primary;
        color: $onPrimary;
        font-size: 2rem;
        font-weight: 700;
      }
    }

    #register-description {
      margin-left: 0;
      padding-left: 0;
      font-size: 1.5rem;

      li {
        padding-left: 0.5em;
        line-height: 1.5;

        &:before {
          content: '*';
          position: relative;
          top: 0.3em;
          margin-left: -0.5em;
          padding-right: 0.5em;
        }
      }

      grid-column-end: span 6;
    }
  }

  $class-btn-size: 70%;

  .TheClassTimeTable {
    div {
      a {
        position: relative;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem 0.5rem;
        justify-content: flex-start;
        align-items: center;
        color: $onPrimary;
        display: inline-flex;
        width: $class-btn-size;
        height: $class-btn-size;
        margin: 0 auto;
        border-radius: 0.5rem;
      }
      input {
        display: inline-block;
        margin-right: 0.5em;
      }
    }


    .class-old-anchor {
      a {
        background: #0c79c5;
        &:after {
          content: '수업';
          display: block;
          position: absolute;
          right: 5%;
          padding: 0.3rem;
          border-radius: 0.3rem;
          background: tomato;
        }
      }


    }

    .class-new-anchor {
      a {
        background: #0d7444;
        &:after {
          content: '신규';
          display: block;
          position: absolute;
          right: 5%;
          padding: 0.3rem;
          border-radius: 0.3rem;
          background: tomato;
        }
      }
    }
  }
}

</style>
