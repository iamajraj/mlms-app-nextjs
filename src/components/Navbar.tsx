'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {};

function Navbar({}: Props) {
  const { isSignedIn } = useAuth();

  return (
    <div className="border-b py-5 shadow-sm px-5 md:px-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-[22px] font-bold">
          MLms
        </Link>
        <div className="flex gap-10 items-center">
          <Link href="#">Home</Link>
          <Link href="#">Courses</Link>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
