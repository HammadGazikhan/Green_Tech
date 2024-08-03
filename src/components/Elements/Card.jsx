import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({title, desc, btnText, btnLink="/"}) => {
    return (
        <div className="bg-white transition-all ease-in-out duration-400   text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-48">
            <div className=" lg:mx-4 mx-2">
            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">{title}</h4>
            <div>
                <p className='mtext-md font-medium leading-5 py-4 md:py-8 xl:py-12'>
                    {desc}
                </p>
                {btnText && 
                <div className="flex justify-center my-4">
                    <Link to={btnLink} className="text-white bg-lime-600 hover:bg-sky-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                        {btnText}
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>}
            </div>
        </div>
        </div>
    )
}

export default Card