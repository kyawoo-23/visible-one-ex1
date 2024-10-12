import PublishedDate from "@/app/components/Text/PublishedDate";
import Title from "@/app/components/Text/Title";
import { articleData } from "@/app/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Trending() {
  return (
    <>
      <div className='flex justify-between'>
        <Title title='Trending' />
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
        {articleData.slice(2, 5).map((article, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center rounded bg-white'
          >
            <figure className='w-full h-52 relative'>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className='rounded rounded-b-none object-cover'
              />
            </figure>
            <div className='p-8 space-y-2'>
              <h3 className='font-semibold'>{article.title}</h3>
              <p className='text-sm text-gray-500'>{article.content}</p>
              <PublishedDate date={article.publishedAt} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
