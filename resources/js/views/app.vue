<template>
  <div class="container">
    <comments-component/>
  </div>
</template>
<script>
import Button from '../shared/ui/Button.vue'
import Comments from '../pages/comments/ui/Comments.vue'

const default_layout = 'default'

export default {
  components: {
    'comments-component': Comments,
    'button-component': Button,
  },
  computed: {},
}
</script>
