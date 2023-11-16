import React from 'react';
import CourseCard from '@/components/CourseCard';
import { getCourses } from '../../../utils/getCourses';

type Props = {};

async function Courses({}: Props) {
  const courses = await getCourses();

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col">
      <h1 className="w-max mx-auto py-5 text-[30px]">
        Browse{' '}
        <span className="relative">
          Courses
          <img
            className="absolute left-5 -bottom-4 w-[70%]"
            src="/fun-underline.svg"
          />
        </span>
      </h1>
      <div className="grid grid-cols-4 grid-rows-1 w-full h-full gap-5 py-5 mt-4 ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
