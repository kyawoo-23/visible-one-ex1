import Link from "next/link";
import React from "react";
import FaceBookIcon from "@/app/icons/facebook-svgrepo-com.svg";
import InstagramIcon from "@/app/icons/instagram-svgrepo-com.svg";
import TwitterIcon from "@/app/icons/twitter-svgrepo-com.svg";
import WebIcon from "@/app/icons/web-svgrepo-com.svg";
import Image from "next/image";
import { Navigation } from "lucide-react";

export default function Footer() {
  return (
    <div className='bg-gray-500 py-10 mt-10'>
      <div className='flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl mx-auto px-4 gap-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <Link href='#' className='uppercase font-bold text-white'>
            Logo
          </Link>

          <div className='flex flex-col gap-1'>
            <Link href='#' className='text-white'>
              Home
            </Link>
            <Link href='#' className='text-white'>
              Discovery
            </Link>
            <Link href='#' className='text-white'>
              Photos
            </Link>
            <Link href='#' className='text-white'>
              Contact
            </Link>
          </div>

          <div className='flex flex-col gap-1'>
            <Link href='#' className='text-white'>
              About
            </Link>
            <Link href='#' className='text-white'>
              Help
            </Link>
            <Link href='#' className='text-white'>
              Terms
            </Link>
            <Link href='#' className='text-white'>
              Guidelines
            </Link>
          </div>

          <div className='flex flex-col gap-1'>
            <Link href='#' className='text-white'>
              Testimonials
            </Link>
            <Link href='#' className='text-white'>
              Advertise
            </Link>
            <Link href='#' className='text-white'>
              Integrations
            </Link>
            <Link href='#' className='text-white'>
              Careers
            </Link>
          </div>
        </div>

        <form className='w-full max-w-xs'>
          <div className='relative'>
            <input
              type='email'
              className='h-10 w-full py-4 ps-2 pe-9 border border-white bg-transparent text-white focus:outline-none rounded'
              placeholder='Email'
            />
            <div
              className='absolute right-3 top-2'
              style={{
                filter:
                  "invert(100%) sepia(48%) saturate(0%) hue-rotate(235deg) brightness(105%) contrast(109%)",
              }}
            >
              <Navigation />
            </div>
          </div>
          <span className='text-xs text-white mt-2 block'>
            Stay in touch with us for the latest products
          </span>
        </form>

        <div
          className='flex gap-6 items-center '
          style={{
            filter:
              "invert(100%) sepia(48%) saturate(0%) hue-rotate(235deg) brightness(105%) contrast(109%)",
          }}
        >
          <Image
            src={InstagramIcon}
            alt='Instagram'
            width={26}
            height={26}
            className='cursor-pointer'
          />
          <Image
            src={TwitterIcon}
            alt='Twitter'
            width={26}
            height={26}
            className='cursor-pointer'
          />
          <Image
            src={FaceBookIcon}
            alt='Facebook'
            width={24}
            height={24}
            className='cursor-pointer'
          />
          <Image
            src={WebIcon}
            alt='Website'
            width={28}
            height={28}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
