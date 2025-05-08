import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
    console.log(props);
    
    return (
        <div className='h-fit w-full p-10'>
            <Header data = {props.data} handleLogOut={props.handleLogOut}></Header>
            <CreateTask></CreateTask>
            <AllTask></AllTask>
        </div>
    )
}

export default AdminDashboard