import React from "react";
import styles from "../SectionOne/SectionOne.module.scss";
const SectionOne = () => {
  return (
    <section className={styles.sectionOne}>
      <div className={styles.containerOne}>
        <div className={styles.textOne}>
          <h1>Finding Your Perfect Shoes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
