import React from 'react'
import baseUrlFnc from '@/utils/baseUrl'

const getusers = async()=>{
    const response = await fetch(`${baseUrlFnc().concat('/api')}`);
    return await response.json()
}
const Member = async() => {
    const users = await getusers()
  return (
    <div>
        {users.map((user)=>(<div key={user.id}><p>{user.name}</p></div>))}
    </div>
  )
}

export default Member