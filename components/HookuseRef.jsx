import React, { useEffect, useRef } from "react";

const HookUseRef = () => {
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

export default HookUseRef;
