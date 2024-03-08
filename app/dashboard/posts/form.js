import { Formik, Form } from 'formik';
import FormControl from '@/components/dashboard/formik/form-control';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Modal, Button } from 'flowbite-react';
import { savePost } from '@/actions/posts';

export default function FormikPost({ data, modal, setModal }) {
  const router = useRouter();

  const defaultFieldValue = {
    _id: data._id ?? 0,
    title: data.title ?? '',
    body: data.body ?? '',
  };

  const modalTitle =
    defaultFieldValue._id === 0 ? 'Add' : 'Edit #' + defaultFieldValue._id;

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is mandatory'),
    body: Yup.string().required('Body is mandatory'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let messageSuccess, messageError;

    if (values._id === 0) {
      messageSuccess = 'The post is successfully created!';
      messageError = 'The post is unsuccessfully to create!';
    } else {
      messageSuccess = 'The post is successfully updated!';
      messageError = 'The post is unsuccessfully to update!';
    }

    try {
      const response = await savePost(values);

      if (!response.ok) {
        toast.error('Network response was not ok');
      }

      toast.success(messageSuccess);
    } catch (error) {
      toast.error(messageError);
    }

    setModal(false);
    resetForm();
    router.refresh();
    setSubmitting();
  };

  return (
    <>
      <Modal show={modal} onClose={() => setModal(false)}>
        <Modal.Header>{modalTitle}</Modal.Header>
        <Modal.Body>
          <Formik
            enableReinitialize={true}
            initialValues={defaultFieldValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount
          >
            {(formik) => (
              <Form className="grid gap-3">
                <FormControl
                  control="input"
                  type="text"
                  label="Title"
                  name="title"
                />
                <FormControl
                  control="input"
                  type="text"
                  label="Body"
                  name="body"
                />
                <div>
                  <Button
                    type="submit"
                    className={`${!formik.isValid ? 'not-allowed' : ''}`}
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {formik.values._id === 0 ? 'Create' : 'Update'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
