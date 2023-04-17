<template>
  <div class="comments">
    <sorting-component :list="sorting" @click="updateSorting"/>
    <div class="comments__wrapper">
      <div v-if="isLoading">loading...</div>
      <comments-list-component v-if="!isLoading" :list="list" @delete="deleteComment" class="comments__list"
                               @update="update"/>
      <pagination-component
        :page="pagination.page"
        :all-pages="pagination.allPages"
        class="comments__pagination"
        @click="updatePagination"
      />
    </div>
    <form-create-component class="comments__form" :is-disabled="isSendingForm" v-model="data" @click="create"
                           button-text="send"/>
  </div>
</template>

<script>
import CommentsList from '../../../entities/comments/ui/CommentsList.vue'
import Button from '../../../shared/ui/Button.vue'
import FormCreate from '../../../entities/comments/ui/FormCreate.vue'
import {
  createComment,
  deleteComment,
  fetchComments,
  updateComment,
  updatePagination,
  updateSorting,
} from '../model/model'
import Pagination from '../../../shared/ui/Pagination.vue'
import Sorting from '../../../shared/ui/Sorting.vue'

const emptyData = {
  name: '',
  text: '',
  date: '',
}

export default {
  name: 'Comments',
  components: {
    'sorting-component': Sorting,
    'pagination-component': Pagination,
    'form-create-component': FormCreate,
    'button-component': Button,
    'comments-list-component': CommentsList,
  },
  data() {
    return {
      isLoading: false,
      isSendingForm: false,
      data: { ...emptyData },
    }
  },
  computed: {
    list() {
      return this.$store.getters['comments/commentsList']
    },
    pagination() {
      return this.$store.getters['comments/pagination']
    },
    sorting() {
      return this.$store.getters['comments/sorting']
    },
  },
  methods: {
    setIsLoading(value) {
      this.isLoading = value
    },
    setIsSendingForm(value) {
      this.isSendingForm = value
    },
    async fetch() {
      this.setIsLoading(true)
      try {
        await fetchComments()
      } catch (e) {
        console.log(e)
      } finally {
        this.setIsLoading(false)
      }
    },
    async create(data) {
      try {
        this.setIsSendingForm(true)
        await createComment(data)
        this.data = { ...emptyData }
        await this.fetch()
      } catch (e) {
        console.log(e)
      } finally {
        this.setIsSendingForm(false)
      }
    },
    async deleteComment(id) {
      await deleteComment(id)
    },
    async update(id, data) {
      await updateComment({ id, data })
    },
    updatePagination(number) {
      updatePagination({ ...this.pagination, page: number })
    },
    updateSorting(name) {
      const sorting = this.sorting.map(item => item.name === name ? {
        ...item,
        directionUp: !item.directionUp,
        value: true,
      } : { ...item, value: false })
      updateSorting(sorting)
    },
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style scoped>
.comments {
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.comments__wrapper {
  margin-top: 12px;
  flex: 1 1 auto;
}

.comments__pagination {
  margin-top: 32px;
}

.comments__form {
  margin-top: 32px;
}

</style>
