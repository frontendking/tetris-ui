<template>
  <nav class="TheTutorLocalNav">
    <h2 class="hidden">tutor local nav</h2>
    <ul>
      <li v-for="(v, k) in navList">
        <a :href="`${v.to}`" :class="v.isActive?'active':''">
          {{v.label}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheTutorLocalNav',
  props: ['navList'],
}
</script>

<style lang="scss">
.hidden {
  position: absolute;
  text-indent: -9999px;
}
.TheTutorLocalNav ul {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns:(minmax(18.9rem, auto)) [ 5 ];
  grid-template-columns: repeat(5, minmax(18.9rem, auto))
}

.TheTutorLocalNav ul li a {
  display: block;
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, .8);
  letter-spacing: .06rem
}

@media (min-width: 960px) {
  .TheTutorLocalNav ul {
    color: #777;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0
  }

  .TheTutorLocalNav ul li {
    display: flex
  }

  .TheTutorLocalNav ul li a {
    display: flex;
    height: 5.8rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #888;
    letter-spacing: .06rem;
    border-bottom: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0
  }

  .TheTutorLocalNav ul li a.active, .TheTutorLocalNav ul li a:active, .TheTutorLocalNav ul li a:hover {
    font-weight: 700;
    color: #fff;
    background-color: #6e737d
  }
}


</style>
