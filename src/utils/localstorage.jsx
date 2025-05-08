import React from 'react'
import employeesData from './employeesData.json';
import adminData from './adminData.json';

const employees = employeesData.employees; // array of employees is received
const admin = adminData.admin; // array of admings is received

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
}



export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    // console.log(employees);
    // console.log(admin);
    
    
    return {employees,admin};
    
}