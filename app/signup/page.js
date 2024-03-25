"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Signup(){
  const [password,setPassword] = useState('');
  const [confPassword,setConfPassword] = useState('');
  const [submitButton,setSubmitButton] = useState(true);
  const handleConfPassword = (val) => {
    setConfPassword(val);
    if (password === val){
      setSubmitButton(false)
    }else{
      setSubmitButton(true)
    }
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    let first_name = e.target.first_name.value;
    let last_name = e.target.last_name.value;
    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    try{
      const response = await fetch('https://treasurebits-2e1eb182c3de.herokuapp.com/signup',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({first_name,last_name,username,email,password})
      })
      if (response.ok) {
        const res = await response.json();
        setMessage(res['message'])
      } else {
        const error = await response.json();
        setMessage(error['message'])
      }
    }catch(error){
      setMessage(error['message'])
      console.error('Error during login :',error);
    }
  }

  return <div className='bg-slate-300 w-screen h-screen flex justify-center items-center'>
    <div className="bg-white h-[90%] w-4/5 rounded-lg shadow-lg flex">
      <div className="w-2/5 bg-hero"></div>
      <div className="w-3/5 bg-white items-center h-full p-14">
        <div>
          <div className="my-2">Logo</div>
          <div className="text-2xl font-semibold">Welcome to TreasureBits</div>
          <p className="text-sm text-gray-500 mb-2">Enter details to get unlimited access to data & information.</p>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-row py-1">
              <input type="text" placeholder="First Name" name="first_name" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2 mr-2" />
              <input type="text" placeholder="Last Name" name="last_name" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2" />
            </div>
            <div className="flex flex-col py-1">
              <input type="text" placeholder="Creative username" name="username" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
            </div>
            <div className="flex flex-col py-1">
              <input type="text" placeholder="Enter your mail address" name="email" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
            </div>
            <div className="flex flex-row py-1">
              <input 
                type="password" 
                placeholder="Enter password" 
                name="password" 
                className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2 mr-2"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Confirm password" 
                name="confirm_pass" 
                className={`py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2 focus:outline-none ${password !== confPassword ? 'border-red-500' : ''}`}
                value={confPassword}
                onChange={(e)=>handleConfPassword(e.target.value)}
              />
            </div>
            <div className="py-1">
              <button 
                className="w-full mb-2 text-white bg-blue-700 p-2 rounded-md text-sm disabled:cursor-not-allowed cursor-pointer"
                disabled={submitButton}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <div className="mx-4">
              <p className="text-sm text-gray-500 font-semibold">or sign up with</p>
            </div>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center items-center border-2 border-gray-200 rounded-md p-2 mt-2">
            <FcGoogle /> &nbsp;
            <span>Sign up with google</span>
          </div>
          <div className="flex justify-center items-center mt-2">
            <p>Already have an account?</p>&nbsp;
            <span><Link href="/signin" className="underline text-purple-600">Login Here</Link></span>
          </div>
        </div>
      </div>
    </div>
  </div>
}