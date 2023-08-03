import React from 'react'

const BindingData = () => {
    const name="Truyền";
    const sum =(a,b)=>a+b;
    const student = {
        name: "ABC",
        age:18
    }
  return (
    <div className='container mt-5'>
        <h1>BindingData</h1>
        <p>{name}</p>
        <p>{sum(10,20)}</p>
        <p>{student.name}</p>
    </div>
  )
}

export default BindingData