'use client'
import HomeLayout from "@/components/layouts/HomeLayout";
import Product from "@/components/products/Product";
import { useParams } from "next/navigation";



export default function Page() {
    const { id } = useParams()
    return (
        <HomeLayout>
            <Product id={id as string} />
        </HomeLayout>
    )
}