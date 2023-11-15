import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

async function AdminLayout({ children }: Props) {
  const user = await currentUser();

  if (!user || !user!.publicMetadata.isAdmin) {
    redirect('/');
  }

  return <div className="h-full max-w-6xl mx-auto w-full">{children}</div>;
}

export default AdminLayout;
