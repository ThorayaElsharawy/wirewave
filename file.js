const data = [
    {
        "name": "MacBook Pro 16\" M2 Max",
        "price": 3499.99,
        "oldPrice": 3799.99,
        "rate": 4.9,
        "imgurl": "https://example.com/laptop1-front.jpg",
        "imgurlFlip": "https://example.com/laptop1-back.jpg",
        "color": "Space Gray",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "Dell XPS 15",
        "price": 1999.99,
        "oldPrice": 2299.99,
        "rate": 4.7,
        "imgurl": "https://example.com/laptop2-front.jpg",
        "imgurlFlip": "https://example.com/laptop2-back.jpg",
        "color": "Silver",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "HP Spectre x360",
        "price": 1499.99,
        "oldPrice": 1699.99,
        "rate": 4.6,
        "imgurl": "https://example.com/laptop3-front.jpg",
        "imgurlFlip": "https://example.com/laptop3-back.jpg",
        "color": "Nightfall Black",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "ASUS ROG Zephyrus G14",
        "price": 1699.99,
        "oldPrice": 1899.99,
        "rate": 4.8,
        "imgurl": "https://example.com/laptop4-front.jpg",
        "imgurlFlip": "https://example.com/laptop4-back.jpg",
        "color": "Eclipse Gray",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "Microsoft Surface Laptop 5",
        "price": 1399.99,
        "oldPrice": 1599.99,
        "rate": 4.5,
        "imgurl": "https://example.com/laptop5-front.jpg",
        "imgurlFlip": "https://example.com/laptop5-back.jpg",
        "color": "Sage",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "Lenovo ThinkPad X1 Carbon",
        "price": 1799.99,
        "oldPrice": 2099.99,
        "rate": 4.7,
        "imgurl": "https://example.com/laptop6-front.jpg",
        "imgurlFlip": "https://example.com/laptop6-back.jpg",
        "color": "Black",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    },
    {
        "name": "Acer Swift 3",
        "price": 899.99,
        "oldPrice": 999.99,
        "rate": 4.4,
        "imgurl": "https://example.com/laptop7-front.jpg",
        "imgurlFlip": "https://example.com/laptop7-back.jpg",
        "color": "Silver",
        "condition": "New",
        "category_id": "92m7p3x7brhumis"
    }
]


for (let i = 0; i < data.length; i++) {
    fetch('http://127.0.0.1:8090/api/collections/product/records', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data[i])
    })
}