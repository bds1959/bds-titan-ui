
// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>Tech Category Name :</span> {data.iscTechCategoryName}
      </p>
      <p>
        <span className='font-weight-bold'>Tech Category Tags :</span> {data.iscTechCategoryTags}
      </p>
      <p>
        <span className='font-weight-bold'>Tech Category Description :</span> {data.iscTechCategoryDescription}&nbsp;
        
      </p>
    </div>
  )
  
}

export default ExpandableTable
