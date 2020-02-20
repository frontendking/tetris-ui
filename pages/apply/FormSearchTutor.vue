<template>
  <form>
    <div>
      <h1>튜터 검색</h1>
      <BaseInputText id="tutor-name" placeholder="튜터 이름을 입력해 주세요."/>
      <BaseButton id="btnSearchTutor" type="button"/>
    </div>
  </form>
</template>

<script>
import BaseInputText from '@/components/Base/BaseInputText'
import BaseButton from '@/components/Base/BaseButton'

export default {
  name: 'FormSearchTutor',
  components: { BaseButton, BaseInputText }
}
</script>

<style scoped lang=scss>
form div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input[type=text] {
    width: 15em;
  }
}
</style>
