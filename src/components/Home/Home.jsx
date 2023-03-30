import React, { useEffect, useState } from 'react';
import MainCard from '../MainCard/MainCard';
import SideCard from '../SideCard/SideCard';

const Home = () => {

    const [data, setData] = useState([])
    const [watchTime, setWatchTime] =useState("")

    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data =>setData(data))
    },[])

    const addWatchTime = (time)=>{
        const previousWatchTime  = JSON.parse(localStorage.getItem('watchTime'))
        if(previousWatchTime){
        const sum = previousWatchTime + time
        localStorage.setItem("watchTime",sum)
        setWatchTime(sum)
        }
        else{
            localStorage.setItem("watchTime",time)
            setWatchTime(time)
        }
    }
    return (

    <div className=' d-flex text-black p-5'>
       <div>
       {
            data.map((singleData,index) => <MainCard 
                singleData ={singleData}
                addWatchTime ={addWatchTime}
                key ={index}
                />)
        }
       </div>
        <div className='border border-white'>
        <SideCard 
        watchTime ={watchTime}
        />
        </div>

    </div>
 

    );
};

export default Home;