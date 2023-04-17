import { toSorting } from '../../../../shared/lib/helper/toSorting'

const getters = {
  commentsList(state, getters) {
    const { pagination, sorting } = getters
    const start = (3 * pagination.page) - 3
    const finish = 3 * pagination.page

    const list = state.list.slice(start, finish)
    const sortingType = sorting.find(item => item.value)
    const direction = sortingType.directionUp ? [ 1, -1 ] : [ -1, 1 ]
    return toSorting(list, sortingType.name, direction)
  },

  commentById(state) {
    return id => state.list.find(item => item.id === id)
  },

  pagination(state) {
    return state.pagination
  },

  sorting(state) {
    return state.sorting
  },
}

export default getters



