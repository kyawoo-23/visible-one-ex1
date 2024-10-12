"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For the mobile hamburger icon

const menuLinks = [
  { title: "Home", href: "#" },
  { title: "Discovery", href: "#" },
  { title: "Photos", href: "#" },
  { title: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-100 shadow'>
      <div className='flex items-center justify-between w-full px-4 h-14'>
        <Link href='/' className='font-extrabold text-primary'>
          LOGO
        </Link>

        <div className='hidden md:flex items-center gap-4'>
          {menuLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`uppercase ${
                idx === 0 ? "font-semibold" : "font-medium"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link href='#'>
            <figure className='relative size-8 rounded-full'>
              <Image
                src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Avatar'
                fill
                className='rounded-full object-cover'
              />
            </figure>
          </Link>
        </div>

        <button className='md:hidden block' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-start gap-4 px-4 py-2'>
          {menuLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`uppercase w-full ${
                idx === 0 ? "font-semibold" : "font-medium"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link href='#'>
            <figure className='relative size-8 rounded-full'>
              <Image
                src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Avatar'
                fill
                className='rounded-full object-cover'
              />
            </figure>
          </Link>
        </div>
      )}
    </nav>
  );
}
