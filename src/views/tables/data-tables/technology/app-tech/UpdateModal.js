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
  const [techName, setTechName] = useState("")
  const [isctechcategoryname, setIscTechCategoryName] = useState("")
  const [isctechcategorydescription, setIscTechCategoryDescription] = useState("")
  const [isctechcategorytags, setIscTechCategoryTags] = useState("")
  
  //-------------Dropdown selection handler----------------
  const [iscotechnameselected, setSelected] = useState('')
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value)
  }
 //-------------Dropdown selection handler End----------------

  // const [email, setEmail] = useState("ddhbderher")
  //-------------------------Update Method---------------------------------------------
  useEffect(() => {
    setTechName(value.iscAppTechName)
   })
  useEffect(() => {
   setIscTechCategoryDescription(value.iscAppTechDescription)
   setIscTechCategoryTags(value.iscAppTechTags)
   setSelected(value.iscTechCategoryName)
 }, [value])
 
 // dummy Token 
 const [token, setToken] = useState(
  localStorage.getItem('token') || ''
) 

  const handlePost = (evt) => {
    console.log(value)
    console.log(isctechcategorydescription)
    console.log(isctechcategoryname)
    console.log(isctechcategorytags)
    axios.put("http://172.16.1.240:32454/api/v1/encs-app-tech-master", {
      iscAppTechDescription : isctechcategorydescription,
      iscAppTechName : techName,
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
   const [data, setData] = useState([])

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
  
return (
    <Modal///// 
      isOpen={open}
      toggle={handleUpdateModal}
      className='sidebar-sm'
      // modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleUpdateModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'style={{color:'black'}}>App Tech Category Master</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <FormGroup>
          <Label for='isctechcategoryname'style={{fontSize:'1rem'}}>Name*</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='isctechcategoryname'
            value={techName}             
             onChange={(e) => {
              setTechName(e.target.value)
             }} />
          </InputGroup>
        </FormGroup>
      
        <FormGroup>
          <Label for='isctechcategorytags'style={{fontSize:'1rem'}}>Tags</Label>
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
        <Label for='Ostechname' style={{fontSize:'1rem'}}>Tech Name</Label>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
          <Input type='select' name='select' id='select-basic' 
          onChange={changeSelectOptionHandler}
          value={iscotechnameselected}
          >
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
          <Label for='isctechcategorydescription'style={{fontSize:'1rem'}}>Discription</Label>
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
