'use client'

import { ReactNode } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useState } from 'react'

interface HomeLayoutProps {
    children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    const [isOpen ] = useState(false)
    return (
        <>
            <Header />
            {isOpen && <Sidebar />}
            <div className=''>
                {children}
            </div>
        </>
    )
}