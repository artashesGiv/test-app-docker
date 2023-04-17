<template>
  <div class="pagination">
    <div
      v-for="number in pages"
      :class="{'pagination__cell--active': number === page}"
      class="pagination__cell"
      @click="$emit('click', number)"
    >
      {{ number }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: Number,
    allPages: Number,
  },
  computed: {
    pages() {
      return Array.from({ length: this.allPages }, (_, index) => index + 1)
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
}

.pagination__cell {
  padding: 2px 4px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.pagination__cell + .pagination__cell {
  margin-left: 4px;
}

.pagination__cell:hover {
  color: #1d2124;
}

.pagination__cell--active {
  color: #409aff;
}
</style>
