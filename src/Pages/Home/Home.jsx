import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Companents/Header/Header";
import ProductCart from "../../Companents/ProductCart/ProductCart";
import SectionOne from "../../Companents/SectionOne/SectionOne";
import SectionThree from "../../Companents/SectionThree/SectionThree";
import SectionTwo from "../../Companents/SectionTwo/SectionTwo";
import styles from '../Home/Home.module.scss'
const Home = () => {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      Setdata(res.data.products);
    });
  }, []);
  const addTocart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <div className={styles.pro}>
        <div className={styles.containerFour}>
          <h1>Featured Products</h1>
          <div className={styles.productsBox}>
            {data.map((item) => (
              <ProductCart item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
