import { commentsApi } from '../api/api'
import { store } from '../../../app'

const fetchComments = async () => {
  const comments = await commentsApi.get()
  const list = comments.map(item => ({ ...item, date: item.date.slice(0, 10) }))
  store.commit('comments/updateList', list)
  updatePagination({
    page: 1,
    allPages: Math.ceil(list.length / 3),
  })
}

const createComment = async (data) => {
  await commentsApi.create(data)
}

const deleteComment = async (id) => {
  await commentsApi.delete(id).then(() => {
    store.commit('comments/deleteComment', id)
  })
}

const updateComment = async ({ id, data }) => {
  await commentsApi.update(id, data).then(() => {
    store.commit('comments/updateComment', { id, data })
  })
}

const updatePagination = (pagination) => {
  store.commit('comments/updatePagination', pagination)
}

const updateSorting = (sorting) => {
  store.commit('comments/updateSorting', sorting)
}

export {
  fetchComments, createComment, deleteComment, updateComment, updatePagination, updateSorting,
}
