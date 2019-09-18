<template>
  <article>
    <section class="class-intro">
      <h1>수업소개</h1>
      <section>
        <h2>수업교재</h2>
        <p>대치동 ‘㈜ 원리탐구 학원’ 원장님 군단이 만든 <strong>‘일간대치동’</strong> 교재로 학습합니다.</p>
      </section>
      <section>
        <h2>진행방식</h2>
        <ol>
          <li>
            매칭 된 요일과 시간 클래스에 15분 전 입장하여 과외를 받습니다.
          </li>
          <li>
            7~8월은 여름방학호로 2학기 교과과정 미리보기를 8주간
            진행합니다.
          </li>
          <li>
            초등 1학년 8월호는 4주간 진행됩니다.
          </li>
          <li>
            매주 주1회 50분 학습합니다.
          </li>
          <li>
            튜터를 만나지 않는 날은 튜터와 약속한 숙제를 해서 숙제방에
            숙제한 내용을 올려 놓습니다. 이 과정을 통해 매일 30분씩
            공부하는 공부습관이 만들어집니다.
          </li>
          <li>
            과외가 끝나고 나면 튜터의 학습레포트로 피드백을 받을 수
            있습니다.
          </li>
        </ol>
      </section>
      <section class="object">
        <h2>최종 목표 및 학습 효과</h2>
        <p>1학년 2학기에 배우는 기본 개념을 이해하고 문제에 적용하여 풀 수 있습니다.</p>
        <table>
          <tr v-for="v in schedule">
            <th scope="row">{{v.turn}}</th>
            <td>{{v.title}}</td>
            <td>{{v.period}}</td>
          </tr>
        </table>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  props: ['page', 'users'],
  data () {
    return {
      schedule: [
        {
          turn: '1회차',
          title: '1회차 수업',
          period: '2019.08.06 18:00 ~ 2019.08.06 18:50'
        },
        {
          turn: '2회차',
          title: '2회차 수업',
          period: '2019.08.06 18:00 ~ 2019.08.06 18:50'
        },
        {
          turn: '3회차',
          title: '3회차 수업',
          period: '2019.08.06 18:00 ~ 2019.08.06 18:50'
        },
        {
          turn: '4회차',
          title: '4회차 수업',
          period: '2019.08.06 18:00 ~ 2019.08.06 18:50'
        }
      ]
    }
  }
}
</script>

<style lang=scss>
.class-intro {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 3.7rem;
  padding: 8.0rem 2.6rem;
  line-height: 1.5;
  color: #8d8d8d;

  h1 {
    display: none;
  }

  h2 {
    font-weight: bold;
    font-size: 2.7rem;
    color: #000000;
  }

  ol {
    padding-left: 2rem;
  }

  li {
    list-style: decimal;
  }

  .object {
    display: none;
  }
}

.class-intro {
  @media(min-width: 641px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 3rem;
    padding: 0;
    font-size: 1.6rem;
    section {
      padding-right: 32rem;
    }
    h1, h2 {
      color: #000;
      font-weight: bold
    }
    h1 {
      display: flex;
      align-items: center;
      height: 6.4rem;
      font-size: 3.2rem;
      border-bottom: 2px solid #000;
    }
    h2 {
      font-weight: bold;
      font-size: 1.8rem;
    }
    ol {
      li {
        line-height: 1.7;
      }
    }
    .object {
      display: initial;

      > table {
        margin-top: 4rem;
      }

      table {
        border: solid 1px #dedede;
        border-right: none;
        border-left: none;
        width: 100%;
        font-size: 1.6rem;
        color: #6e737d;

        tr {
          border-top: solid 1px #dedede;
          height: 8rem;
        }

        td, th {
          text-align: center;
          vertical-align: middle;
        }
        th[scope='row'] {
          font-weight: 500;
          width: 20%;
        }
      }
    }
  }
}
</style>
