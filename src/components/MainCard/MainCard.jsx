import React from 'react';

const MainCard = ({singleData,addWatchTime}) => {
    const {category,description,imdbRating,movieName,poster,watchTime} = singleData
    return (
        <>
            <div className='card col-sm-8 mb-3 mb-sm-0 bg-dark text-white p-5'>
        <div  className='d-flex justify-content-center'>
        <img className='w-25 '  src={poster} alt='' />
        </div>
        <h5 className='card-title text-center'>{movieName}</h5>

        <p className='card-text text-center'>Action/Crime</p>
        <div className='d-flex justify-content-evenly'>
            <p>watchTime:{watchTime}</p>
            <p>Rating : {imdbRating}</p>
        </div>
        <button onClick={()=>addWatchTime(watchTime)} className='btn btn-primary w-75 mx-auto'>Book Now</button>
  </div>
        </>
    );
};

export default MainCard;