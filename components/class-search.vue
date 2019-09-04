<template>
    <div class="content-wrapper white-bg">
      <h3 class="navi-title">수업신청</h3>
      <div id="page-wrapper">
        <div class="elementary-wrapper">
          <div class="class-timetable-search-section pc-view">
            <div class="content-box">
              <div id="b2c-wrapper">
                <div class="timetable-search-section">
                  <div class="class-search-box">
                    <div class="class-reserve-search-area">
                      <div>
                        <h3 class="tit-class-timetable"><span>STEP 01</span>학년 선택
                        </h3>
                        <div class="select-filter">
                          <button type="button" target="34"
                                  class="btn-select active">1학년
                          </button>
                          <button type="button" target="35"
                                  class="btn-select">2학년
                          </button>
                          <button type="button" target="36"
                                  class="btn-select">3학년
                          </button>
                          <button type="button" target="37"
                                  class="btn-select">4학년
                          </button>
                        </div>
                        <div style="display: block; clear: both;"></div>
                      </div>
                      <div>
                        <h3 class="tit-class-timetable"><span>STEP 02</span>과목 선택
                        </h3>
                        <div class="select-filter">
                          <button type="button" subject="29"
                                  class="btn-select active">국어
                          </button>
                          <button type="button" subject="31"
                                  class="btn-select">수학
                          </button>
                          <button type="button" subject="32"
                                  class="btn-select">사회/과학
                          </button>
                        </div>
                      </div>
                    </div>
                    <button class="btn-timetable-search">검색</button>
                  </div>
                  <div class="result-box">
                    <div class="tbl-result-area">
                      <button type="button" class="btn-select table-title active">국어</button>
                      <button type="button" class="btn-select table-title">수학</button>
                      <div>
                        <div class="timetable-result-section">
                          <table>
                            <colgroup>
                              <col>
                              <col>
                              <col>
                              <col>
                              <col>
                              <col>
                              <col>
                              <col>
                            </colgroup>
                            <thead>
                            <tr>
                              <th scope="col">수업시간</th>
                              <th scope="col">일</th>
                              <th scope="col">월</th>
                              <th scope="col">화</th>
                              <th scope="col">수</th>
                              <th scope="col">목</th>
                              <th scope="col">금</th>
                              <th scope="col">토</th>
                            </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">17:00 ~ 18:00</th>
                                <td>
                                  <div><a href="#request-class-info-pc-class-confirm" data-toggle="modal"
                                          avatar="https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/thumb_a.jpg"
                                          class="btn-class-teacher-popup"
                                  >
                                    <!----><span>김윤희</span><span class="first-date">
                                                              09.
                                                              04
                                                              <br>수업시작
                                                          </span></a><a href="#request-class-info-pc-class-confirm"
                                                                        class="btn-class-teacher-popup closed">
                                    <!----><span>김지혜</span><span class="first-date">
                                                              09.
                                                              04
                                                              <br>수업시작
                                                          </span></a><a href="#request-class-info-pc-class-confirm"
                                                                        class="btn-class-teacher-popup"><img
                                    src="data:image/gif;base64,R0lGODlhTgAXAMQdAP/T0/56ev+6uv5BQf/p6f/5+f+Kiv/Z2f/V1f4pKf/y8v+oqP4fH/41Nf+0tP5dXf/Hx//Cwv/t7f/Nzf5ra//g4P5OTv/Bwf+cnP/m5v+urv4VFf+hof///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYjExODJjYS00NmJmLTQ3ZTUtOWQ1Yi01YzU4NDcxYjA0YWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEYyREMyQjNENERFMTFFOEFBRTZDOTREREQ3M0Q5NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEYyREMyQjJENERFMTFFOEFBRTZDOTREREQ3M0Q5NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDE3MzI3MzktMDZjYS00NTBlLWIyODEtM2Q0NTMwZGY0MzQ4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6M2QyMzViZGYtZTYwOS05MjRkLTkzNGUtZDBmMmFmZjdhY2Q2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBUYAHQAsAAAAAE4AFwAABf9gJ45kaZ5oqq5s675wLM90bd94ru/8OQmSlEBAkmQKo1/wdBAceiMFYErtCDiZDoDD5QI6XFHhyp2IrpkMh6gmbr/QjrobRneaQ+4z3IGsARocT2hqGgB+bhxwUGoOaXVYJHMKYF5cSBVrVlhzXYkaRIyalZtZYg4cECJcTgsclAccF6WNGVuJfD1tqxyblweuDkikWhwLZFmEHI63xYu6o5AOAq6yw8RagQ4VZ5x0mm9xctG9doemI1MqBwAKUlQAT+FxhVOQpp3fI/l0We/wU9BB02dn3LEhZPYZQ0gtEr8uz3gUSEMxWaRxoXgpzFiqw8SKGfxEFDeiYD0quU4tTgkkkMQ8kiVMfuuicOZFEy9hjjAy7CNIdD5BXiuhIAMlnUiTKl3KtKlTGiEAACH5BAVGAB0ALA8ABQAvAA4AAAX6YCeOIjVEZDoMZKQRo4mmojEYHRLsfDdsmk5gQyQGOkQR4UekiH4azYYlZQ2P0mIS2rGtiLhk5zENJDY4qDQRIFs32E0jugWSsgikkQjDTH1AWUVvCQNVInVBSg0bD4hTBgwbeQYbFoB0c0NvRId6gHyRcjCfQhsMTEFqchqbpnEsnz8NA5KWpKVCZw0YT4Faf1cdnolCD4ojOzQkBgEIOjwBOMJrO8XDwEUjgsBB0NE7QdzXUqgrTNun57V240VHBFHyqnbYsY/p95gd8fMaZEeW7cPGhocYgtHOIEshTCAXbNk2pIu4kETDZS5I9fOHbKM/XCkQaMgTAgA7"
                                    alt="마감임박" class="icon-deadline"><span>김여운</span><span
                                    class="first-date">
                                                              09.
                                                              04
                                                              <br>수업시작
                                                          </span></a></div>
                                  <div>
                                    <!---->
                                  </div>
                                  <div>
                                    <!---->
                                    <!---->
                                  </div>
                                  <div>
                                    <!---->
                                    <!---->
                                  </div>
                                  <div>
                                    <!---->
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">18:00 ~ 19:00</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">19:00 ~ 20:00</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">20:00 ~ 21:00</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">21:00 ~ 22:00</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
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
  name: 'class-search'
}
</script>

<style lang=scss>
.class-search {
  .btn-select.table-title {
    font-size: 1rem;
    width: 70px;
    height: 42.97px;
    margin-left: 0.4rem;
    margin-bottom: 1rem;
  }

  .btn-select.table-title.active {
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, .1) inset;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, .1);
    color: #fff;
    background: #29b6f6;
  }

  .btn-select.table-title {
    background: #f5f5f5;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
  }

  .navi-title {
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  .class-timetable-search-section.pc-view .timetable-search-section .class-search-box .class-reserve-search-area > div {
    width: initial;
  }


}
</style>
