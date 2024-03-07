'use client';

import { useState } from 'react';
import FormikPost from './form';
import { PostField } from '@/app/lib/interface';

export default function EditPost(post: PostField) {
  const [modal, setModal] = useState(false);

  function handleChange() {
    setModal(!modal);
  }

  return (
    <>
      <div>
        <button className="btn btn-warning btn-xs" onClick={handleChange}>
          Edit
        </button>
        <input
          type="checkbox"
          checked={modal}
          onChange={handleChange}
          className="modal-toggle"
        />
        <FormikPost data={post} closeModal={handleChange} />
      </div>
    </>
  );
}
