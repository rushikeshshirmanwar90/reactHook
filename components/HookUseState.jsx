"use client";

import React, { useState } from "react";
const btnStyle = "text-2xl border border-solid border-black p-3";

const HookUseState = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-2">Use State</h1>

      <div className="flex items-center justify-evenly mt-16">
        <button
          className={btnStyle}
          onClick={() => {
            setNum((prevNum) => prevNum - 1);
          }}
        >
          -
        </button>

        <p className="text-2xl">{num}</p>

        <button
          className={btnStyle}
          onClick={() => {
            setNum((prevNum) => prevNum + 1);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </>
  );
};

export { btnStyle };
export default HookUseState;
