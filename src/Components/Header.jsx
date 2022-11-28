import React from 'react'
import GoogleAuth from './GoogleAuth'


const Header = () => {
    return (
        <div className='flex justify-between p-3 bg-sky-700'>
            <h1 className='text-white text-3xl font-bold'>
                Github <span className='font-normal'>Jobs</span>
            </h1>
            <div>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
