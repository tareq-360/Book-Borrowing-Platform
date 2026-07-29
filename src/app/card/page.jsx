'use client'
import { useEffect, useState } from "react";
import { Button, Card, CloseButton } from "@heroui/react";
import { FcManager } from "react-icons/fc";

const BookCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setData(data.books))

    }, []);
    // console.log("data ",data);
    return (
        <div className=" container mx-auto text-center py-10">
            
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.slice(0, 4).map(data =>

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
                                    {data.description}
                                </Card.Description>
                                <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                            </Card.Header>
                            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-col">
                                    <span className=" text-xl  font-bold text-orange-400  ">{data.available_quantity}</span>
                                    <span className="text-xs text-muted font-bold">Available </span>
                                </div>
                                <Button className="w-full sm:w-auto">Borrow Now</Button>
                            </Card.Footer>
                        </div>
                    </Card>

                )}
            </div>
        </div>
    );
};

export default BookCard;