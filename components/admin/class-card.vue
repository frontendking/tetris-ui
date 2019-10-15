<template>
  <div class="my-class-card class-card tutor">
    <div class="card-head cover2">
      <span class="user-name">teacher_1</span>
      <a class="btn btn-line" href="/t/teacher-1">프로필보기</a>
      <div class="tutor-card-profile">
        <img class="" src="../temp/assets/img/no_avatar.png" alt="No avatar" width="60" height="60">
      </div>
    </div>
    <a href="/tutor/courses/725">
      <div class="card-content">
        <p class="sub-title">
          <span class="item">초등</span>
          <span class="item">사회/과학</span>
        </p>
        <strong class="title">4학년 사회/과학</strong>
        <div class="program-info">
          <p class="program-schedule">
            <span class="fa fa-clock-o">시간협의</span>
            <button v-if=canUpdate class="update-btn">변경</button>
          </p>
          <p class="program-price">
            <span class="price">100 원</span> <span>( 총 1 회 )</span>
          </p>
        </div>
      </div>
      <div class="card-foot">
        <p class="strat-time">9월 5일 수업 시작</p>
        <div class="program_status">
          <span class="label-item orange">비공개</span>
          총 0명
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'class-card',
  props: {
    canUpdate: {
      default: false
    }
  }
}
</script>

<style lang=scss>
.my-class-card {
  .program-schedule {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .update-btn {
      height: 3rem;
      width: 5rem;
      text-align: center;
      color: #fff;
      background: #29b6f6;
      border-radius: 0.3rem;
    }
  }
}
</style>
