<template>
  <article class="profile">
    <h1 v-html="heading"/>
    <div id="profile" class="form-wrap">
      <div class="form-content">
        <form class="form-horizontal" id="edit_user_1" method="post">
          <div class="form-group">
            <label class="control-label col-sm-2 small-title" for="user_username">회원가입 이름</label>
            <div class="col-sm-8">
              <input class="form-control" readonly="readonly" type="text" value="got" name="user[username]"
                     id="user_username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2 small-title" style="color: #ff0000" for="user_nickname">학생 이름 *</label>
            <div class="col-sm-8">
              <input class="form-control" required="required" type="text" value="got1 선생님" name="user[nickname]"
                     id="user_nickname">
              <p class="description">(수업에서 사용할 <span style="color: #ff0000">학생이름을 꼭</span> 입력해 주세요.)</p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2 small-title" for="user_email">학생 이메일</label>
            <div class="col-sm-8">
              <input class="form-control" type="text" value="got1@tutor.com" name="user[email]" id="user_email">
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2 small-title" for="user_phone">학생 휴대전화</label>
            <div class="col-sm-2">
              <input class="form-control" type="text" value="010">
            </div>
            <div class="col-sm-2">
              <input class="form-control" type="text">
            </div>
            <div class="col-sm-2">
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="form-group">
            <script>$(window).load(function () {changeUserBirthdayWithParentInformation('birthday-selector')})</script>
            <label class="control-label col-sm-2 small-title" style="color: #ff0000" for="user_birth">학생 태어난 연월
              *</label>
            <div class="col-sm-8">
              <select id="birthday-selector1" name="user[birth(1i)]" required="required"
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
              <div class="chosen-container chosen-container-single" style="width: 100%;" title=""
                   id="birthday_selector_chosen">
                <div class="chosen-drop">
                  <div class="chosen-search"><input type="text" autocomplete="off"></div>
                  <ul class="chosen-results"></ul>
                </div>
              </div>
              <select id="birthday-selector" name="user[birth(2i)]" required="required"
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
              <div class="chosen-container chosen-container-single" style="width: 100%;" title=""
                   id="birthday_selector_chosen">
                <div class="chosen-drop">
                  <div class="chosen-search"><input type="text" autocomplete="off"></div>
                  <ul class="chosen-results"></ul>
                </div>
              </div>
              <input type="hidden" id="user_birth_3i" name="user[birth(3i)]" value="1">

            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2 small-title" for="user_p_name">학부모 이름</label>
            <div class="col-sm-3">
              <input class="form-control" type="text" value="" name="user[p_name]" id="user_p_name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2 small-title" for="user_phone">학부모 휴대전화</label>
            <div class="col-sm-2">
              <input class="form-control" type="text" value="010">
            </div>
            <div class="col-sm-2">
              <input class="form-control" type="text">
            </div>
            <div class="col-sm-2">
              <input class="form-control" type="text">
            </div>
          </div>
          <div class="form-group padding-sm">
            <label class="control-label col-sm-2 small-title col-xs-12" for="user_location">주소</label>
            <div class="col-sm-3 col-xs-6">
              <input id="postcode" class="form-control" readonly="readonly" type="text" value="13529"
                     name="user[post_code]">
            </div>
            <div class="col-sm-2 col-xs-5">
              <input type="button" onclick="Common.execDaumPostcode()" value="우편번호 찾기"
                     class="btn btn-default btn-sm"><br>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-4">
              <input id="road_address" class="form-control" readonly="readonly" type="text"
                     value="경기 성남시 분당구 분당내곡로 117 (백현동)" name="user[road_address]">
            </div>
            <div class="col-sm-6">
              <input id="detail_address" class="form-control" type="text" value="1234" name="user[detail_address]">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <p class="description" style="margin-top: -10px;">주소 전체를 정확하게 기입해주세요. 배송지 등으로 사용됩니다.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <TheFooterButtons
      cancel-label="취소"
      apply-label="저장"
    />
  </article>
</template>

<script>
import TheFooterButtons from '@/components/temp/admin/TheFooterButtons'
export default {
  name: 'profile',
  components: { TheFooterButtons },
  data () {
    return {
      heading: '프로필',
      form: {
        descriptions: [
          '※ 학생 이름, 태어난 년월, 학부모 휴대전화는 필수 입력 항목 입니다. 원활한 수업을 위해 꼭 작성해 주세요.',
          '※ 학부모님은 반드시 자녀 이름으로 학생이름을 작성해 주세요.</br>자녀가 2명 이상인 경우, 자녀 각각의 이름으로 회원 가입해 주시기 바랍니다.'
        ]
      }
    }
  }
}
</script>

<style  lang=scss>
.profile {
  display: grid;
  /*@formatter:off*/
    grid-template:
      "header" auto
      "table" auto/
      auto;
    /* @formatter:on*/
  font-size: 1.6rem;
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
    line-height: 1;
    padding-bottom: 1.8rem;
    border-bottom: 2px solid #000000;
  }
}

#profile {
  padding: 5rem 0;
  #birthday_selector_chosen {
    display: none;
  }

  #edit_user_1 .col-sm-2 {
    padding-right: 0;
  }
}
</style>
