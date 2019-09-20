<template>
  <header class="TheClassSummaryCard">
    <div class="teacher-summary">
      <figure>
        <div class="round-frame">
          <img
            class="teacher-img"
            alt="this is the profile picture of the teacher"
            :src="teacherImageSrc"
          />
        </div>
        <figcaption class="teacher-name">김규미 선생님</figcaption>
      </figure>
      <button class="message-button">메시지 보내기</button>
    </div>
    <div class="class-summary">
      <dl>
        <dt class="hidden">수업명</dt>
        <dd>
          <span class="class-subject">{{classTitle}}</span>
          <span class="class-time">{{classTime}}</span>
        </dd>
        <template v-for="v in summaries">
          <dt>{{v.heading}}</dt>
          <dd>{{v.paragraph}}</dd>
        </template>
        <dt class="class-review">후 기</dt><dd>5.0 </dd>
      </dl>
    </div>
  </header>
</template>

<script>
export default {
  props: [
    'teacherImageSrc',
    'teacherName',
    'classTitle',
    'classTime',
    'summaries',
  ],
}
</script>

<style lang=scss>
$gray: #a3a3a3;
$gray-dark: #696969;

.TheClassSummaryCard {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 4.8rem 6.6rem;

  figure {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 40%;

    .round-frame {
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      background-color: #ffffff;
      border: #e0e0e0 solid 1px;
      border-radius: 50%;
      width: 65%;
      padding-top: 65%;

      img {
        position: absolute;
        width: 80%;
        top: 0;
      }

    }

    .teacher-name {
      padding: 1.5rem 0;
      font-size: 3.3rem;
      font-weight: bold;
      word-break: keep-all;
      text-align: center;

      &:after {
        display: none;
      }
    }


  }

  .class-summary {
    position: relative;

    > dl {
      display: grid;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: max-content 4fr max-content 4fr;
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;
      align-self: stretch;
      padding-top: 3.3rem;
      margin-top: 8rem;
      border-top: #e3e3e3 solid 1px;

      .class-subject {
        color: #00b9fd;

        &:before {
          content: '['
        }

        &:after {
          content: ']'
        }
      }

      .class-time {
        font-size: 2.2rem;
        font-weight: 500;
      }

      dt {
        color: $gray;
        font-weight: normal;
      }

      dd {
        color: $gray-dark;

        &:first-of-type {
          position: absolute;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: space-between;
          width: 100%;
          top: 0;
          padding: 0 18rem;
          height: 5.5rem;
        }
      }
    }
  }
}


.TheClassSummaryCard {
  @media(min-width: 641px) {
    align-items: center;
    flex-flow: row;
    padding: 0;
    background-color: #ffffff;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;

    .teacher-summary {
      padding: 4rem 5.8rem 2.7rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      background-color: #F5F5F5;

      figure {
        width: 20rem;

        .round-frame {
          width: 100%;
          padding-top: 100%;
        }

        .teacher-name {
          font-size: 1.8rem;
          font-weight: 500;
          margin: 2.9rem 0 2rem;
          display: flex;
          flex-flow: column;
          align-items: center;

          &:after {
            content: '';
            display: block;
            width: 3rem;
            padding-top: 2rem;
            border-bottom: #000000 solid 2px;
          }
        }
      }

      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 12.9rem;
        font-size: 1.6rem;
        line-height: 0.6;

        &:before {
          content: '';
          background-image: url('./assets/email.png');
          background-repeat: no-repeat;
          /*          padding-top: 100% * 19px / 15px;*/
          width: 2rem;
          padding-top: 1.5rem;
          display: block;
        }

        &:after {
          content: '';
          background-image: url('./assets/arrow.svg');
          background-repeat: no-repeat;
          width: 1rem;
          padding-top: 1rem;
          display: block;
        }
      }
    }
    .class-summary {
      width: 100%;
      padding: 0 8.2rem;

      > dl {
        grid-template-columns: max-content 100%;
        grid-template-rows: auto auto auto auto;

        dt {
          color: #6e737d;
          font-size: 1.6rem;
          display: flex;
          justify-content: space-between;
          text-align: justify-all;
          font-weight: bold;
        }

        dd {
          font-size: 1.6rem;
          color: #6e737d;

          &:before {
            content: ':';
            display: inline;
            padding-right: 1rem;
          }

          &:first-of-type {
            display: flex;
            align-content: flex-end;
            justify-content: flex-start;
            padding: 0;
            font-weight: normal;
            &:before {
              display: none;
            }
            * {
              color: #000000;
              font-size: 2.4rem;
            }

            .class-subject {
              padding-right: 2.4rem;

              &:after {
                display: none;
              }

              &:before {
                display: none;
              }
            }

            .class-time {
              font-weight: 600;
            }
          }
        }
      }


    }
  }
}
</style>
