import React from 'react'

const CardWithIcon = ({ icon, title, desc }) => {
    return (
        <div className=" lg:mx-4 mx-2">
            <div className='text-lime-600 mb-4'>
                {icon}
            </div>
            <h3 className="text-3xl  text-lime-600 font-semibold"><span className='font-black'>{title}</span></h3>
            <div>
                <p className='my-3 text-xl text-gray-600 font-semibold'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default CardWithIcon