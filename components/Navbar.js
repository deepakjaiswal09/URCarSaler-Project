// components/Navbar.js
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-white font-bold text-xl ml-10 ">
         Theta Chat
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center ">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/forums" className="text-gray-300 hover:text-white">
            Forums
          </Link>
          <Link href="/chat" className="text-gray-300 hover:text-white">
            UserChat
          </Link>
          <ul>
            <li className='flex justify-center items-center'> < UserButton/></li>
          </ul>
           
        </div>
      </div>
    </nav>
  );
}