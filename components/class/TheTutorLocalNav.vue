<template>
  <nav class="TheTutorLocalNav">
    <h2 class="hidden">tutor local nav</h2>
    <ul>
      <li v-for="(v, k) in navItems" :class="v.active?'active':''">
        <a :href="`${v.to}`">
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

<style scoped lang=scss>
.TheTutorLocalNav {
  ul {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-size: 2.2rem;

    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-weight: bolder;

      &.active {
        border-bottom: #34b4f9 solid 4px;
      }

      &:active, &:hover {
        border-bottom: #34b4f9 solid 4px;
      }
      a {
        display: block;
        padding: 2.4rem 0;
        width: 100%;
        text-align: center;
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
      li {
        display: flex;
        border: solid 1px #e0e0e0;
        border-right: none;

        &:last-child {
          border-right: solid 1px #e0e0e0;
        };
        &.active, &:hover, &:active {
          color: #fff;
          background-color: #6e737d;
          border-bottom: none;
        }
      }
    }
  }
}
</style>
