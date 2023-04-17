<template>
  <div class="sorting">
    <div class="sorting__item">Сортировка:</div>
    <div
      v-for="item in [...list]"
      :class="['sorting__item', {'sorting__item--active': item.value}]"
      @click="$emit('click', item.name)"
    >
      {{ item.name }}
      {{ item.directionUp ? '↓' : '↑' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sorting',
  props: [ 'list' ],
}
</script>

<style scoped>
.sorting {
  display: flex;
}

.sorting__item {
  padding: 2px 4px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.sorting__item + .sorting__item {
  margin-left: 4px;
}

.sorting__item--active {
  color: #409aff;
}
</style>
