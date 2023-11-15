import React from 'react';
import { Button } from '@/components/ui/button';
import CourseCard from '../../../components/CourseCard';

type Props = {};

function AdminDashboard({}: Props) {
  return (
    <div className="py-5 flex h-full w-full flex-col">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-[30px]">Courses</h1>
        <Button>Create New</Button>
      </div>

      <div className="grid grid-cols-3 w-full h-full gap-5 py-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <CourseCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
