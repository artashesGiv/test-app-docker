<template>
  <button
    :class="classes"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    isLoading: Boolean,
  },
  computed: {
    classes() {
      const classes = [ 'button' ]

      if (this.$props.isLoading) {
        classes.push('is-loading')
      }

      return classes
    },
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  min-width: 20px;
  min-height: 20px;
  padding: 0 12px;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.is-loading {
  opacity: 0.5;
  pointer-events: none;
}

.button:hover {
  border: 1px solid #409aff;
}
</style>
