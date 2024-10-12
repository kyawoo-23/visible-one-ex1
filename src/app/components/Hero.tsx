import PublishedDate from "@/app/components/Text/PublishedDate";
import Title from "@/app/components/Text/Title";
import { articleData } from "@/app/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:h-[480px] mb-10'>
      <figure className='relative h-64 w-full lg:h-full lg:min-w-[70%]'>
        <Image
          src='https://images.unsplash.com/photo-1712496587611-c4750b815998?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hero'
          fill
          className='object-cover'
        />

        <div className='absolute inset-0 bg-black/40'>
          <div className='flex flex-col justify-center w-full max-w-xl mx-auto h-full p-4'>
            <div className='flex flex-col w-full text-white'>
              <Title title='World news' />
            </div>
            <hr className='w-full my-2 md:my-4' />
            <div className='text-white'>
              <Title title='Amazing places in America to visit.' />
              <p className='text-sm'>
                For some reason - this country, this city, this neighborhood,
                this particular street - is the place you are living a majority
                of your life in.
              </p>
            </div>
            <button className='px-6 py-2 bg-primary rounded uppercase w-fit text-white font-bold mt-4 text-sm md:text-base'>
              Learn more
            </button>
          </div>
        </div>
      </figure>

      <div className='p-10 lg:p-14 bg-white w-full h-full grid place-items-center'>
        <div className='flex flex-col w-full mb-4 lg:m-0'>
          <div className='flex items-center justify-between mb-4 lg:mb-8'>
            <Title title='More news' />
            <div className='flex items-center gap-6'>
              <button>
                <ChevronLeft />
              </button>
              <button>
                <ChevronRight />
              </button>
            </div>
          </div>

          <hr className='w-full' />
        </div>

        <div className='flex flex-col gap-8 w-full'>
          {articleData.slice(0, 2).map((article, idx) => (
            <div
              key={idx}
              className='flex flex-col sm:flex-row items-start gap-4'
            >
              <div className='space-y-1'>
                <h2 className='font-semibold text-primary uppercase text-sm'>
                  {article.category}
                </h2>
                <h3 className='font-semibold'>{article.title}</h3>
                <p className='text-sm text-gray-500'>{article.content}</p>
                <PublishedDate date={article.publishedAt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
