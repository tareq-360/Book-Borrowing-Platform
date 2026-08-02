'use client'
import { useEffect, useState } from "react";
import { Button, Card, CloseButton } from "@heroui/react";
import { FcManager } from "react-icons/fc";
import SearchBar from "@/components/shared/SearchBar";
import { Label, SearchField } from "@heroui/react";
import NoDataFound from "@/components/shared/NoDataFound";
import Link from "next/link";
import 'animate.css';

const AllBooksNav = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setData(data.books))

    }, []);
    // console.log("data ",data);

    const [searchVal, setSearchVal] = useState();
    const inputValue = (event) => {
        const input = event.target.value;
        // console.log("Input Value is ", input);
        setSearchVal(input);
    }
    const [seacrhBook, setSearchBook] = useState(null);
    const [searchWord, setSearchWord] = useState();
    const searchHandle = () => {
        const filteredBook = data.filter(book => book.title.toLowerCase().includes(searchVal.toLowerCase()));
        // console.log("Search Book ",filteredBook);
        // filteredBook.map(data => console.log(data.title));

        return (setSearchWord(searchVal), setSearchBook(filteredBook));
    }

    // console.log("Input Value is ", seacrhBook);

    // Category Filtering 
    const [categoryBooks, setCategoryBooks] = useState();
    const categoryHandle = (name) => {
        const allScienceBooks = data.filter(book => book.category.toLowerCase() === name);
        setCategoryBooks(allScienceBooks);
        // console.log("Data ",allScienceBooks);   
    }
    // console.log("Category data ",categoryBooks);


    return (
        <div className=" container mx-auto text-center py-10 ">
            {/* search Bar */}
            <div className=' my-5 pb-8'>

                <SearchField className="" name="search">
                    <div className=' flex justify-center items-center'>
                        <SearchField.Group className="border-1 border-orange-100">
                            <SearchField.SearchIcon />
                            <SearchField.Input onChange={inputValue} className=" min-w-screen text-white" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                        <button onClick={() => { searchHandle(), setCategoryBooks([]) }} className=' btn  bg-base-100'>Search</button>
                    </div>
                </SearchField>

            </div>
            {/* Card section */}
            {searchWord ?
                seacrhBook?.length > 0 ?
                    // category
                    <div className=" grid grid-cols-12">
                        <div className=" col-span-10 grid grid-cols-1 md:grid-cols-3  gap-4">
                            {seacrhBook.map(data =>

                                <Card key={data.id} className=" items-stretch ">

                                    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                                        <img
                                            alt={data.title}
                                            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"

                                            src={data.image_url}
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3">
                                        <Card.Header className="gap-1">
                                            <div className=" flex justify-between">
                                                <div className=" flex justify-center items-center gap-2">
                                                    <FcManager></FcManager>
                                                    <Card.Title className="pr-8">{data.author}</Card.Title>
                                                </div>
                                                <Card.Title className="px-1 rounded-md text-orange-500 font-bold outline text-center">{data.category}</Card.Title>
                                            </div>
                                            <Card.Description>
                                                <p className=" font-black py-3"> {data.title}</p>
                                            </Card.Description>
                                            <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                                        </Card.Header>
                                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-col">
                                                <span className=" text-xl  font-bold text-orange-400  ">{data.available_quantity}</span>
                                                <span className="text-xs text-muted font-bold">Available </span>
                                            </div>
                                            <Link href={`card-details/${data.id}`}>
                                                <Button className="w-full sm:w-auto">Details</Button>
                                            </Link>
                                        </Card.Footer>
                                    </div>
                                </Card>

                            )}
                        </div>


                    </div>
                    :
                    <NoDataFound searchTerm={seacrhBook} >

                    </NoDataFound>


                :
                <div className=" grid grid-cols-12 gap-2">
                    {/* Category */}
                    <div className=" col-span-3 lg:col-span-2">
                        <h1 className=" font-bold text-xl text-left ">All Category</h1>
                        <ul className=" text-left py-3 space-y-2">
                            <li className=" cursor-pointer hover:bg-base-100 hover:text-green-500 hover:rounded-md" onClick={() => categoryHandle("science")}>Science</li>
                            <li className=" cursor-pointer hover:bg-base-100 hover:text-green-500 hover:rounded-md" onClick={() => categoryHandle("tech")}>Tech</li>
                            <li className=" cursor-pointer hover:bg-base-100 hover:text-green-500 hover:rounded-md" onClick={() => categoryHandle("story")}>Story</li>
                        </ul>
                    </div>
                    {categoryBooks ?
                        // card by category
                        <div className=" col-span-9 lg:col-span-10 grid grid-cols-1 md:grid-cols-3  gap-4">
                            {categoryBooks.map(data =>
                                <Card key={data.id} className=" items-stretch ">

                                    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                                        <img
                                            alt={data.title}
                                            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"

                                            src={data.image_url}
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3">
                                        <Card.Header className="gap-1">
                                            <div className=" flex justify-between">
                                                <div className=" flex justify-center items-center gap-2">
                                                    <FcManager></FcManager>
                                                    <Card.Title className="pr-8">{data.author}</Card.Title>
                                                </div>
                                                <Card.Title className="px-1 rounded-md text-orange-500 font-bold outline text-center">{data.category}</Card.Title>
                                            </div>
                                            <Card.Description>
                                                <p className=" font-black py-3"> {data.title}</p>
                                            </Card.Description>
                                            <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                                        </Card.Header>
                                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-col">
                                                <span className=" text-xl  font-bold text-orange-400  ">{data.available_quantity}</span>
                                                <span className="text-xs text-muted font-bold">Available </span>
                                            </div>
                                            <Link href={`card-details/${data.id}`}>
                                                <Button className="w-full sm:w-auto">Details</Button>
                                            </Link>
                                        </Card.Footer>
                                    </div>
                                </Card>


                            )}
                        </div>
                        :
                        // card by all data 
                        <div className=" col-span-9 grid grid-cols-1 md:grid-cols-3  gap-4">
                            {data.map(data =>
                                <Card key={data.id} className="animate__animated animate__fadeInUp">

                                    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                                        <img
                                            alt={data.title}
                                            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"

                                            src={data.image_url}
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3">
                                        <Card.Header className="gap-1">
                                            <div className=" flex justify-between">
                                                <div className=" flex justify-center items-center gap-2">
                                                    <FcManager></FcManager>
                                                    <Card.Title className="pr-8 text-white">{data.author}</Card.Title>
                                                </div>
                                                <Card.Title className="px-1 rounded-md text-orange-500 font-bold outline text-center">{data.category}</Card.Title>
                                            </div>
                                            <Card.Description>
                                                <p className=" font-black py-3"> {data.title}</p>
                                            </Card.Description>
                                            <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                                        </Card.Header>
                                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-col">
                                                <span className=" text-xl  font-bold text-orange-400  ">{data.available_quantity}</span>
                                                <span className="text-xs text-muted font-bold">Available </span>
                                            </div>
                                            <Link href={`card-details/${data.id}`}>
                                                <Button className="w-full sm:w-auto">Details</Button>
                                            </Link>
                                        </Card.Footer>
                                    </div>
                                </Card>


                            )}
                        </div>
                    }
                </div>
            }

        </div>
    );
};

export default AllBooksNav;