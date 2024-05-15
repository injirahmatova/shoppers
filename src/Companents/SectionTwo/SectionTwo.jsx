import React from "react";
import styles from "../SectionTwo/SectionTwo.module.scss";
import { FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";


const SectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.containerTwo}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
            <FaTruck color={"#7971EA"} size={50} />
            </div>
            <div className={styles.text}>
              <h2>FREE SHIPPING</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
            <IoMdRefresh color={"#7971EA"} size={50}  />

            </div>
            <div className={styles.text}>
              <h2>FREE RETURNS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
            <IoIosHelpCircle color={"#7971EA"} size={50}  />

            </div>
            <div className={styles.text}>
              <h2>CUSTOMER SUPPORT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
