<template>
  <article class="register-schedule">
    <h1>스케쥴 등록</h1>
    <form>
      <fieldset id="register-date">
        <legend class="hidden">select date</legend>
        <BaseSelect class="select-years" :options="years"/>
        <BaseSelect class="select-months" :options="months"/>
      </fieldset>
      <fieldset id="register-table">
        <legend class="hidden">select class or create class</legend>
        <table>
          <thead>
          <tr>
            <td v-for="column of timeTable[0]">{{column?column:'수업개설'}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="row of timeTable.slice(1)">
            <td v-for="column of row">{{column?column:'수업개설'}}</td>
          </tr>
          </tbody>
        </table>
      </fieldset>
      <div id="register-buttons">
        <BaseButton v-for="button of buttons" v-html="button"/>
      </div>
    </form>
    <div id="create-class-modal">
      <select>
        <option v-for="v of [1,2,3]" v-html="`${v}학년`"/>
      </select>
      <select>
        <option v-for="v of ['수학', '국어', '사회']" v-html="`${v}`"/>
      </select>
    </div>
  </article>
</template>

<script>
import BaseSelect from '@/pages/user/teaching/register-schedule/BaseSelect'
import BaseButton from '@/pages/user/teaching/register-schedule/BaseButton'

export default {
  components: { BaseButton, BaseSelect },
  data () {
    return {
      years: [2019, 2020, 2021],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      buttons: ['저장', '제출하기'],
      timeTable: [
        ['수업시간', '월', '화', '수', '목', '금', '토'],
        ['09:00 ~ 10:00', '', '', '', '', '', ''],
        ['10:00 ~ 11:00', '3학년 수학', '', '', '', '', ''],
        ['18:00 ~ 19:00', '', '', '', '', '', ''],
        ['19:00 ~ 20:00', '', '', '', '', '', '']
      ]
    }
  }
}
</script>

<style lang=scss>
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

  h1 {
    grid-area: header;
    padding-bottom: 1.6rem;
    font-size: 3.4rem;
    line-height: 1;
    font-weight: 700;
    border-bottom: 2px solid #000;
  }

  $gap: 3rem;

  form {
    padding: $gap;
    grid-area: form;
    display: grid;
    grid-gap: $gap;
    grid-template-rows: repeat(5, 10rem);
    grid-template-columns: repeat(8, 10rem);

    .create-class-modal {
      position: absolute;
    }

    #register-date {
      display: contents;

      .BaseSelect {

        &.select-years {

        }

        &.select-months {

        }
      }
    }

    #register-table {
      grid-row: 2;
      grid-column: 1/-2;
    }

    #register-buttons {
      display: contents;

      button {
        grid-row: 3;
        background: #eee;
        border-radius: 0.5rem;

      }
    }
  }

}
</style>
