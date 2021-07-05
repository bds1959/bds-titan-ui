
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> Application Respartition DC Hall Partition Name :</span> {data.resPartitionName}
      </p>
      <p>
        <span className='font-weight-bold'> Application Respartition DC Hall ID :</span> {data.resPartitionDcHallId}
      </p>
      <p>
        <span className='font-weight-bold'> Application Respartition DC Hall Subpartition Name :</span> {data.appSubPartitionName}
      </p>
      <p>
        <span className='font-weight-bold'> Application Respartition DC Hall Subpartition ID :</span> {data.appSubPartitionId}
      </p>
      <p>
        <span className='font-weight-bold'> Application Respartition APP DC Hall ID :</span> {data.appResPartitionDcHallId}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
