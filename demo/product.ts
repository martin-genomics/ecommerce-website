import { Product } from "@/types/product";

export const product: Product =
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


export const products: Product[] = Array.from({ length: 10 }, (_, index) => ({
    ...product,
    id: (index + 1).toString(),
    name: `Product ${index + 1}`,
    description: `Description for Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000),
    images: [
        "https://brand.assets.adidas.com/image/upload/v1717008170/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Everyset_e43f4c24fd.jpg",
        "https://brand.assets.adidas.com/image/upload/v1717012873/Training_SS_24_Strength_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Amplimove_147f0ac3d4.jpg",
        "https://brand.assets.adidas.com/image/upload/v1717007918/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Dropset3_91ee309e85.jpg"
    ],
    thumbnail: "thumbnail.jpg",
    ratings: {
        average: Math.floor(Math.random() * 5) + 1,
        count: Math.floor(Math.random() * 100),
    },
    reviews: [],
    specifications: {
        "Size": "Medium",
        "Color": "Blue",
    },
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    isFeatured: Math.random() > 0.5,
    isOnSale: Math.random() > 0.5,
    salePrice: Math.floor(Math.random() * 1000),
    dimensions: {
        width: Math.floor(Math.random() * 100),
        height: Math.floor(Math.random() * 100),
        depth: Math.floor(Math.random() * 100),
        unit: "cm",
    },
    weight: {
        value: Math.floor(Math.random() * 100),
        unit: "kg",
    },
    shippingDetails: {
        availableRegions: ["Nairobi", "Kisumu"],
        estimatedDeliveryTime: "5-7 days",
    },
}));