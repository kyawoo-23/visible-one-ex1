import PublishedDate from "@/app/components/Text/PublishedDate";
import Title from "@/app/components/Text/Title";
import { articleData } from "@/app/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HappeningNow() {
  return (
    <>
      <div className='flex justify-between'>
        <Title title='Happening Now' />
        <div className='flex items-center gap-6'>
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-2 grid gap-4'>
          {articleData.slice(5, 7).map((article, idx) => (
            <figure className='relative w-full h-[420px] rounded' key={idx}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className='object-cover rounded'
              />
              <div className='absolute w-full bottom-0 bg-black/20 p-4 md:p-10 space-y-2 text-white'>
                <h3 className='font-semibold text-lg'>{article.title}</h3>
                <p>{article.content}</p>
                <PublishedDate
                  date={article.publishedAt}
                  className='text-white'
                />
              </div>
            </figure>
          ))}
        </div>
        <div className='grid gap-4'>
          {articleData.slice(7, 10).map((article, idx) => (
            <div key={idx} className='flex flex-col rounded'>
              <figure className='w-full h-52 relative'>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className='rounded rounded-b-none object-cover'
                />
              </figure>
              <div className='pt-3 space-y-2'>
                <h3 className='font-semibold'>{article.title}</h3>
                <PublishedDate date={article.publishedAt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
