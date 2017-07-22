import * as types from './mutation-types'
import {saveToken, saveTimestamp, saveUid} from 'common/js/cache'

export const saveLogin = function ({commit}, data) {
  commit(types.SET_TOKEN, saveToken(data.token))
  commit(types.SET_TIMESTAMP, saveTimestamp(data.timestamp))
  commit(types.SET_UID, saveUid(data.uid))
}
