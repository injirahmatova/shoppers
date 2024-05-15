import React from "react";
import styles from "../../Companents/SectionThree/SectionThree.module.scss"

const SectionThree = () => {
  return (
    <section className={styles.sectionThree}>
      <div className={styles.containerThree}>
        <div className={styles.cardsThree}>
          <div className={styles.cardThree}>
            <div className={styles.photoThree}>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/shoe_1.jpg"
                alt=""
              />
            </div>
            <h3>Tank Top</h3>
            <p>Finding perfect t-shirt</p>
            <span>$ 50</span>
          </div>
          <div className={styles.cardThree}>
            <div className={styles.photoThree}>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/cloth_2.jpg"
                alt=""
              />
            </div>

            <h3>Corater</h3>
            <p>Finding perfect t-shirt</p>
            <span>$ 50</span>
          </div>
          <div className={styles.cardThree}>
            <div className={styles.photoThree}>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/cloth_3.jpg"
                alt=""
              />
            </div>

            <h3>Polo Shirt</h3>
            <p>Finding perfect t-shirt</p>
            <span>$ 50</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
