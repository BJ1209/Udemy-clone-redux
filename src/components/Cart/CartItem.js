const CartItem = () => {
  return (
    <div className="cartItem">
      <img src="" alt="" className="cartItem__image" />
      <div className="cartItem__info">
        <div className="cartItem__course"></div>
        <button className="cartItem__remove">Remove</button>
        <p className="cartItem__price"></p>
      </div>
    </div>
  );
};

export default CartItem;
