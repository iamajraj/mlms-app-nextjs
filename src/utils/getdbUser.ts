import prisma from '../../prisma/prisma';

export async function getdbUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}
