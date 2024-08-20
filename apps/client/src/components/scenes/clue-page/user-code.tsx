import React from 'react'

interface UserCodeProps {
   id: string;
}

const UserCode = ({id}: UserCodeProps) => {
  return (
    <div className='px-6 py-2 bg-blue-100 text-blue ont-bold rounded-xl'>
      <h1>Hey! {id}</h1>
    </div>
  )
}

export default UserCode