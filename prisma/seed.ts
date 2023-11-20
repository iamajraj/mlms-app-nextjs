import { ICreateCourse, createCourse } from '../src/utils/createCourse';

const data: ICreateCourse = {
  title: 'Web Development',
  shortDescription: 'Complete Full Stack Web Development Course',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  price: 59.99,
  published: true,
  thumbnail: 'https://steppingskills.in/store/1360/Certified%20Course.png',
  chapters: [
    {
      title: 'Overview',
      description: 'An overview of web development',
      lessons: [
        {
          title: 'HTML fundamentals',
          description:
            'In this lesson you will learn about the fundamentals of HTML',
          length: '15min',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          title: 'CSS fundamentals',
          description:
            'In this lesson you will learn about the fundamentals of CSS',
          length: '20min',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      ],
    },
    {
      title: 'Fundamentals of JavaScript',
      description: 'This chapter is all about the fundamentals of JavaScript',
      lessons: [
        {
          title: 'JavaScript History',
          description:
            'In this lesson you will get to know about the history of javascript and how it evolved.',
          length: '16min',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          title: 'Basic Syntax of JavaScript',
          description:
            'This lesson will teach you the basic syntax of JavaScript and how it works.',
          length: '25min',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
    console.log('✨ Seeded Course');
  })
  .catch(async (err) => {
    console.log('🔴 Seed error ', err);
    process.exit(1);
  });
