<template>
  <BaseFieldset>
    <BaseLegend>학년 선택</BaseLegend>
    <BaseSelect id="att_search_grade" :options="options" />
  </BaseFieldset>
</template>

<script>
import BaseFieldset from '@/components/Base/BaseFieldset'
import BaseLegend from '@/components/Base/BaseLegend'
import BaseSelect from '@/components/Base/BaseSelect'
export default {
  name: 'FieldsetSelectGrade',
  components: { BaseSelect, BaseLegend, BaseFieldset },
  props: ['options']
}
</script>

<style lang=scss scoped>
  fieldset {

  }
</style>
