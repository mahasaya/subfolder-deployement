import React from 'react'

// IconText.jsx
const IconText = ({ Icon, textCap, textSmall, mobile }) => {
    return (
        <div className={`flex items-center ${mobile ? 'gap-4' : 'gap-5'}`}>
            {Icon}
            <div className={mobile ? 'text-xl' : 'text-md'}>
                <div className=" capitalize text-center font-semibold">{textCap}</div>
                <div className="text-gray-300">{textSmall}</div>
            </div>
        </div>
    )
}

export default IconText