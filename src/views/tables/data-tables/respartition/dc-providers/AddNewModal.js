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
  const [data, setData] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [providername, setproviderName] = useState("")
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
  
  //-------------  country Dropdown selection handler ----------------
  const [providercountry, setproviderCountry] = useState("")
  const [state, setState] = useState([])

  const index = data.findIndex(obj => obj.country_name === providercountry)
  console.log("Index value country= ", index)// Printing the index value of selected option

    useEffect(() => {
      try { //This try is solve the Type undifined error
        setState(data[index].states)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    console.log("States selected= ", state)
  const changeSelectOptionHandlerproviderCountry = (event) => {
    setproviderCountry(event.target.value)
  }
 //-------------Dropdown selection handler End----------------
 const changeSelectOptionHandlerproviderState = (event) => {
  setState(event.target.value)
}

  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )

  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-dc-providers", {
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
      dcProviderState : state
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
          <Label for='DCProviderName' style={{fontSize:'1rem'}}>DC Provider Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='DCProviderName' 
            name='DCProviderName' 
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
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerproviderCountry}>
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
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerproviderState}>
            <option>--- Choose state ---</option>
            {state.map(item => (
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
            onChange={(e) => setproviderSecondaryPhone(e.target.value)}/>
          </InputGroup>
        </FormGroup>
       
      {/* <FormGroup>
          <Label for='setIscOsCategoryDescription' style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Clipboard size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='textarea' rows='3' id='setIscOsCategoryDescription' name='setIscOsCategoryDescription' 
            invalid={errors.setIscOsCategoryDescription && true} placeholder=''  onChange={(e) => setIscOsCategoryDescription(e.target.value)} />
            {errors && errors.setIscOsCategoryDescription && <FormFeedback>Maximum 500 characters are allowed</FormFeedback>}
          </InputGroup>
        </FormGroup>         */}
        
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