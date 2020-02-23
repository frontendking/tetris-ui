<template>
  <form class="FormSearchClass" onsubmit="return false;">
    <FieldsetSelectGrade :options="grades" />
    <FieldsetSelectSubject :input-boxes="subjects" />
    <BaseButton id="btnSearchTimeList" type="button">
      검색
    </BaseButton>
  </form>
</template>

<script>
// import BaseSelect from '@/components/Base/BaseSelect'
import BaseButton from '@/components/Base/BaseButton'
// import BaseLegend from '@/components/Base/BaseLegend'
// import BaseFieldset from '@/components/Base/BaseFieldset'
import FieldsetSelectGrade from '@/pages/apply/FieldsetSelectGrade'
import FieldsetSelectSubject from '@/pages/apply/FieldsetSelectSubject'

export default {
  name: 'FormSearchClass',
  components: { FieldsetSelectSubject, FieldsetSelectGrade, BaseButton },
  data () {
    return {
      grades: [
        {
          value: 'GD1001',
          label: '1학년'
        },
        {
          value: 'GD2001',
          label: '2학년'
        },
        {
          value: 'GD3001',
          label: '3학년'
        },
        {
          value: 'GD4001',
          label: '4학년'
        },
        {
          value: 'GD5001',
          label: '5학년'
        },
        {
          value: 'GD6001',
          label: '6학년'
        }
      ],
      subjects: [
        {
          key: 'subject1',
          value: 'SJ1001',
          label: '국어'
        },
        {
          key: 'subject2',
          value: 'SJ1002',
          label: '수학'
        },
        {
          key: 'subject3',
          value: 'SJ1003',
          label: '사회/과학'
        },
        {
          key: 'subject4',
          value: 'SJ1004',
          label: '수학 문제 풀이'
        }
      ]
    }
  }
}
</script>

<style lang=scss>
.FormSearchClass {
  fieldset {
    legend {

    }

    select {

    }
  }

  button {
    grid-area: d;
    height: 5rem;
    font-weight: 400;
    align-self: flex-end;
    margin: 0 -5rem;
  }
}
/*

form {
  display: grid;
  line-height: 1;
  background-color: #f6f6f6;
  border-top: 2px solid #000;
  border-bottom: 1px solid #a3a3a3;
  font-weight: 500;
  min-width: 40rem;
  grid-row-gap: 2rem;
  grid-template-rows: 1fr 1fr 2.5fr;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: "a a a bl b b b" ". . . xl x x x" "d d d d d d d";
  padding: 3rem 8rem;
  row-gap: 2rem;

  > * {
    align-self: center;
  }

  label {
    display: flex;
    align-items: center;
  }

  legend {
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  fieldset {
    div {
      display: flex;
      justify-content: space-between;
    }

    .tutor-checkbox {
      display: flex;
      justify-content: flex-end;

      label {
        margin-left: 1rem;
      }
    }


  }

  .select-grades {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-area: a;
    -ms-grid-row-align: stretch;
    align-self: stretch;

    .fieldset-wrap {
      height: 100%;
    }

    legend {
      flex: 1 1 auto;
    }

    .input {
      position: relative;
      flex: 1;

      select {
        border: none;
        width: 100%;
        height: 100%;
      }

      .select-box {
        width: 12rem;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #000;

        &:after {
          content: "";
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjNjk2OTY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43MTcgMS43MTVMNi43MjggNi42ODdhMS4wMSAxLjAxIDAgMDEtMS40MjUgMEwuMzE0IDEuNzE1YTEuMDA0IDEuMDA0IDAgMDEwLTEuNDIxIDEuMDEyIDEuMDEyIDAgMDExLjQyNiAwbDQuMjc2IDQuMjYyTDEwLjI5Mi4yOTRhMS4wMSAxLjAxIDAgMDExLjQyNSAwIDEuMDAyIDEuMDAyIDAgMDEwIDEuNDIxeiIvPjwvc3ZnPg==);
          width: 1.5rem;
          height: 1rem;
          background-size: contain;
          position: absolute;
          right: 0;
        }
      }
    }
  }

  .sellect-subjects {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 3;
    grid-area: c;

    legend {
      grid-area: bl;
      justify-content: center;
      justify-self: flex-start;
    }
  }

}

form {

  fieldset {
    display: contents;

    div {
      display: flex;
      justify-content: space-between;
      padding: 0;
      align-items: center;
    }

    legend {
      justify-self: flex-start;
    }
  }

  .sellect-subjects {
    grid-area: b;
  }

  .select-grades {
    .input {
      .select-box {
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #000;
        display: flex;
        width: 100%;

        &:after {
          content: "";
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjNjk2OTY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43MTcgMS43MTVMNi43MjggNi42ODdhMS4wMSAxLjAxIDAgMDEtMS40MjUgMEwuMzE0IDEuNzE1YTEuMDA0IDEuMDA0IDAgMDEwLTEuNDIxIDEuMDEyIDEuMDEyIDAgMDExLjQyNiAwbDQuMjc2IDQuMjYyTDEwLjI5Mi4yOTRhMS4wMSAxLjAxIDAgMDExLjQyNSAwIDEuMDAyIDEuMDAyIDAgMDEwIDEuNDIxeiIvPjwvc3ZnPg==);
          width: 1.5rem;
          background-size: contain;
          position: relative;
          height: 0.8rem;
        }
      }

      height: 100%;
      width: 100%;
    }

    legend {
      flex: unset;
    }

    > div {
      justify-content: space-around;
    }
  }

  .sellect-subjects1 {
    > div {
      grid-area: b;
    }

    legend {
      grid-area: bl;
    }
  }

  .sellect-subjects2 {
    > div {
      grid-area: x;
    }
  }
}
*/

</style>
