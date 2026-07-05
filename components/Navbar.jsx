"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const pathname= usePathname();
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200 bg-white">
      <Link href="/" className="text-xl font-bold text-gray-800"> Book Vibe</Link>


      <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className={`text-sm px-3 py-2 rounded-md ${pathname==="/"? "border border-green-500 text-green-600" : "text-gray-600 hover:text-green-600"}`} >Home</Link>
        <Link href="/books" className={`text-sm px-3 py-2 rounded-md ${pathname==="/books"? "border border-green-500 text-green-600" : "text-gray-600 hover:text-green-600"}`}>Listed Books</Link>
        <Link href="/reading" className={`text-sm px-3 py-2 rounded-md ${pathname==="/reading"? "border border-green-500 text-green-600" : "text-gray-600 hover:text-green-600"}`}>Pages to Read</Link>
      </div>

      <div className="hidden md:flex gap-3">
        <Link href="/signIn" className="px-4 py-2 text-sm border bg-[#23BE0A] border-green-500 text-white rounded-md hover:bg-gray-200">Sign In</Link>
        <Link href="/signUp" className="px-4 py-2 text-sm bg-[#59C6D2] text-white rounded-md hover:bg-gray-200">  Sign Up</Link>
      </div>


<button className="md:hidden text-2xl text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FaTimes />:<FaBars />}</button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          <Link href="/" className="text-sm text-gray-600  hover:text-green-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/books" className="text-sm text-gray-600  hover:text-green-600" onClick={() => setMenuOpen(false)}>Listed Books</Link>
          <Link href="/reading" className="text-sm text-gray-600  hover:text-green-600" onClick={() => setMenuOpen(false)}>Pages to Read</Link>
          <Link href="/signIn" className="text-sm  bg-[#23BE0A] text-white px-4 py-2 rounded-md  hover:bg-gray-200">Sign In</Link>
          <Link href="/signUp" className="text-sm text-white bg-[#59C6D2] px-4 py-2 rounded-md  hover:bg-gray-200">Sign Up</Link>
        </div>
      )}

    </nav>
  );
};

