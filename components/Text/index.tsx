import React from "react";

const sizeClasses = {
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsLight24: "font-light font-poppins",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtRobotoRomanSemiBold17: "font-roboto font-semibold",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold54: "font-bold font-poppins",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsLight21: "font-light font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsItalic16: "font-normal font-poppins italic",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsBold6867Lightblue700: "font-bold font-poppins",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsBold6867: "font-bold font-poppins",
  txtRobotoRomanRegular11: "font-normal font-roboto",
  txtPoppinsMedium16: "font-medium font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
