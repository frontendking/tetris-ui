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
  border: none;
  padding: 0.5em 2em;
  background-color: #000;
  color: #fff;
  font-weight: 400;

  &[type=button] {
    text-align: center;
    align-self: flex-end;
    margin-left: 1rem;
  }

}

</style>
