const toOrder = (carts, addressId, note, promoCode = '') => {
   const parseCarts = carts.map((cart) => {
      return {
         productId: cart?.id,
         quantity: cart?.amountOrder,
      };
   });
   const createOrder = {
      description: note,
      addressId,
      items: parseCarts,
   };

   return createOrder;
};

export default toOrder;
