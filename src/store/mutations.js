import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token
  },
  [types.SET_TIMESTAMP](state, timestamp) {
    state.timestamp = timestamp
  },
  [types.SET_UID](state, uid) {
    state.uid = uid
  },
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_PHILOSOPHERLIST](state, philosopherList) {
    state.philosopherList = philosopherList
  },
  [types.SET_PHILOSOPHER](state, philosopher) {
    state.philosopher = philosopher
  },
  [types.SET_LISTREFRESH](state, listRefresh) {
    state.listRefresh = listRefresh
  }
}

export default mutations
