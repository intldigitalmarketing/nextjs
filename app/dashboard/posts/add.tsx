'use client';

import { useState } from 'react';
import FormikPost from './form';
import { PostField } from '@/app/lib/interface';

export default function AddPost() {
  const [modal, setModal] = useState(false);

  const post: PostField = {};

  function handleChange() {
    setModal(!modal);
  }

  return (
    <>
      <div>
        <button className="btn btn-primary btn-sm" onClick={handleChange}>
          Add
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
