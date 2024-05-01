import React from 'react'
import getUserData from '../Api/users'
import Link from 'next/link'
import '../globals.css'
const Users = async() => {
    let userdata = await  getUserData()
   
  return (
    < >
        {userdata.map((data, i) => (
     <Link href={`/Users/${data.id}`} key={i}>    
 <div className='main' >
    <ul className='bg-yellow-500'><li> Id : {data.id}</li>
 <li>Name : {data.name}</li></ul>
 </div>


 </Link>  
    
        ))}
      </>
  )
}

export default Users
