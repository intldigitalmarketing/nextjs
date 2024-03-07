import { Formik, Form, FormikHelpers } from 'formik';
import FormControl from '@/app/components/dashboard/formik/form-control';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function FormikPost({ data, closeModal }) {
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
    const method = values._id === 0 ? 'POST' : 'PUT';
    const pathUrl = values._id === 0 ? '/posts' : '/posts/' + values._id;
    const fullUrl = process.env.DASHBOARD_BASE_URL_API + pathUrl;

    let messageSuccess, messageError;

    if (values._id === 0) {
      messageSuccess = 'The post is successfully created!';
      messageError = 'The post is unsuccessfully to create!';
    } else {
      messageSuccess = 'The post is successfully updated!';
      messageError = 'The post is unsuccessfully to update!';
    }

    try {
      delete values['_id'];

      const response = await fetch(fullUrl, {
        method: method,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast.error('Network response was not ok');
      }

      toast.success(messageSuccess);
    } catch (error) {
      toast.error(messageError);
    }

    closeModal();
    resetForm();
    router.refresh();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 dark:text-white">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="mb-5">
            <h3 className="text-lg font-bold">{modalTitle}</h3>
          </div>
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
                  <button
                    type="submit"
                    className={`btn btn-success ${
                      !formik.isValid ? 'not-allowed' : ''
                    }`}
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {formik.values._id === 0 ? 'Create' : 'Update'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
