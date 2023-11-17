import { Lesson } from '@prisma/client';
import React, { useState } from 'react';

type Props = {
  lesson: Lesson;
  idx: number;
};

function LessonView({ lesson, idx }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-2">
          <p className="bg-black text-white w-[20px] h-[20px] flex items-center justify-center text-[12px] rounded-full">
            {idx}
          </p>
          <a
            href={lesson.videoUrl}
            target="_blank"
            className="text-[14px] underline">
            {lesson.title}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[14px]">{lesson.length}</p>
          {lesson.description && (
            <p className="mt-[2px]">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </p>
          )}
        </div>
      </div>
      {lesson.description && (
        <p className="text-[14px] ml-7 mt-2 pl-4 border-l">
          {open && (
            <p className="text-[13px]">
              {lesson.description.length > 100
                ? lesson.description?.slice(0, 100) + '...'
                : lesson.description}
            </p>
          )}
        </p>
      )}
    </div>
  );
}

export default LessonView;
