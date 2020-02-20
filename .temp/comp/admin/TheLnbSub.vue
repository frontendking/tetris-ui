<template>
  <ul class="TheLnbSub nav nav-tabs">
    <li v-for="v in navList" :class="{active:v.isActive}">
      <a
        :class="`navList-${v.id}`"
        data-toggle="tab"
        href="#step-tab"
        aria-expanded="true"
        v-html="v.label"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheLnbSub',
  props: ['navList'],
}
</script>

<style lang=scss>
.TheLnbSub {
}
</style>
