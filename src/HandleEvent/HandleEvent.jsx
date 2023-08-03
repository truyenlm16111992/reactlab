import React from 'react'

const HandleEvent = () => {
    const msg = ()=>{
        alert("Hello");
    }
    const msg2 = (event, msg)=>{
        console.log(event.currentTarget);
    }
  return (
    <div>
        <h1>HandleEvent</h1>
        <button className='btn btn-outline-success mt-3' onClick={msg}>Test</button>
        <button className='btn btn-outline-success mt-3' onClick={()=>{
            alert("K tạo function");
        }}>Test</button>
        <button className='btn btn-outline-success mt-3' onClick={(event)=>{msg2(event,"Truyền")}}>
            <span>Test1</span>
            <span>Test2</span>
        </button>
    </div>
  )
}

export default HandleEvent

// useRef