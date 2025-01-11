'use client'


export default function Sidebar() {
    return (
        <>
            <div className="w-full h-screen bg-black blur-[90px] fixed z-50 md:hidden">
            </div>
            <div className="w-52 h-screen bg-white fixed z-50 md:hidden">
                <p>sidebar</p>
            </div>
        </>
    )
}