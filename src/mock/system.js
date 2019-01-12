import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    propertyKey: 'portal.ui.' + Mock.Random.lower(Mock.Random.last()) + '.height',
    value: (Mock.Random.integer(10, 100) * 10),
    'unit|1': ['NNN', 'TMS', 'TSC', 'TMN', 'THR', 'TDY', 'WGR', 'WKG', 'WTN', 'QAN', 'QTH', 'QTT', 'QML', 'QHM', 'QBL']
  }))
}

export default {
  getSettingList: config => {
    const { page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      list: pageList
    }
  }
}
