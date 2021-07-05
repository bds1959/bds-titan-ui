// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Database, X, Cpu, Layers, Command } from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label
} from 'reactstrap'

import axios from 'axios'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UpdateModal = ({ open, handleUpdateModal, value}) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())
  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  const [datatwo, setDataTwo] = useState([])
  const [data, setData] = useState([])
  const [datathree, setDataThree] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [city, setcity] = useState("")
  const [pincode, setpincode] = useState("")
  const [customerId, setcustomerId] = useState("")
  const [id, setid] = useState("")
  const [locationaddress1, setlocationAddress1] = useState("")
  const [locationaddress2, setlocationAddress2] = useState("")
  const [locationaddress3, setlocationAddress3] = useState("")
  const [namedc, setnameDc] = useState("")
  const [primaryemail, setprimaryEmail] = useState("")
  const [primaryphone, setprimaryPhone] = useState("")
  const [providerid, setproviderId] = useState("")
  const [providername, setproviderName] = useState("")
  const [providertype, setproviderType] = useState("")
  const [secondaryemail, setsecondaryEmail] = useState("")
  const [secondaryphone, setsecondaryPhone] = useState("")
  const [state, setState] = useState("")
  const [pk, setPk] = useState("")

 
   //-------------Dropdown selection handler----------------
     const [customerbusinessname, setCustomerBusinessName] = useState('')
     const [customerbusinessid, setCustomerBusinessId] = useState('')

     const index = datatwo.findIndex(obj => obj.customerBusinessName === customerbusinessname)
     console.log("Index value Business= ", index)// Printing the index value of selected option
     console.log("Business Id = ", customerbusinessid)
     useEffect(() => {
      try { //This try is solve the Type undifined error
        setCustomerBusinessId(datatwo[index].customerId)
      } catch (error) {
        console.log('Spec', error)
      }
    })

     const changeSelectOptionHandlerCustomerBusinessName = (event) => {
      setCustomerBusinessName(event.target.value)
     }
    //-------------Dropdown selection handler End----------------
  
    //-------------Country Dropdown selection handler----------------
    const [country, setCountry] = useState('')
    const [states, setStates] = useState([])

    const index2 = datathree.findIndex(obj => obj.country_name === country)
    console.log("Index value country= ", index2)// Printing the index value of selected option
    
    useEffect(() => {
      try { //This try is solve the Type undifined error
        setStates(datathree[index2].states)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    const changeSelectOptionHandlerCountry = (event) => {
      setCountry(event.target.value)
    }
    //-------------Dropdown selection handler End----------------

    //-------------Country Dropdown selection handler----------------
  
    const changeSelectOptionHandlerState = (event) => {
      setState(event.target.value)
    }
  
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
   })
  useEffect(() => {
    setCountry(value.dcCountry)
    setState(value.dcState)
    setCustomerBusinessName(value.customerBusinessName)
    setcity(value.dcCity)
    setpincode(value.dcCityPincode)
    setlocationAddress1(value.dcLocationAddress1)
    setlocationAddress2(value.dcLocationAddress2)
    setlocationAddress3(value.dcLocationAddress3)
    setprimaryEmail(value.dcPrimaryEmail)
    setprimaryPhone(value.dcPrimaryPhone)
    setproviderId(value.dcProviderId)
    setproviderName(value.dcProviderName)
    setproviderType(value.dcProviderType)
    setsecondaryEmail(value.dcSecondaryEmail)
    setsecondaryPhone(value.dcSecondaryPhone)
    setState(value.customerBusinessName)
    setPk(value.dcId)
    setnameDc(value.dcName)
 }, [value])


  const handlePost = (evt) => {
    axios.put("http://172.16.1.240:32454/api/v1/encs-dc-master", {
      dcId:pk,
      customerBusinessName : customerbusinessname,
      dcCity : city,
      dcCityPincode : pincode,
      dcCountry : country,
      dcCustomerId : customerbusinessid,
      dcLocationAddress1 : locationaddress1,
      dcLocationAddress2 :locationaddress2,
      dcLocationAddress3 : locationaddress3,
      dcName : namedc,
      dcPrimaryEmail : primaryemail,
      dcPrimaryPhone : primaryphone,
      dcProviderId : providerid,
      dcProviderName : providername,
      dcProviderType : providertype,
      dcSecondaryEmail :secondaryemail,
      dcSecondaryPhone : secondaryphone,
      dcState :state 
      },
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": `${token}`
        }
      }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!")
        // setisSucess(true)
        alert("Record has been updated")
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error)
      })
  }
//-------------------------Update Method End---------------------------------------------
  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-dcProviderNames`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from dc name!")
      // const options = data.map(d => ({
      //   value : d.id,
      //   label : d.name
      // }))
     //  setIsLoaded(true)
      setData(response.data.data)
      console.log(response.data.data)
      })
      .catch((error) => {
        console.error(error)
   })
  }, [])

 
  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-customer`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from list!")
      setDataTwo(response.data.data)
      console.log(response.data.data)
      })
      .catch((error) => {
        console.error(error)
   })
  }, [])

    //-----------------------------------Fetching Dropdown Api Country---------------------------------------------------------------
  
    useEffect(() => { 
      // if (isLoaded === false) {
        axios.get(`http://172.16.1.240:32454/api/v1/get-countries`
        
      )
      .then((response) => {
        // Handle success.
        console.log("Connection established.Data is fetching from list!")
        
        setDataThree(response.data.data)
        console.log(response.data.data)
        })
        .catch((error) => {
          console.error(error)
     })
    }, [])
return (
    <Modal
      isOpen={open}
      toggle={handleUpdateModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleUpdateModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>Update Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      
      <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Dc Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName'
            value={namedc}
            onChange={(e) => setnameDc(e.target.value)} />
          </InputGroup>
        </FormGroup>
       
        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Customer Business Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' 
          value={customerbusinessname}
          onChange={changeSelectOptionHandlerCustomerBusinessName}>
            <option>--- Choose Business Name ---</option>
            {datatwo.map(item => (
              <option
                key={data.customerBusinessName}
                value={data.customerBusinessName}
              >
                {item.customerBusinessName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Provider Type</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName'
             value={providertype} 
             onChange={(e) => setproviderType(e.target.value)} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Provider Id</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            value={providerid}
            placeholder='' onChange={(e) => setproviderId(e.target.value)} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Address 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            placeholder='' 
            value={locationaddress1}
            onChange={(e) => setlocationAddress1(e.target.value)} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Address 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            placeholder=''
            value={locationaddress2}
            onChange={(e) => setlocationAddress2(e.target.value)} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Address 3</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            placeholder='' 
            value={locationaddress3}
            onChange={(e) => setlocationAddress3(e.target.value)} />
            
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Country' style={{fontSize:'1rem'}}>Country</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic'
          value={country} 
          onChange={changeSelectOptionHandlerCountry}>
          <option>--- Choose Country ----</option>
            {datathree.map(item => (
              <option
                key={data.country_name}
                value={data.country_name}
                
              >
                {item.country_name}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>
      <FormGroup>
        <Label for='State' style={{fontSize:'1rem'}}>State</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic'
          value={state} 
          onChange={changeSelectOptionHandlerState}>
            <option>--- Choose State ----</option>
            {states.map(item => (
              <option
                key={data.state_name}
                value={data.state_name}
                
              >
                {item.state_name}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

       
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>City</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            value={city}
            placeholder='' 
            onChange={(e) => setcity(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Pincode</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' 
            name='OsCategoryName'
            value={pincode} 
             placeholder='' onChange={(e) => setpincode(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Primary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            value={primaryemail}
            placeholder='' onChange={(e) => setprimaryEmail(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Primary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName'
            value={primaryphone}
            placeholder='' onChange={(e) => setprimaryPhone(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Secondary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName'
            value={secondaryemail}
            placeholder='' onChange={(e) => setsecondaryEmail(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Secondary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' 
            value={secondaryphone}
            placeholder='' onChange={(e) => setsecondaryPhone(e.target.value)} />
            
          </InputGroup>
        </FormGroup>
        <Button className='mr-1' color='primary' 
        onClick={ () => {
          handlePost()
          handleUpdateModal() 
          
        }}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleUpdateModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default UpdateModal
