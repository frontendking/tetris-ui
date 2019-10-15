<template>
  <article class="search">
    <h1 v-html="heading" class="hidden"/>
    <TheClassSearchBox/>
    <TheClassTimeTable
      id="theClassTimeTable"
    />
    <TheFooterButtons
      cancel-label="이전"
      apply-label="저장"
    />
  </article>
</template>

<script>
import TheClassSearchBox from '@/components/class/TheClassSearchBox'
import TheClassTimeTable from '@/components/class/TheClassTimeTable'
import TheFooterButtons from '@/components/temp/admin/TheFooterButtons'

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
      }
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

  #theClassTimeTable {
    grid-area: table;
    margin-top: 5rem;
  }

  .TheFooterButtons {
    grid-area: btns;
  }
}
</style>
