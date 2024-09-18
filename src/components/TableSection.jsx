import React, { Children } from 'react'

function TableSection({data, type}) {
  const isBlock = type === "blocks";
  const color = isBlock ? "#EF4680" : "#F58D83";
  //Colum
  function Column({upperText, lowerText, trnTime}){
    return (
      <div className='flex flex-col'>
        <p className='font-bold'>{isBlock ? "Validated by" : "From"} <span style={{color:color}}>{upperText}</span></p>
        {isBlock ? <p><span style={{color: color}}>{lowerText} txn</span> in {trnTime}</p>: <p>To <span style={{color: color}}>{lowerText}</span></p>}
      </div>
    )
  }
  //Row
  function RenderRow({rowData}){
    
    return(
      <div className='flex justify-between px-3 w-full border-b border-zinc-200 py-2'>
        <div className='flex gap-2 justify-items-center items-center'>
        <div className='w-[30px] h-[30px] bg-zinc-400'></div>
        <div className='flex flex-col'>
          <p style={{color: color, fontWeight: "bold"}}>{rowData.id}</p>
          <p className=''>{rowData.time}</p>
        </div>
        <div className='flex flex-col'>
          {isBlock ? <Column upperText={rowData.validated_by} lowerText={rowData.transactions} trnTime={rowData?.transaction_time} /> : <Column upperText={rowData.from} lowerText={rowData.to} />}
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-[20rem] rounded-xl text-black shadow-md bg-white'>
      <p className='text-base font-semibold px-4 py-5 border-b border-zinc-200'> Latest {type}</p>
      {Children.toArray(
        [...data, ...data, ...data, ...data, ...data].map((rowData) => <RenderRow rowData={rowData}/>)
      )}
    </div>
  )
}

export default TableSection