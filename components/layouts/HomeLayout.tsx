'use client'

import { ReactNode } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useState } from 'react'

interface HomeLayoutProps {
    children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Header open={isOpen} setSidebar={setIsOpen} />
            {isOpen && <Sidebar />}
            <div className=' scrollbar-hide overflow-scroll h-screen'>
                <div className='mt-16'>
                    {children}
                </div>
            </div>
        </>
    )
}