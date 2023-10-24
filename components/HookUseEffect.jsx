"use client";
import React, { useEffect, useState } from "react";
import { btnStyle } from "./HookUseState";

const HookUseEffect = () => {
  const [a, setA] = useState(0);

  //   the useEffect hook will execute when the page is loaded and at last this hook will load
  useEffect(() => {
    console.log("Added");
  }, [a]);

  //   the above one is an example of hte useEffect so when ever we update the square bracket values at that time the useEffect function will called

  return (
    <div>
      <button
        className={btnStyle}
        onClick={() => {
          let tmp = a;
          tmp++;
          setA(tmp);
        }}
      >
        Add Value
      </button>
      <h1>{a}</h1>
    </div>
  );
};

export default HookUseEffect;
