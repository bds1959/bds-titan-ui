import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    id: 1,
    full_name: "01P-234-CDH-BKM-19K",
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    // start_date: 'IBM',
    salary: 'CDH-BKM-19K',
    // age: '61',
    // experience: '1 Year',
    status: 2
  },
  {
    responsive_id: '',
    id: 2,
    avatar: '1.jpg',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'KGP-JHG-LKS',
    age: '61',
    experience: '1 Year',
    status: 2
  },
  {
    responsive_id: '',
    id: 3,
    avatar: '9.jpg',
    full_name: "PLP-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'BKM-19K-9LO',
    age: '66',
    experience: '6 Years',
    status: 5
  },
  {
    responsive_id: '',
    id: 4,
    avatar: '10.jpg',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'CDH-BKM-19K',
    age: '22',
    experience: '2 Years',
    status: 2
  },
  {
    responsive_id: '',
    id: 5,
    avatar: '',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'KJH-BKM-19K',
    age: '33',
    experience: '3 Years',
    status: 2
  },
  {
    responsive_id: '',
    id: 6,
    avatar: '',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'FCV-BKM-19K',
    age: '61',
    experience: '1 Year',
    status: 1
  },
  {
    responsive_id: '',
    id: 7,
    avatar: '',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'ERT-BKM-19K',
    age: '59',
    experience: '9 Years',
    status: 3
  },
  {
    responsive_id: '',
    id: 8,
    avatar: '',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'ERT-BKM-19K',
    age: '59',
    experience: '9 Years',
    status: 3
  },
  {
    responsive_id: '',
    id: 100,
    avatar: '',
    full_name: "01P-234-CDH-BKM-19K",
    post: '',
    email: 'QUAD-278k-KG',
    city: 'Krasnosilka',
    start_date: 'IBM',
    salary: 'ERT-BKM-19K',
    age: '59',
    experience: '9 Years',
    status: 3
  }
]

mock.onGet('/api/datatables/initial-data').reply(config => {
  return [200, data]
})

mock.onGet('/api/datatables/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
