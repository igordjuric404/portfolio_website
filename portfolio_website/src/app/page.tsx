import React from "react";
import { TracingBeam } from "./components/beam";
import Header from "./components/header";
import { Lamp } from "./components/lamp";
import { LampGlow } from "./components/glow";
import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
import { FloatingDock } from "./components/floating-dock";
import CollapsibleTimeline from "./components/collapsible-timeline";

import {
  IconHome,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const AgePage = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/igordjuric404/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/igordjuric404?tab=repositories",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mail.google.com/mail/u/0/?fs=1&to=igordjuric404@gmail.com&tf=cm",
    },
  ];
  return (
    <>
      {/* <Header>
        <Lamp>
          <></>
        </Lamp>
      </Header>
      <LampGlow>
        <></>
      </LampGlow> */}
      {/* <div className="page scroll w-[100vw] h-[200vh] flex"> */}

      <div
        className="scroll main flex-grow flex flex-col items-start justify-center relative"
        style={{ width: "100vw" }}
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 h-[200px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] ">
              Igor Đurić
            </p>
            <a>
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 h-[100px] text-3xl text-left md:text-4xl lg:text-2xl ml-[57px] mt-[10px]">
                Frontend developer
              </p>
            </a>
          </div>
        </BackgroundGradientAnimation>
        <div className="relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" />
        {/* <div className="relative top-[-550px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" /> */}
        <div className="w-[100vw] h-[100vh] pt-[10px] mt-[-300px] bg-[#060606]">
          <CollapsibleTimeline>
          </CollapsibleTimeline>
        </div>
        <div className="w-[100vw] h-[100vh] mt-[-300px] bg-[#060606]">
        </div>

        <TracingBeam className="absolute sidebar z-100 left-0 top-0">
          <div className="scroll beam w-[5vw] h-[200vh]"></div>
        </TracingBeam>
        
        <div className="fixed bottom-0 w-[100vw] h-[90px] dock flex items-center justify-center">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AgePage;
