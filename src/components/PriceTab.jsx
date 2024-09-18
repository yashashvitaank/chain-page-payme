
function PriceTab({price}) {
  return (
    <div className="fixed min-h-8 border-b-[1.5px] bg-white border-zinc-200 py-3 pl-14 text-primary-blue top-0 w-full z-50">
        <p className="text-primary-dark-gray text-sm">QNT Price: <span className="text-primary-blue"> {price}</span></p>
    </div>
  )
}

export default PriceTab