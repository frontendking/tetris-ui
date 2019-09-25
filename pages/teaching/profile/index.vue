<template>
  <article class="profile">
    <h1 v-html="heading"/>
    <section class="profile-form">
      <h2 v-html="form.heading"/>
      <form>
        <fieldset class="profile-img">
          <div>
            <legend v-html="form.img.legend"/>
            <div class="input">
              <input type="text" :placeholder="form.img.input.placeholder"/>
              <label v-html="`&nbsp&nbsp${form.img.input.label}`" for="input-file"/>
              <input id=input-file type="file"/>
            </div>
          </div>
        </fieldset>
        <fieldset class="profile-spec">
          <div>
            <legend v-html="form.spec.legend"/>
            <textarea class="input" :placeholder="form.spec.input.placehoder"/>
          </div>
        </fieldset>
        <fieldset class="profile-intro">
          <div>
            <legend v-html="form.intro.legend"/>
            <textarea class="input" :placeholder="form.intro.input.placeholder"/>
          </div>
        </fieldset>
        <fieldset class="profile-button">
          <div>
            <button type="button" v-html="form.button.cancelBtn.label"/>
            <button v-html="form.button.submitBtn.label"/>
          </div>
        </fieldset>
      </form>
    </section>
  </article>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      heading: '프로필',
      form: {
        heading: 'profile form',
        img: {
          legend: '대표이미지',
          input: {
            label: '파일찾기',
            placeholder: 'imgimgimg.jpg'
          }
        },
        spec: {
          legend: '학력',
          input: {
            placehoder: '학력을 입력해 주세요. (30~1,000자)'
          }
        },
        intro: {
          legend: '내소개',
          input: {
            placeholder: '내 소개를 입력해 주세요. (500~3,000자)'
          },
        },
        button: {
          cancelBtn: {
            label: '취소',
          },
          submitBtn: {
            label: '저장'
          }
        }
      },
    }
  }

}
</script>

<style lang=scss>
.profile {
  @media(min-width: 641px) {
    display: grid;
    /*@formatter:off*/
    grid-template:
      "header" auto
      "form" auto/
      auto;
    /* @formatter:on*/
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #6e737d;

    h1, h2 {
      color: #000000;
    }

    > h1 {
      grid-area: header;
      display: initial;
      font-size: 3.4rem;
      font-weight: bolder;
      padding-bottom: 1rem;
      border-bottom: 2px solid #000000;
    }
    .profile-form > h2 {
      display: none;
    }
    form {
      grid-area: form;
      display: grid;
      /*@formatter:off*/
      grid-template:
        "img" 9rem
        "spec" 20rem
        "intro" 28.1rem
        "btn" 8rem/
        auto;
      /*@formatter:on*/
      fieldset > div {
        display: flex;
        justify-items: stretch;
        height: 100%;
        border-bottom: 1px solid #dedede;

        legend {
          flex: 0 1 15rem;
          display: block;
          padding: 3.7rem 2.1rem;
          background-color: #f5f5f5;
          font: {
            size: 1.6rem;
            weight: 500;
          }
          line-height: 1;
          letter-spacing: -0.08rem;
          color: #6e737d;
        }

        .input {
          margin: 2rem;
        }

      }

      .profile-img {
        grid-area: img;

        .input {
          display: flex;

          input {
            border: 1px solid #cccccc;
            padding: 2rem 1rem;
            width: 30rem;
          }
          #input-file {
            display: none;
          }
        }

        label {
          display: flex;
          align-items: center;
          margin-left: 2rem;

          &:before {
            content: '';
            display: block;
            position: relative;
            float: left;
            width: 2rem;
            padding-top: 2rem;
            background: url('./assets/file.svg') no-repeat;
          }
        }
      }

      .profile-spec {
        grid-area: spec;
      }

      .profile-intro {
        grid-area: intro;
      }

      button {
        grid-area: btn;
        padding: 1rem;
        background-color: #34b4f9;
        color: #ffffff;
        border-radius: 0.5rem;
        align-self: center;
      }
    }
  }
}
</style>
