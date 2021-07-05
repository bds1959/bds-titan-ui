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
  const [data, setData] = useState([])

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleUpdateModal} />
  const [iscoscategorydescription, setIscOsCategoryDescription] = useState("")
  const [iscoscategoryname, setIscOsCategoryName] = useState("")
  const [iscoscategorytags, setIscOsCategoryTags] = useState("")
  const [iscotechname, setIscTechName] = useState("")
  const [dummy, setDummy] = useState([])
  const [pk, setPk] = useState([])

   //-------------Dropdown selection handler----------------
   const [applicationname, setApplicationName] = useState('')
  
  const index2 = data.findIndex(obj => obj.applicationId === applicationname)
  console.log("Index value applicationId = ", index2)
  
  useEffect(() => {
    try { //This try is solve the Type undifined error
      setApplicationName(data[index2].applicationName)
      //console.log("Direct = ", data[index].customerId)
    } catch (error) {
      console.log('Spec', error)
    }
  })

  const index = data.findIndex(obj => obj.applicationName === applicationname)
  console.log("Index value = ", index)// Printing the index value of selected option

   useEffect(() => {
     try { //This try is solve the Type undifined error
       setDummy(data[index].applicationId)
       //console.log("Direct = ", data[index].customerId)
     } catch (error) {
       console.log('Spec', error)
     }
   })
   console.log(dummy)

   const changeSelectOptionHandlerApplicationName = (event) => {
    setApplicationName(event.target.value)
   }
  //-------------Dropdown selection handler End----------------
  
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setPk()
   })
  useEffect(() => {
    setApplicationName(value.applicationId)
    setIscOsCategoryName(value.appEnvName)
   setIscOsCategoryDescription(value.appEnvDescription)
   setDummy(value.applicationId)
 }, [value])
// dummy Token 
const [token, setToken] = useState(
  localStorage.getItem('token') || ''
)
  const handlePost = (evt) => {
    
    axios.put("http://172.16.1.240:32454/api/v1/encs-app-env-master", {
      appEnvDescription : iscoscategorydescription,
      appEnvName : iscoscategoryname,
      applicationId: dummy
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
  
return (
    <Modal
      isOpen={open}
      toggle={handleUpdateModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleUpdateModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>Application Environment Master</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <FormGroup>
          <Label for='isctechcategoryname' style={{fontSize:'1rem'}}>Name</Label>
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
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Application Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' 
          value={applicationname}
          onChange={changeSelectOptionHandlerApplicationName}>
          <option>--- Choose application name ---</option>

            {data.map(item => (
              <option
                key={data.applicationName}
                value={data.applicationName}
                
              >
                {item.applicationName}
              </option>
            ))}
        </Input>
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
            <Input id='isctechcategorydescription'
            value={iscoscategorydescription}
            onChange={(e) => setIscOsCategoryDescription(e.target.value)} />
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
