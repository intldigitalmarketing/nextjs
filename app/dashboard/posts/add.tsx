'use client';

import { useState } from 'react';
import FormikPost from './form';
import { PostField } from '@/lib/interface';
import { Button } from 'flowbite-react';

export default function AddPost() {
  const [modal, setModal] = useState(false);

  const post: PostField = {};

  return (
    <>
      <div>
        <Button onClick={() => setModal(true)}>Add</Button>
        <FormikPost data={post} modal={modal} setModal={setModal} />
      </div>
    </>
  );
}
