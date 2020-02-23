<template>
  <fieldset>
    <div>
      <BaseLegend>학년 선택</BaseLegend>
      <BaseSelect id="att_search_grade" :options="options" />
    </div>
  </fieldset>
</template>

<script>
import BaseLegend from '@/components/Base/BaseLegend'
import BaseSelect from '@/components/Base/BaseSelect'

export default {
  name: 'FieldsetSelectGrade',
  components: { BaseSelect, BaseLegend },
  props: {
    options: { type: Array, required: true }
  }
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-evenly;
}
</style>
