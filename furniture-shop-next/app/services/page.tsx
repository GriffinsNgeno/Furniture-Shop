"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./services.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText} data-aos="fade-right" data-aos-duration="1000">
            <h1>Our Premium Services</h1>
            <p>Explore a wide range of high-quality timber products and custom woodworking solutions tailored to your needs. From roofing timber and finishing touches to bespoke furniture, doors, and cabinetry, Stagex Africa Limited is your trusted partner for superior craftsmanship and reliable delivery across Kenya.</p>
            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Premium Quality Materials</span>
              </div>
              <div className={styles.feature}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Expert Craftsmanship</span>
              </div>
              <div className={styles.feature}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Sustainable Practices</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage} data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/forest1-removebg.png" alt="Forest" width={500} height={400} />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <p className={styles.servicesDescription}>Comprehensive woodworking solutions for all your needs</p>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-couch" aria-hidden="true"></i>
            </div>
            <h3>Custom Furniture</h3>
            <p>Design and create bespoke furniture pieces tailored to your style and space requirements. From dining tables to bedroom sets, we bring your vision to life.</p>
            <ul className={styles.serviceFeatures}>
              <li>Dining Room Furniture</li>
              <li>Bedroom Sets</li>
              <li>Living Room Pieces</li>
              <li>Office Furniture</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>

          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-tree" aria-hidden="true"></i>
            </div>
            <h3>Lumber Supply</h3>
            <p>We provide a variety of high-quality, sustainably sourced wood for your projects. From construction timber to specialty woods.</p>
            <ul className={styles.serviceFeatures}>
              <li>Cypress Wood</li>
              <li>Mahogany</li>
              <li>Oak</li>
              <li>Eucalyptus</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>

          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-tools" aria-hidden="true"></i>
            </div>
            <h3>Woodworking Services</h3>
            <p>From cutting to finishing, we offer expert woodworking services for all your needs. Professional craftsmanship guaranteed.</p>
            <ul className={styles.serviceFeatures}>
              <li>Custom Cutting</li>
              <li>Joining & Assembly</li>
              <li>Finishing & Staining</li>
              <li>Installation</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>

          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-home" aria-hidden="true"></i>
            </div>
            <h3>Kitchen & Bedroom Fittings</h3>
            <p>Tailored designs to suit your specific needs and preferences. Complete kitchen and bedroom solutions.</p>
            <ul className={styles.serviceFeatures}>
              <li>Kitchen Cabinets</li>
              <li>Bedroom Wardrobes</li>
              <li>Storage Solutions</li>
              <li>Custom Shelving</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>

          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-door-open" aria-hidden="true"></i>
            </div>
            <h3>Custom Doors</h3>
            <p>Handcrafted doors tailored to your specifications. Interior and exterior doors with premium finishes.</p>
            <ul className={styles.serviceFeatures}>
              <li>Interior Doors</li>
              <li>Exterior Doors</li>
              <li>Custom Designs</li>
              <li>Premium Finishes</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>

          <div className={styles.serviceCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-hammer" aria-hidden="true"></i>
            </div>
            <h3>Construction Timber</h3>
            <p>High-quality construction timber for roofing, framing, and structural applications. Reliable and durable.</p>
            <ul className={styles.serviceFeatures}>
              <li>Roofing Timber</li>
              <li>Structural Beams</li>
              <li>Framing Materials</li>
              <li>Decking</li>
            </ul>
            {/* <button className={styles.serviceBtn}>Learn More</button> */}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className={styles.process}>
        <h2>Our Process</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.stepNumber}>1</div>
            <h3>Consultation</h3>
            <p>We begin with a detailed consultation to understand your needs, preferences, and project requirements.</p>
          </div>
          <div className={styles.processStep} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className={styles.stepNumber}>2</div>
            <h3>Design & Planning</h3>
            <p>Our experts create detailed designs and plans, ensuring every detail meets your specifications.</p>
          </div>
          <div className={styles.processStep} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className={styles.stepNumber}>3</div>
            <h3>Craftsmanship</h3>
            <p>Skilled artisans bring your vision to life using traditional techniques and modern precision.</p>
          </div>
          <div className={styles.processStep} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className={styles.stepNumber}>4</div>
            <h3>Delivery & Installation</h3>
            <p>We handle delivery and professional installation, ensuring your project is completed to perfection.</p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section className={styles.sustainability}>
        <div className={styles.sustainabilityContent}>
          <div className={styles.sustainabilityText} data-aos="fade-right" data-aos-duration="1000">
            <h2>Our Commitment to Sustainability</h2>
            <p>Sustainability isn't just a buzzword – it's at the heart of everything we do. We recognize the importance of preserving our environment while delivering high-quality wood products to our customers.</p>
            <div className={styles.sustainabilityFeatures}>
              <div className={styles.sustainabilityFeature}>
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                <span>Responsibly Managed Forests</span>
              </div>
              <div className={styles.sustainabilityFeature}>
                <i className="fa-solid fa-recycle" aria-hidden="true"></i>
                <span>Waste Reduction</span>
              </div>
              <div className={styles.sustainabilityFeature}>
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <span>Tree Planting Initiatives</span>
              </div>
              <div className={styles.sustainabilityFeature}>
                <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                <span>Energy Efficient</span>
              </div>
            </div>
          </div>
          <div className={styles.sustainabilityImage} data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/green-tree-growing-small-earth-globe-representing-environmental-conservation.png" alt="Sustainability" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and quote. Our expert team is here to help bring your vision to life.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Free Quote</button>
            <button className={styles.secondaryBtn}>View Our Portfolio</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
