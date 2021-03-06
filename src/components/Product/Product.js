import React from "react";
import styles from "./Product.module.scss";

const Product = ({ image, imgAlt, description, price, onClick, showModal }) => {
  return (
    <article className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={imgAlt} onClick={showModal} />
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <button onClick={onClick}>BUY</button>
    </article>
  );
};

export default Product;
