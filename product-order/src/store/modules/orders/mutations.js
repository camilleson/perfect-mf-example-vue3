export default {
  addOrder(state, product) {
    const orderIndex = state.orders.findIndex(
      (order) => order.product.id === product.id
    );

    if (orderIndex === -1) {
      state.orders.push({ product, quantity: 1 });
    } else {
      state.orders[orderIndex].quantity++;
    }
  },
  removeOrder(state, product) {
    state.orders = state.orders.reduce((accumulator, current) => {
      if (current.product.id === product.id) {
        current.quantity--;
      }
      if (current.quantity !== 0) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  },
};
