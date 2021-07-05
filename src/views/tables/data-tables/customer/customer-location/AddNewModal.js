// ** React Imports
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Cpu, Layers, Command, Clipboard, Database } from 'react-feather'
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
  Label,
  FormFeedback
} from 'reactstrap'

import axios from 'axios'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal, fetchData}) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())
  const [data, setData] = useState([])
  const [datatwo, setDataTwo] = useState([])

   // dummy Token 
   const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [customerlocationname, setcustomerLocationName] = useState("")
  const [customerid, setcustomerId] = useState("")
  const [customerlocationaddress1, setcustomerLocationAddress1] = useState("")
  const [customerlocationaddress2, setcustomerLocationAddress2] = useState("")
  const [customerlocationaddress3, setcustomerLocationAddress3] = useState("")
  const [customerlocationcity, setcustomerLocationCity] = useState("")
  const [customercitypincode, setcustomerCityPincode] = useState("")
  // const [customerstate, setcustomerState] = useState("")
  const [countrycode, setcountryCode] = useState("")
  const [customerlocationphone1, setcustomerLocationPhone1] = useState("")
  const [customerlocationphone2, setcustomerLocationPhone2] = useState("")
  const [customerlocationemail1, setcustomerLocationEmail1] = useState("")
  const [customerlocationemail2, setcustomerLocationEmail2] = useState("")
  const [dummy, setDummy] = useState([])

   //-------------Dropdown selection handler----------------
   const [customerbusinessname, setcustomerBusinessName] = useState('')
   
    // Variale to store the index value of selected option
    const index = data.findIndex(obj => obj.customerBusinessName === customerbusinessname)
    console.log("Index value = ", index)// Printing the index value of selected option

    useEffect(() => {
      try { //This try is solve the Type undifined error
        setDummy(data[index].customerId)
        //console.log("Direct = ", data[index].customerId)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    console.log(dummy)

    const changeSelectOptionHandlecustomerId = (event) => {
      setcustomerBusinessName(event.target.value)
      }

      
   //-------------Dropdown selection handler----------------
   const [customercountry, setCustomerCountry] = useState("")
   const [states, setStates] = useState([])

    
  const index2 = datatwo.findIndex(obj => obj.country_name === customercountry)
  console.log("Index value country= ", index2)

  useEffect(() => {
    try { //This try is solve the Type undifined error
      setStates(datatwo[index2].states)
    } catch (error) {
      console.log('Spec', error)
    }
  })

   const changeSelectOptionHandlerCountry = (event) => {
    setCustomerCountry(event.target.value)
   }
   console.log(states)
  //-------------Dropdown selection handler End----------------
  
  //-------------Dropdown selection handler----------------
  const [customerstate, setCustomerState] = useState("")
   const changeSelectOptionHandlerState = (event) => {
    setCustomerState(event.target.value)
   }
 console.log(customerstate)
  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-customer-location-info", {
         countryCode : countrycode,
         customerBusinessName : customerbusinessname,
         customerCityPincode : customercitypincode,
         customerCountry : customercountry,
         customerId : dummy,
         customerLocationAddress1 : customerlocationaddress1,
         customerLocationAddress2 : customerlocationaddress2,
         customerLocationAddress3 : customerlocationaddress3,
         customerLocationCity : customerlocationcity,
         customerLocationEmail1 : customerlocationemail1,
         customerLocationEmail2 : customerlocationemail2,
         customerLocationName : customerlocationname,
         customerLocationPhone1 : customerlocationphone1,
         customerLocationPhone2 : customerlocationphone2,
         customerState : customerstate
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
        alert("New record added")
        fetchData()
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error)
      })
  }
 //-----------------------------------Fetching Dropdown---------------------------------------------------------------

 useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/list-customer`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching!")
    setData(response.data.data)
    console.log(response.data.data)
    })
    .catch((error) => {
      console.error(error)
 })
}, [])
//-----------------------------------------Fetching Dropdown ends------------------------------------------------------------
 //-----------------------------------Fetching Dropdown---------------------------------------------------------------

 useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/get-countries`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching!")
    setDataTwo(response.data.data)
    console.log(response.data.data)
    })
    .catch((error) => {
      console.error(error)
 })
}, [])
//-----------------------------------------Fetching Dropdown ends------------------------------------------------------------

  // Validation Part Begins
  const SignupSchema = yup.object().shape({
    // email: yup.string().email().required(),
    OsCategoryName: yup.string().min(10).required(),
    OsCategorytag: yup.string().min(10).required(),
    Ostechname: yup.string().min(10).required(),
    setIscOsCategoryDescription: yup.string().max(500).required()
  })

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }
  // Validation Part Ends
  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>Customer Location Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      
      <FormGroup>
        <Label for='Country' style={{fontSize:'1rem'}}>Customer</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='cid'
            onChange={changeSelectOptionHandlecustomerId}
           >
           <option>--- Choose Customer Business ---</option>
            {data.map(item => (
              <option
                key={data.customerBusinessName}
                value={data.customerBusinessName}
                // onClick={dropAction}
              >
                {item.customerBusinessName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

      <FormGroup>
          <Label for='LocationName' style={{fontSize:'1rem'}}>Location Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='LocationName' 
              name='LocationName' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationName(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Address1' style={{fontSize:'1rem'}}>Address 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Address1' 
              name='Address1' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationAddress1(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Address2' style={{fontSize:'1rem'}}>Address 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Address2' 
              name='Address2' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationAddress2(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Address3' style={{fontSize:'1rem'}}>Address 3</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Address3' 
              name='Address3' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationAddress3(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Country' style={{fontSize:'1rem'}}>Country Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerCountry}>
            <option>---- Choose country ----</option>
            {datatwo.map(item => (
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
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerState}>
            <option>---- Choose state ----</option>
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
          <Label for='City' style={{fontSize:'1rem'}}>City</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='City' 
              name='City' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationCity(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
         
        <FormGroup>
          <Label for='Citypincode' style={{fontSize:'1rem'}}>Pincode</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Citypincode' 
              name='Citypincode' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerCityPincode(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='CountryCode' style={{fontSize:'1rem'}}>Country Code</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='CountryCode' 
              name='CountryCode' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcountryCode(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Phone1' style={{fontSize:'1rem'}}>Phone 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Phone1' 
              name='Phone1' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationPhone1(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Phone2' style={{fontSize:'1rem'}}>Phone 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Phone2' 
              name='Phone2' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationPhone2(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Email1' style={{fontSize:'1rem'}}>Email 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Email1' 
              name='Email1' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationEmail1(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Email2' style={{fontSize:'1rem'}}>Email 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Email2' 
              name='Email2' 
              innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
              placeholder='' 
              onChange={(e) => setcustomerLocationEmail2(e.target.value)} 
            />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <Button className='mr-1' color='primary' onClick={ () => {
            handlePost()
            handleModal()
            }
         }>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal