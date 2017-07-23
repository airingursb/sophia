import jsonp from 'common/js/jsonp'
import {HOST} from 'common/js/config'

export function login(params) {
  const url = HOST + '/users/login'
  return jsonp(url, params)
}

export function register(params) {
  const url = HOST + '/users/register'
  return jsonp(url, params)
}

export function code(params) {
  const url = HOST + '/util/code'
  return jsonp(url, params)
}

export function updateFace(params) {
  const url = HOST + '/users/update_face'
  return jsonp(url, params)
}

