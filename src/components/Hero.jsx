import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import { CarouselApi } from "@/components/ui/carousel"
import heroImg from "../images/web-dev.svg";
import { useGetAll } from "../Hooks/useGetAll";

const Hero = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [rows, setRows] = useState([
    {
      image: "https://www.nichrome.com/blog/wp-content/uploads/2021/08/3.jpg",
    },
    {
      image:
        "https://www.rovemaindia.in/wp-content/uploads/2024/08/Filling-System.jpg.webp",
    },
    {
      image:
        "	https://img.freepik.com/free-vector/baggage-carousel-airport-elements-vector-collection_1308-132026.jpg?t=st=1729677947~exp=1729681547~hmac=55cf4b8b5023e8d51a11d3a829c4597e34570c1b6b4dc8addcdf151fe10fe6a2&w=740",
    },
    {
      image:
        "	https://www.rovemaindia.in/wp-content/uploads/2024/07/End-of-Line-3.jpg.webp",
    },
  ]);

  const { data: Cards, refetch } = useGetAll({
    key: `/stats/carousel/nt`,
    select: (data) => data.data || [],
    onSuccess: (data) => {
      console.log(data, "<----------CardsIndex");
      setRows(data.rows);
    },
  });
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <div className="hero" id="hero">
        <div
          className="m-auto overflow-hidden md:mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5500,
              }),
            ]}
          >
            <CarouselContent className="h-full my-12">
              {rows?.map((row, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center align-middle content-center"
                  style={{ height: "75vh" }}
                >
                  <img src={row.image} alt="" className=" " />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
