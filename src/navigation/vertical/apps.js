import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, 
  Circle, ShoppingCart, User, Layers, Database, Cpu, Command,
  Film, Slack, Sliders, Codepen, Codesandbox, Tag, CloudDrizzle,
  CloudRain, Server, BarChart, BarChart2, Copy, HardDrive
} from 'react-feather'


export default [
  {
    header: 'Table Level Screens'
  },
      {
        id: 'invoiceApp',
        title: 'Enviornment Services',
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
                // icon: <Command />,
                navLink: '/datatables/tech-master' 
              },
              {
                id: 'osTech',
                title: 'OS Tech Category Master',
                // icon: <Command />,
                navLink: '/datatables/os-tech'
              },
              {
                id: 'dataTech',
                title: 'Data Tech Category Master',
                // icon: <Command />,
                navLink: '/datatables/data-tech'
              },
              {
                id: 'applicationTech',
                title: 'Application Category Master',
                // icon: <Command />,
                navLink: '/datatables/app-tech'
              }
            ]
          },

          {
            id: 'customer',
            title: 'Customer',
            icon: <Slack />,
            children: [
              {
                id: 'cusMaster',
                title: 'Customer Master',
                // icon: <Slack />,
                navLink: '/datatables/customer-master'
              },
              {
                id: 'cusContact',
                title: 'Customer Contact',
                // icon: <Slack />,
                navLink: '/datatables/customer-contact'
              },
              {
                id: 'cusLocation',
                title: 'Customer Location',
                // icon: <Slack />,
                navLink: '/datatables/customer-location'
              },
              
              {
                id: 'bussDetails',
                title: 'Business Group Details',
                // icon: <Slack />,
                navLink: '/datatables/business-group'
              },
              {
                id: 'funDetails',
                title: 'Functional Group Details',
                // icon: <Slack />,
                navLink: '/datatables/functional-group'
              }
            ]
          },
          // Application Menu
          {
            id: 'applicationEnvironment',
            title: 'Application', 
            icon: <Film />,
            children: [
              {
                id: 'cusDetails',
                title: 'Application Details',
                navLink: '/datatables/application-details'
              },
              {
                id: 'appEnvironment',
                title: 'Application Environment',
                // icon: <Film />,
                navLink: '/datatables/app-master'
              },
              {
                id: 'appPartition',
                title: 'Application Partition',
                // icon: <Film />,
                navLink: '/datatables/app-partition'
              },
              {
                id: 'appSubPartition',
                title: 'Application  Sub Partition',
                // icon: <Film />,
                navLink: '/datatables/app-subpartition'
              }
            ]
          }
          // Customer Menu
          
          //  Respartition Menu
          // {
          //   id: 'respEnvironment',
          //   title: 'Respartition ENV',
          //   icon: <HardDrive />,
          //   children: [
          //     {
          //       id: 'resMaster',
          //       title: 'Respartition Master',
          //       // icon: <Slack />,
          //       navLink: '/datatables/resp-master'
          //     },
          //     {
          //       id: 'resProvider',
          //       title: 'Respartition DC Providers',
          //       // icon: <Slack />,
          //       navLink: '/datatables/dc-providers'
          //     },
          //     {
          //       id: 'resDcMaster',
          //       title: 'Respartition DC Master',
          //       // icon: <Slack />,
          //       navLink: '/datatables/dc-master'
          //     },
          //     {
          //       id: 'DCHall',
          //       title: 'DC Hall',
          //       // icon: <Slack />,
          //       navLink: '/datatables/dc-hall' 
          //     },
          //     {
          //       id: 'resHall',
          //       title: 'Respartition DC Hall',
          //       // icon: <Slack />,
          //       navLink: '/datatables/resp-dc-hall'
          //     },
          //     {
          //       id: 'resApplication',
          //       title: 'App Respartition DC Hall',
          //       // icon: <Slack />,
          //       navLink: '/datatables/app-resp-dc-hall'
          //     }
          //   ]
          // },
              // DC Asset Menu
          // {
          //   id: 'assetCatalog',
          //   title: 'DC Asset Catalog',
          //   icon: <Sliders />,
          //   children: [
          //     {
          //       id: 'dcSupplier',
          //       title: 'DC Asset Suppliers',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/suppliers'
          //     },
          //     {
          //       id: 'dcMaster',
          //       title: 'DC Asset Type Master',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/type-master'
          //     },
          //     {
          //       id: 'dcVendor',
          //       title: 'DC Asset Vendors',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/vendors'
          //     },
          //     {
          //       id: 'dcModel',
          //       title: 'DC Asset Model Master',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/model-master'
          //     },
          //     {
          //       id: 'dcAsset',
          //       title: 'DC Asset',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/asset'
          //     },
          //     {
          //       id: 'dcAllocation',
          //       title: 'DC Asset Allocation',
          //       // icon: <Sliders />,
          //       navLink: '/datatables/allocation'
          //     }
          //   ]
          // },
      //     {
      //       id: 'cloudDetail',
      //       title: 'Cloud Details',
      //       icon: <Codepen />,
      //       children: [
      //         {
      //           id: 'cloudMaster',
      //           title: 'Cloud Master Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'cloudRegion',
      //           title: 'Private Cloud Region Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'cloudZone',
      //           title: 'Private Cloud Zone Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'regDetail',
      //           title: 'Region Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'adDetail',
      //           title: 'AD Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'fdDetail',
      //           title: 'FD Details',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'resAD',
      //           title: 'Respartition AD',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'appResp',
      //           title: 'Application Respartition',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'cloudResp',
      //           title: 'Private Cloud Respartition',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'privateCloud',
      //           title: 'Private Cloud Applications',
      //           // icon: <Codepen />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'gCloud',
      //       title: 'Google Cloud',
      //       icon: <Codesandbox />,
      //       children: [
      //         {
      //           id: 'gcpRegion',
      //           title: 'GCP Region Details',
      //           // icon: <Codesandbox />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'gcpRes',
      //           title: 'GCP Respartition AZ',
      //           // icon: <Codesandbox />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'gcpApp',
      //           title: 'GCP App Respartition AZ',
      //           // icon: <Codesandbox />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'gcpDetails',
      //           title: 'GCP AZ Details',
      //           // icon: <Codesandbox />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'tag',
      //       title: 'Tags',
      //       icon: <Tag />,
      //       children: [
      //         {
      //           id: 'tagDetail',
      //           title: 'Tag Details',
      //           // icon: <Tag />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'tagCategory',
      //           title: 'Tag Category Details',
      //           // icon: <Tag />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'cloudService',
      //       title: 'Cloud Serivces',
      //       icon: <CloudDrizzle />,
      //       children: [
      //         {
      //           id: 'cloudDetail',
      //           title: 'Cloud Service Details',
      //           // icon: <CloudDrizzle />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'onpDetail',
      //           title: 'ONP Service Details',
      //           // icon: <CloudDrizzle />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'cloudResService',
      //       title: 'Cloud Res Services',
      //       icon: <CloudRain />,
      //       children: [
      //         {
      //           id: 'cloudResMaster',
      //           title: 'Cloud Res Master Details',
      //           // icon: <CloudRain />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'custCloud',
      //           title: 'Cust Cloud Service Details',
      //           // icon: <CloudRain />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'ociService',
      //           title: 'OCI Service App Resources',
      //           // icon: <CloudRain />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'cloudSerApplication',
      //           title: 'Private Cloud Service App',
      //           // icon: <CloudRain />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'gcpSerAppication',
      //           title: 'GCP Service App Respartition',
      //           // icon: <CloudRain />,
      //           navLink: '#'
      //         }
      //       ]
      //     }
      //   ]
      // },
    
      // {
      //   id: 'computingCatalogService',
      //   title: 'Computing Services',
      //   icon: <Cpu />,
      //   children: [
      //     {
      //       id: 'physicalServer',
      //       title: 'Physical Server',
      //       icon: <Server />,
      //       navLink: '/datatables/basic'
      //     },
      //     {
      //       id: 'detail',
      //       title: 'Details',
      //       icon: <BarChart />,
      //       children: [
      //         {
      //           id: 'cloudDetail',
      //           title: 'Cloud Service Details',
      //           icon: <BarChart />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'onpDetail',
      //           title: 'ONP Service Details',
      //           icon: <BarChart />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'wishList',
      //       title: 'Wish List',
      //       icon: <BarChart2 />,
      //       children: [
      //         {
      //           id: 'cloudDetail',
      //           title: 'Cloud Service Details',
      //           icon: <BarChart2 />,
      //           navLink: '#'
      //         },
      //         {
      //           id: 'onpDetail',
      //           title: 'ONP Service Details',
      //           icon: <BarChart2 />,
      //           navLink: '#'
      //         }
      //       ]
      //     },
          // {
          //   id: 'checkout',
          //   title: 'Checkout',
          //   icon: <Copy />,
          //   children: [
          //     {
          //       id: 'cloudDetail',
          //       title: 'Cloud Service Details',
          //       icon: <Copy />,
          //       navLink: '#'
          //     },
          //     {
          //       id: 'onpDetail',
          //       title: 'ONP Service Details',
          //       icon: <Copy />,
          //       navLink: '#'
          //     }
          //   ]
          // }
        ]
      } 
]
// export default [
//   {
//     header: 'Apps & Pages'
//   },
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
//             navLink: '#'
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
