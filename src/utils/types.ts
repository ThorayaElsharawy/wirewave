export type TProductDetails = {
    id: string
    name: string
    price: number
    oldPrice: number
    rate: number
    imgurl: string
    imgurlFlip: string
    color: string
    condition: string
    expand: {
        category_id: {
            name: string
        }
    }
}

export type TProductResponse = {
    items: TProductDetails[]
}

export type TDisplay = 'list' | 'grid'

export type itemFilter = {
    categories: category
}

export type category = 'headphones' | 'mobiles&tablets' | 'laptops' | 'microphones' | 'all'

