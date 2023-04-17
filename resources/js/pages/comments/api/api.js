import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost/api/comments',
})

export const commentsApi = {
  get() {
    return instance.get('/')
      .then(res => res.data)
  },

  getOne(id) {
    return instance.get(`/${id}`)
      .then(res => res.data)
  },

  create(comment) {
    return instance.post('/', comment)
  },

  delete(id) {
    return instance.delete(`/${id}`)
  },

  update(id, comment) {
    return instance.patch(`/${id}`, comment)
  },
}
