<template>
  <div id="assignment-details-2230" class="modal fade TheRegisterScheduleModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <TheClassTimeTable :table-body="timeTable" :col-header="colHeader" :row-header="rowHeader"/>
        <p>총 3개의 수업을 신청하였습니다.</p>
        <BaseButton :label="'제출하기'"/>
      </div>
    </div>
  </div>

</template>

<script>
import TheClassTimeTable from '@/components/class/TheClassTimeTable'
import BaseButton from './BaseButton'

export default {
  name: 'TheRegisterScheduleModal',
  components: { BaseButton, TheClassTimeTable },
  data () {
    return {
      colHeader: ['수업시간', '월', '화', '수', '목', '금', '토'],
      rowHeader: ['09:00 ~ 10:00', '10:00 ~ 11:00', '18:00 ~ 19:00', '19:00 ~ 20:00'],
      timeTable: [
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
      ]
    }
  }
}
</script>

<style lang=scss>
@import '@/assets/style/color.scss';

$module-height: 5rem;
@media (min-width: 768px) {
  .modal-dialog {
    width: 120rem !important;
  }
}
.modal-content {
  padding: 5rem 5rem 5rem 5rem;
}

.TheRegisterScheduleModal {
  p {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
  }
  .BaseButton {
    height: $module-height;
    background: $primary;
    color: $onPrimary;
    font-size: 2rem;
    font-weight: 700;
    width: 15rem;
    margin: 0 auto;
    margin-top: 3rem;
    display: block
  }

  form {
    font-size: 1rem;
    font-size: 1.5rem;
    display: grid;
    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 2em;
    padding: 2em;
    align-items: center;

    h1 {
      font-size: 3em;
      font-weight: bolder;
      grid-column-end: span 6;
    }

    p {
      grid-row: 2;
      grid-column-end: span 6;
      font-size: 1.5em;
    }

    fieldset {
      display: contents;

      ul {
        grid-column-end: span 5;
        display: flex;

        li {
          display: flex;
          font-size: 1.5em;
          align-items: center;

          label {
            order: 1;
            margin-right: 1.3em;
            height: 1em;
          }

          input {
            margin-right: 0.3em;
          }
        }
      }

      legend {
        grid-column-end: span 1;
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;

        &:after {
          content: ':';
        }
      }

      &#buttons {
        button {
          font-size: 1.5em;
          width: 6em;
          height: 2em;
          border-radius: 0.3em;
          text-align: center;

          &:last-child {
            background: $primary;
            color: $onPrimary;
          }

          &:first-child {
            background: #eee;
            justify-self: flex-end;
          }

          grid-row-end: -1;
          grid-column-end: span 3;
        }
      }
    }
  }
}
</style>
