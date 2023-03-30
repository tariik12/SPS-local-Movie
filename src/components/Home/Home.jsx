import React from 'react';

const Main = () => {
    return (
        <div className='row p-5 '>
                <div class="row text-black">
  <div class="card col-sm-8 mb-3 mb-sm-0 bg-dark text-white ">
        <div className=''>
        <img className='w-25 mx-auto'  src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
        </div>
        <h5 class="card-title text-center">The Dark Knight</h5>

        <p class="card-text text-center">Action/Crime</p>
        <div className='d-flex justify-content-evenly'>
            <p>Rating : 5</p>
            <p>View : 100</p>
        </div>
        <button className='btn btn-primary w-75 mx-auto'>Book Now</button>
  </div>

  
  <div class="card col-sm-4  text-center bg-dark text-white">
   <h3>My Card</h3>
   <p>Total Watch : </p>
   <input type="text" name="" id="" />
   <h4>Add Break Time</h4>
   <div className='d-flex mx-auto gap-2 mb-2'>
    <button>15</button><button>32</button><button>25</button>
   </div>
    <input className='mb-2' type="text" name="" id="" />
   <button className='btn btn-primary'>Complete</button>
  </div>
</div>
        </div>
    );
};

export default Main;