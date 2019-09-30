<template>
  <div class="content-wrapper white-bg">
    <div id="page-wrapper" class="gray-bg" style="min-height: 869px;">

      <div class="program-wrapper p-lg">
        <div class="attends-wrap">
          <div class="courses-title top-container m-b-lg">
            <h1>
              <strong>출결 현황</strong>
            </h1>
          </div>
          <div class="sort-wrap">
            <form class="form-horizontal" id="code-search-form" action="/tutor/attends" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
              <div class="form-group">
                <strong class="col-md-1">검색어</strong>
                <div class="col-md-2">
                  <select name="condition" id="condition" class="chosen-select" style="display: none;">
                    <option value="course_name">클래스명</option>
                    <option value="user_name">학생명</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <input type="text" name="q" id="q" class="input form-control" placeholder="검색어를 입력해 주세요.">
                </div>
              </div>
              <div class="form-group">
                <strong class="col-md-1">기간검색</strong>
                <div class="col-md-2">
                  <select name="period" id="period" class="chosen-select" style="display: none;">
                    <option value="course_start_at">수강시작일</option>
                    <option value="created_at">수강신청일</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-calendar"></i>
                    </div>
                    <input type="text" name="start_date" id="start_date" class="form-control datepicker" autocomplete="off">
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-calendar"></i>
                    </div>
                    <input type="text" name="end_date" id="end_date" class="form-control datepicker" autocomplete="off">
                  </div>
                </div>
                <div class="col-md-2">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <i class="fa fa-search"></i>&nbsp;검색</button>
                </div>
              </div>
            </form>
          </div>
          <div class="tab-content m-t-lg ibox-content">
            <div class="result-top-area">
              <p class="sort-result pull-left">전체 56 개</p>
              <p class="information pull-right">
                출석률과 출석수 기준은 어떻게 되나요
                <button type="button" class="btn-layer">
                  <i class="fa fa-question-circle-o"></i>
                  <div class="tootip-layer">
                    <strong>[출석률]</strong>
              <p>현재까지 진행된 회차까지의 출석률을 표시합니다.</p>
              <strong>[출석/지각/결석수]</strong>
              <p>출석 : 수업 시작일시 이전에 입장한 경우<br>
                지각 : 수업 시작일시까지 입장하지 않은 경우<br>
                결석 : 수업 입장을 하지 않은 경우</p>
            </div>
            </button>
            </p>
          </div>
          <div>
            <table class="table table-striped table-bordered attends-list-table">
              <colgroup>
                <col width="20%">

                <col>
                <col width="8%">
                <col width="20%">
                <col width="10%">
              </colgroup>
              <thead>
              <tr>
                <th>학생 이름 (아이디)</th>

                <th>수강 클래스</th>
                <th class="center">출석률</th>
                <th class="center">출석</th>
                <th class="center">상세보기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/355">
                    정진솔 (smokerjs)
                  </a>    </td>
                <td>GI TEST 2</td>
                <td class="center">
                  8 %
                  <br>( 7 / 13 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(6)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/733?user_id=355">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/355">
                    정진솔 (smokerjs)
                  </a>    </td>
                <td>GI_컨설팅수업_TEST</td>
                <td class="center">
                  60 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(3)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(2)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/729?user_id=355">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/412">
                    유은주 (sunnare)
                  </a>    </td>
                <td>초등 1학년 과외</td>
                <td class="center">
                  수업 예정
                  <br>( 0 / 0 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(0)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/697?user_id=412">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/355">
                    정진솔 (smokerjs)
                  </a>    </td>
                <td>일간대치동 수학_ 정규수업 4학년 테스트용</td>
                <td class="center">
                  100 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(0)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/693?user_id=355">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/412">
                    유은주 (sunnare)
                  </a>    </td>
                <td>일간대치동 수학_ 정규수업 4학년 테스트용</td>
                <td class="center">
                  수업 예정
                  <br>( 0 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(0)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/657?user_id=412">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/1">
                    got (gotadm1)
                  </a>    </td>
                <td>일간대치동 수학_정규수업_4학년 테스트</td>
                <td class="center">
                  25 %
                  <br>( 4 / 4 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(3)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/659?user_id=1">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/418">
                    테스터 (a6eb360e2bd9123197ed0a2dba68f779)
                  </a>    </td>
                <td>일간대치동 수학_무료수업_2학년 테스트</td>
                <td class="center">
                  0 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(1)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/655?user_id=418">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/355">
                    정진솔 (smokerjs)
                  </a>    </td>
                <td>일간대치동 무료수업_ 수학(테스트)</td>
                <td class="center">
                  100 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(0)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/653?user_id=355">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/417">
                    테스터 (6cd50aa327eb062857fe149ac2b3b94b)
                  </a>    </td>
                <td>일간대치동 무료수업_ 수학(테스트)</td>
                <td class="center">
                  0 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(1)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/653?user_id=417">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/33">
                    student_12 (student_12)
                  </a>    </td>
                <td>테스트용 수업생성</td>
                <td class="center">
                  0 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(1)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/622?user_id=33">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/32">
                    student_11 (student_11)
                  </a>    </td>
                <td>테스트용 수업생성</td>
                <td class="center">
                  0 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(1)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/622?user_id=32">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/31">
                    student_10 (student_10)
                  </a>    </td>
                <td>테스트용 수업생성</td>
                <td class="center">
                  100 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(0)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/622?user_id=31">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/161">
                    student_140 (tutor1)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  0 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(5)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=161">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/401">
                    다시시도 (46f2c3e7cf0c86c5a4de52cc881715fe)
                  </a>    </td>
                <td>내부 테스트용 유료결제수업</td>
                <td class="center">
                  0 %
                  <br>( 1 / 1 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(1)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/600?user_id=401">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/401">
                    다시시도 (46f2c3e7cf0c86c5a4de52cc881715fe)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  20 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(4)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=401">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/379">
                    이언정언정이 (1baa7088a8b791edaaad44048f864eab)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  0 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(5)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=379">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/400">
                    모바일사라 (47458a68ec28be8c310d87cab3a43004)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  0 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(5)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=400">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/396">
                    김진희 (aa1d8801fdf4748c1d93ef03b83ec2fc)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  0 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(5)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=396">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/399">
                    하라구 (5da88a05118b0aa58efd47a33ae7081b)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  20 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(1)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(4)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=399">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>
              <tr>
                <td>
                  <a class="link-home" data-remote="true" href="/u/398">
                    진정해 (eb3329f7c09463f43119e5c8d81194cd)
                  </a>    </td>
                <td>0510) 무료체험 클래스 테스트22</td>
                <td class="center">
                  0 %
                  <br>( 5 / 5 )
                </td>
                <td class="center">
      <span class="attend-state">
        <i class="fa fa-circle"></i> 출석(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-history"></i> 지각(0)
      </span>
                  <span class="attend-state">
        <i class="fa fa-times"></i> 결석(5)
      </span>
                </td>
                <td class="center">
                  <a class="btn btn-primary btn-block" href="/tutor/attends/607?user_id=398">출결 상세보기</a>
                  <!--button type="submit" class="btn btn-xs btn-submit">출결 상세보기</button-->
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="text-center">
            <ul class="pagination ">


              <li class="page active">
                <a href="/tutor/attends">1</a>
              </li>

              <li class="page">
                <a rel="next" href="/tutor/attends?page=2">2</a>
              </li>

              <li class="page">
                <a href="/tutor/attends?page=3">3</a>
              </li>

              <li class="next_page">
                <a rel="next" href="/tutor/attends?page=2">다음 ›</a>
              </li>

              <li class="last next">
                <a href="/tutor/attends?page=3">마지막 »</a>
              </li>

            </ul>

          </div>
        </div>
      </div>

    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'attendence'
}
</script>

<style lang=scss>
.attendence {
}
</style>
