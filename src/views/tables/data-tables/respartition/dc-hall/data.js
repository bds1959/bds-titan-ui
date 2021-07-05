
// ** Expandable table component
const ExpandableTable = ({ data }) => { 
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall City :</span> {data.dcHallCity}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Pincode :</span> {data.dcHallCityPincode}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Tech Country :</span> {data.dcHallCountry}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Country Code :</span> {data.dcHallCountryCode}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall ID :</span> {data.dcHallId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Address 1 :</span> {data.dcHallLocationAddress1}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Address 2 :</span> {data.dcHallLocationAddress2}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Address 3 :</span> {data.dcHallLocationAddress3}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Name :</span> {data.dcHallName}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Primary Email :</span> {data.dcHallPrimaryEmail}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Primary Phone :</span> {data.dcHallPrimaryPhone}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Secondary Email :</span> {data.dcHallSecondaryEmail}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall Secondary Phone :</span> {data.dcHallSecondaryPhone}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Hall State :</span> {data.dcHallState}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC ID :</span> {data.dcId}
      </p>
      <p>
        <span className='font-weight-bold'> Respartition DC Name :</span> {data.dcName}
      </p>
    </div>
  ) 
  
}

export default ExpandableTable
