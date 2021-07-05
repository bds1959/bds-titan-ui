
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> App Enviornment Name :</span> {data.appEnvName}
      </p>
      <p>
        <span className='font-weight-bold'> App Partition Name :</span> {data.appPartitionName}
      </p>
      <p>
        <span className='font-weight-bold'> App Partition ID :</span> {data.appPartitionId}
      </p>
      <p>
        <span className='font-weight-bold'> Application ID :</span> {data.applicationId}
      </p>
      <p>
        <span className='font-weight-bold'> App Partition Description :</span> {data.appPartitionDescription}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
