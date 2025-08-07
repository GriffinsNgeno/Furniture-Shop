"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.logoSection}>
              <h3>StagexAfrica</h3>
              <p>Your trusted partner in premium woodworking and sustainable timber solutions since 2020.</p>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-map-marker-alt" aria-hidden="true"></i>
                <span>Along Kericho-Mau Summit Road, 500m before Londiani Junction</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <span>+254 715 196 074</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <span>info@stagexafrica.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.services}>
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services">Custom Furniture</a></li>
              <li><a href="/services">Lumber Supply</a></li>
              <li><a href="/services">Kitchen Cabinets</a></li>
              <li><a href="/services">Construction Timber</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/profile.php?id=61570379308819" aria-label="Facebook" className={styles.socialLink}>
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/stageyafundi?igsh=OWd5OGMzMmU0ZGE3" aria-label="Instagram" className={styles.socialLink}>
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://vm.tiktok.com/ZMkQpGfSf/" aria-label="TikTok" className={styles.socialLink}>
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/254715196074" aria-label="WhatsApp" className={styles.socialLink}>
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© 2025 StagexAfrica. All rights reserved. Designed with ❤️ by <a href="https://griffinsngeno.vercel.app/">Griffins Ngeno</a></p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.footerDecoration}>
        <div className={styles.woodGrain}></div>
      </div>
    </footer>
  );
}
