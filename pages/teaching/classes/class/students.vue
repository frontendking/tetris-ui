<template>
  <div id="member-tab" class="tab-pane m-t-xl active">
    <h4 class="sort-result">총 2명</h4>

    <table class="table table-striped table-bordered student-list-table">
      <thead>
      <tr>
        <th class="text-center"></th>
        <th class="text-center">학생이름(아이디)</th>
        <th class="text-center">나이</th>
        <th class="text-center">이메일</th>
        <th class="text-center">휴대전화</th>
        <th class="text-center">학부모휴대전화</th>
        <th class="text-center">주소</th>
        <th class="text-center">메시지</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="sort-result" width="5%" style="text-align:center;">
          <img width="50" height="50" alt="avatar image" class="profile-img img-circle" src="../../../assets/img/no_avatar.png">
        </td>
        <td width="10%" style="text-align:center;">
          student_10(student_10)
        </td>
        <td style="width: 10%;">
          나이 6세 (2014년 5월생)
        </td>
        <td style="width: 10%;">
          student_10@stunitas.com
        </td>
        <td style="width: 10%;">
          01022222222
        </td>
        <td style="width: 10%;">
          01022222222
        </td>
        <td style="width: 20%;">
          [06097] 서울 강남구 봉은사로 403 (삼성동) 1111
        </td>
        <td style="width: 10%;">
          <a class="btn btn-default btn-block" href="#" onclick="$('#conversation_43').addClass('active');return false;">메시지 보내기</a>
        </td>
      </tr>
      </tbody>
    </table>
    <TheChattingWindow/>
  </div>
</template>

<script>
import TheChattingWindow from '@/pages/admin/classes/class/TheChattingWindow'
export default {
  components: { TheChattingWindow }
}
</script>

<style lang=scss>
.students {
.student-list-table tbody tr td {
  padding-top: 35px;
}
}
</style>

