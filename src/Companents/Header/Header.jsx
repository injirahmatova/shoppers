import React from "react";
import styles from "../../Companents/Header/Header.module.scss";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.containerTop}>
          <div className={styles.icons}>
            <IoIosSearch size={20} color={"rgb(140, 146, 160)"} />
            <input color={"rgb(140, 146, 160)"} type="text" placeholder="Search" />
          </div>
          <div className={styles.logo}>
            <a>SHOPPERS</a>
          </div>
          <div className={styles.iconRight}>
            <FaUser color={"rgb(140, 146, 160)"}/>
            <CiHeart size={25} color={"rgb(140, 146, 160)"}/>
            <FaCartShopping color={"rgb(140, 146, 160)"}/>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.headerBottom}>
        <div className={styles.containerBottom}>
          <nav>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SHOP</a>
              </li>
              <li>
                <a href="">CATALOGUE</a>
              </li>
              <li>
                <a href="">NEW ARRIVALS</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
