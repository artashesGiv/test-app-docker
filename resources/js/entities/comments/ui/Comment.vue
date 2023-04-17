<template>
  <card-component :class="['comment', classes]" @click="$emit('click')">
    <div class="comment__buttons">
      <button-component class="comment__button" @click="$emit('delete')">X</button-component>
      <button-component class="comment__button" @click="onClick">edit</button-component>
    </div>
    <div class="wrapper">
      <div class="comment__data" v-if="!isEdit">
        <div class="comment__title">{{ data.name }}</div>
        <div class="comment__description">{{ data.text }}</div>
        <div class="comment__date">{{ data.date }}</div>
      </div>
      <div class="comment__form" v-else>
        <FormCreate v-model="localData" button-text="update" @click="onUpdate"/>
      </div>
    </div>
  </card-component>
</template>

<script>
import Card from '../../../shared/ui/Card.vue'
import { comment } from '../lib/type'
import Button from '../../../shared/ui/Button.vue'
import da from 'vue2-datepicker/locale/es/da'
import FormCreate from './FormCreate.vue'

export default {
  name: 'Comment',
  components: { FormCreate, 'button-component': Button, 'card-component': Card },
  data() {
    return {
      isEdit: false,
      localData: { ...this.data },
    }
  },
  props: {
    data: comment,
    isDisabled: Boolean,
  },
  computed: {
    classes() {
      const classes = []
      if (this.isEdit) {
        classes.push('is-edit')
      }
      if (this.isDisabled) {
        classes.push('is-disabled')
      }
      return classes
    },
  },
  methods: {
    setIsEdit(value) {
      this.isEdit = value
    },
    onClick() {
      this.setIsEdit(!this.isEdit)
      this.localData = { ...this.data }
    },
    onUpdate() {
      this.$emit('update', this.localData)
      this.setIsEdit(false)
    },
  },
}
</script>

<style scoped>
.comment {
  position: relative;
  padding-right: 60px;
}

.comment__buttons {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 50px;
}

.comment__button + .comment__button {
  margin-top: 4px;
}

.is-edit {
  border: 1px solid cornflowerblue;
}

.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
