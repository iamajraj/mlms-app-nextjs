import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {};

function CreateCourse({}: Props) {
  return (
    <div className="py-5 flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-[30px] font-medium">Create Course</h1>
        <Link href="/admin">
          <Button>Back</Button>
        </Link>
      </div>

      <div></div>
    </div>
  );
}

export default CreateCourse;
