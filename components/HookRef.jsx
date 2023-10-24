import React, { useEffect, useRef } from "react";

const HookRef = () => {
  const customRef = useRef(null);

  useEffect(() => {
    console.log("customRef value: ", customRef.current);
  });

  return (
    <>
      <div ref={customRef}> Rushikesh </div>
    </>
  );
};

export default HookRef;
