import React from "react";

export default function Title({ title }: { title: string }) {
  return <h1 className='uppercase text-lg font-semibold'>{title}</h1>;
}
