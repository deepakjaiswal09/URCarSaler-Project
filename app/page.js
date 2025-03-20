// pages/index.js
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs'; 
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover brightness-50"
            src="/chat-background.jpg" // Ensure this image exists in your /public directory
            alt="Chat Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-40"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto"> {/* Centering content */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              CarSaler : Explore, Bid & Get Your's !
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
              Experience real-time car saling experience and get a car on your doorstep !
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 py-3 px-6 font-medium text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              Get Started Now
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="bg-gray-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Features That Empower You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Real-time Messaging */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Real-time Messaging</h3>
              <p className="text-gray-400">Instant communication for seamless interaction.</p>
            </div>

            {/* Feature 2: Secure Group Chats */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15.178 7.504a3.903 3.903 0 011.448 2.545 48.828 48.828 0 00-13.479 2.896 9.877 9.877 0 00-1.448-2.545M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 10.5c0 1.075-.56 2.07-1.406 2.59A8.987 8.987 0 0112 13c-1.21 0-2.41-.203-3.594-.91a2.5 2.5 0 01-1.406-2.59m16 3a12.5 12.5 0 11-25 0 12.5 0 0125 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Secure Group Chats</h3>
              <p className="text-gray-400">Collaborate with teams in secure environments.</p>
            </div>

            {/* Feature 3: Private Messaging */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m-4 6h2m-2-2h2m-7 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Private Messaging</h3>
              <p className="text-gray-400">Engage in one-on-one secure conversations.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="bg-gray-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <p className="text-gray-400 mb-6">Basic features for individuals.</p>
              <ul className="text-gray-400 mb-6">
                <li>Real-time Messaging</li>
                <li>Limited Group Chats</li>
                <li>Basic Support</li>
              </ul>
              <Link href="/sign.up(.*)" className="inline-flex items-center rounded-md bg-gray-700 py-2 px-4 font-medium text-white hover:bg-gray-600 transition duration-300">
                Sign Up Free
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Standard</h3>
              <p className="text-gray-400 mb-6">Enhanced features for teams.</p>
              <ul className="text-gray-400 mb-6">
                <li>All Free Features</li>
                <li>Unlimited Group Chats</li>
                <li>Private Messaging</li>
                <li>Priority Support</li>
              </ul>
              <Link href="/sign.up" className="inline-flex items-center rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-500 transition duration-300">
                Get Standard - $9/month
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-gray-400 mb-6">Advanced features for enterprises.</p>
              <ul className="text-gray-400 mb-6">
                <li>All Standard Features</li>
                <li>Advanced Security</li>
                <li>API Access</li>
                <li>Dedicated Support</li>
              </ul>
              <Link href="/sign.up" className="inline-flex items-center rounded-md bg-purple-600 py-2 px-4 font-medium text-white hover:bg-purple-500 transition duration-300">
                Get Premium - $29/month
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-8 mt-auto"> {/* mt-auto pushes footer to bottom */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Thetachat</h3>
              <p className="text-gray-400">
                Connecting people through seamless communication.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li>
                  <Link href="/chat" className="hover:text-gray-300">Chat</Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-gray-300">Features</Link>
                </li>
                {/* <li>
                  <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-gray-300">Support</Link>
                </li> */}
              </ul>
            </div>

            {/* Column 3: Social Media */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start">
                <Link href="#" className="mr-4 hover:text-gray-300">
                  {/* Replace with your social media icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.952 10.125 11.854v-8.388H7.078v-3.466h3.047V9.437c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.417h3.328l-.532 3.466h-2.796v8.388C19.612 23.025 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="mr-4 hover:text-gray-300">
                  {/* Replace with your social media icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.602 1.77-.95 2.044-2.438 3.31-3.966 3.425-.411-1.666.734-3.24 1.758-3.697-.825.17-1.73.273-2.656.325-1.595-1.282-3.832-2.029-6.263-2.029-1.727 0-3.3.078-4.697.214-1.295 1.282-2.066 3.076-2.066 4.921 0 3.417 1.721 6.228 4.08 7.964C3.993 15.388 2 15.903 2 15.903c-.307.768-.461 1.688-.461 2.602 0 1.875 1.227 4.109 1.956 6.494 1.956 7.797 0 12.005-6.503 12.005-12.107 0-.183 0-.363-.013-.54 1.178-.849 2.2-1.911 2.518-3.183z"/>
                  </svg>
                </Link>
                {/* Add other social media links */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Thetachat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export const metadata = {
  title: 'Home - ThetaChat',
  description: 'Thetachat Helps you connect with topics endulged in group',
}