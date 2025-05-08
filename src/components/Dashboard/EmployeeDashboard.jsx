import React from 'react'
import Header from '../Others/Header'
import TaskNumbers from '../Others/TaskNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({handleLogOut ,data}) => {
  // console.log("Employee Dashboard",data);
   
  return (
    <div className='flex flex-col p-10 bg-[#1c1c1c] h-screen w-screen'>
        <Header handleLogOut={handleLogOut} data = {data}></Header>
        <TaskNumbers data = {data}></TaskNumbers>
        <TaskList data = {data}></TaskList>
    </div>
  )
}

export default EmployeeDashboard