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
    display: grid;
    grid-template-columns: repeat(5, minmax(23.6rem, auto));
    /*display: flex;*/
    /*flex-flow: row;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
    /*padding: 0 1.5rem;*/
    /*font-size: 2.4rem;*/
    /*line-height: 1;*/

    li {
      /*flex: 1 0 23.6rem;*/
      /*display: flex;*/
      /*justify-content: center;*/
      /*font-weight: normal;*/


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
      padding: 0;
      li {
        display: flex;
        &:last-child {
        }
      ;

        &.active, &:hover, &:active {
          color: #fff;
          background-color: #6e737d;
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
          color: inherit;
        }
      }
    }
  }
}
</style>
