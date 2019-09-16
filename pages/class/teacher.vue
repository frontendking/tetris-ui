<template>
  <article class="teacher">
    <h1 hidden>about teacher</h1>
    <section>
      <h2 hidden>teacher summary</h2>
      <dl id="class-teacher-summary">
        <template v-for="v in teacherSummary">
          <dt>{{v.heading}}</dt>
          <dd>{{v.paragraph}}</dd>
        </template>
      </dl>
    </section>

    <section id="class-teacher-intro">
      <h2>{{this.teacherIntro.heading}}</h2>
      <section id="teacher-intro-short">
        <p>{{this.teacherIntro.sections[3].paragraph}}</p>
      </section>
      <section>
        <ul id="class-teacher-pr">
          <li v-for="v in teacherIntro.sections[1].paragraph">
            {{v}}
          </li>
        </ul>
      </section>
      <section id="teacher-aspiration">
        <p v-for="v in teacherIntro.sections[0].paragraph">{{v}}</p>
      </section>
      <section id="teacher-profile">
        <h3>[ {{teacherIntro.sections[2].heading}} ]</h3>
        <p v-for="v in teacherIntro.sections[2].paragraph">{{v}}</p>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  props: ['page','users'],
  computed: {
    teacherSummary () {
      return [
        {
          heading: '현재소속',
          paragraph: this.page.theTeacher.organization,
        },
        {
          heading: '전문과목',
          paragraph: this.page.theTeacher.course,
        },
        {
          heading: '교육대상',
          paragraph: this.page.theTeacher.target,
        },
        {
          heading: '학력',
          paragraph: this.page.theTeacher.education
        }
      ]
    },
    teacherIntro () {
      return {
        heading: '튜터소개',
        sections: [
          {
            heading: '각오',
            paragraph: this.page.theTeacher.introduction.aspiration,
          },
          {
            heading: '소개',
            paragraph: this.page.theTeacher.introduction.pr
          },
          {
            heading: '약력',
            paragraph: this.page.theTeacher.introduction.profiles
          },
          {
            heading: '한줄평',
            paragraph: this.page.theTeacher.introduction.short
          }
        ]
      }
    }
  }
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.teacher {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  grid-gap: 7.9rem;
  padding: 8.0rem 2.6rem;
  line-height: 1.5;
  color: #8d8d8d;
  h1, h2, dt {
    font-weight: bold;
    font-size: 2.7rem;
    color: #000000;
    line-height: 1;
  }
  h3 {
    font-size: 2rem;
  }
  dt {
    margin-bottom: 1rem;
  }
  #class-teacher-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 2rem;
  }
  #class-teacher-intro {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 2rem;
    ul#class-teacher-pr {
      li {
        &:before {
          content: "*";
        }
        padding-left: 0.5em;
        text-indent: -0.5em;
      }
    }
  }
}
</style>
