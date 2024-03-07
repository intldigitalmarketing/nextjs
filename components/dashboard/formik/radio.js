import { Field, ErrorMessage } from 'formik';
import TextError from './text-error';

function Radio(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="">
      <label
        htmlFor={name}
        className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div class="me-4 flex items-center">
                  <input
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label
                    htmlFor={option.key}
                    className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option.value}
                  </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
