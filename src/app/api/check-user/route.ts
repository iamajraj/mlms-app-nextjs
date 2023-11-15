import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { createDBUser } from '../../../utils/createDBUser';
import { getdbUser } from '../../../utils/getdbUser';
import { clerkClient } from '@clerk/nextjs';

export async function GET() {
  const user = await currentUser();
  if (!user) {
    throw redirect('/');
  }
  let dbUser = await getdbUser(user.id);
  if (!dbUser) {
    dbUser = await createDBUser(user.id, user.emailAddresses[0].emailAddress);
  }
  await clerkClient.users.updateUserMetadata(user.id, {
    publicMetadata: {
      isAdmin: dbUser.isAdmin,
    },
  });
  throw redirect('/');
}
