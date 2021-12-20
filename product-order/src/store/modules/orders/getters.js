export default {
  orders(state) {
    return state.orders;
  },
  amount(state) {
    return state.orders.reduce((accumulator, current) => {
      return accumulator + current.product.price * current.quantity;
    }, 0);
  },
};
