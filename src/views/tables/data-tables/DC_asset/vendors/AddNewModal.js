// ** React Imports
import { useState } from 'react'
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
  const [customerBusinessName, setCustomerBusinessName] = useState("")
  const [customerBusinessType, setCustomerBusinessType] = useState("")
  const [customerProfile, setCustomerProfile] = useState("")
  const [customerProfileFile, setCustomerProfileFile] = useState("")
  const [mimeTypeColumn, setMimeTypeColumn] = useState("")
  const [filenameColumn, setFilenameColumn] = useState("")
  const [customerLocationAddress1, setCustomerLocationAddress1] = useState("")
  const [customerLocationAddress2, setCustomerLocationAddress2] = useState("")
  const [customerLocationAddress3, setCustomerLocationAddress3] = useState("")
  const [customerLocationCity, setCustomerLocationCity] = useState("")
  const [customerCityPincode, setCustomerCityPincode] = useState("")
  const [customerState, setCustomerState] = useState("")
  const [customerCountry, setCustomerCountry] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [customerPrimaryPhone, setCustomerPrimaryPhone] = useState("")
  const [customerSecondaryPhone, setCustomerSecondaryPhone] = useState("")
  const [customerPrimaryEmailDomain, setCustomerPrimaryEmailDomain] = useState("")
  const [customerSecondaryEmailDomain, setCustomerSecondaryEmailDomain] = useState("")
  const [customerUrl, setCustomerUrl] = useState("")
  const [customerLogo, setCustomerLogo] = useState("")
  
  const handlePost = (evt) => {
    console.log(iscoscategorydescription)
    console.log(iscoscategoryname)
    console.log(iscoscategorytags)
    axios.post("http://172.16.1.240:32454/api/v1/encs-os-tech-master", {
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
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessType' style={{fontSize:'1rem'}}>Business Type</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Command size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='businessType' name='businessType' innerRef={register({ required: true })} invalid={errors.businessType && true} placeholder='' onChange={(e) => setIscOsCategoryTags(e.target.value)}/>
            {errors && errors.businessType && <FormFeedback>Tag must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='Ostechname' style={{fontSize:'1rem'}}>Profile</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
              <Layers size={15}/>
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Ostechname' name='Ostechname' innerRef={register({ required: true })} invalid={errors.Ostechname && true} placeholder='' onChange={(e) => setIscTechName(e.target.value)}/>
            {errors && errors.Ostechname && <FormFeedback>Tech Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
      {/* <FormGroup>
          <Label for='setIscOsCategoryDescription' style={{fontSize:'1rem'}}>Description</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Clipboard size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='textarea' rows='3' id='setIscOsCategoryDescription' name='setIscOsCategoryDescription' innerRef={register({ required: true })} invalid={errors.setIscOsCategoryDescription && true} placeholder=''  onChange={(e) => setIscOsCategoryDescription(e.target.value)} />
            {errors && errors.setIscOsCategoryDescription && <FormFeedback>Maximum 500 characters are allowed</FormFeedback>}
          </InputGroup>
        </FormGroup>         */}
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for='businessName' style={{fontSize:'1rem'}}>Business Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Database size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='businessName' name='businessName' innerRef={register({ required: true })} invalid={errors.businessName && true} placeholder='' onChange={(e) => setIscOsCategoryName(e.target.value)} />
            {errors && errors.businessName && <FormFeedback>Name must be at least 10 characters</FormFeedback>}
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