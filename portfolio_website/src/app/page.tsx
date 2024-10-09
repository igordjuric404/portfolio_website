"use client"
import React, { useRef } from "react";
import { TracingBeam } from "./components/beam";
import Header from "./components/header";
import { Lamp } from "./components/lamp";
import { LampGlow } from "./components/glow";
import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
import { FloatingDock } from "./components/floating-dock";
import CollapsibleTimeline from "./components/collapsible-timeline";
import { HeroParallax } from "./components/hero-parallax";
import Slider from "./components/slider";

import {
  IconHome,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import ImageSlider from "./components/images-slider";

const AgePage = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

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

  const products = [
    {
      title: "CREF",
      link: "https://cref.eakademija.com/",
      thumbnail:
        "/portfolio_website/assets/img/cref.png",
    },
    {
      title: "Има на ћирилици",
      link: "https://xn--80aawcaaawel9a5e7n.xn--90a3ac/public/",
      thumbnail:
        "/portfolio_website/assets/img/rnids.png",
    },
    {
      title: "CoinSnap",
      link: "https://coinsnap.io/en/",
      thumbnail:
        "/portfolio_website/assets/img/coinsnap.png",
    },
    {
      title: "empty1",
      link: "#",
      thumbnail:
        "/portfolio_website/assets/img/empty.png",
    },
    {
      title: "empty2",
      link: "#",
      thumbnail:
        "/portfolio_website/assets/img/empty.png",
    },
    {
      title: "Plagiarsm detector",
      link: "https://github.com/igordjuric404/Plagiarism_Detector",
      thumbnail:
        "/portfolio_website/assets/img/plagiarism.png",
    },
    {
      title: "E-Case",
      link: "https://e-case.eakademija.com/",
      thumbnail:
        "/portfolio_website/assets/img/ecase.png",
    },
    {
      title: "Against violence hackaton",
      link: "https://github.com/igordjuric404/Against_Violence",
      thumbnail:
        "/portfolio_website/assets/img/against_violence.png",
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
        ref={mainContentRef} 
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none">
            <p className="text-black h-[200px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] glow-text integral-bold">
              Igor Djuric
            </p>
            <p className="text-black h-[100px] text-3xl text-left md:text-4xl lg:text-2xl ml-[57px] mt-[10px] glow-text-stronger integral-bold">
              Frontend developer
            </p>
          </div>
        </BackgroundGradientAnimation>
        <div className="relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" />
        <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
          <h1 className="text-2xl md:text-5xl font-bold dark:text-white pb-[50px] monument-bold">
            My career path
          </h1>
          <CollapsibleTimeline>
          </CollapsibleTimeline>
        </div>

        <div className="flex flex-col items-center justify-center w-[100vw] h-[400px] bg-[#060606]">
          <Slider />
        </div>

        <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
          <HeroParallax products={products} />
        </div>

        <div className="w-[100vw] h-[auto] pt-[10px] bg-[#060606] images" >
            <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
              <h1 className="text-2xl md:text-5xl font-bold dark:text-white monument-bold">
                My hobbies
              </h1>
              <p className="max-w-5xl text-base md:text-xl mt-8 pb-[20px] dark:text-neutral-200 monument">
                Outside of coding, I enjoy sports, cooking, video games, and capturing photos with my 1969 analog camera when I travel.
              </p>
            </div>
          <ImageSlider />
        </div>

        <TracingBeam className="absolute sidebar z-1000 left-0 top-0" observeRef={mainContentRef}>
          <div className="scroll beam w-[5vw] h-[502vh] z-1000 "></div>
        </TracingBeam>
        
        <div className="fixed bottom-0 w-[100vw] h-[90px] dock flex items-center justify-center">
          <FloatingDock
            mobileClassName="translate-y-20"
            items={links}
          />
        </div>

      </div>
      {/* </div> */}
    </>
  );
};

export default AgePage;


// "use client"
// import React, { useRef } from "react";
// import { TracingBeam } from "./components/beam";
// import Header from "./components/header";
// import { Lamp } from "./components/lamp";
// import { LampGlow } from "./components/glow";
// import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
// import { FloatingDock } from "./components/floating-dock";
// import CollapsibleTimeline from "./components/collapsible-timeline";
// import { HeroParallax } from "./components/hero-parallax";
// import Slider from "./components/slider";

// import {
//   IconHome,
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconMail,
// } from "@tabler/icons-react";
// import ImageSlider from "./components/images-slider";

// const AgePage = () => {
//   const mainContentRef = useRef<HTMLDivElement>(null);

//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "LinkedIn",
//       icon: (
//         <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "https://www.linkedin.com/in/igordjuric404/",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "https://github.com/igordjuric404?tab=repositories",
//     },
//     {
//       title: "Email",
//       icon: (
//         <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "https://mail.google.com/mail/u/0/?fs=1&to=igordjuric404@gmail.com&tf=cm",
//     },
//   ];

//   const products = [
//     {
//       title: "CREF",
//       link: "https://cref.eakademija.com/",
//       thumbnail:
//         "/portfolio_website/assets/img/cref.png",
//     },
//     {
//       title: "Има на ћирилици",
//       link: "https://xn--80aawcaaawel9a5e7n.xn--90a3ac/public/",
//       thumbnail:
//         "/portfolio_website/assets/img/rnids.png",
//     },
//     {
//       title: "CoinSnap",
//       link: "https://coinsnap.io/en/",
//       thumbnail:
//         "/portfolio_website/assets/img/coinsnap.png",
//     },
//     {
//       title: "Editorially",
//       link: "https://editorially.org",
//       thumbnail:
//         "",
//     },
//     {
//       title: "Editrix AI",
//       link: "https://editrix.ai",
//       thumbnail:
//         "",
//     },
//     {
//       title: "Plagiarsm detector",
//       link: "https://github.com/igordjuric404/Plagiarism_Detector",
//       thumbnail:
//         "/portfolio_website/assets/img/plagiarism.png",
//     },
//     {
//       title: "E-Case",
//       link: "https://e-case.eakademija.com/",
//       thumbnail:
//         "/portfolio_website/assets/img/ecase.png",
//     },
//     {
//       title: "Against violence hackaton",
//       link: "https://github.com/igordjuric404/Against_Violence",
//       thumbnail:
//         "/portfolio_website/assets/img/against_violence.png",
//     },
//   ];
  
//   return (
//     <>
//       {/* <Header>
//         <Lamp>
//           <></>
//         </Lamp>
//       </Header>
//       <LampGlow>
//         <></>
//       </LampGlow> */}
//       {/* <div className="page scroll w-[100vw] h-[200vh] flex"> */}

//       <div
//         className="scroll main flex-grow flex flex-col items-start justify-center relative"
//         style={{ width: "100vw" }}
//         ref={mainContentRef} 
//       >
//         <BackgroundGradientAnimation>
//           <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none">
//             <p className="text-black h-[200px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] glow-text integral-bold">
//               Igor Djuric
//             </p>
//             <p className="text-black h-[100px] text-3xl text-left md:text-4xl lg:text-2xl ml-[57px] mt-[10px] glow-text-stronger integral-bold">
//               Frontend developer
//             </p>
//           </div>
//         </BackgroundGradientAnimation>
//         <div className="relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" />
//         <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
//           <h1 className="text-2xl md:text-5xl font-bold dark:text-white pb-[50px] monument-bold">
//             My career path
//           </h1>
//           <CollapsibleTimeline>
//           </CollapsibleTimeline>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[100vw] h-[400px] bg-[#060606]">
//           <Slider />
//         </div>

//         <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
//           <HeroParallax products={products} />
//         </div>

//         <div className="w-[100vw] h-[auto] pt-[10px] bg-[#060606] images" >
//             <div className="max-w-7xl relative mx-auto pt-10 px-4 w-full left-0 top-0">
//               <h1 className="text-2xl md:text-5xl font-bold dark:text-white monument-bold">
//                 My hobbies
//               </h1>
//               <p className="max-w-4xl text-base md:text-xl mt-8 pb-[20px] dark:text-neutral-200 monument">
//                 Outside of coding, I enjoy sports, cooking, video games, and capturing photos with 1969 analog camera when I travel.
//               </p>
//             </div>
//           <ImageSlider />
//         </div>

//         <TracingBeam className="absolute sidebar z-1000 left-0 top-0" observeRef={mainContentRef}>
//           <div className="scroll beam w-[5vw] h-[502vh] z-1000 "></div>
//         </TracingBeam>
        
//         <div className="fixed bottom-0 w-[100vw] h-[90px] dock flex items-center justify-center">
//           <FloatingDock
//             mobileClassName="translate-y-20"
//             items={links}
//           />
//         </div>

//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default AgePage;
