import React from 'react'
import SearchInput from './SearchInput'
import GeneralSection from './GeneralSection'
import TableSection from './TableSection'

function HomeContent() {
  return (
    <div className='w-full'><SearchInput />
    <GeneralSection />
    <div className='w-[90%] '>
        <div className='w-full flex justify-center items-center gap-4'>
            <TableSection/>
            <TableSection/>
        </div>
    </div>
    </div>
  )
}

export default HomeContent