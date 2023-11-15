import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {};

function CourseCard({}: Props) {
  return (
    <div className="w-full border rounded-lg shadow-sm overflow-hidden">
      <img
        className="h-[150px] object-cover w-full"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20230629123647/Best-C-Programming-Courses-For-Beginners.png"
      />
      <div className="py-2 px-2 flex flex-col h-full">
        <p className="text-[18px]">C Programming Course</p>
        <p className="text-[14px] text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          adipisci?...
        </p>
        <div className="mt-3 flex items-end justify-between">
          <div className="">
            <p className="text-[13px] font-semibold">6 Chapters</p>
            <p className="text-[12px] font-semibold">10+ Lessons</p>
          </div>
          <p className="text-[22px] font-semibold">$99.99</p>
        </div>
        <Button className="mt-2" variant="outline">
          Overview
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
