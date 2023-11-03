import React from 'react'

const FeaturingItems = ({item}) => {
  return (
    <div className="flex-1 m-3 relative " style={{ height: "70vh" }}>
    <div style={{ height: "100%", overflow: "hidden" }}>
      <img
        src={item.img}
        alt="images"
        style={{ width: "100%", objectFit: "cover", height: "100%" }}
      />
    </div>
    <div
      className={`absolute h-[100%] w-[100%] top-0 left-0 flex items-center flex-col justify-center`}
    >
      <h1 className={`text-2xl font-bold text-white mb-[20px]`}>
        {item.title}
      </h1>
      <button className={`border-none p-[10px] bg-white text-gray-600 cursor-pointer font-medium`}>
        SHOP NOW
      </button>
    </div>
  </div>
  )
}

export default FeaturingItems