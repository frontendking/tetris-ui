<div class="outer">
  <div class="inner"></div>
</div>
<div class="button">Transition me!</div>


<style lang="scss">
div.outer {
  width: 10rem;
  height: 10rem;
  background: blue;
  border: 1rem solid gray;
  padding: 2.5rem;
  margin: 2.5rem;
  position: absolute;
}

div.inner {
  width: 5rem;
  height: 5rem;
  background: red;
  border: 1rem solid gray;
}

div.button {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: yellowgreen;
  width: 20rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.button:hover {
  background-color: darkolivegreen;
  transition: background 0.3s ease 0.5s;
}
</style>

<script>
import Button from '../components/Button.svelte'
import { onMount } from 'svelte'

onMount(async () => {

  const inner = document.querySelector('.inner')
  console.log(inner.offsetTop, inner.offsetParent)
})
</script>


