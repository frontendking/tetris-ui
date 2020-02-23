<template>
  <BaseFieldset>
    <BaseLegend>과목 선택</BaseLegend>
    <ul>
      <li
        v-for="inputbox in inputBoxes"
        :key="inputbox.key"
      >
        <BaseInputBox
          type="checkbox"
          name="att_search_subject"
          :input-box="inputbox"
        />
      </li>
    </ul>
  </BaseFieldset>
</template>

<script>
import BaseFieldset from '@/components/Base/BaseFieldset'
import BaseLegend from '@/components/Base/BaseLegend'
import BaseInputBox from '@/components/Base/BaseInputBox'

export default {
  name: 'FieldsetSelectSubject',
  components: { BaseInputBox, BaseLegend, BaseFieldset },
  props: {
    inputBoxes: { type: Array, required: true }
  }
}
</script>

