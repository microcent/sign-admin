import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/terminal/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/terminal/detail',
    method: 'get',
    params: { id }
  })
}

export function updateTerminal(data) {
  return request({
    url: '/terminal/update',
    method: 'post',
    data
  })
}
