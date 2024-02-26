import React from "react";
import { TracingBeam } from "./components/beam";
import Header from "./components/header";
import { Lamp } from "./components/lamp";
import { LampGlow } from "./components/glow";

const AgePage = () => {
  return (
    <>
      <Header>
        <Lamp>
          <></>
        </Lamp>
      </Header>
      <LampGlow>
        <></>
      </LampGlow>
      <div className="page scroll w-[100vw] h-[200vh] flex">
        <TracingBeam className="sidebar">
          <div className="scroll beam w-[5vw] h-[200vh]"></div>
        </TracingBeam>
        <div className="content flex-grow flex flex-col ">
          <div
            className="scroll main flex-grow flex items-start justify-center"
            style={{ width: "100vw" }}
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default AgePage;
