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
  const [partitionName, setpartitionName] = useState("")
  const [partitionDcHallId, setpartitionDcHallId] = useState("")
  const [subPartitionName, setsubPartitionName] = useState("")
  const [subPartitionId, setsubPartitionId] = useState("")
  const [resPartitionDcHallId, setresPartitionDcHallId] = useState("")
  
     //-------------Dropdown selection handler----------------
     const [respartitionname, setResPartitionName] = useState('')
     const changeSelectOptionHandlerResPartitionName = (event) => {
      setResPartitionName(event.target.value)
     }
    //-------------Dropdown selection handler End----------------
     //-------------Dropdown selection handler----------------
     const [respartitiondchallid, setResPartitiondcHallId] = useState('')
     const changeSelectOptionHandlerResPartitiondcHallId = (event) => {
      setResPartitiondcHallId(event.target.value)
     }
    //-------------Dropdown selection handler End----------------
   // dummy Token 
   const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  const handlePost = (evt) => {
    axios.post("http://172.16.1.240:32454/api/v1/encs-app-res-partition-dc-hall", {
          resPartitionName : partitionName,
          resPartitionDcHallId : partitionDcHallId,
          appSubPartitionName : subPartitionName,
          appSubPartitionId : subPartitionId,
          appResPartitionDcHallId : resPartitionDcHallId,
          resPartitionName : respartitionname,
          resPartitiondcHallId : respartitiondchallid
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
  
  const [data, setData] = useState([])
  //-----------------------------------Fetching Dropdown Api 1---------------------------------------------------------------
  
  useEffect(() => { 
    // if (isLoaded === false) {
      axios.get(`http://172.16.1.240:32454/api/v1/list-resPartitiondcHallIds`
      
    )
    .then((response) => {
      // Handle success.
      console.log("Connection established.Data is fetching from resPartitiondcHallIds!")
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
          <Label for='OsCategorytag' style={{fontSize:'1rem'}}>DC Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='OsCategorytag' name='OsCategorytag' innerRef={register({ required: true })} invalid={errors.OsCategorytag && true} placeholder='' onChange={(e) => setpartitionDcHallId(e.target.value)}/>
            {errors && errors.OsCategorytag && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategorytag' style={{fontSize:'1rem'}}>Sub Partition Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='OsCategorytag' name='OsCategorytag' innerRef={register({ required: true })} invalid={errors.OsCategorytag && true} placeholder='' onChange={(e) => setsubPartitionName(e.target.value)}/>
            {errors && errors.OsCategorytag && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategorytag' style={{fontSize:'1rem'}}>Sub Partition ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='OsCategorytag' name='OsCategorytag' innerRef={register({ required: true })} invalid={errors.OsCategorytag && true} placeholder='' onChange={(e) => setsubPartitionId(e.target.value)}/>
            {errors && errors.OsCategorytag && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='OsCategorytag' style={{fontSize:'1rem'}}>App DC Hall ID</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='OsCategorytag' name='OsCategorytag' innerRef={register({ required: true })} invalid={errors.OsCategorytag && true} placeholder='' onChange={(e) => setresPartitionDcHallId(e.target.value)}/>
            {errors && errors.OsCategorytag && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Res Partition Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerResPartitionName}>
            {data.map(item => (
              <option
                key={data.resPartitionName}
                value={data.resPartitionName}
                
              >
                {item.resPartitionName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Res Partition Dc Hall Id</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' onChange={changeSelectOptionHandlerResPartitiondcHallId}>
            {data.map(item => (
              <option
                key={data.resPartitiondcHallId}
                value={data.resPartitiondcHallId}
                
              >
                {item.resPartitiondcHallId}
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