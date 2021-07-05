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
  const [partitionName, setpartitionName] = useState("")
  const [partitionDcHallId, setpartitionDcHallId] = useState("")
  const [subPartitionName, setsubPartitionName] = useState("")
  const [subPartitionId, setsubPartitionId] = useState("")
  const [resPartitionDcHallId, setresPartitionDcHallId] = useState("")

  
  // const [email, setEmail] = useState("ddhbderher")
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setpartitionName(value.resPartitionName)
   })
  useEffect(() => {
    setpartitionDcHallId(value.resPartitionDcHallId)
    setsubPartitionName(value.appSubPartitionName)
    setsubPartitionId(value.appSubPartitionId)
    setresPartitionDcHallId(value.appResPartitionDcHallId)
 }, [value])

// dummy Token 
const [token, setToken] = useState(
  localStorage.getItem('token') || ''
)
  const handlePost = (evt) => {
    axios.put("http://172.16.1.240:32454/api/v1/encs-app-res-partition-dc-hall", {
          resPartitionName : partitionName,
          resPartitionDcHallId : partitionDcHallId,
          appSubPartitionName : subPartitionName,
          appSubPartitionId : subPartitionId,
          appResPartitionDcHallId : resPartitionDcHallId
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
          <Label for='isctechcategorydescription' style={{fontSize:'1rem'}}>Partition Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategorydescription'
            value={partitionName}
            onChange={(e) => setpartitionName(e.target.value)} />
          </InputGroup>
        </FormGroup>
      <FormGroup>
          <Label for='isctechcategoryname' style={{fontSize:'1rem'}}>DC Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategoryname'
            value={partitionDcHallId}             
             onChange={(e) => {
              setpartitionDcHallId(e.target.value)
             }} />
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Sub Partition Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='iscoscategorytags'
            value={subPartitionName}
            onChange={(e) => setsubPartitionName(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>Sub Partition ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={subPartitionId}
            onChange={(e) => setsubPartitionId(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorytags' style={{fontSize:'1rem'}}>App DC Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='techname'
            value={resPartitionDcHallId}
            onChange={(e) => setresPartitionDcHallId(e.target.value)} />
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
