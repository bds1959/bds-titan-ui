// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Cpu, Layers, Command } from 'react-feather'
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
  Label
} from 'reactstrap'

import axios from 'axios'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UpdateModal = ({ open, handleUpdateModal, value, fetchData}) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [isctechcategoryname, setIscTechCategoryName] = useState("")
  const [isctechcategorydescription, setIscTechCategoryDescription] = useState("")
  const [isctechcategorytags, setIscTechCategoryTags] = useState("")
   // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
 
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setIscTechCategoryName(value.iscTechCategoryName)
   })
  useEffect(() => {
   setIscTechCategoryDescription(value.iscTechCategoryDescription)
   setIscTechCategoryTags(value.iscTechCategoryTags)
 }, [value])

  const handlePost = (evt) => {
    console.log(value)
    console.log(isctechcategorydescription)
    console.log(isctechcategoryname)
    console.log(isctechcategorytags)
    axios.put("http://172.16.1.240:32454/api/v1/encs-tech-category-master", {
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
        alert("Record has been updated")
        fetchData()
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error)
      })
  }
//-------------------------Update Method End---------------------------------------------

return (
    <Modal
      isOpen={open}
      toggle={handleUpdateModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleUpdateModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>Tech Category Master</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <FormGroup>
          <Label for='isctechcategoryname'style={{fontSize:'1rem'}}> Name*</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategoryname'
            value={isctechcategoryname}             
             onChange={(e) => {
              setIscTechCategoryName(e.target.value)
             }} />
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='isctechcategorytags'style={{fontSize:'1rem'}}> Tags</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategorytags'
            value={isctechcategorytags}
            onChange={(e) => setIscTechCategoryTags(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorydescription'style={{fontSize:'1rem'}}> Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText> 
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategorydescription'
            value={isctechcategorydescription}
            onChange={(e) => setIscTechCategoryDescription(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <Button className='mr-1' color='primary' 
        onClick={ () => {
          handlePost()
          handleUpdateModal() 
          
        }}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleUpdateModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default UpdateModal
