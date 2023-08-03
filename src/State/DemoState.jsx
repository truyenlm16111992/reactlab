import React, { useState } from 'react'

const DemoState = () => {
  //let isLogin = true;
  // 1.Mọi thứ cần thay đổi trên UI => Đưa vào State
  // 2.Để tạo 1 state trong function component => gọi hàm (hook) useState 
  // 3.useState trả về 1 mảng gồm 2 phần tử:
  // + Phần tử thứ 0: state
  // + Phần tử thứ 1: 1 hàm setState => thay đổi giá trị của state
  // 4. Khi state được thay đổi = hàm setState => Compunent sẽ được render lại với giá trị state mới 
  // 5. Tham số truyền vào khi gọi hooks useState
  // => Gọi là giá trị mặc định của state khi component đượcrendẻ lần đầu tiên
  // 6. Chỉ nên thay đổi giá trị của state thông qua hàm setState
  // 7. Trong 1 component không giới hạn số lượng state được tạo bằng hooks useState
  // 8. Tham số của useState có thể là 1 function => giá trị trả về của function là giá trị mặc định của state
  // => function này chỉ được gọi duy nhất 1 lần khi component render lần đầu tiên

  const [isLogin,setIsLogin] = useState(true);
  const [number,setNumber]=useState(1);
  const handleLogin = (Login) => {
    // isLogin = Login;
    
    // console.log("isLogin", isLogin);
    setIsLogin(Login);
  }
  console.log("Render State");
  return (
    <div className='container mt-5'>
      <h1>Demo State</h1>
      {
        isLogin ? (
          <div>
            Hello Truyền <button className='btn btn-danger' onClick={() => {
              handleLogin(false);
            }}>Đăng xuất</button>
          </div>
        ) : (
          <button className='btn btn success' onClick={() => {
            handleLogin(true);
          }}>Đăng nhập</button>
        )
      }
      <h2>Example</h2>
      <p>Number: {number}</p>
      <div>
          <button onClick={()=>{
            setNumber(number+1);
          }}>+ Number</button>
          <button onClick={()=>{
            setNumber(number-1);
          }}>- Number</button>
      </div>
    </div>
  )
}

export default DemoState