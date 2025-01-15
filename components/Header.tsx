'use client'
import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { getUser } from "@/lib/appwrite"
import { User } from "@/types/user"
import { ProfileDropdownMenu } from "./profile/ProfileDropdown"
import PopupDrawer from "./drawers/PopupDrawer"



interface HeaderProps {
    open: boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({setSidebar, open}: HeaderProps) {

    const navItems = [
        { name: 'Footwear', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Fit & Style', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Archive Sale', href: '#' },
    ]

    const [user, setUser] = useState<User | null>(null);

    useEffect(()=> {

        (async () => {
            const userAccount = await getUser() as User;
            setUser(userAccount);
        })()
    }, [])

    return (
        <header className="flex justify-between items-center p-2 border-b bg-white fixed w-full z-[60]">
            {/* Nav Items */}
            <div>
                <nav className=" md:hidden">
                    <Button variant="ghost" onClick={() => setSidebar(!open)}>
                        <MenuIcon />
                    </Button>
                </nav>
                <nav>
                    <ul className="gap-2 items-center hidden md:flex">
                        {navItems.map((item) => (
                           <PopupDrawer key={item.name} title={item.name}>
                                {item.name === 'Footwear' && (
                                    <li>Shoes</li>
                                )}
                                {item.name === 'Accessories' && (
                                    <li>Accessories</li>
                                )}
                                {item.name === 'Fit & Style' && (
                                    <li>Fit & Style</li>
                                )}
                                {item.name === 'About Us' && (
                                    <li>About Us</li>
                                )}
                                {item.name === 'Archive Sale' && (
                                    <li>Archive Sale</li>
                                )}
                            </PopupDrawer>
                        ))}

                    </ul>
                </nav>
            </div>
            <div>
                <ul className="gap-1 md:gap-2 items-center flex">
                    <li className="text-sm font-medium uppercase">Stores</li>
                    <li>
                        <Button variant="ghost"><SearchIcon /></Button>
                    </li>
                    <li>
                        <Button variant="ghost"><ShoppingBagIcon /></Button>
                    </li>
                    {user && (
                        <li>
                            <ProfileDropdownMenu user={user} />
                        </li>
                    )}
                    {!user && (
                        <>
                        <li>
                            <Button variant="ghost">Sign In</Button>
                        </li>
                        <li>
                            <Button variant="ghost">Sign Up</Button>
                        </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    )
}