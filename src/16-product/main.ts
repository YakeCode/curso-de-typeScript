import { addProduct } from "./product.servicce";
import { Size } from "./product.model";

const product1 = addProduct({
    title: 'Tv',
    createAt: new Date(),
    stock: 20,
    size: 'S'
})