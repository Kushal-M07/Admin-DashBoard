import React, { useState } from "react";
import RC_Input from "./RC_Input";
import RC_Button from "./RC_Button";

function RC_Forms({ fields, onSubmit, onChange }) {

  const [formData, setFormData] = useState({});

  return (
    <>
      <form onSubmit={onSubmit}>
        {fields.map((field) =>
        (

            <><div key={field.name} className="mb-3">
                <label htmlFor={field.name} className="form-label">
                    {field.label}
                </label>
                <RC_Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    onChange={onChange}
                    Class={"form-control"}
                    required={field.required} />
                      <div id="emailHelp" className="form-text">
                      {field.moto}                    
                
                </div>
            </div>
            </>
        ))}
        <RC_Button type={"submit"} label={"Submit"} /> 
      </form>
    </>
  );
}

export default RC_Forms;
