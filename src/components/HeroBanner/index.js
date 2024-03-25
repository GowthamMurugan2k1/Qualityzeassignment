"use client";
import Carousel from "@/components/HeroBanner/Carousel";
import styles from "./Carousel.module.css";

const HeroBanner = () => {
  return (
    <>
      {/*  Banner Wrapper */}
      <div className={styles.backgroundImage}>
          <Carousel />
      </div>
    </>
  );
};

export default HeroBanner;
