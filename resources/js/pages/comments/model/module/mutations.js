const mutations = {
  updateList(state, payload) {
    state.list = payload
  },
  deleteComment(state, payload) {
    state.list = state.list.filter(item => item.id !== payload)
  },
  updateComment(state, payload) {
    console.log(payload.data)
    state.list = state.list.map(item => item.id === payload.id ? { id: item.id, ...payload.data } : item)
  },
  updatePagination(state, payload) {
    state.pagination = payload
  },
  updateSorting(state, payload) {
    state.sorting = payload
  },
}

export default mutations


