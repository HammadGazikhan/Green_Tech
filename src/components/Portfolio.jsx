import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import CardWithIcon from './Elements/CardWithIcon';
import Card from './Elements/ImgZoomCard';
import { useGetAll } from "../Hooks/useGetAll";

const Portfolio = () => {
    const [rows, setRows] = useState([]);
    const { data: Cards, refetch } = useGetAll({
        key: `/stats/card/nt`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------CardsIndex");
            setRows(data.rows);
        },
    });
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-lime-600 uppercase font-bold">Cards</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-lime-600 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {rows.map((row, index) => (


                        <Card title={row.card_title} img={row.image} desc={row.card_desc} dt={row.createdAt} />

                    ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;