<template>
  <article class="program-wrapper p-lg">
    <div class="top-container m-b-lg clear">
      <h1 class="pull-left"><strong>수업 캘린더</strong></h1>
      <p class="pull-right">* 캘린더 내의 수업을 클릭하시면 수업 입장 화면으로 이동합니다.</p>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="ibox float-e-margins">
      <div class="ibox-content">
        <div id="teach-calendar" class="fc fc-unthemed fc-ltr">
          <div class="fc-toolbar fc-header-toolbar">
            <div class="fc-left">
              <div class="fc-button-group">
                <button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left" aria-label="prev"><span class="fc-icon fc-icon-left-single-arrow"></span></button>
                <button type="button" class="fc-today-button fc-button fc-state-default">오늘</button>
                <button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right" aria-label="next"><span class="fc-icon fc-icon-right-single-arrow"></span></button>
              </div>
            </div>
            <div class="fc-right"></div>
            <div class="fc-center"><h2> 2019년 9월 22일 – 2019년 9월 28일</h2></div>
            <div class="fc-clear"></div>
          </div>
          <div class="fc-view-container" style="">
            <div class="fc-view fc-agendaWeek-view fc-agenda-view" style="">
              <table class="">
                <thead class="fc-head">
                <tr>
                  <td class="fc-head-container fc-widget-header">
                    <div class="fc-row fc-widget-header">
                      <table class="">
                        <thead>
                        <tr>
                          <th class="fc-axis fc-widget-header" style="width:48px"></th>
                          <th class="fc-day-header fc-widget-header fc-sun fc-past" data-date="2019-09-22"><span>일
<br>22</span></th>
                          <th class="fc-day-header fc-widget-header fc-mon fc-past" data-date="2019-09-23"><span>월
<br>23</span></th>
                          <th class="fc-day-header fc-widget-header fc-tue fc-past" data-date="2019-09-24"><span>화
<br>24</span></th>
                          <th class="fc-day-header fc-widget-header fc-wed fc-past" data-date="2019-09-25"><span>수
<br>25</span></th>
                          <th class="fc-day-header fc-widget-header fc-thu fc-past" data-date="2019-09-26"><span>목
<br>26</span></th>
                          <th class="fc-day-header fc-widget-header fc-fri fc-past" data-date="2019-09-27"><span>금
<br>27</span></th>
                          <th class="fc-day-header fc-widget-header fc-sat fc-past" data-date="2019-09-28"><span>토
<br>28</span></th>
                        </tr>
                        </thead>
                      </table>
                    </div>
                  </td>
                </tr>
                </thead>
                <tbody class="fc-body">
                <tr>
                  <td class="fc-widget-content">
                    <div class="fc-scroller fc-time-grid-container" style="overflow: hidden scroll; height: 636px;">
                      <div class="fc-time-grid fc-unselectable">
                        <div class="fc-bg">
                          <table class="">
                            <tbody>
                            <tr>
                              <td class="fc-axis fc-widget-content" style="width:48px"></td>
                              <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2019-09-22"></td>
                              <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2019-09-23"></td>
                              <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2019-09-24"></td>
                              <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2019-09-25"></td>
                              <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2019-09-26"></td>
                              <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2019-09-27"></td>
                              <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2019-09-28"></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="fc-slats">
                          <table class="">
                            <tbody>
                            <tr data-time="08:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 8</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="08:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="09:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 9</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="09:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="10:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 10</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="10:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="11:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 11</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="11:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="12:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 12</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="12:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="13:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 1</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="13:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="14:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 2</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="14:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="15:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 3</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="15:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="16:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 4</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="16:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="17:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 5</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="17:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="18:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 6</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="18:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="19:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 7</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="19:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="20:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 8</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="20:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="21:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 9</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="21:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="22:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 10</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="22:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="23:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오후 11</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="23:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="00:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 12</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="00:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="01:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 1</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="01:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="02:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 2</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="02:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="03:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 3</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="03:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="04:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 4</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="04:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="05:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 5</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="05:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="06:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 6</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="06:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="07:00:00">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"><span>오전 7</span></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            <tr data-time="07:30:00" class="fc-minor">
                              <td class="fc-axis fc-time fc-widget-content" style="width:48px"></td>
                              <td class="fc-widget-content"></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <hr class="fc-divider fc-widget-header" style="display:none">
                        <div class="fc-content-skeleton">
                          <table>
                            <tbody>
                            <tr>
                              <td class="fc-axis" style="width:48px"></td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/733" style="top: 203px; bottom: -815px; z-index: 1; left: 0%; right: 0%;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 12:00" data-full="오후 12:00 - 오전 12:00"><span>오후 12:00 - 오전 12:00</span></div>
                                      <div class="fc-title">4회차</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/733" style="top: 203px; bottom: -815px; z-index: 1; left: 0%; right: 0%;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 12:00" data-full="오후 12:00 - 오전 12:00"><span>오후 12:00 - 오전 12:00</span></div>
                                      <div class="fc-title">5회차</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/733" style="top: 203px; bottom: -815px; z-index: 1; left: 0%; right: 0%; margin-right: 20px;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 12:00" data-full="오후 12:00 - 오전 12:00"><span>오후 12:00 - 오전 12:00</span></div>
                                      <div class="fc-title">6회차</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/735" style="top: 411.333px; bottom: -462.333px; z-index: 2; left: 50%; right: 0%;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 4:05" data-full="오후 4:05 - 오후 5:05"><span>오후 4:05 - 오후 5:05</span></div>
                                      <div class="fc-title">1회차 수업</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/733" style="top: 203px; bottom: -815px; z-index: 1; left: 0%; right: 0%;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 12:00" data-full="오후 12:00 - 오전 12:00"><span>오후 12:00 - 오전 12:00</span></div>
                                      <div class="fc-title">7회차</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"><a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end past" href="/tutor/courses/733" style="top: 203px; bottom: -254px; z-index: 1; left: 0%; right: 0%;">
                                    <div class="fc-content past">
                                      <div class="fc-time" data-start="오후 12:00" data-full="오후 12:00 - 오후 1:00"><span>오후 12:00 - 오후 1:00</span></div>
                                      <div class="fc-title">8회차</div>
                                    </div>
                                    <div class="fc-bg past"></div>
                                  </a></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                              <td>
                                <div class="fc-content-col">
                                  <div class="fc-event-container fc-helper-container"></div>
                                  <div class="fc-event-container"></div>
                                  <div class="fc-highlight-container"></div>
                                  <div class="fc-bgevent-container"></div>
                                  <div class="fc-business-container"></div>
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'calendar'
}
</script>

<style lang=scss>
.calendar {
}
</style>
