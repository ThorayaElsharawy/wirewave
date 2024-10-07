import { TProductDetails, TProductResponse } from "../utils/types";

const url = 'http://127.0.0.1:8090/api/collections/product/records'

export async function getProduct(name: string): Promise<TProductDetails> {
    const response = await fetch(`${url}?filter=(name='${name}')`);
    return await response.json()
}

export async function getproducts(): Promise<TProductResponse> {
    const response = await fetch(`${url}?expand=category_id`)
    return await response.json()
}

export async function searchProduct(search: string): Promise<TProductResponse | any> {
    const response = await fetch(`${url}?filter=(name~'${search}')`);
    return await response.json()
}
