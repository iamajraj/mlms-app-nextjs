import { Chapter, Course, Lesson } from '@prisma/client';

export type ICourse = Course & {
  chapters: (Omit<Chapter, 'courseId'> & {
    lessons: Omit<Lesson, 'chapterId'>[];
  })[];
};
