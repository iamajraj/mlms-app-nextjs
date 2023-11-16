import prisma from '../../prisma/prisma';

export async function createDBUser(id: string, email: string) {
  const user = await prisma.user.create({
    data: {
      id: id,
      email: email,
      isAdmin: true,
    },
  });
  return user;
}
