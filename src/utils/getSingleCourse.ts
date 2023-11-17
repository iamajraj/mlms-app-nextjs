import prisma from '../../prisma/prisma';

export async function getSingleCourse(id: number) {
  return await prisma.course.findFirst({
    include: {
      chapters: {
        include: {
          lessons: true,
        },
      },
    },
    where: {
      id: id,
    },
  });
}
