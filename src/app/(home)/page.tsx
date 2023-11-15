import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function Home() {
  return (
    <div className="relative flex items-center flex-col pt-20 h-full max-w-7xl mx-auto w-full">
      <div className="relative flex items-center flex-col gap-7">
        <img className="absolute -left-14 -top-10" src="/code.svg" />
        <h1 className="text-[60px] font-bold text-center leading-[60px]">
          <span className="text-blue-500">MLms</span> A Learning Platform
          <br />
          Dive to{' '}
          <span className="relative">
            improve
            <img
              className="absolute left-0 -bottom-4"
              src="/fun-underline.svg"
            />
          </span>
        </h1>
        <p className="w-full max-w-[500px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          amet molestiae magni totam.
        </p>
        <img className="absolute right-0 bottom-10" src="/two-lines.svg" />
      </div>
      <Link href="/courses" className="mt-4">
        <Button>Browse Courses</Button>
      </Link>

      <h2 className="mt-20 font-bold text-center leading-[36px] text-[36px]">
        Learn at your
        <br /> Own{' '}
        <span className="relative">
          Pace
          <img className="absolute left-0 -bottom-5" src="/fun-underline.svg" />
        </span>
      </h2>
      <img className="mt-10 h-72" src="/learning_sketching.svg" />
    </div>
  );
}
