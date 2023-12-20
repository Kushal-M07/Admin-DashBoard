import React, { useState, useEffect } from "react";
import "./Loggin.css";
import API_REQ from "../../../Request";
import RC_Forms from "../../../CommonUtils/RC_Forms";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    required: true,
  },
];

function Loggin() {
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIN");
    console.log(loggedIn, "asdasdasd");
    if (loggedIn) {
      navigate("/home");
    }
  }, []);

  const navigate = useNavigate();
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
    e.preventDefault();
    if (formData.email != "" && formData.password != "") {
      console.log("Form submitted:", formData);
      // API call
      const signinResource = `signInWithPassword?key=`;

      API_REQ.FIRE_.Fire_Post(formData, signinResource)
        .then((resp) => {
          navigate("/home");
          console.log(resp);
          localStorage.setItem("loggedIN", "true");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Field Missing");
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
      <div className="mb-3 form-check d-flex justify-content-center my-4 ">
        Need Account?
        {/* <Link to={}> */}
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="accnt"
        >
          Create Account
        </div>
        {/* </Link> */}
      </div>
    </>
  );
}

export default Loggin;
