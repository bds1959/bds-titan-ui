
// ** Expandable table component
const ExpandableTable = ({ data }) => {  
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Name :</span> {data.customerBusinessName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master City :</span> {data.dcCity}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Pincode :</span> {data.dcCityPincode}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Country :</span> {data.dcCountry}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Customer ID :</span> {data.dcCustomerId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master DC ID :</span> {data.dcId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Address 1 :</span> {data.dcLocationAddress1}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Address 2 :</span> {data.dcLocationAddress2}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Address 3 :</span> {data.dcLocationAddress3}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Name :</span> {data.dcName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Primary Email :</span> {data.dcPrimaryEmail}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Primary Phone :</span> {data.dcPrimaryPhone}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Provider ID :</span> {data.dcProviderId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Provider Name :</span> {data.dcProviderName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Provider Type :</span> {data.dcProviderType}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Provider Name :</span> {data.dcProviderName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master Provider Name :</span> {data.dcProviderName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Master State :</span> {data.dcMastertate}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
