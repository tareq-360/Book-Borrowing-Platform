'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const CardDetails = ({ params }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then((data) => setData(data.books))
        // .catch((error) => console.error("Failed to load data:", error));
    }, []);

    const { id } = useParams();

    const card = data.find(data => String(data.id) === String(id));

    // console.log("data ",card.title);
    return (
        // <div className=" container mx-auto bg-slate-900 min-h-screen">
        //     <div className="bg-base-100 rounded-md flex flex-row-reverse p-10 shadow-sm">
        //         <figure className="">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        //                 alt="Shoes"
        //                 className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-center  rounded-md">
        //             <h2 className="card-title text-2xl pb-3">{card?.title}</h2>
        //             <p className=" border flex justify-center items-center px-5 rounded-md">
        //                 Author  <span className=" text-orange-500 px-2"> {card?.author}</span></p>
        //             <p className="">{card?.description}</p>
        //             <p className=" font-bold text-xl text-blue-500">{card?.available_quantity} copies left</p>
        //             <div className="card-actions">
        //                 <button className="btn btn-primary">Borrow Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container mx-auto bg-slate-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-black rounded-md flex flex-col md:flex-row-reverse p-10 shadow-sm items-center justify-center gap-8 ">

                {/* ছবি সংক্রান্ত ডিভ */}
                <figure className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={card?.image_url}
                        alt={card?.title || "Shoes"}
                        className="rounded-xl w-full object-cover max-h-[60vh]"
                    />
                </figure>

                {/* লেখার অংশ */}
                <div className="card-body items-center text-center rounded-md w-full md:w-1/2 flex-none">
                    <h2 className="card-title text-2xl pb-3">{card?.title}</h2>
                    <p className="border flex justify-center items-center px-5 py-1 rounded-md flex-grow-0">
                        Author <span className="text-orange-500 px-2">{card?.author}</span>
                    </p>
                    <p className="py-2">{card?.description}</p>
                    <p className="font-bold text-xl text-blue-500 flex-grow-0">
                        {card?.available_quantity} copies left
                    </p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary">Borrow Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;