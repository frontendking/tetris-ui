<template>
  <div id="b2c-wrapper" class="class-purchase flex-center">
    <article class="class-info"><h1 id="page-heading">수업신청</h1>
      <article class="search">
        <TheApplySearchboxTutor class="sellect-tutors"/>
        <form class="TheClassSearchBox" onsubmit="return false;">
          <fieldset class="select-grades">
            <legend>학년 선택</legend>
            <div class="fieldset-wrap">
              <div class="input">
                <div class="select-box">
                  <select id="att_search_grade">
                    <option value="GD1001">1학년</option>
                    <option value="GD2001">2학년</option>
                    <option value="GD3001">3학년</option>
                    <option value="GD4001">4학년</option>
                    <option value="GD5001">5학년</option>
                    <option value="GD6001">6학년</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="sellect-subjects1">
            <legend>과목 선택</legend>
            <div>
              <div class="tutor-checkbox"><input type="checkbox" name="att_search_subject" id="subject1" value="SJ1001"> <label for="subject1">국어</label></div>
              <div class="tutor-checkbox"><input type="checkbox" name="att_search_subject" id="subject2" value="SJ1003"> <label for="subject2">수학</label></div>
              <div class="tutor-checkbox"><input type="checkbox" name="att_search_subject" id="subject3" value="SJ1004"> <label for="subject3">사회/과학</label></div>
            </div>
          </fieldset>
          <fieldset class="sellect-subjects2">
            <div>
              <div class="tutor-checkbox">
                <input type="checkbox" name="att_search_subject" id="subject4" value="SJ1005">
                <label for="subject4">수학 문제 풀이</label>
              </div>
            </div>
          </fieldset>
          <button type="button" class="find-buttons" id="btnSearchTimeList">검색</button>
        </form>
        <table class="TheClassTimeTable hidden" id="applyClassTimeTable" style="overflow-y:auto; width:100%;height:800px;">
          <caption><p class="main-caption">과목 시간표</p>
            <p class="sub-caption" id="sub-caption-subjects"></p></caption>
          <thead>
          <tr>
            <th scope="col">수업시간</th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
            <th scope="col">목</th>
            <th scope="col">금</th>
            <th scope="col">토</th>
          </tr>
          </thead>
          <tbody>
          <tr class="time-row">
            <th scope="row">08:00 - 09:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">09:00 - 10:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">10:00 - 11:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">11:00 - 12:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">12:00 - 13:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">13:00 - 14:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">14:00 - 15:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">15:00 - 16:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">16:00 - 17:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">17:00 - 18:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">18:00 - 19:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">19:00 - 20:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">20:00 - 21:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="time-row">
            <th scope="row">21:00 - 22:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </article>
    </article>

  </div>
</template>

<script>
import TheApplySearchboxTutor from './TheApplySearchboxTutor'
export default {
  components: { TheApplySearchboxTutor }
}
</script>

<style scoped lang=scss>
@media (min-width: 960px) {
  article.class-info {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 5.9rem;
    grid-gap: 0;
    #page-heading {
      display: none;
    }
    >article {
      position: static;
    }
    #class-nav {
      ul {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        font-size: 2.2rem;
        border-bottom: 1px solid #e0e0e0;
        li {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          font-weight: bolder;
          &:active {
            border-bottom: 4px solid #34b4f9;
          }
          &:hover {
            border-bottom: 4px solid #34b4f9;
          }
          a {
            display: block;
            padding: 2.4rem 0;
            width: 100%;
            text-align: center;
            color: #696969;
            font-weight: normal;
          }
        }
        li.active {
          border-bottom: 4px solid #34b4f9;
          a {
            color: #000000;
            font-weight: bold;
          }
        }
      }
    }
    >nav {
      margin-bottom: 5rem;
    }
    #tab_contents {
      margin-bottom: 5rem;
    }
  }
  article.class-info {
    #class-nav {
      ul {
        li.active {
          a {
            color: #ffffff;
            font-weight: bold;
            color: #fff;
            font-weight: bold;
          }
          background-color: #6e737d;
          border-bottom: none;
        }
        background-color: #f7f7f7;
        color: #777;
        font-size: 1.6rem;
        font-weight: 500;
        border: none;
        li {
          display: flex;
          border: 1px solid #e0e0e0;
          border-right: none;
          &:last-child {
            border-right: 1px solid #e0e0e0;
          }
          &:active {
            background-color: #6e737d;
            border-bottom: none;
            a {
              color: #fff;
              font-weight: bold;
            }
          }
          &:hover {
            background-color: #6e737d;
            border-bottom: none;
            a {
              color: #fff;
              font-weight: bold;
            }
          }
        }
      }
    }
    #page-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      padding: 5.9rem 0 8.1rem;
      font-size: 4.2rem;
      line-height: .96;
      font-weight: 300;
      background-color: #f5f5f5;
    }
    #the-class-footer.sticky {
      position: sticky;
      bottom: 0;
      border-bottom: #e0e0e0 1px solid;
    }
    #the-class-footer {
      bottom: 0;
      border: #e0e0e0 1px solid;
      border-bottom: none;
      background: rgba(73, 150, 216, 1);
    }
    grid-gap: 5.8rem;
    >nav {
      margin-bottom: 0;
    }
    #tab_contents {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .TheClassSearchBox {
    display: grid;
    line-height: 1;
    background-color: #f6f6f6;
    border-top: 2px solid #000;
    border-bottom: 1px solid #a3a3a3;
    font-size: 1.6rem;
    font-weight: 500;
    min-width: 40rem;
    grid-row-gap: 2rem;
    grid-template-rows: 1fr 1fr 2.5fr;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: "a a a bl b b b" ". . . xl x x x" "d d d d d d d";
    padding: 3rem 8rem;
    row-gap: 2rem;
    >* {
      align-self: center;
    }
    label {
      display: flex;
      align-items: center;
    }
    legend {
      display: flex;
      align-items: center;
      font-size: 2rem;
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
      input[type=checkbox] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid #cdcdcd;
        cursor: pointer;
        outline: none;
        background-color: #fff;
        font-weight: 500;
        color: #e1e1e1;
        &:checked {
          &:before {
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            content: "⅃";
            transform: rotate(40deg);
            position: relative;
            top: -2px;
          }
          background-color: #00b9fd;
        }
        &:before {
          display: flex;
          justify-content: center;
          align-items: center;
          content: "⅃";
          transform: rotate(40deg);
          position: relative;
          top: -2px;
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
    button {
      grid-area: d;
      border: none;
      background-color: #000;
      color: #fff;
      text-align: center;
      height: 5rem;
      font-size: 1.6rem;
      font-weight: 400;
      align-self: flex-end;
      margin: 0 -5rem;
    }
  }
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
  .TheClassSearchBox {


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
}

</style>
