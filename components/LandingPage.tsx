'use client'

import { Swiper, SwiperSlide } from "swiper/react";
// import { CarouselLandingPage } from "./CarouselLandingPage";
// import Products from "./products/Products";
import { Button } from "./ui/button";
import { products } from "@/demo/product";
import ProductCard from "./products/ProductCard";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, HeadphonesIcon, HeadsetIcon, LaptopIcon, SendHorizonalIcon, ShieldCheckIcon, ShirtIcon, SmartphoneIcon, TabletIcon, TruckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";



const categories = [
    {
        name: "Smartphones",
        icon: <SmartphoneIcon />,
        url: "/products?category=smartphones"
    },
    {
        name: "Laptops",
        icon: <LaptopIcon />,
        url: "/products?category=laptops"
    },
    {
        name: "Tablets",
        icon: <TabletIcon />,
        url: "/products?category=tablets"
    },
    {
        name: "Accessories",
        icon: <HeadphonesIcon />,
        url: "/products?category=accessories"
    },
    {
        name: "Women Clothing",
        icon: <ShirtIcon />,
        url: "/products?category=women-clothing"
    },
    {
        name: "Men Clothing",
        icon: <ShirtIcon />,
        url: "/products?category=men-clothing"
    },
]

export default function LandingPage() {
    return (
        <>

<div className="flex flex-col gap-5 w-[85%] mx-auto">

<div className="text-xl flex items-center border-l-[10px] rounded-lg border-primary">
    <div className="mx-1 text-primary font-sans">
        Today&apos;s
    </div>

    <div className="flex gap-3 mx-2">

    </div>
</div>

<div className="flex justify-between items-center">
    <div className="flex  items-center">
    <h3 className="text-4xl font-semibold">
        Flash Sales 
    </h3>
    <div className="flex gap-3 mx-2 items-center">
        <div className="flex flex-col p-1 border rounded-lg h-14 w-14 items-center">
            <span className="text-sm">
                Hrs
            </span>
            <span className="text-3xl font-extrabold">
                05
            </span>
        </div>
        <div className="font-extrabold text-primary">
            :
        </div>

        <div className="flex flex-col p-1 border rounded-lg h-14 w-14 items-center">
            <span className="text-sm">
                Mins
            </span>
            <span className="text-3xl font-extrabold">
                16
            </span>
        </div>
        <div className="font-extrabold text-primary">
            :
        </div>
        <div className="flex flex-col p-1 border rounded-lg h-14 w-14 items-center">
            <span className="text-sm">
                Secs
            </span>
            <span className="text-3xl font-extrabold">
                15
            </span>
        </div>
        
    </div>

    </div>

    <div className="flex items-center gap-4">
        <Button variant={'secondary'} size={'icon'}>
            <ChevronLeft />
        </Button>

        <Button variant={'secondary'} size={'icon'}>
            <ChevronRight />
        </Button>
    </div>
</div>

<div>
    <Swiper
        spaceBetween={50}
        slidesPerView={5}
    //    onSlideChange={() => setSelectedImage(undefined) }
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
    >

        {products.map((product, i)=> (
            <SwiperSlide key={i}>
                <ProductCard product={product}/>
            </SwiperSlide>
        ))}
    </Swiper>
</div>
<div className="flex flex-col items-center">
    <Button size={"lg"} className="text-lg font-sans">
        View All Products
    </Button>
</div>
</div>
        <div className="flex flex-col items-center justify-center">
             
            <div className="w-[80%] mx-auto h-[1PX] bg-gray-200 my-10"></div>


                    {/* Category section */}
                    <div className="flex flex-col gap-5 w-[85%]">

<div className="text-xl flex items-center border-l-[10px] rounded-lg border-primary ">
    <div className="mx-1 text-primary font-sans">
        Categories
    </div>

    <div className="flex gap-3 mx-2">

    </div>
</div>

<div className="flex justify-between items-center ">
    <div className="flex items-center">
    <h3 className="text-4xl font-semibold">
        Browse By Category
    </h3>

    </div>

    <div className="flex items-center gap-4">
        <Button variant={'secondary'} size={'icon'}>
            <ChevronLeft />
        </Button>

        <Button variant={'secondary'} size={'icon'}>
            <ChevronRight />
        </Button>
    </div>
</div>

{/* Category cards */}
<div className="w-full">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  ">
                                {categories.map((category, i) => (
                                    <div key={i} className="border-2 flex flex-col items-center p-3 gap-5 h-48 justify-center duration-300 hover:scale-105 active:bg-primary active:text-white">
                                        <div className="flex items-center justify-center">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">
                                            {category.name}
                                        </h3>
                                    </div>
                                ))}
    </div>

</div>

</div>

{/* Divider */}
<div className="w-[80%] mx-auto h-[1PX] bg-gray-200 my-10"></div>

{/* Best selling products */}
                    <div className="flex flex-col gap-5 w-[85%] ">

<div className="text-xl flex items-center border-l-[10px] rounded-lg border-primary">
    <div className="mx-1 text-primary font-sans">
        This month
    </div>

    <div className="flex gap-3 mx-2">

    </div>
</div>

<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h3 className="text-4xl font-semibold">
        Best Selling Products
    </h3>

    </div>

    <div className="flex items-center gap-4">
    <Button size={"lg"} className="text-lg font-sans">
        All Products
    </Button>
    </div>
</div>

{/* Product cards */}
<div className="w-full">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                                {products.slice(0, 4).map((product, i) => (
                                    <ProductCard key={i} product={product}/>
                                ))}
    </div>

</div>
<div className="flex flex-col items-center">

</div>
</div>

{/* Divider */}
<div className="w-[80%] mx-auto h-[1PX] bg-gray-200 my-10"></div>

<div className="h-96 bg-black w-[85%] flex items-center justify-center gap-52">
    <div className="flex flex-col gap-10 items-center">
        <h4 className="text-green-300 font-semibold">
            Categories
        </h4>

        <div>
            <h3 className="text-white text-4xl font-extrabold w-96 text-center">
            Enhance Your Music Experience
            </h3>
        </div>
        <Button size={'lg'} className="rounded-none">
            Buy Now
        </Button>
    </div>
    <Image width={600} height={400} src={"/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"} alt=""/>

</div>

{/* Divider */}
<div className="w-[80%] mx-auto h-[1PX] bg-gray-200 my-10"></div>

{/* Our products */}
<div className="flex flex-col gap-5 w-[85%] mx-auto">

<div className="text-xl flex items-center border-l-[10px] rounded-lg border-primary">
    <div className="mx-1 text-primary font-sans">
        Our products
    </div>

    <div className="flex gap-3 mx-2">

    </div>
</div>

<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h3 className="text-4xl font-semibold">
        Explore our products
    </h3>

    </div>

    <div className="flex items-center gap-4">

    </div>
</div>

{/* Product cards */}
<div className="w-full">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                                {products.slice(0, 8).map((product, i) => (
                                    <ProductCard key={i} product={product}/>
                                ))}
    </div>

</div>
<div className="flex flex-col items-center">
<Button size={"lg"} className="text-lg font-sans">
        All Products
    </Button>
</div>
</div>




{/* Divider */}
    <hr className="w-[80%] mx-auto my-8 border-gray-300" />



{/* New Arrivals */}
    <div className="flex flex-col gap-5 ">

    <div className="text-xl flex items-center border-l-[10px] rounded-lg border-primary">
        <div className="mx-1 text-primary font-sans">
            New Arrivals
        </div>

        <div className="flex gap-3 mx-2">

        </div>
    </div>

    <div className="flex justify-between items-center">
        <div className="flex items-center">
        <h3 className="text-4xl font-semibold">
            Be the first to know
        </h3>

        </div>

        <div className="flex items-center gap-4">

        </div>
    </div>

        <div className="w-full ">
            <div className="grid md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-4 mx-auto h-[600px]">
                <div className="md:row-span-2 bg-black p-2 text-white relative ">
                    <Image src="/ps5-slim-goedkope-playstation_large 1@2x.png" width={500} height={500} alt="phone" />
                    <p className="flex flex-col gap-3 absolute bottom-10 left-2">
                        <span className="text-2xl font-bold">
                            Playstation 5
                        </span>
                        <span>
                            <span className=" font-light text-white">
                                Black and White version of the PS5 coming out on sale.
                            </span>
                        </span>

                        <Link href="/products/54512ncckjcksna54a5">
                            <Button variant={'link'} size={"lg"} className="text-lg font-sans rounded-none border-b-2 border-primary">
                                Shop Now
                            </Button>
                        </Link>
                    </p>
                </div>

                <div className="bg-black p-2 md:col-span-2 flex gap-3 justify-end">
                <p className="flex flex-col gap-3 h-full items-start justify-end">
                        <span className="text-2xl font-bold text-white">
                            Women’s Collections
                        </span>
                        <span>
                            <span className=" font-light text-white">
                            Featured woman collections that give you another vibe.
                            </span>
                        </span>

                        <Link href="/products/54512ncckjcksna54a5">
                            <Button variant={'link'} size={"lg"} className="text-lg font-sans rounded-none border-b-2 border-primary">
                                Shop Now
                            </Button>
                        </Link>
                    </p>
                    <Image src="/attractive-woman-wearing-hat-posing-black-background 1.png" width={500} height={500} alt="phone" />

                </div>
                <div className="bg-black p-2 relative">
                    <Image src="/Frame 706.png" width={200} height={200} alt="phone" />
                    <p className="flex flex-col gap-3 absolute bottom-10 left-2">
                        <span className="text-2xl font-bold text-white">
                            Perfume
                        </span>
                        <span>
                            <span className=" font-light text-white">
                            GUCCI INTENSE OUD EDP
                            </span>
                        </span>

                        <Link href="/products/54512ncckjcksna54a5">
                            <Button variant={'link'} size={"lg"} className="text-lg font-sans rounded-none border-b-2 border-primary">
                                Shop Now
                            </Button>
                        </Link>
                    </p>
                </div>
                <div className="bg-black p-2 relative">
                    <Image src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" width={200} height={500} alt="phone" />
                    <p className="flex flex-col gap-3 absolute bottom-10 left-2">
                        <span className="text-2xl font-bold text-white">
                            Speakers
                        </span>
                        <span>
                            <span className=" font-light text-white">
                            Amazon wireless speakers
                            </span>
                        </span>

                        <Link href="/products/54512ncckjcksna54a5">
                            <Button variant={'link'} size={"lg"} className="text-lg font-sans rounded-none border-b-2 border-primary">
                                Shop Now
                            </Button>
                        </Link>
                    </p>
                </div>
            </div>

        </div>

        <div className="flex flex-col items-center">
        </div>
    </div>

{/* Divider */}
<hr className="w-[80%] mx-auto my-8 border-gray-300" />
    <div className="flex flex-col md:flex-row gap-6">

        {/* Service One */}
        <div className="flex flex-col gap-3 items-center">

<div className="h-[50px] w-[50px] ring-8 ring-gray-400 bg-black rounded-full flex items-center justify-center">
    <TruckIcon className="text-white" />
</div>

<div>
    <h3 className=" font-bold text-center">
    FREE AND FAST DELIVERY
    </h3>
    <p className="text-center text-sm">
    Free delivery for all orders over $140
    </p>

</div>
</div>

        {/* Service Two */}
        <div className="flex flex-col gap-3 items-center">

            <div className="h-[50px] w-[50px] ring-8 ring-gray-400 bg-black rounded-full flex items-center justify-center">
                <HeadsetIcon className="text-white"/>
            </div>
            <div>
                <h3 className=" font-bold text-center">
                24/7 CUSTOMER SERVICE
                </h3>
                <p className="text-center text-sm">
                Friendly 24/7 customer support
                </p>

            </div>
        </div>

        {/* Service three */}
        <div className="flex flex-col gap-3 items-center">

            <div className="h-[50px] w-[50px] ring-8 ring-gray-400 bg-black rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="text-white" />
            </div>
            <div>
                <h3 className=" font-bold text-center">
                MONEY BACK GUARANTEE
                </h3>
                <p className="text-center text-sm">
                We return money within 30 days
                </p>

            </div>
        </div>
    </div>

    {/*Footer  */}
    <div className="bg-black h-96 w-[85%] mt-10 flex gap-10 py-5">
        <div className="text-white ml-3 mt-5">
            <h3 className="text-3xl font-bold font-sans">
                Exclusive
            </h3>
            <h5 className="text-xl font-sans">
                Subscribe
            </h5>
            <form>
                <label className="relative">
                    <Input placeholder="Enter your email " className=" w-80"/>
                    <Button variant={"link"} size={"icon"} className="absolute top-1 right-1 ">
                        <SendHorizonalIcon />

                    </Button>
                </label>
            </form>
        </div>

        <div className="text-white my">
            <h3 className="text-3xl font-bold font-sans">
                Support
            </h3>

            <ul className="mt-5 flex flex-col gap-3">
                <li>
                111 Z236 Copperbelt University,Kitwe ,Copperbelt Province, Zambia.
                </li>

                <li>
                exclusive@gmail.com
                </li>

                <li>
                    <a href="tel://03641564874644">
                        +88015-88888-9999
                    </a>
                </li>
            </ul>
        </div>


        <div className="text-white my">
            <h3 className="text-3xl font-bold font-sans">
                Account
            </h3>

            <ul className="mt-5 flex flex-col gap-3">

                <li>
                    <a href="my-account">
                        Account
                    </a>
                </li>

                <li>
                    <a href="login">
                        Login / Register
                    </a>
                </li>

                <li>
                    <a href="account">
                        Account
                    </a>
                </li>

                <li>
                    <a href="/cart">
                        Cart
                    </a>
                </li>

                <li>
                    <a href="/wishlist">
                        Wishlist
                    </a>
                </li>
                <li>
                    <a href="/shop">
                        Shop
                    </a>
                </li>
            </ul>
        </div>

        <div className="text-white my">
            <h3 className="text-3xl font-bold font-sans">
                Quick Links
            </h3>

            <ul className="mt-5 flex flex-col gap-3">

                <li>
                    <Link href="my-account">
                        Privacy Policy
                    </Link>
                </li>

                <li>
                    <a href="terms&conditions">
                        Terms of Use
                    </a>
                </li>

                <li>
                    <a href="account">
                        FAQ
                    </a>
                </li>

                <li>
                    <a href="/cart">
                        Contact
                    </a>
                </li>

                <li>
                    <a href="/wishlist">
                        Wishlist
                    </a>
                </li>
                <li>
                    <a href="/shop">
                        Shop
                    </a>
                </li>
            </ul>
        </div>
    </div>



        </div>


    
        </>
    );
}