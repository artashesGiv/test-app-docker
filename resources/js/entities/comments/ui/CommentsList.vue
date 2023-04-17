<template>
  <div class="comments-list">
    <comment-component
      class="comment"
      v-for="card in list"
      :data="card"
      :key="card.id"
      @update="$emit('update', card.id, $event)"
      @delete="$emit('delete', card.id)"
    />
  </div>
</template>

<script>

import Comment from './Comment.vue'
import Button from '../../../shared/ui/Button.vue'

export default {
  name: 'CommentsList',
  props: [ 'list' ],
  components: { Button, 'comment-component': Comment },
}
</script>

<style scoped>
.comment + .comment {
  margin-top: 16px;
}
</style>
