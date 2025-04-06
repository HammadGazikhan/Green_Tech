

import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';


const faqs = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them when your data changes."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Instead of predefined components, it provides low-level utility classes that let you build completely custom designs."
    },
    {
        question: "How do I install React?",
        answer: "You can create a new React project using Create React App. Run 'npx create-react-app my-app' in your terminal, replace 'my-app' with your project name. For Next.js projects, use 'npx create-next-app@latest'."
    },
    {
        question: "What are React Hooks?",
        answer: "React Hooks are functions that let you use state and other React features in functional components. Some commonly used hooks include useState, useEffect, useContext, and useRef."
    }
];

function Solution() {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Layout >
                <div className="2xl:px-60 mt-28 xl:px-16">
                    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                        <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            className="flex justify-between items-center w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                                            onClick={() => toggleItem(index)}
                                            aria-expanded={openItemIndex === index}
                                        >
                                            <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                                            <span
                                                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openItemIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            >V</span>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItemIndex === index ? 'max-h-96' : 'max-h-0'
                                                }`}
                                        >
                                            <div className="p-4 bg-white text-gray-600">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    );
}

export default Solution;