import React from 'react'
import BaiTapMovie from './BaiTapMovie'

const RenderComponentWithMap = () => {
    const products = [
        {
            name: 'Iphone 7+',
            price: 10000000,
            color: 'black',
        },
        {
            name: 'Iphone 8+',
            price: 8000000,
            color: 'pink',
        },
        {
            name: 'Iphone 10+',
            price: 12000000,
            color: 'blue',
        },
    ]
    return (
        <div>
            <h1>RenderComponent</h1>
            <h1>Danh sách sản phẩm</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Màu</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                        1. Bắt buộc có return => UI
                        2. Chỉ đc phép return về 1 thẻ duy nhất
                        3. Phải có thuộc tính 
                        4. Hạn chế sử dụng index làm giá trị của thuộc tính key => chỉ sử dụng khi mảng tĩnh (ko có thêm xóa sửa)
                    */}
                    {
                        products.map((e,i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.color}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2>Bài tập Movie</h2>
            <BaiTapMovie/>
        </div>
    )
}

export default RenderComponentWithMap