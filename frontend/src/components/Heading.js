import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Heading = ({title}) => {
    return (
        <Bounce left>
            <div className="flex flex-col items-center space-x-2 pb-4">
                <h1 className="text-white poppins text-3xl">Our <span className="text-red-200 font-semibold select-none">{title}</span></h1>
                <div className="bg-red-200 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
            </div>
        </Bounce>
    )
}

export default Heading