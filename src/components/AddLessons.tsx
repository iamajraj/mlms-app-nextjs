'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { TLesson } from '../app/(admin)/admin/create-course/page';
import AddSingleLesson from './AddSingleLesson';

const defaultLessonValues: TLesson = {
  id: 'lesson_0',
  title: '',
  description: '',
  length: '',
  videoUrl: '',
};

export type TLessonKeys = keyof typeof defaultLessonValues;

function AddLessons({
  data,
  updateLessons,
}: {
  data: TLesson[];
  updateLessons: (lessons: TLesson[]) => void;
}) {
  const [lessons, setLessons] = useState<TLesson[]>(data);

  const updateLesson = (key: TLessonKeys, value: any, id: string) => {
    const newLessons = lessons.map((lesson) => {
      if (lesson.id === id) {
        return {
          ...lesson,
          [key]: value,
        };
      }
      return lesson;
    });
    setLessons(newLessons);
  };

  const deleteLesson = (id: string) => {
    const deletionIndex = lessons.findIndex((lesson) => lesson.id === id);
    const lessonsCopy = [...lessons];
    lessonsCopy.splice(deletionIndex, 1);
    setLessons(lessonsCopy);
  };

  useEffect(() => {
    updateLessons(lessons);
  }, [lessons]);

  return (
    <div className="mt-2 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Lessons</p>
        <Button
          onClick={() => {
            setLessons([
              ...lessons,
              {
                ...defaultLessonValues,
                id: `lesson_${lessons.length + 1}`,
              },
            ]);
          }}>
          New
        </Button>
      </div>
      <div className="mt-4"></div>
      <div className="flex flex-col gap-4">
        {lessons.map((lesson) => (
          <AddSingleLesson
            key={lesson.id}
            lesson={lesson}
            updateLesson={updateLesson}
            deleteLesson={deleteLesson}
          />
        ))}
      </div>
    </div>
  );
}

export default AddLessons;
