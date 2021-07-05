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

  
   // dummy Token 
   const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  
  // ** State
  const [Picker, setPicker] = useState(new Date())
  const [datatwo, setDataTwo] = useState([])
  const [data, setData] = useState([])
  const [datathree, setDataThree] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [businessName, setbusinessName] = useState("")
  const [city, setcity] = useState("")
  const [pincode, setpincode] = useState("")
  const [customerId, setcustomerId] = useState("")
  const [id, setid] = useState("")
  const [locationAddress1, setlocationAddress1] = useState("")
  const [locationAddress2, setlocationAddress2] = useState("")
  const [locationAddress3, setlocationAddress3] = useState("")
  const [nameDc, setnameDc] = useState("")
  const [primaryEmail, setprimaryEmail] = useState("")
  const [primaryPhone, setprimaryPhone] = useState("")
  const [providerId, setproviderId] = useState("")
  const [providerName, setproviderName] = useState("")
  const [providerType, setproviderType] = useState("")
  const [secondaryEmail, setsecondaryEmail] = useState("")
  const [secondaryPhone, setsecondaryPhone] = useState("")
  const [state, setState] = useState("")
   
 
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
      //-------------Dropdown selection handler End----------------
      console.log("Country selected =", country)
      console.log("State selected =", state)
  const handlePost = (evt) => {
      axios.post("http://172.16.1.240:32454/api/v1/encs-dc-master", {
        customerBusinessName : customerbusinessname,
        dcCity : city,
        dcCityPincode : pincode,
        dcCountry : country,
        dcCustomerId : customerbusinessid,
        dcLocationAddress1 : locationAddress1,
        dcLocationAddress2 :locationAddress2,
        dcLocationAddress3 : locationAddress3,
        dcName : nameDc,
        dcPrimaryEmail : primaryEmail,
        dcPrimaryPhone : primaryPhone,
        dcProviderId : providerId,
        dcProviderName : providerName,
        dcProviderType : providerType,
        dcSecondaryEmail :secondaryEmail,
        dcSecondaryPhone : secondaryPhone,
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
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Dc Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setnameDc(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerCustomerBusinessName}>
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
             innerRef={register({ required: true })} 
             invalid={errors.OsCategoryName && true} placeholder='' 
             onChange={(e) => setproviderType(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            innerRef={register({ required: true })} 
            invalid={errors.OsCategoryName && true} 
            placeholder='' onChange={(e) => setproviderId(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setlocationAddress1(e.target.value)} />
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setlocationAddress2(e.target.value)} />
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
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setlocationAddress3(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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
            innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} 
            placeholder='' 
            onChange={(e) => setcity(e.target.value)} />
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
            <Input id='OsCategoryName' 
            name='OsCategoryName' 
            innerRef={register({ required: true })}
            invalid={errors.OsCategoryName && true}
             placeholder='' onChange={(e) => setpincode(e.target.value)} />
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