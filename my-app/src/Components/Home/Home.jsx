import React, { useState, useEffect , useCallback  } from "react";
import "../Home/home.css";
import Headers from "../DashBoard/Header/Headers";
import API_REQ from "../../Request";
import RC_Modal from "../../CommonUtils/RC_Modal";
import {useNavigate , useParams} from 'react-router-dom';

import RC_Viewer from "../../CommonUtils/RC_Viewer";
// import RC_Modal from "../../CommonUtils/RC_Modal";


let ModalData =[
  {

    name: "id",
    label: "id",
    type: "number",
    required: true,
    moto: "We will not  share your data",
  },
  {

    name: "first_name",
    label: "Name",
    type: "text",
    required: true,
  },
  {

    name: "Desig",
    label: "Designation",
    type: "Designation",
    required: true,
  },
]

function Home() {
  const navigate = useNavigate();

  // states

  const [items, setItems] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const [itemData, setItemData] = useState(null)

  // Operations
const  handleDelete =(id)=>{
  console.log(id)

  const deletRes = 'employeeList/'

  API_REQ.LOCAL_.Local_Del(deletRes ,id).catch((err)=>{
    alert(err)
    
  })
  handlegetRequest()
  }

  const handleView =(id)=>{
    navigate(`/Employee/${id}`);
  }
  const handleEdit =(index)=>{
    console.log('hurrah')
    console.log(index)
    setOpen(true)
    setItemData(index)
    console.log(index.id)
   
    
  }

  const closeModal = () => {
    setOpen(false);

  }
  const handleChange =(e) => {
    // history.push()
  }
  const handlegetRequest =()=>
  {
    const getEmp = `employeeList`;
    API_REQ.LOCAL_.Local_Get(getEmp).then((res) => {
      setItems(res.data);
    });
  }

  const handleSubmit =(index) =>{
    const PutRequest =`employeeList/`
    API_REQ.LOCAL_.Local_Put(PutRequest ,index.id , index).then((res)=>{
      setOpen(false)
      handlegetRequest()
    }).catch((err)=>{
      alert(err)
      console.log(err)
    })
    
  }

  const receiveDataFromChild = () => {
    console.log('ere')
  };
  const receiveDataFromChildCallback = useCallback(receiveDataFromChild, []);
  // Getting Data from the JSON Local Server
  useEffect(() => {

    if(items.length !== 0) {
      return;
    }

    const getEmp = `employeeList`;
    API_REQ.LOCAL_.Local_Get(getEmp).then((res) => {
      setItems(res.data);

    });

    console.count()
  },[items, handleSubmit]);

  return (
    <>
    {
      isOpen && <RC_Modal
      ModalData={ModalData}
      isOpen={isOpen}
      closeModal={closeModal}
      onChange={handleChange}
      label={'Edit'}
      itemData={itemData}
      handleSubmit={handleSubmit}

      />
    }
      <Headers sendDataToParent={setItems}  />
      {/* {isOpen && (
        <RC_Modal
          isOpen={isOpen}
          closeModal={closeModal}
          handlesaveChange={handlesaveChange}
          title={'asd'}
          changes={changes}
        />
      )} */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.Desig}</td>
              <td style={{ cursor: "pointer" }}>
                <span onClick={() =>{handleEdit(item)}}>📝</span>
                <span onClick={() => handleDelete(item.id)}>🗑️</span>
                <span onClick={()=>{ handleView(item.id)}}>👁️‍🗨️</span>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default Home;
