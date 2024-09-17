import React from 'react'
import SearchIcon from "/public/search.svg";
function SearchInput() {
  return (
    <div className='pt-14 pb-20 px-20 homeBackground z-10'>
        <p className='text-lg font-bold pb-4 text-white'>PoS Chain Explorer</p>
        <div className='w-[55%] h-12 p-1 bg-white shadow-sm rounded-xl border border-zinc-300 flex justify-between gap-2'>
            <input type="text" className='outline-none w-[80%] h-full p-4' placeholder='Search by Address / Txn Hash / Block / Token / Domain Name' />
            <div className='grid place-items-center bg-primary-blue rounded-lg h-full w-[40px]'><img src={SearchIcon} width={20} height={20}/></div>
        </div>
    </div>
  )
}

export default SearchInput