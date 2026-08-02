'use client';

import { Button, Card, CardBody, CardContent } from "@heroui/react";
import Link from "next/link";


export default function NoDataFound({ searchTerm = ''}) {
  
  return (
    
    <Card
      shadow="none" 
      className="w-full border-2 border-dashed border-base-300 bg-base-100/50 my-4"
    >
        
      <CardContent className="flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
        {/* Visual Icon Badge using DaisyUI indicator styling */}
        <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center text-base-content/50 mb-4 shadow-inner">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 10.5h-3" 
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-xl font-bold text-base-content mb-1">
          {searchTerm ? 'No results found' : 'No data available'}
        </h3>

        <Link href="/"><button className=" btn btn-secondary ">Back To Home</button></Link>
        <p className="text-sm text-base-content/70 max-w-sm mb-6">
          {searchTerm ? (
            <>
              We couldn't find anything matching{' '}
              <span className="font-semibold text-primary">{searchTerm}</span>. 
              Try checking for spelling errors or searching with a different keyword.
            </>
          ) : (
            'There are currently no items to display. Try adding some data or refreshing the page.'
          )}
        </p>

      </CardContent>
    </Card>
  );
}