import request from '@/utils/request'

export function fetchAdminList(query) {
  return request({
    url: '/user/admin/list',
    method: 'get',
    params: query
  })
}

export function fetchAdmin(id) {
  return request({
    url: '/user/admin/detail',
    method: 'get',
    params: { id }
  })
}

export function updateAdmin(data) {
  return request({
    url: '/user/admin/update',
    method: 'post',
    data
  })
}
