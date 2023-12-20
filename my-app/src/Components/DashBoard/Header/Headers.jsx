import React, { useState  } from "react";
import RC_Input from "../../../CommonUtils/RC_Input";
import RC_Button from "../../../CommonUtils/RC_Button";
import "./header.css";
import RC_Modal from "../../../CommonUtils/RC_Modal";
import API_REQ from "../../../Request";
import { useNavigate } from "react-router-dom";
const ModalData =[
  {

    name: "id",
    value: "id",
    label: "id",
    type: "number",
    required: true,
    moto: "We will not  share your data",
  },
  {

    name: "first_name",
    value: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {

    name: "Desig",
    value: "Designation",
    label: "Designation",
    type: "Designation",
    required: true,
  },
]
function Headers({sendDataToParent}) {

  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);
   
  const closeModal = () => {
    setOpen(false);
  };

  const handleAddEmp = () => {
    setOpen(true);
  };


  const handleSumbit =(payload)=>{
    const postEmp_res = `employeeList`;
    console.log(payload)
    API_REQ.LOCAL_.Local_Post(payload , postEmp_res)
    .then((res)=>{
      setOpen(false)
      sendDataToParent([])
      // location.reload()

    })
    .catch((err)=>{
      alert(err)
    })
  }
  const handleChage =()=>{
    console.log('asdakls');
  }
  return (
    <>
      { isOpen &&
        <RC_Modal 
        ModalData={ModalData}
        isOpen={isOpen}
        closeModal={closeModal}
        onchange={handleChage}
        handleSubmit={handleSumbit}
        label={'Add'}
        />
      }
      <h2 className="Heading">Employee List</h2>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <RC_Button
              className={"btn btn-outline-success"}
              type={"button"}
              label={"Logout"}
              onClick={()=>{
                localStorage.removeItem('loggedIN')
                navigate('/')
              }}
            />
          </form>
          <div style={{ cursor: "pointer" }} onClick={handleAddEmp}>
            👤+
          </div>
        </div>
      </nav>
    </>
  );
}
export default Headers;
