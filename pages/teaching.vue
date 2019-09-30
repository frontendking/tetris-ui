<template>
  <article id="teaching">
    <h1 v-html="heading"/>
    <the-tutor-local-nav id="the-tutor-local-nav" :navItems="subPages"/>
    <nuxt-child/>
  </article>
</template>

<script>
import TheTutorLocalNav from '@/components/class/TheTutorLocalNav'

export default {
  name: 'teaching',
  // layout:'tutor',
  data () {
    return {
      heading: '가르치기',
      subPages: [
        {
          id: 'my-class',
          label: '내 클래스',
          to: `/teaching/my-class`,
        },
        {
          id: 'calender',
          label: '수업 캘린더',
          to: `/teaching/calender`,
        },
        {
          id: 'report',
          label: '학습 리포트',
          to: `/teaching/report`,
        },
        {
          id: 'attendence',
          label: '출결현황',
          to: `/teaching/attendence`,
        },
        {
          id: 'review',
          label: '수강신청 내역',
          to: `/teaching/review`,
        },
        {
          id: 'purchase-class',
          label: '튜터 공지사항',
          to: `/teaching/purchase-class`,
        },
        {
          id: 'free-class',
          label: '모니터링',
          to: `/class/report`,
        },
        {
          id: 'purchase-permit',
          label: '스케쥴 등록',
          to: `/class/purchase-permit`,
        },
        {
          id: 'profile',
          label: '프로필',
          to: `/class/profile`,
          active: true,
        },
      ],
    }
  },
  components: {
    TheTutorLocalNav,
  },
}
</script>

<style lang=scss>
/*@import "@/assets-c2c/stylesheets/application.scss";*/

$heading-font: 4.2rem;
$heading-p-t: 5.9rem;
$heading-p-b: 8.1rem;
$heading-b-m: 6rem;

#teaching {
  @media(min-width: 641px) {
    display: grid;
    /*@formatter:off*/
    grid-template:
      "header" 18rem
      "nav" auto
      "article" auto/
      auto;
    /*@formatter:on*/
    grid-gap : 5.8rem;
/*    > *:nth-child(2) {
      margin-top: $heading-font + $heading-p-t + $heading-p-b + $heading-b-m;
    }*/
    > h1 {
      grid-area: header;
      display: flex;
      justify-content: center;
      align-items: center;
      /*position: absolute;*/
      /*top: 0;*/
      /*left: 0;*/
      width: 100%;
      font-size: $heading-font;
      line-height: 0.96;
      font-weight: 300;
      background-color: #f5f5f5;
      color: #000000;
    }
    > #the-tutor-local-nav {
      grid-area: nav;
      margin-top: 2.2rem;
    }
  }
}

</style>
