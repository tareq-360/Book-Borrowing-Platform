'use client'
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import SearchBar from './SearchBar';
import Link from 'next/link';
const HomePage = () => {


    
    
    return (
        <div className=' container mx-auto text-center py-5'>
            <div className=' flex justify-center items-center  bg-black my-5'>
                <button className=' btn btn-secondary font-bold'>Upcoming</button>
                <Marquee>

                    <p className=' p-3'>New Arrivals: [Book Name] | Special Discount on Memberships...New Arrivals: [Book Name] | Special Discount on Memberships..New Arrivals: [Book Name] | Special Discount on Memberships..</p>
                </Marquee>
            </div>
            {/* Search Section */}
            {/* <SearchBar></SearchBar> */}
            <div className='pt-5'>
                <h1 className=' text-4xl p-5 text-blue-500 font-bold'>Find Your Next Read</h1>
                <button className=' btn btn-primary'><Link href="/books">Browse Now</Link></button>

            </div>

        </div>
    );
};

export default HomePage;