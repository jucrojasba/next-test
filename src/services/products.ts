import { IProducts } from "@/types/IProducts";

export const getProducts = async (): Promise<IProducts[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FRONT}/api/products`);
    const data = await response.json();

    if (!response.ok) {
        throw Error("No pudo acceder a los datos")
    }

    return data;
}

export const getProductsByCategory = async (category: string): Promise<IProducts[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FRONT}/api/products/${category}`);
    const data = await response.json();

    if (!response.ok) {
        throw Error("No pudo acceder a los datos")
    }

    return data;
}

