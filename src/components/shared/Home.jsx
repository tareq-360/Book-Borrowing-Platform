'use client'
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import SearchBar from './SearchBar';
import Link from 'next/link';
import 'animate.css';
const HomePage = () => {




    return (
        <div className=' container mx-auto text-center py-5'>
            <div className=' flex justify-center items-center  bg-base-300 my-5'>
                <button className=' btn btn-secondary font-bold'>Upcoming</button>
                <Marquee>

                    <p className=' p-3'>New Arrivals: [Book Name] | Special Discount on Memberships...New Arrivals: [Book Name] | Special Discount on Memberships..New Arrivals: [Book Name] | Special Discount on Memberships..</p>
                </Marquee>
            </div>
            {/* Search Section */}
            {/* <SearchBar></SearchBar> */}
            <div className='pt-5 animate__animated animate__bounceInDown animate__delay-0.5s'>
                {/* <h1 className=' text-6xl p-5 text-blue-500  font-extrabold'>Find Your Next Read</h1> */}
                <section className="text-center mb-5">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Find Your Next Read
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Welcome to your ultimate online book borrowing platform. Discover, borrow,
                        and share your favorite stories and tech guides with our growing community.
                    </p>
                </section>
                <button className=' btn btn-primary'><Link href="/books">Browse Now</Link></button>

            </div>

        </div>
    );
};

export default HomePage;