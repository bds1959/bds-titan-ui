import { Layers, PieChart, Circle, Map } from 'react-feather'
export default [
  {
    header: 'Titan RECS GCP'
  },
  {
    id: 'chartsAndMaps',
    title: 'Titan RECS GCP',
    icon: <Layers />,
    children: [
      {
        id: 'charts',
        title: 'Charts',
        icon: <PieChart />,
        children: [
          {
            id: 'apex',
            title: 'Apex',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'chartJs',
            title: 'ChartJS',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'recharts',
            title: 'Recharts',
            icon: <Circle />,
            navLink: '#'
          }
        ]
      },
      {
        id: 'leafletMaps',
        title: 'Leaflet Maps',
        icon: <Map />,
        navLink: '#'
      }
    ]
  }
]
