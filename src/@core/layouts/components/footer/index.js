//** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25' style={{color: "black" }}>
      Powered By &nbsp;
          <a
            href="https://banyandata.com/"
            target="_blank"
            rel="noopener noreferrer"
            // style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }} >
            style={{color:"black"  }} >
            Banyan Data Services
          </a>
        
      </span>
      {/* <span className='float-md-right d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span> */}
    </p>
  )
}

export default Footer
