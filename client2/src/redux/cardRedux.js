import { createSlice } from '@reduxjs/toolkit'

 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        priceTotal: 0,
        quantityTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const itemIndex = state.products.findIndex(
                item => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                state.products[itemIndex].qte += 1
            } else {
                const tempProduct = { ...action.payload, qte: 1 };
                state.products.push(tempProduct)
            }
            console.log("sais pas comment atteindre la quantite unitaire (qte) d'un produit")
            console.log("prixxxxx unitaire", action.payload.price)
            state.priceTotal += action.payload.price;
            state.quantityTotal += 1;
            //state.priceTotal += action.payload.price * action.payload.qte
        },
        increment: (state, action) => {
            const productId = action.payload
            const index = state.products.findIndex((item) =>
                item._id === productId._id
            )
            console.log("indexxxxxxxxxx", index)
            console.log("quantite dans stock", state.products[index].quantity)
            if (state.products[index].quantity === 0) {//stock du produit
                return alert("stock finish")
            } else {
                state.products[index].quantity--; //errrrooorrr here
                state.products[index].qte++; // qte d'un produit dans l'ordre
                //state.products[index].price=state.cart[index].productId.price*state.cart[index].qte
                state.priceTotal += action.payload.price
                state.quantityTotal++//quantity de l'ordre
            }
        },
        decrement: (state, action) => {
            const productId = action.payload
            const index = state.products.findIndex((item) =>
                item._id === productId._id
            )
            if(state.products[index].quantity ===0){
                return alert("stock deja epuise")
            }else{
                state.products[index].quantity++;
                state.products[index].qte--;
                state.priceTotal -= action.payload.price
                state.quantityTotal--
            }
        },
        remove: (state, action) => {
            const produit = action.payload
            try {
                const exist = state.products.find(
                    (p) => p._id === produit._id
                );
                if (exist.qte === 1) {
                    state.products = state.products.filter((product) => product._id !== produit._id)
                    state.quantityTotal--;
                    state.priceTotal -= produit.price
                } else {
                    exist.qte--;
                    state.quantityTotal--;
                    state.priceTotal -= produit.price
                }
            } catch (error) {
                return error
            }
        }
    }
});
export const { addToCart, increment, remove, decrement } = cartSlice.actions;
export default cartSlice.reducer