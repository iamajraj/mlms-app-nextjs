'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TChapter, TLesson } from '../app/(admin)/admin/create-course/page';
import AddLessons from './AddLessons';
import AddSingleChapter from './AddSingleChapter';

type Props = {
  update: (data: TChapter[]) => void;
  data: TChapter[];
};

const defaultChapterValues: TChapter = {
  id: 'chapter_0',
  title: '',
  description: '',
  lessons: [],
};

export type TChapterKeys = keyof typeof defaultChapterValues;

function AddChapters({ update, data }: Props) {
  const [chapters, setChapters] = useState<TChapter[]>(data);

  const updateChapter = (key: TChapterKeys, value: any, id: string) => {
    const newChapters = chapters.map((chapter) => {
      if (chapter.id === id) {
        return {
          ...chapter,
          [key]: value,
        };
      }
      return chapter;
    });
    setChapters(newChapters);
  };

  const deleteChapter = (id: string) => {
    const deletionIndex = chapters.findIndex((chapter) => chapter.id === id);
    const chaptersCopy = [...chapters];
    chaptersCopy.splice(deletionIndex, 1);
    setChapters(chaptersCopy);
  };

  useEffect(() => {
    update(chapters);
  }, [chapters]);

  return (
    <div className="mt-2 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl">Chapters</p>
        <Button
          onClick={() => {
            setChapters([
              ...chapters,
              {
                ...defaultChapterValues,
                id: `chapter_${chapters.length + 1}`,
              },
            ]);
          }}>
          New
        </Button>
      </div>
      <div className="mt-4"></div>
      <div className="flex flex-col gap-4">
        {chapters.map((chapter) => (
          <AddSingleChapter
            key={chapter.id}
            chapter={chapter}
            updateChapter={updateChapter}
            deleteChapter={deleteChapter}
          />
        ))}
      </div>
    </div>
  );
}

export default AddChapters;
