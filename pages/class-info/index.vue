<template>
  <article class="class-info">
    <h1>pageTitle</h1>
    <section>
      <h2 hidden>수업요약</h2>
      <section>
        <h3 hidden>선생님 정보 요약</h3>
        <figure id="teacher-picture">
          <img src="./teacher.png"/>
          <figcaption>teacherName</figcaption>
        </figure>
        <hr/>
        <p><i>letter icon</i>메시지 보내기 ></p>
      </section>
      <section>
        <h3 hidden>수업 정보 요약</h3>
        <dl>
          <dt>제목</dt>
          <dl>1학년 수학 <em>8월 목요일 17:00</em></dl>
          <dt>대상</dt>
          <dl>초등학교 1학년</dl>
          <dt>교재</dt>
          <dl>자체교재</dl>
          <dt>모집기간</dt>
          <dl>초등학교 1학년</dl>
          <dt>모집인원</dt>
          <dl>자체교재</dl>
          <dt>수강기간</dt>
          <dl>2019.08.01-2019.08.31</dl>
          <dt>후기</dt>
          <dl>5.0
            <i class="star">star</i>
            <i class="star">star</i>
            <i class="star">star</i>
            <i class="star">star</i>
          </dl>
        </dl>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'class-info'
}
</script>

<style scoped lang=scss>
@import 'destyle.css';
.class-info {
  font-size: 2rem;
}
</style>
