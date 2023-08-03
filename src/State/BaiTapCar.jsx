import React, { useState } from 'react'

const BaiTapCar = () => {
    
    const [img,setImg]=useState("./images/car/black-car.jpg");
    const handlCar=(color)=> setImg(`./images/car/${color}-car.jpg`);
    // currying func
    const handleImg = (color) =>()=>setImg(`./images/car/${color}-car.jpg`);
    console.log("Render BT Car");
    // closure function
    return (
        <div className='mt-5'>
            <h2>Bài tập car</h2>
            <div className='row'>
                <div className='col-8'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-4 d-flex flex-column' style={{gap:20}}>
                    <button className='btn btn-dark' onClick={handleImg("black")}>Black</button>
                    <button className='btn btn-danger' onClick={handleImg("red")}>Red</button>
                    <button className='btn btn-secondary' onClick={handleImg("silver")}>Silver</button>
                    <button className='btn text-white' style={{ background: 'grey' }} onClick={handleImg("steel")}>Steel</button>
                </div>
            </div>
        </div>
    )
}

export default BaiTapCar