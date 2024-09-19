import React from 'react'
import SearchIcon from "/public/search.svg";
function SearchInput() {
  return (
    <div className='md:pt-14 p-4 md:p-0 md:pb-10 z-10'>
        <p className='text-lg font-bold pb-4 text-primary-blue tracking-wide'>PoS Chain Explorer</p>
        <div className='md:w-[55%] h-12 p-1 bg-white shadow-sm rounded-xl border border-zinc-300 flex justify-between gap-2'>
            <input type="text" className='outline-none w-full md:w-[80%] h-full p-4' placeholder='Search by Address / Txn Hash / Block / Token / Domain Name' />
            <div className='grid place-items-center bg-primary-blue rounded-lg h-full w-[40px]'><img src={SearchIcon} width={20} height={20}/></div>
        </div>
    </div>
  )
}

export default SearchInput