/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Product } from "@/types/product"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
// import { ShoppingCartIcon } from "lucide-react"
import formatCurrency from "@/lib/currency-manager"
import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'
// import { faCartPlus } from "@fortawesome/fontawesome-free-solid"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { Collapse } from '@/components/collapse'
// import { useRouter } from "next/navigation"
import Link from "next/link"
import { EyeIcon } from "lucide-react"


interface ProductCardProps {
    product: Product
}


export default function ProductCard({ product }: ProductCardProps) {

    // const router = useRouter();

    return (
        <Card className="w-[300px] h-[300px] shadow-none p-0 border-none">
            <CardContent  >
                <div className="flex flex-col items-center justify-center h-full relative">
                    <div className="flex justify-start w-full my-1 absolute top-0 left-1">
                        <span className=" bg-primary font-sans text-white p-1 rounded text-sm font-bold">
                            SALE
                        </span>
                    </div>
                    <Link href={`/products/${product.id}`}>
                        <img src={product.thumbnail} alt={product.name} className="w-full h-40 object-contain rounded-lg " />
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between flex-col ">
                <div className="flex  items-center  justify-between h-full w-full ">
                    <CardTitle>{product.name}</CardTitle>
                    {/* <Button variant={'ghost'} size={'lg'}>
                        <FontAwesomeIcon icon={faCartPlus as any}/>
                    </Button> */}
                </div>
                <div className="w-full flex flex-col relative">

                    <div className='flex justify-start items-center'>
                        <h3 className='text-xl font-bold'>{formatCurrency(product.price || 0)}</h3>
                        <span className=' mx-2'>-</span>
                        <h3 className=' text- font-bold text-gray-500 line-through'>{formatCurrency(product.price - 10 || 0)}</h3>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={product.ratings?.average || 0}
                            readOnly
                        />
                        <span className=' text-gray-500'>({product.ratings?.count})</span>
                    </div>
                    <div className="relative flex gap-3">
                        <Button className=" rounded  delay-75 bottom-[-40px] font-sans  w-[70%]">
                            Add cart
                        </Button>
                            <Button variant={'secondary'} size={'icon'} className="rounded delay-75 bottom-[-40px] w-[30%] font-sans  ">
                                <Link href={`/products/${product.id}`} className="w-full flex items-center justify-center">
                                        <EyeIcon />
                                </Link>
                            </Button>

                    </div>


                </div>
            </CardFooter>
        </Card>
    )
}