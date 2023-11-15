import { PrismaClient } from '@prisma/client';
import { ICreateCourse, createCourse } from '../src/utils/createCourse';

const prisma = new PrismaClient();
const data: ICreateCourse = {
  title: 'My First Course',
  shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  price: 59.99,
  published: true,
  thumbnail: 'https://i.ytimg.com/vi/HVjjoMvutj4/maxresdefault.jpg',
  chapters: [
    {
      title: 'Chapter 1',
      description: 'my chapter one description is good',
      lessons: [
        {
          title: 'Chap1Les1',
          description: 'Chapter 1 lesson 1',
          length: '10min',
          videoUrl: 'https://www.youtube.com/watch?v=zjBx9ZgjPt4',
        },
        {
          title: 'Chap1Les2',
          description: 'Chapter 1 lesson 2',
          length: '9min',
          videoUrl: 'https://www.youtube.com/watch?v=XXIwkjRRB80',
        },
      ],
    },
    {
      title: 'Chapter 2',
      description: 'my chapter two description is well',
      lessons: [
        {
          title: 'Chap2Les1',
          description: 'Chapter 2 lesson 1',
          length: '8min',
          videoUrl: 'https://www.youtube.com/watch?v=zjBx9ZgjPt4',
        },
        {
          title: 'Chap2Les2',
          description: 'Chapter 2 lesson 2',
          length: '7min',
          videoUrl: 'https://www.youtube.com/watch?v=XXIwkjRRB80',
        },
      ],
    },
  ],
};

const main = async () => {
  await createCourse(data);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });
