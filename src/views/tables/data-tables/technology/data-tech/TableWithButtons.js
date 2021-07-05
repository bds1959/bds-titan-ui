// ** React Imports
import { Fragment, useState, useEffect, forwardRef } from "react"

// ** Table Data & Columns
import ExpandableTable, { } from "./data"

// ** Add New Modal Component
import AddNewModal from "./AddNewModal"

// ** Update Modal Component
import UpdateModal from "./UpdateModal"
// ** Add New Modal Component
import SettingButton from "./SettingButton"

// ** Third Party Component
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import {
  ChevronDown,
  Share,
  Printer,
  FileText,
  File,
  Grid,
  Copy,
  Plus,
  MoreVertical,
  Edit,
  Trash,
  DownloadCloud
} from "react-feather"
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col
} from "reactstrap"

import axios from 'axios'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input"
      ref={ref}
      {...rest}
    />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  // ** States
  const [modal, setModal] = useState(false)
  const [update, setUpdate] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [data, setData] = useState([])
  const [isctechcategoryname, setIscTechCategoryName] = useState([])
  
  const [input, setInput] = useState([])


  // ** Function to handle New Modal toggle
  const handleModal = () => setModal(!modal)

  // ** Function to handle Edit Modal toggle
  const handleUpdateModal = () => setUpdate(!update)

  // dummy Token 
const [token, setToken] = useState(
  localStorage.getItem('token') || ''
)
  
//-----------------------------------Fetching----------------------------------------------------------------
useEffect(() => { 
  // if (isLoaded === false) {
    axios.get(`http://172.16.1.240:32454/api/v1/encs-data-tech-master`,
    {
      headers: {               
        "Content-Type": "application/json",
        "access-token": `${token}`
      }
    }
  )
  .then((response) => {
    // Handle success.
    console.log("Connection established.Data is fetching!")
   //  setIsLoaded(true)
    setData(response.data.data)
    console.log(response.data.data)
    })
    .catch((error) => {
      console.error(error)
 })
}, [])
 //-----------------------------------------Fetching ends------------------------------------------------------------

 //-----------------------re fetching data--------------------------
const fetchData = () => {
  axios.get(`http://172.16.1.240:32454/api/v1/encs-data-tech-master`,
  {
    headers: {               
      "Content-Type": "application/json",
      "access-token": `${token}`
    }
  }
)
.then((response) => {
  // Handle success.
  console.log("Connection established.Data is fetching!")
 //  setIsLoaded(true)
  setData(response.data.data)
  console.log(response.data.data)
  })
  .catch((error) => {
    console.error(error)
})
}
//-----------------------re fetching data end--------------------------

//-----------------------------------------Delete method----------------------------------------------------------------------
 const removeData = (iscDataTechName) => {
  console.log(iscDataTechName)
  const deletevar = iscDataTechName
  if (confirm("Are you sure you want to delete this?")) {
  axios.delete(`http://172.16.1.240:32454/api/v1/encs-data-tech-master`,
  {
    headers: {               
      "Content-Type": "application/json",
      "access-token": `${token}`
    },
    data : { iscDataTechName:deletevar }
  }
  ).then((response) => {
     fetchData()
  })
}
}
//-----------------------------------------Delete method End----------------------------------------------------------------------

 const columns = [
 
  {
    name: 'Name',
    selector: 'email',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate '>
          <span className='d-block font-weight-bold text-truncate'>{row.iscDataTechName}</span>
          {/* <small>{row.post}</small> */}
        </div>
      </div>
    )
  },
  {
    name: 'Tag',
    selector: 'salary',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate '>
          <span className='d-block font-weight-bold text-truncate'>{row.iscDataTechTags}</span>
          {/* <small>{row.post}</small> */}
        </div>
      </div>
    )
  },
  {
    name: 'Tech Name',
    selector: 'salary',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate '>
          <span className='d-block font-weight-bold text-truncate'>{row.iscTechCategoryName}</span>
          {/* <small>{row.post}</small> */}
        </div>
      </div>
    )
  },
  {
    name: 'Description',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'  style={{width:'250px'}}>{row.iscDataTechDescription}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Action',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
      
              <div tag='a' className='w-100'
              onClick={() => {
                handleUpdateModal()
                setIscTechCategoryName(row)
                console.log(isctechcategoryname)
              }}>
                <Edit size={15} />
              </div>
             
              <div tag='a'  className='w-100'  
              onClick={() => removeData(row.iscDataTechName)}>
                <Trash size={15} />
              </div>
  
          {/* <Edit size={15} /> */}
        </div>
      )
    }
  }
]

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: "Current", color: "light-primary" },
      2: { title: "Professional", color: "light-success" },
      3: { title: "Rejected", color: "light-danger" },
      4: { title: "Resigned", color: "light-warning" },
      5: { title: "Applied", color: "light-info" }
    }

    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title
            .toLowerCase()
            .startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={
        searchValue.length ? filteredData.length / 7 : data.length / 7 || 1
      }
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextLinkClassName="page-link"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      previousLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
    />
  )

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ","
    const lineDelimiter = "\n"
    const keys = Object.keys(data[0])

    result = ""
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach((item) => {
      let ctr = 0
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement("a")
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = "export.csv"

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csvcharset=utf-8,${csv}`
    }

    link.setAttribute("href", encodeURI(csv))
    link.setAttribute("download", filename)
    link.click()
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4" style={{ color: 'white'}}>Data Tech Category Master</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <UncontrolledButtonDropdown>
            <DropdownToggle className="ml-2" color="primary" style={{borderTopRightRadius:'5px',
    borderBottomRightRadius: '5px'}}>
              <DownloadCloud size={15}/>
                {/* <span className='align-middle ml-50'>Export</span> */}
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem className="w-100">
                  <Printer size={15} />
                  <span className="align-middle ml-50">Print</span>
                </DropdownItem> */}
                <DropdownItem
                  className="w-100"
                  onClick={() => downloadCSV(data)}
                >
                  <FileText size={15} />
                  <span className="align-middle ml-50">CSV</span>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            {/* ADD Button */}
            <Button className="ml-2 mr-2" color="primary" onClick={handleModal}>
              <Plus size={15} />
            </Button>

            {/* Setting Compeonent */}
            <SettingButton />
          </div>
        </CardHeader>
        {/* <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row> */}
        <DataTable
          noHeader
          pagination
          // selectableRows
          expandableRows
          columns={columns}
          expandOnRowClicked
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={<ExpandableTable />}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          // selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} fetchData={fetchData} />
      <UpdateModal open={update} handleUpdateModal={handleUpdateModal} value={isctechcategoryname} fetchData={fetchData}/>
    </Fragment>
  )
}

export default DataTableWithButtons
