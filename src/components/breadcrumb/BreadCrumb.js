'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import "./BreadCrumb.css";
import Link from 'next/link';

const BreadCrumb = () => {
  const pathname = usePathname();
  let currentLink = "";

  const crumbs = pathname.split('/')
    .filter(crumb => crumb !== "").map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLast = index === array.length - 1;
      return (
        <div className={`crumb ${isLast ? 'crumb-disabled' : ''}`} key={currentLink}>
          {isLast ? crumb : <Link href={currentLink}>{crumb}</Link>}
        </div>
      );
    });

  return (
    <nav className='wpa-breadcrumb wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30 wpa-regular-font-weight wpa-paragraph-text wpa-btn-dark-color'>
      <div className='crumb'>
        <Link href="/">Home</Link>
      </div>
      {crumbs}
    </nav>
  );
}

export default BreadCrumb;
