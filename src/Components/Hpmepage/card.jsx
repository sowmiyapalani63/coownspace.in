import React from "react";
import "../../styles/global.css"; // You can create a separate CSS file for styles

const Card = () => {
  return (
    <section className="footer-top-cta">
      <div className="section-gap cta-section-gap">
        <div className="w-layout-blockcontainer container-default w-container">
          <div className="footer-top-cta-wrapper">
            <div className="footer-shape-bg-wrapper">
              <img
                src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a20b9c414b0c7ac60d953b_Footer%20Cta%20Shape1.png"
                alt="Footer Cta Shape"
                className="footer-cta-shape1"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a20b9df4b43028fda61e07_Footer%20Cta%20Shape2.png"
                alt="Footer Cta Shape"
                className="footer-cta-shape2"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a20b9c414b0c7ac60d9531_Footer%20Cta%20Shape3.png"
                alt="Footer Cta Shape"
                className="footer-cta-shape3"
                loading="lazy"
              />
            </div>

            <div className="footer-top-cta-content">
              <h2 className="footer-top-cta-title">
                Find Your Dream Home? Contact Us Today!
              </h2>
              <p className="footer-top-cta-text">
                Take the first step towards homeownership and reach out to our
                expert team at NestBes.
              </p>
              <a
                href="/contact-us"
                className="primary-button-wrapper cta-button w-inline-block"
              >
                <p className="button-text">Contact Us</p>
              </a>
            </div>

            <div className="footer-top-cta-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image.png"
                alt="Footer Top CTA Image"
                className="footer-top-cta-image"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 260px, (max-width: 1279px) 400px, (max-width: 1439px) 500px, 555px"
                srcSet="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image-p-500.png 500w, https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image.png 555w"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
