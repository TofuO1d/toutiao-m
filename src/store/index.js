import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)// 存储当前登录用户的信息（包含token等数据）
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为防止刷新后token丢失，我们需要把数据备份到本地存储
      setItem(TOKEN_KEY, data)
      // 为什么用JSON.stringify(state.user)，因为默认是作为一个对象存储，而我们需要的是仅仅一个字符串
    }
  },
  actions: {
  },
  modules: {
  }
})
