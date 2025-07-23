import {products} from "./products.mjs";

let total_price = 0
products.forEach(element => {
    total_price += Number(element.price)
});

console.log("total price",total_price);
