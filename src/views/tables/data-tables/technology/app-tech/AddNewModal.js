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
  const [isctechcategorydescription, setIscTechCategoryDescription] = useState("")
  const [isctechcategoryname, setIscTechCategoryName] = useState("")
  const [isctechcategorytags, setIscTechCategoryTags] = useState("")
  
  //-------------Dropdown selection handler----------------
  const [iscotechnameselected, setSelected] = useState('')
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value)
  }
 //-------------Dropdown selection handler End----------------

  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )

  const handlePost = (evt) => {
    console.log(isctechcategorydescription)
    console.log(isctechcategoryname)
    console.log(isctechcategorytags)
    console.log(iscotechnameselected)
    axios.post("http://172.16.1.240:32454/api/v1/encs-app-tech-master", {
      iscAppTechDescription : isctechcategorydescription,
      iscAppTechName : isctechcategoryname,
      iscAppTechTags : isctechcategorytags,
      iscTechCategoryName : iscotechnameselected
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
      axios.get(`http://172.16.1.240:32454/api/v1/list-techcategory`
      
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
  
  // Validation Part Begins here
  const SignupSchema = yup.object().shape({
    // email: yup.string().email().required(),
    AppCategoryName: yup.string().min(10).required(),
    AppCategorytag: yup.string().min(10).required(),
    AppCategoryDescription: yup.string().max(500).required()
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
        <h5 className='modal-title'style={{color:'black'}}>App Tech Category Master</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label for='AppCategoryName' style={{fontSize:'1rem'}}>Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='AppCategoryName' name='AppCategoryName' innerRef={register({ required: true })} invalid={errors.AppCategoryName && true} placeholder=''  onChange={(e) => setIscTechCategoryName(e.target.value)} />
            {errors && errors.AppCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='AppCategorytag' style={{fontSize:'1rem'}}>Tag</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='AppCategorytag' name='AppCategorytag' innerRef={register({ required: true })} invalid={errors.AppCategorytag && true} placeholder='' onChange={(e) => setIscTechCategoryTags(e.target.value)}/>
            {errors && errors.AppCategorytag && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Tech Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandler}>
          <option>--- Choose tech name ---</option>

            {data.map(item => (
              <option
                key={data.iscTechCategoryName}
                value={data.iscTechCategoryName}
                
              >
                {item.iscTechCategoryName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='AppCategoryDescription' style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Clipboard size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='textarea' rows='3' id='AppCategoryDescription' name='AppCategoryDescription' innerRef={register({ required: true })} invalid={errors.AppCategoryDescription && true} placeholder='' onChange={(e) => setIscTechCategoryDescription(e.target.value)} />
            {errors && errors.AppCategoryDescription && <FormFeedback>Maximum 500 characters are allowed</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <Button className='mr-1' color='primary' onClick={handlePost}>
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