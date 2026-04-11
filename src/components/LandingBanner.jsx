import React from 'react'

const LandingBanner = ({bannerImg,title}) => {
  return (
    <div
        className="relative w-full h-[350px] md:h-[450px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className=" text-2xl md:text-5xl text-white uppercase z-10 text-center px-2 ">
          {title}
        </h1>
      </div>
  )
}

export default LandingBanner