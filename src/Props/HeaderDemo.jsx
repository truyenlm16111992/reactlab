import React from 'react'

const HeaderDemo = (props) => {
    console.log(props);
    // 1. Prop thay đổi => component render lại => Chưa hiểu
    // 2. Không thể thay đổi giá trị của props
    // 3. 

  return (
    <div>
        <h1 className='text-center text-white p-3 fs-3' style={{background:props.bg}}>Header</h1>
    </div>
  )
}

export default HeaderDemo