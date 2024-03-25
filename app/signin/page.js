"use client"
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Signin(){
  const handleSignIn = async(e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    try{
      const response = await fetch('https://treasurebits-2e1eb182c3de.herokuapp.com/login',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({email,password})
      })
      if (response.ok) {
        const res = await response.json();
        // setMessage(res['message'])
        console.log(res)
      } else {
        const error = await response.json();
        // setMessage(error['message'])
        console.log(error)
      }
    }catch(error){
      // setMessage(error['message'])
      console.log(error)
      console.error('Error during login :',error);
    }
  }
  return <div className='bg-slate-300 w-screen h-screen flex justify-center items-center'>
    <div className="bg-white h-[90%] w-4/5 bg-opacity-25 rounded-lg shadow-lg flex">
      <div className="w-2/5 bg-white items-center h-full p-5">
        <div className="p-5">
          <div className="my-5">Logo</div>
          <div className="text-2xl font-semibold">Welcome Back!</div>
          <p className="text-sm text-gray-500 mb-4">Enter details to unleash unlimited knowledge.</p>
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col">
              <label className="text-black leading-8">Email <span className="text-red-600">*</span></label>
              <input type="text" name="email" placeholder="Enter your mail address" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" required />
            </div>
            <div className="flex flex-col">
              <label className="text-black leading-8">Password <span className="text-red-600">*</span></label>
              <input type="password" name="password" placeholder="Enter password" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" required />
            </div>
            <div className="flex justify-between py-2 text-sm">
              <div className="flex justify-center items-center">
                <input type="checkbox" />&nbsp; Remember Me
              </div>
              <div>
                <Link href="#" className="text-blue-700">Forget Password?</Link>
              </div>
            </div>
            <div>
              <button className="w-full mb-2 text-white bg-blue-700 p-2 rounded-md text-sm">Log In</button>
            </div>
          </form>
          <div className="flex items-center">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <div className="mx-4">
              <p className="text-sm text-nowrap text-gray-500 font-semibold">or log in with</p>
            </div>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center items-center border-2 border-gray-200 rounded-md p-2 mt-2">
            <FcGoogle /> &nbsp;
            <span>Sign in with google</span>
          </div>
          <div className="flex justify-center items-center mt-2">
            <p>Don&apos;t have an account?</p>&nbsp;
            <span><Link href="/signup" className="underline text-purple-600">Register Here</Link></span>
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-hero"></div>
    </div>
  </div>
}