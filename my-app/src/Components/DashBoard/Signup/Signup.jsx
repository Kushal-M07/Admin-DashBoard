import React ,{useState} from 'react'
import "./Signup.css";
import API_REQ from "../../../Request";
import RC_Forms from "../../../CommonUtils/RC_Forms";
import { useNavigate } from "react-router-dom";

const field = [
  {

    name: "email",
    value: "email",
    label: "Email",
    type: "email",
    required: true,
    moto: "We will not  share your data",
  },
  {

    name: "password",
    label: "Password",
    type: "password",
    required: true
  },
  {
    name: "Name",
    label: "Name",
    type: "text",
    required: true
  },
];

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  }); 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.email != "" && formData.password != "") {
      console.log("Form submitted:", formData);

      // API call
      const signupResource = `signUp?key=`;
      API_REQ.FIRE_.Fire_Post(formData , signupResource)
        .then((resp) => {
          console.log(resp);
          navigate('/')
          
        })
        .catch((err) => {
          alert(err)
        });
    } else {
      console.error("Add Some data");
    }
  };

  return (
    <>
      <div className="loggin_card">
        <RC_Forms
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          fields={field}
        />
      </div>
    </>
  );
}

export default Signup