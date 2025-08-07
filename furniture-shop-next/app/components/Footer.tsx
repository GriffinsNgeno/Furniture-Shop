"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.Newsletter}>
        <div data-aos="fade-left" data-aos-duration="3000" className={styles.NewsletterImg}>
          <Image src="/images/image-from-rawpixel-id-16740275-png.png" alt="wood" width={175} height={100} />
        </div>
      </div>
      <div className={styles.footerMain}>
        <h3>StagexAfrica</h3>
        <div className={styles.footerLists}>
          <div className={styles.footerMainInfo}>
            <p>Strategically located along Kericho-Mau Summit Road, 500m before Londiani Junction, near Kedowa Technical Training College.</p>
            <div className={styles.footerIcons}>
              <a href="https://www.facebook.com/profile.php?id=61570379308819" aria-label="Facebook">
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/stageyafundi?igsh=OWd5OGMzMmU0ZGE3" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://vm.tiktok.com/ZMkQpGfSf/" aria-label="TikTok">
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.links1}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.links2}>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Live Chat</a></li>
              </ul>
            </div>
            <div className={styles.links3}>
              <ul>
                <li><a href="#">Jobs</a></li>
                <li><Link href="/services">Our Team</Link></li>
                <li><Link href="/services">Leadership</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright @2025. All rights reserved. Designed by <a href="https://griffinsngeno.vercel.app/">Griffins Ngeno❤️.</a></p>
        <div>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
        </div>
      </div>
    </footer>
  );
}
