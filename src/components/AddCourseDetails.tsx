import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { TCourse } from '../app/(admin)/admin/create-course/page';

type Props = {
  update: (data: TCourse) => void;
  data: TCourse;
};

function AddCourseDetails({ update, data }: Props) {
  const updateCourse = (key: keyof TCourse, value: any) => {
    update({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <label>Title</label>
          <Input
            value={data.title}
            onChange={(e) => updateCourse('title', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Short Description</label>
          <Input
            value={data.shortDescription}
            onChange={(e) => updateCourse('shortDescription', e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label>Description</label>
        <Textarea
          value={data.description}
          onChange={(e) => updateCourse('description', e.target.value)}
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <div className="flex flex-col gap-2 w-full">
          <label>Price</label>
          <Input
            value={data.price}
            type="number"
            onChange={(e) => updateCourse('price', Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Thumbnail</label>
          <Input
            value={data.thumbnail}
            onChange={(e) => updateCourse('thumbnail', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCourseDetails;
