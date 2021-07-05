import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, 
  Circle, ShoppingCart, User, Layers, Database, Cpu, Command,
  Film, Slack, Sliders, Codepen, Codesandbox, Tag, CloudDrizzle,
  CloudRain, Server, BarChart, BarChart2, Copy
} from 'react-feather'


export default [
  {
    id: 'apps',
    title: 'Table Level Screens',
    icon: <Layers />,
    children: [
      // {
      //   id: 'email',
      //   title: 'Email',
      //   icon: <Mail />,
      //   navLink: '/apps/email'
      // },
      // {
      //   id: 'chat',
      //   title: 'Chat',
      //   icon: <MessageSquare />,
      //   navLink: '/apps/chat'
      // },
      // {
      //   id: 'todo',
      //   title: 'Todo',
      //   icon: <CheckSquare />,
      //   navLink: '/apps/todo'
      // },
      // {
      //   id: 'calendar',
      //   title: 'Calendar',
      //   icon: <Calendar />,
      //   navLink: '/apps/calendar'
      // },
      {
        id: 'invoiceApp',
        title: 'Enviornment Catalog Services',
        icon: <Database />,
        children: [
          {
            id: 'technology',
            title: 'Technology',
            icon: <Command />,
            children: [
              {
                id: 'techMaster',
                title: 'Tech Category Master',
                icon: <Command />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'osTech',
                title: 'OS Tech Category Master',
                icon: <Command />,
                navLink: '#'
              },
              {
                id: 'dataTech',
                title: 'Data Tech Category Master',
                icon: <Command />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'applicationTech',
                title: 'Application Tech Category Master',
                icon: <Command />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'applicationEnvironment',
            title: 'Application Environment',
            icon: <Film />,
            children: [
              {
                id: 'appEnvironment',
                title: 'Application Environment',
                icon: <Film />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'appPartition',
                title: 'Application Partition',
                icon: <Film />,
                navLink: '#'
              },
              {
                id: 'appSubPartition',
                title: 'Application Sub Partition',
                icon: <Film />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'respEnvironment',
            title: 'Respartition Environment',
            icon: <Slack />,
            children: [
              {
                id: 'resMaster',
                title: 'Respartition Master',
                icon: <Slack />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'resProvider',
                title: 'Respartition DC Providers',
                icon: <Slack />,
                navLink: '#'
              },
              {
                id: 'resDcMaster',
                title: 'Respartition DC Master',
                icon: <Slack />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'resHall',
                title: 'Respartition DC Hall',
                icon: <Slack />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'resApplication',
                title: 'Application Respartition DC Hall',
                icon: <Slack />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'assetCatalog',
            title: 'Asset Catalog',
            icon: <Sliders />,
            children: [
              {
                id: 'dcSupplier',
                title: 'DC Asset Suppliers',
                icon: <Sliders />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'dcMaster',
                title: 'DC Asset Type Master',
                icon: <Sliders />,
                navLink: '#'
              },
              {
                id: 'dcVendor',
                title: 'DC Asset Vendors',
                icon: <Sliders />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'dcModel',
                title: 'DC Asset Model Master',
                icon: <Sliders />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'dcAsset',
                title: 'DC Asset',
                icon: <Sliders />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'dcAllocation',
                title: 'DC Asset Allocation',
                icon: <Sliders />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'cloudDetail',
            title: 'Cloud Details',
            icon: <Codepen />,
            children: [
              {
                id: 'cloudMaster',
                title: 'Cloud Master Details',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'cloudRegion',
                title: 'Private Cloud Region Details',
                icon: <Codepen />,
                navLink: '#'
              },
              {
                id: 'cloudZone',
                title: 'Private Cloud Zone Details',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'regDetail',
                title: 'Region Details',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'adDetail',
                title: 'AD Details',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'fdDetail',
                title: 'FD Details',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'resAD',
                title: 'Respartition AD',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'appResp',
                title: 'Application Respartition',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'cloudResp',
                title: 'Private Cloud Respartition',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'privateCloud',
                title: 'Private Cloud Applications',
                icon: <Codepen />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'gCloud',
            title: 'Google Cloud',
            icon: <Codesandbox />,
            children: [
              {
                id: 'gcpRegion',
                title: 'GCP Region Details',
                icon: <Codesandbox />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'gcpRes',
                title: 'GCP Respartition AZ',
                icon: <Codesandbox />,
                navLink: '#'
              },
              {
                id: 'gcpApp',
                title: 'GCP App Respartition AZ',
                icon: <Codesandbox />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'gcpDetails',
                title: 'GCP AZ Details',
                icon: <Codesandbox />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          },
          {
            id: 'tag',
            title: 'Tags',
            icon: <Tag />,
            children: [
              {
                id: 'tagDetail',
                title: 'Tag Details',
                icon: <Tag />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'tagCategory',
                title: 'Tag Category Details',
                icon: <Tag />,
                navLink: '#'
              }
            ]
          },
          {
            id: 'cloudService',
            title: 'Cloud Serivces',
            icon: <CloudDrizzle />,
            children: [
              {
                id: 'cloudDetail',
                title: 'Cloud Service Details',
                icon: <CloudDrizzle />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'onpDetail',
                title: 'ONP Service Details',
                icon: <CloudDrizzle />,
                navLink: '#'
              }
            ]
          },
          {
            id: 'cloudResService',
            title: 'Cloud Resource Services',
            icon: <CloudRain />,
            children: [
              {
                id: 'cloudResMaster',
                title: 'Cloud Resource Master Details',
                icon: <CloudRain />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'custCloud',
                title: 'Cust Cloud Service Details',
                icon: <CloudRain />,
                navLink: '#'
              },
              {
                id: 'ociService',
                title: 'OCI Service App Resources',
                icon: <CloudRain />,
                navLink: '/apps/ecommerce/wishlist'
              },
              {
                id: 'cloudSerApplication',
                title: 'Private Cloud Service Application',
                icon: <CloudRain />,
                navLink: '/apps/ecommerce/checkout'
              },
              {
                id: 'gcpSerAppication',
                title: 'GCP Service App Respartition',
                icon: <CloudRain />,
                navLink: '/apps/ecommerce/checkout'
              }
            ]
          }
        ]
      },
      {
        id: 'computingCatalogService',
        title: 'Computing Catalog Services',
        icon: <Cpu />,
        children: [
          {
            id: 'physicalServer',
            title: 'Physical Server',
            icon: <Server />,
            children: [
              {
                id: 'serverDetails',
                title: 'Physical Server Details',
                icon: <Server />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'serverService',
                title: 'Physical Server Service',
                icon: <Server />,
                navLink: '#'
              }
            ]
          },
          {
            id: 'detail',
            title: 'Details',
            icon: <BarChart />,
            children: [
              {
                id: 'cloudDetail',
                title: 'Cloud Service Details',
                icon: <BarChart />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'onpDetail',
                title: 'ONP Service Details',
                icon: <BarChart />,
                navLink: '#'
              }
            ]
          },
          {
            id: 'wishList',
            title: 'Wish List',
            icon: <BarChart2 />,
            children: [
              {
                id: 'cloudDetail',
                title: 'Cloud Service Details',
                icon: <BarChart2 />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'onpDetail',
                title: 'ONP Service Details',
                icon: <BarChart2 />,
                navLink: '#'
              }
            ]
          },
          {
            id: 'checkout',
            title: 'Checkout',
            icon: <Copy />,
            children: [
              {
                id: 'cloudDetail',
                title: 'Cloud Service Details',
                icon: <Copy />,
                navLink: '/apps/ecommerce/shop'
              },
              {
                id: 'onpDetail',
                title: 'ONP Service Details',
                icon: <Copy />,
                navLink: '#'
              }
            ]
          }
        ]
      }
    ]
  }
]
// export default [
//   {
//     id: 'apps',
//     title: 'Apps',
//     icon: <Box />,
//     children: [
//       {
//         id: 'email',
//         title: 'Email',
//         icon: <Mail />,
//         navLink: '/apps/email'
//       },
//       {
//         id: 'chat',
//         title: 'Chat',
//         icon: <MessageSquare />,
//         navLink: '/apps/chat'
//       },
//       {
//         id: 'todo',
//         title: 'Todo',
//         icon: <CheckSquare />,
//         navLink: '/apps/todo'
//       },
//       {
//         id: 'calendar',
//         title: 'Calendar',
//         icon: <Calendar />,
//         navLink: '/apps/calendar'
//       },
//       {
//         id: 'invoiceApp',
//         title: 'Invoice',
//         icon: <FileText />,
//         children: [
//           {
//             id: 'invoiceList',
//             title: 'List',
//             icon: <Circle />,
//             navLink: '/apps/invoice/list'
//           },
//           {
//             id: 'invoicePreview',
//             title: 'Preview',
//             icon: <Circle />,
//             navLink: '/apps/invoice/preview'
//           },
//           {
//             id: 'invoiceEdit',
//             title: 'Edit',
//             icon: <Circle />,
//             navLink: '/apps/invoice/edit'
//           },
//           {
//             id: 'invoiceAdd',
//             title: 'Add',
//             icon: <Circle />,
//             navLink: '/apps/invoice/add'
//           }
//         ]
//       },
//       {
//         id: 'eCommerce',
//         title: 'eCommerce',
//         icon: <ShoppingCart />,
//         children: [
//           {
//             id: 'shop',
//             title: 'Shop',
//             icon: <Circle />,
//             navLink: '/apps/ecommerce/shop'
//           },
//           {
//             id: 'detail',
//             title: 'Details',
//             icon: <Circle />,
//             navLink: '#'
//           },
//           {
//             id: 'wishList',
//             title: 'Wish List',
//             icon: <Circle />,
//             navLink: '/apps/ecommerce/wishlist'
//           },
//           {
//             id: 'checkout',
//             title: 'Checkout',
//             icon: <Circle />,
//             navLink: '/apps/ecommerce/checkout'
//           }
//         ]
//       },
//       {
//         id: 'users',
//         title: 'User',
//         icon: <User />,
//         children: [
//           {
//             id: 'list',
//             title: 'List',
//             icon: <Circle />,
//             navLink: '/apps/user/list'
//           },
//           {
//             id: 'view',
//             title: 'View',
//             icon: <Circle />,
//             navLink: '/apps/user/view'
//           },
//           {
//             id: 'edit',
//             title: 'Edit',
//             icon: <Circle />,
//             navLink: '/apps/user/edit'
//           }
//         ]
//       }
//     ]
//   }
// ]
