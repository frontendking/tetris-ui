<template>
  <div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span
            class="sr-only">Close</span></button>
          <h2 class="modal-title h2">알림 정보 확인</h2>
        </div>
        <form id="checkout-user-form" class="edit_user" action="/checkouts" accept-charset="UTF-8" method="post">
          <input
            name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token"
                                                       value="yrlQ3qaD2fBFbAd+9dENaOT9rj1WxJVpa0oHjVjxXAyHbNTRV4ikQGCwk0Fyu6R8Pd2Lz28JUEw73z1GVYugHw==">
          <input value="1660" type="hidden" name="user[order_id]" id="user_order_id">
          <div class="modal-body">
            <p class="info-text">수업 시작 알림, 학습 리포트 발송 등 중요한 알림이 아래의 정보로 발송되며, 저장된 정보는 기본 프로필에 반영됩니다.</p>
            <div class="form-group">
              <label for="user_nickname">학생 이름</label>
              <input class="form-control" required="required" type="text" value="got1 선생님" name="user[nickname]"
                     id="user_nickname">
              <p class="description">원활한 수업 진행을 위해 <span style="color: #ff0000">꼭 학생 이름을 입력</span>해주세요.</p>
            </div>
            <div class="form-group">
              <label for="user_email">학생 이메일</label>
              <input class="form-control" required="required" type="email" value="got1@tutor.com" name="user[email]"
                     id="user_email">
            </div>
            <div class="form-group">
              <label for="user_phone">학생 휴대전화</label>
              <input class="form-control" required="required" type="tel" value="01074475621" name="user[phone]"
                     id="user_phone">
            </div>

            <div class="form-group">
              <script>$(window).load(function () {changeUserBirthdayWithParentInformation('birthday-selector')})</script>
              <label for="user_birth">학생 태어난연월 *</label>
              <select id="birthday-selector" name="user[birth(1i)]" required="required"
                      class="chosen-select birth-select" onchange="changeUserBirthdayWithParentInformation(this.id)"
                      style="display: none;">
                <option value="">선택</option>
                <option value="2019" selected="selected">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
              </select>
              <select id="birthday-selector2" name="user[birth(2i)]" required="required"
                      class="chosen-select birth-select" onchange="changeUserBirthdayWithParentInformation(this.id)"
                      style="display: none;">
                <option value="">선택</option>
                <option value="1" selected="selected">1월</option>
                <option value="2">2월</option>
                <option value="3">3월</option>
                <option value="4">4월</option>
                <option value="5">5월</option>
                <option value="6">6월</option>
                <option value="7">7월</option>
                <option value="8">8월</option>
                <option value="9">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </select>
              <input type="hidden" id="user_birth_3i" name="user[birth(3i)]" value="1">
            </div>
            <div id="minority">
              <div class="form-group">
                <label for="user_p_phone">학부모 휴대전화 *</label>
                <input class="form-control" required="required" type="text" value="010-000-0000"
                       name="user[p_phone]"
                       id="user_p_phone">
                <p class="description">자녀의 출결현황, 학습 리포트 발송 등 중요한 알림이 발송됩니다.</p>
              </div>
            </div>

            <div class="form-group">
              <label for="user_location">주소(선택)</label>
              <div class="row padding-sm">
                <div class="col-sm-3 col-xs-6">
                  <input id="postcode" class="form-control" readonly="readonly" type="text" value="13529"
                         name="user[post_code]">
                </div>
                <div class="col-sm-4 col-xs-5" style="text-align: left;">
                  <input type="button" onclick="Common.execDaumPostcode()" value="우편번호 찾기"
                         class="btn btn-default btn-sm"><br>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-5">
                  <input id="road_address" class="form-control" readonly="readonly" type="text"
                         value="경기 성남시 분당구 분당내곡로 117 (백현동)" name="user[road_address]">
                </div>
                <div class="col-sm-7">
                  <input id="detail_address" class="form-control" type="text" value="1234"
                         name="user[detail_address]">
                </div>
              </div>
            </div>
            <div class="form-group">
              <p class="description" style="margin-top: -10px;">주소 전체를 정확하게 기입해주세요. 배송지 등으로 사용됩니다.</p>
            </div>

            <div class="form-group seller-unique-value-container">
              <h4 class="label-title">추천인 아이디</h4>
              <div class="row">
                <div class="col-sm-6 col-xs-12">
                  <input type="radio" name="recommend_type" id="lc_id" value="lc" class="margin-left-10"
                         onchange="javascript:changeRecommendType(this.value)" checked="">
                  <label class="seller-unique-value-name-tag" for="lc_id">일간대치동 LC 센터</label>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <input type="radio" name="recommend_type" id="junior_lounge_id" value="jn" class="margin-left-10"
                         onchange="javascript:changeRecommendType(this.value)">
                  <label class="seller-unique-value-name-tag" for="junior_lounge_id">일간대치동 관리교사</label>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <input type="radio" name="recommend_type" id="kids_lounge_id" value="kids" class="margin-left-10"
                         onchange="javascript:changeRecommendType(this.value)">
                  <label class="seller-unique-value-name-tag" for="kids_lounge_id">평생교육 디자이너(키즈스콜레)</label>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <input type="radio" name="recommend_type" id="conects_id" value="tutor" class="margin-left-10"
                         onchange="javascript:changeRecommendType(this.value)">
                  <label class="seller-unique-value-name-tag" for="conects_id">튜터닷컴/커넥츠</label>
                </div>
                <div class="col-sm-6 col-xs-12">
                  <input type="radio" name="recommend_type" id="none_id" value="none" class="margin-left-10"
                         onchange="javascript:changeRecommendType(this.value)">
                  <label class="seller-unique-value-name-tag" for="none_id">추천인 없음</label>
                </div>

              </div>

              <div id="id_proposer" class="">
                <div class="input-group search-margin">
                  <input type="text" name="recommend_id" id="recommend_id" value="" class="form-control">
                  <div class="input-group-btn">
                    <a data-behavior="search-emp" data-url="/kids_lounges/find_emp"
                       class="btn btn-primary btn-search"
                       href="#">검색</a>
                  </div>
                </div>
              </div>

              <p class="id_search" id="result_message"></p>
              <input type="hidden" name="proposer_id" id="proposer_id">
              <input type="hidden" name="proposer_type" id="proposer_type">
            </div>

            <script>
            function changeRecommendType (recommendtype) {
              $('#proposer_id').val('')
              $('#proposer_type').val('')
              $('#recommend_id').val('')
              $('#result_message').html('')

              if (recommendtype == 'lc_self' || recommendtype == 'none') {
                $('#id_proposer').hide()
              } else {
                $('#id_proposer').show()
              }
            }
            </script>
            <style>
            .seller-unique-value-container .margin-left-10 {
              margin-left: 5px !important;
            }

            .seller-unique-value-name-tag {
              margin-left: 5px !important;
              color: #333;
              font-size: 1em !important;
            }

            #result_message {
              font-weight: lighter;
              font-size: 0.8em;
              margin-left: 20px;
            }

            .search-margin {
              margin: 10px 10px 5px 30px;
              width: 200px;
            }

            #recommend_id {
            }
            </style>


            <div class="form-group">
              <p class="agree-title">
                <input type="checkbox" name="portrait" id="agree1">
                <label for="agree1">초상권 유의사항 및 운영 규정 안내 (필수)</label>
                <button type="button" class="btn btn-view">내용보기</button>
              </p>
              <div class="agree-detail">
                <ul class="likeness-term">
                  <li><strong>초상권 유의사항 안내</strong>회원은 자신의 초상이 서비스 이용 등의 목적에 따라 콘텐츠 및 강의매체에 송출,전송,녹화 등의 방법에 따라 포함되는
                    것에
                    동의합니다.
                  </li>
                  <li><strong>운영 규정 안내 <a href="/terms" target="_blank">[바로가기]</a></strong></li>
                </ul>
              </div>
            </div>
            <div class="form-group">
              <p class="agree-title">
                <input type="checkbox" name="privacy" id="agree2">
                <label for="agree2">개인정보 이용 필수 및 선택정보 수집에 동의합니다. (필수)</label>
                <button type="button" class="btn btn-view">내용보기</button>
              </p>
              <div class="agree-detail">
                <table>
                  <colgroup>
                    <col style="width:25%;">
                    <col style="width:25%;">
                    <col style="width:25%;">
                    <col style="width:25%;">
                  </colgroup>
                  <thead>
                  <tr>
                    <th>제공받는 자</th>
                    <th>제공 목적</th>
                    <th>제공 항목</th>
                    <th>보유 기간</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>판매자<br>(선생님,파트너)</th>
                    <td>[튜터닷컴]<br>학습 상담 및 학습 관리</td>
                    <td>ID, 닉네임, 전 화번호, 이메일 주소, 학습현황</td>
                    <td>강의 수강<br> 완료 후 1개월</td>
                  </tr>
                  <tr>
                    <th>동일<br>클래스 구매자</th>
                    <td>[튜터닷컴]<br>학습 현황 공유</td>
                    <td>닉네임, 학습현황</td>
                    <td>강의 수강<br> 완료 후 1개월</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <input type="submit" name="commit" value="다음으로 가기" class="btn btn-primary" data-disable-with="다음으로 가기">
          </div>
        </form>
      </div>
    </div>
    <div id="layer" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
      <img src="https://t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer"
           style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()"
           alt="닫기 버튼">
    </div>
    <script>

    </script>
  </div>

</template>

<script>
import $ from 'jquery'

export default {
  name: 'ModalUserInformation',
  mounted(){
    this.$nextTick(function(){
      $(function () {
        $('#checkout-user-form').on('submit', function (e) {
          if ($('#agree1').length > 0 && !$('#agree1').is(':checked')) {
            alert('초상권 제공에 동의해주세요')
            return false
          }

          if ($('#agree2').length > 0 && !$('#agree2').is(':checked')) {
            alert('[개인정보 수집 * 이용 동의]에 동의해주세요')
            return false
          }

          if ($('#agree3').length > 0 && !$('#agree3').is(':checked')) {
            alert('[개인정보 제 3자 동의]에 동의해주세요')
            return false
          }

          var recommend_id = $('#recommend_id').val()
          var recommend_type = document.querySelector('input[name="recommend_type"]:checked').value
          if (recommend_type !== 'none' && recommend_id.length < 1) {
            alert('추천인 아이디를 입력해주세요.\r\n추천인이 없다면 추천인 없음을 선택해주세요')
            return false
          }
        })
      })

      $(document).on('keypress keydown keyup change', '#user_p_phone', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''))
      })
    })
  }
}
</script>

<style lang=scss>
.ModalUserInformation {
}
</style>
