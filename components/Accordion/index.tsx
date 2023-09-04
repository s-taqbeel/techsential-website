import { Img, Line, Text } from "../";
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
            <div className="flex flex-col gap-[18px] items-center md:items-start justify-start w-auto md:w-full">
                <button
                    className="flex flex-row items-center gap-5"
                    onClick={toggle}
                    type="button"
                >
                    <Img
                        height={50}
                        width={50}
                        className={` transform ${isShowing ? 'rotate-90' : 'rotate-0'}`}
                        src="/images/faq_arrow.svg"
                        alt="arrow"
                    />

                    <Text className=" text-xl text-white-A700  font-light w-[90%] md:w-full">
                        {title}
                    </Text>
                </button>
            </div>

            <div className={`flex flex-col md:flex-row gap-[17px] items-center md:items-start justify-start w-full ${isShowing ? 'slide-down' : 'slide-up'}`}>
                <Line className="bg-white-A700_4c md:h-[66px] h-px md:w-px" />
                <Text className="  max-w-[990px] md:max-w-full  text-lg text-white-A700 tracking-[-0.80px] font-light md:w-2/3"                >
                    {content}
                </Text>
            </div>
            <Line className="bg-white-A700_4c h-px w-full" />
        </div>
    );
};

export { Accordion };
