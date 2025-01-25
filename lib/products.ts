// import { Models } from "appwrite";
import { databases } from "./appwrite";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PRODUCT_COLLECTION_ID as string;



class ProductCollection {

    private databaseId: string;
    private collectionId: string;
    private db: typeof databases;

    constructor(databaseId: string, collectionId: string) {
        this.databaseId = databaseId;
        this.collectionId = collectionId;
        this.db = databases;
    }

    async getProducts<T>(): Promise<T>  {
        const products = await this.db.listDocuments(this.databaseId, this.collectionId)
        
        const productsData = products.documents.map((product) => {
            return {
                id: product.$id,
                name: product.name,
                description: product.description,
                price: product.price,
                currency: product.currency,
                category: product.category,
                subCategory: product.subCategory,
                brand: product.brand,
                stock: product.stock,
                images: product.images,
                sku: product.sku,
                thumbnail: product.thumbnail,
                ratings: product.ratings,
                average: product.average,
                count: product.count,
                isFeatured: product.isFeatured,
                isOnSale: product.isOnSale,
                salePrice: product.salePrice,
            }
        }
    )

        return {pagination: {}, products: productsData } as T;
    }

    async getProduct<T>(productId: string): Promise<T> {

        const product = await this.db.getDocument(this.databaseId, this.collectionId, productId);

        return product as T;
    }
}


const productCollection = new ProductCollection(databaseId, collectionId);
export default productCollection;
