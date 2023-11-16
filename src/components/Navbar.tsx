'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {};

function Navbar({}: Props) {
  const { isSignedIn, user } = useUser();

  return (
    <div className="border-b py-5 shadow-sm px-5 md:px-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-[22px] font-bold">
          MLms
        </Link>
        <div className="flex gap-10 items-center">
          <Link href="/">Home</Link>
          <Link href="/courses">Browse Course</Link>
          {user?.publicMetadata.isAdmin ? (
            <Link href="/admin">Admin</Link>
          ) : null}
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
