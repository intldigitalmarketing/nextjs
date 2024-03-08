'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostField } from '@/lib/interface';
import { toast } from 'react-toastify';
import { deletePost } from '@/actions/posts';
import { Modal, Button } from 'flowbite-react';

export default function DeletePost(post: PostField) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleDelete(postId: any) {
    let messageSuccess = 'The post is successfully deleted!';
    let messageError = 'The post is unsuccessfully to delete!';

    try {
      const response = await deletePost(postId);

      if (!response.ok) {
        toast.error('Network response was not ok');
      } else {
        toast.success(messageSuccess);
      }
    } catch (error) {
      toast.error(messageError);
    }

    setModal(false);
    router.refresh();
  }

  return (
    <>
      <Button size="xs" onClick={() => setModal(true)}>
        Delete
      </Button>
      <Modal show={modal} onClose={() => setModal(false)}>
        <Modal.Header>Delete #{post._id}</Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <p className="text-black dark:text-white">
              Are you sure want to delete this post?
            </p>
          </div>
          <Button type="button" onClick={() => handleDelete(post._id)}>
            Yes, Sure
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
