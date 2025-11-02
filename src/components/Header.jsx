import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='text-center'>
            <h1 className='text-6xl font-bold '><span className='text-red-950'>FRONT</span> PAGE NEWS</h1>
            <p className='text-accent text-xl my-2'>Journalism Without Fear or Favour</p>
            <p className='text-accent'><span className='text-black'>{format(new Date(), "EEEE," )} </span >{format(new Date(), "MMMM dd, yyyy" )}</p>
        </div>
    );
};

export default Header;