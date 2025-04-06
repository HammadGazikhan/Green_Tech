import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useDocTitle } from '../components/CustomHook';
import Layout from '@/components/Layout/Layout';


const Support = (props) => {

    useDocTitle('LCS | LCS - Demo our products')

    return (
        <>
            <Layout >
                <div className="2xl:px-60 mt-28 xl:px-16">
                    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                        <h1>Support</h1>

                        <div className="">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It comes with default styles that matches the other
                                        components&apos; aesthetic.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It&apos;s animated by default, but you can disable it if you
                                        prefer.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Layout>
        </>


    )
}

export default Support;