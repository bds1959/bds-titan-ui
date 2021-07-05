
import { lazy } from 'react'

const TablesRoutes = [
  //                       Technology Table
  {
    path: '/datatables/os-tech',
    component: lazy(() => import('../../views/tables/data-tables/technology/os-tech'))
  },
  {
    path: '/datatables/tech-master',
    component: lazy(() => import('../../views/tables/data-tables/technology/tech-master'))
  },
  {
    path: '/datatables/data-tech',
    component: lazy(() => import('../../views/tables/data-tables/technology/data-tech'))
  },
  {
    path: '/datatables/app-tech',
    component: lazy(() => import('../../views/tables/data-tables/technology/app-tech'))
  },
  //                         Application Partition Table
  {
    path: '/datatables/application-details',
    component: lazy(() => import('../../views/tables/data-tables/application/application-details'))
  },
  {
    path: '/datatables/app-master',
    component: lazy(() => import('../../views/tables/data-tables/application/app-master'))
  },
  {
    path: '/datatables/app-partition',
    component: lazy(() => import('../../views/tables/data-tables/application/app-partition'))
  },
  {
    path: '/datatables/app-subpartition',
    component: lazy(() => import('../../views/tables/data-tables/application/app-subpartition'))
  },
  //                          Customer Table
  {
    path: '/datatables/customer-master',
    component: lazy(() => import('../../views/tables/data-tables/customer/customer-master'))
  },
  {
    path: '/datatables/customer-contact',
    component: lazy(() => import('../../views/tables/data-tables/customer/customer-contact'))
  },
  {
    path: '/datatables/customer-location',
    component: lazy(() => import('../../views/tables/data-tables/customer/customer-location'))
  },
 
  {
    path: '/datatables/business-group',
    component: lazy(() => import('../../views/tables/data-tables/customer/business-group'))
  },
  {
    path: '/datatables/functional-group',
    component: lazy(() => import('../../views/tables/data-tables/customer/functional-group'))
  },
  //                          Respartition Menu Table
  {
    path: '/datatables/resp-master',
    component: lazy(() => import('../../views/tables/data-tables/respartition/resp-master'))
  },
  {
    path: '/datatables/dc-providers',
    component: lazy(() => import('../../views/tables/data-tables/respartition/dc-providers'))
  },
  {
    path: '/datatables/dc-master',
    component: lazy(() => import('../../views/tables/data-tables/respartition/dc-master'))
  },
  {
    path: '/datatables/dc-hall',
    component: lazy(() => import('../../views/tables/data-tables/respartition/dc-hall'))
  },
  {
    path: '/datatables/resp-dc-hall',
    component: lazy(() => import('../../views/tables/data-tables/respartition/resp-dc-hall'))
  },
  {
    path: '/datatables/app-resp-dc-hall',
    component: lazy(() => import('../../views/tables/data-tables/respartition/app-resp-dc-hall'))
  },
  //                          DC Asset Table
  {
    path: '/datatables/suppliers',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/suppliers'))
  },
  {
    path: '/datatables/type-master',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/type-master'))
  },
  {
    path: '/datatables/vendors',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/vendors'))
  },
  {
    path: '/datatables/model-master',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/model-master'))
  },
  {
    path: '/datatables/asset',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/asset'))
  },
  {
    path: '/datatables/allocation',
    component: lazy(() => import('../../views/tables/data-tables/DC_asset/allocation'))
  },
  //                          Advance Table
  {
    path: '/datatables/advance',
    component: lazy(() => import('../../views/tables/data-tables/advance'))
  }
]

export default TablesRoutes
