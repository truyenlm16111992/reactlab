import React from 'react'
import filmList from './data.json'

const BaiTapMovie = () => {
    console.log(filmList);
    return (
        <div>
            <div className='row'>
                {
                    filmList.map(e => (
                        <div className='col-3 mt-3' key={e.maPhim}>
                            <div className='card'>
                                <img
                                    src={e.hinhAnh}
                                    style={{ height: 450 }}
                                />
                                <div className='card-body'>
                                    <p className='fw-bold'>{e.tenPhim}</p>
                                    <p className='mt-3'>{e.moTa.substring(0, 50)}...</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BaiTapMovie