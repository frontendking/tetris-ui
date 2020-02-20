<template>
  <form class="TheClassSearchBox">
    <fieldset class="select-grades">
      <div class="fieldset-wrap">
        <legend>{{selectGrades.heading}}</legend>
        <div class="input">
          <div class="select-box">
            <select>
              <option v-for="v in selectGrades.paragraphs">{{v|gradeForm}}</option>
            </select>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset class="sellect-subjects">
      <div>
        <legend>{{selectSubjects.heading}}</legend>
        <div class="tutor-checkbox" v-for="v in selectSubjects.paragraphs">
          <input type="checkbox" :id="`subject${v.id}`" :value="v.name">
          <label :for="`subject${v.id}`">{{v.name}}</label>
        </div>
      </div>
    </fieldset>
    <button class="find-buttons">{{findButtons.heading}}</button>
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
    selectGrades () {
      return {
        heading: '학년 선택',
        paragraphs: this.grades,
      }
    },
    selectSubjects () {
      return {
        heading: '과목 선택',
        paragraphs: this.subjects,
      }
    },
    findButtons () {
      return {
        heading: '검색',
      }
    },
  },
  filters: {
    gradeForm (v) {
      return v + '학년'
    },
  },
}
</script>

<style lang=scss>

.TheClassSearchBox {
  .select-grades {
    display: none;
  }
  .sellect-subjects {
    grid-area: b;
  }
  .find-buttons {
    grid-area: d;
  }
  padding: 4rem 11rem;
  display: grid;
  /*@formatter:off*/
  grid-template:
    "a a b b b"
    ". . . . ."
    "d d d d d";
  /*@formatter:on*/
  line-height: 1;
  background-color: #f6f6f6;
  border-top: 2px solid #000000;
  border-bottom: #a3a3a3 1px solid;

  font-size: 1.6rem;
  font-weight: 500;
  > * {
    align-self: center;
  }
  legend, label {
    display: flex;
    align-items: center;
  }

  legend {
    font-size: 2rem;
    font-weight: bold;
  }

  fieldset {
    div {
      display: flex;
    }
  }

  .select-grades {
    grid-area: a;
    align-self: stretch;

    .fieldset-wrap {
      height: 100%;
    }

    legend {
      flex: 1 1 auto;
    }

    .input {
      position: relative;
      flex: 2 1 auto;

      select {
        border: none;

      }

      .select-box {
        width: 12rem;
        justify-content: space-between;
        align-items: center;

        &:after {
          content: '';
          background-repeat: no-repeat;
          background-image: url('./assets/select-arrow.svg');
          padding-top: 7px / 13px * 10%;
          width: 10%;
        }

        border-bottom: 1px solid #000000;
      }
    }
  }

  .sellect-subjects {
    grid-area: b;

    legend {
      justify-content: center;
      flex: 1 0 auto;
    }

    .tutor-checkbox {
      flex: 1 0 auto;
      display: flex;
      justify-content: flex-end;

      label {
        margin-left: 1.5rem;
      }
    }

    input[type=checkbox] {
      appearance: none;
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid #cdcdcd;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      background-color: #fff;
      font-weight: 500;
      color: #e1e1e1;

      &:checked:before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: '\02143';
        transform: rotate(40deg);
        color: #fff;
      }

      &:before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: '\02143';
        transform: rotate(40deg);
      }

      &:checked {
        background-color: #00b9fd;
      }
    }
  }

  button {
    grid-area: d;
    border: none;
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    height: 5rem;
    font-size: 1.6rem;
    font-weight: normal;
  }
}
.TheClassSearchBox.learning-update-subject {
  /*@formatter:off*/
    grid-template:
      "b b b d" auto/
      auto auto auto auto;
  /*@formatter:on*/
  legend, .tutor-checkbox {
    justify-content: flex-start;
  }
;
}
</style>
