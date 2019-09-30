<template>
  <div class="content-wrapper white-bg">

    <div id="movie_event" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="requst_free" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="width:530px;">
          <div class="modal-header">
            <strong class="modal-title" id="exampleModalLiveLabel"><img alt="영상 찍어 응모만 해도 100% 선물 증정!" src="/image/banner/top_movie_event.png"></strong>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="top:-5px;right:2px;">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <strong>* 일간대치동 영상 콘테스트 안내</strong><br><br>
            1. 응모 대상<br>
            일간대치동 수업을 수강하고 있는 분들 누구나<br><br>
            2. 응모 내용<br>
            과목 상관 없이!<br>
            우리 아이가 수업하고 있는 모습을 10분 이상 찍어 보내주세요.<br>
            편집? NO NO! 날것의 영상이면 OK입니다!<br><br>
            3. 응모 방법<br>
            1. 아이 이름 / 2. 학년 / 3. 수업 과목 / 4. 학교명<br>
            위 내용과 휴대폰 번호를 적어, 영상과 함께<br>
            아래의 메일로 보내주세요!<br>
            <a href="mailto:Tutor_junior@stunitas.com">Tutor_junior@stunitas.com</a>
          </div>
        </div>
      </div>
    </div>


    <div id="page-wrapper" class="gray-bg" style="min-height: 1809px;">
      <div class="program-wrapper p-lg">
        <div id="vue-app" class="hidden">
          <!---->
        </div>
        <div id="desktop-app">
          <h1 class="m-b-lg"><strong>내 ssssss클래스</strong></h1>
          <div class="tabs-container">
            <ul class="nav nav-tabs">
              <li class="">
                <a href="/learns/courses?status=ongoing_courses">현재 수강 중 (0)</a>
              </li>
              <li class="">
                <a href="/learns/courses?status=ready_courses">개강 전 (0)</a>
              </li>
              <li class="active">
                <a href="/learns/courses?status=closed_courses">종료 (9)</a>
              </li>
            </ul>

            <div class="sort-wrap">
              <strong class="title pull-left m-t-xs">정렬기준</strong>
              <form class="form-horizontal" id="teach-filter-form" action="/learns/courses" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
                <input type="hidden" name="status" id="status" value="closed_courses">
                <div class="col-sm-2">
                  <select name="category" id="category" class="chosen-select" style="display: none;">
                    <option value="">선택</option>
                    <option value="jr_sc01">일간대치동</option>
                    <option value="mid_sc01">중등 입시</option>
                  </select>
                  <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="category_chosen"><a class="chosen-single" tabindex="-1"><span>선택</span>
                    <div><b></b></div>
                  </a>
                    <div class="chosen-drop">
                      <div class="chosen-search"><input type="text" autocomplete="off"></div>
                      <ul class="chosen-results"></ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <select name="subject" id="subject" class="chosen-select" style="display: none;">
                    <option value="">선택</option>
                    <option value="jr_sub01">국어</option>
                    <option value="jr_sub03">수학</option>
                    <option value="mid_sub01">국어</option>
                  </select>
                  <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="subject_chosen"><a class="chosen-single" tabindex="-1"><span>선택</span>
                    <div><b></b></div>
                  </a>
                    <div class="chosen-drop">
                      <div class="chosen-search"><input type="text" autocomplete="off"></div>
                      <ul class="chosen-results"></ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <select name="order" id="order" class="chosen-select" style="display: none;">
                    <option selected="selected" value="updated_desc">최신 항목 우선</option>
                    <option value="updated_asc">오래된 항목 우선</option>
                  </select>
                  <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="order_chosen"><a class="chosen-single" tabindex="-1"><span>최신 항목 우선</span>
                    <div><b></b></div>
                  </a>
                    <div class="chosen-drop">
                      <div class="chosen-search"><input type="text" autocomplete="off"></div>
                      <ul class="chosen-results"></ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-search"></i>&nbsp;검색</button>
                </div>
              </form>
              <div class="clearfix"></div>

            </div>

            <div class="tab-content m-t-lg">
              <div class="row">
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover7">
                        <span class="user-name">got1 선생님</span>
                        <a class="btn btn-line" href="/t/got-teacher">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1/thumb_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2018-05-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.56.51.png" alt="Thumb %e1%84%89%e1%85%b3%e1%84%8f%e1%85%b3%e1%84%85%e1%85%b5%e1%86%ab%e1%84%89%e1%85%a3%e1%86%ba 2018 05 31 %e1%84%8b%e1%85%a9%e1%84%92%e1%85%ae 9.56.51" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/659">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">수학</span>
                          </p>
                          <p class="title">일간대치동 수학_정규수업_4학년 테스트</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      금 18:10
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">55,000 원</span> <span>( 총 4 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">6월 28일 수업 시작</p>
                          <div class="program_status">
                            총 1명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover1">
                        <span class="user-name">got1 선생님</span>
                        <a class="btn btn-line" href="/t/got-teacher">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1/thumb_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2018-05-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.56.51.png" alt="Thumb %e1%84%89%e1%85%b3%e1%84%8f%e1%85%b3%e1%84%85%e1%85%b5%e1%86%ab%e1%84%89%e1%85%a3%e1%86%ba 2018 05 31 %e1%84%8b%e1%85%a9%e1%84%92%e1%85%ae 9.56.51" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/602">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">수학</span>
                          </p>
                          <p class="title">내부테스트용 유료수업2</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      목 17:25
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">55,000 원</span> <span>( 총 1 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">4월 18일 수업 시작</p>
                          <div class="program_status">
                            총 1명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover9">
                        <span class="user-name">teacher_1</span>
                        <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png" alt="No avatar" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/504">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">국어</span>
                          </p>
                          <p class="title">페이코 결제/환불 테스트 2</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      수 18:45

      목 09:30
       or
       시간협의
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">200 원</span> <span>( 총 3 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">1월 10일 수업 시작</p>
                          <div class="program_status">
                            총 5명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover9">
                        <span class="user-name">teacher_1</span>
                        <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png" alt="No avatar" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/503">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">국어</span>
                          </p>
                          <p class="title">페이코 결제/환불 테스트 1</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      월 17:40
       or
       시간협의
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">100 원</span> <span>( 총 3 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">2월 18일 수업 시작</p>
                          <div class="program_status">
                            총 4명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card academy">
                    <div class="card-front">
                      <div class="card-head cover15">
                        <span class="user-name">teacher_1</span>
                        <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png" alt="No avatar" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/76">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">수학</span>
                          </p>
                          <p class="title">학원에서 만든 클래스_class</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

       시간협의
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">500 원</span> <span>( 총 2 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">6월 10일 수업 시작</p>
                          <div class="program_status">
                            총 1명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover1">
                        <span class="user-name">got1 선생님</span>
                        <a class="btn btn-line" href="/t/got-teacher">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1/thumb_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2018-05-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.56.51.png" alt="Thumb %e1%84%89%e1%85%b3%e1%84%8f%e1%85%b3%e1%84%85%e1%85%b5%e1%86%ab%e1%84%89%e1%85%a3%e1%86%ba 2018 05 31 %e1%84%8b%e1%85%a9%e1%84%92%e1%85%ae 9.56.51" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/79">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">국어</span>
                          </p>
                          <p class="title">0608 클래스 생성</p>
                          <div class="program-info">
                            <p class="program-schedule">

                            </p>
                            <p class="program-price">
                              <span class="price">2,000 원</span> <span>( 총 0 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">6월 28일 수업 시작</p>
                          <div class="program_status">
                            총 5명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover15">
                        <span class="user-name">got1 선생님</span>
                        <a class="btn btn-line" href="/t/got-teacher">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1/thumb_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2018-05-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.56.51.png" alt="Thumb %e1%84%89%e1%85%b3%e1%84%8f%e1%85%b3%e1%84%85%e1%85%b5%e1%86%ab%e1%84%89%e1%85%a3%e1%86%ba 2018 05 31 %e1%84%8b%e1%85%a9%e1%84%92%e1%85%ae 9.56.51" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/46">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">중등</span>
                            <span class="item">국어</span>
                          </p>
                          <p class="title">[원리탐구] 수학 최상위권 과외 주말 3시</p>
                          <div class="program-info">
                            <p class="program-schedule">

                            </p>
                            <p class="program-price">
                              <span class="price">300,000 원</span> <span>( 총 0 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">6월 11일 수업 시작</p>
                          <div class="program_status">
                            총 1명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover4">
                        <span class="user-name">teacher_1</span>
                        <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png" alt="No avatar" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/39">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">수학</span>
                          </p>
                          <p class="title">[초4] 디딤돌 수학 4-2 (8주 과정)</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      금 00:00

      금 06:40

      금 15:30

      금 18:30

      금 19:20
       or
       시간협의
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">500 원</span> <span>( 총 8 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">5월 25일 수업 시작</p>
                          <div class="program_status">
                            총 2명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="class-card tutor">
                    <div class="card-front">
                      <div class="card-head cover4">
                        <span class="user-name">teacher_1</span>
                        <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
                        <div class="tutor-card-profile">
                          <img class="" src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png" alt="No avatar" width="60" height="60">
                        </div>
                      </div>
                      <a href="/learns/courses/39">
                        <div class="card-content">
                          <p class="sub-title">
                            <span class="item">초등</span>
                            <span class="item">수학</span>
                          </p>
                          <p class="title">[초4] 디딤돌 수학 4-2 (8주 과정)</p>
                          <div class="program-info">
                            <p class="program-schedule">
                  <span class="fa fa-clock-o">

      금 00:00

      금 06:40

      금 15:30

      금 18:30

      금 19:20
       or
       시간협의
  </span>

                            </p>
                            <p class="program-price">
                              <span class="price">500 원</span> <span>( 총 8 회 )</span>
                            </p>
                          </div>
                        </div>
                        <div class="card-foot">
                          <p class="strat-time">5월 25일 수업 시작</p>
                          <div class="program_status">
                            총 2명
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>

              </div>
              <div class="text-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-class'
}
</script>

<style scoped lang=scss>
.my-class {
}
</style>
