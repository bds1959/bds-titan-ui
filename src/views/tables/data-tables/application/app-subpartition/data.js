
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> App SubPartition Name :</span> {data.appSubPartitionName}
      </p>
      <p>
        <span className='font-weight-bold'> App SubPartition ID :</span> {data.appSubPartitionId}
      </p>
      <p>
        <span className='font-weight-bold'> App Partition Name :</span> {data.appPartitionId}
      </p>
      <p>
        <span className='font-weight-bold'> App SubPartition Description :</span> {data.appSubPartitionDescription}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
