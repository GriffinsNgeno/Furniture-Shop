"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
    document.body.classList.remove('menu-open');
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        handleMenuToggle();
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (menuOpen && window.innerWidth > 768) {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav aria-label="Main navigation">
        <div className={styles.logoSection}>
          <Link href="/" onClick={handleLinkClick} className={styles.logo}>
            <div className={styles.logoIcon}>
              <i className="fa-solid fa-tree" aria-hidden="true"></i>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>StagexAfrica</span>
              <span className={styles.logoSub}>Premium Timber Solutions</span>
            </div>
          </Link>
        </div>
        
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`} id="menu">
          <li>
            <Link 
              href="/" 
              aria-current={pathname === "/" ? "page" : undefined} 
              className={pathname === "/" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              aria-current={pathname === "/about" ? "page" : undefined} 
              className={pathname === "/about" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              aria-current={pathname === "/services" ? "page" : undefined} 
              className={pathname === "/services" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              aria-current={pathname === "/contact" ? "page" : undefined} 
              className={pathname === "/contact" ? styles.active : ""}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button 
          className={`${styles.bars} ${menuOpen ? styles.active : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
}
