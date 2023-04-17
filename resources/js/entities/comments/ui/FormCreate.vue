<template>
  <div class="form">
    <input type="text" class="form__input" v-model="data.name" placeholder="name"/>
    <textarea type="text" cols="25" class="form__input" v-model="data.text" placeholder="text"/>
    <date-picker-component class="form__datepicker" v-model="data.date" placeholder="date"/>
    <button-component class="form__button" :is-loading="isDisabled" @click="$emit('click', data)">{{
        buttonText
      }}
    </button-component>
  </div>
</template>

<script>
import Button from '../../../shared/ui/Button.vue'
import { comment } from '../lib/type'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'FormCreate',
  components: {
    'date-picker-component': DatePicker,
    'button-component': Button,
  },
  props: {
    value: comment,
    buttonText: String,
    isDisabled: Boolean,
  },
  computed: {
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__input {
  border-radius: 4px;
  padding: 5px 12px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
}

.form__input:hover {
  border-color: #409aff;
}

.form__datepicker, .form__input {
  width: 300px;
  margin-top: 4px;
  transition: border-color 0.3s ease !important;
}

.form__input + .form__input {
  margin-top: 4px;
}

.form__button {
  margin-top: 6px;
}
</style>
