import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[25px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1039px] md:h-[828px] md:px-5 relative w-full">
            <div className="absolute md:h-[828px] h-[881px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute h-[828px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[828px] m-auto object-cover w-full"
                  src="images/img_image8_828x1440.png"
                  alt="imageEight"
                />
                <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[7%] w-[83%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[49px] md:h-auto object-cover"
                      src="images/img_vector_49x45.png"
                      alt="vector"
                    />
                    <Img
                      className="h-[21px] md:h-auto ml-1.5 md:ml-[0] object-cover"
                      src="images/img_vector_21x174.png"
                      alt="vector_One"
                    />
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[29px] items-start justify-start md:ml-[0] ml-[162px] w-auto sm:w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-lg text-transparent w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsMedium18WhiteA700"
                      >
                        About Us
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsMedium18WhiteA700"
                      >
                        Portfolio
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsMedium18WhiteA700"
                      >
                        Services
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsMedium18WhiteA700"
                      >
                        FAQ
                      </Text>
                    </div>
                    <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[196px] md:ml-[0] ml-[167px] py-3 rounded text-center text-lg text-white-A700">
                      Request A Quote
                    </Button>
                  </div>
                  <Text
                    className="bg-clip-text bg-gradient  md:ml-[0] ml-[439px] mt-[154px] md:text-5xl text-[68.67px] text-center text-transparent uppercase"
                    size="txtPoppinsBold6867Lightblue700"
                  >
                    Services
                  </Text>
                  <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[102px] mt-[171px]">
                    <Text
                      className="leading-[116.50%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-[90%] sm:w-full"
                      size="txtPoppinsRegular36"
                    >
                      Website Design and Development Services
                    </Text>
                    <Text
                      className="leading-[129.50%] text-white-A700 text-xl w-full"
                      size="txtPoppinsRegular20"
                    >
                      If you’re looking for engaging and user-friendly web
                      designs and solutions then you’re at the right place.
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] leading-[129.50%] left-[15%] text-white-A700 text-xl"
                size="txtPoppinsRegular20"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Qualities of a Great Website
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left text-lg font-normal">
                  <>
                    Elegant Designs and Fully Functional
                    <br />
                    User Friendly
                    <br />
                    Optimized for Mobiles
                    <br />
                    Unique and Quality Content
                    <br />
                    Readily accessible contact and location
                    <br />
                    Optimized for Search and the Social Web
                  </>
                </span>
              </Text>
            </div>
            <Button className="absolute bg-transparent border border-solid bottom-[6%] cursor-pointer font-medium leading-[normal] left-[15%] light_blue_700_purple_A400_border4 min-w-[236px] py-3 rounded text-center text-lg text-white-A700">
              View More
            </Button>
            <Img
              className="absolute bottom-[0] h-[559px] object-cover right-[6%] w-2/5"
              src="images/img_2021.png"
              alt="2021"
            />
          </div>
          <div className="bg-gray-900 flex flex-col items-center justify-start mt-[70px] md:px-10 sm:px-5 px-[201px] w-full">
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-center max-w-[1020px] mx-auto w-full">
              <Img
                className="md:flex-1 h-[456px] sm:h-auto object-cover w-[44%] md:w-full"
                src="images/img_image13.png"
                alt="imageThirteen"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start w-[54%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  Game Development
                </Text>
                <Text
                  className="leading-[129.50%] mt-4 text-white-A700 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  Build engaging Unity games that attract a large audience and
                  influence the players with incredible performance. We have
                  experienced unity game engineers to build prime 2D and 3D
                  games that run smoothly. We create visually stunning games and
                  dynamic visualizations that offer a pleasing experience.
                </Text>
                <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border5 min-w-[236px] mt-7 py-3 rounded text-center text-lg text-white-A700">
                  View More
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-center max-w-[995px] mt-[13px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[58px] w-[49%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsRegular36"
              >
                Blockchain Development
              </Text>
              <Text
                className="leading-[129.50%] mt-[15px] text-white-A700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                You must be looking for heightened security, efficiency, and
                transparency, blockchain can help you with that. We’re best in
                blockchain application development, integration, and adaptation
                from the top Blockchain Development. We offer data-driven
                solutions to match your business needs.
              </Text>
              <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border6 min-w-[236px] mt-[37px] py-3 rounded text-center text-lg text-white-A700">
                View More
              </Button>
            </div>
            <div className="md:h-[430px] h-[437px] relative w-[47%] md:w-full">
              <div className="absolute md:h-[329px] h-[399px] right-[0] top-[0] w-[92%] sm:w-full">
                <div className="absolute bottom-[0] md:h-[329px] h-[355px] left-[0] w-[91%] sm:w-full">
                  <div className="absolute md:h-[329px] h-[355px] inset-y-[0] left-[0] my-auto w-[95%]">
                    <div className="absolute backdrop-opacity-[0.5] bg-orange-400_4c blur-[400.00px] h-[273px] right-[9%] rounded-[136px] top-[0] w-[273px]"></div>
                    <Img
                      className="absolute bottom-[0] h-[329px] inset-x-[0] mx-auto"
                      src="images/img_ellipse558.svg"
                      alt="ellipse558"
                    />
                  </div>
                  <Img
                    className="absolute h-[269px] right-[0] top-[7%]"
                    src="images/img_ellipse559.svg"
                    alt="ellipse559"
                  />
                </div>
                <Img
                  className="absolute h-[45px] left-[14%] top-[0] w-11"
                  src="images/img_menu.svg"
                  alt="menu"
                />
                <Img
                  className="absolute bottom-[8%] h-[26px] left-[0] w-[26px]"
                  src="images/img_misc01.svg"
                  alt="miscOne"
                />
                <Img
                  className="absolute h-[39px] right-[0] top-[9%]"
                  src="images/img_vector.svg"
                  alt="vector_Two"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col h-[367px] items-center justify-start right-[6%] rounded-[183px] shadow-bs w-[367px]">
                <Img
                  className="h-[367px] md:h-auto rotate-[72deg] rounded-[50%] w-[367px]"
                  src="images/img_rectangle_367x367.png"
                  alt="rectangle"
                />
              </div>
              <Img
                className="absolute h-[430px] inset-[0] justify-center m-auto object-cover w-[98%]"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start mt-[33px] w-full">
            <div className="bg-gray-900 flex flex-col gap-[38px] justify-end p-[73px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[579px] mr-[164px] mt-1">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  ERP Systems
                </Text>
                <Text
                  className="leading-[129.50%] text-white-A700 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  <>
                    If you’re running a business requires countless resources
                    and a lot of time. If you feel your staff needs help to
                    manage all the tasks and you’re thinking of hiring more
                    people, don&#39;t rush. Go for automation of processes
                    instead. With the help of enterprise resource planning (ERP)
                    software, you can organize processes with maximum efficiency
                    and save boatloads of time. We can help you with that.
                  </>
                </Text>
              </div>
              <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border7 min-w-[236px] md:ml-[0] ml-[573px] mr-[482px] py-3 rounded text-center text-lg text-white-A700">
                View More
              </Button>
            </div>
            <div className="flex flex-col gap-5 justify-start max-w-[1086px] mx-auto md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
                <Text
                  className="bg-clip-text bg-gradient  sm:text-[40px] md:text-[46px] text-[54px] text-center text-transparent"
                  size="txtPoppinsBold54"
                >
                  Frequently Asked Questions
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
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
                </div>
              </div>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[941px] text-lg text-white-A700"
              >
                <Text size="txtPoppinsRegular18">Read More</Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1340px] mt-[75px] mx-auto md:px-5 w-full">
            <div className="bg-gradient3  border border-solid flex flex-col items-center justify-end light_blue_700_purple_A400_border8 p-[71px] md:px-10 sm:px-5 rounded-[34px] w-full">
              <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                    <Img
                      className="h-[238px] md:h-auto object-cover"
                      src="images/img_frame.png"
                      alt="frame"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[47px]">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-4/5 md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsMedium16"
                        >
                          Important links
                        </Text>
                        <a
                          href="javascript:"
                          className="sm:ml-[0] ml-[89px] text-base text-white-A700"
                        >
                          <Text size="txtPoppinsMedium16">Contact Us</Text>
                        </a>
                        <Text
                          className="sm:ml-[0] ml-[179px] sm:mt-0 mt-[3px] text-[17px] text-white-A700"
                          size="txtRobotoRomanSemiBold17"
                        >
                          FOLLOW US
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtPoppinsRegular12"
                        >
                          <>
                            HOME
                            <br />
                            Services
                            <br />
                            Faq
                            <br />
                            Who we are?
                            <br />
                            Completed Projects
                            <br />
                            BLOG
                          </>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[92px] text-white-A700 text-xs"
                          size="txtRobotoRomanRegular12"
                        >
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            ADDRESS:
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            <>
                              {" "}
                              <br />1 MACARTHUR PLACE, SUITE #350SANTA ANA,CA
                              92707
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            PHONE:
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            <>
                              1-800-475-9149
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-semibold">
                            EMAIL:
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            INFO@USBFUND.COM
                          </span>
                        </Text>
                        <div className="flex md:flex-1 flex-col font-poppins gap-[25px] items-start justify-start md:ml-[0] ml-[49px] w-[33%] md:w-full">
                          <Img
                            className="h-[29px] md:h-auto object-cover"
                            src="images/img_group59.png"
                            alt="groupFiftyNine"
                          />
                          <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border9 min-w-[236px] py-3 rounded text-center text-lg text-white-A700">
                            Hire Us Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[71px] items-center justify-start w-auto sm:w-full">
              <Text
                className="capitalize text-sm text-white-A700 w-auto"
                size="txtPoppinsRegular14WhiteA700"
              >
                Copyright © 2022, All rights reserved.
              </Text>
              <Text
                className="text-[11px] text-white-A700 w-auto"
                size="txtRobotoRomanRegular11"
              >
                <span className="text-white-A700 font-roboto text-left font-normal">
                  TERMS & CONDITIONS{" "}
                </span>
                <span className="text-light_blue-700 font-roboto text-left font-normal">
                  |
                </span>
                <span className="text-white-A700 font-roboto text-left font-normal">
                  {" "}
                  PRIVACY POLICY
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
