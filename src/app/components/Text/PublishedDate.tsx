import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import React from "react";

export default function PublishedDate({
  date,
  className = "text-gray-500",
}: {
  date: string;
  className?: string;
}) {
  return (
    <div className='flex items-center gap-2'>
      <div className={className}>
        <Clock size={16} />
      </div>
      <p className={`text-sm italic ${className}`}>
        {formatDistanceToNow(new Date(date), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
}
