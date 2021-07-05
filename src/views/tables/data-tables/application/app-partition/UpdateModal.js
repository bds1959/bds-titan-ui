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

  // dummy Token 
  const [token, setToken] = useState(
    localStorage.getItem('token') || ''
  )
  const [data, setData] = useState([])
  const [datatwo, setDataTwo] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [apppartitiondescription, setappPartitionDescription] = useState("")
  const [apppartitionname, setappPartitionName] = useState("")
  const [envname, setEnvName] = useState('')
  const [pk, setPk] = useState('')
  const [applicationname, setApplicationName] = useState('')
  const [applicationid, setapplicationId] = useState([])
  const [applicationnamepush, setApplicationNamePush] = useState('')

  // const [email, setEmail] = useState("ddhbderher")
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setPk(value.appPartitionId)
   })
  useEffect(() => {
    setappPartitionDescription(value.appPartitionDescription)
    setappPartitionName(value.appPartitionName)
    setEnvName(value.appEnvName)
    setapplicationId(value.applicationId)
 }, [value])
 console.log('app env name = ', envname)
 console.log('app part name = ', apppartitionname)
 console.log('app id  = ', applicationid)

 //logic to push application name to dropdown by comparing application id
 const index2 = data.findIndex(obj => obj.applicationId === applicationid)
 console.log("Index value 2 = ", index2)// Printing the index value of selected option
  useEffect(() => {
      try { //This try is solve the Type undifined error
        setApplicationNamePush(data[index2].applicationName)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    console.log(applicationnamepush)

  //-------------Dropdown selection handler for application name and Id----------------
  
  const index = data.findIndex(obj => obj.applicationName === applicationname)
  console.log("Index value = ", index)// Printing the index value of selected option
 
    useEffect(() => {
      try { //This try is solve the Type undifined error
        setapplicationId(data[index].applicationId)
        //console.log("Direct = ", data[index].customerId)
      } catch (error) {
        console.log('Spec', error)
      }
    })
    console.log(applicationid)
 
  const changeSelectOptionHandlerApplicationName = (event) => {
   setApplicationName(event.target.value)
  }
 //-------------Dropdown selection handler End----------------

//-------------Dropdown selection handler for App Env Name----------------
const changeSelectOptionHandlerEnvName = (event) => {
  setEnvName(event.target.value)
}
console.log(envname)
//-------------Dropdown selection handler End----------------

  const handlePost = (evt) => {
   
    axios.put("http://172.16.1.240:32454/api/v1/encs-app-partition-details", {
      appEnvName : envname,
      appPartitionId : pk,
      appPartitionDescription : apppartitiondescription,
      appPartitionName : apppartitionname,
      applicationId : applicationid
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
//-----------------------------------Fetching Dropdown---------------------------------------------------------------
useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/list-applications`
    
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching from list Applications!")
    setData(response.data.data)
    console.log(response.data.data)
    })
    .catch((error) => {
      console.error(error)
 })
}, [])
//-----------------------------------Fetching Dropdown---------------------------------------------------------------

useEffect(() => { 
    axios.get(`http://172.16.1.240:32454/api/v1/list-envNames`)
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching from Env Names!")
   setDataTwo(response.data.data)
    console.log(response.data.data)
    })
    .catch((error) => {
      console.error(error) 
 })
}, [])
return (
    <Modal
      isOpen={open}
      toggle={handleUpdateModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleUpdateModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>Application Partition Details</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Application Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic'
          value={applicationnamepush}
          onChange={changeSelectOptionHandlerApplicationName}>
          <option>--- Choose partition details---</option>

            {data.map(item => (
              <option
                key={data.applicationName}
                value={data.applicationId}
              >
                {item.applicationName}
              </option>
            ))}
        </Input>
        </InputGroup>
        </FormGroup>

        <FormGroup>
        <Label for='Ostechname' style={{fontSize:'1rem'}}>App Env Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic'
          value={envname} 
          onChange={changeSelectOptionHandlerEnvName}>
          <option>--- Choose partition details---</option>
              
            {datatwo.map(item => (
              <option
                key={data.appEnvName}
                value={data.appEnvName}
              >
                {item.appEnvName}
              </option>
            ))}
        </Input>
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
            <Input id='PartitionName' name='PartitionName'
            value={apppartitionname} 
            onChange={(e) => setappPartitionName(e.target.value)} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='isctechcategorydescription' style={{fontSize:'1rem'}}>Discription</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='Discription' name='Discription'
            value={apppartitiondescription} 
            onChange={(e) => setappPartitionDescription(e.target.value)} />
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
