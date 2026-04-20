import {products} from "../data/db.js"

export function getProducts(req, res) {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ product });
}

export function getProduct(req, res) {

    returnres.status(200).json({ products });
}
export function createProduct(req, res) {}


export function deleteProduct(req, res) {
    const id = req.params.id;

    const {name, amount} = req.body;

    const product = products.find(p => p.id == id);
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ product });

    if

}
export function updateProduct(req, res) {}

