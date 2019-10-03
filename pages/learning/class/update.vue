<template>
  <article class="search">
    <h1 v-html="heading"/>
    <TheClassTimeTable
      id="theClassTimeTable"
    />
    <div class="theFooterButtons">
      <button class="cancel" type="button" v-html="form.btns.cancelBtn"/>
      <button v-html="form.btns.submitBtn"/>
    </div>
  </article>
</template>

<script>
import TheClassSearchBox from '@/components/class/TheClassSearchBox'
import TheClassTimeTable from '@/components/class/TheClassTimeTable'

export default {
  props: ['page', 'users'],
  components: {
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
  h1, h2 {
    color: #000000;
  }

  > h1 {
    grid-area: header;
    display: initial;
    font-size: 3.4rem;
    font-weight: bolder;
    line-height: 1;
    padding-bottom: 1.8rem;
    border-bottom: 2px solid #000000;
  }
  #theClassTimeTable {
    margin-top: 5rem;
  }
  .theFooterButtons {
    grid-area: btns;
    display: flex;
    width: 37.2rem;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    button {
      padding: 1rem;
      background-color: #34b4f9;
      color: #ffffff;
      width: 18rem;
      height: 5rem;
      border-radius: initial;
      text-align: center;

      &.cancel {
        background-color: #999;
      }
    }
  }
}


</style>
