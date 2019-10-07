<template>
  <article class="search">
    <h1 v-html="heading" class="hidden"/>
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
import TheFooterButtons from '@/pages/admin/TheFooterButtons'

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
    "table" auto
    "btns" 10rem/
    auto;
  /*@formatter:on*/
  #theClassTimeTable {
    margin-top: 5rem;
  }
}


</style>
