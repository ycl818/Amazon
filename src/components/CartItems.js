import React from 'react'
import './CartItems.css'
import CartItem from './CartItem';

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    // do not update the state without setter function
    const newItems = [...items]
    newItems[index].quantity = e.target.value;
    setCartItems(newItems)
  };

  const deleteItem = (indexToDelete) => {
    // filter out the items where the item index does not equal the select item
    const newItems = items.filter((value, index) => {
      return index !== indexToDelete;
    });
    console.log(newItems)
    setCartItems(newItems);
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            index={index}
            item={item}
            key={index}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems
