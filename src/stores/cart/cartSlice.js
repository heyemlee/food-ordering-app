import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return { products: [...state.products, {...action.payload, amount: 1}]}
        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            console.log('increment');
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})
//定义了一个选择器函数，用于从全局状态中选择购物车的产品列表
export const cartProducts = state => state.cart.products
//导出了 action creators，使得这些 action 可以在组件中被 dispatch
export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer