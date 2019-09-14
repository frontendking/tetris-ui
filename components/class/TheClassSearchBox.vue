<template>
  <form class="TheClassSearchBox">
    <fieldset>
      <legend>{{selectGrades.heading}}</legend>
      <select>
        <option v-for="v in selectGrades.paragraphs">{{v}}</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>{{selectSubjects.heading}}</legend>
      <select>
        <option v-for="v in selectSubjects.paragraphs">{{v}}</option>
      </select>
    </fieldset>
    <button>{{findButtons.heading}}</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      grades: [1, 2, 3, 4],
      subjects: [
        {
          id: '1',
          name: '국어',
        },
        {
          id: '2',
          name: '수학',
        },
        {
          id: '3',
          name: '사회/과학',
        },
      ],
    }
  },
  computed: {
    selectGrades(){
      return {
        heading: '학년 선택',
        paragraphs: this.grades,
      }
    },
    selectSubjects() {
      return {
        heading: '과목 선택',
        paragraphs: this.subjects.map(v => v.name),
      }
    },
    findButtons() {
      return {
        heading: '검색'
      }
    }
  },
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.TheClassSearchBox {
}
</style>
