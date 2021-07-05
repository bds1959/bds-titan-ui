import mock from '../mock'

export const searchArr = [
  {
    groupTitle: 'Technology',
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: 'techMaster',
        isBookmarked: false,
        title: 'Tech Category Master',
        icon: 'Grid',
        link: '/datatables/tech-master'
      },
      {
        id: 2,
        target: 'osTech',
        isBookmarked: false,
        title: 'OS Tech Category Master',
        icon: 'Grid',
        link: '/datatables/os-tech'
      },
      {
        id: 2,
        target: 'dataTech',
        isBookmarked: false,
        title: 'Data Tech Category Master',
        icon: 'Grid',
        link: '/datatables/data-tech'
      },
      {
        id: 2,
        target: 'applicationTech',
        isBookmarked: false,
        title: 'Application Category Master',
        icon: 'Grid',
        link: '/datatables/app-tech'
      }
    ]
  },
  
  {
    groupTitle: 'customer',
    searchLimit: 6,
    data: [
      {
        id: 1,
        target: 'cusMaster',
        isBookmarked: false,
        title: 'Customer Master',
        icon: 'Grid',
        link: '/datatables/customer-master'
      },
      {
        id: 2,
        target: 'cusContact',
        isBookmarked: false,
        title: 'Customer Contact',
        icon: 'Grid',
        link: '/datatables/customer-contact'
      },
      {
        id: 2,
        target: 'cusLocation',
        isBookmarked: false,
        title: 'Customer Location',
        icon: 'Grid',
        link: '/datatables/customer-location'
      },
      {
        id: 2,
        target: 'bussDetails',
        isBookmarked: false,
        title: 'Business Group Details',
        icon: 'Grid',
        link: '/datatables/business-group'
      },
      {
        id: 2,
        target: 'funDetail',
        isBookmarked: false,
        title: 'Functional Group Details',
        icon: 'Grid',
        link: '/datatables/functional-group'
      }
    ]
  },
  
  {
    groupTitle: 'Application',
    searchLimit: 6,
    data: [
      {
        id: 1,
        target: 'cusMaster',
        isBookmarked: false,
        title: 'Application Details',
        icon: 'Grid',
        link: '/datatables/application-details'
      },
      {
        id: 2,
        target: 'cusContact',
        isBookmarked: false,
        title: 'Application Environment',
        icon: 'Grid',
        link: '/datatables/app-master'
      },
      {
        id: 2,
        target: 'cusLocation',
        isBookmarked: false,
        title: 'Application Partition',
        icon: 'Grid',
        link: '/datatables/app-partition'
      },
      {
        id: 2,
        target: 'bussDetails',
        isBookmarked: false,
        title: 'Application  Sub Partition',
        icon: 'Grid',
        link: '/datatables/app-subpartition'
      }
    ]
  }
]

// GET Search Data
mock.onGet('/api/main-search/data').reply(config => {
  return [200, { searchArr }]
})

// GET Search Data & Bookmarks
mock.onGet('/api/bookmarks/data').reply(config => {
  const bookmarks = searchArr[0].data.filter(item => item.isBookmarked)
  const suggestions = searchArr[0].data
  return [200, { suggestions, bookmarks }]
})

// POST Update isBookmarked
mock.onPost('/api/bookmarks/update').reply(config => {
  const { id } = JSON.parse(config.data)

  const obj = searchArr[0].data.find(item => item.id === id)

  Object.assign(obj, { isBookmarked: !obj.isBookmarked })

  return [200]
})
