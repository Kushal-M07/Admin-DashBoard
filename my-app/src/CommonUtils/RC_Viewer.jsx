import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_REQ from '../Request'


function RC_Viewer() {
  const params = useParams()
  console.log(params)
  const [ data , setData] = useState('No Information')
  useEffect(()=>{
    const getEmp = `employeeList/${params.id}`
    API_REQ.LOCAL_.Local_Get(getEmp).then((res)=>{

      setData(res.data)
    })
  },[])
  return(
<>
<h1>Name :- {data?.["first_name"]}</h1>
<h2> id: {data?.['id']} </h2>
<h2> id: {data?.['Desig']} </h2>
<p>
  the Candiate is {data?.["first_name"]} whose ID is  {data?.['id']} working as {data?.['Desig']}, 
</p>
</>
  )
}

export default RC_Viewer 