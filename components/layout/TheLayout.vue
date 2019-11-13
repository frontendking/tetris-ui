<template>
    <TheStConectsContents>
        <slot/>
    </TheStConectsContents>
</template>
<script>
// import TheConectsHeader from '../components/layout/TheConectsHeader'
import TheStConectsContents from '@/components/layout/TheStConectsContents'

export default {
  components: {
    TheStConectsContents,
  },
}
</script>
