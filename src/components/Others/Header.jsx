import React from 'react'

const Header = ({data, handleLogOut}) => {

  // console.log();
  
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl '>Hello, <br /> <span className='font-semibold text-3xl'>{data.firstName}👋</span></h1>
        <button onClick={()=>{handleLogOut()}} className='px-4 py-1 rounded bg-red-600 active:bg-red-800 active:border flex items-center gap-2 '><img className='invert h-4' src="src\assets\logout.svg" alt="LogOut" />Log out</button>
    </div>
 )
 +
}

export default Header
 