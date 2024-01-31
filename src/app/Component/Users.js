import React from 'react'
import getUserData from '../Api/users'
import Link from 'next/link'
const Users = async() => {
    let userdata = await  getUserData()
   
  return (
    <div  >
        {userdata.map((data, i) => (
     <Link href={`/Users/${data.id}`} >    
 <div key={i} style={{margin:"20px",fontFamily:"cursive"}} >
    <ul className='bg-yellow-500 '><li> Id : {data.id}</li>
 <li>Name : {data.name}</li></ul>
 </div>


 </Link>  
    
        ))}
      </div>
  )
}

export default Users
