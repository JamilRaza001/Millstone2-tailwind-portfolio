import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <h2 className='text-3xl font-bold text-green-500 hover:text-purple-500'>M.Jamil Raza Attari</h2>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-[20px] font-bold text-white hover:text-green-300">Home</Link>
      <Link href="/about" className="mr-5 text-[20px] font-bold text-white hover:text-green-300">About</Link>
      <Link href="/projects" className="mr-5 text-[20px] font-bold text-white hover:text-green-300">Projects</Link>
      <Link href="/contact" className="mr-5 text-[20px] font-bold text-white hover:text-green-300">Contact</Link>
    </nav>
    <button className="inline-flex font-bold text-white items-center border-2 border-green-500 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
      Download CV
    </button>
  </div>
</header>

  )
}

export default Navbar
