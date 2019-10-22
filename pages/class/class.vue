<template>
  <article>
    <section class="class-intro">
      <h1>수업소개</h1>
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
    > section {
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
