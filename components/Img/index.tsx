import Image from "next/image";
import React from "react";

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    onClick: Function;
    className: string;
    height: number;
    width: number;
    src: string;
    alt: string;
    fill:boolean;
    resize: string
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  onClick,
  height,
  width,
  className,
  src = "defaultNoData.png",
  alt = "default",
  fill,
  resize
}) => {
  return (
    <div className={className}>
      {fill ? 
       <Image
       onClick={onClick}
       layout= 'fill'
       src={src}
       alt={alt}
       objectFit={resize ?? 'cover'}
       objectPosition='left'
       className="w-full"
     />
     :
       <Image
       onClick={onClick}
       height={height ?? 500}
       width={width ?? 500}
       src={src}
       alt={alt}
       objectFit='contain'
       className="w-full"
       quality={100}
       unoptimized={true}
     />
      }
     
    </div>
  );
};
export { Img };
