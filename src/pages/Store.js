import React from "react";
import Product from "../components/Product";

const products = [
    {
        id: "1",
        title: "Crimson Orange",
        price: 1000,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:
            "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes have been made from leather, wood or canvas."
    },

    {
        id: "2",
        title: "Red Premium Quality",
        price: 1200,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:
            "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes have been made from leather, wood or canvas."
    },
    ,
    {
        id: "3",
        title: "Classic White",
        price: 1200,
        imageUrl: "https://images.unsplash.com/photo-1580906853149-f82f7601d205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:
            "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes have been made from leather, wood or canvas."
    },
    {
        id: "Batman Black",
        title: "Other Cat",
        price: 1200,
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:
            "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes have been made from leather, wood or canvas."
    },

];

export default function Store() {
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', margin: '0 10px' }}>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </main>
    );
}
