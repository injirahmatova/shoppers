import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";
const ProductCart = ({ item }) => {
  return (
    <>
      <div className={styles.cardThree}>
        <div className={styles.photoThree}>
          <img src={item.thumbnail} alt="" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <span>${item.price}</span>
      </div>
    </>
  );
};

export default ProductCart;
