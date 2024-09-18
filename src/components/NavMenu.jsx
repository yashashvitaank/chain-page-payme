import React from 'react'

function NavMenu({title}) {

  return (
    <div className='relative group h-full cursor-pointer'>
        <div className=''>{title}</div>
        {/* <div className='absolute hidden -bottom-[18px] bg-white group-hover:block shadow-sm border-t-2 border-primary-blue w-fit min-w-40 h-fit pr-10 p-3 translate-y-full text-xs'>
            <div className='flex flex-col gap-3'><p>content 1</p>
            <p>content 2</p>
            <p>content content 3</p></div>
        </div> */}
    </div>
  )
}

export default NavMenu