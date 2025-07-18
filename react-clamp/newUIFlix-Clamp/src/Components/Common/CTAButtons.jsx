import React from 'react'

const CTAButtons = ({text,outline,btnFunction}) => {
  return (
    <div onClick={btnFunction} className={`w-full max-w-[350px] 2xl:mx-auto rounded-4xl flex items-center justify-center py-[6px] ${outline ? " border-2 border-[#4c12a1]":"bg-[#4c12a1] border-2 border-[#4c12a1]"}`}>
        <span className={` cursor-pointer text-12px ${outline ? "text-[#4c12a1]":"text-white"}`}>{text}</span>
    </div>
  )
}

export default CTAButtons