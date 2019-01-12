import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    username: '@first',
    nickname: '@first',
    status: Mock.Random.boolean(),
    createTime: +Mock.Random.date('T'),
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }))
}

export default {
  getAdminList: config => {
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
  getAdmin: (config) => {
    const { id } = param2Obj(config.url)
    for (const admin of List) {
      if (admin.id === +id) {
        return admin
      }
    }
  },
  updateAdmin: () => ({
    data: 'success'
  })
}
