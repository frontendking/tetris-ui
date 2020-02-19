<template>
  <fieldset>
    <div>
      <legend>튜터 검색</legend>
      <input id="tutor-name" type="text" placeholder="튜터 이름을 입력해 주세요." onkeypress="eventSearch(event);">
      <BaseButton type="button" class="find-buttons" id="btnSearchTutor"/>
    </div>
  </fieldset>
</template>

<script>

import BaseButton from './BaseButton'
export default {
  name: 'TheApplySearchboxTutor',
  components: { BaseButton },
}
</script>

<style scoped lang=scss>
fieldset {
  > div {
    display: flex;
    align-items: stretch;

    legend {
      grid-area: el;
      display: block;
      font-weight: 600;
    }

    input {
      font-size: 1rem;
      &::placeholder {
        color: #333;
      }

      background: #ffffff;
      height: 3rem;
      align-self: center;
      margin-left: 1rem;
      width: 34rem;
      padding-left: 1rem;
      border: 1px solid #e0e0e0;
    }

  }

}
</style>
