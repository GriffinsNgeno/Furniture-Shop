"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
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
            <h1>Welcome to Stagex Africa Limited</h1>
            <p>Your trusted partner in premium timber products and sustainable woodworking solutions.</p>
            <div className={styles.heroButtons}>
              {/* <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>Learn More</button> */}
            </div>
          </div>
          <div className={styles.heroImage} data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/forest1-removebg.png" alt="forest" width={500} height={400} />
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className={styles.products}>
        <h2>Custom Woodworking Solutions</h2>
        <div className={styles.productGrid}>
          <div className={styles.productCard} data-aos="fade-up" data-aos-duration="1000">
            <Image src="/images/rb_86450-removebg-preview.png" alt="door" width={200} height={200} />
            <h3>Custom Doors</h3>
            <p>Handcrafted doors tailored to your specifications</p>
          </div>
          <div className={styles.productCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Image src="/images/roof.png" alt="roof" width={200} height={200} />
            <h3>Roofing Solutions</h3>
            <p>Premium timber roofing for lasting durability</p>
          </div>
          <div className={styles.productCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <Image src="/images/kitchen-removebg-preview.png" alt="kitchen" width={200} height={200} />
            <h3>Kitchen Cabinets</h3>
            <p>Beautiful and functional kitchen designs</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.whyChooseUsContent}>
          <div className={styles.whyChooseUsText} data-aos="fade-right" data-aos-duration="1000">
            <h3>Excellence in Woodworking</h3>
            <p>We specialize in providing high-quality Cypress, Mahogany, Oak, and Eucalyptus wood products for construction, furniture, and interior design. Established in 2020, we've built a reputation for delivering excellence, combining traditional craftsmanship with modern techniques to meet your unique needs.</p>
          </div>
          <div className={styles.whyChooseUsImage} data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/why-choose-us-img.jpg" alt="Why Choose Us" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* WE HELP SECTION */}
      <section className={styles.weHelp}>
        <h2>Our Commitment to Sustainability</h2>
        <div className={styles.weHelpGrid}>
          <div className={styles.helpCard} data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-solid fa-leaf" aria-hidden="true"></i>
            <h3>Sustainable Sourcing</h3>
            <p>We partner with responsibly managed forests and suppliers to ensure our wood is sustainably harvested.</p>
          </div>
          <div className={styles.helpCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <i className="fa-solid fa-recycle" aria-hidden="true"></i>
            <h3>Waste Reduction</h3>
            <p>Our production processes are designed to minimize waste, repurpose offcuts, and recycle materials wherever possible.</p>
          </div>
          <div className={styles.helpCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <i className="fa-solid fa-seedling" aria-hidden="true"></i>
            <h3>Tree Planting</h3>
            <p>We actively support tree planting initiatives to replenish the forests we rely on for our materials.</p>
          </div>
          <div className={styles.helpCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
            <h3>Energy Efficient</h3>
            <p>Our facility uses energy-efficient machinery and practices to reduce our carbon footprint.</p>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS SECTION */}
      <section className={styles.popularProducts}>
        <h2>Our Gallery</h2>
        <div className={styles.popularGrid}>
          {[1,2,3,4,5,6].map((num, idx) => (
            <div className={styles.popularCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 200} key={num}>
              <Image src={`/images/stageyafundi${num}.jpg`} alt="Popular Product" width={300} height={250} />
              {/* <div className={styles.popularCardContent}>
                <h3>Product {num}</h3>
                <p>High-quality timber product crafted with precision</p>
                <button>View Details</button>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.team}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000">
            <Image src="/images/cleophas-accountant.jpeg" alt="Team Member" width={120} height={120} />
            <h3>Cleophas</h3>
            <p>Accountant</p>
          </div>
          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Image src="/images/josphine-workshop-manager.jpeg" alt="Team Member" width={120} height={120} />
            <h3>Josphine</h3>
            <p>Workshop Manager</p>
          </div>
          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <Image src="/images/paul-manager.jpeg" alt="Team Member" width={120} height={120} />
            <h3>Paul</h3>
            <p>Manager</p>
          </div>
          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <Image src="/images/victor-marketing.jpeg" alt="Team Member" width={120} height={120} />
            <h3>Victor</h3>
            <p>Marketing</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contact}>
        <h2>Get In Touch</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Ready to Start Your Project?</h3>
            <p>Contact us today for a free consultation and quote. Our expert team is here to help bring your vision to life.</p>
          </div>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formRow}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
