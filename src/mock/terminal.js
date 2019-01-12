import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@first',
    mac: /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/,
    ip: '@ip',
    createTime: +Mock.Random.date('T')
  }))
}

export default {
  getList: config => {
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
  },
  getTerminal: (config) => {
    const { id } = param2Obj(config.url)
    for (const terminal of List) {
      if (terminal.id === +id) {
        return terminal
      }
    }
  },
  updateTerminal: () => ({
    data: 'success'
  })
}
