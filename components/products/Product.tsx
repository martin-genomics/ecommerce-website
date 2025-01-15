'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '../ui/button';
import { Product } from '@/types/product';
import formatCurrency from '@/lib/currency-manager';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
// import { Input } from '@/components/ui/input';

const product: Product =
    {
        id: "1",
        name: "Leora summer dress",
        description: "Beautiful summer dress in soft fabric designed by the best designer. Zeiro .Inc fabrics are the best quality fabrics in the world. ",
        price: 100,
        currency: "USD",
        sku: "2K97J31",
        category: "Clothing",
        subCategory: "Subcategory 1",
        brand: "Brand 1",
        stock: 10,
        images: [
            "https://brand.assets.adidas.com/image/upload/v1717008170/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Everyset_e43f4c24fd.jpg",
            "https://brand.assets.adidas.com/image/upload/v1717012873/Training_SS_24_Strength_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Amplimove_147f0ac3d4.jpg",
            "https://brand.assets.adidas.com/image/upload/v1717007918/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Dropset3_91ee309e85.jpg"
        ],
        thumbnail: "thumbnail.jpg",
        ratings: {
            average: 4.5,
            count: 10,
        },
        reviews: [],
        specifications: {
            "Size": "Medium",
            "Color": "Blue",
        },
        tags: ["tag1", "tag2"],
        createdAt: new Date(),
        updatedAt: new Date(),
        isFeatured: true,
        isOnSale: false,
        salePrice:undefined,
        dimensions: {
            width: 10,
            height: 20,
            depth: 5,
            unit: "cm",
        },
        weight: {
            value: 2.5,
            unit: "kg",
        },
        shippingDetails: {
            availableRegions: ["Nairobi", "Kisumu"],
            estimatedDeliveryTime: "5-7 days",
        },
    };


export default function Product({ id }: { id: string }) {

    const [ selectedImage, setSelectedImage] = useState<string>();

    return (
        <>
            
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col md:flex-row gap-3 md:w-[60%]">
                    <div className=' mx-3'>
                        <ul className=' flex md:flex-col gap-3'>
                            {product.images.map(( src, index) => (
                                <li
                                    key={index}
                                    className=' '
                                    onClick={()=> setSelectedImage(src)}
                                >
                                    <img src={src} alt={`Thumbnail ${index + 1}`} className='cursor-pointer w-20 h-12 rounded-lg ' />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-[90%] h-96'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => setSelectedImage(undefined) }
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                        >
                            {product.images.map((src, index) => (
                                <SwiperSlide key={index} className=' h-96 bg-gray-100 w-96 '>
                                    <Image src={selectedImage || src} alt={`${src} ${index + 1}`} width={300} height={150} className='w-full h-full object-cover ' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <div className=' flex flex-col gap-10'>
                        <h1 className=' text-4xl font-bold'>{product.name}</h1>
                        {/* Product Price */}
                        <div className='flex justify-start items-center'>
                            <h3 className='text-4xl font-bold'>{formatCurrency(product.price)}</h3>
                            <span className=' mx-2'>-</span>
                            <h3 className='text-2xl font-bold text-gray-500 line-through'>{formatCurrency(product.price - 10)}</h3>
                        </div>

                        {/* Rating */}
                        <div className=' flex justify-start items-center'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={product.ratings?.average || 0}
                            readOnly
                            />
                            <span className='text-gray-500'>
                                |
                            </span>
                            <span className=' mx-2 uppercase text-gray-500 text-sm'>{product.ratings?.count} customer review</span>
                        </div>
                        {/* Product Description */}
                        <p className=' text-sm  text-gray-500'>{product.description}</p>

                        {/* Size Selection */}
                        <div className=' flex flex-col gap-2'>
                            <h3 className=' text-lg font-bold'>Size</h3>
                            <div className=' flex flex-row gap-2'>
                                <Button variant="default" className=" text-white border-none" >S</Button>
                                <Button variant="default" className=" text-white border-none" >M</Button>
                                <Button variant="default" className=" text-white border-none" >L</Button>
                            </div>
                        </div>

                        {/* Color Selection  */}
                        <div className=' flex flex-col gap-2'>
                            <h3 className=' text-lg font-bold'>Color</h3>
                            <div className=' flex flex-row gap-2'>
                                <Button variant="default" className=" text-white border-none" >Red</Button>
                                <Button variant="default" className=" text-white border-none" >Blue</Button>
                                <Button variant="default" className=" text-white border-none" >Green</Button>
                            </div>
                        </div>

                        {/* Add to Cart and Buy Now */}
                        <div className=' flex flex-row gap-3'>
                            {/* Add to cart */}
                            <div className='flex items-center gap-3'>
                                <Button variant="outline" className=" " ><MinusIcon /></Button>
                                <p className=''>{2}</p>
                                <Button variant="outline" className=" " ><PlusIcon /></Button>
                            </div>
                            <Button variant="default" className=" text-white border-none" >Buy Now</Button>
                        </div>

                        {/* Specifications */}
                        <div className='h-[1px] bg-gray-200 w-full'></div>
                        <div>
                            <table className='border p-2'>
                                <thead>
                                    <tr>
                                        <th>Spefication</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td className='bg-gray-300 p-1'>
                                            Category
                                        </td>
                                        <td className='bg-gray-100 p-1'>
                                            {product.category}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='bg-gray-300 p-1'>
                                            SKU
                                        </td>
                                        <td className='bg-gray-100 p-1'>
                                            {product.sku}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='bg-gray-300 p-1'>
                                            Tags
                                        </td>
                                        <td className='bg-gray-100 p-1'>
                                            {product.tags?.join(", ")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className='h-[1px] bg-gray-200 w-10/12 mx-auto my-10'></div>
            
            {/* Tab Section */}
            <div className='flex justify-center w-full '>
            <Tabs defaultValue="description" className="">
                <TabsList className='bg-white w-full'>
                    <TabsTrigger value="description" className='text-xl active:border-none'>Description</TabsTrigger>
                    <TabsTrigger value="additional-information" className='text-xl'>Additional Information</TabsTrigger>
                    <TabsTrigger value="reviews" className='text-xl'>Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description">{product.description}</TabsContent>
                <TabsContent value="additional-information">Additional Information</TabsContent>
                <TabsContent value="reviews">
                    <div className='flex flex-col gap-3'>
                        <h1 className=' text-3xl font-bold'>Reviews</h1>
                        <Separator />
                        <div>
                        <p className=' text-sm text-gray-500'>No reviews yet</p>
                            <div>

                                <form className='flex flex-col gap-3'>
                                    <textarea placeholder='Write a review' />
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={product.ratings?.average || 0}
                                    />
                                        <Button variant="default" className=" text-white border-none" >Submit Review</Button>
                                </form>
                            </div>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>


                </TabsContent>
            </Tabs>
            </div>
        </>
    )
}




