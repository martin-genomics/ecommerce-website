'use client'

import { CarouselLandingPage } from "./CarouselLandingPage";
import { Button } from "./ui/button";



export default function LandingPage() {
    return (
        <>
            <div className="mt-32 max-h-96 ">
                <CarouselLandingPage />
            </div>
            <div className="flex flex-col items-center justify-center h-screen mt-32">


            {/* Section 2 - NEW ARRIVALS */}
            <div className="w-full  flex flex-col items-center justify-center gap-2 p-10  mt-32">
            {/* Sub section 1 - NEW ARRIVALS */}
                {/* <ProductsCarousel deviceType="desktop" /> */}

            </div>
                {/* Section 2 - NEW ARRIVALS */}
                <div className="w-full  flex flex-col items-center justify-center gap-2 p-10">
                    {/* Sub section 1 - NEW ARRIVALS */}
                    {/* Shop Name */}
                    <h1 className="text-6xl font-extrabold  uppercase">NEW ARRIVALS</h1>
                    <div className="w-full flex items-center justify-center gap-2">
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <h1 className="text-4xl font-bold">Shop Name</h1>
                            <Button variant="destructive" className=" text-white border-none" >Shop Now</Button>
                        </div>
                        {/* Sub section 2 - NEW ARRIVALS */}
                        <div className="w-full flex items-center justify-center gap-2">
                            <img
                                src="https://maguireshoes.com/cdn/shop/files/beja_1920x.jpg?v=1735615561"
                                alt="Lorena"
                                className="w-[700px] h-[700px] rounded-lg"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}