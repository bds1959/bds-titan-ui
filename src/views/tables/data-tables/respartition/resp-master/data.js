
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> Respartition Master
 Name :</span> {data.resPartitionName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition Master
 ID :</span> {data.customerId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition Master
 Description :</span> {data.resPartitionDescription}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
