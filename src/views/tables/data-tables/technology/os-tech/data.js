
// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> OS Tech Category Name :</span> {data.iscOsTechName}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Tags :</span> {data.iscOsTechTags}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Tech Name :</span> {data.iscTechCategoryName}
      </p>
      <p>
        <span className='font-weight-bold'> OS Tech Category Description :</span> {data.iscOsTechDescription}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
