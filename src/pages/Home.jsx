import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ZigZagCard from '../components/Elements/ZigZagCard';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Corporate from '../components/Corporate';
import Gepg from '../images/clients/geps.png';
import Kws from '../images/clients/kws.png';
import Protergia from '../images/clients/protergia.png';

import { Input } from "@/components/ui/input"
import Layout from '@/components/Layout/Layout';


const cardData = [
    {
        title: "Title 1",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dignissimos repellat quidem ipsam aliquid unde suscipit reprehenderit assumenda esse iure.",
        img: Gepg,
    },

    {
        title: "Title 2",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dignissimos repellat quidem ipsam aliquid unde suscipit reprehenderit assumenda esse iure.",
        img: Kws,
    },
    {
        title: "Title 3",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dignissimos repellat quidem ipsam aliquid unde suscipit reprehenderit assumenda esse iure.",
        img: Protergia,
    },
]


const Home = () => {
    return (
        <Layout >
            <div className="2xl:px-60 mt-10 xl:px-16">
                <Hero />

                <Intro />
                <Corporate />

                {cardData.map((item, index) => (
                    <ZigZagCard
                        key={index}
                        title={item.title}
                        content={item.content}
                        img={item.img}
                        imageOnLeft={index % 2 === 0}
                        index={index}
                    />
                ))}
                <Portfolio />
                <Clients />
                {/* <Cta /> */}

            </div>
        </Layout>
    )
}

export default Home;

