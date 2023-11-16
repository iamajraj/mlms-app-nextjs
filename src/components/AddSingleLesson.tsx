'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TLesson } from '../app/(admin)/admin/create-course/page';
import { TLessonKeys } from './AddLessons';
import AccordianHeader from './AccordianHeader';

function AddSingleLesson({
  lesson,
  updateLesson,
  deleteLesson,
}: {
  lesson: TLesson;
  updateLesson: (k: TLessonKeys, value: string, id: string) => void;
  deleteLesson: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border py-2 px-4 rounded-lg flex flex-col">
      <AccordianHeader
        open={open}
        onToggle={() => {
          setOpen(!open);
        }}
        onRemoveClick={() => {
          deleteLesson(lesson.id);
        }}
        title={lesson.title}
        titlePlaceholder="Add Lesson Info"
        removeText="Remove Lesson"
      />
      {open && (
        <div className="flex flex-col mt-4">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label>Title</label>
              <Input
                value={lesson.title}
                onChange={(e) =>
                  updateLesson('title', e.target.value, lesson.id)
                }
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label>Description</label>
              <Input
                value={lesson.description ?? ''}
                onChange={(e) =>
                  updateLesson('description', e.target.value, lesson.id)
                }
              />
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="flex flex-col gap-2 w-full">
              <label>Video Length</label>
              <Input
                value={lesson.length ?? ''}
                onChange={(e) =>
                  updateLesson('length', e.target.value, lesson.id)
                }
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label>Video URL</label>
              <Input
                value={lesson.videoUrl}
                onChange={(e) =>
                  updateLesson('videoUrl', e.target.value, lesson.id)
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddSingleLesson;
