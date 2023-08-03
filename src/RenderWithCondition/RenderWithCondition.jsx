import React from 'react'

const RenderWithCondition = () => {
    const isLogin = true;
    const isShowMessage=false;
    const renderLogin = ()=>{
        if(isLogin){
            return(
                <div>
                    <p>Hello Truyền qua Function</p>
                </div>
            )
        }
    }
    return (
        <div>
            <h1>RenderWithCondition</h1>
            { isLogin ? (<div><p>Hello Truyền</p><button>Đăng xuất</button></div>) : (<button>Đăng nhập</button>) }
            { isShowMessage&&<p>Thông báo</p>}
            {renderLogin()}
        </div>
  )
}

export default RenderWithCondition