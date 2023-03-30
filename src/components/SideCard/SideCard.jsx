import React, { useEffect, useState } from 'react';

const SideCard = ({watchTime}) => {
useEffect(()=>{
const getWatchTimeStorage = localStorage.getItem("watchTime")
console.log(getWatchTimeStorage)
},[])

    return (
        <>
            <div className='  text-center bg-dark text-white p-5 border position-sticky top-0 border-danger'>
   <h3>My Card</h3>
   <p>Total Watch : </p>
   <input type='text' name='' id=''  />
   <h4>Add Break Time</h4>
   <div className='d-flex mx-auto gap-2 mb-2'>
    <button>15</button><button>32</button><button>25</button>
   </div>
    <input className='mb-2' type='text' name='' id='' />
   <button className='btn btn-primary'>Complete</button>
  </div>
        </>
    );
};

export default SideCard;