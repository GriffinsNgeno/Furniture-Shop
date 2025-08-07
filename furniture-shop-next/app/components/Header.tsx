"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link href="/" onClick={closeMenu} className={styles.logo}>
            <div className={styles.logoIcon}>
              <i className="fa-solid fa-tree" aria-hidden="true"></i>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>StagexAfrica</span>
              <span className={styles.logoSub}>Premium Timber Solutions</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.desktopMenu}>
          <li>
            <Link 
              href="/" 
              className={pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={pathname === "/services" ? styles.active : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={pathname === "/contact" ? styles.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileMenuList}>
            <li>
              <Link 
                href="/" 
                className={pathname === "/" ? styles.active : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={pathname === "/about" ? styles.active : ""}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={pathname === "/services" ? styles.active : ""}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={pathname === "/contact" ? styles.active : ""}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
