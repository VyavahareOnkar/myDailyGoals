import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const User = () => {
    const params=useParams();
    const id=params.id

    const navigation=useNavigate();
    const navFunc=()=>{
        navigation("/contact");
    }
    console.log(id);
  return (
    <div className='User'>
      User
      <br />

      <button onClick={navFunc}>Click Me</button>
    </div>
  )
}

export default User
