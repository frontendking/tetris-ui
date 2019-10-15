<template>
  <article class="classes-layout">
    <h1 v-html="`${heading}<span>수업 시간 15분 전부터 수업 입장 가능합니다.</span>`"/>
    <div class="tabs-container">
      <div
        v-if="!$route.path.includes('classes/class')"
        class="classes-lnb-sub"
      >
        <TheLnbSub
          id="the-lnb-sub"
          :navList="navList"
        />
        <a class="prev-class-btn btn btn-sm btn-submit" target="_blank"
           href="https://kr.tutor.com/tutor/courses">이전 수업 보기</a>
      </div>
      <TheClassAlignUI
        v-if="$route.path.includes('teaching/')"
        class="the-class-align-ui"
      />
      <slot/>
    </div>

  </article>
</template>

<script>
import TheLnbSub from '@/components/TheLnbSub'
import TheClassAlignUI from '@/components/admin/classes/TheClassAlignUI'

export default {
  name: 'classes-layout',
  components: { TheLnbSub, TheClassAlignUI },
  props: ['heading', 'navList'],
}
</script>

<style lang=scss>
.classes-layout {
  display: grid;
  & > * { align-self: center }

  /*@formatter:off*/
  grid-template :
    'heading' auto
    'lnbsub' auto
    'class-align-ui' 10rem/
    auto;
  /*@formatter:on*/
  > h1 {
    grid-area: heading;
    font-size: 3.4rem;
    font-weight: bolder;
    line-height: 1;
    padding-bottom: 1.8rem;
    border-bottom: 2px solid #000000;
    display: flex;
    justify-content: space-between;
    span {
      align-self: flex-end;
      font-size: 1.5rem;
      letter-spacing: normal;
      color: #ff8a00;
    }
  }

  > .tabs-container {

    .nav-tabs {
      margin-bottom: 0;
    }

    .prev-class-btn {
      align-self: center;
    }

    .classes-lnb-sub {
      position: relative;
      display: flex;
      border-bottom: 1px solid #333;
      &+* {
        margin-top: 3rem;
      }
      ul {
        border-bottom: none;
      }

      #the-lnb-sub {
        flex: 1;
        grid-area: lnbsub;
      }
    }

    .the-class-align-ui {
      margin-bottom: 3rem;
      grid-area: class-align-ui;
    }
  }

}
</style>
