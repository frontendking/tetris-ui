<template>
  <BaseFieldset>
    <BaseLegend>과목 선택</BaseLegend>
    <BaseInputBox v-for="inputbox in inputBoxes" :key="inputbox.key" type="checkbox" name="att_search_subject" :input-box="inputbox" />
  </BaseFieldset>
</template>

<script>
import BaseInputBox from '@/components/Base/BaseInputBox'
import BaseFieldset from '@/components/Base/BaseFieldset'
import BaseLegend from '@/components/Base/BaseLegend'

export default {
  name: 'FieldsetSelectSubject',
  components: { BaseLegend, BaseFieldset, BaseInputBox },
  data () {
    return {
      inputBoxes: [
        {
          key: 'subject1',
          value: 'SJ1001',
          label: '국어'
        },
        {
          key: 'subject2',
          value: 'SJ1002',
          label: '수학'
        },
        {
          key: 'subject3',
          value: 'SJ1003',
          label: '사회/과학'
        },
        {
          key: 'subject4',
          value: 'SJ1004',
          label: '수학 문제 풀이'
        }
      ]
    }
  }
}
</script>

<style lang=scss scoped>

</style>
