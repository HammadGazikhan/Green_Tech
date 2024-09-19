import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
// import { CarouselApi } from "@/components/ui/carousel"
import heroImg from '../images/web-dev.svg';
import { useGetAll } from "../Hooks/useGetAll";

const Hero = () => {
    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [rows, setRows] = useState([]);

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
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <>
            <div className="hero" id='hero'>


                <div className="m-auto overflow-hidden md:mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <Carousel setApi={setApi} plugins={[
                        Autoplay({
                            delay: 5500,
                        }),
                    ]} >
                        <CarouselContent className="h-full my-12">

                            {rows?.map((row, index) => (
                                <CarouselItem key={index} className="flex justify-center align-middle content-center" style={{height: '75vh'}}>
                                    <img src={row.image} alt="" className=" "  />
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>


                </div>
            </div>
        </>
    )
}

export default Hero;