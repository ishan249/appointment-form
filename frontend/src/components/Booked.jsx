import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Homepage.css";
function Booked() {
    const location = useLocation();
    const name = location.state.myProp;
  return (
    <div className='flex justify-center'>
        <div className='font-poppins py-8 text-center booked-div'>
            <p className='font-bold text-xl p-2'>✅Successfull</p>
            <p className='px-2'>{name}, You have successfully booked your appointment</p>
        </div>
    </div>
  )
}

export default Booked