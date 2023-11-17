import React, { useState } from 'react';
import { getSingleCourse } from '@/utils/getSingleCourse';
import { notFound } from 'next/navigation';
import ChapterView from '@/components/ChapterView';

type Props = {
  params: {
    id: string;
  };
};

async function CourseOverView({ params: { id } }: Props) {
  const course = await getSingleCourse(Number(id));

  if (!course) return notFound();

  return (
    <div className="max-w-6xl w-full py-4 mx-auto flex-1 flex">
      <div className="flex-1">
        <p className="text-3xl font-semibold">{course.title}</p>
        <p className="text-[15px] mt-1">{course.shortDescription}</p>

        <div className="mt-4 pt-4 border-t pr-5">
          <p className="font-semibold mb-4">Chapters:</p>
          <div className="flex flex-col gap-2">
            {course.chapters.map((chapterData) => (
              <ChapterView key={chapterData.id} chapter={chapterData} />
            ))}
          </div>
        </div>
      </div>
      <div className="border w-[40%] overflow-hidden h-max p-2 bg-white shadow-sm rounded-md">
        <img src={course.thumbnail} className="rounded-md" />
        <div className="mt-2">
          <p className="text-[15px] text-slate-700">
            {course.shortDescription}
          </p>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-[15px] ">
              <p>
                <span className="font-semibold">Chapters:</span>{' '}
                {course.chapters.length}
              </p>
              <p>
                <span className="font-semibold">Lessons:</span>{' '}
                {course.chapters.reduce(
                  (prev, curr) => prev + curr.lessons.length,
                  0
                )}
              </p>
            </div>
            <p className="text-[30px] font-bold w-max ml-auto">
              ${course.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseOverView;
