<template>
  <table
    id="applyClassTimeTable"
    class="TheClassTimeTable hidden"
    style="overflow-y:auto; width:100%;height:800px;"
  >
    <caption>
      <p class="main-caption">
        과목 시간표
      </p>
      <p id="sub-caption-subjects" class="sub-caption" />
    </caption>
    <thead>
    <tr>
      <th scope="col">
        수업시간
      </th>
      <th scope="col">
        월
      </th>
      <th scope="col">
        화
      </th>
      <th scope="col">
        수
      </th>
      <th scope="col">
        목
      </th>
      <th scope="col">
        금
      </th>
      <th scope="col">
        토
      </th>
    </tr>
    </thead>
    <tbody>
    <tr class="time-row">
      <th scope="row">
        08:00 - 09:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        09:00 - 10:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        10:00 - 11:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        11:00 - 12:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        12:00 - 13:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        13:00 - 14:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        14:00 - 15:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        15:00 - 16:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        16:00 - 17:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        17:00 - 18:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        18:00 - 19:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        19:00 - 20:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        20:00 - 21:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    <tr class="time-row">
      <th scope="row">
        21:00 - 22:00
      </th>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable'
}
</script>

<style lang=scss>
.TheClassTimeTable {
  display: block;
  padding: 2rem;
  border: none;

  caption {
    .main-caption {
      padding: 1.6rem 0;
      font-size: 3.4rem;
      line-height: 1;
      font-weight: 700;
      border-bottom: 2px solid #000;
    }

    .sub-caption {
      padding: 3rem 0;

      span {
        display: inline-block;
        padding: 0 3rem;
        border-right: 1px solid #000;
        font-size: 2rem;
        font-weight: 500;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
        }
      }

      span.active {
        font-weight: 900;
      }
    }
  }

  td {
    font-size: 1.2rem;
    font-weight: 400;
    border: 1px solid #b7b7b7;
    padding: 0.5rem;
    text-align: start;

    .teacher-name {
      display: flex;
      line-height: 1.1;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .class-info.add-data {
      &:before {
        position: relative;
        content: "• ";
        white-space: pre;
        display: inline-flex;
        color: #ec4800;
        font-size: 2rem;
        line-height: 0.5;
        align-items: flex-start;
      }

      display: inline-flex;
      justify-content: flex-start;

      &:last-child {
        margin-bottom: 0;
      }

      .class-info-wrap {
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        align-content: space-between;
        text-indent: initial;
        justify-content: flex-start;
      }
    }

    .class-info.add-data.disabled {
      background-color: #ddd;
      padding: 0.3rem;
      border-radius: 0.5rem;
    }

    .class-message {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.3;
      margin-top: 0.5rem;
    }

    .class-status {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      background-color: #ec4800;
      color: #fff;
      justify-content: center;
      text-align: center;
      line-height: 1.2;
      padding: 0.3rem 0.5rem;
      margin-left: 0.5rem;
    }
  }

  th {
    padding: 1rem 0;
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    background-color: #6e737d;
    text-align: center;

    &:first-child {
      width: 7%;
      min-width: 6.2rem;
    }

    &:nth-child(n+2) {
      width: 14%;
    }
  }

  th[scope=row] {
    padding: 6rem 0;
    background-color: #f7f7f7;
    color: #000;
    border: 1px solid #b7b7b7;
  }
}

.TheClassTimeTable {
  th[scope=row] {
    padding: 1rem 1rem;
  }

  th {
    &:first-child {
      min-width: 11rem;
    }
  }
}
</style>
