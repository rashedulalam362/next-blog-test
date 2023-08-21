import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Nex-App</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 ">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='contact'>Contact</Link></li>
      
      </ul>
    </div>
  </div>
  )
}

export default Navbar