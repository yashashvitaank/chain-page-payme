import React from "react";
import { blockData } from "../data/DataBlock";

function BlockDescription() {
    return(
    <>
    <div className="flex items-center gap-4 m-4">
    <p className="font-semibold text-[25px]">Block</p>
    <p className="">#61982172</p>
    </div>
    <hr />
    <button className="bg-[#7342dc] text-[white] md:ml-[2vw] my-[2vh] mx-2 p-2 rounded-[10px]">Overview</button>

    <div className="bg-[#fff] w-[95vw] ml-[2vw] mt-[2vw] p-2.5 rounded-[5px] border border-zinc-300">
    <div className="flex flex-col md:flex-row md:items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%]">Block Height:</span>
        <span className="text-[#555]">{blockData.blockHeight}</span>
    </div>
    <div className="flex flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Timestamp:</span>
        <span className="text-[#555]  ">{blockData.timestamp}</span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Transactions:</span>
        <span className="text-[#555]  ">
        {blockData.transactions.count} transactions and {blockData.transactions.internalTransactions} contract internal transactions
        </span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Validated By:</span>
        <span className="text-[#555]   truncate">{blockData.validatedBy}</span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Block Reward:</span>
        <span className="text-[#555]">{blockData.blockReward}</span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Difficulty:</span>
        <span className="text-[#555]">{blockData.difficulty}</span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Total Difficulty:</span>
        <span className="text-[#555]">{blockData.totalDifficulty}</span>
    </div>

    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Size:</span>
        <span className="text-[#555]">{blockData.size}</span>
    </div>
    <div className="flex  flex-col md:flex-row md:items-center  text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Gas Used:</span>
        <span className="text-[#555]">
        {blockData.gasUsed.amount} ({blockData.gasUsed.percentage}) 
        <span className="gas-target">{blockData.gasUsed.gasTarget}</span>
        </span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Gas Limit:</span>
        <span className="text-[#555]">{blockData.gasLimit}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Base Fee Per Gas:</span>
        <span className="text-[#555]">{blockData.baseFeePerGas}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] md:min-w-[20%] ">Burnt Fees:</span>
        <span className="text-[#555]">
        <span role="img" aria-label="fire">🔥</span> {blockData.burntFees}
        </span>
    </div>
    </div>
    </>
    )
}

export default BlockDescription