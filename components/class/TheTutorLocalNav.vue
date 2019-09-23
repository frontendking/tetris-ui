<template>
  <nav class="TheTutorLocalNav">
    <h2 class="hidden">tutor local nav</h2>
    <ul>
      <li v-for="(v, k) in navItems">
        <a :href="`${v.to}`" :class="v.active?'active':''">
          {{v.label}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheTutorLocalNav',
  props: ['navItems'],
}
</script>

<style lang=scss>
.TheTutorLocalNav {
  ul {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 0 1.5rem;
    font-size: 2.4rem;
    line-height: 1;

    li {
      flex: 1 1 16rem;
      display: flex;
      justify-content: center;
      font-weight: normal;

      a {
        display: block;
        padding: 2.7rem 0 2.1rem;
        width: 100%;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0.06rem;

        &.active, &:active, &:hover {
          /*font-weight: bold;*/
          /*border-bottom: #34b4f9 solid 4px;*/
        }
      }
    }
  }
}

.TheTutorLocalNav {
  @media(min-width: 641px) {
    ul {
      background-color: #f7f7f7;
      color: #777;
      font-size: 1.6rem;
      font-weight: 500;
      border: none;
      padding: 0;

      li {
        display: flex;
        border: solid 1px #e0e0e0;
        border-right: none;

        &:last-child {
          border-right: solid 1px #e0e0e0;
        }
      ;

        &.active, &:hover, &:active {
          color: #fff;
          background-color: #6e737d;
          border-bottom: none !important;
        }
      }

      a {
        display: block;
        padding: 2.7rem 0 2.1rem;
        width: 100%;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0.06rem;

        &.active, &:active, &:hover {
          font-weight: bold;
          border-bottom: none;
        }
      }
    }
  }
}
</style>
