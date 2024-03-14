import Link from "next/link";

export default function Page(){
  return <div className='bg-slate-300 w-screen h-screen flex justify-center items-center'>
    <div className="bg-white h-[90%] w-4/5 bg-opacity-25 rounded-lg shadow-lg flex">
      <div className="w-1/2 bg-white items-center h-full p-10">
        <div className="my-5">Logo</div>
        <div className="text-2xl font-semibold">Welcome Back!</div>
        <p className="text-sm text-gray-500 mb-4">Enter to get unlimited access to data & information.</p>
        <div className="flex flex-col w-4/5">
          <label className="text-black leading-8">Email <span className="text-red-600">*</span></label>
          <input type="text" placeholder="Enter your mail address" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
        </div>
        <div className="flex flex-col w-4/5">
          <label className="text-black leading-8">Password <span className="text-red-600">*</span></label>
          <input type="password" placeholder="Enter password" className="py-2 px-3 text-sm border-gray-300 border-2 rounded-lg" />
        </div>
        <div className="flex justify-between w-4/5 py-2">
          <div className="flex justify-center items-center">
            <input type="checkbox" />&nbsp; Remember Me
          </div>
          <div>
            <Link href="#" className="text-blue-700">Forget Password?</Link>
          </div>
        </div>
        <div>
          <button className="w-4/5 text-white bg-blue-700 p-2 rounded-md text-sm">Log In</button>
        </div>
      </div>
      <div className="w-1/2 bg-hero"></div>
    </div>
  </div>
}