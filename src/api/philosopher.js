import jsonp from 'common/js/jsonp'
import {HOST} from 'common/js/config'

export function addPhilosopher(params) {
  const url = HOST + '/philosophers/add_philosopher'
  return jsonp(url, params)
}
