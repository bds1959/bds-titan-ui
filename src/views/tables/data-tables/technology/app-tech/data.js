
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> OS Tech Category Name :</span> {data.iscTechCategoryName}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Tags :</span> {data.iscAppTechTags}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Tech Name :</span> {data.iscAppTechName}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Description :</span> {data.iscAppTechDescription}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
