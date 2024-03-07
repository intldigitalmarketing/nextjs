'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostField } from '@/lib/interface';
import { toast } from 'react-toastify';

export default function DeletePost(post: PostField) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleDelete(postId: any) {
    const pathUrl = '/posts/' + postId;
    const fullUrl = process.env.DASHBOARD_BASE_URL_API + pathUrl;

    let messageSuccess = 'The post is successfully deleted!';
    let messageError = 'The post is unsuccessfully to delete!';

    try {
      const response = await fetch(fullUrl, {
        method: 'DELETE',
      });

      if (!response.ok) {
        toast.error('Network response was not ok');
      } else {
        toast.success(messageSuccess);
      }
    } catch (error) {
      toast.error(messageError);
    }

    handleChange;
    router.refresh();
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <>
      <div>
        <button className="btn btn-error btn-xs" onClick={handleChange}>
          Delete
        </button>
        <input
          type="checkbox"
          checked={modal}
          onChange={handleChange}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box bg-white text-black dark:bg-gray-800 dark:text-white">
            <button
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              onClick={handleChange}
            >
              ✕
            </button>
            <div className="grid gap-3">
              <div>
                <h3 className="text-lg font-bold">Delete #{post._id}</h3>
              </div>
              <div>
                <p>Are you sure want to delete this post?</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleDelete(post._id)}
                  className="btn btn-success"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
