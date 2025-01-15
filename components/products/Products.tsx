'use client'

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/demo/product";
import { Input } from "../ui/input";
import FilterModal from "./FilterModal";




export default function Products() {



    return (
        <>
        
        <div className="flex flex-col items-center justify-center h-screen gap-5">
            <div className="w-full flex items-center justify-between  border-b p-1">
                <h1>Products</h1>
                <div className="flex items-center gap-3">
                    <FilterModal  />

                    <form className="flex items-center">
    

                        <Input size={30} placeholder="Find products..."  />
                    </form>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="flex gap-3 ">
                <Button variant={'outline'} size={'icon'}><ChevronLeftIcon /></Button>
                <div className="flex gap-3">
                    <Button variant={'outline'} size={'icon'}>1</Button>
                    <Button variant={'outline'} size={'icon'}>2</Button>
                    <Button variant={'outline'} size={'icon'}>3</Button>
                    <Button variant={'outline'} size={'icon'}>4</Button>
                    <Button variant={'outline'} size={'icon'}>5</Button>
                </div>
                <Button variant={'outline'} size={'icon'}><ChevronRightIcon /></Button>
            </div>
        </div>
        </>
    );
}