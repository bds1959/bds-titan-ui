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
  const [businessName, setbusinessName] = useState("")
  const [Id, setId] = useState("")
  const [hallId, sethallId] = useState("")
  const [hallName, sethallName] = useState("")
  const [partitionDcHallId, setpartitionDcHallId] = useState("")
  const [partitionName, setpartitionName] = useState("")

  
  // const [email, setEmail] = useState("ddhbderher")
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setbusinessName(value.customerBusinessName)
   })
  useEffect(() => {
    setId(value.customerId)
    sethallId(value.dcHallId)
    sethallName(value.dcHallName)
    setpartitionDcHallId(value.resPartitionDcHallId)
    setpartitionName(value.resPartitionName)
 }, [value])

// dummy Token 
const [token, setToken] = useState(
  localStorage.getItem('token') || ''
)
  const handlePost = (evt) => {
    axios.put("http://172.16.1.240:32454/api/v1/encs-res-partition-dc-hall", {
          customerBusinessName : businessName,
          customerId : Id,
          dcHallId : hallId,
          dcHallName : hallName,
          resPartitionDcHallId : partitionDcHallId,
          resPartitionName : partitionName
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
          <Label for='isctechcategorydescription' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategorydescription'
            value={businessName}
            onChange={(e) => setbusinessName(e.target.value)} />
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='isctechcategoryname' style={{fontSize:'1rem'}}>Customer ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategoryname'
            value={Id}             
             onChange={(e) => {
              setId(e.target.value)
             }} />
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategorytags'
            value={hallId}
            onChange={(e) => sethallId(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Hall Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={hallName}
            onChange={(e) => sethallName(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>RespHall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={partitionDcHallId}
            onChange={(e) => setpartitionDcHallId(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Partition Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={partitionName}
            onChange={(e) => setpartitionName(e.target.value)} />
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
