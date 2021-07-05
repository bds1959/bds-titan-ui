// ** React Imports
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Cpu, Layers, Command, Database, Clipboard } from 'react-feather'
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
  const [isctechcategorydescription, setIscTechCategoryDescription] = useState("")
  const [isctechcategoryname, setIscTechCategoryName] = useState("")
  const [isctechcategorytags, setIscTechCategoryTags] = useState("")

  // dummy Token 
    const [token, setToken] = useState(
      localStorage.getItem('token') || ''
    )
  
  const handlePost = (evt) => {
    console.log(isctechcategorydescription)
    console.log(isctechcategoryname)
    console.log(isctechcategorytags)
    axios.post("http://172.16.1.240:32454/api/v1/encs-tech-category-master", {
        iscTechCategoryDescription : isctechcategorydescription,
        iscTechCategoryName : isctechcategoryname,
        iscTechCategoryTags : isctechcategorytags
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
  // Validation Part Begins here
  const SignupSchema = yup.object().shape({
    // email: yup.string().email().required(),
    TechCategoryName: yup.string().min(10).required(),
    TechCategorytag: yup.string().min(10).required(),
    setIscTechCategoryDescription: yup.string().max(500).required()
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
        <h5 className='modal-title'style={{color:'black'}}> Tech Category Master</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1' onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label for='TechCategoryName' style={{fontSize:'1rem'}}style={{fontSize:'1rem'}}>Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15}/>                
              </InputGroupText>
            </InputGroupAddon>
            <Input id='TechCategoryName' name='TechCategoryName' innerRef={register({ required: true })} invalid={errors.TechCategoryName && true}placeholder=''  onChange={(e) => setIscTechCategoryName(e.target.value)} />
            {errors && errors.TechCategoryName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        
        <FormGroup>
          <Label for='TechCategorytag'style={{fontSize:'1rem'}}>Tag</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='TechCategorytag' name='TechCategorytag' innerRef={register({ required: true })} invalid={errors.TechCategorytag && true} placeholder='' onChange={(e) => setIscTechCategoryTags(e.target.value)}/>
            {errors && errors.TechCategorytag && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='setIscTechCategoryDescription'style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Clipboard size={15}/>
              </InputGroupText>
            </InputGroupAddon> 
            <Input type='textarea' id='setIscTechCategoryDescription' rows='3' name='setIscTechCategoryDescription' innerRef={register({ required: true })} invalid={errors.setIscTechCategoryDescription && true} onChange={(e) => setIscTechCategoryDescription(e.target.value)} />
            {errors && errors.setIscTechCategoryDescription && <FormFeedback>Maximum 500 characters are allowed</FormFeedback>}
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