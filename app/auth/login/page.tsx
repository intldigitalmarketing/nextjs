'use client';

import { LoginAction } from '@/actions/login';
import { Card } from 'flowbite-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { Formik, Form } from 'formik';
import FormControl from '@/components/dashboard/formik/form-control';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Button } from 'flowbite-react';
import { Suspense } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultFieldValue = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is mandatory'),
    password: Yup.string().required('Password is mandatory'),
  });

  const handleSubmit = async (
    values: { username: any; password: any },
    { setSubmitting, resetForm }: any,
  ) => {
    const callbackUrl = searchParams.get('callbackUrl');
    const redirectUrl = callbackUrl || DEFAULT_LOGIN_REDIRECT;

    const res = await LoginAction({
      username: values.username,
      password: values.password,
      redirectUrl: redirectUrl,
    });

    if (!res.error) {
      router.push(res);
    } else {
      toast.error(res.error);
    }

    resetForm();
    setSubmitting(false);
    return;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Card className="max-w-sm">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <Formik
            enableReinitialize={true}
            initialValues={defaultFieldValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className="grid gap-3">
                <FormControl
                  control="input"
                  type="text"
                  label="Username"
                  name="username"
                />
                <FormControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <div>
                  <Button
                    type="submit"
                    color="blue"
                    className="w-full"
                    disabled={formik.isSubmitting}
                  >
                    Signin
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  );
}
