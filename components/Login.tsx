'use client';
import { signIn } from "next-auth/react"
import Image from "next/image";
import Logo from '../assets/chatgpt-logo.jpg'

function Login() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center text-center gap-5">
        <div className="text-black">
            <p>Developed by akashmn</p>
        </div>
        <Image 
            src={Logo}
            width={300}
            height={300}
            alt="LOGO"
        />
        <button 
            onClick={() => signIn("google")}
            className="text-black font-bold text-xl border p-1 rounded-md animate-pulse">Sign in to use ChatGPT</button>
    </div>
  )
}

export default Login