"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../images/wp-arena-logo.svg";
import SearchIcon from "../../images/search-icon.png";
import "./Header.css";

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };

  const handleBurgerClick = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  useEffect(() => {
    if (isHeaderOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHeaderOpen]);

  return (
    <section>
      <header>
        <div className="wpa-header-wrapper wpa-wrapper-sides-spacing wpa-flex wpa-gap-xxl wpa-content-top-bottom-spacing">
          <div className="wpa-header-logo">
            <Link href="/" passHref>
              <Image
                src={HeaderLogo}
                alt="Header Logo"
                width={16}
                height={16}
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="wpa-flex wpa-space-between wpa-width-100 wpa-flex-end-on-sm">
            <nav className="wpa-parahraph-text wpa-list-style-type-none wpa-anchor-underline-none wpa-desktop-menu">
              <ul className="wpa-flex wpa-menu-items-gap wpa-regular-font-weight">
                <li><Link suspense='true' href="/category/news" passHref>News</Link></li>
                <li><Link suspense='true' href="/category/tutorials" passHref>Tutorials</Link></li>
                <li><Link suspense='true' href="/category/reviews" passHref>Reviews</Link></li>
                <li><Link suspense='true' href="/category/comparisons" passHref>Comparison</Link></li>
                <li><Link suspense='true' href="/category/resources" passHref>Resources</Link></li>
                <li><Link suspense='true' href="/category/collections" passHref>Collection</Link></li>
              </ul>
            </nav>
            <div className="wpa-right-menu-buttons">
              <div className="wpa-header-search-bar wpa-flex">
                <form className="wpa-flex" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="head-btn" type="submit">
                    <Image
                      width={16}
                      height={16}
                      objectFit="cover"
                      src={SearchIcon}
                      alt="Search Icon"
                    />
                  </button>
                </form>
              </div>
            </div>

            <div className="menuButton wpa-mobile-menu">
              <input
                type="checkbox"
                id="navcheck"
                role="button"
                title="menu"
                onChange={handleBurgerClick}
                checked={isHeaderOpen}
              />
              <label htmlFor="navcheck" aria-hidden="true" title="menu">
                <span className="burger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
              </label>
              <ul id="menu" className={`menuNav ${isHeaderOpen ? "open" : ""}`}>
                <li><Link href="/category/news" passHref>News</Link></li>
                <li><Link href="/category/tutorials" passHref>Tutorials</Link></li>
                <li><Link href="/category/reviews" passHref>Reviews</Link></li>
                <li><Link href="/category/comparisons" passHref>Comparison</Link></li>
                <li><Link href="/category/resources" passHref>Resources</Link></li>
                <li><Link href="/category/collections" passHref>Collection</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
