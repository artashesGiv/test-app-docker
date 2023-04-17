import Vue from 'vue'
import Vuex, { Store } from 'vuex'

//Main pages
import App from './views/app.vue'
import { commentsModel } from './pages/comments'

Vue.use(Vuex)

export const store = new Store({
  modules: {
    comments: commentsModel.commentModule,
  },
  strict: process.env.NODE_ENV !== 'production',
})

const app = new Vue({
  el: '#app',
  store,
  components: { App },
})
