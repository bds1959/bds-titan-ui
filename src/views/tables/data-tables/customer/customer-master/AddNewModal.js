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

const AddNewModal = ({ open, handleModal, fetchData }) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())
  const [data, setData] = useState([])
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [customerbusinessName, setCustomerBusinessName] = useState("")
  const [customerbusinessType, setCustomerBusinessType] = useState("")
  const [customerprofile, setCustomerProfile] = useState("")
  const [customerprofileFile, setCustomerProfileFile] = useState("")
  const [mimeTypecolumn, setMimeTypeColumn] = useState("")
  const [filenamecolumn, setFilenameColumn] = useState("")
  const [customerlocationAddress1, setCustomerLocationAddress1] = useState("")
  const [customerlocationAddress2, setCustomerLocationAddress2] = useState("")
  const [customerlocationAddress3, setCustomerLocationAddress3] = useState("")
  const [customerlocationCity, setCustomerLocationCity] = useState("")
  const [customercityPincode, setCustomerCityPincode] = useState("")
  const [countrycode, setCountryCode] = useState("")
  const [customerprimaryPhone, setCustomerPrimaryPhone] = useState("")
  const [customersecondaryPhone, setCustomerSecondaryPhone] = useState("")
  const [customerprimaryEmailDomain, setCustomerPrimaryEmailDomain] = useState("")
  const [customersecondaryEmailDomain, setCustomerSecondaryEmailDomain] = useState("")
  const [customerurl, setCustomerUrl] = useState("")
  const [customerlogo, setCustomerLogo] = useState("")

  
   //-------------Dropdown selection handler----------------
   const [customercountry, setCustomerCountry] = useState("")
   const [states, setStates] = useState([])

    
  const index = data.findIndex(obj => obj.country_name === customercountry)
  console.log("Index value country= ", index)

  useEffect(() => {
    try { //This try is solve the Type undifined error
      setStates(data[index].states)
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
  //-------------Dropdown selection handler End----------------

   // dummy Token 
   const [token, setToken] = useState(
     localStorage.getItem('token') || ''
   )

  
  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-customer-master", {
      countryCode: countrycode,
      customerBusinessName: customerbusinessName,
      customerBusinessType: customerbusinessType,
      customerCityPincode: customercityPincode,
      customerCountry: customercountry,
      customerId: customercountry,
      customerLocationAddress1: customerlocationAddress1,
      customerLocationAddress2: customerlocationAddress2,
      customerLocationAddress3: customerlocationAddress3,
      customerLocationCity: customerlocationCity,
      customerLogo:customerlogo,
      customerPrimaryEmailDomain: customerprimaryEmailDomain,
      customerPrimaryPhone: customerprimaryPhone,
      customerProfile:customerprofile,
      customerProfileFile: customerprofileFile,
      customerSecondaryEmailDomain: customersecondaryEmailDomain,
      customerSecondaryPhone: customersecondaryPhone,
      customerState: customerstate,
      customerUrl: customerurl,
      filenameColumn: filenamecolumn,
      mimeTypeColumn:mimeTypecolumn
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
    axios.get(`http://172.16.1.240:32454/api/v1/get-countries`
    
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
const [datatwo, setDataTwo] = useState([])
useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/list-states`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching!")
    setDataTwo(response.data.data)
    // console.log(response.data.data)
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
        <h5 className='modal-title'style={{color:'black'}}>Customer Master Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>

      <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Customer</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerBusinessName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='businessType' style={{fontSize:'1rem'}}>Business Type</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='businessType' name='businessType' innerRef={register({ required: true })} invalid={errors.businessType && true} placeholder='' onChange={(e) => setCustomerBusinessType(e.target.value)}/>
            {errors && errors.businessType && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        
        <FormGroup>
          <Label for='Profile' style={{fontSize:'1rem'}}>Profile</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input 
            type='text'
             id='Ostechname' 
             name='Ostechname' 
             innerRef={register({ required: true })}
              invalid={errors.Ostechname && true}
               placeholder=''
                onChange={(e) => setCustomerProfile(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='profilfile' style={{fontSize:'1rem'}}>Profile File</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerProfileFile(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Mimetype' style={{fontSize:'1rem'}}>MIME Type</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setMimeTypeColumn(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Filename' style={{fontSize:'1rem'}}>File Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setFilenameColumn(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='addr1' style={{fontSize:'1rem'}}>Address 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerLocationAddress1(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='addr2' style={{fontSize:'1rem'}}>Address 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerLocationAddress2(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='addr3' style={{fontSize:'1rem'}}>Address 3</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerLocationAddress3(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
          <Label for='city' style={{fontSize:'1rem'}}>City</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerLocationCity(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='pincode' style={{fontSize:'1rem'}}>Pincode</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerCityPincode(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Code' style={{fontSize:'1rem'}}>Country Code</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCountryCode(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Primaryph' style={{fontSize:'1rem'}}>Primary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerPrimaryPhone(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Secondaryph' style={{fontSize:'1rem'}}>Secondary Phone</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerSecondaryPhone(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Primaryemail' style={{fontSize:'1rem'}}>Primary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerPrimaryEmailDomain(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Secondaryemail' style={{fontSize:'1rem'}}>Secondary Email</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerSecondaryEmailDomain(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='url' style={{fontSize:'1rem'}}>URL</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} /> 
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerUrl(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='logo' style={{fontSize:'1rem'}}>Logo</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input  id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setCustomerLogo(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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