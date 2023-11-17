'use client';

import { Chapter, Lesson } from '@prisma/client';
import { useState } from 'react';
import LessonView from './LessonView';

const ChapterView = ({
  chapter,
}: {
  chapter: Chapter & { lessons: Lesson[] };
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg px-4 py-2 flex flex-col">
      <div
        onClick={() => setOpen(!open)}
        className={`flex cursor-pointer items-center justify-between ${
          open ? 'border-b pb-2' : ''
        }`}>
        <p>{chapter.title}</p>
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
      </div>

      {open && (
        <div className="mt-2 flex flex-col">
          {chapter.lessons.map((lesson, i) => (
            <LessonView key={lesson.id} lesson={lesson} idx={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterView;
