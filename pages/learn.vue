<template>
  <article id="learn">
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse white-bg">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header text-center">
            <img class="img-circle profile-img" src="https://st-kr-tutor.s3.amazonaws.com/uploads/user/avatar/1/thumb_%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%B5_%E1%84%8F%E1%85%A1%E1%84%90%E1%85%A9%E1%86%A8%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC2.png" alt="Thumb %e1%84%8b%e1%85%af%e1%86%af%e1%84%8b%e1%85%b5 %e1%84%8f%e1%85%a1%e1%84%90%e1%85%a9%e1%86%a8%e1%84%87%e1%85%a2%e1%84%80%e1%85%a7%e1%86%bc2" width="80" height="80">
            <div class="user-info">
              <p class="user-name">got1 선생님</p>
              <a href="/me">프로필 보기</a>
            </div>
          </li>

          <li class="active">
            <a href="/learns/courses">
              <span class="nav-label">내 클래스</span>
            </a></li>
          <li class="">
            <a href="/learns/studies">
              <span class="nav-label">내 스터디</span>
            </a></li>
          <li class="">
            <a href="/learns/calendars">
              <span class="nav-label">수업 캘린더</span>
            </a></li>
          <li class="">
            <a href="/learns/reports">
              <span class="nav-label">학습 리포트 관리</span>
            </a></li>
          <li class="">
            <a href="/learns/attends">
              <span class="nav-label">출결 현황</span>
            </a></li>
          <li class="">
            <a href="/learns/reviews">
              <span class="nav-label">수강 후기 관리</span>
            </a></li>
          <li class="">
            <a href="/learns/enrollments">
              <span class="nav-label">수강신청 내역</span>
            </a></li>
          <li class="">
            <a href="/learns/trial_applies">
              <span class="nav-label">무료체험 내역</span>
            </a></li>
          <li class="">
            <a href="/learns/checkbooks">
              <span class="nav-label">수업권 내역</span>
            </a></li>
        </ul>
        <a data-toggle="modal" style="margin-left:15px;" href="#movie_event">
          <img alt="너의 수업을 보여줘! 수업영상 응모하고 100% 선물받으러가기" src="/image/banner/floating_banner_movie_event.png">
        </a></div>
    </nav>

    <nuxt-child/>
  </article>
</template>

<script>
export default {
  name: 'learn',
  layout: 'tutor'
}
</script>

<style lang=scss>

#learn {
}
</style>
