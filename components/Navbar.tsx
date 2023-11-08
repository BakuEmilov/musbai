import Link from '@/node_modules/next/link';
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center'>
      <div>Musbai</div>
      <nav className='flex gap-12'>
         <Link href="/">
          На работе
         </Link>
         <Link href="/">
          На дороге
         </Link>
         <Link href="/">
          Веселые
         </Link>
         <Link href="/">
          Грустные
         </Link>
      </nav>
      <div className='flex gap-2'>
        <button className='border rounded py-2 px-6'>Login</button>
        <button className='border rounded py-2 px-6'>Sign in</button>
      </div>
    </header>
  )
}

export default Navbar;