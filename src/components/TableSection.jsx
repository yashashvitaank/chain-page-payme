import React, { Children } from "react";
import { Link } from "react-router-dom";
import BlockIcon from "/public/blocks.svg";
import TxnIcon from "/public/trxn.svg";

function TableSection({ data, type }) {
  const isBlock = type === "blocks";
  const color = isBlock ? "#EF4680" : "#F58D83";
  //Column
  function Column({ upperText, lowerText, trnTime }) {
    return (
      <div className="flex flex-col">
        <p className="font-bold">
          {isBlock ? "Validated by" : "From"}{" "}
          <span style={{ color: color, fontWeight: "normal" }}>
            {upperText}
          </span>
        </p>
        {isBlock ? (
          <p>
            <span style={{ color: color }}>{lowerText} txn</span> in {trnTime}
          </p>
        ) : (
          <p>
            To <span style={{ color: color }}>{lowerText}</span>
          </p>
        )}
      </div>
    );
  }
  //Row
  function RenderRow({ rowData }) {
    const redirectionUrl = isBlock ? "blocks/" : "txn/";
    const icon = isBlock ? BlockIcon : TxnIcon;
    return (
      <div className="px-3 w-full border-b border-zinc-200 py-2">
        <div className="flex flex-col gap-1 md:flex-row  md:justify-items-center md:items-center md:gap-3">
          <div className="flex gap-5">
            <img src={icon} className="hidden md:block" />
            <div className="flex md:flex-col">
              <Link
                to={`${redirectionUrl + rowData.id}`}
                style={{ color: color, fontWeight: "bold" }}
              >
                {rowData.id}
              </Link>
              <p className="">{rowData.time}</p>
            </div>
          </div>
          <div className="flex md:flex-col">
            {isBlock ? (
              <Column
                upperText={rowData.validated_by}
                lowerText={rowData.transactions}
                trnTime={rowData?.transaction_time}
              />
            ) : (
              <Column upperText={rowData.from} lowerText={rowData.to} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[20rem] rounded-xl text-black shadow-md bg-white">
      <p className="text-base font-semibold px-4 py-5 border-b border-zinc-200">
        {" "}
        Latest {type}
      </p>
      {Children.toArray(
        [...data, ...data, ...data, ...data, ...data].map((rowData) => (
          <RenderRow rowData={rowData} />
        ))
      )}
    </div>
  );
}

export default TableSection;
