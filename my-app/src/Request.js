import axios from "axios";
import STUFF from "./Env";

// Fire Base Opertions

const fire_key = STUFF.API_CRED.FIRE_CRED._FIRE_KEY;
const fire_Head = STUFF.API_CRED.FIRE_CRED._FIRE_HEAD;

function handleFirePost(payload, resource) {
  return axios.post(`${fire_Head}${resource}${fire_key}`, payload);
}


function handleFireGet(resource) {
  console.log("GetReq");
}
function handleFireDelete(resource) {
  console.log("delete Req");
}

// JSON Server Operations

const local_key = ""; // not Required as of now
const local_Head = STUFF.API_CRED.LOCAL_CRED._LOCAL_HEAD;

function handleLocalPost(payload, resource) {
  console.log(resource,'asdasd')
  return axios.post(`${local_Head}${resource}`, payload);
}
function handleLocalGet(resource) {
  return axios.get(`${local_Head}${resource}`)
}
function handleLocalDelete(resource , id) {
  console.log(resource)
  return axios.delete(`${local_Head}${resource}${id}`)
}

function handleLocalPut(resource , id , payload)
{
  return axios.put(`${local_Head}${resource}${id}`,payload)
}
const API_REQ = {
  FIRE_: {
    Fire_Post: handleFirePost,
    Fire_Get: handleFireGet,
    Fire_Del: handleFireDelete,
  },
  LOCAL_: {
    Local_Post: handleLocalPost,
    Local_Get: handleLocalGet,
    Local_Del: handleLocalDelete,
    Local_Put: handleLocalPut,
  },
};
export default API_REQ;
