"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
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
            <h1>About Stagex Africa</h1>
            <p>At Stagex Africa Limited, we specialize in crafting premium timber products that blend sustainability, quality, and expert craftsmanship. Since 2020, we've proudly served clients across Kenya, providing solutions for construction, furniture, and interior design needs.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage} data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/forest1-removebg.png" alt="Forest" width={500} height={400} />
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <div className={styles.missionText} data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Mission</h2>
            <p>We aim to transform spaces while preserving our planet for future generations through sustainable practices and innovative woodworking solutions.</p>
          </div>
          <div className={styles.missionCards}>
            <div className={styles.missionCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <i className="fa-solid fa-leaf" aria-hidden="true"></i>
              <h3>Sustainability</h3>
              <p>Committed to eco-friendly practices and responsible sourcing</p>
            </div>
            <div className={styles.missionCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <i className="fa-solid fa-award" aria-hidden="true"></i>
              <h3>Quality</h3>
              <p>Premium materials and expert craftsmanship in every project</p>
            </div>
            <div className={styles.missionCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <i className="fa-solid fa-users" aria-hidden="true"></i>
              <h3>Customer Focus</h3>
              <p>Personalized solutions tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.team}>
        <h2>Meet Our Expert Team</h2>
        <p className={styles.teamDescription}>We are a group of passionate individuals dedicated to delivering excellence in every project.</p>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.teamImage}>
              <Image src="/images/paul-manager.jpeg" alt="Paul Rop" width={300} height={250} />
              <div className={styles.teamOverlay}>
                <div className={styles.socialLinks}>
                  <a href="tel:0715196074" aria-label="Call Paul">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:paul@stagexafrica.com" aria-label="Email Paul">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.teamInfo}>
              <h3>Paul Rop</h3>
              <p className={styles.role}>Manager</p>
              <p className={styles.bio}>Paul develops smart, intuitive designs that optimize workflows, ensuring a seamless and productive experience for all teams.</p>
              <p className={styles.contact}>📞 0715196074</p>
            </div>
          </div>

          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className={styles.teamImage}>
              <Image src="/images/cleophas-accountant.jpeg" alt="Cleophas Kibet" width={300} height={250} />
              <div className={styles.teamOverlay}>
                <div className={styles.socialLinks}>
                  <a href="tel:0708611724" aria-label="Call Cleophas">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:cleophas@stagexafrica.com" aria-label="Email Cleophas">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.teamInfo}>
              <h3>Cleophas Kibet</h3>
              <p className={styles.role}>Accountant</p>
              <p className={styles.bio}>Cleophas creates clear, intuitive designs that simplify financial processes, offering users a seamless and efficient experience.</p>
              <p className={styles.contact}>📞 0708611724</p>
            </div>
          </div>

          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className={styles.teamImage}>
              <Image src="/images/josphine-workshop-manager.jpeg" alt="Josephine Muthoni" width={300} height={250} />
              <div className={styles.teamOverlay}>
                <div className={styles.socialLinks}>
                  <a href="tel:0757048899" aria-label="Call Josephine">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:josephine@stagexafrica.com" aria-label="Email Josephine">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.teamInfo}>
              <h3>Josephine Muthoni</h3>
              <p className={styles.role}>Workshop Manager</p>
              <p className={styles.bio}>Josephine designs practical, user-friendly solutions that streamline processes and ensure a smooth, efficient experience for everyone in the workshop.</p>
              <p className={styles.contact}>📞 0757048899</p>
            </div>
          </div>

          <div className={styles.teamCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className={styles.teamImage}>
              <Image src="/images/victor-marketing.jpeg" alt="Victor Kipbet" width={300} height={250} />
              <div className={styles.teamOverlay}>
                <div className={styles.socialLinks}>
                  <a href="tel:0741031713" aria-label="Call Victor">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:victor@stagexafrica.com" aria-label="Email Victor">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.teamInfo}>
              <h3>Victor Kipbet</h3>
              <p className={styles.role}>Marketing Manager</p>
              <p className={styles.bio}>Victor creates strategic, user-centered designs that deliver seamless and impactful experiences, ensuring both brand alignment and user satisfaction.</p>
              <p className={styles.contact}>📞 0741031713</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard} data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-solid fa-seedling" aria-hidden="true"></i>
            <h3>Environmental Stewardship</h3>
            <p>We prioritize sustainable practices and responsible resource management in all our operations.</p>
          </div>
          <div className={styles.valueCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <i className="fa-solid fa-hammer" aria-hidden="true"></i>
            <h3>Expert Craftsmanship</h3>
            <p>Our skilled artisans combine traditional techniques with modern innovation to create exceptional products.</p>
          </div>
          <div className={styles.valueCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <i className="fa-solid fa-handshake" aria-hidden="true"></i>
            <h3>Trust & Reliability</h3>
            <p>We build lasting relationships through transparency, quality, and consistent delivery.</p>
          </div>
          <div className={styles.valueCard} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
            <h3>Innovation</h3>
            <p>We continuously explore new techniques and materials to deliver cutting-edge solutions.</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className={styles.gallery}>
        <h2>Our Work Gallery</h2>
        <div className={styles.galleryGrid}>
          {[1,2,3,4,5,6].map((num, idx) => (
            <div className={styles.galleryItem} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 100} key={num}>
              <Image src={`/images/stageyafundi${num}.jpg`} alt="Our Work" width={300} height={250} />
              {/* <div className={styles.galleryOverlay}>
                <h3>Project {num}</h3>
                <p>Custom woodworking excellence</p>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
