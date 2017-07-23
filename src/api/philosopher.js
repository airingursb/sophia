import jsonp from 'common/js/jsonp'
import {HOST} from 'common/js/config'

export function showList(params) {
  const url = HOST + '/philosophers/show_list'
  return jsonp(url, params)
}

export function showDetail(params) {
  const url = HOST + '/philosophers/show_detail'
  return jsonp(url, params)
}

export function search(params) {
  const url = HOST + '/philosophers/search'
  return jsonp(url, params)
}

export function addPhilosopher(params) {
  const url = HOST + '/philosophers/add_philosopher'
  return jsonp(url, params)
}
