
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Business Name :</span> {data.customerBusinessName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Customer ID :</span> {data.customerId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall ID :</span> {data.dcHallId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Name :</span> {data.dcHallName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall ID :</span> {data.resPartitionDcHallId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Partition Name :</span> {data.resPartitionName}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
