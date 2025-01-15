export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    currency: string; // Currency code (e.g., USD, EUR)
    category: string; // Category to which the product belongs
    subCategory?: string; // Optional subcategory
    brand?: string; // Optional brand name
    stock: number; // Number of items available in stock
    images: string[]; // Array of image URLs
    sku: string;
    thumbnail?: string; // URL of the thumbnail image
    ratings?: {
      average: number; // Average rating
      count: number; // Number of ratings
    }; // Optional ratings details
    reviews?: Review[]; // Optional array of product reviews
    specifications?: Record<string, string>; // Optional specifications as key-value pairs
    tags?: string[]; // Optional array of tags for search and categorization
    createdAt: Date; // Date when the product was added
    updatedAt?: Date; // Date of the last update
    isFeatured?: boolean; // Optional flag for featured products
    isOnSale?: boolean; // Optional flag for sale items
    salePrice?: number; // Sale price if the product is on sale
    dimensions?: {
      width: number; // Width of the product
      height: number; // Height of the product
      depth: number; // Depth of the product
      unit: string; // Unit of measurement (e.g., cm, inches)
    }; // Optional dimensions of the product
    weight?: {
      value: number; // Weight of the product
      unit: string; // Unit of measurement (e.g., kg, lb)
    }; // Optional weight details
    shippingDetails?: {
      availableRegions: string[]; // Regions where the product can be shipped
      estimatedDeliveryTime?: string; // Estimated delivery time
    }; // Optional shipping information
  }

  interface Review {
    id: string; // Unique identifier for the review
    productId: string; // ID of the product being reviewed
    userId: string; // ID of the user who wrote the review
    userName: string; // Name of the user (for display purposes)
    rating: number; // Rating given to the product (e.g., 1-5 scale)
    title?: string; // Optional title of the review
    comment: string; // Detailed comment about the product
    images?: string[]; // Optional array of image URLs uploaded by the reviewer
    createdAt: Date; // Date when the review was created
    updatedAt?: Date; // Date when the review was last updated
    verifiedPurchase: boolean; // Indicates if the user bought the product
    helpfulVotes?: number; // Number of users who found the review helpful
    replies?: Reply[]; // Optional replies to the review
  }
  
  interface Reply {
    id: string; // Unique identifier for the reply
    reviewId: string; // ID of the review being replied to
    userId: string; // ID of the user who wrote the reply
    userName: string; // Name of the user replying
    comment: string; // Reply text
    createdAt: Date; // Date when the reply was created
    updatedAt?: Date; // Date when the reply was last updated
  }
  
  