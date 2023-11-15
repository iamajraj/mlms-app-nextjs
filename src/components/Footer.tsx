import Link from 'next/link';
import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="h-[70px] flex items-center justify-between border-t shadow-sm mt-14 py-5 px-20">
      <p className="text-[14px]">2023 &copy; MLms</p>
      <ul className="flex gap-4 items-center">
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
      </ul>
    </div>
  );
}

export default Footer;
