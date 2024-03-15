import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Signup(){
  return <div className='bg-slate-300 w-screen h-screen flex justify-center items-center'>
    <div className="bg-white h-[90%] w-4/5 rounded-lg shadow-lg flex">
      <div className="w-2/5 bg-hero"></div>
      <div className="w-3/5 bg-white items-center h-full px-14 py-10">
        <div>
          <div className="my-2">Logo</div>
          <div className="text-2xl font-semibold">Welcome to TreasureBits</div>
          <p className="text-sm text-gray-500 mb-2">Enter details to get unlimited access to data & information.</p>
          <div className="flex flex-row py-1">
            <input type="text" placeholder="First Name" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2 mr-2" />
            <input type="text" placeholder="Last Name" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2" />
          </div>
          <div className="flex flex-col py-1">
            <input type="text" placeholder="Creative username" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
          </div>
          <div className="flex flex-col py-1">
            <input type="text" placeholder="Enter your mail address" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
          </div>
          <div className="flex flex-row py-1">
            <input type="password" placeholder="Enter password" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2 mr-2" />
            <input type="password" placeholder="Confirm password" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg w-1/2" />
          </div>
          <div className="py-1">
            <button className="w-full mb-2 text-white bg-blue-700 p-2 rounded-md text-sm">Sign Up</button>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-1/3 h-px bg-gray-300"></div>
            <div class="mx-4">
              <p class="text-sm text-gray-500 font-semibold">or sign up with</p>
            </div>
            <div class="w-1/3 h-px bg-gray-300"></div>
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