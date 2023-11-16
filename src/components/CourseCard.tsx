import React from 'react';
import { Button } from '@/components/ui/button';
import { ICourse } from '@/types';

type Props = {
  course: ICourse;
};

function CourseCard({ course }: Props) {
  return (
    <div className="w-full border rounded-lg shadow-sm overflow-hidden flex flex-col">
      <img className="h-[150px] object-cover w-full" src={course.thumbnail} />
      <div className="py-2 px-2 flex flex-col h-full">
        <p className="text-[18px]">{course.title}</p>
        <p className="text-[14px] text-slate-500">
          {course.shortDescription.length > 75
            ? course.shortDescription.slice(0, 75) + '...'
            : course.shortDescription}
        </p>
        <div className="flex-1"></div>
        <div className="mt-3 flex items-end justify-between">
          <div className="">
            <p className="text-[13px] font-semibold">
              {course.chapters.length} Chapters
            </p>
            <p className="text-[12px] font-semibold">
              {course.chapters.reduce(
                (prev, curr) => prev + curr.lessons.length,
                0
              )}
              + Lessons
            </p>
          </div>
          <p className="text-[22px] font-semibold">${course.price}</p>
        </div>
        <Button className="mt-2" variant="outline">
          Overview
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
