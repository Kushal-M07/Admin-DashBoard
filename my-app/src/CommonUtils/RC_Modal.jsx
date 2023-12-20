import { Modal } from "bootstrap";
import React from "react";
import RC_Button from "./RC_Button";
import RC_Input from "./RC_Input";
import { useState } from "react";

function RC_Modal({
  ModalData,
  isOpen,
  closeModal,
  onChange,
  handleSubmit,
  label,
  itemData
}) {
  const [formData, setFormdata] = useState(itemData ? itemData : {
    id: "",
    first_name: "",
    Desig: "",
  });
  const formCollector = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setFormdata({
      ...formData,
      [name]:value,
    });
  };
  return (
    <>
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                title{" "}
              </h1>
              <button
                type={"button"}
                className={"btn-close"}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form className="mb-3" onChange={formCollector} >
                {ModalData.map((mdata) => (
                  <div key={mdata.name}>
                    <label htmlFor={mdata.name} className="form-label">
                      {mdata.label}
                    </label>
                    <RC_Input
                      id={mdata.name}
                      name={mdata.name}
                      type={mdata.type}
                      value={formData[mdata.name]}
                      onChange={onChange}
                      Class={"form-control"}
                      required={mdata.required}
                    />
                    <div id="emailHelp" className="form-text">
                      {mdata.moto}
                    </div>
                  </div>
                ))}
              </form>
            </div>
            <div className="modal-footer">
              <RC_Button
                type={"button"}
                className={"btn btn-secondary"}
                data-bs-dismiss="modal"
                label={"Cancel"}
                onClick={closeModal}
              />
              <RC_Button
                type={"button"}
                className={"btn btn-secondary"}
                data-bs-dismiss="modal"
                label={label}
                onClick={() => handleSubmit && handleSubmit(formData)}
              ></RC_Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RC_Modal;

/*
function RC_Modal({index , item , isOpen ,closeModal}) {
  console.log(index)
  console.log(item)
  return (
    <>
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{display: isOpen ? "block" : "none"}} >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{Modal.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{closeModal()}}></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{closeModal()}}>Close</button>
        <button type="button" className="btn btn-primary">{Modal.changes}</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}


*/
