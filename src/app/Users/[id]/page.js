import React from 'react'
import getUserDetails from '@/app/Api/userDetail';



const page = async({params}) => {
 
  let userdetails = await getUserDetails(params.id)
  console.log("usedetails"+userdetails);
  return (
    <div className='main'>
      <ul style={{backgroundColor:"yellow"}}><li>Username :<span>{userdetails.username}</span> </li>
      <li> Email : <span>{userdetails.email}</span></li>
      <li>City :<span>{userdetails.address.city}</span></li></ul>

    </div>
  )
}

export default page
