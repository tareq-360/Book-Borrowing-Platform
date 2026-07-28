import React from 'react';
import Marquee from 'react-fast-marquee';

const HomePage = () => {
    return (
        <div className=' h-screen container mx-auto text-center py-5'>
            <div className=' flex justify-center items-center'>
                <h1 className=' text-4xl p-5 text-blue-500 font-bold'>Find Your Next Read</h1>
                <button className=' btn btn-primary'>Browse Now</button>

            </div>
            <Marquee>
                <p className=' bg-base-300 p-3 my-5'>New Arrivals: [Book Name] | Special Discount on Memberships...New Arrivals: [Book Name] | Special Discount on Memberships..New Arrivals: [Book Name] | Special Discount on Memberships..</p>
            </Marquee>
        </div>
    );
};

export default HomePage;