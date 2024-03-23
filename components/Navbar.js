import Link from 'next/link'

function Navbar() {
  return (
    <nav className="h-16 w-full fixed">
      <div className='flex justify-between bg-white text-purple py-3 px-5 bg-opacity-75'>
        <div className="flex items-center justify-between w-[60%]">
          <Link href="/" className='px-5'>
            <p className="text-xl font-bold">LOGO</p>
          </Link>
          <div className="hidden md:flex items-center ml-4 px-5 sm:ml-16">
            <Link href="/">
              <p className="px-3 py-2 text-md text-gray-500 active:text-black hover:text-black">Home</p>
            </Link>
            <Link href="/services">
              <p className="px-3 py-2 text-md text-gray-500 active:text-black hover:text-black">Services</p>
            </Link>
            <Link href="/contact">
              <p className="px-3 py-2 text-md text-gray-500 active:text-black hover:text-black">Contact us</p>
            </Link>
            <Link href="/projects">
              <p className="px-3 py-2 text-md text-gray-500 active:text-black hover:text-black">Our projects</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/3  border-solid">
          <Link href="/signin" className='flex-end'>
            <p className="px-3 mx-5 py-1 rounded-full text-purple-600 hover:bg-purple-600 hover:text-white bg-white">Sign in</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
