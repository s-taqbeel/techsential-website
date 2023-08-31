import { Img, Line, Text } from "components";
import React from "react";
import { useState } from "react";

export type AccordionProps =
    Partial<{
        title: string;
        content: string
    }>;

const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
    title, content
}) => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div className="flex flex-col gap-[1rem] mt-[25px] items-start justify-start w-full mx-auto md:w-full">
            <div className="flex sm:flex-col flex-row gap-[18px] items-center sm:items-start justify-start w-auto md:w-full">
                <button
                    className="flex flex-row items-center gap-5"
                    onClick={toggle}
                    type="button"
                >
                    <Img
                        // className={`h-[2rem] w-5 transform ${isShowing ? 'rotate-90' : 'rotate-0'}`}
                        className={`h-[2rem] w-5 transform ${isShowing ? 'rotate-90' : 'rotate-0'}`}
                        src="images/faq_arrow.svg"
                        alt="arrowdown"
                    />

                    <Text
                        className="leading-[26px] text-[21px] text-white-A700 w-auto font-light"
                    >
                        {title}
                    </Text>
                </button>
            </div>

            {/* <div className={` flex md:flex-col flex-row gap-[17px] items-center sm:items-start justify-start  w-full  ${isShowing ? 'block' : 'hidden'} `}> */}
            <div className={`flex md:flex-col flex-row gap-[17px] items-center sm:items-start justify-start w-full ${isShowing ? 'slide-down' : 'slide-up'}`}>
                <Line className="bg-white-A700_4c h-[66px] md:h-px md:w-full w-px" />
                <Text
                    className="leading-[26px]  max-w-[990px] md:max-w-full  text-[17px] text-white-A700 tracking-[-0.80px]"
                    size="txtPoppinsLight16"
                >
                    {content}
                </Text>
            </div>
            <Line className="bg-white-A700_4c h-px w-[96%]" />
        </div>
    );
};

export { Accordion };
