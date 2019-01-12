import request from '@/utils/request'

export function fetchSettingList(query) {
  return request({
    url: '/system/setting/list',
    method: 'get',
    params: query
  })
}
