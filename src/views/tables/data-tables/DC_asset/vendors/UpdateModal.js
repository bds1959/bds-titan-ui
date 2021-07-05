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

const UpdateModal = ({ open, handleUpdateModal, value}) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [iscoscategorydescription, setIscOsCategoryDescription] = useState("")
  const [iscoscategoryname, setIscOsCategoryName] = useState("")
  const [iscoscategorytags, setIscOsCategoryTags] = useState("")
  const [iscotechname, setIscTechName] = useState("")

  
  // const [email, setEmail] = useState("ddhbderher")
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setIscOsCategoryName(value.iscOsTechName)
   })
  useEffect(() => {
   setIscOsCategoryDescription(value.iscOsTechDescription)
   setIscOsCategoryTags(value.iscOsTechTags)
   setIscTechName(value.iscTechCategoryName)
 }, [value])

  const handlePost = (evt) => {
    console.log(value)
    console.log(iscoscategorydescription)
    console.log(iscoscategoryname)
    console.log(iscoscategorytags)
    console.log(iscotechname)
    axios.put("http://172.16.1.240:32454/api/v1/encs-os-tech-master", {
      iscOsTechDescription : iscoscategorydescription,
      iscOsTechName : iscoscategoryname,
      iscOsTechTags : iscoscategorytags,
      iscTechCategoryName : iscotechname
      },
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX25hbWUiOiJhZGFteWFAYmFueWFuZGF0YS5jb20iLCJpYXQiOjE2MjMxMzA1MTksImV4cCI6MTYyMzEzNzcxOX0.zteRYhE0awIx8OvhWYNUoEVkmRtTVGJzpsjy6FlQbDw`
        }
      }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!")
        // setisSucess(true)
        alert("Record has been updated")
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
        <h5 className='modal-title'style={{color:'black'}}>Update Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <FormGroup>
          <Label for='isctechcategorydescription' style={{fontSize:'1rem'}}>Discription</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategorydescription'
            value={iscoscategorydescription}
            onChange={(e) => setIscOsCategoryDescription(e.target.value)} />
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='isctechcategoryname' style={{fontSize:'1rem'}}>Name*</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategoryname'
            value={iscoscategoryname}             
             onChange={(e) => {
              setIscOsCategoryName(e.target.value)
             }} />
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Tags</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategorytags'
            value={iscoscategorytags}
            onChange={(e) => setIscOsCategoryTags(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Tech Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={iscotechname}
            onChange={(e) => setIscTechName(e.target.value)} />
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
