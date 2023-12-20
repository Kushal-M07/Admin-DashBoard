import React from "react";
import './RC_Colors.css'
const btn_Style = {
  width:'auto',
  height:'30px',
  backgroundColor: 'var(--primary-darker)',
  color:'white',
  margin:'2px',
  border:'0px 0px 2px 0px',
  borderRadius:'4px'
};


function RC_Button({ label, onClick , type  , className }) {
  return (
    <>
      <button onClick={onClick} style={btn_Style} type={type}>
        {label}
      </button>
    </>
  );
}

export default RC_Button;
