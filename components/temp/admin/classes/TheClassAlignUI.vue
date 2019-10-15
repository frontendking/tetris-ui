<template>
  <div class="sort-wrap">
    <strong class="title pull-left m-t-xs">정렬기준</strong>
    <form class="form-horizontal" id="teach-filter-form" action="/tutor/courses" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
      <input type="hidden" name="status" id="status" value="progresses">
      <div class="col-sm-2">
        <select id="category-selector" class="category-selector form-control chosen-select" name="root" style="display: none;">
          <option value="">분야</option>
          <option value="jr">초등</option>
          <option value="mid">중등</option>
          <option value="high">고등</option>
          <option value="peet">PEET</option>
          <option value="gong">공무원</option>
          <option value="global">외국어</option>
          <option value="art">음악/미술/예술</option>
          <option value="hobby">취미/운동</option>
          <option value="it">IT/컴퓨터</option>
          <option value="pass">합격선배</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select id="sub-category-selector" class="sub-category-selector form-control chosen-select" name="category" style="display: none;">
          <option value="">세부분야</option>
          <optgroup label="초등">
            <option value="jr_sc01">일간대치동</option>
            <option value="jr_sc02">대치동학원</option>
            <option value="jr_sc03">일간대치동 제휴학원</option>
            <option value="jr_sc04">일간대치동 과외</option>
          </optgroup>
          <optgroup label="중등">
            <option value="mid_sc01">중등 입시</option>
            <option value="mid_sc02">중등 수시</option>
          </optgroup>
          <optgroup label="고등">
            <option value="high_sc01">고등 입시</option>
            <option value="high_sc02">고등 수시</option>
          </optgroup>
          <optgroup label="PEET">
            <option value="peet_sc01">PEET 공통</option>
          </optgroup>
          <optgroup label="공무원">
            <option value="gong_sc01">공무원 공통</option>
          </optgroup>
          <optgroup label="외국어">
            <option value="global_sc01">영어</option>
            <option value="global_sc02">중국어</option>
            <option value="global_sc03">일본어</option>
            <option value="global_sc04">프랑스어</option>
            <option value="global_sc05">스페인어</option>
            <option value="global_sc06">독일어</option>
            <option value="global_sc07">아랍어</option>
            <option value="global_sc08">기타언어</option>
          </optgroup>
          <optgroup label="음악/미술/예술">
            <option value="art_sc01">음악</option>
            <option value="art_sc02">미술</option>
            <option value="art_sc03">예술</option>
          </optgroup>
          <optgroup label="취미/운동">
            <option value="hobby_sc01">취미</option>
            <option value="hobby_sc02">운동</option>
          </optgroup>
          <optgroup label="IT/컴퓨터">
            <option value="it_sc01">컴퓨터</option>
            <option value="it_sc02">디자인</option>
          </optgroup>
          <optgroup label="합격선배">
            <option value="pass_sc01">유초등</option>
            <option value="pass_sc02">중고등</option>
            <option value="pass_sc03">공무원</option>
            <option value="pass_sc04">어학/유학</option>
            <option value="pass_sc05">취업/재취업</option>
            <option value="pass_sc06">전문직</option>
          </optgroup>
        </select>
      </div>
      <div class="col-sm-2">
        <select id="subject-selector" class="subject-selector form-control chosen-select" name="subject" style="display: none;">
          <option value="">과목</option>
          <optgroup label="일간대치동">
            <option value="jr_sub01">국어</option>
            <option value="jr_sub02">영어</option>
            <option value="jr_sub03">수학</option>
            <option value="jr_sub04">사회/과학</option>
          </optgroup>
          <optgroup label="대치동학원">
            <option value="jr_sub06">수학</option>
            <option value="jr_sub07">영어</option>
            <option value="jr_sub08">코딩</option>
            <option value="jr_sub09">논술</option>
            <option value="jr_sub10">미술</option>
          </optgroup>
          <optgroup label="중등 입시">
            <option value="mid_sub01">국어</option>
            <option value="mid_sub02">영어</option>
            <option value="mid_sub03">수학</option>
            <option value="mid_sub04">사회 공통</option>
            <option value="mid_sub05">과학 공통</option>
            <option value="mid_sub06">한국사</option>
          </optgroup>
          <optgroup label="중등 수시">
            <option value="mid_sub07">논술</option>
            <option value="mid_sub08">수시/컨설팅</option>
            <option value="mid_sub09">제2외국어</option>
          </optgroup>
          <optgroup label="고등 입시">
            <option value="high_sub01">국어</option>
            <option value="high_sub02">영어</option>
            <option value="high_sub03">수학</option>
            <option value="high_sub04">사회 공통</option>
            <option value="high_sub05">과학 공통</option>
            <option value="high_sub06">한국사</option>
            <option value="high_sub10">예체능</option>
          </optgroup>
          <optgroup label="고등 수시">
            <option value="high_sub07">논술</option>
            <option value="high_sub08">수시/컨설팅</option>
            <option value="high_sub09">제2외국어</option>
          </optgroup>
          <optgroup label="PEET 공통">
            <option value="peet_sub01">공통</option>
          </optgroup>
          <optgroup label="공무원 공통">
            <option value="gong_sub01">공통</option>
          </optgroup>
          <optgroup label="영어">
            <option value="global_sub01">영어회화</option>
            <option value="global_sub02">영어 공통</option>
          </optgroup>
          <optgroup label="중국어">
            <option value="global_sub03">중국어 공통</option>
          </optgroup>
          <optgroup label="일본어">
            <option value="global_sub04">일본어 공통</option>
          </optgroup>
          <optgroup label="프랑스어">
            <option value="global_sub05">프랑스어 공통</option>
          </optgroup>
          <optgroup label="스페인어">
            <option value="global_sub06">스페인어 공통</option>
          </optgroup>
          <optgroup label="독일어">
            <option value="global_sub07">독일어 공통</option>
          </optgroup>
          <optgroup label="아랍어">
            <option value="global_sub08">아랍어 공통</option>
          </optgroup>
          <optgroup label="기타언어">
            <option value="global_sub09">기타언어 공통</option>
          </optgroup>
          <optgroup label="음악">
            <option value="art_sub01">악기 연주</option>
            <option value="art_sub02">보컬/성악/랩</option>
            <option value="art_sub03">작곡/이론</option>
            <option value="art_sub04">기타(음악)</option>
          </optgroup>
          <optgroup label="미술">
            <option value="art_sub05">드로잉/스케치</option>
            <option value="art_sub06">서양화/동양화</option>
            <option value="art_sub07">조소/도예</option>
            <option value="art_sub08">애니메이션/웹툰</option>
            <option value="art_sub09">기타(미술)</option>
          </optgroup>
          <optgroup label="예술">
            <option value="art_sub10">연기/영화</option>
            <option value="art_sub11">무용</option>
            <option value="art_sub13">글쓰기</option>
            <option value="art_sub12">기타(예술)</option>
          </optgroup>
          <optgroup label="취미">
            <option value="hobby_sub01">뷰티</option>
            <option value="hobby_sub02">공예/플라워</option>
            <option value="hobby_sub03">사진/영상</option>
            <option value="hobby_sub04">기타(취미)</option>
          </optgroup>
          <optgroup label="운동">
            <option value="hobby_sub05">PT/홈트</option>
            <option value="hobby_sub06">요가/필라테스</option>
            <option value="hobby_sub07">댄스/무용</option>
            <option value="hobby_sub08">기타(운동)</option>
          </optgroup>
          <optgroup label="컴퓨터">
            <option value="it_sub01">프로그래밍 언어</option>
            <option value="it_sub02">웹 개발</option>
            <option value="it_sub03">앱(모바일) 개발</option>
            <option value="it_sub04">게임개발</option>
            <option value="it_sub05">기타(컴퓨터)</option>
          </optgroup>
          <optgroup label="디자인">
            <option value="it_sub06">디자인툴(포토샵/일러)</option>
            <option value="it_sub07">영상편집툴</option>
            <option value="it_sub08">기타(디자인)</option>
          </optgroup>
          <optgroup label="유초등">
            <option value="pass_sub01">스터디</option>
          </optgroup>
          <optgroup label="중고등">
            <option value="pass_sub02">스터디</option>
          </optgroup>
          <optgroup label="공무원">
            <option value="pass_sub03">스터디</option>
          </optgroup>
          <optgroup label="어학/유학">
            <option value="pass_sub04">스터디</option>
          </optgroup>
          <optgroup label="취업/재취업">
            <option value="pass_sub05">스터디</option>
          </optgroup>
          <optgroup label="전문직">
            <option value="pass_sub06">스터디</option>
          </optgroup>
          <optgroup label="일간대치동 제휴학원">
            <option value="jr_sub11">국어</option>
            <option value="jr_sub12">수학</option>
            <option value="jr_sub13">사회/과학</option>
            <option value="jr_sub14">영어</option>
            <option value="jr_sub15">코딩</option>
            <option value="jr_sub16">논술</option>
            <option value="jr_sub17">미술</option>
          </optgroup>
          <optgroup label="일간대치동 과외">
            <option value="jr_sub18">국어</option>
            <option value="jr_sub19">수학</option>
            <option value="jr_sub20">사회</option>
            <option value="jr_sub21">과학</option>
            <option value="jr_sub22">영어</option>
          </optgroup>
        </select>
      </div>
      <div class="col-sm-2">
        <select name="order" id="order" class="chosen-select" style="display: none;">
          <option selected="selected" value="updated_desc">최신 항목 우선</option>
          <option value="endat_asc">종강일 빠른 순</option>
          <option value="endat_desc">종강일 늦은 순</option>
          <option value="updated_asc">오래된 항목 우선</option>
        </select>
      </div>
      <div class="col-sm-2">
        <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-search"></i>&nbsp;검색</button>
      </div>
    </form>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'TheClassAlignUI'
}
</script>

<style lang=scss>
.TheClassAlignUI {
}
</style>
