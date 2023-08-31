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
} from "components";
// import TextOutline from "components/TextOutline";
import Link from "next/link";



const HomeScreenPage: FC = () => {
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState('/');


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    if (window?.location?.hash) {
      setSelectedLink(window?.location?.hash?.replace('#', ''))
    } else {
      setSelectedLink('/')
    }
    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto py-[30px] w-full">

        <div className=" h-[100vh]  relative w-full">

          {
            !isMobile ? (
              <div className=" flex  flex-row justify-between items-center sm:flex-col   w-[80%] mx-auto">
                <a href="/" onClick={() => setSelectedLink('/')}>
                  <Img
                    className=" h-[3rem] object-cover"
                    src="images/logo_nav.png"
                    alt="vector_One"
                  />
                </a>

                <div className="flex  sm:flex-col flex-row gap-[2rem] items-center">
                  <Text
                    // className="bg-clip-text bg-gradient  text-lg text-transparent w-auto"
                    className={`text-lg ${selectedLink === "/" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                    size="txtPoppinsMedium18"
                  >
                    {/* <Link href="/">Home</Link> */}
                    <a href="/" onClick={() => setSelectedLink('/')}>Home</a>
                  </Text>
                  <Text
                    // className="text-lg text-white-A700 w-auto"
                    className={`text-lg ${selectedLink === "about-us" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    <a href="#about-us" onClick={() => setSelectedLink('about-us')}> About Us</a>
                  </Text>
                  <Text
                    // className="text-lg text-white-A700 w-auto"
                    className={`text-lg ${selectedLink === "our-projects" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    <a href="#our-projects" onClick={() => setSelectedLink('our-projects')}>Portfolio</a>
                  </Text>
                  <Text
                    // className="text-lg text-white-A700 w-auto"
                    className={`text-lg ${selectedLink === "services" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    <a href="#services" onClick={() => setSelectedLink('services')}>Services</a>
                  </Text>
                  <Text
                    //  className="text-lg text-white-A700 w-auto"
                    className={`text-lg ${selectedLink === "faq" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    <a href="#faq" onClick={() => setSelectedLink('faq')}>FAQ</a>
                  </Text>
                  {/* <Button className="bg-gradient  cursor-pointer font-medium  min-w-[196px] md:ml-[0]  py-3 rounded text-center text-lg text-white-A700">
                    <a href="mailto:santosh.krishna@techsential.io"> Request A Quote</a>
                  </Button> */}
                </div>

              </div>
            ) : (
              <div className="flex flex-row justify-between md:px-5">

                <div className="image flex-col">
                  <a href="/" onClick={() => setSelectedLink('/')}>   <Img
                    className=" h-[3rem] object-cover"
                    src="images/logo_nav.png"
                    alt="vector_One"
                  />
                  </a>
                </div>

                <div className="image flex-col z-[2]">
                  <Img
                    onClick={() => {
                      setToggle(!toggle)
                    }}
                    // className=" h-[3rem] object-cover z-[10001]"
                    // src="images/menu.svg"
                    className={`h-[3rem] object-contain cursor-pointer ${toggle ? 'rotate-180' : 'rotate-0'}`}
                    src={toggle ? "images/close.svg" : "images/menu.svg"}
                    alt={toggle ? "close" : "menu"}
                  />
                </div>

                <div className={`${toggle ? 'slide-in' : 'slide-out'} p-4 py-20 space-y-4 flex flex-col fixed z-[1] h-[100vh] inset-y-0 right-0 w-2/3 bg-gray-700 bg-opacity-50  backdrop-blur-md shadow-lg`}>
                  <div className="flex-col h-full gap-5 p-5 flex ">

                    <Text
                      // className="bg-clip-text bg-gradient  text-lg text-transparent"
                      className={`text-[26px] ${selectedLink === "/" ? 'bg-clip-text bg-gradient text-transparent w-auto' : 'text-white-A700'} `}
                      size="txtPoppinsMedium18"
                    >
                      <a href="/" onClick={() => { setToggle(false); setSelectedLink('/') }}>Home</a>
                    </Text>
                    <Text
                      // className="text-lg text-white-A700 w-auto"
                      className={`text-[26px] ${selectedLink === "about-us" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      <a href="#about-us" onClick={() => { setToggle(false); setSelectedLink('about-us') }}>About Us</a>
                    </Text>
                    <Text
                      // className="text-lg text-white-A700 w-auto"
                      className={`text-[26px] ${selectedLink === "our-projects" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      <a href="#our-projects" onClick={() => { setToggle(false); setSelectedLink('our-projects') }}>Portfolio</a>
                    </Text>
                    <Text
                      // className="text-lg text-white-A700 w-auto"
                      className={`text-[26px] ${selectedLink === "services" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      <a href="#services" onClick={() => { setToggle(false); setSelectedLink('services') }}>Services</a>
                    </Text>
                    <Text
                      // className="text-lg text-white-A700 w-auto"
                      className={`text-[26px] ${selectedLink === "faq" ? 'bg-clip-text bg-gradient text-transparent' : 'text-white-A700'} `}
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      <a href="#faq" onClick={() => { setToggle(false); setSelectedLink('faq'); }}>FAQ</a>
                    </Text>
                    {/* <Button className="bg-gradient  cursor-pointer font-medium  min-w-[196px] md:ml-[0]  py-3 rounded text-center text-lg text-white-A700">
                        <a href="mailto:santosh.krishna@techsential.io">Request A Quote</a>
                        </Button> */}
                  </div>
                </div>

              </div>
            )
          }

          <div className="relative w-full">
            {isMobile && <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-sm w-auto h-[100vh]"></div>}
            <Img
              className="h-[716px] m-auto object-cover"
              src="images/header_bg.png"
              alt="Header-Background"
            />
          </div>
          <div className="absolute h-full flex flex-col md:gap-10 gap-28 inset-x-[0] items-end justify-center mx-auto top-[3%] w-[83%]">

            <div className="bg flex flex-col justify-center w-[50%] md:w-full sm:w-full">
              <Text
                className="leading-[50px] text-white-A700"
                size="txtPoppinsBold6867"
              >
                <span className=" font-poppins sm:text-[1.8rem] text-[3rem] font-light">
                  Welcome to
                </span>
                <br />
                <span className="bg-clip-text sm:text-[2.9rem] text-[4rem] bg-gradient text-transparent  font-poppins uppercase text-left font-bold ">
                  Techsential
                </span>
              </Text>
              <Text
                className="leading-[26px]  mt-[17px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                size="txtPoppinsLight21"
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
              <div className="flex sm:flex-col flex-row gap-2.5 items-center sm:items-start justify-start mt-[38px] w-[67%] md:w-full">
                <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[178px] py-3 rounded text-center text-lg text-white-A700">
                  <a href="mailto:santosh.krishna@techsential.io"> Contact Us</a>
                </Button>
                {/* <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border min-w-[190px] py-3 rounded text-center text-lg text-white-A700">
                <a href="mailto:santosh.krishna@techsential.io"> Get Free Quote</a>
                </Button> */}
              </div>
            </div>
          </div>
        </div>


        <div className="relative w-full" id="about-us">
          <div className="relative w-full">
            {/* {isMobile && <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-sm w-[100vw] h-[100vh]"></div>} */}
            <Img
              className=" m-auto object-cover h-auto w-full"
              src="images/cubes.png"
              alt="imageThree"
            />
          </div>


          <div className=" absolute flex flex-row  inset-x-[0] items-start justify-between mx-auto top-[18%] sm:top-[10%] w-[88%] sm:flex-col sm:gap-10">
            <div className="flex flex-col items-start  w-[20vw] sm:w-full sm:gap-5">
              <Text
                className="sm:leading-[26px] bg-clip-text bg-gradient sm:text-[1.8rem] text-[2.5rem] text-shadow-ts text-transparent uppercase"
                size="txtPoppinsSemiBold36"
              >
                Vision
              </Text>
              <Text
                className="sm:leading-[26px] sm:text-[17px] text-[19px] text-white-A700 "
                size="txtPoppinsLight24"
              >
                Empowering Innovation Through Technology: Shaping a Future of Possibilities.
              </Text>
            </div>

            <div className="flex flex-col items-start w-[23vw] sm:w-full sm:gap-5">
              <Text
                className="sm:leading-[26px] bg-clip-text bg-gradient  sm:text-[1.8rem] text-[2.5rem] text-shadow-ts text-transparent uppercase"
                size="txtPoppinsSemiBold36"
              >
                Mission
              </Text>
              <Text
                className="sm:leading-[26px]  sm:text-[17px] text-[19px] text-white-A700 "
                size="txtPoppinsLight24"
              >
                Our mission is to provide you with web, android, and design solutions for your businesses.
              </Text>
            </div>

          </div>
        </div>







        <div className="relative">
          <Text
            className="sm:mt-[2rem] bg-clip-text bg-gradient  sm:text-[40px] md:text-[46px] text-[54px] text-center text-transparent"
            size="txtPoppinsBold54"
            id="services"
          >
            Services
          </Text>
        </div>
        <div className=" relative mt-[2rem]  w-[100%] md:w-full">

          <div className="  flex flex-row justify-center m-auto w-[80%] md:gap-[2rem]  md:flex-col-reverse md:items-center">
            <div className="flex  flex-col gap-[0.8rem] w-[45%] md:w-[90%]  sm:mt-10 justify-center">
              <Text
                className="sm:leading-[26px] sm:text-center text-[2rem] sm:text-[1.5rem] font-light  text-white-A700  sm:w-full"

              >
                Website Design and Development Services
              </Text>
              <Text
                className="sm:leading-[26px] sm:text-center text-white-A700 font-light sm:text-[17px]  text-[19px] w-full"

              >
                If you’re looking for engaging and user-friendly web
                designs and solutions then you’re at the right place.
              </Text>
              <Text
                className="sm:leading-[26px]  text-white-A700 font-light sm:text-[17px]  text-[19px] sm:w-full sm:text-center"

              >
                <span className="text-white-A700 font-poppins  font-light ">
                  We develop Websites that are:
                  <br />
                </span>
                <ul className="sm:text-[15px] md:text-[17px] text-[19px] text-white-A700 font-poppins text-left text-lg font-light list-disc list-inside ml-5 ">
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
              className=" h-full  my-auto object-cover right-[0] w-[50%] sm:w-[80%]"
              src="images/img_2021.png"
              alt="2021"
            />
          </div>
        </div>


        <div className="flex flex-col  justify-start mt-[5rem]  w-full">



          <div className="bg-gray-900 gap-5 md:w-[100%] flex  md:px-5  relative md:flex-col md:items-center md:pb-10">
            <Img
              className="h-full object-cover w-[50%] md:w-[100%] px-20 py-10"
              src="images/eq.png"
              alt="imageFourteen"
            />
            <div className="flex flex-col w-[50%] justify-center gap-5 md:w-[80%]">
              <Text
                className="text-[2rem] md:text-center leading-[35px]  font-light  text-white-A700  md:w-full"

              >
                App Development
              </Text>
              <Text className="sm:leading-[26px] text-white-A700 md:text-center font-light md:text-[17px]  text-[19px] w-[80%] md:w-full"

              >
                Build engaging Unity games that attract a large audience and
                influence the players with incredible performance. We have
                experienced unity game engineers to build prime 2D and 3D
                games that run smoothly. We create visually stunning games
                and dynamic visualizations that offer a pleasing experience.
              </Text>
            </div>
          </div>



          <div className="gap-15 py-10 w-[80%] mx-auto  flex  md:px-5  md:mt-10 relative  md:items-center md:flex-col-reverse ">



            <div className="flex flex-col w-[45%] justify-center gap-5 md:w-full ">
              <Text
                className="text-[2rem] md:text-center leading-[35px]  font-light  text-white-A700  md:mt-10 md:w-full"

              >
                Blockchain Development
              </Text>
              <Text className="leading-[26px] text-white-A700 md:text-center font-light md:text-[17px] text-[19px] w-full"

              >
                You must be looking for heightened security, efficiency,
                and transparency, blockchain can help you with that. We’re
                best in blockchain application development, integration,
                and adaptation from the top Blockchain Development. We
                offer data-driven solutions to match your business needs.
              </Text>
            </div>
            <Img
              className="object-contain p-10 md:p-0  w-[50%] md:w-full"
              src="images/nuv.png"
              alt="imageFourteen"
            />



          </div>


          <div className="bg-gray-900 gap-5 md:w-full flex  md:px-5  relative md:flex-col md:items-center md:pb-10">
            <Img
              className="h-full object-cover w-[50%] md:w-full"
              src="images/brain.png"
              alt="imageFourteen"
            />
            <div className="flex flex-col w-[50%] justify-center gap-5 md:w-[80%]">
              <Text
                className="text-[2rem] md:text-center leading-[35px]  font-light  text-white-A700  md:w-full"

              >
                Artificial Intelligence (AI)
              </Text>
              <Text className="leading-[26px] text-white-A700 md:text-center font-light md:text-[17px] text-[19px] w-[80%] md:w-full"

              >
                We're your gateway to the future with cutting-edge AI solutions.
                Our team of AI specializes in advanced algorithms and custom
                solutions, helping your business thrive in the era of intelligence.
              </Text>
            </div>
          </div>

        </div>

        <Text
          className="bg-clip-text bg-gradient  mt-[2rem] sm:text-[40px] md:text-[46px] text-[54px] text-shadow-ts text-transparent"
          size="txtPoppinsBold54"
          id="our-projects"
        >
          Our Projects
        </Text>
        <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start max-w-[1206px] mt-[2rem] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[436px] md:h-auto object-cover rounded-[10px] w-1/2 md:w-full"
            src="images/nuv_project.png"
            alt="rectangleFive"
          />
          <Img
            className="md:flex-1 h-[436px] md:h-auto object-cover rounded-[10px] w-1/2 md:w-full"
            src="images/bcp_project.png"
            alt="rectangleSix"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start max-w-[1206px] md:mt-[1rem] mt-[2rem] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[436px] md:h-auto object-cover rounded-[10px] w-1/2 md:w-full"
            src="images/tfp_project.png"
            alt="rectangleFive"
          />
          <Img
            className="md:flex-1 h-[436px] md:h-auto object-cover rounded-[10px] w-1/2 md:w-full"
            src="images/eq_project.png"
            alt="rectangleSix"
          />
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
                  size="txtPoppinsBold54"
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
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-lg font-bold">
                            <>
                              Leslie Alexander
                              <br />
                            </>
                          </span>
                          <span className="text-gray-400 font-poppins text-base font-normal">
                            designation
                          </span>
                        </Text>
                        <Text
                          className="italic leading-[176.50%] mt-3.5 text-base text-center text-white-A700_ce w-full"
                          size="txtPoppinsItalic16"
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
                          size="txtPoppinsMedium14"
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


        <div className="flex flex-col gap-5 justify-start mx-auto w-[80%] mt-[2rem] sm:mt-[2rem] z-[1]" id="faq">
          <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
            <Text
              className="bg-clip-text bg-gradient  sm:text-[40px] md:text-[46px] text-[54px] text-center text-transparent"
              size="txtPoppinsBold54"

            >
              Frequently Asked Questions
            </Text>


            <div className=" w-full">
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
                      size="txtPoppinsRegular18"
                    >
                      How will app development help my business?
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[17px] items-center justify-start max-w-[1086px] w-full">
                    <Line className="bg-white-A700_4c h-[66px] md:h-px md:w-full w-px" />
                    <Text
                      className="leading-[150.00%] max-w-[990px] md:max-w-full text-base text-white-A700 tracking-[-0.80px]"
                      size="txtPoppinsLight16"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
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
                        size="txtPoppinsRegular18"
                      >
                        What are the benefits of blockchain technology?
                      </Text>
                    </div>
                    <Line className="bg-white-A700_4c h-px w-full" />
                  </div>
                </List>
              </div> */}
          </div>
          {/* <a
              href="javascript:"
              className="md:ml-[0] ml-[941px] text-lg text-white-A700"
            >
              <Text size="txtPoppinsRegular18">Read More</Text>
            </a> */}
        </div>


        <div className="bg-gradient3 border  flex flex-col items-center  justify-start  p-[71px] md:px-10  rounded-[35px] w-[90%] mt-[2rem]">

          <div className="flex flex-row  md:flex-col md:gap-10 md:items-center justify-between">
            <div className=" w-3/12  md:w-1/2 md:mx-auto ">
              <Img
                className="h-full md:h-auto object-cover"
                src="images/img_frame.png"
                alt="frame"
              />
            </div>
            <div className=" h-auto w-8/12 md:w-full md:items-center flex md:flex-col gap-10 my-auto ">
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

              <div className="image items-start  flex flex-col  gap-5 flex-1">
                <Text
                  className="leading-[26px] text-[19px] font-light  text-white-A700  md:text-[16px]"
                >
                  Contact Us
                </Text>
                <Text
                  className="leading-[26px] text-white-A700 font-light text-xs sm:text-[14px]"

                >
                  <ul className="leading-[26px] ">
                    <li >
                      ADDRESS: 1 MACARTHUR PLACE, SUITE #350SANTA ANA,CA 92707
                    </li>
                    <li >PHONE: 1-800-475-9149</li>
                    <li>EMAIL: INFO@USBFUND.COM</li>

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

        <div className=" flex sm:flex-col flex-row sm:gap-5 gap-10 mt-[2rem] items-center justify-start w-auto sm:w-full">
          <Text
            className="leading-[26px] capitalize text-sm text-white-A700 w-auto font-light"
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
