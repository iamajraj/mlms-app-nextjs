import Link from 'next/link';
import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex items-center justify-between border-t shadow-sm py-5 px-20 mt-auto">
      <p className="text-[14px]">2023 &copy; MLms</p>
      <ul className="flex gap-4 items-center">
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
      </ul>
    </div>
  );
}

export default Footer;
