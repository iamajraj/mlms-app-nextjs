import prisma from '../../prisma/prisma';

export async function getCourses() {
  return await prisma.course.findMany({
    include: {
      chapters: {
        include: {
          lessons: true,
        },
      },
    },
  });
}
