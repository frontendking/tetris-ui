<template>
  <article class="search">
    <h1 v-html="heading" class="hidden"/>
    <TheClassSearchBox
      class="learning-update-subject"
    />
    <form class="TheClassUpdateForm">
      <TheClassTimeTable
        id="theClassTimeTable"
        :table-body="tableBody"
      />
      <TheFooterButtons
        cancel-label="이전"
        apply-label="저장"
      />
    </form>
  </article>
</template>

<script>
import TheClassSearchBox from '@/components/class/TheClassSearchBox'
import TheClassTimeTable from '@/components/class/TheClassTimeTable'
import TheFooterButtons from '@/components/admin/TheFooterButtons'

export default {
  props: ['page', 'users'],
  components: {
    TheFooterButtons,
    TheClassSearchBox,
    TheClassTimeTable,
  },
  data () {
    return {
      heading: '수업시간 변경',
      form: {
        btns: {
          cancelBtn: '이전',
          submitBtn: '저장'
        }
      },
      tableBody: [
        [
          `<div class="checkbox-update-class">
  <input type="checkbox" id="ch1"><label for="ch1" value="class1">이현식 <div class="class-status">마감임박</div></label>
</div>`,
          '',
          `<div class="checkbox-update-class">
  <input type="checkbox" id="ch2"><label for="ch2" value="class1">김미진</label>
</div>`,
          , '', '',
        ],
        [
            `<div class="checkbox-update-class">
  <input type="checkbox" id="ch3"><label for="ch3" value="class1">이현식 <div class="class-status">마감임박</div></label>
</div><div class="checkbox-update-class">
  <input type="checkbox" id="ch4"><label for="ch4" value="class1">김미진</label>
</div>`,

          '', '', '', '', '',
        ], ['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '']
      ]
    }
  },
}
</script>

<style lang=scss>
.search {
  display: grid;

  /*@formatter:off*/
  grid-template:
    "header" auto
    "table" auto
    "btns" 10rem/
    auto;
  /*@formatter:on*/

  .TheClassSearchBox {
    grid-area: header;
    border-top: none;
  }

  .TheClassUpdateForm {
    display: contents;

    #theClassTimeTable {
      grid-area: table;
      margin-top: 5rem;
      .class-info {
        display: inline-block;
      }
      .checkbox-update-class {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
        input {
          display: none;
          & + * {
            display: flex;
            flex-flow: column;
            background: #eee;
            padding: 0.5rem;
          }

          &:checked + * {
            background-color: #34b4f9;
          }
        }
      }
    }

    .TheFooterButtons {
      grid-area: btns;
    }
  }
}
</style>
