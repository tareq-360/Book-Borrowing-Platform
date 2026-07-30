'use client'
import { Label, SearchField } from "@heroui/react";
import { useState } from "react";

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState();
    const inputValue = (event) => {
        const input = event.target.value;
        // console.log("Input Value is ", input);
        setSearchVal(input);
    }

    const searchHandle = () => {
        console.log("Input Value is ", searchVal);
    }

    return (
        <div>
            <div className=' my-5'>

                <SearchField className="" name="search">
                    <div className=' flex justify-center items-center'>
                        <SearchField.Group className="border-1 border-orange-100">
                            <SearchField.SearchIcon />
                            <SearchField.Input onChange={inputValue} className=" min-w-[20rem]" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                        <button onClick={() => searchHandle()} className=' btn  bg-base-100'>Search</button>
                    </div>
                </SearchField>

            </div>
        </div>
    );
};

export default SearchBar;