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
    grid-template-columns: repeat(5, minmax(18.9rem, auto));
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

@media(min-width: 641px) {
  .TheTutorLocalNav {
    ul {
      color: #777;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0;
      border-top: 1px solid #e0e0e0;
      border-left: 1px solid #e0e0e0;

      li {
        display: flex;

        a {
          display: flex;
          height: 5.8rem;
          width: 100%;
          justify-content: center;
          align-items: center;
          color: #888888;
          letter-spacing: 0.06rem;
          border-bottom: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;

          &.active, &:active, &:hover {
            font-weight: bold;
            color: #fff;
            background-color: #6e737d;
          }
        }
      }
    }
  }
}
</style>
