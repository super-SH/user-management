import React from 'react';
import UserForm from '../../ui/form/user-form';
import { Heading1 } from '@/app/ui/typography';
import { getRoles } from '@/lib/actions/role.action';

async function Page() {
  const { data: roles } = await getRoles();

  return (
    <>
      <Heading1 className='mb-4'>Create User</Heading1>

      <UserForm roles={roles} />
    </>
  );
}

export default Page;
