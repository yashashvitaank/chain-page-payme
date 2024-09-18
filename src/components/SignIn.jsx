import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='mt-[45px] flex justify-center items-center w-full h-[calc(100dvh-45px)] bg-zinc-100'>
        <form action="" className='w-[30%] h-[60%] shadow-sm rounded-2xl bg-white'>
            <p className='text-center pt-8 pb-3 text-2xl font-semibold leading-5'>Sign In</p>
            <p className='text-gray-400 text-base font-normal text-center'>Don't have an account? <span className='text-primary-blue'><Link href="">Sign Up</Link></span></p>
        </form>
    </div>
  )
}

export default SignIn