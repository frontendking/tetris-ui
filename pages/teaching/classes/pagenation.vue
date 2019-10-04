<template>
  <ul class="pagination ">
    <li class="first">
      <a href="/tutor/courses?status=closes">« 처음</a>
    </li>
    <li class="prev">
      <a rel="prev" href="/tutor/courses?page=4&amp;status=closes">‹ 이전</a>
    </li>
    <li class="page active">
      <a href="/tutor/courses?status=closes">1</a>
    </li>
    <li class="page">
      <a rel="next" href="/tutor/courses?page=2&amp;status=closes">2</a>
    </li>
    <li class="page">
      <a href="/tutor/courses?page=3&amp;status=closes">3</a>
    </li>
    <li class="page">
      <a href="/tutor/courses?page=4&amp;status=closes">4</a>
    </li>
    <li class="page">
      <a href="/tutor/courses?page=5&amp;status=closes">5</a>
    </li>
    <li class="page gap disabled"><a href="#" onclick="return false;">…</a></li>
    <li class="next_page">
      <a rel="next" href="/tutor/courses?page=2&amp;status=closes">다음 ›</a>
    </li>
    <li class="last next">
      <a href="/tutor/courses?page=6&amp;status=closes">마지막 »</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'pagenation'
}
</script>

<style lang=scss>
.pagenation {
}
</style>
