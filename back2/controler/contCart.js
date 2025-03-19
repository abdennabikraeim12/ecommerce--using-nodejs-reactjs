const panier = require("../model/modelCart")
//code hatha howa ychouf awlan client hatha 3andou pannier wela la kima fi ligne 6 wa 7 wa itha ma 3andouch id ya3melou panier jdida 
//wa kan 3andou yet3ada wa ythiflou les produit
//kif client ya5ou produit ychouf esque produit haka mawjoud wela la kan mawjoud ythiflou +1 fil panieer wa kan mouch mawjoud 
//ythifou wa7dou 
const addToCart = (async (req, res) => {
        const { productId, clientId } = req.params;
        const cart = await panier.findOne({ clientId });
        if (!cart) {
            const newCart = new panier({ clientId, products: [] });
        }
        const existingProduct = panier.products.findOne(
            item => item.productId === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            newCart.products.push({ productId, quantity: 1 });
        }
        await newCart.save();
        res.json({ success: true, newCart });
})
const getCartByClient = (async (req, res) => {
    const carts = await cart.find({ client: req.params.client }).populate("products")
    res.status(200).json({
        message: "cart",
        data: carts
    })
})
module.exports = { addToCart, getCartByClient }