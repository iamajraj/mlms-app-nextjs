import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {};

function NotFound({}: Props) {
  return (
    <div className="flex h-full items-center flex-col justify-center">
      <p className="text-[50px] font-bold leading-[70px]">Page Not Found</p>
      <p className="w-[500px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias
        minus nostrum tempora earum!
      </p>
      <Link href="/">
        <Button className="mt-5">Go Back</Button>
      </Link>
    </div>
  );
}

export default NotFound;
