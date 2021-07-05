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

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [businessName, setbusinessName] = useState("")
  const [Id, setId] = useState("")
  const [hallId, sethallId] = useState("")
  const [hallName, sethallName] = useState("")
  const [partitionDcHallId, setpartitionDcHallId] = useState("")
  const [partitionName, setpartitionName] = useState("")
  
   //-------------Dropdown selection handler----------------
   const [dchallid, setDcHallId] = useState('')
   const changeSelectOptionHandlerDcHallId = (event) => {
    setDcHallId(event.target.value)
   }
  //-------------Dropdown selection handler End----------------
   //-------------Dropdown selection handler----------------
   const [dchallname, setDchallName] = useState('')
   const changeSelectOptionHandlerDcHallName = (event) => {
    setDchallName(event.target.value)
   }
  //-------------Dropdown selection handler End----------------
 
     //-------------Dropdown selection handler----------------
     const [customerid, setCustomerId] = useState('')
     const changeSelectOptionHandlerCustomerId = (event) => {
      setCustomerId(event.target.value)
     }
    //-------------Dropdown selection handler End----------------
     //-------------Dropdown selection handler----------------
     const [customerbusinessname, setCustomerBusinessName] = useState('')
     const changeSelectOptionHandlerCustomerBusinessName = (event) => {
      setCustomerBusinessName(event.target.value)
     }
    //-------------Dropdown selection handler End----------------
   // dummy Token 
   const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )


  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-res-partition-dc-hall", {
          customerBusinessName : businessName,
          customerId : Id,
          dcHallId : hallId,
          dcHallName : hallName,
          resPartitionDcHallId : partitionDcHallId,
          resPartitionName : partitionName,
          dcHallId : dchallid,
          dcHallName : dchallname,
          customerBusinessName: customerbusinessname,
          customerid : customerId
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

  const [data, setData] = useState([])
  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-dcHallNames`
      
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

  const [datatwo, setDataTwo] = useState([])
  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-customer`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from list!")
      // const options = data.map(d => ({
      //   value : d.id,
      //   label : d.name
      // }))
     //  setIsLoaded(true)
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
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setbusinessName(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Customer ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setId(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => sethallId(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Hall Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => sethallName(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>RespHall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setpartitionDcHallId(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategoryName' style={{fontSize:'1rem'}}>Partition Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='OsCategoryName' name='OsCategoryName' innerRef={register({ required: true })} invalid={errors.OsCategoryName && true} placeholder='' onChange={(e) => setpartitionName(e.target.value)} />
            {errors && errors.OsCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>        
        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>DC Hall Id</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerDcHallId}>
            {data.map(item => (
              <option
                key={data.dcHallId}
                value={data.dcHallId}
                
              >
                {item.dcHallId}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>DC Hall Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerDcHallName}>
            {data.map(item => (
              <option
                key={data.dcHallName}
                value={data.dcHallName}
                
              >
                {item.dcHallName}
              </option>
            ))}
        </Input>
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
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Customer Id</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerCustomerId}>
            {datatwo.map(item => (
              <option
                key={data.customerId}
                value={data.customerId}
                
              >
                {item.customerId}
              </option>
            ))}
        </Input>
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