import * as types from './mutation-types'
import {saveToken, saveTimestamp, saveUid, saveUser} from 'common/js/cache'

export const saveLogin = function ({commit}, data) {
  commit(types.SET_TOKEN, saveToken(data.token))
  commit(types.SET_TIMESTAMP, saveTimestamp(data.timestamp))
  commit(types.SET_UID, saveUid(data.uid))
  commit(types.SET_USER, saveUser(data.user))
}

export const clearLogin = function ({commit}) {
  commit(types.SET_TOKEN, '')
  commit(types.SET_TIMESTAMP, '')
  commit(types.SET_UID, '')
  commit(types.SET_USER, {})
}
