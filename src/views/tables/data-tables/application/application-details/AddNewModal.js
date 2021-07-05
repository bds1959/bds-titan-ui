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

  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )

  const [data, setData] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  const [applicationcontactdeptname, setapplicationContactDeptName] = useState("")
  const [applicationcontactemail1, setapplicationContactEmail1] = useState("")
  const [applicationcontactemail2, setapplicationContactEmail2] = useState("")
  const [applicationcontactfirstname, setapplicationContactFirstName] = useState("")
  const [applicationcontactlastname, setapplicationContactLastName] = useState("")
  const [applicationcontactphone1, setapplicationContactPhone1] = useState("")
  const [applicationcontactphone1isd, setapplicationContactPhone1ISD] = useState("")
  const [applicationcontactphone2, setapplicationContactPhone2] = useState("")
  const [applicationcontactphone2isd, setapplicationContactPhone2ISD] = useState("")
  const [applicationdescription, setapplicationDescription] = useState("")
  const [applicationid, setapplicationId] = useState("")
  const [applicationname, setapplicationName] = useState("")
  const [dummy, setDummy] = useState([])
  const [fgname, setFgName] = useState('')

  const index = data.findIndex(obj => obj.fgName === fgname)
  console.log("Index value = ", index)// Printing the index value of selected option

    useEffect(() => {
      try { //This try is solve the Type undifined error
        setDummy(data[index].fgId)
        //console.log("Direct = ", data[index].customerId)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    console.log(dummy)

  //-------------Fg Id Dropdown selection handler----------------
 
  const changeSelectOptionHandlerFgId = (event) => {
    setFgName(event.target.value)
  }
 //-------------Dropdown selection handler End----------------

  const handlePost = (evt) => {
    console.log(applicationcontactdeptname)
    console.log(applicationcontactemail1)
    console.log(applicationcontactemail2)
    console.log(applicationcontactfirstname)
    console.log(applicationcontactlastname)
    console.log(applicationcontactphone1)
    console.log(applicationcontactphone1isd)
    console.log(applicationcontactphone2)
    console.log(applicationcontactphone2isd)
    console.log(applicationdescription)
    console.log(applicationid)
    console.log(applicationname)
    console.log(dummy)
    axios.post("http://172.16.1.240:32454/api/v1/encs-application-details", {
      applicationContactDeptName:applicationcontactdeptname, 
      applicationContactEmail1:applicationcontactemail1,
      applicationContactEmail2:applicationcontactemail2,
      applicationContactFirstName:applicationcontactfirstname,
      applicationContactLastName:applicationcontactlastname,
      applicationContactPhone1:applicationcontactphone1,
      applicationContactPhone1ISD:applicationcontactphone1isd,
      applicationContactPhone2:applicationcontactphone2,
      applicationContactPhone2ISD:applicationcontactphone2isd,
      applicationDescription:applicationdescription,
      applicationId:applicationid,
      applicationName:applicationname,
      fgId:dummy
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
    axios.get(`http://172.16.1.240:32454/api/v1/list-fgdetails`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching!")
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
//-----------------------------------------Fetching Dropdown ends------------------------------------------------------------

  // Validation Part Begins
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    OsCategoryName: yup.string().min(5).required(),
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
        <h5 className='modal-title'style={{color:'black'}}>Application Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label for='name' style={{fontSize:'1rem'}}>Application Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='name' 
            name='name' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationName(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>
              
        <FormGroup>
        <Label for='fgid' style={{fontSize:'1rem'}}>Functional Group Id</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='fgid' id='fgid-basic' onChange={changeSelectOptionHandlerFgId}>
            <option>--- Choose functional group id ---</option>
            {data.map(item => (
              <option
                key={data.fgName}
                value={data.fgName}
                >
                {item.fgName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='description' style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='description' 
            name='description' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationDescription(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='first_name' style={{fontSize:'1rem'}}>First Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='first_name' 
            name='first_name' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactFirstName(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='last_name' style={{fontSize:'1rem'}}>Last Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='last_name' 
            name='last_name' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactLastName(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='department_name' style={{fontSize:'1rem'}}>Department Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='department_name' 
            name='department_name' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactDeptName(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least  characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>
               
        <FormGroup>
          <Label for='phone1' style={{fontSize:'1rem'}}>Phone 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='phone1' 
            name='phone1' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactPhone1(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='phone_2' style={{fontSize:'1rem'}}>Phone 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='phone_2' 
            name='phone_2' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactPhone2(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='phone1isd' style={{fontSize:'1rem'}}>Phone 1 ISD</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='phone1isd' 
            name='phone1isd' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactPhone1ISD(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='phone2isd' style={{fontSize:'1rem'}}>Phone 2 ISD</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='phone2isd' 
            name='phone2isd' 
            // innerRef={register({ required: true })} 
            // invalid={errors.OsCategoryName && true}  
            onChange={(e) => setapplicationContactPhone2ISD(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='email1' style={{fontSize:'1rem'}}>Email 1</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='email1' 
            name='email1' 
            innerRef={register({ required: true })} 
            invalid={errors.email && true}  
            onChange={(e) => setapplicationContactEmail1(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='email2' style={{fontSize:'1rem'}}>Email 2</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='email2' 
            name='email2' 
            innerRef={register({ required: true })} 
            invalid={errors.email && true}  
            onChange={(e) => setapplicationContactEmail2(e.target.value)} />
            {/* {errors && errors.OsCategoryName && <FormFeedback>It must be at least 10 characters</FormFeedback>} */}
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