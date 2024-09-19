import React from "react";
import { blockData } from "../data/DataBlock";

function BlockDescription() {
    return(
    <>
    <div className="flex">
    <h1 className="font-semibold text-[25px] ml-[2vw] mt-[2vh] mb-[1vh]">Block</h1>
    <p className="ml-[2vw] mt-[3.5vh]">#61982172</p>
    </div>
    <hr />
    <button className="bg-[#7342dc] text-[white] ml-[2vw] my-[2vh] p-1.5 rounded-[10px]">Overview</button>

    <div className="bg-[#f3f3f3] w-[95vw] ml-[2vw] mt-[2vw] p-2.5 rounded-[5px]">
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Block Height:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.blockHeight}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Timestamp:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.timestamp}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Transactions:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">
        {blockData.transactions.count} transactions and {blockData.transactions.internalTransactions} contract internal transactions
        </span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Validated By:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.validatedBy}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Block Reward:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.blockReward}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Difficulty:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.difficulty}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Total Difficulty:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.totalDifficulty}</span>
    </div>

    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Size:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.size}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Gas Used:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">
        {blockData.gasUsed.amount} ({blockData.gasUsed.percentage}) 
        <span className="gas-target">{blockData.gasUsed.gasTarget}</span>
        </span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Gas Limit:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.gasLimit}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Base Fee Per Gas:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">{blockData.baseFeePerGas}</span>
    </div>
    <div className="flex items-center text-base px-0 py-2.5 border-b-[#eaeaea] border-b border-solid last:border-b-[none]">
        <span className="font-[bold] text-[#333] flex-1">Burnt Fees:</span>
        <span className="text-[#555] flex-1 text-left ml-[-50vw]">
        <span role="img" aria-label="fire">🔥</span> {blockData.burntFees}
        </span>
    </div>
    </div>
    </>
    )
}

export default BlockDescription