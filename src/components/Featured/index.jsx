import React from "react";
import photos from "../../data";
import "./style.scss";

export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>Artin</h6>
        <img src={firstImage} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>Gothenburg</h6>
        <img src={secondImage} data-scroll/>
      </div>
    </section>
  );
}
