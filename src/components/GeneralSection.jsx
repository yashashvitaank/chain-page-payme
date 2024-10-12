import React from 'react';
import { transactions } from '../data/transactions'; 

function TransactionRow({ id, validator, time, txnCount, txnDuration }) {
    return (
        <div className='grid grid-cols-2 gap-4 border-b border-gray-200 p-4'>
            <div className='flex flex-col'>
                <p className='text-pink-500 font-bold'>{id}</p>
                <p className='text-sm'>
                    Validated by <span className='text-pink-500'>{validator}</span>
                </p>
            </div>
            <div className='flex flex-col'>
                <p className='text-gray-500'>{time}</p>
                <p className='text-pink-500'>
                    {txnCount} <span className='text-gray-500'>{txnDuration}</span>
                </p>
            </div>
        </div>
    );
}

function GeneralSection() {
    return (
        <div className='w-full bg-white rounded-xl mb-4 my-4'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold p-4'>Top Transactions</h2>
                    <div className='bg-white'>
                        {transactions.slice(0, 3).map((transaction, index) => (
                            <TransactionRow key={index} {...transaction} />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold p-4'>All Transactions</h2>
                    <div className='overflow-y-scroll max-h-64 scrollbar-hidden bg-white'>
                        {transactions.map((transaction, index) => (
                            <TransactionRow key={index} {...transaction} />
                        ))}
                        {transactions.map((transaction, index) => (
                            <TransactionRow key={index + transactions.length} {...transaction} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralSection;
