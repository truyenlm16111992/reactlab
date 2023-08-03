import React from 'react'
import './style.css' //Sẽ áp dụng toàn component trong dự án  =>Cách 1
import style from './style.module.css' //Cách 2 sẽ không bị ảnh hưởng toàn dư án
import './main.scss'
import stylescss from './main.module.scss'
const StyleComponent = () => {
  return (
    <div>
        <h1 className='test'>Test A</h1>
        <h2 className={style.test5}>Test B</h2>
        <h2 className={`${style.test2} ${style.test4} ${style["test-test"]}`}>Test B</h2>
        <h2 style={{fontSize:"50px"}}>Lê Minh Truyền</h2>
        <h2 className={stylescss.truyen}>Lê Minh Triết</h2>
    </div>
  )
}

export default StyleComponent