<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Card',
  components: { 'button-component': Button },
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 12px #bbb;
}
</style>
