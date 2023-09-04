"use client"

import React, { FC, useEffect, useRef, useState } from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
  Accordion
} from "../components";
// import TextOutline from "components/TextOutline";
import Link from "next/link";
import { NextPage } from "next";
import Image from "next/image";




const HomeScreenPage: NextPage = () => {
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string>('/');


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (event: any, sectionId: string) => {
    event.preventDefault();
    setSelectedLink(sectionId.replace('#', ''))
    isMobile && setToggle(false)
    const section = document.querySelector(sectionId);
    if (section) {
      const topOffset = section.getBoundingClientRect().top;
      const targetPosition = topOffset + window.scrollY;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className=" flex flex-col  items-center justify-end mx-auto py-[30px] w-full">

      {
            !isMobile ? (
              <div className=" flex  flex-row justify-between items-center  w-[80%] mx-auto ">
                <Link href="/" onClick={() => setSelectedLink('/')}>
                  <div className="relative flex flex-1 md:w-[30vw] h-[7.5vh]">
                    <Img
                      fill
                      resize="contain"
                      className=" bg-green-500"
                      src="/images/logo_nav.png"
                      alt="logo"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-row gap-[2rem] items-center justify-end">
                  
                  <Link href="#home" onClick={(event) => scrollToSection(event, '#home')}>
                    <Text className={`text-lg  ${selectedLink === "/" || selectedLink === "home" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                      Home
                    </Text>
                  </Link>
                  <Link href="#about-us" onClick={(event) => scrollToSection(event, '#about-us')}>
                    <Text className={`text-lg  ${selectedLink === "about-us" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                      About Us
                    </Text>
                  </Link>
                  <Link href="#our-projects" onClick={(event) => scrollToSection(event, '#our-projects')}>
                    <Text className={`text-lg ${selectedLink === "our-projects" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                      Portfolio
                    </Text>
                  </Link>
                  <Link href="#services" onClick={(event) => scrollToSection(event, '#services')}>
                    <Text className={`text-lg ${selectedLink === "services" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                      Services
                    </Text>
                  </Link>
                  <Link href="#faq" onClick={(event) => scrollToSection(event, '#faq')}>
                    <Text className={`text-lg ${selectedLink === "faq" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                      FAQ
                    </Text>
                  </Link>
                  {/* <Button className="bg-gradient  cursor-pointer font-medium  min-w-[196px] md:ml-[0]  py-3 rounded text-center text-lg text-white-A700">
      <Link href="mailto:santosh.krishna@techsential.io"> Request A Quote</Link>
    </Button> */}
                </div>

              </div>
            ) : (
              <div className="flex flex-row justify-between items-center px-5">

                <Link href="/" onClick={() => setSelectedLink('/')}>
                  <Img
                    width={150}
                    src="/images/logo_nav.png"
                    alt="logo"
                  />
                </Link>

                <div className="flex-col z-[2]">
                  <Img
                    onClick={() => {
                      setToggle(!toggle)
                    }}
                    width={30}
                    height={30}
                    className={`object-contain h-10 w-10  cursor-pointer ${toggle ? 'rotate-180' : 'rotate-0'}`}
                    src={toggle ? "/images/close.svg" : "/images/menu.svg"}
                    alt={toggle ? "close" : "menu"}
                  />

                </div>

                <div className={`${toggle ? 'slide-in' : 'slide-out'} p-4 py-20 space-y-4 flex flex-col fixed z-[1] h-[100vh] inset-y-0 right-0 w-2/3 bg-gray-700 bg-opacity-50  backdrop-blur-md shadow-lg`}>
                  <div className="flex-col h-full gap-5 p-5 flex ">

                    <Link href="#home" onClick={(event) => scrollToSection(event, '#home')}><Text className={`text-2xl ${selectedLink === "home" ? 'bg-clip-text bg-gradient text-transparent w-auto' : 'text-white-A700'} `}>
                      Home
                    </Text>
                    </Link>
                    <Link href="#about-us" onClick={(event) => scrollToSection(event, '#about-us')}>
                      <Text className={`text-2xl ${selectedLink === "about-us" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                        About Us
                      </Text>
                    </Link>
                    <Link href="#our-projects" onClick={(event) => scrollToSection(event, '#our-projects')}>
                      <Text className={`text-2xl ${selectedLink === "our-projects" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                        Portfolio
                      </Text>
                    </Link>
                    <Link href="#services" onClick={(event) => scrollToSection(event, '#services')}>
                      <Text className={`text-2xl ${selectedLink === "services" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                        Services
                      </Text>
                    </Link>
                    <Link href="#faq" onClick={(event) => scrollToSection(event, '#faq')}>
                      <Text className={`text-2xl ${selectedLink === "faq" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}>
                        FAQ
                      </Text>
                    </Link>
                    {/* <Button className="bg-gradient  cursor-pointer font-medium  min-w-[196px] md:ml-[0]  py-3 rounded text-center text-lg text-white-A700">
          <Link href="mailto:santosh.krishna@techsential.io">Request A Quote</Link>
          </Button> */}
                  </div>
                </div>

              </div>
            )
          }
        <div className=" h-[100vh]  relative w-full">


          <div className="relative w-full" id="#home">
            {isMobile && <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-md w-full h-[100vh] z-[1]"></div>}
            <Img
              fill
              className="h-[100vh] "
              src="/images/header_bg.png"
              alt="Header-Background"
            />
          </div>
          <div className="absolute h-full flex flex-col md:gap-28 gap-10 inset-x-[0] items-end justify-center mx-auto top-[3%] z-[2] w-[95%]">

            <div className="bg flex flex-col justify-center lg:w-[50%] w-full">
              <Text
                className="leading-[50px] text-white-A700 text-center md:text-left"
              >
                <span className=" text-[2.5rem] md:text-[3rem] font-light">
                  Welcome to
                </span>
                <br />
                <span className="bg-clip-text text-[2.9rem] md:text-[4rem] bg-gradient text-transparent  uppercase text-left font-bold ">
                  Techsential
                </span>
              </Text>
              <Text
                className="  mt-[17px] text-xl font-light text-white-A700 text-center md:text-left w-full"

              >
                <>
                  Techsential is a Pak-USA-based company working for digital
                  transformation. Techsential is a fast-growing software
                  company that keeps culture and creativity at the heart of
                  everything we do. We provide you with web development,
                  android development, and Unity Development at best.
                  <br />
                  Techsential was started in 2022 and to date, we have
                  developed projects mentioned in our portfolio.
                </>
              </Text>
              <div className="flex flex-col md:flex-row gap-2.5 items-center md:items-start justify-start mt-[3rem] md:w-[67%] w-full">
                {/* <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[178px] py-3 rounded text-center text-lg text-white-A700">
    <Link href="mailto:santosh.krishna@techsential.io"> Contact Us</Link>
  </Button> */}
                <Button className="bg-gradient cursor-pointer font-medium leading-[normal] min-w-[178px] py-3 rounded text-center text-lg text-white-A700 transform transition-transform hover:scale-105">
                  <Link href="mailto:santosh.krishna@techsential.io">Contact Us</Link>
                </Button>

                {/* <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border min-w-[190px] py-3 rounded text-center text-lg text-white-A700">
  <Link href="mailto:santosh.krishna@techsential.io"> Get Free Quote</Link>
  </Button> */}
              </div>
            </div>
          </div>
        </div>


        <div className="relative w-full" id="about-us">



          <div className=" md:absolute md:z-[1] flex flex-col  md:flex-row  inset-x-[0] items-start justify-between mx-auto mt-[2.7rem]   w-[88%] gap-8">
            <div className="flex flex-col items-start  md:w-[20vw] w-[70vw] gap-3">
              <Text
                className=" bg-clip-text bg-gradient text-[1.8rem] md:text-[2.5rem] text-shadow-ts text-transparent uppercase"

              >
                Vision
              </Text>
              <Text
                className=" text-lg text-white-A700 font-light"
              >
                Empowering Innovation Through Technology: Shaping a Future of Possibilities.
              </Text>
            </div>

            <div className="flex flex-col items-start  md:w-[20vw] w-[70vw] gap-3">
              <Text
                className=" bg-clip-text bg-gradient text-[1.8rem] md:text-[2.5rem] text-shadow-ts text-transparent uppercase"

              >
                Mission
              </Text>
              <Text
                className=" text-lg md:text-[19px] text-white-A700 font-light"

              >
                Our mission is to provide you with web, android, and design solutions for your businesses.
              </Text>
            </div>

          </div>

          <div className="relative w-full">
            {/* {isMobile && <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-sm w-[100vw] h-[100vh]"></div>} */}
            <Img
              className=" m-auto object-cover h-auto w-full"
              src="/images/cubes.png"
              alt="about"
            />
          </div>
        </div>







        <div className="relative mt-[2rem] ">
          <Text
            className="bg-clip-text bg-gradient text-3xl md:text-5xl text-center text-transparent font-bold"

            id="services"
          >
            Services
          </Text>
        </div>
        <div className=" relative mt-[2rem]  w-full">

          <div className="  flex md:flex-row justify-center m-auto w-[90%] gap-[2rem]  flex-col-reverse items-center">
            <div className="flex  flex-col gap-[0.8rem] w-full  lg:w-[45%]  sm:mt-10 justify-center">
              <Text
                className="text-3xl font-light  text-white-A700  w-full"

              >
                Website Design and Development Services
              </Text>
              <Text
                className="  text-white-A700 font-light text-lg w-full"

              >
                If you’re looking for engaging and user-friendly web
                designs and solutions then you’re at the right place.
              </Text>
              <Text
                className="  text-white-A700 font-light text-lg w-full"

              >
                <span className=" text-white-A700  font-light ">
                  We develop Websites that are:
                  <br />
                </span>
                <ul className="text-[17px] md:text-[19px] text-white-A700 text-left text-lg font-light list-disc list-inside ml-2 mt-2 ">
                  <li className="text-base">
                    Elegant Designs and Fully Functional
                  </li>
                  <li className="text-base">
                    User Friendly
                  </li>
                  <li className="text-base">
                    Optimized for Mobiles
                  </li>
                  <li className="text-base">
                    Unique and Quality Content
                  </li>
                  <li className="text-base">
                    Readily accessible contact and location
                  </li>
                  <li className="text-base">
                    Optimized for Search and the Social Web
                  </li>

                </ul>
              </Text>
            </div>
            <Img
              className=" h-full  my-auto object-cover right-[0] w-[80%] md:w-[50%]"
              src="/images/img_2021.png"
              alt="services"
            />
          </div>
        </div>


        <div className="flex flex-col  justify-start mt-[5rem]  w-full">



          <div className="bg-gray-900 gap-5 w-full flex relative flex-col md:flex-row items-center pb-10 md:pb-0">
            <Img
              className="h-full  md:w-[50%] w-full px-20 py-10"
              src="/images/eq.png"
              alt="eq"
            />
            <div className="flex flex-col w-[90%] justify-center gap-5 md:w-[35%]">
              <Text className="text-3xl md:text-left   font-light  text-white-A700  w-full">
                App Development
              </Text>
              <Text className=" text-white-A700 md:text-left font-light text-lg w-full"  >
                Build engaging Unity games that attract a large audience and
                influence the players with incredible performance. We have
                experienced unity game engineers to build prime 2D and 3D
                games that run smoothly. We create visually stunning games
                and dynamic visualizations that offer a pleasing experience.
              </Text>
            </div>
          </div>



          <div className="gap-5  md:gap-20 py-10 w-full mx-auto  flex  justify-center  md:px-5  md:mt-10 relative  items-center md:flex-row flex-col-reverse ">

            <div className="flex flex-col w-[90%] justify-center gap-5 md:w-[40%]">
              <Text className="text-3xl   font-light  text-white-A700  w-full">
                Blockchain Development
              </Text>
              <Text className=" text-white-A700 md:text-left font-light text-lg w-full">
                You must be looking for heightened security, efficiency,
                and transparency, blockchain can help you with that. We’re
                best in blockchain application development, integration,
                and adaptation from the top Blockchain Development. We
                offer data-driven solutions to match your business needs.
              </Text>
            </div>
            <div className="object-contain  p-10 md:p-0 md:w-[30%] w-full">
              <Image
                height={550}
                width={550}
                src="/images/nuv.png"
                alt="nuvomint"
              />
            </div>

          </div>


          <div className="bg-gray-900 gap-5 w-full flex relative flex-col md:flex-row items-center pb-10 md:pb-0">

            <Img
              className="md:p-0 md:w-[50%] w-ful"
              src="/images/brain.png"
              alt="brain"
            />
            <div className="flex flex-col md:w-[35%] justify-center gap-5 w-[90%]">
              <Text className="text-3xl   font-light  text-white-A700  w-full">

                Artificial Intelligence (AI)
              </Text>
              <Text className=" text-white-A700 md:text-left font-light text-lg w-full">

                {`We're your gateway to the future with cutting-edge AI solutions.
  Our team of AI specializes in advanced algorithms and custom
  solutions, helping your business thrive in the era of intelligence.`}
              </Text>
            </div>
          </div>

        </div>

        <Text
          className="bg-clip-text bg-gradient  mt-[5rem] text-3xl md:text-5xl lg:text-[54px] text-shadow-ts text-transparent font-bold"

          id="our-projects"
        >
          Our Projects
        </Text>
        {/* <div className="flex flex-col md:flex-row gap-[18px] items-center justify-start max-w-[1206px] mt-[2rem] md:mt-[4rem] mx-auto px-5 md:justify-center w-full">
          <Img
            className="flex-1 h-[436px] sm:h-auto object-cover rounded-[10px]  w-full md:w-5/12 md:h-auto hover:opacity-25"
            src="images/nuv_project.png"
            alt="rectangleFive"
          />
          <Img
            className="flex-1 h-[436px] sm:h-auto object-cover rounded-[10px]  w-full md:w-5/12 md:h-auto"
            src="images/bcp_project.png"
            alt="rectangleSix"
          />
        </div> */}

        {/* <div className="flex flex-col md:flex-row gap-[18px] items-center justify-start max-w-[1206px] md:mt-[2rem] mt-[1rem] mx-auto px-5 md:justify-center w-full">
          <Img
            className="flex-1 h-[436px] sm:h-auto object-cover rounded-[10px]  w-full md:w-5/12 md:h-auto"
            src="images/tfp_project.png"
            alt="rectangleFive"
          />
          <Img
            className="flex-1 h-[436px] sm:h-auto object-cover rounded-[10px]  w-full md:w-5/12 md:h-auto"
            src="images/eq_project.png"
            alt="rectangleSix"
          />
        </div> */}

        <div className="flex flex-col md:flex-row gap-[18px] items-center justify-start max-w-[1206px] mt-[2.5rem] md:mt-[4rem] mx-auto px-5 md:justify-center w-full">
          <div className="image-container cursor-pointer">
            <div className="image-wrapper">
              <Img
                className="flex-1 h-auto sm:h-auto object-cover rounded-[10px] w-full md:w-full project-img"
                src="/images/nuv_project.png"
                alt="nuvomint"
              />
              <div className="image-overlay">
                <Text className="text-2xl">Nuvomint</Text>
              </div>
            </div>
          </div>
          <div className="image-container cursor-pointer">
            <div className="image-wrapper">
              <Img
                className="flex-1 h-auto sm:h-auto object-cover rounded-[10px] w-full md:w-full  project-img"
                src="/images/bcp_project.png"
                alt="blockchainpoker"
              />
              <div className="image-overlay">
                <Text className="text-2xl">Blockchain Poker</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[18px] items-center justify-start max-w-[1206px] mt-[1.5rem] mx-auto px-5 md:justify-center w-full">
          <div className="image-container cursor-pointer">
            <div className="image-wrapper">
              <Img
                className="flex-1 h-auto rounded-[10px] w-full md:w-full md:h-auto project-img"
                src="/images/tfp_project.png"
                alt="trustfundpups"
              />
              <div className="image-overlay">
                <Text className="text-2xl">Trust Funds Pups</Text>
              </div>
            </div>
          </div>
          <div className="image-container cursor-pointer ">
            <div className="image-wrapper">
              <Img
                className="flex-1 h-auto  rounded-[10px] w-full md:w-full project-img"
                src="/images/eq_project.png"
                alt="EQ&YOU"
              />
              <div className="image-overlay">
                <Text className="text-2xl">EQ & You</Text>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col mt-[5rem] md:px-5 relative w-full">
          <div className="mx-auto">
            <Img
className=" m-auto object-cover bottom-0 top-20 left-0 right-0 w-full absolute"
src="images/img_image8.png"
alt="imageEight"
            />
            <div className=" flex flex-col  top-0 mt-[2rem] items-center justify-center  w-full">
<div className="flex flex-col items-center justify-start">
  <Text
    className="bg-clip-text bg-gradient  sm:text-[40px] md:text-[46px] text-[54px] text-transparent"
    
  >
    Our Clients
  </Text>
</div>
<Slider
  autoPlay
  autoPlayInterval={2000}
  activeIndex={sliderState}
  responsive={{
    0: { items: 1 },
    550: { items: 1 },
    1050: { items: 1 },
  }}
  onSlideChanged={(e) => {
    setsliderState(e?.item);
  }}
  ref={sliderRef}
  className="mt-[5rem] w-[65vw]"
  items={[...Array(4)].map(() => (
    <React.Fragment key={Math.random()}>
      <div className="bg-gradient2  border-2 border-solid border-white-A700 flex flex-col items-center justify-start mx-2.5 p-[27px] sm:px-5 rounded-[20px] shadow-bs1">
        <div className="flex flex-col items-center justify-start mb-1.5 w-[96%] md:w-full">
          <Img
            className="h-[75px] md:h-auto object-cover rounded-[37px] w-[74px] sm:w-full"
            src="images/img_ellipse4.png"
            alt="ellipseFour"
          />
          <Text
            className="leading-[150.00%] mt-[9px] text-blue_gray-900 text-center text-sm"
            
          >
            <span className="text-white-A700  text-lg font-bold">
<>
  Leslie Alexander
  <br />
</>
            </span>
            <span className="text-gray-400  text-base font-normal">
designation
            </span>
          </Text>
          <Text
            className="italic leading-[176.50%] mt-3.5 text-base text-center text-white-A700_ce w-full"
            
          >
            <>
Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been the
industry&#39;s standard dummy text ever since the
1500s industries. Lorem Ipsum is simply dummy text
of the printing and typesetting industry. Lorem
Ipsum has been the industry&#39;s standard dummy
text ever since the 1500s industries.
            </>
          </Text>
          <Text
            className="mt-[15px] text-center text-sm text-white-A700"
            
          >
            www.loremIpsum.com
          </Text>
        </div>
      </div>
    </React.Fragment>
  ))}
  renderDotsItem={({ isActive }) => {
    if (isActive) {
      return (
        <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gradient  w-3" />
      );
    }
    return (
      <div
        className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2"
        role="button"
        tabIndex={0}
      />
    );
  }}
/>
<PagerIndicator
  className="flex gap-[10px] h-3 items-center justify-center mt-[40px]"
  count={4}
  activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gradient  w-3"
  activeIndex={sliderState}
  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2"
  sliderRef={sliderRef}
  selectedWrapperCss="inline-block"
  unselectedWrapperCss="inline-block"
/>
            </div>
          </div>

        </div> */}


        <div className="flex flex-col gap-5 justify-start mx-auto w-[80%] mt-[5rem] z-[1]" id="faq">
          <div className="flex flex-col gap-10  items-center justify-start w-full ">
            <Text className="bg-clip-text bg-gradient  text-3xl md:text-5xl text-center text-transparent font-bold"            >
              Frequently Asked Questions
            </Text>


            <div className="w-full">
              <Accordion title="What services does your company offer?" content="We provide many IT solutions, including software development, web development, mobile app development, Blockchain, and AI Services. Explore our services page for more information." />
              <Accordion title="How can I request a quote for my project?" content={`To get a customized quote, go to our "Contact Us" section and fill out the form with your project details. Our team will get in touch with you promptly to discuss your requirements.`} />
              <Accordion title="Do you work with businesses of all sizes?" content="Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are tailored to meet our client's specific needs and budgets." />
              <Accordion title="How long does it take to complete a typical project?" content="Project timelines can vary depending on the complexity and scope. We will provide a project timeline during the initial consultation to ensure transparency and alignment with your expectations." />
              <Accordion title="Is my data safe with your company?" content="We take data security seriously. Our team follows industry best practices to protect your data. We can also discuss specific security measures and compliance requirements for your project." />
              <Accordion title="Do you provide ongoing support and maintenance after the project is completed?" content="Yes, we offer post-launch support and maintenance services. We aim to ensure your IT solutions continue to perform optimally and adapt to evolving needs." />
            </div>
            {/* <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
  <div className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full">
    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-auto md:w-full">
      <Img
        className="h-2.5 w-5"
        src="images/img_arrowdown.svg"
        alt="arrowdown"
      />
      <Text
        className="text-lg text-white-A700 w-auto"
        
      >
        How will app development help my business?
      </Text>
    </div>
    <div className="flex md:flex-col flex-row gap-[17px] items-center justify-start max-w-[1086px] w-full">
      <Line className="bg-white-A700_4c h-[66px] md:h-px md:w-full w-px" />
      <Text
        className="leading-[150.00%] max-w-[990px] md:max-w-full text-base text-white-A700 tracking-[-0.80px]"
  
      >
        There was a time when people thought that the internet
        was just a fad, and would just fizzle out. The internet
        revolution ended badly for them. Developing an app for
        your business will be the next “mandatory step” if you
        want to be a successful business that will grow in the
        coming years. We have assets in our company that can
        provide perfect web solutions for your business.
      </Text>
    </div>
    <Line className="bg-white-A700_4c h-px w-[96%]" />
  </div>
  <List
    className="flex flex-col gap-[23px] w-[96%]"
    orientation="vertical"
  >
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5 sm:w-full"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          How do you know if you need a website or not?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex md:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5 sm:w-full"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          I don’t have enough budget to spare a lot on app
          development. Can my app be built on a tight budget?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex md:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5 sm:w-full"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="max-w-[953px] md:max-w-full text-lg text-white-A700"
          
        >
          How can I share my app idea without risking it getting
          leaked? What security do you guarantee on the app
          proprietary rights?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          How can we start the work?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex md:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5 sm:w-full"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          Would you provide consultancies before and after the
          development phase?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          What is a blockchain application?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
    <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
      <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
        <Img
          className="h-5 md:h-auto object-cover w-2.5 sm:w-full"
          src="images/img_vector_20x10.png"
          alt="vector"
        />
        <Text
          className="text-lg text-white-A700 w-auto"
          
        >
          What are the benefits of blockchain technology?
        </Text>
      </div>
      <Line className="bg-white-A700_4c h-px w-full" />
    </div>
  </List>
</div> */}
          </div>
          {/* <Link
href="javascript:"
className="md:ml-[0] ml-[941px] text-lg text-white-A700"
            >
<Text >Read More</Text>
            </Link> */}
        </div>


        <div className="bg-gradient3 border  flex flex-col items-center  justify-start  p-10 md:px-10  rounded-[35px] w-[90%] mt-[2rem]">

          <div className="flex flex-col  md:flex-row gap-10 items-center justify-between w-full ">
            <Img
              className=" md:w-3/12  w-1/2"
              src="/images/img_frame.png"
              alt="logo"
            />
            <div className=" md:w-8/12 w-full items-center md:items-start flex flex-col gap-10 my-auto">
              {/* <div className="image items-start  flex flex-col  gap-5   flex-1">
  <Text
    className="text-base font-light  text-white-A700 sm:text-[16px]"

  >
    Important links
  </Text>
  <Text
    className="text-white-A700 font-light text-xs sm:text-[14px]"

  >
    <ul className="leading-[1.3rem]">
      <li>HOME</li>
      <li>Services</li>
      <li>Faq</li>
      <li>Who we are?</li>
      <li>Completed Projects</li>
      <li>BLOG</li>
    </ul>

  </Text>


</div> */}

              <div className="image items-start  flex flex-col  gap-5 flex-1 w-full">
                <Text
                  className=" text:xl md:text-xl font-light  text-white-A700 text-center md:text-left w-full"
                >
                  Contact Us
                </Text>
                <Text
                  className="  text-white-A700 font-light text-center  md:text-left w-full"

                >
                  <ul className="text-sm md:text-sm md:text-left">
                    {/* <li >
        ADDRESS: 1 MACARTHUR PLACE, SUITE #350SANTA ANA,CA 92707
      </li> */}
                    <li >PHONE: 1 (925) 699-0780</li>
                    <li>EMAIL: santosh.krishna@techsential.io</li>

                  </ul>

                </Text>


              </div>

              {/* <div className="image items-start  flex flex-col gap-2 flex-1">
  <Text
    className="text-base font-light uppercase text-white-A700 sm:text-[18px]"

  >
    Follow Us
  </Text>

  <Img
    className="h-[2rem] sm:h-[2rem] md:h-auto md:ml-[0] ml-[2rem] sm:ml-[2rem] object-cover"
    src="images/img_group59.png"
    alt="groupFiftyNine"
  />
  <Button className="sm:w-full bg-transparent mt-5 border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border3 min-w-[236px] py-3 rounded text-center text-lg text-white-A700">
    Hire Us Now
  </Button>





</div> */}
            </div>
          </div>


        </div>

        <div className=" flex flex-col md:flex-row md:gap-5 gap-10 mt-[2rem] items-center justify-start md:w-auto w-full">
          <Text
            className=" capitalize text-sm text-white-A700 w-auto font-light"
          >
            Copyright © 2022, All rights reserved.
          </Text>
          {/* <Text
            className="text-[11px] text-white-A700 w-auto  font-light"
          >
            <span className="text-white-A700 font-roboto ">
TERMS & CONDITIONS{" "}
            </span>
            <span className="text-light_blue-700 font-roboto mx-[1rem]">
|
            </span>
            <span className="text-white-A700 font-roboto">
{" "}
PRIVACY POLICY
            </span>
          </Text> */}
        </div>
      </div>
    </>
  );
};

export default HomeScreenPage;
