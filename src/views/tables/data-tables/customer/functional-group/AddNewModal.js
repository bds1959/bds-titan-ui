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
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [data, setData] = useState([])
  const [businessgroupname, setbusinessGroupName] = useState("")
  const [businessgroupid, setbusinessgroupId] = useState("")
  const [fgcontactdeptname, setfgContactDeptName] = useState("")
  const [fgcontactemail1, setfgContactEmail1] = useState("")
  const [fgcontactemail2, setfgContactEmail2] = useState("")
  const [fgcontactfristname, setfgContactFristName] = useState("")
  const [fgcontactlastname, setfgContactLastName] = useState("")
  const [fgcontactphone1, setfgContactPhone1] = useState("")
  const [fgcontactphone1isd, setfgContactPhone1Isd] = useState("")
  const [fgcontactphone2, setfgContactPhone2] = useState("")
  const [fgcontactphone2isd, setfgContactPhone2Isd] = useState("")
  const [fgdescription, setfgDescription] = useState("")
  const [fgid, setfgId] = useState("")
  const [fglevel, setfgLevel] = useState("")
  const [fgname, setfgName] = useState("")
  const [toplevelfgid, settopLevelFgId] = useState("")
  const [toplevelfglevel, settopLevelFgLevel] = useState("")
 
  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  const [dummy, setDummy] = useState([])

  //-------------------Fg level---------------------------
   const changeSelectOptionHandlefgLevel = (event) => {
     setfgLevel(event.target.value)
   }
   console.log(fglevel)
  // -----------------------------------------------------
  //-------------Dropdown selection handler----------------
  const [customerbusinessname, setcustomerBusinessName] = useState('')
  
   // Variale to store the index value of selected option
 
   const index = data.findIndex(obj => obj.businessGroupName === customerbusinessname)
   console.log("Index value = ", index)// Printing the index value of selected option

   useEffect(() => {
     try { //This try is solve the Type undifined error
       setDummy(data[index].businessGroupId)
       //console.log("Direct = ", data[index].customerId)
     } catch (error) {
       console.log('Spec', error)
     }
   })
   console.log(dummy)

   const changeSelectOptionHandlecustomerId = (event) => {
     setcustomerBusinessName(event.target.value)
     }
  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-functional-group-details", {
      businessGroupName : customerbusinessname,
      businessGroupId : dummy,
      fgContactDeptName : fgcontactdeptname,
      fgContactEmail1 : fgcontactemail1,
      fgContactEmail2 : fgcontactemail2,
      fgContactFristName : fgcontactfristname,
      fgContactLastName : fgcontactlastname,
      fgContactPhone1 : fgcontactphone1,
      fgContactPhone1Isd : fgcontactphone1isd,
      fgContactPhone2 : fgcontactphone2,
      fgContactPhone2Isd : fgcontactphone2isd,
      fgDescription : fgdescription,
      fgLevel : fglevel,
      fgName : fgname,
      topLevelFgId : toplevelfgid,
      topLevelFgLevel : toplevelfglevel
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
        console.log(response.message)
        fetchData()
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error)
        console.log(error.message)
      })
  }
 
 //-----------------------------------Fetching Dropdown API 1---------------------------------------------------------------

 useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/list-businessGroupNames`
    
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
//---------------------------------------------

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
        <h5 className='modal-title'style={{color:'black'}}>Functional Group Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label for='name' style={{fontSize:'1rem'}}>Functional Group Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='name' 
             name='name' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgName(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='fglevel' style={{fontSize:'1rem'}}>Functional Group Level</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='cid'
            onChange={changeSelectOptionHandlefgLevel}
           >
           <option value='Root 1'>Root 1</option>
           <option value='Root 2'>Root 2</option>
           <option value='Root 3'>Root 3</option>
           <option value='Root 4'>Root 4</option>
        </Input>
        </InputGroup>
        </FormGroup>
           
        <FormGroup>
        <Label for='Country' style={{fontSize:'1rem'}}>Business Group Name</Label>
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
                key={data.businessGroupName}
                value={data.businessGroupName}
                // onClick={dropAction}
              >
                {item.businessGroupName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>
        
      <FormGroup>
          <Label for='Description' style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='Description' 
             name='Description' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgDescription(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

      <FormGroup>
          <Label for='TopLevelID' style={{fontSize:'1rem'}}>Top Level ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='TopLevelID' 
             name='TopLevelID' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => settopLevelFgId(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

      <FormGroup>
          <Label for='TopLevelFGLevel' style={{fontSize:'1rem'}}>Top Level FG Level</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='TopLevelFGLevel' 
             name='TopLevelFGLevel' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => settopLevelFgLevel(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

      <FormGroup>
          <Label for='first_name' style={{fontSize:'1rem'}}>First Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='first_name' 
             name='first_name' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactFristName(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='last_name' style={{fontSize:'1rem'}}>Last Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='last_name' 
             name='last_name' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactLastName(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='phone1' style={{fontSize:'1rem'}}>Phone 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='phone1' 
             name='phone1' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactPhone1(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='phone2' style={{fontSize:'1rem'}}>Phone 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='phone2' 
             name='phone2' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactPhone2(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='phone1isd' style={{fontSize:'1rem'}}>Phone 1 ISD</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='phone1isd' 
             name='phone1isd' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactPhone1Isd(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='phone2isd' style={{fontSize:'1rem'}}>Phone 2 ISD</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='phone2isd' 
             name='phone2isd' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactPhone2Isd(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='email1' style={{fontSize:'1rem'}}>Email 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='email1' 
             name='email1' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactEmail1(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='email2' style={{fontSize:'1rem'}}>Email 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text'
             id='email2' 
             name='email2' 
             innerRef={register({ required: true })} 
             invalid={errors.Ostechname && true}
              placeholder='' 
              onChange={(e) => setfgContactEmail2(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
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