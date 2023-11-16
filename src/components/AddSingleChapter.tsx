'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TChapter, TLesson } from '../app/(admin)/admin/create-course/page';
import AddLessons from './AddLessons';
import { TChapterKeys } from './AddChapters';
import AccordianHeader from './AccordianHeader';

function AddSingleChapter({
  chapter,
  updateChapter,
  deleteChapter,
}: {
  chapter: TChapter;
  updateChapter: (k: TChapterKeys, value: any, id: string) => void;
  deleteChapter: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const updateLessons = (lessons: TLesson[]) => {
    updateChapter('lessons', lessons, chapter.id);
  };

  return (
    <div className="border py-2 px-4 rounded-lg flex flex-col">
      <AccordianHeader
        open={open}
        onToggle={() => {
          setOpen(!open);
        }}
        onRemoveClick={() => {
          deleteChapter(chapter.id);
        }}
        removeText="Remove Chapter"
        title={chapter.title}
        titlePlaceholder="Add Chapter Info"
      />
      {open && (
        <div className="flex flex-col mt-4">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label>Title</label>
              <Input
                value={chapter.title}
                onChange={(e) =>
                  updateChapter('title', e.target.value, chapter.id)
                }
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label>Description</label>
              <Input
                value={chapter.description ?? ''}
                onChange={(e) =>
                  updateChapter('description', e.target.value, chapter.id)
                }
              />
            </div>
          </div>
          <AddLessons data={chapter.lessons} updateLessons={updateLessons} />
        </div>
      )}
    </div>
  );
}

export default AddSingleChapter;
