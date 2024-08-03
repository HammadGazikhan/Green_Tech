import React from 'react'

const ImgZoomCard = ({ img, title, desc, dt }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
      <div className="m-2 text-justify text-sm">
        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
        <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>
        <p className="text-md font-medium">
          {desc}
        </p>
        <p className='text-sm '>{dt}</p>
      </div>
    </div>
  )
}

export default ImgZoomCard