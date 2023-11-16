'use server';

import prisma from '../../prisma/prisma';

interface ICreateLesson {
  title: string;
  description?: string;
  videoUrl: string;
  length: string;
}

interface ICreateChapter {
  title: string;
  description: string;
  lessons: ICreateLesson[];
}

interface ICreateCourse {
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  published: boolean;
  chapters: ICreateChapter[];
}

export async function createCourse(data: ICreateCourse) {
  const course = await prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      shortDescription: data.shortDescription,
      price: data.price,
      thumbnail: data.thumbnail,
      published: data.published,
      chapters: {
        createMany: {
          data: data.chapters.map((chapter) => ({
            title: chapter.title,
            description: chapter.description,
          })),
        },
      },
    },
    include: {
      chapters: true,
    },
  });
  for (let i = 0; i < course.chapters.length; i++) {
    await prisma.lesson.createMany({
      data: data.chapters[i].lessons.map((lesson) => {
        return {
          title: lesson.title,
          description: lesson.description,
          videoUrl: lesson.videoUrl,
          length: lesson.length,
          chapterId: course.chapters[i].id,
        };
      }),
    });
  }
}
