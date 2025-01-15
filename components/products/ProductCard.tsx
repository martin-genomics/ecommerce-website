'use client'

import { Product } from "@/types/product"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { ShoppingCartIcon } from "lucide-react"
import formatCurrency from "@/lib/currency-manager"


interface ProductCardProps {
    product: Product
}


export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="w-[300px] h-[300px] shadow-none p-0">
            <CardContent >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative bg-red-600 text-white p-1 rounded-md">
                        SALE
                    </div>
                    <img src={product.images[0]} alt="" className="w-full h-full object-contain rounded-lg " />
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between flex-col ">
                <div className="flex  items-center  justify-between h-full w-full ">
                    <CardTitle>{product.name}</CardTitle>
                    <Button variant={'ghost'} size={'icon'}>
                        <ShoppingCartIcon />
                    </Button>
                </div>
                <div className="w-full">

                        <div className='flex justify-start items-center'>
                            <h3 className='text-xl font-bold'>{formatCurrency(product.price)}</h3>
                            <span className=' mx-2'>-</span>
                            <h3 className=' text- font-bold text-gray-500 line-through'>{formatCurrency(product.price - 10)}</h3>
                        </div>

                
                </div>
            </CardFooter>
        </Card>
    )
}