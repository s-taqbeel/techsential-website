import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopFivePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[89px] items-center justify-start mx-auto pb-[35px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[828px] mx-auto w-full">
            <Img
              className="h-[828px] m-auto object-cover w-full"
              src="images/img_image8_828x1440.png"
              alt="imageEight"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[154px] inset-x-[0] items-center justify-start mx-auto top-[7%] w-[84%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[49px] md:h-auto object-cover"
                  src="images/img_group55045.png"
                  alt="group55045"
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
                <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[196px] md:ml-[0] ml-[188px] py-3 rounded text-center text-lg text-white-A700">
                  Request A Quote
                </Button>
              </div>
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[68.67px] text-center text-transparent uppercase"
                size="txtPoppinsBold6867Lightblue700"
              >
                Portfolio
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-center justify-start mt-[-359.5px] mx-auto w-auto z-[1]">
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501"
              />
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502"
              />
              <div className="bg-gradient1  flex flex-col items-center justify-start px-[18px] rounded-[11px] w-full">
                <div className="flex relative w-[99%]">
                  <Img
                    className="h-[380px] my-auto object-cover w-[43%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760"
                  />
                  <Img
                    className="h-[242px] ml-[-13.43px] my-auto object-cover rounded-[9px] w-[62%] z-[1]"
                    src="images/img_desktop55.png"
                    alt="desktopFiftyFive"
                  />
                </div>
              </div>
            </div>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502_One"
              />
              <div className="bg-gradient1  flex flex-col items-end justify-start pl-5 rounded-[11px] w-full">
                <div className="flex relative w-full">
                  <Img
                    className="h-[380px] my-auto object-cover w-[41%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760_One"
                  />
                  <Img
                    className="h-80 ml-[-13.44px] my-auto object-cover rounded-bl-[9px] rounded-tl-[9px] w-[64%] z-[1]"
                    src="images/img_desktop55_320x233.png"
                    alt="desktopFiftyFive_One"
                  />
                </div>
              </div>
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501_One"
              />
            </div>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501_Two"
              />
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502_Two"
              />
              <div className="bg-gradient1  flex flex-col items-center justify-start px-[18px] rounded-[11px] w-full">
                <div className="flex relative w-[99%]">
                  <Img
                    className="h-[380px] my-auto object-cover w-[43%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760_Two"
                  />
                  <Img
                    className="h-[242px] ml-[-13.43px] my-auto object-cover rounded-[9px] w-[62%] z-[1]"
                    src="images/img_desktop55.png"
                    alt="desktopFiftyFive_Two"
                  />
                </div>
              </div>
            </div>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502_Three"
              />
              <div className="bg-gradient1  flex flex-col items-center justify-start px-[18px] rounded-[11px] w-full">
                <div className="flex relative w-[99%]">
                  <Img
                    className="h-[380px] my-auto object-cover w-[43%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760_Three"
                  />
                  <Img
                    className="h-[242px] ml-[-13.44px] my-auto object-cover rounded-[9px] w-[62%] z-[1]"
                    src="images/img_desktop55.png"
                    alt="desktopFiftyFive_Three"
                  />
                </div>
              </div>
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501_Three"
              />
            </div>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501_Four"
              />
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502_Four"
              />
              <div className="bg-gradient1  flex flex-col items-center justify-start px-[18px] rounded-[11px] w-full">
                <div className="flex relative w-[99%]">
                  <Img
                    className="h-[380px] my-auto object-cover w-[43%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760_Four"
                  />
                  <Img
                    className="h-[242px] ml-[-13.43px] my-auto object-cover rounded-[9px] w-[62%] z-[1]"
                    src="images/img_desktop55.png"
                    alt="desktopFiftyFive_Four"
                  />
                </div>
              </div>
            </div>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9502.png"
                alt="rectangle9502_Five"
              />
              <div className="bg-gradient1  flex flex-col items-center justify-start px-[18px] rounded-[11px] w-full">
                <div className="flex relative w-[99%]">
                  <Img
                    className="h-[380px] my-auto object-cover w-[43%]"
                    src="images/img_frame760_380x149.png"
                    alt="frame760_Five"
                  />
                  <Img
                    className="h-[242px] ml-[-13.44px] my-auto object-cover rounded-[9px] w-[62%] z-[1]"
                    src="images/img_desktop55.png"
                    alt="desktopFiftyFive_Five"
                  />
                </div>
              </div>
              <Img
                className="h-[380px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle9501.png"
                alt="rectangle9501_Five"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start max-w-[1340px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-5 justify-start w-[82%] md:w-full">
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
                      There was a time when people thought that the internet was
                      just a fad, and would just fizzle out. The internet
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
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="bg-gradient3  border border-solid flex flex-col items-center justify-end light_blue_700_purple_A400_border10 p-[71px] md:px-10 sm:px-5 rounded-[34px] w-full">
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
                          <Button className="bg-transparent border border-solid cursor-pointer font-medium leading-[normal] light_blue_700_purple_A400_border11 min-w-[236px] py-3 rounded text-center text-lg text-white-A700">
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

export default DesktopFivePage;
