import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   userInfo: {},
   userFavoriteProducts: [],
   userCarts: [],
   userIdStep: '',
   userAddressShipping: {},
   userQRInfo: {},
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      /* Handle user info */
      addUserInfo: (state, action) => {
         state.userInfo = action.payload;
      },
      removeUserInfo: (state) => {
         if (localStorage.getItem('auth_token')) {
            localStorage.removeItem('auth_token');
         }
         state.userInfo = {};
         state.userFavoriteProducts = [];
      },

      /* Handle favorite products */
      initialFavoriteProduct: (state, action) => {
         state.userFavoriteProducts = action.payload;
      },
      addOrRemoveFavoriteProduct: (state, action) => {
         let isExistProdFav = false;
         // Check favPro cache store is already product
         for (const favProd of state.userFavoriteProducts) {
            if (favProd?.id === action.payload?.id) {
               isExistProdFav = true;
               break;
            }
         }
         if (isExistProdFav) {
            const newFavProducts = state.userFavoriteProducts.filter((favProd) => favProd?.id !== action.payload?.id);
            state.userFavoriteProducts = newFavProducts;
         } else {
            state.userFavoriteProducts = [...state.userFavoriteProducts, action.payload];
         }
      },
      /* Handle add cart */
      addCart: (state, action) => {
         let storeCart = state.userCarts;
         let keepCard = {};
         let isDuplicateId = false;
         let payload = action.payload;
         // Remove carts if duplicate id
         let cartsFilters = Array.from(storeCart).filter((cart) => {
            // Keep item card to add quantity
            if (cart?.id === payload?.id) {
               keepCard = cart;
               isDuplicateId = true;
            }
            return cart?.id !== payload?.id;
         });
         if (isDuplicateId) {
            let quantityOld = keepCard.amountOrder;
            let quantityPayload = payload.amountOrder;
            payload = {
               ...payload,
               amountOrder: Math.min(quantityOld + quantityPayload, payload.quantity),
            };
         }
         cartsFilters.push(payload);
         state.userCarts = cartsFilters;
         console.log('Current carts: ', state.userCarts);
      },
      removeCart: (state, action) => {
         state.userCarts = Array.from(state.userCarts).filter((cart) => {
            return !cart.id === action.payload.id;
         });
      },
      removeAllCartItem: (state) => {
         state.userCarts = [];
      },
      plusOrMinusItemAmountCart: (state, action) => {
         let currentCarts = state.userCarts;
         for (let curCart of currentCarts) {
            if (curCart.id === action.payload.id) {
               curCart.amountOrder = curCart.amountOrder + action.payload.amountOrder;
               break;
            }
         }
      },
      resetItemAmountCart: (state, action) => {
         let currentCarts = state.userCarts;
         for (let curCart of currentCarts) {
            if (curCart.id === action.payload.id) {
               curCart.amountOrder = action.payload.amountOrder;
               break;
            }
         }
      },
      // Handle get current checkout step of user
      updateCurrentCheckoutStep: (state, action) => {
         state.userIdStep = action.payload;
      },
      updateAddressShipping: (state, action) => {
         state.userAddressShipping = action.payload;
      },
      // Handle QR
      updateQRInfo: (state, action) => {
         state.userQRInfo = action.payload;
      },
      removeQRInfo: (state) => {
         state.userQRInfo = {};
      },
   },
});
// Action creators are generated for each case reducer function
export const {
   addUserInfo,
   removeUserInfo,
   initialFavoriteProduct,
   addOrRemoveFavoriteProduct,
   addCart,
   removeCart,
   removeAllCartItem,
   plusOrMinusItemAmountCart,
   resetItemAmountCart,
   updateCurrentCheckoutStep,
   updateAddressShipping,
   updateQRInfo,
   removeQRInfo,
} = userSlice.actions;

export default userSlice.reducer;
