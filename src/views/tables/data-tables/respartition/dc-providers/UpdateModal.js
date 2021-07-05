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
const [data, setData] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [providername, setproviderName] = useState("")
  const [providerid, setproviderId] = useState("")
  const [providercitypincode, setproviderCityPincode] = useState("")
  const [providercountrycode, setproviderCountryCode] = useState("")
  const [providerlocationaddress1, setproviderLocationAddress1] = useState("")
  const [providerlocationaddress2, setproviderLocationAddress2] = useState("")
  const [providerlocationaddress3, setproviderLocationAddress3] = useState("")
  const [providerlocationcity, setproviderLocationCity] = useState("")
  const [providerprimaryemail, setproviderPrimaryEmail] = useState("")
  const [providerprimaryphone, setproviderPrimaryPhone] = useState("")
  const [dcprovidersecondaryemail, setdcProviderSecondaryEmail] = useState("")
  const [providersecondaryphone, setproviderSecondaryPhone] = useState("")
  const [dcproviderstate, setdcProviderState] = useState("")
  const [pk, setPk] = useState("")
  console.log("pk = ", pk)
  //-------------  country Dropdown selection handler ----------------
    const [providercountry, setproviderCountry] = useState("")
    console.log("Counrty = ", providercountry)
    const [States, setState] = useState([])
    const index = data.findIndex(obj => obj.country_name === providercountry)
    console.log("Index value country= ", index)// Printing the index value of selected option

      useEffect(() => {
        try { //This try is solve the Type undifined error
          setState(data[index].states)
        } catch (error) {
          console.log('Spec', error)
        }
      })
      console.log("States selected= ", States)
    const changeSelectOptionHandlerproviderCountry = (event) => {
      setproviderCountry(event.target.value)
    }
    //-------------Dropdown selection handler End----------------
    const changeSelectOptionHandlerproviderState = (event) => {
      setdcProviderState(event.target.value)
    }

  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
   })
  useEffect(() => {
    setPk(value.dcProviderId)
    setproviderCountry(value.dcProviderCountry)
    setdcProviderState(value.dcProviderState)
    setproviderName(value.dcProviderName)
    setproviderCityPincode(value.dcProviderCityPincode)
    setproviderCountryCode(value.dcProviderCountryCode)
    setproviderLocationAddress1(value.dcProviderLocationAddress1)
    setproviderLocationAddress2(value.dcProviderLocationAddress2)
    setproviderLocationAddress3(value.dcProviderLocationAddress3)
    setproviderLocationCity(value.dcProviderLocationCity)
    setproviderPrimaryEmail(value.dcProviderPrimaryEmail)
    setproviderPrimaryPhone(value.dcProviderPrimaryPhone)
    setdcProviderSecondaryEmail(value.dcProviderSecondaryEmail)
    setproviderSecondaryPhone(value.dcProviderSecondaryPhone)
 }, [value])

  const handlePost = (evt) => {
    
    axios.put("http://172.16.1.240:32454/api/v1/encs-dc-providers", {
      dcProviderCityPincode : providercitypincode,
      dcProviderCountry : providercountry,
      dcProviderCountryCode : providercountrycode,
      dcProviderLocationAddress1 : providerlocationaddress1,
      dcProviderLocationAddress2 : providerlocationaddress2,
      dcProviderLocationAddress3 : providerlocationaddress3,
      dcProviderLocationCity : providerlocationcity,
      dcProviderName : providername,
      dcProviderPrimaryEmail : providerprimaryemail,
      dcProviderPrimaryPhone : providerprimaryphone,
      dcProviderSecondaryEmail : dcprovidersecondaryemail,
      dcProviderSecondaryPhone : providersecondaryphone,
      dcProviderState : dcproviderstate,
      dcProviderId: pk
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
//-----------------------------------Fetching Dropdown---------------------------------------------------------------
  
useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/get-countries`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching from provider!")
    setData(response.data.data)
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
          <Label for='DCProviderName' style={{fontSize:'1rem'}}>DC Provider Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='DCProviderName' 
            name='DCProviderName'
            value={providername} 
            onChange={(e) => setproviderName(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Address 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' 
            name='Ostechname'
            value={providerlocationaddress1} 
             onChange={(e) => setproviderLocationAddress1(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Address 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' 
            name='Ostechname'
            value={providerlocationaddress2} 
            onChange={(e) => setproviderLocationAddress2(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Address 3</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' 
            name='Ostechname'
            value={providerlocationaddress3} 
             onChange={(e) => setproviderLocationAddress3(e.target.value)}/>
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
        <Label for='dcProviderCountry' style={{fontSize:'1rem'}}>Country</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' 
          value={providercountry}
          onChange={changeSelectOptionHandlerproviderCountry}>
            <option>--- Choose country ---</option>
            {data.map(item => (
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
          <Label for='Countrycode' style={{fontSize:'1rem'}}>Country code</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Countrycode' 
            name='Countrycode'
            value={providercountrycode} 
             onChange={(e) => setproviderCountryCode(e.target.value)}/>
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='dcProviderState' style={{fontSize:'1rem'}}>State</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic'
          value={dcproviderstate}
          onChange={changeSelectOptionHandlerproviderState}>
            <option>--- Choose state ---</option>
            {States.map(item => (
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
          <Label for='Ostechname' style={{fontSize:'1rem'}}>City</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' 
            name='Ostechname'
            value={providerlocationcity} 
             onChange={(e) => setproviderLocationCity(e.target.value)}/>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Pincode</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' 
            name='Ostechname'
            value={providercitypincode} 
            onChange={(e) => setproviderCityPincode(e.target.value)}/>
          </InputGroup>
        </FormGroup>
                          
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Primary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' name='Ostechname'
            value={providerprimaryemail} 
            onChange={(e) => setproviderPrimaryEmail(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Primary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' name='Ostechname'
            value={providerprimaryphone} 
           onChange={(e) => setproviderPrimaryPhone(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Secondary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' name='Ostechname'
            value={dcprovidersecondaryemail} 
            onChange={(e) => setdcProviderSecondaryEmail(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Secondary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' name='Ostechname'
            value={providersecondaryphone} 
            onChange={(e) => setproviderSecondaryPhone(e.target.value)}/>
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
