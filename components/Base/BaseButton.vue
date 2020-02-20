<template>
  <button>검색</button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped lang=scss>
button {
  display: flex;
  border: none;
  padding: 0 1em;
  height: 2em;
  font-weight: 400;
  justify-content: center;
  &[type=button] {
    background-color: #000;
    color: #fff;
  }

}

</style>
