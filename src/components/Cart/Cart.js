import './Cart.scss';
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart__info">
        <div className="cart__items">
          <p>1 Courses in Cart</p>
        </div>
      </div>
      <div className="cart__checkout"></div>
    </div>
  );
};

export default Cart;
