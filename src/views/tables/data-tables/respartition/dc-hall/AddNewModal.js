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

const AddNewModal = ({ open, handleModal }) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
    
  const [data, setData] = useState([])
  const [datatwo, setDataTwo] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [city, setcity] = useState("")
  const [pincode, setpincode] = useState("")
  const [countryCode, setcountryCode] = useState("")
  const [address1, setaddress1] = useState("")
  const [address2, setaddress2] = useState("")
  const [address3, setaddress3] = useState("")
  const [hallName, sethallName] = useState("")
  const [primaryEmail, setprimaryEmail] = useState("")
  const [primaryPhone, setprimaryPhone] = useState("")
  const [secondaryEmail, setsecondaryEmail] = useState("")
  const [secondaryPhone, setsecondaryPhone] = useState("")
  const [state, setstate] = useState("")
  const [idDc, setidDc] = useState("")
  const [nameDc, setnameDc] = useState("")

   //-------------Dc name Dropdown selection handler----------------
   const [dcname, setDchallName] = useState('')
   const [dcid, setdcId] = useState('')

   const index = data.findIndex(obj => obj.dcName === dcname)
   console.log("Index value Business= ", index)
   useEffect(() => {
    try { //This try is solve the Type undifined error
      setdcId(data[index].dcId)
    } catch (error) {
      console.log('Spec', error)
    }
  })
  console.log("Id = ", dcid)
   const changeSelectOptionHandlerDcHallName = (event) => {
    setDchallName(event.target.value)
   }
  //-------------Dropdown selection handler End----------------

  //-------------Dc name Dropdown selection handler----------------
  const [country, setcountry] = useState('')
  const [states, setStates] = useState([])
  
  const index2 = datatwo.findIndex(obj => obj.country_name === country)
  console.log("Index value Business= ", index)

  useEffect(() => {
    try { //This try is solve the Type undifined error
      setStates(datatwo[index2].states)
    } catch (error) {
      console.log('Spec', error)
    }
  })

  const changeSelectOptionHandlerCountry = (event) => {
    setcountry(event.target.value)
  }
  const changeSelectOptionHandlerState = (event) => {
    setstate(event.target.value)
  }
 //-------------Dropdown selection handler End----------------
  const handlePost = (evt) => {
   
    axios.post("http://172.16.1.240:32454/api/v1/encs-dc-hall", {
          dcHallCity : city,
          dcHallCityPincode : pincode,
          dcHallCountry : country,
          dcHallCountryCode : countryCode,
          dcHallLocationAddress1 : address1,
          dcHallLocationAddress2 : address2,
          dcHallLocationAddress3 : address3,
          dcHallName : hallName,
          dcHallPrimaryEmail : primaryEmail,
          dcHallPrimaryPhone : primaryPhone,
          dcHallSecondaryEmail : secondaryEmail,
          dcHallSecondaryPhone : secondaryPhone,
          dcHallState : state,
          dcId : idDc,
          dcName : dcid

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
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error)
      })
  }

  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-dcNames`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from dc name!")
      
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
      axios.get(`http://172.16.1.240:32454/api/v1/get-countries`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from dc name!")
      
      setDataTwo(response.data.data)
      console.log(response.data.data)
      })
      .catch((error) => {
        console.error(error)
   })
  }, [])


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
        <h5 className='modal-title'style={{color:'black'}}>New Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>DC Hall Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' 
            name='OsCategoryName' 
            innerRef={register({ required: true })} 
            invalid={errors.OsCategoryName && true} placeholder=''
             onChange={(e) => setDchallName(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>DC Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerDcHallName}>
           <option>--- Choose Dc Name ---</option>
            {data.map(item => (
              <option
                key={data.dcName}
                value={data.dcName}
                
              >
                {item.dcName}
              </option>
            ))}
        </Input>
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setaddress1(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setaddress2(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setaddress3(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Country</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerCountry}>
          <option>--- Choose Country ---</option>
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
        <Label for='Ostechname' style={{fontSize:'1rem'}}>State</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerState}>
          <option>--- Choose state ---</option>
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setcity(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setpincode(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
       
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Country Code</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setcountryCode(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setprimaryEmail(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setprimaryPhone(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setsecondaryEmail(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setsecondaryPhone(e.target.value)} />
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