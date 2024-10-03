import React from "react";
import { TracingBeam } from "./components/beam";
import Header from "./components/header";
import { Lamp } from "./components/lamp";
import { LampGlow } from "./components/glow";
import { BackgroundGradientAnimation} from "./components/background-gradient-animation"

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
      {/* <div className="page scroll w-[100vw] h-[200vh] flex"> */}

          <div
            className="scroll main flex-grow flex flex-col items-start justify-center relative"
            style={{ width: "100vw" }}
          >

            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 h-[170px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] mt-[-200px]">
                  Igor Đurić
                </p>
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 h-[100px] text-3xl text-left md:text-4xl lg:text-5xl ml-[57px]">
                  Frontend developer
                </p>
              </div>
            </BackgroundGradientAnimation>       
            <div className="relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" />
            {/* <div className="relative top-[-550px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" /> */}

{/* 
            <div className="w-[100vw] h-[100vh] mt-[-550px] bg-[#060606]">
            </div>         */}
            <div className="w-[100vw] h-[100vh] mt-[-300px] bg-[#060606]">
            </div>        
            <TracingBeam className="absolute sidebar z-100 left-0 top-0">
              <div className="scroll beam w-[5vw] h-[200vh]"></div>
            </TracingBeam>
          </div>
      {/* </div> */}
      
    </>
  );
};

export default AgePage;
