import React, { useState } from 'react'
import "./Homepage.css";
import axios from 'axios';
import FirstSvg from "./undraw_booking_re_gw4j.svg";
import { Navigate, useNavigate } from 'react-router-dom';
function Homepage() {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [date,setDate] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
           contact:contact,
            date:date,
          };
          console.log(formData)
          axios({
            method: "POST",
            url: `http://localhost:8000/user/create`,
            headers: {
              "Content-Type": "application/json",
            },
            data: formData,
          })
            .then((res) => {
             navigate("/booked", { state: { myProp: name} });
            })
            .catch((err) => {
              console.log(err);
            });
    }
  return (
    <div className='flex flex-wrap justify-center main-div'>
        <div className='main-div-element'>
            <img src={FirstSvg} className="svgImg" alt="" />
            <p className='font-poppins font-bold text-2xl pt-4'>Book your Appointment Easily</p>
            <p className='font-poppins text-sm py-4'>and never wait for your turn again or waste your time in queue.</p>
        </div>
        <div className='formDiv main-div-element'>
            <form onSubmit={handleSubmit}>
                <label className='font-AlbertSans' htmlFor="">
                    Name
                </label>
                <br />
                <input className='my-2' type="text" onChange={(e)=>setName(e.target.value)} />
                <br />
                <label className='font-AlbertSans' htmlFor="">
                    Email
                </label>
                <br />
                <input className='my-2' type="email" onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label className='font-AlbertSans' htmlFor="">
                    Contact No
                </label>
                <br />
                <input className='my-2' type="number" onChange={(e)=>setContact(e.target.value)} />
                <br />
                <label className='font-AlbertSans' htmlFor="">
                    Date
                </label>
                <br />
                <input className='my-2' type="date" onChange={(e)=>setDate(e.target.value)} />
                <br />
                <div className='submitBtn mt-2 font-poppins'>
                <button className='w-full' type="submit">Book</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Homepage