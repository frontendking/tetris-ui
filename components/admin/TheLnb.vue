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

<style lang=scss>
@import '@/assets/style/color.scss';

.TheTutorLocalNav {
  ul {
    display: grid;
    grid-template-rows: 7.5rem;
    grid-template-columns: repeat(auto-fit, minmax(18.9rem, auto));
    font-size: 2.4rem;
    line-height: 1;
    li {
      /*flex: 1 0 23.6rem;*/
      /*display: flex;*/
      /*justify-content: center;*/
      /*font-weight: normal;*/

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.06rem;
        color: $onSurface;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid $line;
        &.active, &:active, &:hover {
          text-decoration: none;
          font-weight: bold;
          border-bottom: $primary solid 4px;
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
      border-top: 1px solid $line-darker;
      border-left: 1px solid $line-darker;

      li {
        display: flex;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: $onSurface-variant;
          letter-spacing: 0.06rem;
          border-bottom: 1px solid $line-darker;
          border-right: 1px solid $line-darker;
          background-color: $surface;
          font-weight: bold;
          &.active, &:active, &:hover {
            font-weight: bold;
            color: $surface;
            background-color: $onSurface-variant;
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
