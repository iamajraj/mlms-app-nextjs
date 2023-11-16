'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import AddCourseDetails from '@/components/AddCourseDetails';
import AddChapters from '@/components/AddChapters';
import { Chapter, Course, Lesson } from '@prisma/client';
import { createCourse } from '../../../../utils/createCourse';
import { useRouter } from 'next/navigation';

type Props = {};

export type TCourse = Omit<Omit<Course, 'chapters'>, 'id'>;
export type TLesson = Omit<Omit<Lesson, 'chapterId'>, 'id'> & { id: string };
export type TChapter = Omit<Omit<Chapter, 'courseId'>, 'id'> & {
  id: string;
  lessons: TLesson[];
};

const defaultCourseValues: TCourse = {
  description: '',
  price: 0,
  published: false,
  shortDescription: '',
  thumbnail: '',
  title: '',
};

function CreateCourse({}: Props) {
  const [courseDetails, setCourseDetails] =
    useState<TCourse>(defaultCourseValues);
  const [chapters, setChapters] = useState<TChapter[]>([]);
  const [courseData, setCourseData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const updateCourseDetails = (data: TCourse) => {
    setCourseDetails(data);
  };

  const updateChapters = (data: TChapter[]) => {
    setChapters(data);
  };

  const router = useRouter();

  useEffect(() => {
    const courseData = {
      ...courseDetails,
      chapters: chapters,
    };
    setCourseData(courseData);
  }, [courseDetails, chapters]);

  return (
    <div className="relative py-5 flex h-full w-full flex-col">
      {loading && (
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <div className="bg-white flex items-center gap-2 px-6 py-4 rounded-lg shadow-md border">
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-[26px] font-bold">Saving...</p>
          </div>
        </div>
      )}
      {/* <pre>{JSON.stringify(courseData, null, 2)}</pre> */}
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-[30px] font-medium">Create Course</h1>
        <div className="flex items-center gap-2">
          <Button
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              try {
                await createCourse(courseData);
                setLoading(false);
                router.push('/admin');
              } catch (er) {
                console.log(er);
              } finally {
                setLoading(false);
              }
            }}>
            Create
          </Button>
          <Link href="/admin">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <AddCourseDetails data={courseDetails} update={updateCourseDetails} />
        <AddChapters data={chapters} update={updateChapters} />
      </div>
    </div>
  );
}

export default CreateCourse;
