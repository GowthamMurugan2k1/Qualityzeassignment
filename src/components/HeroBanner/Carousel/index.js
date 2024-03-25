// "use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselData } from "../../../../utils/Rawdata";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

const carouselDIV = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1.5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      containerClass="h-full"
      // sliderClass="!pl-[5rem] !gap-20"
      // itemClass="!w-fit"
      centerMode
      ssr
      customLeftArrow={<CustomLeftArrow/>}
      customRightArrow={<CustomRightArrow/>}
    >
      {CarouselData.map((item)=>{
        return(
          <div key={item.id} className="w-fit "> 
            <Image src={item.imgsrc} width={100} height={100} className="rounded-full  w-[150px] h-[150px] border-solid border-8 border-white max-md:w-[50px] max-md:h-[50px] max-sm:border-4 object-cover" />
            <p className="text-center py-1 text-white text-nowrap">{item.name}</p>
          </div>
        )
      })}
    </Carousel>
  );
};

export default carouselDIV;


export const CustomRightArrow = ({ onClick }) => {
  
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} className="bg-white rounded-2xl text-[color:var(--primary-background-color)] absolute p-2 right-0"> <MdKeyboardArrowLeft style={{rotate:'180deg'}}/> </button>;
};

export const CustomLeftArrow = ({ onClick }) => {
  
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} className="bg-white rounded-2xl text-[color:var(--primary-background-color)] absolute p-2 left-0"> <MdKeyboardArrowLeft/> </button>;
};