import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-white text-purple h-16 flex justify-between">
      <div className="flex items-center">
        <Link href="/" className='px-5'>
          <p className="text-xl font-bold">LOGO</p>
        </Link>
        <div className="hidden md:flex ml-4 px-5 sm:ml-16">
          <Link href="/">
            <p className="px-3 py-2 text-sm text-gray-500 active:text-black hover:text-black">Home</p>
          </Link>
          <Link href="/services">
            <p className="px-3 py-2 text-sm text-gray-500 active:text-black hover:text-black">Services</p>
          </Link>
          <Link href="/contact">
            <p className="px-3 py-2 text-sm text-gray-500 active:text-black hover:text-black">Contact us</p>
          </Link>
          <Link href="/projects">
            <p className="px-3 py-2 text-sm text-gray-500 active:text-black hover:text-black">Our projects</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center w-1/3 bg-gradient-to-r from-[#36d5c1] to-[#6379a4] border-solid clip-polygon">
        <Link href="/signin" className='flex-end'>
          <p className="px-3 mx-5 py-1 rounded-full text-purple-600 hover:bg-[#1e2838] hover:text-white bg-white">Sign in</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
