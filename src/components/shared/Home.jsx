import React from 'react';
import Marquee from 'react-fast-marquee';
import { Label, SearchField } from "@heroui/react";
const HomePage = () => {
    return (
        <div className=' container mx-auto text-center py-5'>
            <div className=' flex justify-center items-center  bg-base-300 my-5'>
                <button className=' btn btn-secondary font-bold'>Upcoming</button>
                <Marquee>

                    <p className=' p-3'>New Arrivals: [Book Name] | Special Discount on Memberships...New Arrivals: [Book Name] | Special Discount on Memberships..New Arrivals: [Book Name] | Special Discount on Memberships..</p>
                </Marquee>
            </div>
            <div className=' my-5'>

                <SearchField className="" name="search">
                    <div className=' flex justify-center items-center'>
                        <SearchField.Group className="border-1 border-orange-100">
                            <SearchField.SearchIcon />
                            <SearchField.Input className=" min-w-[20rem]" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                        <button className=' btn  bg-base-100'>Search</button>
                    </div>
                </SearchField>

            </div>
            <div className='pt-5'>
                <h1 className=' text-4xl p-5 text-blue-500 font-bold'>Find Your Next Read</h1>
                <button className=' btn btn-primary'>Browse Now</button>

            </div>

        </div>
    );
};

export default HomePage;