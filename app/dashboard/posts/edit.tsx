'use client';

import { useState } from 'react';
import FormikPost from './form';
import { PostField } from '@/lib/interface';
import { Button } from 'flowbite-react';

export default function EditPost(post: PostField) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <Button size="xs" onClick={() => setModal(true)}>
          Edit
        </Button>
        <FormikPost data={post} modal={modal} setModal={setModal} />
      </div>
    </>
  );
}
