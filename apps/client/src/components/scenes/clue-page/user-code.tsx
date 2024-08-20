import React from 'react'

interface UserCodeProps {
   id: string;
}

const UserCode = ({id}: UserCodeProps) => {
  return (
    <div className='px-6 py-2 bg-white shadow-md text-rock uppercase rounded-xl'>
      <h1>Hey! {id}</h1>
    </div>
  )
}

export default UserCode