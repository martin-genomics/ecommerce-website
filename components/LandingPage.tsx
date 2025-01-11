'use client'

import { Button } from "./ui/button";


export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div 
                className="w-[98%] h-[90%] rounded-2xl"
                style={{
                    backgroundImage: "url('https://maguireshoes.com/cdn/shop/files/H1_DESKTOP_LORENA_1920x.jpg?v=1735925846&width=1920')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="w-full h-[200px] md:h-[700px] bg-black bg-opacity-10 rounded-2xl mt-[100px]">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <h1 className="text-6xl font-extrabold text-white uppercase">Combat Boots</h1>
                        <h1 className="text-4xl font-bold text-white">LORENA</h1>
                        <p className="text-xl text-white">The best shoes for you</p>
                        <Button variant="destructive" className=" text-white border-none" >Shop Now</Button>
                    </div>
                </div>
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
    );
}