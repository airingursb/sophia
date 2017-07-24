import jsonp from 'common/js/jsonp'
import { HOST } from 'common/js/config'

export function showList (params) {
  const url = HOST + '/philosophers/show_list'
  return jsonp(url, params)
}

export function showTags (params) {
  const url = HOST + '/philosophers/show_tags'
  return jsonp(url, params)
}

export function showDetail (params) {
  const url = HOST + '/philosophers/show_detail'
  return jsonp(url, params)
}

export function search (params) {
  const url = HOST + '/philosophers/search'
  return jsonp(url, params)
}

export function addPhilosopher (params) {
  const url = HOST + '/philosophers/add_philosopher'
  return jsonp(url, params)
}

export function addIdea (params) {
  const url = HOST + '/philosophers/add_idea'
  return jsonp(url, params)
}

export function addWorks (params) {
  const url = HOST + '/philosophers/add_works'
  return jsonp(url, params)
}

export function addPaper (params) {
  const url = HOST + '/philosophers/add_paper'
  return jsonp(url, params)
}

export function addData (params) {
  const url = HOST + '/philosophers/add_data'
  return jsonp(url, params)
}

export function addComment (params) {
  const url = HOST + '/philosophers/add_comment'
  return jsonp(url, params)
}

export function addTag (params) {
  const url = HOST + '/philosophers/add_tag'
  return jsonp(url, params)
}
